import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeCheck,
  CheckCircle2,
  Droplets,
  FlaskConical,
  Hand,
  HeartPulse,
  Leaf,
  ListChecks,
  Moon,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Waves
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.sensitiveBalance;

const showRegulatoryNotes = true;
const showB2BPositioning = true;
const showIngredientDetails = true;
const showUsageInstructions = true;
const showFragranceFreeOption = true;
const image = "/products/sensitive-balance/sensitive-placeholder.jpg";

const pillars = [
  { title: "Reparação da barreira cutânea", text: "Ajuda a fortalecer a proteção natural da pele contra agressões externas, reduzindo sensação de fragilidade e desconforto.", icon: ShieldCheck },
  { title: "Hidratação inteligente", text: "Contribui para manter os níveis de hidratação por mais tempo, ajudando a reduzir repuxamento e ressecamento.", icon: Droplets },
  { title: "Ação calmante cosmética", text: "Promove sensação de alívio, frescor e conforto para peles sensibilizadas.", icon: Waves },
  { title: "Proteção e recuperação", text: "Ajuda a preservar a pele contra agressões diárias e apoia a aparência de pele saudável.", icon: BadgeCheck }
];

const actives = [
  {
    title: "Glicirrizinato de Potássio",
    subtitle: "O calmante natural de alta performance.",
    imageLabel: "IMG-GLICIRRIZINATO-POTASSIO",
    benefits: ["Ajuda a reduzir a aparência de vermelhidão.", "Promove sensação de alívio e conforto.", "Auxilia no cuidado de peles sensibilizadas.", "Contribui para proteção antioxidante cosmética."],
    icon: Leaf
  },
  {
    title: "Derivado Solúvel de Betaglucana",
    subtitle: "O escudo inteligente da pele.",
    imageLabel: "IMG-BETAGLUCANA-SOLUVEL",
    benefits: ["Promove sensação calmante.", "Ajuda na recuperação da barreira cutânea.", "Contribui para hidratação prolongada.", "Forma filme protetor cosmético."],
    icon: ShieldCheck
  },
  {
    title: "Hialuronato de Sódio",
    subtitle: "Hidratação inteligente e conforto duradouro.",
    imageLabel: "IMG-HIALURONATO-SODIO",
    benefits: ["Promove hidratação sem pesar.", "Ajuda a reduzir sensação de repuxamento.", "Contribui para elasticidade e maciez.", "Deixa a pele com aparência mais viçosa."],
    icon: Droplets
  }
];

