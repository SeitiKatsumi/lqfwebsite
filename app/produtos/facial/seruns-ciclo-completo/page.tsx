import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeCheck,
  CheckCircle2,
  Droplets,
  FlaskConical,
  Gauge,
  Layers3,
  ListChecks,
  Moon,
  ShieldCheck,
  Sparkles,
  SunMedium,
  TestTube2,
  Waves
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.serunsCicloCompleto;

const showRegulatoryNotes = true;
const showB2BPositioning = true;
const showIngredientDetails = true;
const showUsageInstructions = true;
const showProtocolBuilder = true;
const image = "/products/seruns-ciclo-completo/seruns-placeholder.jpg";

type Product = {
  title: string;
  category: string;
  imageLabel: string;
  icon: LucideIcon;
  headline: string;
  text: string;
  actives: string[];
  benefits: string[];
  indication: string[];
  use: string;
  care?: string[];
  regulatory?: string;
};

const anchors = [
  ["Conceito", "#conceito"],
  ["Arquitetura", "#arquitetura"],
  ["Séruns", "#seruns"],
  ["Pele acneica", "#pele-acneica"],
  ["Hidratação", "#hidratacao"],
  ["Protocolos", "#protocolos"],
  ["Rotina", "#rotina"],
  ["Claims", "#claims"],
  ["FAQ", "#faq"]
];

const conceptCards = [
  { title: "Hidratar", text: "Restaurar água, conforto e viço em peles desidratadas.", icon: Droplets },
  { title: "Uniformizar", text: "Melhorar a aparência do tom, da luminosidade e de marcas aparentes.", icon: Sparkles },
  { title: "Renovar", text: "Refinar textura e suavizar a aparência opaca da superfície da pele.", icon: Waves },
  { title: "Equilibrar", text: "Ajudar no controle visual da oleosidade e de imperfeições.", icon: Gauge },
  { title: "Fortalecer", text: "Apoiar a barreira cutânea e preservar o conforto durante protocolos.", icon: ShieldCheck },
  { title: "Suavizar sinais", text: "Melhorar a aparência de linhas, firmeza e elasticidade.", icon: BadgeCheck }
];

const architecture = [
  {
    title: "Séruns de Alta Performance",
    text: "Tratamentos concentrados com ativos protagonistas para necessidades específicas da pele.",
    items: ["Ácido Hialurônico e Resveratrol", "Tranexâmico e Niacinamida", "Glicólico e Aminoácidos", "Retinol e Vitamina E", "Salicílico e Zinco", "Peptídeos"],
    icon: TestTube2
  },
  {
    title: "Linha de Cuidado para Pele Acneica",
    text: "Produtos direcionados para oleosidade, imperfeições, brilho excessivo e cuidado localizado.",
    items: ["Gel Secativo Pele Acneica", "Máscara Secativa Pele Acneica"],
    icon: Waves
  },
  {
    title: "Hidratação Essencial",
    text: "Produtos complementares para preservar conforto, barreira cutânea e equilíbrio diário.",
    items: ["Creme Hidratante Facial Dia", "Creme Hidratante Facial Noite", "Gel Hidratante Facial"],
    icon: Droplets
  }
];

