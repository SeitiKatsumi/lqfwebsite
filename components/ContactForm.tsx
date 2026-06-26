"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const categories = ["Capilar", "Facial", "Corporal", "Mãos e Pés", "Unhas", "Infantil", "Materna", "Private Label", "Desenvolvimento sob demanda"];

const initialForm = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  projectType: "Nova marca",
  category: categories[0],
  hasFormula: "Ainda não",
  hasPackaging: "Ainda não",
  estimatedVolume: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setError(data.error || "Não foi possível enviar o projeto.");
        return;
      }

      setSuccess(data.message || "Projeto enviado com sucesso.");
      setForm(initialForm);
    } catch {
      setError("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] border border-graphite/10 bg-white/78 p-5 shadow-soft md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nome" value={form.name} onChange={(value) => updateField("name", value)} required />
        <Field label="Empresa" value={form.company} onChange={(value) => updateField("company", value)} />
        <Field label="E-mail" type="email" value={form.email} onChange={(value) => updateField("email", value)} required />
        <Field label="Telefone / WhatsApp" value={form.whatsapp} onChange={(value) => updateField("whatsapp", value)} required />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Select label="Tipo de projeto" value={form.projectType} onChange={(value) => updateField("projectType", value)} options={["Nova marca", "Ampliação de linha", "Terceirização", "Projeto especial"]} />
        <Select label="Categoria de interesse" value={form.category} onChange={(value) => updateField("category", value)} options={categories} />
        <Select label="Já possui fórmula?" value={form.hasFormula} onChange={(value) => updateField("hasFormula", value)} options={["Ainda não", "Sim", "Em desenvolvimento"]} />
        <Select label="Já possui embalagem?" value={form.hasPackaging} onChange={(value) => updateField("hasPackaging", value)} options={["Ainda não", "Sim", "Em cotação"]} />
      </div>
      <Field label="Volume estimado" value={form.estimatedVolume} onChange={(value) => updateField("estimatedVolume", value)} />
      <label className="grid gap-2 text-sm text-graphite/70">
        Mensagem
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-36 rounded-2xl border border-graphite/12 bg-porcelain px-4 py-3 outline-none transition focus:border-brass"
        />
      </label>
      {success && (
        <p className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          <CheckCircle2 className="h-4 w-4" />
          {success}
        </p>
      )}
      {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-graphite px-6 text-sm font-medium text-white transition hover:bg-graphite/88 disabled:opacity-55 md:w-fit"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Enviar projeto
      </button>
    </form>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  required = false
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm text-graphite/70">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="min-h-12 rounded-2xl border border-graphite/12 bg-porcelain px-4 outline-none transition focus:border-brass"
      />
    </label>
  );
}

function Select({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2 text-sm text-graphite/70">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-2xl border border-graphite/12 bg-porcelain px-4 outline-none transition focus:border-brass"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
