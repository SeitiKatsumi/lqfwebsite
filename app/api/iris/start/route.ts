import { chatJson, chatRequest, readChatBody, readVisitorId, chatConfig, chatError } from "@/lib/liveChat";

export const runtime = "nodejs";

export async function GET() {
  try {
    return chatJson({ storageKey: chatConfig().storageKey });
  } catch (error) {
    return chatError(error);
  }
}

export async function POST(request: Request) {
  try {
    const visitorId = readVisitorId(request);
    const body = await readChatBody(request);
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const whatsapp = typeof body.whatsapp === "string" ? body.whatsapp.trim() : "";
    if (!company || company.length > 160) {
      return chatJson({ error: "Informe o nome da empresa, com até 160 caracteres." }, 400);
    }
    if (!name || name.length > 120 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[+\d()\s.-]{8,30}$/.test(whatsapp)) {
      return chatJson({ error: "Informe nome, e-mail e WhatsApp válidos." }, 400);
    }
    await chatRequest("session", { visitorId, visitorName: name, whatsappNumber: whatsapp });
    return chatJson({ name });
  } catch (error) {
    return chatError(error);
  }
}