const products: Product[] = [
  {
    title: "Sérum Ácido Hialurônico e Resveratrol",
    category: "Séruns de Alta Performance",
    imageLabel: "IMG-SERUM-HIALURONICO-RESVERATROL",
    icon: Droplets,
    headline: "Hidratação profunda e proteção antioxidante.",
    text: "Sérum desenvolvido para restaurar níveis de hidratação e proteger a aparência da pele contra efeitos visíveis do estresse oxidativo, com textura leve e rápida absorção.",
    actives: ["Ácido Hialurônico 4%", "Nano Resveratrol 1%"],
    benefits: ["Pele intensamente hidratada", "Redução da sensação de ressecamento", "Maior maciez e elasticidade", "Proteção antioxidante cosmética", "Aparência mais saudável e luminosa"],
    indication: ["Pele desidratada", "Pele sem viço", "Linhas finas por ressecamento", "Rotina antioxidante", "Todos os tipos de pele"],
    use: "Aplicar sobre a pele limpa pela manhã e/ou à noite. Durante o dia, finalizar com filtro solar."
  },
  {
    title: "Sérum Ácido Tranexâmico e Niacinamida",
    category: "Séruns de Alta Performance",
    imageLabel: "IMG-SERUM-TRANEXAMICO-NIACINAMIDA",
    icon: Sparkles,
    headline: "Uniformização inteligente e luminosidade equilibrada.",
    text: "Associação moderna para melhorar a aparência de manchas, tom irregular e opacidade, com apoio à barreira cutânea e melhora visual da textura.",
    actives: ["Ácido Tranexâmico 3%", "Niacinamida 5%"],
    benefits: ["Aparência mais uniforme", "Redução visual da aparência de manchas", "Luminosidade natural", "Textura mais refinada", "Aspecto revitalizado"],
    indication: ["Tom irregular", "Aparência de manchas", "Pele opaca", "Marcas aparentes", "Rotina de luminosidade"],
    use: "Aplicar sobre a pele limpa, preferencialmente à noite ou conforme orientação da formulação. Durante o dia, usar filtro solar.",
    regulatory: "Claims de clareamento, manchas e hiperpigmentação devem ser validados por testes adequados."
  },
  {
    title: "Sérum Ácido Glicólico e Aminoácidos",
    category: "Séruns de Alta Performance",
    imageLabel: "IMG-SERUM-GLICOLICO-AMINOACIDOS",
    icon: Waves,
    headline: "Renovação da superfície com reposição de hidratação natural.",
    text: "Solução para renovação suave da superfície cutânea com apoio ao Fator Natural de Hidratação, favorecendo textura refinada, luminosidade e conforto.",
    actives: ["Ácido Glicólico 10%", "PCA-Na + Aminoácidos 2%"],
    benefits: ["Aparência renovada", "Toque mais suave", "Hidratação equilibrada", "Maior luminosidade", "Aspecto revitalizado"],
    indication: ["Pele opaca", "Textura irregular", "Pele áspera", "Rotinas de renovação noturna", "Aparência cansada"],
    use: "Aplicar preferencialmente à noite, sobre a pele limpa e seca. Introduzir gradualmente, em dias alternados no início. Durante o dia, usar filtro solar.",
    care: ["Evitar área dos olhos, cantos do nariz, boca e pele sensibilizada.", "Não aplicar sobre pele irritada ou lesionada.", "Não combinar na mesma rotina com outros ácidos fortes ou retinol sem orientação adequada.", "Suspender em caso de desconforto persistente."]
  },
  {
    title: "Sérum Retinol e Vitamina E",
    category: "Séruns de Alta Performance",
    imageLabel: "IMG-SERUM-RETINOL-VITAMINA-E",
    icon: Moon,
    headline: "Renovação intensiva e melhora global dos sinais do tempo.",
    text: "Fórmula noturna para apoiar a renovação da aparência da pele e suavizar visualmente sinais do envelhecimento, com antioxidante cosmético e conforto durante o uso.",
    actives: ["Retinol 1%", "Vitamina E 1%", "Pró-Vitamina B5 2%"],
    benefits: ["Melhora da aparência dos sinais do tempo", "Aparência mais firme", "Maior luminosidade", "Textura mais uniforme", "Aparência renovada e descansada"],
    indication: ["Linhas finas", "Perda de firmeza", "Textura irregular", "Pele sem viço", "Rotina noturna de performance"],
    use: "Aplicar à noite sobre a pele limpa e seca. Iniciar em dias alternados e aumentar a frequência conforme tolerância. Durante o dia, usar filtro solar.",
    care: ["Não usar durante o dia sem proteção solar adequada.", "Evitar associação com ácido glicólico ou ácido salicílico na mesma rotina, salvo orientação técnica.", "Gestantes, lactantes ou pessoas com pele sensibilizada devem buscar orientação profissional antes do uso."],
    regulatory: "Claims de rugas, firmeza e poros devem ser validados por testes adequados."
  },
  {
    title: "Sérum Ácido Salicílico e Zinco",
    category: "Séruns de Alta Performance",
    imageLabel: "IMG-SERUM-SALICILICO-ZINCO",
    icon: Gauge,
    headline: "Controle da oleosidade e cuidado das imperfeições.",
    text: "Sérum para peles oleosas e com tendência à acne, ajudando a equilibrar a aparência da pele, controlar brilho excessivo e cuidar de poros obstruídos.",
    actives: ["Ácido Salicílico 2%", "Zinco PCA 2%"],
    benefits: ["Menor brilho excessivo", "Redução visual de comedões", "Aparência mais equilibrada", "Menor aparência de vermelhidão", "Aspecto mais uniforme"],
    indication: ["Pele oleosa", "Pele mista", "Aparência de poros obstruídos", "Tendência a cravos e espinhas", "Brilho excessivo"],
    use: "Aplicar sobre a pele limpa, preferencialmente à noite ou conforme tolerância. Durante o dia, usar filtro solar.",
    care: ["Evitar área dos olhos.", "Não aplicar sobre pele irritada ou lesionada.", "Introduzir gradualmente em peles sensíveis."],
    regulatory: "Claims relacionados à acne, comedões, vermelhidão e oleosidade devem ser validados."
  },
  {
    title: "Sérum com Peptídeos",
    category: "Séruns de Alta Performance",
    imageLabel: "IMG-SERUM-PEPTIDEOS",
    icon: ShieldCheck,
    headline: "Tecnologia avançada para firmeza, elasticidade e aparência mais jovem.",
    text: "Combinação de peptídeos biomiméticos para atuar em diferentes sinais visíveis do envelhecimento cutâneo, com foco em firmeza, elasticidade e contorno facial.",
    actives: ["Progeline 0,5%", "Matrixyl 3%"],
    benefits: ["Atua em múltiplos sinais visíveis do envelhecimento", "Aparência mais firme e resistente", "Melhora visual do contorno facial", "Aparência de elasticidade", "Aspecto revitalizado"],
    indication: ["Pele madura", "Perda de firmeza", "Linhas e rugas aparentes", "Contorno facial menos definido", "Rotinas anti-aging cosméticas"],
    use: "Aplicar sobre a pele limpa, pela manhã e/ou à noite. Durante o dia, usar filtro solar.",
    regulatory: "Claims de 16 sinais do envelhecimento, firmeza, colágeno, rugas e contorno facial devem ser validados por testes adequados."
  },
  {
    title: "Gel Secativo Pele Acneica",
    category: "Linha de Cuidado para Pele Acneica",
    imageLabel: "IMG-GEL-SECATIVO-PELE-ACNEICA",
    icon: TestTube2,
    headline: "Ação intensiva localizada.",
    text: "Tratamento cosmético direcionado para auxiliar no cuidado localizado de espinhas, vermelhidão aparente e desconfortos associados à pele com tendência acneica.",
    actives: ["Ativos secativos", "Textura gel de aplicação precisa"],
    benefits: ["Ação secativa cosmética", "Ajuda no controle da oleosidade", "Reduz a aparência de vermelhidão", "Auxilia na recuperação da aparência da pele", "Cuidado pontual"],
    indication: ["Espinhas pontuais", "Pele oleosa", "Imperfeições localizadas", "Pele com tendência à acne"],
    use: "Aplicar pontualmente sobre a área desejada, com a pele limpa e seca. Evitar contato com olhos e mucosas.",
    regulatory: "Claims de redução rápida, acne, vermelhidão e recuperação devem ser validados por testes adequados."
  },
  {
    title: "Máscara Secativa Pele Acneica",
    category: "Linha de Cuidado para Pele Acneica",
    imageLabel: "IMG-MASCARA-SECATIVA-PELE-ACNEICA",
    icon: Waves,
    headline: "Purificação profunda e equilíbrio para pele oleosa.",
    text: "Máscara de tratamento intensivo para promover sensação purificante, controle visual da oleosidade, limpeza dos poros e conforto.",
    actives: ["Ativos purificantes", "Sistema de controle visual de brilho"],
    benefits: ["Redução da aparência de brilho excessivo", "Ajuda no controle de oleosidade", "Sensação calmante", "Fortalecimento da barreira cutânea", "Aparência equilibrada"],
    indication: ["Pele oleosa", "Pele mista", "Poros obstruídos", "Brilho excessivo", "Rotina semanal de purificação"],
    use: "Aplicar sobre a pele limpa, evitando área dos olhos. Deixar agir pelo tempo indicado na formulação e enxaguar completamente.",
    regulatory: "Claims de controle microbiano, acne e redução de oleosidade devem ser validados por testes adequados."
  },
  {
    title: "Creme Hidratante Facial Dia",
    category: "Hidratação Essencial",
    imageLabel: "IMG-CREME-HIDRATANTE-FACIAL-DIA",
    icon: SunMedium,
    headline: "Proteção e hidratação durante todo o dia.",
    text: "Combinação de ativos umectantes e restauradores que ajuda a preservar níveis adequados de hidratação e fortalecer a barreira protetora durante a rotina diária.",
    actives: ["Umectantes", "Restauradores de barreira"],
    benefits: ["Hidratação prolongada", "Proteção contra ressecamento", "Melhora da aparência de elasticidade", "Pele macia e confortável"],
    indication: ["Uso diário", "Todos os tipos de pele", "Rotina diurna", "Complemento de séruns"],
    use: "Aplicar pela manhã sobre a pele limpa, após o sérum escolhido. Finalizar com filtro solar."
  },
  {
    title: "Creme Hidratante Facial Noite",
    category: "Hidratação Essencial",
    imageLabel: "IMG-CREME-HIDRATANTE-FACIAL-NOITE",
    icon: Moon,
    headline: "Reparação intensiva durante o sono.",
    text: "Tratamento nutritivo para aproveitar o período de descanso da pele, apoiando a barreira cutânea, a hidratação e a sensação de recuperação ao despertar.",
    actives: ["Nutritivos", "Restauradores", "Sistema de conforto noturno"],
    benefits: ["Apoio à reparação da barreira cutânea", "Nutrição intensiva", "Hidratação profunda", "Melhora da aparência de firmeza", "Pele mais macia ao acordar"],
    indication: ["Uso noturno", "Pele seca ou sensibilizada", "Rotinas com ácidos ou retinol", "Complemento de tratamentos intensivos"],
    use: "Aplicar à noite sobre a pele limpa, após o sérum indicado para o protocolo.",
    regulatory: "Claims de regeneração e reparação devem ser validados por testes adequados."
  },
  {
    title: "Gel Hidratante Facial",
    category: "Hidratação Essencial",
    imageLabel: "IMG-GEL-HIDRATANTE-FACIAL",
    icon: Droplets,
    headline: "Hidratação inteligente para peles oleosas.",
    text: "Alternativa leve e refrescante que hidrata sem aumentar a sensação de oleosidade, ideal para peles mistas e oleosas.",
    actives: ["Hidratantes leves", "Sensorial oil free"],
    benefits: ["Ajuda no controle visual do brilho", "Hidratação equilibrada", "Sensação calmante", "Toque refrescante", "Viço natural"],
    indication: ["Pele oleosa", "Pele mista", "Rotina diurna ou noturna", "Complemento do sérum salicílico e zinco"],
    use: "Aplicar pela manhã e/ou à noite, após o sérum ou como etapa hidratante principal."
  }
];