const products = [
  {
    title: "Gel de Limpeza Calmante",
    imageLabel: "IMG-GEL-LIMPEZA-CALMANTE",
    icon: Waves,
    headline: "Limpeza inteligente sem agressão.",
    text: "Tecnologia Syndet para limpeza eficaz, preservando a hidratação natural e respeitando a barreira de proteção da pele.",
    differentials: ["Limpeza suave diária", "Ajuda a manter o pH fisiológico", "Preserva o manto hidrolipídico", "Não deixa sensação de ressecamento"],
    claims: ["Sem sulfatos", "Sem parabenos", "Sem isotiazolinonas", "Sem corantes", "Vegano"],
    use: "Aplicar sobre a pele úmida, massagear suavemente até formar espuma leve ou textura de limpeza e enxaguar completamente."
  },
  {
    title: "Gel Creme Calmante SOS",
    imageLabel: "IMG-GEL-CREME-CALMANTE-SOS",
    icon: HeartPulse,
    headline: "Alívio cosmético para momentos de sensibilização.",
    text: "Gel creme de resposta rápida para pele com sensação de desconforto, calor, repuxamento ou sensibilidade.",
    differentials: ["Alpha-Glucan, prebiótico cosmético", "Sensação de frescor", "Apoio à barreira cutânea", "Hidratação profunda"],
    claims: ["Sem etoxilados", "Sem álcool etílico", "Sem silicones", "Vegano"],
    use: "Aplicar sobre a pele limpa sempre que houver sensação de desconforto, ressecamento, calor ou sensibilização."
  },
  {
    title: "Sérum Reparação de Barreira",
    imageLabel: "IMG-SERUM-REPARACAO-BARREIRA",
    icon: ShieldCheck,
    headline: "O fortalecedor diário da pele sensível.",
    text: "Solução leve para ajudar a restaurar e preservar a integridade da barreira cutânea, com hidratação contínua e conforto prolongado.",
    differentials: ["Filme protetor cosmético", "Uso diário", "Conforto prolongado", "Apoio contra agressões externas"],
    claims: ["Livre de álcool etílico", "Livre de silicones", "Vegano"],
    use: "Aplicar diariamente sobre a pele limpa, antes do hidratante ou como etapa principal de cuidado."
  },
  {
    title: "Bruma Calmante",
    imageLabel: "IMG-BRUMA-CALMANTE",
    icon: Droplets,
    headline: "Alívio, hidratação e proteção em qualquer momento do dia.",
    text: "Bruma refrescante para peles que precisam de conforto imediato ao longo da rotina.",
    differentials: ["Ativo vegetal rico em arabinogalactanas", "Névoa leve", "Conforto portátil", "Hidratação leve"],
    claims: ["Sem álcool etílico", "Sem silicones", "Vegano"],
    use: "Borrifar sobre rosto ou corpo com os olhos fechados, sempre que desejar sensação de frescor, conforto e hidratação."
  },
  {
    title: "Loção Reparadora Intensiva Noturna",
    imageLabel: "IMG-LOCAO-REPARADORA-NOTURNA",
    icon: Moon,
    headline: "A recuperação da pele enquanto você dorme.",
    text: "Cuidado noturno intensivo para ajudar a restaurar a barreira cutânea durante o período de descanso.",
    differentials: ["Polissacarídeo biotecnológico", "Hidratação prolongada", "Textura confortável", "Toque macio ao acordar"],
    claims: ["Livre de álcool etílico", "Livre de silicones", "Vegano"],
    use: "Aplicar à noite sobre a pele limpa, massageando suavemente até absorção."
  },
  {
    title: "Creme para Mãos Sensíveis",
    imageLabel: "IMG-CREME-MAOS-SENSIVEIS",
    icon: Hand,
    headline: "Proteção e conforto sempre ao alcance das mãos.",
    text: "Desenvolvido para mãos sensíveis, ressecadas ou expostas a lavagens frequentes, álcool, clima e atrito.",
    differentials: ["Hidratação imediata", "Barreira lipídica", "Toque seco", "Sem sensação oleosa"],
    claims: ["Sem álcool etílico", "Sem silicones", "Vegano"],
    use: "Aplicar nas mãos sempre que necessário, especialmente após lavagens, uso de álcool ou exposição ao ressecamento."
  },
  {
    title: "Gel Pós-Sol Calmante",
    imageLabel: "IMG-GEL-POS-SOL-CALMANTE",
    icon: SunMedium,
    headline: "Frescor e conforto após a exposição solar.",
    text: "Gel glicerinado com sensorial refrescante para ajudar a minimizar sensação de calor, ressecamento e desconforto após exposição solar.",
    differentials: ["Sensorial refrescante", "Hidratação longa", "Apoio à barreira cutânea", "Não substitui protetor solar"],
    claims: ["Sem álcool etílico", "Sem silicones", "Vegano"],
    use: "Aplicar sobre a pele limpa após exposição solar, sempre que houver sensação de calor, ressecamento ou desconforto. Não aplicar sobre pele lesionada."
  }
];

