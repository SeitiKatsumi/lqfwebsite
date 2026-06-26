"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Loader2, Send, Sparkles, X } from "lucide-react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sender_name?: string | null;
};

type LeadIdentity = {
  leadId: string;
  name: string;
};

const suggestions = [
  "Quero desenvolver uma linha",
  "Quero solicitar orçamento",
  "Quero agendar uma visita",
  "Preciso de uma análise técnica"
];

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    content
  };
}

export function IrisAssistant() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [identity, setIdentity] = useState<LeadIdentity | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  function resetStoredLead(message = "Seu atendimento anterior não está mais disponível. Informe seus dados para iniciar um novo atendimento.") {
    window.localStorage.removeItem("lqf-iris-lead");
    setIdentity(null);
    setMessages([]);
    setInput("");
    setError(message);
  }

  useEffect(() => {
    const stored = window.localStorage.getItem("lqf-iris-lead");
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as LeadIdentity;
      if (parsed.leadId && parsed.name) {
        setIdentity(parsed);
        setMessages([
          createMessage(
            "assistant",
            `Oi, ${parsed.name}. Podemos continuar seu atendimento. Me conte como posso ajudar agora.`
          )
        ]);
      }
    } catch {
      window.localStorage.removeItem("lqf-iris-lead");
    }
  }, []);

  useEffect(() => {
    if (!identity || !open) return;

    let active = true;
    const leadId = identity.leadId;

    async function syncMessages() {
      try {
        const response = await fetch(`/api/iris?leadId=${leadId}`);

        if (response.status === 404) {
          if (active) {
            resetStoredLead();
          }
          return;
        }

        if (!response.ok) return;

        const data = (await response.json()) as { messages?: Array<{ id: string; role: "user" | "assistant"; content: string; sender_name?: string | null }> };

        if (active && data.messages?.length) {
          setMessages(
            data.messages.map((message) => ({ id: message.id, role: message.role, content: message.content, sender_name: message.sender_name }))
          );
        }
      } catch {
        // Keeps the local optimistic chat intact if polling fails.
      }
    }

    void syncMessages();
    const interval = window.setInterval(syncMessages, 4500);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, [identity, open]);

  useEffect(() => {
    if (!open) return;
    messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages, loading, open]);

  async function startLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/iris/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, whatsapp })
      });
      const data = (await response.json()) as { lead?: { id: string; name: string }; message?: string; error?: string };

      if (!response.ok || !data.lead) {
        setError(data.error || "Não foi possível iniciar o atendimento.");
        return;
      }

      const nextIdentity = { leadId: data.lead.id, name: data.lead.name };
      setIdentity(nextIdentity);
      window.localStorage.setItem("lqf-iris-lead", JSON.stringify(nextIdentity));
      setMessages([createMessage("assistant", data.message || "Contato registrado. Como posso ajudar?")]);
      setTimeout(() => textareaRef.current?.focus(), 80);
    } catch {
      setError("Não foi possível conectar a Iris agora.");
    } finally {
      setLoading(false);
    }
  }

  async function sendMessage(content: string) {
    const trimmed = content.trim();
    if (!trimmed || loading || !identity) return;

    setMessages((current) => [...current, createMessage("user", trimmed)]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/iris", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadId: identity.leadId, message: trimmed })
      });
      const data = (await response.json().catch(() => ({}))) as { message?: string; error?: string; mode?: string };

      if (response.status === 404) {
        resetStoredLead();
        return;
      }

      if (!response.ok) {
        setMessages((current) => [
          ...current,
          createMessage("assistant", data.error || "Não foi possível registrar sua mensagem agora. Tente novamente em instantes.")
        ]);
        return;
      }

      if (data.mode === "ai" && data.message) {
        setMessages((current) => [...current, createMessage("assistant", data.message as string)]);
      } else if (data.message || data.error) {
        setMessages((current) => [...current, createMessage("assistant", data.message || data.error || "Mensagem registrada.")]);
      }
    } catch {
      setMessages((current) => [
        ...current,
        createMessage("assistant", "Tive uma instabilidade agora. Seu contato já foi registrado para continuidade do atendimento.")
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => textareaRef.current?.focus(), 50);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  }

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[70] flex h-14 items-center gap-3 rounded-full bg-graphite px-5 text-sm font-medium text-white shadow-[0_18px_60px_rgba(63,63,59,0.22)] transition hover:-translate-y-0.5 hover:bg-graphite/92 focus:outline-none focus:ring-2 focus:ring-graphite/25 md:bottom-8 md:right-8"
        aria-label="Abrir assistente Iris"
      >
        <span className="relative h-9 w-9 overflow-hidden rounded-full border border-white/20 bg-white/12">
          <Image src="/humanized/iris-atendente.png" alt="" fill sizes="36px" className="object-cover" />
        </span>
        <span>Iris</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-end bg-graphite/18 px-3 py-3 backdrop-blur-sm md:px-8 md:py-8">
          <section className="flex h-[min(740px,92svh)] w-full max-w-[470px] flex-col overflow-hidden rounded-[28px] border border-graphite/10 bg-white shadow-[0_30px_110px_rgba(63,63,59,0.2)]">
            <header className="flex items-center justify-between border-b border-graphite/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-graphite/10 bg-stone/14">
                  <Image src="/humanized/iris-atendente.png" alt="Iris" fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <p className="flex items-center gap-2 text-sm font-medium text-graphite">
                    Iris
                    <Sparkles className="h-3.5 w-3.5 text-brass" />
                  </p>
                  <p className="text-xs text-graphite/58">Assistentes LQF</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-graphite/10 text-graphite/72 transition hover:bg-porcelain"
                aria-label="Fechar assistente Iris"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            {!identity ? (
              <form onSubmit={startLead} className="flex flex-1 flex-col justify-between bg-[linear-gradient(180deg,#fff,#f8f7f4)] p-5">
                <div>
                  <p className="eyebrow">Atendimento IA</p>
                  <h2 className="mt-4 text-3xl font-light leading-tight text-graphite">Antes de começar, preciso dos seus dados.</h2>
                  <p className="mt-4 text-sm leading-6 text-graphite/68">
                    A Iris registra o atendimento e salva o histórico para a equipe LQF acompanhar seu pedido.
                  </p>
                  <div className="mt-6 grid gap-3">
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                      placeholder="Nome"
                      className="h-12 rounded-2xl border border-graphite/10 bg-white px-4 text-sm outline-none focus:border-stone"
                    />
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      type="email"
                      placeholder="E-mail"
                      className="h-12 rounded-2xl border border-graphite/10 bg-white px-4 text-sm outline-none focus:border-stone"
                    />
                    <input
                      value={whatsapp}
                      onChange={(event) => setWhatsapp(event.target.value)}
                      required
                      placeholder="WhatsApp"
                      className="h-12 rounded-2xl border border-graphite/10 bg-white px-4 text-sm outline-none focus:border-stone"
                    />
                  </div>
                  {error && <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 flex h-12 items-center justify-center gap-2 rounded-full bg-graphite px-5 text-sm font-medium text-white transition hover:bg-graphite/92 disabled:opacity-55"
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  Iniciar atendimento
                </button>
              </form>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto bg-[linear-gradient(180deg,#fff,#f8f7f4)] px-4 py-5">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[86%] rounded-[22px] px-4 py-3 text-sm leading-6 ${
                          message.role === "user"
                            ? "bg-graphite text-white"
                            : "border border-graphite/8 bg-white text-graphite/82 shadow-[0_10px_34px_rgba(63,63,59,0.06)]"
                        }`}
                      >
                        {message.role === "assistant" && message.sender_name && (
                          <p className="mb-1 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-graphite/42">{message.sender_name}</p>
                        )}
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-2 rounded-full border border-graphite/8 bg-white px-4 py-3 text-sm text-graphite/62">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Iris está analisando
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="border-t border-graphite/10 bg-white p-4">
                  <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => sendMessage(suggestion)}
                        disabled={loading}
                        className="shrink-0 rounded-full border border-graphite/10 px-3 py-2 text-xs text-graphite/72 transition hover:border-graphite/24 hover:bg-porcelain disabled:opacity-55"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                  <form onSubmit={handleSubmit} className="flex items-end gap-2 rounded-[22px] border border-graphite/12 bg-porcelain/60 p-2">
                    <textarea
                      ref={textareaRef}
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                      onKeyDown={handleKeyDown}
                      rows={1}
                      placeholder="Pergunte sobre produtos, processos ou orçamentos"
                      className="max-h-28 min-h-11 flex-1 resize-none bg-transparent px-3 py-3 text-sm leading-5 text-graphite outline-none placeholder:text-graphite/42"
                    />
                    <button
                      type="submit"
                      disabled={loading || !input.trim()}
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-graphite text-white transition hover:bg-graphite/92 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Enviar mensagem para Iris"
                    >
                      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    </button>
                  </form>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
}
