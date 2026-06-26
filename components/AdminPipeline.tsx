"use client";

import { useEffect, useMemo, useState } from "react";
import { FileText, Loader2, Lock, MessageCircle, RefreshCw } from "lucide-react";

type LeadStatus =
  | "em_atendimento_ia"
  | "solicitou_orcamento"
  | "solicitou_visita"
  | "solicitou_analise"
  | "outro_suporte"
  | "atendidos"
  | "improdutivos";

type Lead = {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  status: LeadStatus;
  summary: string | null;
  updated_at: string;
  message_count: number;
  last_message: string | null;
};

type LeadMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
};

type ContactSubmission = {
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

const statuses: LeadStatus[] = [
  "em_atendimento_ia",
  "solicitou_orcamento",
  "solicitou_visita",
  "solicitou_analise",
  "outro_suporte",
  "atendidos",
  "improdutivos"
];

const labels: Record<LeadStatus, string> = {
  em_atendimento_ia: "Em atendimento IA",
  solicitou_orcamento: "Solicitou Orçamento",
  solicitou_visita: "Solicitou Visita",
  solicitou_analise: "Solicitou análise",
  outro_suporte: "Outro tipo de suporte",
  atendidos: "Atendidos",
  improdutivos: "Improdutivos"
};

export function AdminPipeline() {
  const [adminKey, setAdminKey] = useState("");
  const [savedKey, setSavedKey] = useState("");
  const [activeView, setActiveView] = useState<"iris" | "forms">("iris");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [messages, setMessages] = useState<LeadMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem("lqf-admin-key") || "";
    setSavedKey(stored);
    setAdminKey(stored);
  }, []);

  useEffect(() => {
    if (savedKey) void loadAll(savedKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedKey]);

  const grouped = useMemo(
    () =>
      statuses.map((status) => ({
        status,
        leads: leads.filter((lead) => lead.status === status)
      })),
    [leads]
  );

  async function loadAll(key = savedKey) {
    if (!key) return;
    setLoading(true);
    setError("");

    try {
      const [leadResponse, contactResponse] = await Promise.all([
        fetch("/api/admin/leads", { headers: { "x-admin-key": key } }),
        fetch("/api/admin/leads?type=contact", { headers: { "x-admin-key": key } })
      ]);
      const leadData = (await leadResponse.json()) as { leads?: Lead[]; error?: string };
      const contactData = (await contactResponse.json()) as { submissions?: ContactSubmission[]; error?: string };

      if (!leadResponse.ok) {
        setError(leadData.error || "Acesso não autorizado.");
        return;
      }

      setLeads(leadData.leads || []);
      setSubmissions(contactData.submissions || []);
    } catch {
      setError("Não foi possível carregar o admin.");
    } finally {
      setLoading(false);
    }
  }

  async function openLead(lead: Lead) {
    setSelectedLead(lead);
    setSelectedSubmission(null);
    setMessages([]);

    const response = await fetch(`/api/admin/leads?leadId=${lead.id}`, { headers: { "x-admin-key": savedKey } });
    const data = (await response.json()) as { messages?: LeadMessage[] };
    setMessages(data.messages || []);
  }

  async function updateStatus(leadId: string, status: LeadStatus) {
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-key": savedKey },
      body: JSON.stringify({ leadId, status })
    });
    await loadAll();
    setSelectedLead((current) => (current && current.id === leadId ? { ...current, status } : current));
  }

  function unlock() {
    window.localStorage.setItem("lqf-admin-key", adminKey);
    setSavedKey(adminKey);
  }

  if (!savedKey) {
    return (
      <section className="section-shell min-h-svh py-32">
        <div className="mx-auto max-w-md rounded-[28px] border border-graphite/10 bg-white p-6 shadow-soft">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-stone/14 text-graphite">
            <Lock className="h-5 w-5" />
          </div>
          <h1 className="mt-6 text-3xl font-light text-graphite">Admin LQF</h1>
          <p className="mt-3 text-sm leading-6 text-graphite/66">Informe a chave configurada em ADMIN_PASSWORD para acessar o pipeline e os formulários.</p>
          <input
            value={adminKey}
            onChange={(event) => setAdminKey(event.target.value)}
            type="password"
            placeholder="Chave de acesso"
            className="mt-6 h-12 w-full rounded-2xl border border-graphite/10 px-4 text-sm outline-none focus:border-stone"
          />
          <button onClick={unlock} className="mt-4 h-12 w-full rounded-full bg-graphite text-sm font-medium text-white">
            Acessar
          </button>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-svh bg-white pt-28">
      <section className="section-shell pb-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Admin</p>
            <h1 className="mt-3 text-5xl font-light text-graphite md:text-7xl">Atendimento LQF</h1>
          </div>
          <button
            onClick={() => loadAll()}
            className="flex h-11 items-center gap-2 rounded-full border border-graphite/10 px-4 text-sm text-graphite/72 transition hover:bg-porcelain"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            Atualizar
          </button>
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveView("iris")}
            className={`flex h-11 items-center gap-2 rounded-full px-5 text-sm transition ${
              activeView === "iris" ? "bg-graphite text-white" : "border border-graphite/10 text-graphite/70 hover:bg-porcelain"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Pipeline Iris
          </button>
          <button
            onClick={() => setActiveView("forms")}
            className={`flex h-11 items-center gap-2 rounded-full px-5 text-sm transition ${
              activeView === "forms" ? "bg-graphite text-white" : "border border-graphite/10 text-graphite/70 hover:bg-porcelain"
            }`}
          >
            <FileText className="h-4 w-4" />
            Formulários ({submissions.length})
          </button>
        </div>
        {error && <p className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      </section>

      {activeView === "iris" ? (
        <section className="overflow-x-auto px-5 pb-10 sm:px-8 lg:px-12">
          <div className="grid min-w-[1320px] grid-cols-7 gap-3">
            {grouped.map((column) => (
              <div key={column.status} className="rounded-[24px] border border-graphite/10 bg-porcelain/58 p-3">
                <div className="mb-3 flex items-center justify-between gap-2 px-1">
                  <h2 className="text-sm font-medium text-graphite">{labels[column.status]}</h2>
                  <span className="rounded-full bg-white px-2 py-1 text-xs text-graphite/55">{column.leads.length}</span>
                </div>
                <div className="grid gap-3">
                  {column.leads.map((lead) => (
                    <button
                      key={lead.id}
                      onClick={() => openLead(lead)}
                      className="rounded-[20px] border border-graphite/8 bg-white p-4 text-left shadow-[0_12px_34px_rgba(63,63,59,0.05)] transition hover:-translate-y-0.5 hover:shadow-soft"
                    >
                      <p className="text-sm font-medium text-graphite">{lead.name}</p>
                      <p className="mt-1 truncate text-xs text-graphite/55">{lead.whatsapp}</p>
                      <p className="mt-3 line-clamp-3 text-xs leading-5 text-graphite/62">{lead.last_message || "Sem mensagem recente"}</p>
                      <p className="mt-3 text-[0.68rem] uppercase text-ash">{lead.message_count} mensagens</p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="section-shell grid gap-4 pb-12 md:grid-cols-2 xl:grid-cols-3">
          {submissions.map((submission) => (
            <button
              key={submission.id}
              onClick={() => {
                setSelectedSubmission(submission);
                setSelectedLead(null);
              }}
              className="rounded-[24px] border border-graphite/10 bg-porcelain/55 p-5 text-left transition hover:-translate-y-0.5 hover:bg-white hover:shadow-soft"
            >
              <p className="text-sm font-medium text-graphite">{submission.name}</p>
              <p className="mt-1 text-xs text-graphite/55">{submission.email}</p>
              <p className="mt-4 text-lg font-light text-graphite">{submission.category}</p>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-graphite/64">{submission.message || "Sem mensagem adicional."}</p>
            </button>
          ))}
        </section>
      )}

      {selectedLead && (
        <aside className="fixed inset-y-0 right-0 z-[90] flex w-full max-w-[520px] flex-col border-l border-graphite/10 bg-white shadow-[0_0_80px_rgba(63,63,59,0.16)]">
          <div className="border-b border-graphite/10 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Lead Iris</p>
                <h2 className="mt-2 text-3xl font-light text-graphite">{selectedLead.name}</h2>
                <p className="mt-3 text-sm leading-6 text-graphite/62">
                  {selectedLead.email}
                  <br />
                  {selectedLead.whatsapp}
                </p>
              </div>
              <button onClick={() => setSelectedLead(null)} className="rounded-full border border-graphite/10 px-4 py-2 text-sm">
                Fechar
              </button>
            </div>
            <select
              value={selectedLead.status}
              onChange={(event) => updateStatus(selectedLead.id, event.target.value as LeadStatus)}
              className="mt-5 h-12 w-full rounded-2xl border border-graphite/10 bg-porcelain px-4 text-sm outline-none"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {labels[status]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto bg-porcelain/54 p-5">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[84%] rounded-[20px] px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-graphite text-white" : "bg-white text-graphite/76"}`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </aside>
      )}

      {selectedSubmission && (
        <aside className="fixed inset-y-0 right-0 z-[90] w-full max-w-[520px] overflow-y-auto border-l border-graphite/10 bg-white p-6 shadow-[0_0_80px_rgba(63,63,59,0.16)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow">Formulário</p>
              <h2 className="mt-2 text-3xl font-light text-graphite">{selectedSubmission.name}</h2>
            </div>
            <button onClick={() => setSelectedSubmission(null)} className="rounded-full border border-graphite/10 px-4 py-2 text-sm">
              Fechar
            </button>
          </div>
          <div className="mt-8 grid gap-4 text-sm text-graphite/70">
            <Info label="Empresa" value={selectedSubmission.company || "-"} />
            <Info label="E-mail" value={selectedSubmission.email} />
            <Info label="WhatsApp" value={selectedSubmission.whatsapp} />
            <Info label="Tipo de projeto" value={selectedSubmission.project_type} />
            <Info label="Categoria" value={selectedSubmission.category} />
            <Info label="Possui fórmula?" value={selectedSubmission.has_formula} />
            <Info label="Possui embalagem?" value={selectedSubmission.has_packaging} />
            <Info label="Volume estimado" value={selectedSubmission.estimated_volume || "-"} />
            <Info label="Mensagem" value={selectedSubmission.message || "-"} large />
          </div>
        </aside>
      )}
    </main>
  );
}

function Info({ label, value, large = false }: { label: string; value: string; large?: boolean }) {
  return (
    <div className="rounded-[20px] border border-graphite/10 bg-porcelain/60 p-4">
      <p className="text-xs uppercase text-ash">{label}</p>
      <p className={`mt-2 text-graphite/75 ${large ? "leading-7" : ""}`}>{value}</p>
    </div>
  );
}
