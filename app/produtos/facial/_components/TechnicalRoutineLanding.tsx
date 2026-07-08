import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { AlertTriangle, ArrowRight, BadgeCheck, CheckCircle2, ClipboardCheck, Layers3 } from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";

export type TechnicalProduct = {
  name: string;
  lot?: string;
  moment: string;
  functionText: string;
  headline: string;
  indication: string;
  actives: string[];
  benefits: string[];
  usage: string;
  care?: string[];
  regulatory?: string;
  imageLabel: string;
  icon: LucideIcon;
};

export type TechnicalLandingConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  image: string;
  heroImageLabel: string;
  badges: string[];
  primaryCta: string;
  secondaryCta: string;
  anchors: Array<[string, string]>;
  labels?: {
    architectureEyebrow?: string;
    summaryEyebrow?: string;
    summaryTitle?: string;
    summaryText?: string;
    indicationEyebrow?: string;
    indicationTitle?: string;
    indicationText?: string;
    claimsEyebrow?: string;
    claimsTitle?: string;
    claimsText?: string;
  };
  concept: {
    imageLabel: string;
    title: string;
    text: string;
    highlight: string;
    cards: Array<{ title: string; text: string; icon: LucideIcon }>;
  };
  architecture: {
    imageLabel: string;
    title: string;
    text: string;
    groups: Array<{ title: string; items: string[]; functionText: string }>;
  };
  sections: Array<{
    id: string;
    eyebrow: string;
    title: string;
    text: string;
    imageLabel: string;
    products: TechnicalProduct[];
  }>;
  summaryImageLabel: string;
  summaryRows: Array<[string, string, string, string]>;
  indicationImageLabel: string;
  indicationRows: Array<[string, string, string]>;
  commercial: {
    title: string;
    text: string;
    territories: string[];
    message: string;
    kits: Array<[string, string]>;
  };
  claims: {
    safe: string[];
    proof: string[];
    avoid: string[];
  };
  finalCta: {
    imageLabel: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
  };
  faq: Array<[string, string]>;
  backHref?: string;
  backLabel?: string;
  flags: {
    showInternalLotCodes: boolean;
    showRegulatoryNotes: boolean;
    showB2BPositioning: boolean;
    showUsageInstructions: boolean;
    showKitSuggestions: boolean;
    showIngredientDetails?: boolean;
    showProtocolSteps?: boolean;
    showClinicalClaims?: boolean;
  };
};

