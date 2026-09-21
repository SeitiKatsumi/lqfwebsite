import { chatJson, chatRequest, readChatBody, readVisitorId, publicMessages, chatError } from "@/lib/liveChat";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const visitorId = readVisitorId(request);
    const data = await chatRequest(`messages/${visitorId}`);
    return chatJson({ messages: publicMessages(data.messages), isTyping: data.isTyping === true, assignedTo: data.assignedTo === "human" ? "human" : "ai" });
  } catch (error) {
    return chatError(error);
  }
}

export async function POST(request: Request) {
  try {
    const visitorId = readVisitorId(request);
    const body = await readChatBody(request);
    if (typeof body.message !== "string" || !body.message.trim() || body.message.length > 8000) {
      return chatJson({ error: "Envie uma mensagem de até 8.000 caracteres." }, 400);
    }
    await chatRequest("messages", { visitorId, content: body.message.trim(), messageType: "text" });
    return chatJson({ sent: true }, 201);
  } catch (error) {
    return chatError(error);
  }
}
