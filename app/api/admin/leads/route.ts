import { NextResponse } from "next/server";
import {
  getLead,
  getLeadMessages,
  isLeadStatus,
  leadStatusLabels,
  leadStatuses,
  listContactSubmissions,
  listLeads,
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

  return NextResponse.json({ leads: listLeads(), statuses: leadStatuses, labels: leadStatusLabels });
}

export async function PATCH(request: Request) {
  if (!isAuthorized(request)) return unauthorized();

  const body = await request.json().catch(() => null);
  const leadId = typeof body?.leadId === "string" ? body.leadId : "";
  const status = body?.status;

  if (!leadId || !isLeadStatus(status)) {
    return NextResponse.json({ error: "Lead ou status invalido." }, { status: 400 });
  }

  const lead = updateLeadStatus(leadId, status);
  if (!lead) return NextResponse.json({ error: "Lead nao encontrado." }, { status: 404 });

  return NextResponse.json({ lead });
}
