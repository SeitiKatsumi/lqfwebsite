import { randomUUID } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

export const leadStatuses = [
  "em_atendimento_ia",
  "solicitou_orcamento",
  "solicitou_visita",
  "solicitou_analise",
  "outro_suporte",
  "atendidos",
  "improdutivos"
] as const;

export type LeadStatus = (typeof leadStatuses)[number];

export const leadStatusLabels: Record<LeadStatus, string> = {
  em_atendimento_ia: "Em atendimento IA",
  solicitou_orcamento: "Solicitou Orçamento",
  solicitou_visita: "Solicitou Visita",
  solicitou_analise: "Solicitou análise",
  outro_suporte: "Outro tipo de suporte",
  atendidos: "Atendidos",
  improdutivos: "Improdutivos"
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  status: LeadStatus;
  ai_enabled: number;
  summary: string | null;
  created_at: string;
  updated_at: string;
};

export type LeadWithStats = Lead & {
  message_count: number;
  last_message: string | null;
  last_message_at: string | null;
};

export type LeadMessage = {
  id: string;
  lead_id: string;
  role: "user" | "assistant";
  content: string;
  sender_name: string | null;
  created_at: string;
};

export type ContactSubmission = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  whatsapp: string;
  project_type: string;
  category: string;
  has_formula: string;
  has_packaging: string;
  estimated_volume: string | null;
  message: string | null;
  created_at: string;
};

export type ChatSettings = {
  openai_api_key: string;
  additional_prompt: string;
};

let database: DatabaseSync | null = null;

function now() {
  return new Date().toISOString();
}

function databasePath() {
  if (process.env.SQLITE_PATH?.trim()) {
    return process.env.SQLITE_PATH.trim();
  }

  if (process.env.NODE_ENV === "production") {
    return "/data/lqf-leads.sqlite";
  }

  return path.join(process.cwd(), "data", "lqf-leads.sqlite");
}

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getDb() {
  if (database) return database;

  const dbPath = databasePath();
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  database = new DatabaseSync(dbPath);
  database.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      whatsapp TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'em_atendimento_ia',
      summary TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS lead_messages (
      id TEXT PRIMARY KEY,
      lead_id TEXT NOT NULL,
      role TEXT NOT NULL,
      content TEXT NOT NULL,
      sender_name TEXT,
      created_at TEXT NOT NULL,
      FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_lead_messages_lead_id_created_at
      ON lead_messages(lead_id, created_at);
    CREATE INDEX IF NOT EXISTS idx_leads_status_updated_at
      ON leads(status, updated_at);

    CREATE TABLE IF NOT EXISTS contact_submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      company TEXT,
      email TEXT NOT NULL,
      whatsapp TEXT NOT NULL,
      project_type TEXT NOT NULL,
      category TEXT NOT NULL,
      has_formula TEXT NOT NULL,
      has_packaging TEXT NOT NULL,
      estimated_volume TEXT,
      message TEXT,
      created_at TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
      ON contact_submissions(created_at);

    CREATE TABLE IF NOT EXISTS chat_settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);

  const leadColumns = database.prepare("PRAGMA table_info(leads)").all() as Array<{ name: string }>;
  if (!leadColumns.some((column) => column.name === "ai_enabled")) {
    database.exec("ALTER TABLE leads ADD COLUMN ai_enabled INTEGER NOT NULL DEFAULT 1");
  }

  const messageColumns = database.prepare("PRAGMA table_info(lead_messages)").all() as Array<{ name: string }>;
  if (!messageColumns.some((column) => column.name === "sender_name")) {
    database.exec("ALTER TABLE lead_messages ADD COLUMN sender_name TEXT");
  }

  return database;
}

export function isLeadStatus(value: unknown): value is LeadStatus {
  return typeof value === "string" && leadStatuses.includes(value as LeadStatus);
}

export function createLead(input: { name: string; email: string; whatsapp: string }) {
  const db = getDb();
  const id = randomUUID();
  const createdAt = now();

  db.prepare(
    "INSERT INTO leads (id, name, email, whatsapp, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)"
  ).run(id, input.name, input.email, input.whatsapp, "em_atendimento_ia", createdAt, createdAt);

  return getLead(id);
}

export function getLead(id: string) {
  const lead = getDb().prepare("SELECT * FROM leads WHERE id = ?").get(id) as Lead | undefined;
  return lead ?? null;
}

export function updateLeadStatus(id: string, status: LeadStatus) {
  getDb().prepare("UPDATE leads SET status = ?, updated_at = ? WHERE id = ?").run(status, now(), id);
  return getLead(id);
}

export function updateLeadDetails(id: string, input: { name: string; email: string; whatsapp: string }) {
  getDb()
    .prepare("UPDATE leads SET name = ?, email = ?, whatsapp = ?, updated_at = ? WHERE id = ?")
    .run(input.name, input.email, input.whatsapp, now(), id);
  return getLead(id);
}

export function deleteLead(id: string) {
  const db = getDb();
  const lead = getLead(id);
  if (!lead) return false;

  db.prepare("DELETE FROM lead_messages WHERE lead_id = ?").run(id);
  db.prepare("DELETE FROM leads WHERE id = ?").run(id);
  return true;
}

