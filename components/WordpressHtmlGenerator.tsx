"use client";

import { FormEvent, useMemo, useState } from "react";
import { Code2, Copy, Loader2, Sparkles } from "lucide-react";
import { fallbackWordpressBlock, wordpressFooterHtml, wordpressHeaderHtml, wordpressPages } from "@/lib/wordpressHtmlTemplates";

export function WordpressHtmlGenerator({ authHeaders }: { authHeaders: Record<string, string> }) {
  const [page, setPage] = useState("home");
  const [prompt, setPrompt] = useState("Crie uma secao editorial premium com titulo forte, texto consultivo e CTA para contato.");
  const [generatedHtml, setGeneratedHtml] = useState(() => fallbackWordpressBlock({ page: "home", prompt: "" }));
  const [source, setSource] = useState<"ai" | "fallback">("fallback");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState("");

  const headerHtml = useMemo(() => wordpressHeaderHtml(), []);
  const footerHtml = useMemo(() => wordpressFooterHtml(), []);
  const selectedPage = wordpressPages.find((item) => item.slug === page) ?? wordpressPages[0];

  async function copy(value: string, label: string) {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(""), 1800);
  }

  async function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/admin/wp-html", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeaders },
        body: JSON.stringify({ page, prompt })
      });
      const data = (await response.json()) as { html?: string; source?: "ai" | "fallback" };
      setGeneratedHtml(data.html || fallbackWordpressBlock({ page, prompt }));
      setSource(data.source || "fallback");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section-shell max-w-7xl pb-12">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-graphite/10 bg-porcelain/62 p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-graphite">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-light text-graphite">Wordpress HTML Generator</h2>
              <p className="text-sm text-graphite/60">Gere blocos HTML para Elementor preservando o estilo visual da LQF.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            <SnippetCard title="Header para modelo Wordpress" value={headerHtml} onCopy={() => copy(headerHtml, "header")} copied={copied === "header"} />
            <SnippetCard title="Footer para modelo Wordpress" value={footerHtml} onCopy={() => copy(footerHtml, "footer")} copied={copied === "footer"} />
          </div>
        </div>

        <form onSubmit={generate} className="rounded-[28px] border border-graphite/10 bg-white p-6 shadow-soft">
          <p className="eyebrow">Gerador por prompt</p>
          <h3 className="mt-3 text-4xl font-light text-graphite">Blocos para modelos no Elementor</h3>
          <p className="mt-4 text-sm leading-6 text-graphite/62">
            Selecione uma pagina base, descreva a secao ou pagina desejada e copie o HTML gerado para o widget HTML do Elementor.
          </p>

          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm text-graphite/70">
              Pagina base
              <select value={page} onChange={(event) => setPage(event.target.value)} className="h-12 rounded-2xl border border-graphite/10 bg-porcelain px-4 outline-none">
                {wordpressPages.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <div className="rounded-2xl border border-graphite/10 bg-porcelain/70 p-4 text-sm leading-6 text-graphite/62">
              <strong className="text-graphite">{selectedPage.title}</strong>
              <br />
              {selectedPage.description}
            </div>
            <label className="grid gap-2 text-sm text-graphite/70">
              Prompt do bloco
              <textarea
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                className="min-h-36 rounded-2xl border border-graphite/10 bg-porcelain px-4 py-3 leading-6 outline-none focus:border-stone"
              />
            </label>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button type="submit" disabled={loading} className="flex h-12 items-center gap-2 rounded-full bg-graphite px-6 text-sm font-medium text-white disabled:opacity-60">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              Gerar HTML
            </button>
            <button type="button" onClick={() => copy(generatedHtml, "generated")} className="flex h-12 items-center gap-2 rounded-full border border-graphite/10 px-6 text-sm text-graphite/72">
              <Copy className="h-4 w-4" />
              {copied === "generated" ? "Copiado" : "Copiar HTML"}
            </button>
          </div>

          <p className="mt-4 text-xs text-graphite/45">Origem: {source === "ai" ? "gerado por IA" : "template base sem IA"}.</p>
        </form>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <div className="rounded-[28px] border border-graphite/10 bg-porcelain/62 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-graphite">Preview</p>
            <button type="button" onClick={() => copy(generatedHtml, "generated")} className="rounded-full border border-graphite/10 px-4 py-2 text-xs text-graphite/65">
              {copied === "generated" ? "Copiado" : "Copiar"}
            </button>
          </div>
          <iframe title="Preview HTML Elementor" srcDoc={generatedHtml} className="h-[520px] w-full rounded-[22px] border border-graphite/10 bg-white" />
        </div>
        <div className="rounded-[28px] border border-graphite/10 bg-white p-4">
          <p className="mb-3 text-sm font-medium text-graphite">HTML para colar no Elementor</p>
          <textarea value={generatedHtml} readOnly className="h-[520px] w-full resize-none rounded-[22px] border border-graphite/10 bg-porcelain/65 p-4 font-mono text-xs leading-5 text-graphite/72 outline-none" />
        </div>
      </div>
    </section>
  );
}

function SnippetCard({ title, value, copied, onCopy }: { title: string; value: string; copied: boolean; onCopy: () => void }) {
  return (
    <div className="rounded-[22px] border border-graphite/10 bg-white p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-graphite">{title}</p>
        <button type="button" onClick={onCopy} className="flex h-9 items-center gap-2 rounded-full border border-graphite/10 px-4 text-xs text-graphite/66">
          <Copy className="h-3.5 w-3.5" />
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <textarea value={value} readOnly className="h-44 w-full resize-none rounded-2xl border border-graphite/10 bg-porcelain/64 p-3 font-mono text-xs leading-5 text-graphite/65 outline-none" />
    </div>
  );
}
