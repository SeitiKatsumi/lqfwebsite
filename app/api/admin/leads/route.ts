import { NextResponse } from "next/server";
import {
  addLeadMessage,
  getLead,
  getPublicChatSettings,
  getLeadMessages,
  isLeadStatus,
  leadStatusLabels,
  leadStatuses,
  listContactSubmissions,
  listLeads,
  updateChatSettings,
  updateLeadAiEnabled,
  updateLeadStatus
} from "@/lib/leadStore";

export const runtime = "nodejs";

function isAuthorized(request: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return process.env.NODE_ENV !== "production";
  return request.headers.get("x-admin-key") === adminPassword;
}

function unauthorized() {
  return NextResponse.json({ error: "Acesso admin nao autorizado. Configure e informe ADMIN_PASSWORD." }, { status: 401 });
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) return unauthorized();

  const { searchParams } = new URL(request.url);
  const leadId = searchParams.get("leadId");

  if (leadId) {
    const lead = getLead(leadId);
    if (!lead) return NextResponse.json({ error: "Lead nao encontrado." }, { status: 404 });
    return NextResponse.json({ lead, messages: getLeadMessages(leadId), statuses: leadStatuses, labels: leadStatusLabels });
  }

  if (searchParams.get("type") === "contact") {
    return NextResponse.json({ submissions: listContactSubmissions() });
  }

  if (searchParams.get("type") === "settings") {
    return NextResponse.json({ settings: getPublicChatSettings() });
  }

  return NextResponse.json({ leads: listLeads(), statuses: leadStatuses, labels: leadStatusLabels, settings: getPublicChatSettings() });
}

export async function PATCH(request: Request) {
  if (!isAuthorized(request)) return unauthorized();

  const body = await request.json().catch(() => null);
  const leadId = typeof body?.leadId === "string" ? body.leadId : "";
  const action = typeof body?.action === "string" ? body.action : "status";

  if (action === "settings") {
    return NextResponse.json({
      settings: updateChatSettings({
        openaiApiKey: typeof body?.openaiApiKey === "string" ? body.openaiApiKey : undefined,
        additionalPrompt: typeof body?.additionalPrompt === "string" ? body.additionalPrompt : undefined,
        clearApiKey: Boolean(body?.clearApiKey)
      })
    });
  }

  if (action === "ai") {
    if (!leadId || typeof body?.enabled !== "boolean") {
      return NextResponse.json({ error: "Lead ou configuração de IA inválida." }, { status: 400 });
    }

    const lead = updateLeadAiEnabled(leadId, body.enabled);
    if (!lead) return NextResponse.json({ error: "Lead nao encontrado." }, { status: 404 });

    return NextResponse.json({ lead });
  }

  if (action === "message") {
    const content = typeof body?.content === "string" ? body.content.trim() : "";

    if (!leadId || !content) {
      return NextResponse.json({ error: "Lead ou mensagem inválida." }, { status: 400 });
    }

    const lead = getLead(leadId);
    if (!lead) return NextResponse.json({ error: "Lead nao encontrado." }, { status: 404 });

    addLeadMessage({ leadId, role: "assistant", content });
    return NextResponse.json({ lead: getLead(leadId), messages: getLeadMessages(leadId) });
  }

  const status = body?.status;

  if (!leadId || !isLeadStatus(status)) {
    return NextResponse.json({ error: "Lead ou status invalido." }, { status: 400 });
  }

  const lead = updateLeadStatus(leadId, status);
  if (!lead) return NextResponse.json({ error: "Lead nao encontrado." }, { status: 404 });

  return NextResponse.json({ lead });
}
