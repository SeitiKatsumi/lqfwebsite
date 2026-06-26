"use client";

import { Send } from "lucide-react";

const categories = ["Capilar", "Facial", "Corporal", "Mãos e Pés", "Unhas", "Infantil", "Materna", "Private Label", "Desenvolvimento sob demanda"];

export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-[2rem] border border-graphite/10 bg-white/78 p-5 shadow-soft md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nome" />
        <Field label="Empresa" />
        <Field label="E-mail" type="email" />
        <Field label="Telefone / WhatsApp" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Select label="Tipo de projeto" options={["Nova marca", "Ampliação de linha", "Terceirização", "Projeto especial"]} />
        <Select label="Categoria de interesse" options={categories} />
        <Select label="Já possui fórmula?" options={["Ainda não", "Sim", "Em desenvolvimento"]} />
        <Select label="Já possui embalagem?" options={["Ainda não", "Sim", "Em cotação"]} />
      </div>
      <Field label="Volume estimado" />
      <label className="grid gap-2 text-sm text-graphite/70">
        Mensagem
        <textarea className="min-h-36 rounded-2xl border border-graphite/12 bg-porcelain px-4 py-3 outline-none transition focus:border-brass" />
      </label>
      <button type="button" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-graphite px-6 text-sm font-medium text-white transition hover:bg-graphite/88 md:w-fit">
        Enviar projeto
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm text-graphite/70">
      {label}
      <input type={type} className="min-h-12 rounded-2xl border border-graphite/12 bg-porcelain px-4 outline-none transition focus:border-brass" />
    </label>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="grid gap-2 text-sm text-graphite/70">
      {label}
      <select className="min-h-12 rounded-2xl border border-graphite/12 bg-porcelain px-4 outline-none transition focus:border-brass">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