const protocols = [
  ["Pele desidratada", "Hialurônico + Resveratrol, Creme Dia, Creme Noite", "Hidratação manhã e noite"],
  ["Manchas e tom irregular", "Tranexâmico + Niacinamida, Creme Dia, filtro solar", "Uniformização progressiva"],
  ["Textura irregular e opacidade", "Glicólico + Aminoácidos, Hidratante Noite", "Renovação noturna gradual"],
  ["Linhas, firmeza e sinais do tempo", "Retinol + Vitamina E, Peptídeos, Hidratante Noite", "Alternância noturna"],
  ["Oleosidade e acne", "Salicílico + Zinco, Gel Secativo, Máscara Secativa, Gel Hidratante", "Controle e equilíbrio"],
  ["Barreira fragilizada", "Hialurônico + Resveratrol, Creme Noite, Gel Hidratante", "Recuperação e conforto"],
  ["Pele madura", "Peptídeos, Retinol + Vitamina E, Creme Noite", "Firmeza e revitalização"]
];

const comparison = [
  ["Hialurônico + Resveratrol", "AH 4%, Nano Resveratrol 1%", "Hidratação e antioxidante", "Manhã/noite", "Pele desidratada"],
  ["Tranexâmico + Niacinamida", "Tranexâmico 3%, Niacinamida 5%", "Uniformização do tom", "Noite/manhã com FPS", "Manchas aparentes"],
  ["Glicólico + Aminoácidos", "Glicólico 10%, PCA-Na + Aminoácidos 2%", "Renovação da textura", "Noite", "Pele opaca"],
  ["Retinol + Vitamina E", "Retinol 1%, Vitamina E 1%, Pantenol 2%", "Sinais do tempo", "Noite", "Linhas e firmeza"],
  ["Salicílico + Zinco", "Salicílico 2%, Zinco PCA 2%", "Oleosidade e imperfeições", "Noite", "Pele oleosa"],
  ["Peptídeos", "Progeline 0,5%, Matrixyl 3%", "Firmeza e elasticidade", "Manhã/noite", "Pele madura"],
  ["Gel Secativo", "Ativos secativos", "Cuidado localizado", "Pontual", "Espinhas"],
  ["Máscara Secativa", "Ativos purificantes", "Controle de oleosidade", "Semanal", "Pele acneica"],
  ["Creme Dia", "Umectantes e restauradores", "Hidratação diurna", "Manhã", "Todos os tipos"],
  ["Creme Noite", "Nutritivos e restauradores", "Conforto noturno", "Noite", "Pele seca/sensível"],
  ["Gel Hidratante", "Hidratantes leves", "Hidratação oil free", "Manhã/noite", "Pele oleosa"]
];