const anchors = [["Conceito", "#conceito"], ["Pilares", "#pilares"], ["Tecnologia", "#tecnologia"], ["Produtos", "#produtos"], ["Rotina", "#rotina"], ["Claims", "#claims"], ["FAQ", "#faq"]];

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
        <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700"><Icon className="h-5 w-5" /></span>
        <h3 className="text-2xl font-light text-stone-800">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-stone-500">{text}</p>
      </div>
    </Reveal>
  );
}

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  const Icon = product.icon;
  return (
    <Reveal delay={index * 0.035}>
      <article className="rounded-[30px] border border-stone-200 bg-white p-5 shadow-[0_22px_70px_rgba(63,63,59,0.06)] lg:p-7">
        <ImagePanel label={product.imageLabel} />
        <div className="mt-7">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700"><Icon className="h-5 w-5" /></span>
          <h3 className="mt-5 text-4xl font-light leading-tight text-stone-800">{product.title}</h3>
          <p className="mt-3 text-xl font-light text-stone-600">{product.headline}</p>
          <p className="mt-5 text-sm leading-7 text-stone-500">{product.text}</p>
          <div className="mt-6 grid gap-3">
            {product.differentials.map((item) => <div key={item} className="flex gap-2 text-sm leading-6 text-stone-500"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-stone-500" />{item}</div>)}
          </div>
          {showIngredientDetails ? <div className="mt-6 flex flex-wrap gap-2">{product.claims.map((claim) => <span key={claim} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-xs text-stone-600">{claim}</span>)}</div> : null}
          {showUsageInstructions ? <p className="mt-6 rounded-[20px] bg-stone-50 p-5 text-sm leading-7 text-stone-600">{product.use}</p> : null}
        </div>
      </article>
    </Reveal>
  );
}

export default function SensitiveBalancePage() {
  return (
    <main className="bg-[#fbfaf7] text-stone-800">
      <section className="mx-auto grid min-h-screen max-w-[1500px] items-center gap-12 px-6 pb-24 pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">Pele sensível</p>
            <h1 className="mt-6 max-w-5xl text-[clamp(4.5rem,11vw,11rem)] font-light leading-[0.86] tracking-[-0.02em] text-stone-800">Sensitive Balance.</h1>
            <p className="mt-8 max-w-2xl text-2xl font-light leading-10 text-stone-500">A nova geração de cuidados para peles sensíveis.</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-500">Equilíbrio, conforto e reparação para peles que pedem cuidado extra, com fórmulas minimalistas, ativos reconhecidos e texturas suaves.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MinimalButton href="#produtos">Conhecer a linha</MinimalButton>
              <MinimalButton href="#rotina" variant="ghost">Ver rotina para pele sensível</MinimalButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Barreira cutânea", "Hidratação inteligente", "Ação calmante cosmética", "Fórmulas minimalistas", "Pele sensível"].map((item) => <span key={item} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs text-stone-500">{item}</span>)}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}><ImagePanel label="IMG-HERO-SENSITIVE-BALANCE" tall /></Reveal>
      </section>

      <nav className="sticky top-24 z-20 mx-auto mb-12 flex max-w-[1500px] gap-2 overflow-x-auto px-6 py-3 lg:px-10">
        {anchors.map(([label, href]) => <a key={href} href={href} className="whitespace-nowrap rounded-full border border-stone-200 bg-white/86 px-4 py-2 text-sm text-stone-600 shadow-sm backdrop-blur transition hover:bg-stone-900 hover:text-white">{label}</a>)}
      </nav>

      <section id="conceito" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Conceito" title="Menos agressão e mais equilíbrio fazem toda a diferença." text="A pele sensível pode apresentar sinais como vermelhidão, ardência, repuxamento, ressecamento, coceira e desconforto. A proposta da Sensitive Balance é criar um sistema completo de cuidado diário, com fórmulas delicadas, ativos funcionais e sensorial confortável." />
          <p className="mt-8 rounded-[28px] border border-stone-200 bg-white p-7 text-2xl font-light leading-10 text-stone-700">Mais que hidratar: cuidar da pele sensível é restaurar conforto, proteger a barreira e reduzir a sensação de vulnerabilidade.</p>
        </div>
        <ImagePanel label="IMG-CONCEITO-PELE-SENSIVEL" />
      </section>

      <section id="pilares" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Pilares" title="Quatro pilares para o cuidado da pele sensível." text="Sensitive Balance foi criada para peles que precisam de segurança, suavidade e conforto real na rotina." />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {pillars.map((item, index) => <IconCard key={item.title} {...item} index={index} />)}
        </div>
        <div className="mt-12"><ImagePanel label="IMG-PILARES-SENSITIVE-BALANCE" /></div>
      </section>

      <section id="tecnologia" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Tecnologia" title="Um complexo de ativos para acalmar, hidratar e fortalecer." text="Ativos reconhecidos no cuidado de peles sensíveis, escolhidos para boa tolerância, sensorial elegante e relação custo-benefício." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {actives.map((active, index) => <ProductCard key={active.title} product={{ title: active.title, headline: active.subtitle, text: active.benefits.join(" "), imageLabel: active.imageLabel, icon: active.icon, differentials: active.benefits, claims: [], use: "Uso conforme estratégia de formulação e validação técnica." }} index={index} />)}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <ImagePanel label="IMG-FRAGRANCIA-SENSORIAL-CONFORTO" />
        <div>
          <SectionTitle eyebrow="Fragrância" title="Fragrância sensorial de conforto." text="A linha pode contar com uma assinatura olfativa suave Oriental Gourmand, com favo de mel, damasco, neroli, amêndoas, castanha, caramelo, baunilha e cedro branco." />
          {showFragranceFreeOption ? <div className="mt-8 rounded-[24px] border border-stone-200 bg-white p-6 text-sm leading-7 text-stone-600">Para peles altamente reativas, recomenda-se considerar também uma versão sem fragrância, ampliando a percepção de segurança e tolerância.</div> : null}
        </div>
      </section>

      <section id="produtos" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Portfólio" title="Uma rotina completa para peles sensíveis." text="Sete produtos para limpar, acalmar, reparar, hidratar, proteger e restaurar o conforto da pele." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => <ProductCard key={product.title} product={product} index={index} />)}
        </div>
      </section>

      <section id="rotina" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Rotina" title="Uma rotina completa para peles sensíveis." text="A linha organiza o cuidado por momentos da rotina: manhã, dia, noite e pós-sol." />
          <div className="mt-10 grid gap-4">
            {[
              ["Manhã", "Gel de Limpeza Calmante, Sérum Reparação de Barreira, Gel Creme Calmante SOS se necessário e protetor solar."],
              ["Durante o dia", "Bruma Calmante para refrescar e Creme para Mãos Sensíveis após lavagens ou uso de álcool."],
              ["Noite", "Gel de Limpeza Calmante, Sérum Reparação de Barreira e Loção Reparadora Intensiva Noturna."],
              ["Pós-sol", "Gel Pós-Sol Calmante e Bruma Calmante, evitando nova exposição solar sem proteção adequada."]
            ].map(([title, text]) => <div key={title} className="rounded-[24px] border border-stone-200 bg-white p-6"><h3 className="text-2xl font-light text-stone-800">{title}</h3><p className="mt-3 text-sm leading-7 text-stone-500">{text}</p></div>)}
          </div>
        </div>
        <ImagePanel label="IMG-ROTINA-SENSITIVE-BALANCE" />
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Indicação" title="Escolha pelo que sua pele está sentindo." text="A rotina pode ser recomendada por sensação percebida e momento de uso." />
        <div className="mt-10 overflow-hidden rounded-[28px] border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-[960px] text-left text-sm">
              <thead className="bg-stone-50 text-xs uppercase tracking-[0.12em] text-stone-400"><tr>{["Necessidade", "Produto indicado", "Benefício percebido"].map((item) => <th key={item} className="p-5 font-semibold">{item}</th>)}</tr></thead>
              <tbody>{[
                ["Limpeza sem agressão", "Gel de Limpeza Calmante", "Pele limpa e confortável"],
                ["Vermelhidão ou calor", "Gel Creme Calmante SOS", "Sensação de alívio e frescor"],
                ["Barreira fragilizada", "Sérum Reparação de Barreira", "Proteção e conforto diário"],
                ["Desconforto ao longo do dia", "Bruma Calmante", "Frescor portátil e hidratação leve"],
                ["Recuperação noturna", "Loção Reparadora Intensiva Noturna", "Pele mais macia ao acordar"],
                ["Mãos ressecadas", "Creme para Mãos Sensíveis", "Proteção, toque seco e maciez"],
                ["Pós-sol", "Gel Pós-Sol Calmante", "Frescor e conforto após exposição"]
              ].map(([need, product, benefit]) => <tr key={need} className="border-t border-stone-100"><td className="p-5 text-stone-600">{need}</td><td className="p-5 font-medium text-stone-800">{product}</td><td className="p-5 text-stone-500">{benefit}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      {showB2BPositioning ? (
        <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="rounded-[32px] bg-stone-900 p-8 text-white md:p-12">
            <FlaskConical className="h-8 w-8 text-stone-300" />
            <h2 className="mt-8 text-5xl font-light leading-tight md:text-7xl">Um sistema completo de conforto, proteção e reparação.</h2>
            <p className="mt-8 text-lg leading-8 text-white/68">Sensitive Balance cria uma plataforma para consumidores que buscam segurança, suavidade e eficácia cosmética em produtos para pele sensível.</p>
          </div>
          <ImagePanel label="IMG-INDICACAO-SENSITIVE-BALANCE" />
        </section>
      ) : null}

      {showRegulatoryNotes ? (
        <section id="claims" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
          <SectionTitle eyebrow="Claims" title="Claims sugeridos para validação." text="Claims envolvendo vermelhidão, coceira, ardência, rosácea, dermatites, pós-procedimentos e pós-sol precisam de comprovação adequada e validação regulatória." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <IconCard title="Claims seguros" text="Pele com sensação de conforto, ajuda a hidratar, promove sensação calmante, textura suave, vegano e sem álcool etílico." icon={BadgeCheck} />
            <IconCard title="Comprovar" text="Reduz vermelhidão, reduz coceira, ação imediata, pós-procedimento, pós-sol, repara barreira e hipoalergênico." icon={AlertTriangle} />
            <IconCard title="Evitar" text="Trata rosácea, trata dermatite, cura irritações, elimina vermelhidão, substitui protetor solar ou livre de qualquer risco." icon={ListChecks} />
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Desenvolvimento LQF" title="Conforto, proteção e equilíbrio para peles sensíveis." text="Sensitive Balance é uma linha completa para marcas que desejam atuar no segmento de peles sensíveis com proposta técnica, segura, moderna e altamente comercial." />
          <div className="mt-8 flex flex-wrap gap-3">
            <MinimalButton href="/contato#formulario">Criar minha linha Sensitive Balance</MinimalButton>
            <MinimalButton href="#tecnologia" variant="ghost">Ver tecnologia da fórmula</MinimalButton>
          </div>
        </div>
        <ImagePanel label="IMG-CTA-SENSITIVE-BALANCE" />
      </section>

      <section id="faq" className="mx-auto max-w-[1100px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes." />
        <div className="mt-10 grid gap-4">
          {[
            ["A linha é indicada para pele sensível?", "Sim. A Sensitive Balance foi desenvolvida com foco em peles sensíveis, sensibilizadas ou com tendência ao desconforto, usando ativos calmantes, hidratantes e de apoio à barreira cutânea."],
            ["A linha tem fragrância?", "A proposta contempla uma fragrância sensorial suave de conforto. Para peles altamente reativas, recomenda-se também considerar versão sem fragrância."],
            ["O Gel Pós-Sol substitui protetor solar?", "Não. O Gel Pós-Sol é um cuidado para depois da exposição solar e não substitui o uso de protetor solar."],
            ["Qual produto usar para reparar a barreira?", "O Sérum Reparação de Barreira é o produto diário principal para ajudar a fortalecer e preservar a barreira cutânea."],
            ["Pode ser usada após procedimentos estéticos?", "Essa possibilidade depende da validação da formulação, testes adequados e orientação profissional. Claims pós-procedimento devem ser usados apenas com comprovação."]
          ].map(([question, answer]) => <details key={question} className="rounded-[24px] border border-stone-200 bg-white p-6"><summary className="cursor-pointer list-none text-xl font-light text-stone-800">{question}</summary><p className="mt-4 text-sm leading-7 text-stone-500">{answer}</p></details>)}
        </div>
      </section>
    </main>
  );
}
