import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeCheck,
  Brush,
  CheckCircle2,
  Droplets,
  Eye,
  FlaskConical,
  Gem,
  ListChecks,
  Palette,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Waves
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.makePerformance;

const showRegulatoryNotes = true;
const showB2BPositioning = true;
const showIngredientDetails = true;
const showUsageInstructions = true;
const showProfessionalTips = true;
const image = "/products/make-performance/make-placeholder.jpg";

const journey = [
  { title: "Remover", text: "Limpeza, demaquilação e conforto para preparar a pele sem agressão.", icon: Droplets },
  { title: "Preparar", text: "Textura, blur, hidratação e melhor acabamento para a maquiagem.", icon: Brush },
  { title: "Iluminar", text: "Glow, frescor e revitalização com linguagem skincare.", icon: Sparkles },
  { title: "Fixar", text: "Selagem, resistência cosmética e acabamento profissional.", icon: ShieldCheck }
];

const products = [
  {
    stage: "Etapa 1 — Remover e Tratar",
    name: "Cleansing Oil",
    imageLabel: "IMG-CLEANSING-OIL",
    icon: Droplets,
    actives: ["Óleo de algodão", "Óleo de girassol"],
    focus: "Remove maquiagem, protetor solar e impurezas com emulsificação leitosa e conforto.",
    benefits: ["Auxilia na remoção de maquiagem.", "Promove sensorial confortável.", "Ajuda a preservar maciez.", "Facilita primeira etapa da rotina."]
  },
  {
    stage: "Etapa 1 — Remover e Tratar",
    name: "Tônico de Limpeza Facial",
    imageLabel: "IMG-TONICO-LIMPEZA-FACIAL",
    icon: Waves,
    actives: ["Menta", "Melaleuca", "Lavanda", "Água de pepino", "Algas vetorizadas"],
    focus: "Purificação, frescor, equilíbrio e controle visual do brilho.",
    benefits: ["Promove sensação fresca.", "Ajuda no equilíbrio visual da pele.", "Contribui para toque limpo.", "Apoia rotina de pele mista a oleosa."]
  },
  {
    stage: "Etapa 1 — Remover e Tratar",
    name: "Demaquilante para Área dos Olhos",
    imageLabel: "IMG-DEMAQUILANTE-AREA-DOS-OLHOS",
    icon: Eye,
    actives: ["Óleo de algodão", "Éster de coco"],
    focus: "Remoção delicada de maquiagem resistente na região dos olhos.",
    benefits: ["Ajuda a remover maquiagem resistente.", "Promove sensorial delicado.", "Reduz fricção excessiva.", "Ideal para etapa específica dos olhos."]
  },
  {
    stage: "Etapa 2 — Preparar e Perfeccionar",
    name: "Primer Blur",
    imageLabel: "IMG-PRIMER-BLUR",
    icon: WandSparkles,
    actives: ["Tecnologia Soft Focus"],
    focus: "Disfarce óptico, efeito matte, aparência de poros reduzida e acabamento profissional.",
    benefits: ["Ajuda a suavizar a aparência dos poros.", "Entrega efeito visual soft focus.", "Promove acabamento mais uniforme.", "Contribui para toque matte."]
  },
  {
    stage: "Etapa 2 — Preparar e Perfeccionar",
    name: "Creme Primer Make Up Glow",
    imageLabel: "IMG-CREME-PRIMER-MAKE-UP-GLOW",
    icon: Gem,
    actives: ["Ácido hialurônico", "Pantenol", "NMF"],
    focus: "Hidratação, glow natural e melhor aderência da maquiagem.",
    benefits: ["Contribui para hidratação.", "Promove glow natural.", "Ajuda no conforto da pele.", "Prepara a pele para melhor acabamento."]
  },
  {
    stage: "Etapa 3 — Iluminar e Proteger",
    name: "Bruma Glow",
    imageLabel: "IMG-BRUMA-GLOW",
    icon: Sparkles,
    actives: ["Vitamina E", "Chá verde", "Pantenol"],
    focus: "Glow dourado e rosado, frescor, revitalização e ação antioxidante cosmética.",
    benefits: ["Promove sensação refrescante.", "Entrega luminosidade cosmética.", "Ajuda no viço visual.", "Apoia narrativa antioxidante cosmética."]
  },
  {
    stage: "Etapa 4 — Fixar e Blindar",
    name: "Blindagem para Maquiagem",
    imageLabel: "IMG-BLINDAGEM-PARA-MAQUIAGEM",
    icon: ShieldCheck,
    actives: ["Fluido multifuncional"],
    focus: "Aumentar resistência, durabilidade e versatilidade da maquiagem.",
    benefits: ["Ajuda na resistência da maquiagem.", "Pode ser usado para potencializar pigmentos.", "Contribui para durabilidade visual.", "Amplia possibilidades profissionais."]
  },
  {
    stage: "Etapa 4 — Fixar e Blindar",
    name: "Spray Fixador de Maquiagem",
    imageLabel: "IMG-SPRAY-FIXADOR-MAQUIAGEM",
    icon: Palette,
    actives: ["Película ultrafina de fixação"],
    focus: "Selagem final, maior durabilidade e acabamento natural.",
    benefits: ["Forma filme leve.", "Ajuda na fixação da maquiagem.", "Contribui para acabamento natural.", "Finaliza a rotina profissional."]
  }
];

