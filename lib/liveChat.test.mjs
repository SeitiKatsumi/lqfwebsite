import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { chatConfig, readVisitorId, readChatBody, publicMessages, chatRequest, chatError } from "./liveChat.ts";

process.env.LIVECHAT_BASE_URL = "https://chat.example.com";
process.env.LIVECHAT_TENANT_SLUG = "tenant-a";
const first = chatConfig();
process.env.LIVECHAT_TENANT_SLUG = "tenant-b";
assert.notEqual(first.storageKey, chatConfig().storageKey);
assert.throws(() => readVisitorId(new Request("https://site.example.com")), (error) => error.status === 400);
const visitorId = randomUUID();
assert.equal(readVisitorId(new Request("https://site.example.com", { headers: { "X-Visitor-Id": visitorId } })), visitorId);
const body = (value, origin = "https://site.example.com") => new Request("https://site.example.com/api/iris", { method: "POST", headers: { origin, "Content-Type": "application/json" }, body: value });
assert.deepEqual(await readChatBody(body('{"message":"Olá"}')), { message: "Olá" });
await assert.rejects(readChatBody(body("{}", "https://other.example.com")), (error) => error.status === 403);
await assert.rejects(readChatBody(body("x".repeat(65537))), (error) => error.status === 413);
await assert.rejects(readChatBody(body("[]")), (error) => error.status === 400);
assert.deepEqual(publicMessages([
  { id: 1, senderType: "human", messageType: "text", content: "Olá", visibility: "public", metadata: { secret: true } },
  { id: 2, senderType: "human", messageType: "text", content: "nota privada", visibility: "private" },
  { id: 3, senderType: "system", messageType: "text", content: "interno" }
]), [{ id: "1", role: "assistant", content: "Olá", sender_name: "Equipe" }]);
const originalFetch = globalThis.fetch;
globalThis.fetch = async (url, options) => {
  assert.equal(url, "https://chat.example.com/api/widget/tenant-b/messages");
  assert.equal(options.cache, "no-store");
  assert.deepEqual(JSON.parse(options.body), { visitorId, content: "Olá", messageType: "text" });
  return Response.json({ id: 10 }, { status: 201 });
};
assert.deepEqual(await chatRequest("messages", { visitorId, content: "Olá", messageType: "text" }), { id: 10 });
globalThis.fetch = async () => new Response("private upstream details", { status: 500 });
await assert.rejects(chatRequest("session", {}), (error) => error.status === 502);
assert.equal(chatError(new Error("secret")).status, 503);
globalThis.fetch = originalFetch;
console.log("Live Chat checks passed: tenant isolation, bearer validation, origin/body limits, private-message filtering, proxy and errors.");
