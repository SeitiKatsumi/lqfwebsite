import { NextResponse } from "next/server";
import { createContactSubmission } from "@/lib/leadStore";

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
  const company = clean(body && typeof body === "object" ? (body as { company?: unknown }).company : "");
  const email = clean(body && typeof body === "object" ? (body as { email?: unknown }).email : "");
  const whatsapp = clean(body && typeof body === "object" ? (body as { whatsapp?: unknown }).whatsapp : "");
  const projectType = clean(body && typeof body === "object" ? (body as { projectType?: unknown }).projectType : "");
  const category = clean(body && typeof body === "object" ? (body as { category?: unknown }).category : "");
  const hasFormula = clean(body && typeof body === "object" ? (body as { hasFormula?: unknown }).hasFormula : "");
  const hasPackaging = clean(body && typeof body === "object" ? (body as { hasPackaging?: unknown }).hasPackaging : "");
  const estimatedVolume = clean(body && typeof body === "object" ? (body as { estimatedVolume?: unknown }).estimatedVolume : "");
  const message = clean(body && typeof body === "object" ? (body as { message?: unknown }).message : "");

  if (!name || !email || !whatsapp || !projectType || !category || !hasFormula || !hasPackaging) {
    return NextResponse.json({ error: "Preencha os campos obrigatórios para enviar o projeto." }, { status: 400 });
  }

  if (!isEmail(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }

  const submission = createContactSubmission({
    name,
    company,
    email,
    whatsapp,
    projectType,
    category,
    hasFormula,
    hasPackaging,
    estimatedVolume,
    message
  });

  return NextResponse.json({
    submission,
    message: "Projeto enviado com sucesso. A equipe LQF entrará em contato."
  });
}
