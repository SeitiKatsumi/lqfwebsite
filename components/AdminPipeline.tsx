"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Bot, Code2, FileText, KeyRound, Loader2, Lock, LogOut, MessageCircle, Pencil, RefreshCw, Send, Sparkles, Trash2, UserPlus } from "lucide-react";
import { WordpressHtmlGenerator } from "@/components/WordpressHtmlGenerator";

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
  ai_enabled: number;
  summary: string | null;
  updated_at: string;
  message_count: number;
  last_message: string | null;
};

type LeadMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sender_name: string | null;
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

type ChatSettings = {
  hasApiKey: boolean;
  apiKeyLast4?: string;
  additionalPrompt: string;
  storagePath?: string;
};

type AdminUser = {
  id: string;
  username: string;
  name: string;
  photo: string | null;
  created_at: string;
  updated_at: string;
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
  const [adminUsername, setAdminUsername] = useState("admin");
  const [savedKey, setSavedKey] = useState("");
  const [savedUsername, setSavedUsername] = useState("");
  const [activeView, setActiveView] = useState<"iris" | "forms" | "settings" | "wordpress">("iris");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [settings, setSettings] = useState<ChatSettings>({ hasApiKey: false, additionalPrompt: "" });
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([]);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [usingMasterPassword, setUsingMasterPassword] = useState(false);
  const [profileDraft, setProfileDraft] = useState({ name: "", photo: "", password: "" });
  const [newUserDraft, setNewUserDraft] = useState({ username: "", name: "", password: "", photo: "" });
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [promptInput, setPromptInput] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [messages, setMessages] = useState<LeadMessage[]>([]);
  const [manualMessage, setManualMessage] = useState("");
  const [attendantName, setAttendantName] = useState("");
  const [attendantPhoto, setAttendantPhoto] = useState("");
  const [editingLead, setEditingLead] = useState(false);
  const [leadDraft, setLeadDraft] = useState({ name: "", email: "", whatsapp: "" });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("lqf-admin-key") || "";
    const storedUsername = window.localStorage.getItem("lqf-admin-username") || "";
    const storedAttendant = window.localStorage.getItem("lqf-attendant-name") || "";
    const storedAttendantPhoto = window.localStorage.getItem("lqf-attendant-photo") || "";
    setSavedKey(stored);
    setSavedUsername(storedUsername);
    setAdminKey(stored);
    setAdminUsername(storedUsername || "admin");
    setAttendantName(storedAttendant);
    setAttendantPhoto(storedAttendantPhoto);
  }, []);

  useEffect(() => {
    if (savedKey) void loadAll(savedKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedKey]);

  useEffect(() => {
    setPromptInput(settings.additionalPrompt || "");
  }, [settings.additionalPrompt]);

  useEffect(() => {
    if (!savedKey) return;

    const interval = window.setInterval(() => {
      void loadAll(savedKey, true);
      if (selectedLead?.id) void refreshSelectedLead(selectedLead.id, true);
    }, 30000);

    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedKey, selectedLead?.id]);

  useEffect(() => {
    if (!selectedLead) return;
    messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages, selectedLead]);

  const grouped = useMemo(
    () =>
      statuses.map((status) => ({
        status,
        leads: leads.filter((lead) => lead.status === status)
      })),
    [leads]
  );

  function authHeaders() {
    return {
      "x-admin-key": savedKey,
      "x-admin-username": savedUsername,
      "x-admin-password": savedKey
    };
  }

  async function loadAll(key = savedKey, silent = false) {
    if (!key) return;
    if (!silent) {
      setLoading(true);
      setError("");
    }

    try {
      const [leadResponse, contactResponse, settingsResponse] = await Promise.all([
        fetch("/api/admin/leads", { headers: { ...authHeaders(), "x-admin-key": key, "x-admin-password": key }, cache: "no-store" }),
        fetch("/api/admin/leads?type=contact", { headers: { ...authHeaders(), "x-admin-key": key, "x-admin-password": key }, cache: "no-store" }),
        fetch("/api/admin/leads?type=settings", { headers: { ...authHeaders(), "x-admin-key": key, "x-admin-password": key }, cache: "no-store" })
      ]);
      const leadData = (await leadResponse.json()) as { leads?: Lead[]; error?: string; settings?: ChatSettings; currentUser?: AdminUser };
      const contactData = (await contactResponse.json()) as { submissions?: ContactSubmission[] };
      const settingsData = (await settingsResponse.json()) as { settings?: ChatSettings };
      const usersResponse = await fetch("/api/admin/leads?type=users", { headers: { ...authHeaders(), "x-admin-key": key, "x-admin-password": key }, cache: "no-store" });
      const usersData = (await usersResponse.json().catch(() => ({}))) as { users?: AdminUser[]; currentUser?: AdminUser; usingMasterPassword?: boolean };

      if (!leadResponse.ok) {
        if (silent) return;
        setError(leadData.error || "Acesso não autorizado.");
        return;
      }

      const nextLeads = leadData.leads || [];
      setLeads(nextLeads);
      setSelectedLead((current) => (current ? nextLeads.find((lead) => lead.id === current.id) ?? current : current));
      setSubmissions(contactData.submissions || []);
      setSettings(settingsData.settings || leadData.settings || { hasApiKey: false, additionalPrompt: "" });
      setAdminUsers(usersData.users || []);
      setCurrentUser(usersData.currentUser || leadData.currentUser || null);
      setUsingMasterPassword(Boolean(usersData.usingMasterPassword));
      if (usersData.currentUser) {
        setProfileDraft((current) => ({
          name: current.name || usersData.currentUser?.name || "",
          photo: current.photo || usersData.currentUser?.photo || "",
          password: ""
        }));
      }
    } catch {
      if (!silent) setError("Nao foi possivel carregar o admin.");
    } finally {
      if (!silent) setLoading(false);
    }
  }

  async function openLead(lead: Lead) {
    setSelectedLead(lead);
    setSelectedSubmission(null);
    setMessages([]);
    setManualMessage("");
    setEditingLead(false);
    setLeadDraft({ name: lead.name, email: lead.email, whatsapp: lead.whatsapp });

    await refreshSelectedLead(lead.id);
  }

  async function refreshSelectedLead(leadId: string, silent = false) {
    const response = await fetch(`/api/admin/leads?leadId=${leadId}`, { headers: authHeaders(), cache: "no-store" });

    if (response.status === 404) {
      setSelectedLead(null);
      setMessages([]);
      if (!silent) setError("Lead nÃ£o encontrado.");
      return;
    }

    const data = (await response.json()) as { lead?: Lead; messages?: LeadMessage[] };
    if (data.lead) {
      setSelectedLead(data.lead);
      if (!editingLead) {
        setLeadDraft({ name: data.lead.name, email: data.lead.email, whatsapp: data.lead.whatsapp });
      }
    }
    setMessages(data.messages || []);
  }

  async function updateStatus(leadId: string, status: LeadStatus) {
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({ leadId, status })
    });
    await loadAll();
    setSelectedLead((current) => (current && current.id === leadId ? { ...current, status } : current));
  }

  async function updateLeadAi(enabled: boolean) {
    if (!selectedLead) return;

    const response = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({ action: "ai", leadId: selectedLead.id, enabled })
    });
    const data = (await response.json()) as { lead?: Lead };
    if (data.lead) {
      setSelectedLead(data.lead);
      await loadAll();
    }
  }

  async function sendManualMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedLead || !manualMessage.trim()) return;

    updateAttendantName(attendantName.trim());
    const response = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({ action: "message", leadId: selectedLead.id, content: manualMessage, senderName: attendantName })
    });
    const data = (await response.json()) as { messages?: LeadMessage[] };
    setMessages(data.messages || messages);
    setManualMessage("");
    await loadAll();
  }

  function updateAttendantName(value: string) {
    setAttendantName(value);
    window.localStorage.setItem("lqf-attendant-name", value);
  }

  function handleAttendantPhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      setAttendantPhoto(result);
      window.localStorage.setItem("lqf-attendant-photo", result);
    };
    reader.readAsDataURL(file);
  }

  function removeAttendantPhoto() {
    setAttendantPhoto("");
    window.localStorage.removeItem("lqf-attendant-photo");
  }

  function handleProfilePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      setProfileDraft((current) => ({ ...current, photo: result }));
    };
    reader.readAsDataURL(file);
  }

  async function saveLeadDetails(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedLead) return;

    const response = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({ action: "edit", leadId: selectedLead.id, ...leadDraft })
    });
    const data = (await response.json()) as { lead?: Lead; messages?: LeadMessage[]; error?: string };

    if (!response.ok) {
      setError(data.error || "Não foi possível editar o lead.");
      return;
    }

    if (data.lead) setSelectedLead(data.lead);
    if (data.messages) setMessages(data.messages);
    setEditingLead(false);
    await loadAll();
  }

  async function deleteSelectedLead() {
    if (!selectedLead) return;
    const confirmed = window.confirm("Excluir este lead e todo o histórico da conversa?");
    if (!confirmed) return;

    const response = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({ action: "delete", leadId: selectedLead.id })
    });

    if (!response.ok) {
      setError("Não foi possível excluir o lead.");
      return;
    }

    setSelectedLead(null);
    setMessages([]);
    await loadAll();
  }

  async function saveSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");

    try {
      const response = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify({
          action: "settings",
          openaiApiKey: apiKeyInput,
          additionalPrompt: promptInput
        })
      });
      const data = (await response.json()) as { settings?: ChatSettings; error?: string };

      if (!response.ok) {
        setError(data.error || "Não foi possível salvar as configurações.");
        return;
      }

      setSettings(data.settings || settings);
      setApiKeyInput("");
    } finally {
      setSaving(false);
    }
  }

  async function clearApiKey() {
    setSaving(true);
    const response = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({ action: "settings", clearApiKey: true, additionalPrompt: promptInput })
    });
    const data = (await response.json()) as { settings?: ChatSettings };
    setSettings(data.settings || { hasApiKey: false, additionalPrompt: promptInput });
    setSaving(false);
  }

  function unlock() {
    window.localStorage.setItem("lqf-admin-username", adminUsername.trim().toLowerCase());
    window.localStorage.setItem("lqf-admin-key", adminKey);
    setSavedUsername(adminUsername.trim().toLowerCase());
    setSavedKey(adminKey);
  }

  function logout() {
    window.localStorage.removeItem("lqf-admin-key");
    window.localStorage.removeItem("lqf-admin-username");
    setSavedKey("");
    setSavedUsername("");
    setAdminKey("");
    setLeads([]);
    setSubmissions([]);
    setSelectedLead(null);
    setMessages([]);
    setError("");
  }

  async function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");

    try {
      const response = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify({ action: "profile", ...profileDraft })
      });
      const data = (await response.json()) as { user?: AdminUser; users?: AdminUser[]; error?: string };

      if (!response.ok) {
        setError(data.error || "Nao foi possivel salvar o perfil.");
        return;
      }

      if (data.user) {
        setCurrentUser(data.user);
        setProfileDraft({ name: data.user.name, photo: data.user.photo || "", password: "" });
        updateAttendantName(data.user.name);
      }
      if (data.users) setAdminUsers(data.users);

      if (profileDraft.password.trim()) {
        window.localStorage.setItem("lqf-admin-key", profileDraft.password.trim());
        setSavedKey(profileDraft.password.trim());
        setAdminKey(profileDraft.password.trim());
      }
    } finally {
      setSaving(false);
    }
  }

  async function createUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");

    try {
      const response = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify({ action: "create_user", ...newUserDraft })
      });
      const data = (await response.json()) as { users?: AdminUser[]; error?: string };

      if (!response.ok) {
        setError(data.error || "Nao foi possivel criar o usuario.");
        return;
      }

      setAdminUsers(data.users || []);
      setNewUserDraft({ username: "", name: "", password: "", photo: "" });
    } finally {
      setSaving(false);
    }
  }

  if (!savedKey) {
    return (
      <section className="section-shell min-h-svh py-32">
        <div className="mx-auto max-w-md rounded-[28px] border border-graphite/10 bg-white p-6 shadow-soft">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-stone/14 text-graphite">
            <Lock className="h-5 w-5" />
          </div>
          <h1 className="mt-6 text-3xl font-light text-graphite">Admin LQF</h1>
          <p className="mt-3 text-sm leading-6 text-graphite/66">Entre com seu usuário admin. Para recuperar acesso, use usuário admin e a senha mestra ADMIN_PASSWORD.</p>
          <input
            value={adminUsername}
            onChange={(event) => setAdminUsername(event.target.value)}
            placeholder="Usuário"
            className="mt-6 h-12 w-full rounded-2xl border border-graphite/10 px-4 text-sm outline-none focus:border-stone"
          />
          <input
            value={adminKey}
            onChange={(event) => setAdminKey(event.target.value)}
            type="password"
            placeholder="Senha"
            className="mt-3 h-12 w-full rounded-2xl border border-graphite/10 px-4 text-sm outline-none focus:border-stone"
          />
          <button onClick={unlock} className="mt-4 h-12 w-full rounded-full bg-graphite text-sm font-medium text-white">
            Acessar
          </button>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-svh bg-white pt-12">
      <section className="section-shell pb-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Admin</p>
            <h1 className="mt-3 text-5xl font-light text-graphite md:text-7xl">Atendimento LQF</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => loadAll()}
              className="flex h-11 items-center gap-2 rounded-full border border-graphite/10 px-4 text-sm text-graphite/72 transition hover:bg-porcelain"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
              Atualizar
            </button>
            <button
              onClick={logout}
              className="flex h-11 items-center gap-2 rounded-full border border-graphite/10 px-4 text-sm text-graphite/72 transition hover:bg-porcelain"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          <TabButton active={activeView === "iris"} onClick={() => setActiveView("iris")} icon={<MessageCircle className="h-4 w-4" />}>
            Pipeline Iris
          </TabButton>
          <TabButton active={activeView === "forms"} onClick={() => setActiveView("forms")} icon={<FileText className="h-4 w-4" />}>
            Formulários ({submissions.length})
          </TabButton>
          <TabButton active={activeView === "settings"} onClick={() => setActiveView("settings")} icon={<KeyRound className="h-4 w-4" />}>
            Configurações Iris
          </TabButton>
          <TabButton active={activeView === "wordpress"} onClick={() => setActiveView("wordpress")} icon={<Code2 className="h-4 w-4" />}>
            Wordpress HTML Generator
          </TabButton>
        </div>
        {error && <p className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      </section>

      {activeView === "iris" && (
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
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-graphite">{lead.name}</p>
                        <span className={`rounded-full px-2 py-1 text-[0.65rem] ${lead.ai_enabled ? "bg-emerald-50 text-emerald-700" : "bg-stone/12 text-graphite/55"}`}>
                          {lead.ai_enabled ? "IA" : "Humano"}
                        </span>
                      </div>
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
      )}

      {activeView === "forms" && (
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

      {activeView === "settings" && (
        <section className="section-shell max-w-4xl pb-12">
          <form onSubmit={saveSettings} className="rounded-[28px] border border-graphite/10 bg-porcelain/60 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-graphite">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-graphite">Agente Iris</h2>
                <p className="text-sm text-graphite/60">A Iris usa o conteúdo do site como contexto e este prompt adicional como orientação.</p>
              </div>
            </div>
            <div className="mt-8 grid gap-5 rounded-[24px] border border-graphite/10 bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-porcelain text-sm font-medium text-graphite/60">
                  {profileDraft.photo ? <img src={profileDraft.photo} alt="" className="h-full w-full object-cover" /> : (profileDraft.name.trim().charAt(0) || currentUser?.name?.charAt(0) || "A")}
                </div>
                <div>
                  <p className="text-sm font-medium text-graphite">Meu perfil de admin</p>
                  <p className="text-xs text-graphite/50">
                    {currentUser?.username || savedUsername || "admin"} {usingMasterPassword ? "(senha mestra)" : ""}
                  </p>
                </div>
              </div>
              <form onSubmit={saveProfile} className="grid gap-4">
                <label className="grid gap-2 text-sm text-graphite/70">
                  Nome
                  <input
                    value={profileDraft.name}
                    onChange={(event) => setProfileDraft((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Seu nome"
                    className="h-11 rounded-2xl border border-graphite/10 bg-porcelain px-4 text-sm outline-none focus:border-stone"
                  />
                </label>
                <label className="grid gap-2 text-sm text-graphite/70">
                  Nova senha
                  <input
                    value={profileDraft.password}
                    onChange={(event) => setProfileDraft((current) => ({ ...current, password: event.target.value }))}
                    type="password"
                    placeholder={usingMasterPassword ? "Crie um usuario para trocar senha propria" : "Deixe vazio para manter a atual"}
                    disabled={usingMasterPassword}
                    className="h-11 rounded-2xl border border-graphite/10 bg-porcelain px-4 text-sm outline-none focus:border-stone disabled:opacity-50"
                  />
                </label>
                <div className="flex flex-wrap gap-2">
                  <label className="grid h-11 cursor-pointer place-items-center rounded-full border border-graphite/10 px-5 text-sm text-graphite/70 transition hover:bg-porcelain">
                    Foto do perfil
                    <input type="file" accept="image/*" onChange={handleProfilePhotoChange} className="sr-only" disabled={usingMasterPassword} />
                  </label>
                  <button type="submit" disabled={saving || usingMasterPassword} className="h-11 rounded-full bg-graphite px-5 text-sm font-medium text-white disabled:opacity-50">
                    Salvar perfil
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-8 grid gap-5 rounded-[24px] border border-graphite/10 bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-porcelain text-graphite">
                  <UserPlus className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-graphite">Criar novos usuários</p>
                  <p className="text-xs text-graphite/50">Use para dar acesso individual ao admin sem depender da senha mestra.</p>
                </div>
              </div>
              <form onSubmit={createUser} className="grid gap-3 md:grid-cols-3">
                <input
                  value={newUserDraft.username}
                  onChange={(event) => setNewUserDraft((current) => ({ ...current, username: event.target.value }))}
                  placeholder="usuario"
                  className="h-11 rounded-2xl border border-graphite/10 bg-porcelain px-4 text-sm outline-none focus:border-stone"
                />
                <input
                  value={newUserDraft.name}
                  onChange={(event) => setNewUserDraft((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Nome"
                  className="h-11 rounded-2xl border border-graphite/10 bg-porcelain px-4 text-sm outline-none focus:border-stone"
                />
                <input
                  value={newUserDraft.password}
                  onChange={(event) => setNewUserDraft((current) => ({ ...current, password: event.target.value }))}
                  type="password"
                  placeholder="Senha"
                  className="h-11 rounded-2xl border border-graphite/10 bg-porcelain px-4 text-sm outline-none focus:border-stone"
                />
                <button type="submit" disabled={saving} className="h-11 rounded-full bg-graphite px-5 text-sm font-medium text-white disabled:opacity-50 md:col-span-3">
                  Criar usuário
                </button>
              </form>
              {adminUsers.length > 0 && (
                <div className="grid gap-2">
                  {adminUsers.map((user) => (
                    <div key={user.id} className="flex items-center gap-3 rounded-2xl bg-porcelain px-4 py-3 text-sm text-graphite/70">
                      <div className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-white text-xs font-medium">
                        {user.photo ? <img src={user.photo} alt="" className="h-full w-full object-cover" /> : user.name.charAt(0)}
                      </div>
                      <span className="font-medium text-graphite">{user.name}</span>
                      <span className="text-graphite/45">@{user.username}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-8 rounded-[24px] border border-graphite/10 bg-white p-5">
              <p className="text-sm font-medium text-graphite">Perfil do atendente</p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-full bg-porcelain text-sm font-medium text-graphite/60">
                  {attendantPhoto ? <img src={attendantPhoto} alt="" className="h-full w-full object-cover" /> : (attendantName.trim().charAt(0) || "I")}
                </div>
                <label className="grid min-w-[240px] flex-1 gap-2 text-sm text-graphite/70">
                  Nome que aparece no chat
                  <input
                    value={attendantName}
                    onChange={(event) => updateAttendantName(event.target.value)}
                    placeholder="Ex.: Camila - Equipe LQF"
                    className="h-11 rounded-2xl border border-graphite/10 bg-porcelain px-4 text-sm outline-none focus:border-stone"
                  />
                </label>
                <div className="flex flex-wrap gap-2">
                  <label className="grid h-11 cursor-pointer place-items-center rounded-full border border-graphite/10 px-5 text-sm text-graphite/70 transition hover:bg-porcelain">
                    Foto
                    <input type="file" accept="image/*" onChange={handleAttendantPhotoChange} className="sr-only" />
                  </label>
                  {attendantPhoto && (
                    <button type="button" onClick={removeAttendantPhoto} className="h-11 rounded-full border border-graphite/10 px-5 text-sm text-graphite/70">
                      Remover
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-5">
              <label className="grid gap-2 text-sm text-graphite/70">
                OpenAI API Key
                <input
                  value={apiKeyInput}
                  onChange={(event) => setApiKeyInput(event.target.value)}
                  type="password"
                  placeholder={settings.hasApiKey ? "Chave configurada. Digite uma nova para substituir." : "sk-..."}
                  className="h-12 rounded-2xl border border-graphite/10 bg-white px-4 text-sm outline-none focus:border-stone"
                />
              </label>
              <label className="grid gap-2 text-sm text-graphite/70">
                Prompt adicional
                <textarea
                  value={promptInput}
                  onChange={(event) => setPromptInput(event.target.value)}
                  placeholder="Ex.: priorize atendimento para marcas que buscam private label; peça categoria, volume e etapa atual do projeto."
                  className="min-h-44 rounded-2xl border border-graphite/10 bg-white px-4 py-3 text-sm leading-6 outline-none focus:border-stone"
                />
              </label>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" disabled={saving} className="flex h-12 items-center gap-2 rounded-full bg-graphite px-6 text-sm font-medium text-white disabled:opacity-55">
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                Salvar agente
              </button>
              {settings.hasApiKey && (
                <button type="button" onClick={clearApiKey} className="h-12 rounded-full border border-graphite/10 px-6 text-sm text-graphite/70">
                  Remover chave
                </button>
              )}
            </div>
            <p className="mt-5 text-sm text-graphite/58">
              Status da chave: {settings.hasApiKey ? `configurada${settings.apiKeyLast4 ? ` (final ${settings.apiKeyLast4})` : ""}` : "não configurada"}.
              Sem chave, a Iris registra a conversa e aguarda resposta humana.
            </p>
            {settings.storagePath && <p className="mt-2 text-xs text-graphite/42">Banco em uso: {settings.storagePath}</p>}
          </form>
        </section>
      )}

      {activeView === "wordpress" && <WordpressHtmlGenerator authHeaders={authHeaders()} />}

      {selectedLead && (
        <aside className="fixed inset-y-0 right-0 z-[90] flex w-full max-w-[560px] flex-col border-l border-graphite/10 bg-white shadow-[0_0_80px_rgba(63,63,59,0.16)]">
          <div className="border-b border-graphite/10 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Lead Iris</p>
                {!editingLead ? (
                  <>
                    <h2 className="mt-2 text-3xl font-light text-graphite">{selectedLead.name}</h2>
                    <p className="mt-3 text-sm leading-6 text-graphite/62">
                      {selectedLead.email}
                      <br />
                      {selectedLead.whatsapp}
                    </p>
                  </>
                ) : (
                  <form onSubmit={saveLeadDetails} className="mt-3 grid gap-2">
                    <input
                      value={leadDraft.name}
                      onChange={(event) => setLeadDraft((current) => ({ ...current, name: event.target.value }))}
                      className="h-10 rounded-2xl border border-graphite/10 bg-porcelain px-3 text-sm outline-none focus:border-stone"
                      placeholder="Nome"
                    />
                    <input
                      value={leadDraft.email}
                      onChange={(event) => setLeadDraft((current) => ({ ...current, email: event.target.value }))}
                      className="h-10 rounded-2xl border border-graphite/10 bg-porcelain px-3 text-sm outline-none focus:border-stone"
                      placeholder="E-mail"
                    />
                    <input
                      value={leadDraft.whatsapp}
                      onChange={(event) => setLeadDraft((current) => ({ ...current, whatsapp: event.target.value }))}
                      className="h-10 rounded-2xl border border-graphite/10 bg-porcelain px-3 text-sm outline-none focus:border-stone"
                      placeholder="WhatsApp"
                    />
                    <div className="flex gap-2">
                      <button type="submit" className="h-9 rounded-full bg-graphite px-4 text-xs font-medium text-white">
                        Salvar
                      </button>
                      <button type="button" onClick={() => setEditingLead(false)} className="h-9 rounded-full border border-graphite/10 px-4 text-xs">
                        Cancelar
                      </button>
                    </div>
                  </form>
                )}
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  onClick={() => setEditingLead((current) => !current)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-graphite/10 text-graphite/70 transition hover:bg-porcelain"
                  aria-label="Editar lead"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={deleteSelectedLead}
                  className="grid h-10 w-10 place-items-center rounded-full border border-red-100 text-red-600 transition hover:bg-red-50"
                  aria-label="Excluir lead"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <button onClick={() => setSelectedLead(null)} className="rounded-full border border-graphite/10 px-4 py-2 text-sm">
                  Fechar
                </button>
              </div>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
              <select
                value={selectedLead.status}
                onChange={(event) => updateStatus(selectedLead.id, event.target.value as LeadStatus)}
                className="h-12 rounded-2xl border border-graphite/10 bg-porcelain px-4 text-sm outline-none"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {labels[status]}
                  </option>
                ))}
              </select>
              <button
                onClick={() => updateLeadAi(!selectedLead.ai_enabled)}
                className={`h-12 rounded-full px-5 text-sm font-medium ${
                  selectedLead.ai_enabled ? "bg-graphite text-white" : "border border-graphite/10 text-graphite/70"
                }`}
              >
                {selectedLead.ai_enabled ? "IA ligada" : "Assumido por humano"}
              </button>
            </div>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto bg-porcelain/54 p-5">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[84%] rounded-[20px] px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-graphite text-white" : "bg-white text-graphite/76"}`}>
                  {message.role === "assistant" && message.sender_name && (
                    <p className="mb-1 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-graphite/42">{message.sender_name}</p>
                  )}
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={sendManualMessage} className="border-t border-graphite/10 bg-white p-4">
            <label className="mb-3 grid gap-2 text-sm text-graphite/70">
              Nome do atendente
              <input
                value={attendantName}
                onChange={(event) => updateAttendantName(event.target.value)}
                placeholder="Ex.: Camila - Equipe LQF"
                className="h-11 rounded-2xl border border-graphite/10 bg-porcelain px-4 text-sm outline-none focus:border-stone"
              />
            </label>
            <label className="grid gap-2 text-sm text-graphite/70">
              Responder como equipe LQF
              <textarea
                value={manualMessage}
                onChange={(event) => setManualMessage(event.target.value)}
                placeholder="Digite uma resposta manual para aparecer no chat do visitante."
                className="min-h-24 rounded-2xl border border-graphite/10 bg-porcelain px-4 py-3 text-sm outline-none focus:border-stone"
              />
            </label>
            <button type="submit" className="mt-3 flex h-11 items-center gap-2 rounded-full bg-graphite px-5 text-sm font-medium text-white">
              <Send className="h-4 w-4" />
              Enviar resposta
            </button>
          </form>
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

function TabButton({ active, onClick, icon, children }: { active: boolean; onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex h-11 items-center gap-2 rounded-full px-5 text-sm transition ${
        active ? "bg-graphite text-white" : "border border-graphite/10 text-graphite/70 hover:bg-porcelain"
      }`}
    >
      {icon}
      {children}
    </button>
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
