import { NextResponse } from "next/server";
import { addLeadMessage, createLead } from "@/lib/leadStore";

export const runtime = "nodejs";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = clean(body && typeof body === "object" ? (body as { name?: unknown }).name : "");
  const email = clean(body && typeof body === "object" ? (body as { email?: unknown }).email : "");
  const whatsapp = clean(body && typeof body === "object" ? (body as { whatsapp?: unknown }).whatsapp : "");

  if (!name || !email || !whatsapp) {
    return NextResponse.json({ error: "Informe nome, e-mail e WhatsApp para iniciar." }, { status: 400 });
  }

  if (!isEmail(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }

  const lead = createLead({ name, email, whatsapp });

  if (!lead) {
    return NextResponse.json({ error: "Nao foi possivel iniciar o atendimento." }, { status: 500 });
  }

  const message = `Perfeito, ${lead.name}. Ja registrei seu contato. Agora me conte: voce quer desenvolver uma linha, pedir orcamento, agendar visita ou tirar uma duvida tecnica?`;
  addLeadMessage({ leadId: lead.id, role: "assistant", content: message });

  return NextResponse.json({ lead, message });
}