function ImagePanel({ image, label, tall = false }: { image: string; label: string; tall?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-[30px] border border-stone-200 bg-stone-100 shadow-[0_24px_80px_rgba(63,63,59,0.08)] ${tall ? "min-h-[520px]" : "min-h-[340px]"}`}>
      <Image src={image} alt={label} fill className="object-cover transition duration-700 group-hover:scale-[1.035]" sizes="(max-width: 900px) 100vw, 50vw" priority={label.includes("HERO")} />
      <div className="absolute inset-0 bg-stone-950/20" />
      <div className="absolute bottom-5 left-5 rounded-full border border-white/35 bg-white/78 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-700 backdrop-blur">
        {label}
      </div>
    </div>
  );
}

function IconCard({ title, text, icon: Icon, index = 0 }: { title: string; text: string; icon: LucideIcon; index?: number }) {
  return (
    <Reveal delay={index * 0.04}>
      <div className="h-full rounded-[26px] border border-stone-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(63,63,59,0.08)]">
        <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700"><Icon className="h-5 w-5" /></span>
        <h3 className="text-2xl font-light text-stone-800">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-stone-500">{text}</p>
      </div>
    </Reveal>
  );
}

function ProductCard({ product, image, showInternalLotCodes, showUsageInstructions, showRegulatoryNotes, index }: { product: TechnicalProduct; image: string; showInternalLotCodes: boolean; showUsageInstructions: boolean; showRegulatoryNotes: boolean; index: number }) {
  const Icon = product.icon;

  return (
    <Reveal delay={index * 0.035}>
      <article className="h-full rounded-[30px] border border-stone-200 bg-white p-5 shadow-[0_22px_70px_rgba(63,63,59,0.06)] lg:p-7">
        <ImagePanel image={image} label={product.imageLabel} />
        <div className="mt-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700"><Icon className="h-5 w-5" /></span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-stone-500">{product.moment}</span>
            {showInternalLotCodes && product.lot ? <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-stone-500">Lote {product.lot}</span> : null}
          </div>
          <h3 className="mt-5 text-4xl font-light leading-tight text-stone-800">{product.name}</h3>
          <p className="mt-3 text-xl font-light text-stone-600">{product.headline}</p>
          <p className="mt-5 text-sm leading-7 text-stone-500">{product.indication}</p>
          <div className="mt-6 flex flex-wrap gap-2">{product.actives.map((active) => <span key={active} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-xs text-stone-600">{active}</span>)}</div>
          <div className="mt-6 grid gap-3">
            {product.benefits.map((item) => <div key={item} className="flex gap-2 text-sm leading-6 text-stone-500"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-stone-500" />{item}</div>)}
          </div>
          {showUsageInstructions ? <p className="mt-6 rounded-[20px] bg-stone-50 p-5 text-sm leading-7 text-stone-600">{product.usage}</p> : null}
          {product.care?.length ? (
            <div className="mt-5 rounded-[20px] border border-stone-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Cuidados de uso</p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-stone-500">
                {product.care.map((item) => <li key={item} className="flex gap-2"><AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-stone-400" />{item}</li>)}
              </ul>
            </div>
          ) : null}
          {showRegulatoryNotes && product.regulatory ? <p className="mt-5 text-xs leading-6 text-stone-400">{product.regulatory}</p> : null}
        </div>
      </article>
    </Reveal>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-[920px] text-left text-sm">
          <thead className="bg-stone-50 text-xs uppercase tracking-[0.12em] text-stone-400">
            <tr>{headers.map((item) => <th key={item} className="p-5 font-semibold">{item}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("-")} className="border-t border-stone-100">
                {row.map((cell, index) => <td key={`${cell}-${index}`} className={`p-5 ${index === 0 ? "font-medium text-stone-800" : "text-stone-500"}`}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TechnicalRoutineLanding({ config }: { config: TechnicalLandingConfig }) {
  const labels = {
    architectureEyebrow: "Arquitetura da rotina",
    summaryEyebrow: "Rotina resumida",
    summaryTitle: "Rotina completa em etapas claras.",
    summaryText: "Um quadro simples para treinamento, navegação consultiva e apresentação comercial.",
    indicationEyebrow: "Indicação por necessidade",
    indicationTitle: "Escolha pelo que a pele precisa agora.",
    indicationText: "A arquitetura ajuda a orientar kits, rotinas e recomendação por perfil de uso.",
    claimsEyebrow: "Claims e segurança regulatória",
    claimsTitle: "Comunicação técnica, segura e defensável.",
    claimsText: "A copy pública deve evitar promessas absolutas e manter claims sensíveis sujeitos à comprovação por testes adequados.",
    ...config.labels
  };

  return (
    <main className="bg-[#fbfaf7] text-stone-800">
      <section className="mx-auto grid min-h-screen max-w-[1500px] items-center gap-12 px-6 pb-24 pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">{config.eyebrow}</p>
            <h1 className="mt-6 max-w-5xl text-[clamp(4rem,9.2vw,9.4rem)] font-light leading-[0.88] tracking-[-0.02em] text-stone-800">{config.title}</h1>
            <p className="mt-8 max-w-2xl text-2xl font-light leading-10 text-stone-500">{config.subtitle}</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-500">{config.intro}</p>
            <div className="mt-7 flex flex-wrap gap-2">{config.badges.map((item) => <span key={item} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs text-stone-500">{item}</span>)}</div>
            <div className="mt-8 flex flex-wrap gap-3">
              <MinimalButton href="#conceito">{config.primaryCta}</MinimalButton>
              <MinimalButton href="#rotina" variant="ghost">{config.secondaryCta}</MinimalButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}><ImagePanel image={config.image} label={config.heroImageLabel} tall /></Reveal>
      </section>

      <nav className="sticky top-24 z-20 mx-auto mb-12 flex max-w-[1500px] gap-2 overflow-x-auto px-6 py-3 lg:px-10">
        {config.anchors.map(([label, href]) => <a key={href} href={href} className="whitespace-nowrap rounded-full border border-stone-200 bg-white/86 px-4 py-2 text-sm text-stone-600 shadow-sm backdrop-blur transition hover:bg-stone-900 hover:text-white">{label}</a>)}
      </nav>

      <section id="conceito" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Conceito" title={config.concept.title} text={config.concept.text} />
          <p className="mt-8 rounded-[28px] border border-stone-200 bg-white p-7 text-2xl font-light leading-10 text-stone-700">{config.concept.highlight}</p>
        </div>
        <ImagePanel image={config.image} label={config.concept.imageLabel} />
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-12 lg:px-10">
        <div className="grid gap-4 md:grid-cols-5">{config.concept.cards.map((item, index) => <IconCard key={item.title} {...item} index={index} />)}</div>
      </section>

      <section id="rotina" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div>
          <SectionTitle eyebrow={labels.architectureEyebrow} title={config.architecture.title} text={config.architecture.text} />
          <div className="mt-10 grid gap-4">
            {config.architecture.groups.map((group) => (
              <div key={group.title} className="rounded-[26px] border border-stone-200 bg-white p-6">
                <h3 className="text-2xl font-light text-stone-800">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-500">{group.functionText}</p>
                <div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full bg-stone-100 px-3 py-2 text-xs text-stone-600">{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
        <ImagePanel image={config.image} label={config.architecture.imageLabel} tall />
      </section>

      {config.sections.map((section) => (
        <section key={section.id} id={section.id} className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
          <SectionTitle eyebrow={section.eyebrow} title={section.title} text={section.text} />
          <div className={`mt-12 grid gap-6 ${section.products.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>{section.products.map((product, index) => <ProductCard key={product.name} product={product} image={config.image} showInternalLotCodes={config.flags.showInternalLotCodes} showUsageInstructions={config.flags.showUsageInstructions} showRegulatoryNotes={config.flags.showRegulatoryNotes} index={index} />)}</div>
          <div className="mt-12"><ImagePanel image={config.image} label={section.imageLabel} /></div>
        </section>
      ))}

      <section id="resumo" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow={labels.summaryEyebrow} title={labels.summaryTitle} text={labels.summaryText} />
        <div className="mt-10"><DataTable headers={["Momento", "Passo", "Produto", "Função"]} rows={config.summaryRows.map((row) => [...row])} /></div>
        <div className="mt-12"><ImagePanel image={config.image} label={config.summaryImageLabel} /></div>
      </section>

      <section id="indicacao" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow={labels.indicationEyebrow} title={labels.indicationTitle} text={labels.indicationText} />
        <div className="mt-10"><DataTable headers={["Necessidade", "Produto indicado", "Benefício percebido"]} rows={config.indicationRows.map((row) => [...row])} /></div>
        <div className="mt-12"><ImagePanel image={config.image} label={config.indicationImageLabel} /></div>
      </section>

      {config.flags.showB2BPositioning ? (
        <section id="kits" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[32px] bg-stone-900 p-8 text-white md:p-12">
              <Layers3 className="h-8 w-8 text-stone-300" />
              <h2 className="mt-8 text-5xl font-light leading-tight md:text-7xl">{config.commercial.title}</h2>
              <p className="mt-8 text-lg leading-8 text-white/68">{config.commercial.text}</p>
              <p className="mt-8 rounded-[24px] border border-white/10 bg-white/8 p-6 text-xl font-light leading-8 text-white">{config.commercial.message}</p>
            </div>
            <div className="grid gap-4">
              {config.commercial.territories.map((item) => <span key={item} className="rounded-full border border-stone-200 bg-white px-5 py-3 text-sm text-stone-600">{item}</span>)}
            </div>
          </div>
          {config.flags.showKitSuggestions ? (
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {config.commercial.kits.map(([title, text], index) => <IconCard key={title} title={title} text={text} icon={ClipboardCheck} index={index} />)}
            </div>
          ) : null}
        </section>
      ) : null}

      {config.flags.showRegulatoryNotes ? (
        <section id="claims" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
          <SectionTitle eyebrow={labels.claimsEyebrow} title={labels.claimsTitle} text={labels.claimsText} />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <IconCard title="Claims seguros" text={config.claims.safe.join(" • ")} icon={BadgeCheck} />
            <IconCard title="Exigem comprovação" text={config.claims.proof.join(" • ")} icon={AlertTriangle} />
            <IconCard title="Evitar" text={config.claims.avoid.join(" • ")} icon={CheckCircle2} />
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Desenvolvimento LQF" title={config.finalCta.title} text={config.finalCta.text} />
          <div className="mt-8 flex flex-wrap gap-3">
            <MinimalButton href="/contato#formulario">{config.finalCta.primary}</MinimalButton>
            <MinimalButton href="#resumo" variant="ghost">{config.finalCta.secondary}</MinimalButton>
          </div>
        </div>
        <ImagePanel image={config.image} label={config.finalCta.imageLabel} />
      </section>

      <section id="faq" className="mx-auto max-w-[1100px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes." />
        <div className="mt-10 grid gap-4">
          {config.faq.map(([question, answer]) => <details key={question} className="rounded-[24px] border border-stone-200 bg-white p-6"><summary className="cursor-pointer list-none text-xl font-light text-stone-800">{question}</summary><p className="mt-4 text-sm leading-7 text-stone-500">{answer}</p></details>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pb-28 lg:px-10">
        <a href={config.backHref ?? "/produtos#facial"} className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm text-stone-600 transition hover:bg-stone-900 hover:text-white">
          {config.backLabel ?? "Voltar para linhas faciais"} <ArrowRight className="h-4 w-4" />
        </a>
      </section>
    </main>
  );
}
