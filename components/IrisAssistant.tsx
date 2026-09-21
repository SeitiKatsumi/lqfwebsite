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
  visitorId: string;
  name: string;
};

const suggestions = [
  "Quero desenvolver uma linha",
  "Quero solicitar orçamento",
  "Quero agendar uma visita",
  "Preciso de uma análise técnica"
];

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
  const [isTyping, setIsTyping] = useState(false);
  const [assignedTo, setAssignedTo] = useState("ai");
  const [storageKey, setStorageKey] = useState("");
  const pendingVisitor = useRef("");
  const sending = useRef(false);
  const [error, setError] = useState("");
  const [syncError, setSyncError] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || storageKey) return;
    let active = true;
    async function restore() {
      try {
        const response = await fetch("/api/iris/start", { cache: "no-store" });
        const data = await response.json();
        if (!response.ok || !data.storageKey) throw new Error(data.error);
        if (!active) return;
        setStorageKey(data.storageKey);
        try {
          const parsed = JSON.parse(window.localStorage.getItem(data.storageKey) || "null");
          if (parsed?.visitorId && parsed?.name) setIdentity(parsed);
        } catch {
          setError("O histórico deste navegador não está disponível. Você pode iniciar um atendimento.");
        }
      } catch {
        if (active) setError("Não foi possível conectar ao atendimento. Feche e abra o chat para tentar novamente.");
      }
    }
    void restore();
    return () => { active = false; };
  }, [open, storageKey]);

  useEffect(() => {
    if (!identity || !open) return;
    let active = true;
    let timer: ReturnType<typeof setTimeout>;
    const visitorId = identity.visitorId;
    async function syncMessages() {
      try {
        const response = await fetch("/api/iris", { headers: { "X-Visitor-Id": visitorId }, cache: "no-store" });
        const data = await response.json();
        if (!response.ok) throw new Error();
        if (active) {
          setMessages(data.messages);
          setIsTyping(data.isTyping);
          setAssignedTo(data.assignedTo);
          setSyncError("");
        }
      } catch {
        if (active) setSyncError("Não foi possível atualizar as mensagens. Tentaremos novamente em instantes.");
      } finally {
        if (active) timer = setTimeout(syncMessages, 3000);
      }
    }
    void syncMessages();
    return () => { active = false; clearTimeout(timer); };
  }, [identity, open]);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages.length, messages.at(-1)?.id, isTyping, open]);

  async function startLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!storageKey || sending.current) return;
    sending.current = true;
    setError("");
    setLoading(true);
    try {
      const visitorId = pendingVisitor.current || crypto.randomUUID();
      pendingVisitor.current = visitorId;
      const response = await fetch("/api/iris/start", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Visitor-Id": visitorId },
        body: JSON.stringify({ name, email, whatsapp })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Não foi possível iniciar o atendimento.");
      const nextIdentity = { visitorId, name: data.name };
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(nextIdentity));
      } catch {
        setError("O navegador não permite salvar a sessão. Mantenha esta página aberta para continuar.");
      }
      setIdentity(nextIdentity);
      const introduction = `Nome: ${name.trim()}\nE-mail: ${email.trim()}\nWhatsApp: ${whatsapp.trim()}\nGostaria de iniciar um atendimento.`;
      const sent = await fetch("/api/iris", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Visitor-Id": visitorId },
        body: JSON.stringify({ message: introduction })
      }).catch(() => null);
      if (!sent?.ok) {
        setInput(introduction);
        setError("Atendimento iniciado, mas não foi possível confirmar o envio dos dados. Confira o histórico antes de tentar novamente.");
      }
      setTimeout(() => textareaRef.current?.focus(), 80);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Não foi possível conectar ao atendimento.");
    } finally {
      sending.current = false;
      setLoading(false);
    }
  }

  async function sendMessage(content: string) {
    const trimmed = content.trim();
    if (!trimmed || sending.current || !identity) return;
    sending.current = true;
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/iris", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Visitor-Id": identity.visitorId },
        body: JSON.stringify({ message: trimmed })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Não foi possível enviar sua mensagem.");
      setInput("");
    } catch (error) {
      setInput(trimmed);
      setError(error instanceof Error ? error.message : "Não foi possível confirmar o envio. Confira o histórico antes de tentar novamente.");
    } finally {
      sending.current = false;
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
                  <p className="text-xs text-graphite/58">{assignedTo === "human" ? "Atendimento com a equipe LQF" : "Assistentes LQF"}</p>
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
                      aria-label="Nome"
                      maxLength={120}
                      className="h-12 rounded-2xl border border-graphite/10 bg-white px-4 text-sm outline-none focus:border-stone"
                    />
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      type="email"
                      placeholder="E-mail"
                      aria-label="E-mail"
                      maxLength={254}
                      className="h-12 rounded-2xl border border-graphite/10 bg-white px-4 text-sm outline-none focus:border-stone"
                    />
                    <input
                      value={whatsapp}
                      onChange={(event) => setWhatsapp(event.target.value)}
                      required
                      placeholder="WhatsApp"
                      aria-label="WhatsApp"
                      type="tel"
                      maxLength={30}
                      className="h-12 rounded-2xl border border-graphite/10 bg-white px-4 text-sm outline-none focus:border-stone"
                    />
                  </div>
                  {error && <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading || !storageKey}
                  className="mt-6 flex h-12 items-center justify-center gap-2 rounded-full bg-graphite px-5 text-sm font-medium text-white transition hover:bg-graphite/92 disabled:opacity-55"
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  Iniciar atendimento
                </button>
              </form>
            ) : (
              <>
                <div role="log" aria-live="polite" className="flex-1 space-y-4 overflow-y-auto bg-[linear-gradient(180deg,#fff,#f8f7f4)] px-4 py-5">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[86%] rounded-[22px] px-4 py-3 text-sm leading-6 whitespace-pre-wrap break-words ${
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
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-2 rounded-full border border-graphite/8 bg-white px-4 py-3 text-sm text-graphite/62">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {assignedTo === "human" ? "Equipe está digitando" : "Iris está digitando"}
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="border-t border-graphite/10 bg-white p-4">
                  {(error || syncError) && <p role="alert" className="mb-3 text-sm text-red-700">{error || syncError}</p>}
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
                      maxLength={8000}
                      aria-label="Mensagem"
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
