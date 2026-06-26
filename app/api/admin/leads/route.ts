import { NextResponse } from "next/server";
import {
  addLeadMessage,
  deleteLead,
  getLead,
  getLeadMessages,
  getPublicChatSettings,
  isLeadStatus,
  leadStatusLabels,
  leadStatuses,
  listContactSubmissions,
  listLeads,
  updateChatSettings,
  updateLeadAiEnabled,
  updateLeadDetails,
  updateLeadStatus
} from "@/lib/leadStore";

export const runtime = "nodejs";

function isAuthorized(request: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return process.env.NODE_ENV !== "production";
  return request.headers.get("x-admin-key") === adminPassword;
}

function adminJson(data: unknown, init?: ResponseInit) {
  const response = NextResponse.json(data, init);
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");
  return response;
}

function unauthorized() {
  return adminJson({ error: "Acesso admin nao autorizado. Configure e informe ADMIN_PASSWORD." }, { status: 401 });
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) return unauthorized();

  const { searchParams } = new URL(request.url);
  const leadId = searchParams.get("leadId");

  if (leadId) {
    const lead = getLead(leadId);
    if (!lead) return adminJson({ error: "Lead nao encontrado." }, { status: 404 });
    return adminJson({ lead, messages: getLeadMessages(leadId), statuses: leadStatuses, labels: leadStatusLabels });
  }

  if (searchParams.get("type") === "contact") {
    return adminJson({ submissions: listContactSubmissions() });
  }

  if (searchParams.get("type") === "settings") {
    return adminJson({ settings: getPublicChatSettings() });
  }

  return adminJson({ leads: listLeads(), statuses: leadStatuses, labels: leadStatusLabels, settings: getPublicChatSettings() });
}

export async function PATCH(request: Request) {
  if (!isAuthorized(request)) return unauthorized();

  const body = await request.json().catch(() => null);
  const leadId = typeof body?.leadId === "string" ? body.leadId : "";
  const action = typeof body?.action === "string" ? body.action : "status";

  if (action === "settings") {
    return adminJson({
      settings: updateChatSettings({
        openaiApiKey: typeof body?.openaiApiKey === "string" ? body.openaiApiKey : undefined,
        additionalPrompt: typeof body?.additionalPrompt === "string" ? body.additionalPrompt : undefined,
        clearApiKey: Boolean(body?.clearApiKey)
      })
    });
  }

  if (action === "ai") {
    if (!leadId || typeof body?.enabled !== "boolean") {
      return adminJson({ error: "Lead ou configuracao de IA invalida." }, { status: 400 });
    }

    const lead = updateLeadAiEnabled(leadId, body.enabled);
    if (!lead) return adminJson({ error: "Lead nao encontrado." }, { status: 404 });

    return adminJson({ lead });
  }

  if (action === "edit") {
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const whatsapp = typeof body?.whatsapp === "string" ? body.whatsapp.trim() : "";

    if (!leadId || !name || !email || !whatsapp) {
      return adminJson({ error: "Nome, e-mail e WhatsApp sao obrigatorios." }, { status: 400 });
    }

    const lead = updateLeadDetails(leadId, { name, email, whatsapp });
    if (!lead) return adminJson({ error: "Lead nao encontrado." }, { status: 404 });

    return adminJson({ lead, messages: getLeadMessages(leadId) });
  }

  if (action === "delete") {
    if (!leadId) return adminJson({ error: "Lead invalido." }, { status: 400 });
    const deleted = deleteLead(leadId);
    if (!deleted) return adminJson({ error: "Lead nao encontrado." }, { status: 404 });
    return adminJson({ deleted: true });
  }

  if (action === "message") {
    const content = typeof body?.content === "string" ? body.content.trim() : "";
    const senderName = typeof body?.senderName === "string" ? body.senderName.trim() : "";

    if (!leadId || !content) {
      return adminJson({ error: "Lead ou mensagem invalida." }, { status: 400 });
    }

    const lead = getLead(leadId);
    if (!lead) return adminJson({ error: "Lead nao encontrado." }, { status: 404 });

    addLeadMessage({ leadId, role: "assistant", content, senderName });
    return adminJson({ lead: getLead(leadId), messages: getLeadMessages(leadId) });
  }

  const status = body?.status;

  if (!leadId || !isLeadStatus(status)) {
    return adminJson({ error: "Lead ou status invalido." }, { status: 400 });
  }

  const lead = updateLeadStatus(leadId, status);
  if (!lead) return adminJson({ error: "Lead nao encontrado." }, { status: 404 });

  return adminJson({ lead });
}
