import { NextResponse } from "next/server";
import {
  addLeadMessage,
  classifyLeadStatus,
  getLead,
  getLeadMessages,
  updateLeadStatus,
  updateLeadSummary
} from "@/lib/leadStore";
import { buildFallbackReply, buildLeadContext, IRIS_SYSTEM_PROMPT } from "@/lib/irisKnowledge";

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

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const leadId = clean(body && typeof body === "object" ? (body as { leadId?: unknown }).leadId : "");
  const userMessage = clean(body && typeof body === "object" ? (body as { message?: unknown }).message : "");

  if (!leadId || !userMessage) {
    return NextResponse.json({ error: "Atendimento nao encontrado ou mensagem vazia." }, { status: 400 });
  }

  const lead = getLead(leadId);
  if (!lead) {
    return NextResponse.json({ error: "Atendimento nao encontrado." }, { status: 404 });
  }

  addLeadMessage({ leadId, role: "user", content: userMessage });

  const detectedStatus = classifyLeadStatus(userMessage);
  const canMovePipeline = lead.status !== "atendidos" && lead.status !== "improdutivos";
  const updatedLead = detectedStatus && canMovePipeline ? updateLeadStatus(leadId, detectedStatus) ?? lead : lead;
  const messages = getLeadMessages(leadId);
  updateLeadSummary(leadId, userMessage);

  const apiKey = process.env.OPENAI_API_KEY;
  let assistantMessage = "";
  let mode: "ai" | "fallback" = "fallback";

  if (apiKey) {
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
            { role: "system", content: IRIS_SYSTEM_PROMPT },
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
        mode = assistantMessage ? "ai" : "fallback";
      }
    } catch {
      mode = "fallback";
    }
  }

  if (!assistantMessage) {
    assistantMessage = buildFallbackReply(updatedLead, messages);
  }

  addLeadMessage({ leadId, role: "assistant", content: assistantMessage });

  return NextResponse.json({
    message: assistantMessage,
    mode,
    status: updatedLead.status
  });
}