const stages = ["Etapa 1 — Remover e Tratar", "Etapa 2 — Preparar e Perfeccionar", "Etapa 3 — Iluminar e Proteger", "Etapa 4 — Fixar e Blindar"];
const anchors = [["Conceito", "#conceito"], ["Jornada", "#jornada"], ["Produtos", "#produtos"], ["Rotina", "#rotina"], ["Claims", "#claims"], ["FAQ", "#faq"]];

function ImagePanel({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-[30px] border border-stone-200 bg-stone-100 shadow-[0_24px_80px_rgba(63,63,59,0.08)] ${tall ? "min-h-[520px]" : "min-h-[340px]"}`}>
      <Image src={image} alt={label} fill className="object-cover transition duration-700 group-hover:scale-[1.035]" sizes="(max-width: 900px) 100vw, 50vw" priority={label.includes("HERO")} />
      <div className="absolute inset-0 bg-stone-950/12" />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-xs uppercase tracking-[0.12em] text-stone-500"><Icon className="h-4 w-4" />{product.stage}</span>
          <h3 className="mt-5 text-4xl font-light leading-tight text-stone-800">{product.name}</h3>
          <p className="mt-4 text-base leading-8 text-stone-500">{product.focus}</p>
          {showIngredientDetails ? <div className="mt-6 flex flex-wrap gap-2">{product.actives.map((active) => <span key={active} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-xs text-stone-600">{active}</span>)}</div> : null}
          <ul className="mt-6 space-y-2 text-sm leading-7 text-stone-500">{product.benefits.map((benefit) => <li key={benefit} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-stone-500" />{benefit}</li>)}</ul>
        </div>
      </article>
    </Reveal>
  );
}

export default function MakePerformancePage() {
  return (
    <main className="bg-[#fbfaf7] text-stone-800">
      <section className="mx-auto grid min-h-screen max-w-[1500px] items-center gap-12 px-6 pb-24 pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">Makeup Care</p>
            <h1 className="mt-6 max-w-5xl text-[clamp(4rem,11vw,11rem)] font-light leading-[0.86] tracking-[-0.02em] text-stone-800">Linha Make Performance.</h1>
            <p className="mt-8 max-w-2xl text-2xl font-light leading-10 text-stone-500">A nova geração de cuidados que potencializa a maquiagem.</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-500">Muito além da maquiagem: uma plataforma para remover, tratar, preparar, aperfeiçoar, iluminar, proteger, fixar e blindar a beleza.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MinimalButton href="#produtos">Conhecer a plataforma</MinimalButton>
              <MinimalButton href="#rotina" variant="ghost">Ver rotina completa</MinimalButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}><ImagePanel label="IMG-HERO-MAKE-PERFORMANCE" tall /></Reveal>
      </section>

      <nav className="sticky top-24 z-20 mx-auto mb-12 flex max-w-[1500px] gap-2 overflow-x-auto px-6 py-3 lg:px-10">
        {anchors.map(([label, href]) => <a key={href} href={href} className="whitespace-nowrap rounded-full border border-stone-200 bg-white/86 px-4 py-2 text-sm text-stone-600 shadow-sm backdrop-blur transition hover:bg-stone-900 hover:text-white">{label}</a>)}
      </nav>

      <section id="conceito" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Conceito" title="Skincare e maquiagem em uma jornada profissional." text="Make Performance une cuidado facial, sensorial de preparação, acabamento profissional e finalização da maquiagem em uma arquitetura B2B completa para marcas de beleza." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <IconCard title="Remove" text="Limpeza e demaquilação com conforto." icon={Droplets} />
            <IconCard title="Prepara" text="Blur, hidratação e glow antes da maquiagem." icon={Brush} />
            <IconCard title="Ilumina" text="Bruma com frescor e acabamento luminoso." icon={Sparkles} />
            <IconCard title="Fixa" text="Filme leve para acabamento e durabilidade visual." icon={ShieldCheck} />
          </div>
        </div>
        <ImagePanel label="IMG-CONCEITO-MAKEUP-CARE" />
      </section>

      <section id="jornada" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Jornada" title="Remover, preparar, iluminar e fixar." text="Uma narrativa simples para organizar a rotina e facilitar venda consultiva, kits e treinamento comercial." />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {journey.map((item, index) => <IconCard key={item.title} title={item.title} text={item.text} icon={item.icon} index={index} />)}
        </div>
        <div className="mt-12"><ImagePanel label="IMG-JORNADA-MAKE-PERFORMANCE" /></div>
      </section>

      <section id="produtos" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Portfólio" title="Oito produtos para uma experiência completa de maquiagem." text="Da remoção ao acabamento final, cada etapa oferece um território técnico e comercial claro." />
        {stages.map((stage) => (
          <div key={stage} className="mt-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-stone-200" />
              <h2 className="rounded-full border border-stone-200 bg-white px-5 py-2 text-sm font-medium text-stone-600">{stage}</h2>
              <span className="h-px flex-1 bg-stone-200" />
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {products.filter((product) => product.stage === stage).map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}
            </div>
          </div>
        ))}
      </section>

      <section id="rotina" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <ImagePanel label="IMG-ROTINA-MAKE-PERFORMANCE" />
        <div>
          <SectionTitle eyebrow="Rotina completa" title="Uma experiência completa de beleza." text="A rotina pode ser usada por consumidoras finais, maquiadores, influenciadores e marcas que desejam transformar maquiagem em cuidado diário." />
          <div className="mt-8 grid gap-4">
            {["Remover maquiagem e protetor com Cleansing Oil.", "Equilibrar com tônico ou demaquilante específico para olhos.", "Preparar com Primer Blur ou Creme Primer Make Up Glow.", "Iluminar com Bruma Glow conforme acabamento desejado.", "Finalizar com Blindagem ou Spray Fixador."].map((step, index) => <div key={step} className="rounded-[22px] border border-stone-200 bg-white p-5 text-sm text-stone-600">{index + 1}. {step}</div>)}
          </div>
          {showProfessionalTips ? <div className="mt-6 rounded-[24px] border border-stone-200 bg-stone-50 p-6 text-sm leading-7 text-stone-600">Dica profissional: usar a blindagem para potencializar pigmentos e o spray fixador como selagem final cria uma narrativa de maior performance, desde que claims de longa duração e resistência sejam comprovados.</div> : null}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Indicação" title="Produto certo para cada necessidade." text="A plataforma organiza a recomendação por momento da maquiagem e benefício percebido." />
        <div className="mt-10 overflow-hidden rounded-[28px] border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-[960px] text-left text-sm">
              <thead className="bg-stone-50 text-xs uppercase tracking-[0.12em] text-stone-400">
                <tr>{["Produto", "Etapa", "Ativos/tecnologia", "Foco"].map((item) => <th key={item} className="p-5 font-semibold">{item}</th>)}</tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.name} className="border-t border-stone-100 align-top">
                    <td className="p-5 font-medium text-stone-800">{product.name}</td>
                    <td className="p-5 text-stone-500">{product.stage}</td>
                    <td className="p-5 text-stone-500">{product.actives.join(", ")}</td>
                    <td className="p-5 text-stone-500">{product.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {showB2BPositioning ? (
        <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="rounded-[32px] bg-stone-900 p-8 text-white md:p-12">
            <FlaskConical className="h-8 w-8 text-stone-300" />
            <h2 className="mt-8 text-5xl font-light leading-tight md:text-7xl">Makeup Care como plataforma de inovação B2B.</h2>
            <p className="mt-8 text-lg leading-8 text-white/68">Uma linha com alto potencial para kits, rotinas de preparação, venda cruzada, conteúdo tutorial e diferenciação entre skincare e maquiagem profissional.</p>
          </div>
          <ImagePanel label="IMG-INDICACAO-MAKE-PERFORMANCE" />
        </section>
      ) : null}

      {showRegulatoryNotes ? (
        <section id="claims" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
          <SectionTitle eyebrow="Claims" title="Performance com linguagem segura." text="Claims de longa duração, waterproof, resistência ao suor, resistência à água, não irritação, acne, microbiota e oleosidade devem aparecer apenas como claims sujeitos à comprovação." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <IconCard title="Seguros" text="Ajuda a remover maquiagem, prepara a pele, promove glow, sensação de frescor, acabamento uniforme e filme leve." icon={BadgeCheck} />
            <IconCard title="Comprovar" text="Longa duração, resistência à água, resistência ao suor, waterproof, não irritação, oleosidade e microbiota." icon={AlertTriangle} />
            <IconCard title="Evitar" text="Resultado garantido, maquiagem à prova de tudo, tratamento de acne ou qualquer promessa médica." icon={ListChecks} />
          </div>
        </section>
      ) : null}

      {showUsageInstructions ? (
        <section className="mx-auto max-w-[1100px] px-6 py-16 lg:px-10">
          <div className="rounded-[28px] border border-stone-200 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Uso e formulação</p>
            <p className="mt-4 text-sm leading-7 text-stone-600">A compatibilidade entre produtos, fragrância, sensorial, estabilidade, segurança de uso e claims de performance deve ser definida na formulação final e validada com testes adequados.</p>
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Desenvolvimento LQF" title="Crie uma linha que une cuidado e maquiagem profissional." text="Make Performance é uma plataforma completa para marcas que querem ocupar a jornada antes, durante e depois da maquiagem." />
          <div className="mt-8 flex flex-wrap gap-3">
            <MinimalButton href="/contato#formulario">Desenvolver esta linha</MinimalButton>
            <MinimalButton href="#produtos" variant="ghost">Ver produtos</MinimalButton>
          </div>
        </div>
        <ImagePanel label="IMG-CTA-MAKE-PERFORMANCE" />
      </section>

      <section id="faq" className="mx-auto max-w-[1100px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes." />
        <div className="mt-10 grid gap-4">
          {[
            ["O que é Makeup Care?", "É a união entre skincare e maquiagem, com produtos que limpam, preparam, iluminam, fixam e melhoram a experiência da maquiagem."],
            ["A linha substitui skincare?", "Não. Ela complementa a rotina de cuidado e maquiagem, com produtos específicos para cada etapa."],
            ["Pode prometer longa duração?", "Somente com testes adequados. A copy pública deve usar linguagem segura até a comprovação."],
            ["A linha pode ser vendida em kits?", "Sim. A estrutura por etapas favorece kits de preparação, glow, fixação e rotina completa."],
            ["É uma linha para uso profissional?", "Pode ser posicionada para uso profissional e consumidor final, dependendo da formulação, embalagem e comunicação."]
          ].map(([question, answer]) => (
            <details key={question} className="group rounded-[24px] border border-stone-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-xl font-light text-stone-800">{question}</summary>
              <p className="mt-4 text-sm leading-7 text-stone-500">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