export function updateLeadAiEnabled(id: string, enabled: boolean) {
  getDb().prepare("UPDATE leads SET ai_enabled = ?, updated_at = ? WHERE id = ?").run(enabled ? 1 : 0, now(), id);
  return getLead(id);
}

export function updateLeadSummary(id: string, summary: string) {
  getDb().prepare("UPDATE leads SET summary = ?, updated_at = ? WHERE id = ?").run(summary.slice(0, 500), now(), id);
}

export function addLeadMessage(input: { leadId: string; role: LeadMessage["role"]; content: string; senderName?: string }) {
  const db = getDb();
  const createdAt = now();

  db.prepare("INSERT INTO lead_messages (id, lead_id, role, content, sender_name, created_at) VALUES (?, ?, ?, ?, ?, ?)").run(
    randomUUID(),
    input.leadId,
    input.role,
    input.content,
    input.senderName?.trim() || null,
    createdAt
  );
  db.prepare("UPDATE leads SET updated_at = ? WHERE id = ?").run(createdAt, input.leadId);
}

export function getLeadMessages(leadId: string) {
  return getDb()
    .prepare("SELECT * FROM lead_messages WHERE lead_id = ? ORDER BY created_at ASC")
    .all(leadId) as LeadMessage[];
}

export function listLeads() {
  return getDb()
    .prepare(
      `
      SELECT
        leads.*,
        COUNT(lead_messages.id) AS message_count,
        (
          SELECT content FROM lead_messages lm
          WHERE lm.lead_id = leads.id
          ORDER BY lm.created_at DESC
          LIMIT 1
        ) AS last_message,
        (
          SELECT created_at FROM lead_messages lm
          WHERE lm.lead_id = leads.id
          ORDER BY lm.created_at DESC
          LIMIT 1
        ) AS last_message_at
      FROM leads
      LEFT JOIN lead_messages ON lead_messages.lead_id = leads.id
      GROUP BY leads.id
      ORDER BY leads.updated_at DESC
      `
    )
    .all() as LeadWithStats[];
}

export function classifyLeadStatus(message: string): LeadStatus | null {
  const value = normalizeText(message);

  if (/(orcamento|cotacao|preco|valor|proposta)/i.test(value)) return "solicitou_orcamento";
  if (/(visita|agendar|agenda|reuniao|conhecer a estrutura)/i.test(value)) return "solicitou_visita";
  if (/(analise|avaliar|formula|regularizacao|anvisa|documentacao)/i.test(value)) {
    return "solicitou_analise";
  }
  if (/(suporte|duvida|ajuda|problema|atendimento)/i.test(value)) return "outro_suporte";

  return null;
}

export function createContactSubmission(input: {
  name: string;
  company?: string;
  email: string;
  whatsapp: string;
  projectType: string;
  category: string;
  hasFormula: string;
  hasPackaging: string;
  estimatedVolume?: string;
  message?: string;
}) {
  const db = getDb();
  const id = randomUUID();
  const createdAt = now();

  db.prepare(
    `
    INSERT INTO contact_submissions (
      id, name, company, email, whatsapp, project_type, category, has_formula,
      has_packaging, estimated_volume, message, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
  ).run(
    id,
    input.name,
    input.company || null,
    input.email,
    input.whatsapp,
    input.projectType,
    input.category,
    input.hasFormula,
    input.hasPackaging,
    input.estimatedVolume || null,
    input.message || null,
    createdAt
  );

  return getContactSubmission(id);
}

export function getContactSubmission(id: string) {
  const submission = getDb().prepare("SELECT * FROM contact_submissions WHERE id = ?").get(id) as ContactSubmission | undefined;
  return submission ?? null;
}

export function listContactSubmissions() {
  return getDb()
    .prepare("SELECT * FROM contact_submissions ORDER BY created_at DESC")
    .all() as ContactSubmission[];
}

export function getSetting(key: keyof ChatSettings) {
  const row = getDb().prepare("SELECT value FROM chat_settings WHERE key = ?").get(key) as { value: string } | undefined;
  return row?.value ?? "";
}

export function setSetting(key: keyof ChatSettings, value: string) {
  getDb()
    .prepare(
      `
      INSERT INTO chat_settings (key, value) VALUES (?, ?)
      ON CONFLICT(key) DO UPDATE SET value = excluded.value
      `
    )
    .run(key, value);
}

export function getChatSettings(): ChatSettings {
  return {
    openai_api_key: getSetting("openai_api_key"),
    additional_prompt: getSetting("additional_prompt")
  };
}

export function getPublicChatSettings() {
  const settings = getChatSettings();
  const apiKey = settings.openai_api_key || process.env.OPENAI_API_KEY || "";
  return {
    hasApiKey: Boolean(apiKey),
    apiKeyLast4: apiKey ? apiKey.slice(-4) : "",
    additionalPrompt: settings.additional_prompt,
    storagePath: databasePath()
  };
}

export function updateChatSettings(input: { openaiApiKey?: string; additionalPrompt?: string; clearApiKey?: boolean }) {
  if (input.clearApiKey) {
    setSetting("openai_api_key", "");
  } else if (typeof input.openaiApiKey === "string" && input.openaiApiKey.trim()) {
    setSetting("openai_api_key", input.openaiApiKey.trim());
  }

  if (typeof input.additionalPrompt === "string") {
    setSetting("additional_prompt", input.additionalPrompt.trim());
  }

  return getPublicChatSettings();
}
