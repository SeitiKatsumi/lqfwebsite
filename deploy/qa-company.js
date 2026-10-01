// Run after opening localhost:3100 with playwright-cli:
// playwright-cli run-code --filename deploy/qa-company.js
async (page) => {
  const base = new URL(page.url()).origin;
  const headers = { Origin: base, "X-Visitor-Id": "d7fe4a0d-d060-423f-891e-9e7aa39d0d22" };
  const data = { name: "Teste QA", email: "qa@example.com", whatsapp: "+12025550199" };
  for (const company of [undefined, "   ", "a".repeat(161)]) {
    const response = await page.request.post(`${base}/api/iris/start`, { headers, data: { ...data, company } });
    if (response.status() !== 400) throw new Error("API accepted an invalid company");
  }
  let started = false;
  let introduction = "";
  await page.route("**/api/iris/start", async (route) => {
    if (route.request().method() === "GET") return route.fulfill({ json: { storageKey: "company-qa" } });
    const body = route.request().postDataJSON();
    if (body.company !== "Empresa QA") throw new Error("Missing company in session request");
    started = true;
    await route.fulfill({ json: { name: body.name } });
  });
  await page.route("**/api/iris", async (route) => {
    if (route.request().method() === "POST") introduction = route.request().postDataJSON().message;
    await route.fulfill({ json: route.request().method() === "GET" ? { messages: [], isTyping: false, assignedTo: "ai" } : { sent: true } });
  });
  await page.reload();
  await page.getByRole("button", { name: "Abrir assistente Iris" }).click();
  await page.getByRole("textbox", { name: "Nome", exact: true }).fill(data.name);
  await page.getByRole("textbox", { name: "E-mail", exact: true }).fill(data.email);
  await page.getByRole("textbox", { name: "WhatsApp", exact: true }).fill(data.whatsapp);
  const companyInput = page.getByRole("textbox", { name: "Nome da empresa", exact: true });
  await page.getByRole("button", { name: "Iniciar atendimento" }).click();
  if (started || await companyInput.evaluate((input) => input.validity.valid)) throw new Error("Company must be required");
  await companyInput.fill("Empresa QA");
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 660 }]) {
    await page.setViewportSize(viewport);
    await page.getByRole("button", { name: "Iniciar atendimento" }).scrollIntoViewIfNeeded();
    if (await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)) throw new Error("Horizontal overflow");
    await page.screenshot({ path: `qa-screenshots/company-${viewport.width}.png` });
  }
  await page.getByRole("button", { name: "Iniciar atendimento" }).click();
  await page.getByRole("textbox", { name: "Mensagem", exact: true }).waitFor();
  if (!started || !introduction.includes("\nEmpresa: Empresa QA\n")) throw new Error("Company did not reach the conversation");
  console.log("Company checks passed: validation, required form, session payload, initial message, desktop and mobile.");
}
