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
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const whatsapp = typeof body.whatsapp === "string" ? body.whatsapp.trim() : "";
    if (!name || name.length > 120 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[+\d()\s.-]{8,30}$/.test(whatsapp)) {
      return chatJson({ error: "Informe nome, e-mail e WhatsApp válidos." }, 400);
    }
    await chatRequest("session", { visitorId, visitorName: name, whatsappNumber: whatsapp });
    return chatJson({ name });
  } catch (error) {
    return chatError(error);
  }
}
