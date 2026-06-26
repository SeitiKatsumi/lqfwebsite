import { NextResponse } from "next/server";
import {
  addLeadMessage,
  classifyLeadStatus,
  getLead,
  getLeadMessages,
  getChatSettings,
  isLeadStatus,
  type LeadMessage,
  type LeadStatus,
  updateLeadStatus,
  updateLeadSummary
} from "@/lib/leadStore";
import { buildIrisSystemPrompt, buildLeadContext, buildWaitingForHumanMessage } from "@/lib/irisKnowledge";

export const runtime = "nodejs";

type ResponsesContent = {
  text?: string;
};

type ResponsesOutput = {
  content?: ResponsesContent[];
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 1800) : "";
}

function readOutputText(data: unknown) {
  const payload = data as { output_text?: unknown; output?: ResponsesOutput[] };

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

function irisJson(data: unknown, init?: ResponseInit) {
  const response = NextResponse.json(data, init);
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  return response;
}

function parsePipelineStatus(value: string): LeadStatus | null {
  const trimmed = value.trim();

  try {
    const parsed = JSON.parse(trimmed) as { status?: unknown };
    if (isLeadStatus(parsed.status)) return parsed.status;
  } catch {
    // Fall back to scanning the model text.
  }

  const match = trimmed.match(/em_atendimento_ia|solicitou_orcamento|solicitou_visita|solicitou_analise|outro_suporte|atendidos|improdutivos/);
  return match && isLeadStatus(match[0]) ? match[0] : null;
}

function conversationText(messages: LeadMessage[]) {
  return messages
    .slice(-14)
    .map((message) => `${message.role === "user" ? "Cliente" : "Atendimento"}: ${message.content}`)
    .join("\n");
}

async function classifyPipelineWithAi(input: { apiKey: string; messages: LeadMessage[] }) {
  const fallback = classifyLeadStatus(input.messages.map((message) => message.content).join("\n"));

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${input.apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        input: [
          {
            role: "system",
            content:
              "Classifique o objetivo atual do lead da LQF Farmacêutica usando o histórico da conversa. Responda apenas JSON válido no formato {\"status\":\"...\"}. Status permitidos: em_atendimento_ia, solicitou_orcamento, solicitou_visita, solicitou_analise, outro_suporte. Use solicitou_orcamento para pedido de preço, proposta ou cotação. Use solicitou_visita para visita, reunião ou agenda. Use solicitou_analise para desenvolvimento de produto, linha, fórmula, regularização, viabilidade ou análise técnica. Use outro_suporte para dúvidas gerais ou suporte. Use em_atendimento_ia quando ainda não houver objetivo claro."
          },
          { role: "user", content: conversationText(input.messages) }
        ],
        temperature: 0,
        max_output_tokens: 80
      })
    });

    if (!response.ok) return fallback;
    return parsePipelineStatus(readOutputText(await response.json())) ?? fallback;
  } catch {
    return fallback;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const leadId = clean(searchParams.get("leadId"));

  if (!leadId) {
    return irisJson({ error: "Atendimento não encontrado." }, { status: 400 });
  }

  const lead = getLead(leadId);
  if (!lead) {
    return irisJson({ error: "Atendimento não encontrado." }, { status: 404 });
  }

  return irisJson({
    lead,
    messages: getLeadMessages(leadId),
    aiEnabled: Boolean(lead.ai_enabled)
  });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const leadId = clean(body && typeof body === "object" ? (body as { leadId?: unknown }).leadId : "");
  const userMessage = clean(body && typeof body === "object" ? (body as { message?: unknown }).message : "");

  if (!leadId || !userMessage) {
    return irisJson({ error: "Atendimento não encontrado ou mensagem vazia." }, { status: 400 });
  }

  const lead = getLead(leadId);
  if (!lead) {
    return irisJson({ error: "Atendimento não encontrado." }, { status: 404 });
  }

  addLeadMessage({ leadId, role: "user", content: userMessage });

  const messages = getLeadMessages(leadId);
  updateLeadSummary(leadId, userMessage);

  const settings = getChatSettings();
  const apiKey = settings.openai_api_key || process.env.OPENAI_API_KEY;
  const canMovePipeline = lead.status !== "atendidos" && lead.status !== "improdutivos";
  const detectedStatus = canMovePipeline && apiKey && lead.ai_enabled ? await classifyPipelineWithAi({ apiKey, messages }) : classifyLeadStatus(userMessage);
  const updatedLead = detectedStatus && canMovePipeline ? updateLeadStatus(leadId, detectedStatus) ?? lead : lead;
  let assistantMessage = "";
  let mode: "ai" | "waiting_human" | "disabled" | "error" = "waiting_human";

  if (!updatedLead.ai_enabled) {
    mode = "disabled";
  } else if (apiKey) {
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
            { role: "system", content: buildIrisSystemPrompt(settings.additional_prompt) },
            { role: "system", content: buildLeadContext(updatedLead) },
            ...messages.slice(-14).map((message) => ({
              role: message.role,
              content: message.content
            }))
          ],
          temperature: 0.45,
          max_output_tokens: 700
        })
      });

      if (response.ok) {
        assistantMessage = readOutputText(await response.json());
        mode = assistantMessage ? "ai" : "error";
      } else {
        mode = "error";
      }
    } catch {
      mode = "error";
    }
  }

  if (!assistantMessage) {
    assistantMessage = buildWaitingForHumanMessage();
  }

  if (mode !== "disabled" && mode !== "waiting_human") {
    addLeadMessage({ leadId, role: "assistant", content: assistantMessage });
  }

  return irisJson({
    message: assistantMessage,
    mode,
    status: updatedLead.status
  });
}