function ImagePanel({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-[30px] border border-stone-200 bg-stone-100 shadow-[0_24px_80px_rgba(63,63,59,0.08)] ${tall ? "min-h-[520px]" : "min-h-[340px]"}`}>
      <Image src={image} alt={label} fill className="object-cover transition duration-700 group-hover:scale-[1.035]" sizes="(max-width: 900px) 100vw, 50vw" priority={label.includes("HERO")} />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/34 via-transparent to-white/10" />
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
        <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-2xl font-light text-stone-800">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-stone-500">{text}</p>
      </div>
    </Reveal>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;
  return (
    <Reveal delay={index * 0.035}>
      <article className="rounded-[30px] border border-stone-200 bg-white p-5 shadow-[0_22px_70px_rgba(63,63,59,0.06)] lg:p-7">
        <ImagePanel label={product.imageLabel} />
        <div className="mt-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700">
              <Icon className="h-5 w-5" />
            </span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-stone-500">{product.category}</span>
          </div>
          <h3 className="mt-5 text-4xl font-light leading-tight text-stone-800">{product.title}</h3>
          <p className="mt-3 text-xl font-light text-stone-600">{product.headline}</p>
          <p className="mt-5 text-sm leading-7 text-stone-500">{product.text}</p>

          {showIngredientDetails ? (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Ativos</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.actives.map((active) => (
                  <span key={active} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-xs text-stone-600">{active}</span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-6 grid gap-3">
            {product.benefits.map((item) => (
              <div key={item} className="flex gap-2 text-sm leading-6 text-stone-500">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-stone-500" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[20px] bg-stone-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Indicação</p>
            <p className="mt-3 text-sm leading-7 text-stone-600">{product.indication.join(", ")}.</p>
          </div>

          {showUsageInstructions ? <p className="mt-4 rounded-[20px] bg-white p-5 text-sm leading-7 text-stone-600 ring-1 ring-stone-200">{product.use}</p> : null}

          {product.care ? (
            <div className="mt-4 rounded-[20px] border border-amber-200 bg-amber-50/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">Cuidados de uso</p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-amber-900/78">
                {product.care.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ) : null}

          {product.regulatory ? <p className="mt-4 text-xs leading-6 text-stone-400">{product.regulatory}</p> : null}
        </div>
      </article>
    </Reveal>
  );
}

function ProductGroup({ title, id, items }: { title: string; id: string; items: Product[] }) {
  return (
    <section id={id} className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
      <SectionTitle eyebrow="Portfólio" title={title} text="Produtos organizados por objetivo de rotina, para facilitar combinações, protocolos e narrativa comercial." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {items.map((product, index) => <ProductCard key={product.title} product={product} index={index} />)}
      </div>
    </section>
  );
}

export default function SerunsCicloCompletoPage() {
  const serums = products.filter((product) => product.category === "Séruns de Alta Performance");
  const acne = products.filter((product) => product.category === "Linha de Cuidado para Pele Acneica");
  const hydration = products.filter((product) => product.category === "Hidratação Essencial");

  return (
    <main className="bg-[#fbfaf7] text-stone-800">
      <section className="mx-auto grid min-h-screen max-w-[1500px] items-center gap-12 px-6 pb-24 pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">Facial • Séruns</p>
            <h1 className="mt-6 max-w-5xl text-[clamp(4.2rem,10vw,10rem)] font-light leading-[0.86] tracking-[-0.02em] text-stone-800">Linha Séruns Ciclo Completo.</h1>
            <p className="mt-8 max-w-2xl text-2xl font-light leading-10 text-stone-500">Tratamentos inteligentes para cada necessidade da pele.</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-500">Uma plataforma de séruns faciais de alta performance criada para acompanhar os diferentes ciclos da pele: hidratar, uniformizar, renovar, equilibrar, suavizar sinais do tempo e recuperar a barreira cutânea.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MinimalButton href="#seruns">Conhecer os séruns</MinimalButton>
              <MinimalButton href="#protocolos" variant="ghost">Montar protocolo por necessidade</MinimalButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Textura leve", "Alta concentração de ativos", "Protocolos personalizados", "Skincare avançado", "Uso progressivo"].map((item) => <span key={item} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs text-stone-500">{item}</span>)}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}><ImagePanel label="IMG-HERO-SERUNS-CICLO-COMPLETO" tall /></Reveal>
      </section>

      <nav className="sticky top-24 z-20 mx-auto mb-12 flex max-w-[1500px] gap-2 overflow-x-auto px-6 py-3 lg:px-10">
        {anchors.map(([label, href]) => <a key={href} href={href} className="whitespace-nowrap rounded-full border border-stone-200 bg-white/86 px-4 py-2 text-sm text-stone-600 shadow-sm backdrop-blur transition hover:bg-stone-900 hover:text-white">{label}</a>)}
      </nav>

      <section id="conceito" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Conceito" title="A pele não tem sempre a mesma necessidade." text="Exposição solar, poluição, estresse, alterações hormonais, rotina de sono, alimentação e o próprio envelhecimento modificam as necessidades da pele ao longo do tempo. Por isso, uma rotina inteligente precisa ser adaptável." />
          <p className="mt-8 rounded-[28px] border border-stone-200 bg-white p-7 text-2xl font-light leading-10 text-stone-700">A Linha Séruns Ciclo Completo permite combinações estratégicas de ativos e produtos, respeitando cada fase da pele e oferecendo soluções direcionadas para diferentes objetivos.</p>
        </div>
        <ImagePanel label="IMG-CONCEITO-CICLO-DA-PELE" />
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-16 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {conceptCards.map((item, index) => <IconCard key={item.title} {...item} index={index} />)}
        </div>
      </section>

      <section id="arquitetura" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Arquitetura da linha" title="Uma linha pensada para protocolos completos." text="A plataforma é dividida em três blocos principais para criar uma jornada de tratamento facial progressiva, combinável e clara para o consumidor." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {architecture.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-[30px] border border-stone-200 bg-white p-7 shadow-[0_22px_70px_rgba(63,63,59,0.06)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-stone-700"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-8 text-4xl font-light leading-tight text-stone-800">{item.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-stone-500">{item.text}</p>
                  <div className="mt-7 grid gap-2">
                    {item.items.map((product) => <span key={product} className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-600">{product}</span>)}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12"><ImagePanel label="IMG-ARQUITETURA-SERUNS-CICLO-COMPLETO" /></div>
      </section>

      <ProductGroup title="Séruns concentrados para necessidades específicas da pele." id="seruns" items={serums} />

      <section id="pele-acneica" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <ImagePanel label="IMG-LINHA-PELE-ACNEICA" />
        <div>
          <SectionTitle eyebrow="Pele acneica" title="Soluções complementares para oleosidade, imperfeições e cuidado localizado." text="Produtos desenvolvidos para auxiliar no cuidado da pele oleosa e com tendência à acne, combinando ação localizada, efeito secativo cosmético, controle visual do brilho e sensação de conforto." />
        </div>
      </section>
      <ProductGroup title="Linha de cuidado para pele acneica." id="pele-acneica-produtos" items={acne} />

      <section id="hidratacao" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Hidratação essencial" title="Produtos complementares para preservar conforto, barreira cutânea e equilíbrio diário." text="Toda rotina de tratamento precisa de suporte hidratante. A Hidratação Essencial complementa os séruns de alta performance, ajudando a manter a pele confortável, protegida e equilibrada." />
        </div>
        <ImagePanel label="IMG-HIDRATACAO-ESSENCIAL" />
      </section>
      <ProductGroup title="Hidratação essencial para completar o protocolo." id="hidratacao-produtos" items={hydration} />

      {showProtocolBuilder ? (
        <section id="protocolos" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
          <SectionTitle eyebrow="Protocolos" title="Monte o protocolo ideal para cada momento da pele." text="Uma plataforma de combinações permite adaptar o cuidado conforme necessidade, tolerância, rotina e objetivo comercial." />
          <div className="mt-10 overflow-hidden rounded-[28px] border border-stone-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-[980px] text-left text-sm">
                <thead className="bg-stone-50 text-xs uppercase tracking-[0.12em] text-stone-400"><tr>{["Necessidade", "Produtos indicados", "Rotina sugerida"].map((item) => <th key={item} className="p-5 font-semibold">{item}</th>)}</tr></thead>
                <tbody>{protocols.map(([need, productsList, routine]) => <tr key={need} className="border-t border-stone-100"><td className="p-5 font-medium text-stone-800">{need}</td><td className="p-5 text-stone-500">{productsList}</td><td className="p-5 text-stone-500">{routine}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
          <div className="mt-12"><ImagePanel label="IMG-PROTOCOLOS-SERUNS-CICLO-COMPLETO" /></div>
        </section>
      ) : null}

      <section id="rotina" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Rotina recomendada" title="Como usar a Linha Séruns Ciclo Completo." text="O uso correto organiza performance, tolerância e segurança cosmética." />
          <div className="mt-10 grid gap-4">
            <div className="rounded-[24px] border border-stone-200 bg-white p-6">
              <h3 className="text-2xl font-light text-stone-800">Rotina da manhã</h3>
              <p className="mt-3 text-sm leading-7 text-stone-500">Higienizar a pele, aplicar sérum de hidratação, uniformização ou peptídeos, aplicar hidratante dia ou gel hidratante e finalizar com filtro solar.</p>
            </div>
            <div className="rounded-[24px] border border-stone-200 bg-white p-6">
              <h3 className="text-2xl font-light text-stone-800">Rotina da noite</h3>
              <p className="mt-3 text-sm leading-7 text-stone-500">Higienizar a pele e aplicar o sérum de tratamento conforme necessidade: glicólico para renovação, retinol para sinais do tempo, salicílico para oleosidade ou tranexâmico para uniformização.</p>
            </div>
            <div className="rounded-[24px] border border-amber-200 bg-amber-50/75 p-6">
              <h3 className="flex items-center gap-2 text-2xl font-light text-amber-950"><AlertTriangle className="h-5 w-5" />Cuidados de combinação</h3>
              <p className="mt-3 text-sm leading-7 text-amber-900/78">Não usar retinol e ácido glicólico na mesma noite sem orientação técnica. Introduzir retinol, glicólico e salicílico gradualmente. Usar filtro solar diariamente e suspender em caso de irritação persistente.</p>
            </div>
          </div>
        </div>
        <ImagePanel label="IMG-ROTINA-SERUNS-CICLO-COMPLETO" />
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Tabela comparativa" title="Produtos, ativos e funções principais." text="Uma visão objetiva para facilitar portfólio, briefing comercial, treinamento e montagem de protocolos." />
        <div className="mt-10 overflow-hidden rounded-[28px] border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-[1120px] text-left text-sm">
              <thead className="bg-stone-50 text-xs uppercase tracking-[0.12em] text-stone-400"><tr>{["Produto", "Ativos principais", "Função principal", "Melhor uso", "Indicação"].map((item) => <th key={item} className="p-5 font-semibold">{item}</th>)}</tr></thead>
              <tbody>{comparison.map(([product, active, functionText, use, indication]) => <tr key={product} className="border-t border-stone-100"><td className="p-5 font-medium text-stone-800">{product}</td><td className="p-5 text-stone-500">{active}</td><td className="p-5 text-stone-500">{functionText}</td><td className="p-5 text-stone-500">{use}</td><td className="p-5 text-stone-500">{indication}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      {showRegulatoryNotes ? (
        <section id="claims" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
          <SectionTitle eyebrow="Claims e segurança" title="Claims sugeridos para validação." text="A linha tem forte potencial de comunicação. Claims de eficácia devem ser validados conforme concentração, estudos, regulamentação e documentação técnica." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <IconCard title="Claims seguros" text="Textura leve, rápida absorção, hidratação, aparência luminosa, ajuda a uniformizar visualmente o tom, suaviza visualmente linhas finas e apoia a barreira cutânea." icon={BadgeCheck} />
            <IconCard title="Comprovar" text="Redução de manchas, clareamento, acne, rugas, poros, hidratação por X horas, estímulo de colágeno, dermatologicamente testado e hipoalergênico." icon={AlertTriangle} />
            <IconCard title="Evitar" text="Elimina manchas, cura acne, rejuvenesce a pele, remove rugas, fecha poros, clareia definitivamente, trata melasma ou resultado garantido." icon={ListChecks} />
          </div>
        </section>
      ) : null}

      {showB2BPositioning ? (
        <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="rounded-[32px] bg-stone-900 p-8 text-white md:p-12">
            <FlaskConical className="h-8 w-8 text-stone-300" />
            <h2 className="mt-8 text-5xl font-light leading-tight md:text-7xl">Cada pele tem um ciclo. Cada ciclo pede um sérum.</h2>
            <p className="mt-8 text-lg leading-8 text-white/68">A Linha Séruns Ciclo Completo transforma o cuidado facial em uma jornada personalizada, combinando séruns, hidratantes e cuidados específicos conforme a necessidade da pele.</p>
            <div className="mt-8 grid gap-2 text-sm leading-6 text-white/72">
              {["Skincare por protocolo", "Séruns de alta performance", "Rotina personalizada", "Oleosidade e imperfeições", "Recuperação de barreira", "Dermocosmético acessível"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <ImagePanel label="IMG-CTA-SERUNS-CICLO-COMPLETO" tall />
        </section>
      ) : null}

      <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Desenvolvimento LQF" title="Tratamentos inteligentes para cada fase da pele." text="A Linha Séruns Ciclo Completo reúne séruns concentrados, cuidados para pele acneica e hidratação essencial em uma plataforma completa de skincare personalizado para marcas que desejam oferecer protocolos modernos, técnicos e altamente desejáveis." />
          <div className="mt-8 flex flex-wrap gap-3">
            <MinimalButton href="/contato#formulario">Criar minha linha de séruns</MinimalButton>
            <MinimalButton href="#protocolos" variant="ghost">Ver protocolos completos</MinimalButton>
          </div>
        </div>
        <ImagePanel label="IMG-CTA-SERUNS-CICLO-COMPLETO" />
      </section>

      <section id="faq" className="mx-auto max-w-[1100px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes." />
        <div className="mt-10 grid gap-4">
          {[
            ["Posso usar todos os séruns juntos?", "Não é recomendado usar todos ao mesmo tempo. A proposta é escolher os séruns conforme a necessidade da pele e criar protocolos seguros, evitando sobreposição excessiva de ativos intensos."],
            ["Quais séruns são melhores para hidratação?", "O Sérum Ácido Hialurônico e Resveratrol é o principal sérum hidratante. Ele pode ser combinado com Creme Hidratante Facial Dia, Creme Hidratante Facial Noite ou Gel Hidratante Facial."],
            ["Qual sérum é indicado para manchas?", "O Sérum Ácido Tranexâmico e Niacinamida foi desenvolvido para melhorar a aparência de manchas e uniformizar visualmente o tom da pele. Claims de clareamento devem ser comprovados por testes adequados."],
            ["Qual sérum usar para oleosidade?", "O Sérum Ácido Salicílico e Zinco é indicado para pele oleosa, poros obstruídos e tendência a cravos e espinhas."],
            ["Retinol e ácido glicólico podem ser usados juntos?", "Recomenda-se não usar retinol e ácido glicólico na mesma noite sem orientação técnica. Uma estratégia mais segura é alternar os dias de uso."],
            ["Precisa usar filtro solar?", "Sim. O filtro solar é essencial, especialmente em rotinas com ácidos, retinol, ativos uniformizadores e antioxidantes."],
            ["A linha é indicada para pele acneica?", "A linha possui produtos específicos para peles oleosas e com tendência à acne, como o Sérum Ácido Salicílico e Zinco, o Gel Secativo e a Máscara Secativa. Claims relacionados à acne devem ser validados conforme regulamentação."]
          ].map(([question, answer]) => <details key={question} className="rounded-[24px] border border-stone-200 bg-white p-6"><summary className="cursor-pointer list-none text-xl font-light text-stone-800">{question}</summary><p className="mt-4 text-sm leading-7 text-stone-500">{answer}</p></details>)}
        </div>
      </section>
    </main>
  );
}
