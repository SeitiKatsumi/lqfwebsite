import { createHash } from "node:crypto";

export function chatConfig() {
  const base = new URL(process.env.LIVECHAT_BASE_URL || "");
  const tenant = process.env.LIVECHAT_TENANT_SLUG || "";
  if (base.protocol !== "https:" || base.username || base.password || !/^[a-z0-9-]+$/.test(tenant)) throw new Error("Invalid chat configuration");
  const url = `${base.origin}${base.pathname.replace(/\/$/, "")}/api/widget/${tenant}`;
  return { url, storageKey: `webchat:${createHash("sha256").update(url).digest("hex").slice(0, 24)}` };
}

export function chatJson(data: unknown, status = 200) {
  return Response.json(data, { status, headers: { "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" } });
}

export function chatError(error: unknown) {
  return error instanceof Response ? error : chatJson({ error: "Não foi possível conectar ao atendimento. Tente novamente em instantes." }, 503);
}

export function readVisitorId(request: Request) {
  const id = request.headers.get("X-Visitor-Id") || "";
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
    throw chatJson({ error: "Sessão de atendimento inválida." }, 400);
  }
  return id;
}

// ponytail: per-process limit; use a shared store if the site gains multiple replicas.
const attempts = new Map<string, { count: number; until: number }>();

export async function readChatBody(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host") || new URL(request.url).host;
  if (!origin || new URL(origin).host !== host || request.headers.get("sec-fetch-site") === "cross-site") {
    throw chatJson({ error: "Origem não permitida." }, 403);
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) throw chatJson({ error: "Formato inválido." }, 415);
  const now = Date.now();
  for (const [key, value] of attempts) if (value.until <= now) attempts.delete(key);
  const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const attempt = attempts.get(ip) || { count: 0, until: now + 60_000 };
  attempts.set(ip, attempt);
  if (++attempt.count > 30) throw chatJson({ error: "Aguarde um minuto antes de enviar mais mensagens." }, 429);
  const reader = request.body?.getReader();
  if (!reader) throw chatJson({ error: "Dados inválidos." }, 400);
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > 65536) {
      await reader.cancel();
      throw chatJson({ error: "Mensagem muito grande." }, 413);
    }
    chunks.push(value);
  }
  try {
    const body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error();
    return body as Record<string, unknown>;
  } catch {
    throw chatJson({ error: "Dados inválidos." }, 400);
  }
}

export async function chatRequest(path: string, body?: Record<string, unknown>) {
  const response = await fetch(`${chatConfig().url}/${path}`, {
    method: body ? "POST" : "GET",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
    signal: AbortSignal.timeout(20_000)
  });
  if (!response.ok) throw chatJson({ error: response.status === 429 ? "Aguarde um minuto e tente novamente." : "Não foi possível concluir a solicitação. Tente novamente em instantes." }, response.status === 429 ? 429 : 502);
  return response.json();
}

export function publicMessages(input: unknown) {
  if (!Array.isArray(input)) throw new Error("Invalid messages");
  return input.filter((message) => message && (message.visibility === undefined || message.visibility === "public") && ["client", "ai", "human"].includes(message.senderType) && message.messageType === "text" && typeof message.content === "string")
    .map((message) => ({ id: String(message.id), role: message.senderType === "client" ? "user" : "assistant", content: message.content, sender_name: message.senderType === "human" ? "Equipe" : undefined }));
}
