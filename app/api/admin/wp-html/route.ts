import { NextResponse } from "next/server";
import { getChatSettings } from "@/lib/leadStore";
import { fallbackWordpressBlock, wordpressPages } from "@/lib/wordpressHtmlTemplates";

export const runtime = "nodejs";

function isAuthorized(request: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return process.env.NODE_ENV !== "production";
  return request.headers.get("x-admin-key") === adminPassword;
}

function adminJson(data: unknown, init?: ResponseInit) {
  const response = NextResponse.json(data, init);
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  return response;
}

function readOutputText(data: unknown) {
  const payload = data as { output_text?: unknown; output?: Array<{ content?: Array<{ text?: string }> }> };

  if (typeof payload.output_text === "string" && payload.output_text.trim()) {
    return payload.output_text.trim();
  }

  return (
    payload.output
      ?.flatMap((item) => item.content ?? [])
      .map((content) => content.text)
      .filter((text): text is string => Boolean(text?.trim()))
      .join("\n")
      .trim() ?? ""
  );
}

function cleanHtml(value: string) {
  return value
    .replace(/^```html\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return adminJson({ error: "Acesso admin nao autorizado." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const page = typeof body?.page === "string" ? body.page : "home";
  const prompt = typeof body?.prompt === "string" ? body.prompt.trim().slice(0, 2400) : "";
  const selectedPage = wordpressPages.find((item) => item.slug === page) ?? wordpressPages[0];
  const fallback = fallbackWordpressBlock({ page: selectedPage.slug, prompt });
  const settings = getChatSettings();
  const apiKey = settings.openai_api_key || process.env.OPENAI_API_KEY;

  if (!apiKey || !prompt) {
    return adminJson({ html: fallback, source: "fallback" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        input: [
          {
            role: "system",
            content:
              "Voce gera blocos HTML premium para colar no widget HTML do Elementor. Responda somente HTML completo do bloco, com CSS escopado dentro de <style>. Nao use markdown. Mantenha a linguagem da LQF Farmaceutica: minimalista, sofisticada, institucional, farmaceutica, cosmeticos e dermocosmeticos. Use classes prefixadas por lqf-el-. Nao use scripts externos. Nao invente promessas de preco, prazo, lote minimo ou aprovacao regulatoria."
          },
          {
            role: "user",
            content: `Pagina base: ${selectedPage.label}\nTitulo SEO: ${selectedPage.title}\nDescricao: ${selectedPage.description}\nPaginas do site: ${wordpressPages
              .map((item) => `${item.label}: ${item.url}`)
              .join(", ")}\nPedido do bloco: ${prompt}`
          }
        ],
        temperature: 0.35,
        max_output_tokens: 2600
      })
    });

    if (!response.ok) {
      return adminJson({ html: fallback, source: "fallback" });
    }

    const html = cleanHtml(readOutputText(await response.json()));
    return adminJson({ html: html || fallback, source: html ? "ai" : "fallback" });
  } catch {
    return adminJson({ html: fallback, source: "fallback" });
  }
}
