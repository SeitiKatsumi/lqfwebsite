import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Blend,
  CircleDot,
  Citrus,
  Coffee,
  Droplets,
  Flower2,
  Gem,
  Heart,
  Layers3,
  Leaf,
  ListChecks,
  PackageCheck,
  Palette,
  ShieldCheck,
  Sparkles,
  SprayCan,
  SunMedium,
  WandSparkles
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Linha Body Care Sensorial | LQF Farmacêutica",
  description:
    "Portfólio premium de coleções corporais sensoriais para marcas que desejam inovar com glow effect, skinificação corporal, perfumação funcional e bioativos de alta performance."
};

const showTechnicalDetails = true;
const showCommercialPositioning = true;
const image = "/products/body-care-sensorial/body-care-placeholder.jpg";

const trends = [
  {
    title: "Glow & Shimmer Beauty",
    text: "Produtos com luminosidade elegante, acabamento sofisticado e apelo visual imediato.",
    icon: Sparkles
  },
  {
    title: "Skinificação Corporal",
    text: "Ativos e narrativas antes focados no rosto aplicados ao cuidado corporal diário.",
    icon: Droplets
  },
  {
    title: "Perfumação Funcional",
    text: "Fragrâncias que entregam bem-estar, presença e construção sensorial de marca.",
    icon: SprayCan
  },
  {
    title: "Sensorial Gourmand",
    text: "Texturas e aromas inspirados em sobremesas, frutas e experiências indulgentes.",
    icon: Coffee
  },
  {
    title: "Naturais e Biotecnológicos",
    text: "Combinação de ativos vegetais, bioativos e linguagem técnica de alta performance.",
    icon: Leaf
  },
  {
    title: "Tropicalização Brasileira",
    text: "Frutas, verão, pele iluminada e energia sensorial conectadas ao lifestyle nacional.",
    icon: SunMedium
  }
];

const collections = [
  {
    title: "Linha Shine Corporal",
    concept: "Uma coleção de glow effect para corpo, cabelo e perfumação com brilho sofisticado.",
    actives: "Micas iluminadoras, emolientes leves, vitamina E e agentes de sensorial sedoso.",
    benefits: "Promove sensação de pele luminosa, toque macio e acabamento visual premium.",
    versions: ["Gel corporal shine", "Gel modelador capilar shine", "Body splash shine"],
    imageLabel: "IMG-COLECAO-SHINE-CORPORAL",
    icon: Sparkles
  },
  {
    title: "Body Shine Iluminador",
    concept: "Produto hero para acabamento corporal com luminosidade delicada e presença de pele cuidada.",
    actives: "Pigmentos perolados, óleos leves, vitamina E e blend emoliente.",
    benefits: "Ajuda a realçar a aparência da pele e entrega brilho sofisticado sem sensação pesada.",
    versions: ["Champagne glow", "Bronze glow", "Rose glow"],
    imageLabel: "IMG-BODY-SHINE-ILUMINADOR",
    icon: Gem
  },
  {
    title: "Kits Gourmands",
    concept: "Rituais corporais com fragrâncias doces, texturas indulgentes e alto potencial de presente.",
    actives: "Glicerina, manteigas vegetais, esfoliantes suaves e óleos nutritivos.",
    benefits: "Contribui para pele macia, experiência prazerosa e construção de rotina sensorial.",
    versions: ["Hidratante gourmand", "Esfoliante gourmand", "Body splash gourmand"],
    imageLabel: "IMG-KITS-GOURMANDS",
    icon: Coffee
  },
  {
    title: "Linha Melão Refrescante",
    concept: "Coleção frutada, leve e tropical para rotinas de frescor, hidratação e verão.",
    actives: "Extratos frutais, pantenol, ácido hialurônico e agentes refrescantes.",
    benefits: "Promove sensação refrescante, hidratação leve e toque confortável.",
    versions: ["Body splash melão rei", "Sérum corporal melon", "Creme mãos melão e melancia", "Creme pés melão verde"],
    imageLabel: "IMG-LINHA-MELAO-REFRESCANTE",
    icon: Citrus
  },
  {
    title: "Caju Vibes",
    concept: "Linha solar, brasileira e vibrante, com narrativa de fruta, energia e pele luminosa.",
    actives: "Extrato de caju, vitamina E, óleos vegetais e hidratantes leves.",
    benefits: "Auxilia no toque macio e cria uma assinatura olfativa tropical memorável.",
    versions: ["Body splash", "Loção corporal", "Óleo seco"],
    imageLabel: "IMG-CAJU-VIBES",
    icon: SunMedium
  },
  {
    title: "Coco Verão",
    concept: "Coleção cremosa e confortável para marcas que querem traduzir praia, nutrição e cuidado.",
    actives: "Óleo de coco, manteiga vegetal, glicerina e pantenol.",
    benefits: "Contribui para maciez, conforto e sensação de pele nutrida.",
    versions: ["Hidratante", "Body splash", "Manteiga corporal"],
    imageLabel: "IMG-COCO-VERAO",
    icon: Leaf
  },
  {
    title: "Morango dos Sonhos",
    concept: "Linha gourmand frutada com forte apelo visual, olfativo e potencial para kits.",
    actives: "Extrato de morango, vitamina E, glicerina e emolientes leves.",
    benefits: "Promove sensação de pele macia e experiência divertida sem perder sofisticação.",
    versions: ["Creme corporal", "Esfoliante", "Body splash"],
    imageLabel: "IMG-MORANGO-DOS-SONHOS",
    icon: Flower2
  },
  {
    title: "Manteigas Corporais Premium",
    concept: "Coleção de maior densidade sensorial para nutrição, conforto e ritual noturno.",
    actives: "Manteiga de karité, manteiga de cacau, óleos vegetais e vitamina E.",
    benefits: "Ajuda a proteger contra ressecamento e melhora a aparência de pele mais confortável.",
    versions: ["Frutas tropicais", "Frutas vermelhas", "Baunilha confortável"],
    imageLabel: "IMG-MANTEIGAS-CORPORAIS-PREMIUM",
    icon: Heart
  }
];

const productCards = [
  { title: "Gel corporal shine", collection: "Linha Shine Corporal", actives: "Micas e emolientes leves", label: "IMG-GEL-CORPORAL-SHINE", icon: Sparkles },
  { title: "Gel modelador capilar shine", collection: "Linha Shine Corporal", actives: "Agentes filmógenos e brilho cosmético", label: "IMG-GEL-MODELADOR-CAPILAR-SHINE", icon: Palette },
  { title: "Body splash shine", collection: "Linha Shine Corporal", actives: "Fragrância e partículas luminosas", label: "IMG-BODY-SPLASH-SHINE", icon: SprayCan },
  { title: "Hidratante gourmand", collection: "Kits Gourmands", actives: "Glicerina e manteigas vegetais", label: "IMG-HIDRATANTE-GOURMAND", icon: Droplets },
  { title: "Esfoliante gourmand", collection: "Kits Gourmands", actives: "Esfoliantes suaves e óleos nutritivos", label: "IMG-ESFOLIANTE-GOURMAND", icon: CircleDot },
  { title: "Body splash gourmand", collection: "Kits Gourmands", actives: "Perfumação confortável e sensorial", label: "IMG-BODY-SPLASH-GOURMAND", icon: SprayCan },
  { title: "Body splash melão rei", collection: "Linha Melão Refrescante", actives: "Fragrância tropical e frescor", label: "IMG-BODY-SPLASH-MELAO-REI", icon: Citrus },
  { title: "Sérum corporal melon", collection: "Linha Melão Refrescante", actives: "Ácido hialurônico e pantenol", label: "IMG-SERUM-CORPORAL-MELON", icon: Blend },
  { title: "Creme mãos melão e melancia", collection: "Linha Melão Refrescante", actives: "Glicerina e extratos frutais", label: "IMG-CREME-MAOS-MELAO-MELANCIA", icon: Heart },
  { title: "Creme pés melão verde", collection: "Linha Melão Refrescante", actives: "Emolientes e agentes de conforto", label: "IMG-CREME-PES-MELAO-VERDE", icon: ShieldCheck },
  { title: "Manteiga frutas tropicais", collection: "Manteigas Premium", actives: "Karité, óleos vegetais e vitamina E", label: "IMG-MANTEIGAS-FRUTAS-TROPICAIS", icon: SunMedium },
  { title: "Manteiga frutas vermelhas", collection: "Manteigas Premium", actives: "Manteigas vegetais e fragrância gourmand", label: "IMG-MANTEIGAS-FRUTAS-VERMELHAS", icon: Flower2 }
];

const architecture = [
  {
    title: "Produto hero",
    text: "Um item visualmente marcante, como Body Shine Iluminador, para atrair atenção e gerar desejo.",
    icon: Gem
  },
  {
    title: "Rotina de alta recorrência",
    text: "Hidratantes, séruns e body splashes para recompra e uso diário.",
    icon: Layers3
  },
  {
    title: "Kits presenteáveis",
    text: "Combinações gourmand, tropicais ou shine para campanhas sazonais e datas comerciais.",
    icon: PackageCheck
  },
  {
    title: "Coleções sazonais",
    text: "Frutas, verão, brilho e conforto para lançamentos com storytelling forte.",
    icon: WandSparkles
  }
];

const faqs = [
  {
    question: "A Linha Body Care Sensorial é uma linha pronta?",
    answer:
      "É uma plataforma de inovação B2B. A LQF pode usar esses territórios como ponto de partida para desenvolver fórmulas, fragrâncias, texturas e embalagens adequadas à estratégia da marca."
  },
  {
    question: "É possível misturar coleções?",
    answer:
      "Sim. Uma marca pode combinar shine, gourmand, tropical e manteigas premium em uma arquitetura própria, desde que faça sentido para público, preço, sensorial e embalagem."
  },
  {
    question: "Os produtos podem ter ativos de skincare?",
    answer:
      "Sim. A skinificação corporal permite trabalhar ativos como pantenol, niacinamida, ácido hialurônico, vitamina E, manteigas e óleos vegetais com linguagem cosmética segura."
  },
  {
    question: "A página usa claims médicos?",
    answer:
      "Não. A comunicação é cosmética e usa termos como auxilia, contribui, promove sensação, melhora a aparência e ajuda a proteger."
  }
];

function PlaceholderImage({ label, priority = false }: { label: string; priority?: boolean }) {
  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-[1.75rem] bg-mist shadow-soft">
      <Image
        src={image}
        alt={label}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 48vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-graphite/12" />
      <div className="absolute left-5 top-5 max-w-[calc(100%-2.5rem)] truncate rounded-full bg-white/86 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-graphite/60 backdrop-blur-md">
        {label}
      </div>
    </div>
  );
}

export default function BodyCareSensorialPage() {
  return (
    <main className="overflow-hidden">
      <section className="grain section-shell pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Corporal • plataforma B2B</p>
            <h1 className="mt-5 text-[clamp(3rem,7.8vw,8.4rem)] font-light leading-[0.94] text-graphite">
              Linha Body Care Sensorial.
            </h1>
            <p className="mt-7 max-w-2xl text-[clamp(1.35rem,2.2vw,2.1rem)] font-light leading-tight text-graphite">
              Beleza, sensorialidade e performance em coleções que transformam o autocuidado em experiência.
            </p>
            <p className="body-large mt-6 max-w-2xl">
              Um portfólio de coleções corporais para marcas que desejam inovar com glow effect, skinificação corporal, perfumação funcional, ingredientes naturais, sensorial gourmand, bioativos de alta performance e tropicalização da beleza brasileira.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <MinimalButton href="#colecoes">Ver coleções</MinimalButton>
              <MinimalButton href="/contato#formulario" variant="ghost">
                Desenvolver plataforma corporal
              </MinimalButton>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="group relative aspect-[1.12]">
            <PlaceholderImage label="IMG-HERO-BODY-CARE-SENSORIAL" priority />
            <div className="absolute -bottom-5 left-5 right-5 rounded-[1.5rem] border border-graphite/10 bg-white/88 p-4 shadow-soft backdrop-blur-xl md:left-auto md:w-80">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-graphite text-white">
                  <WandSparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-graphite">Inovação corporal</p>
                  <p className="text-xs leading-5 text-graphite/58">Coleções, rituais e produtos de alto apelo comercial.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-20 md:py-32">
        <SectionTitle
          eyebrow="Tendências"
          title="Territórios que transformam cuidado corporal em experiência de marca."
          text="A inovação corporal cresce quando une visual, fragrância, textura, benefício percebido e rotina. Cada tendência pode virar coleção, campanha, kit ou linha completa."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {trends.map((trend, index) => {
            const Icon = trend.icon;
            return (
              <Reveal key={trend.title} delay={(index % 3) * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-8 text-2xl font-light leading-tight text-graphite">{trend.title}</h2>
                <p className="mt-4 text-sm leading-7 text-graphite/62">{trend.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.05fr]">
            <div className="group relative min-h-[360px] bg-mist lg:min-h-[620px]">
              <PlaceholderImage label="IMG-CONCLUSAO-COMERCIAL-BODY-CARE" />
            </div>
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow">Visão geral</p>
              <h2 className="mt-5 text-[clamp(2.3rem,5vw,5.8rem)] font-light leading-[1.02] text-graphite">
                Uma plataforma de coleções, não apenas uma lista de produtos.
              </h2>
              <p className="body-large mt-7">
                A Linha Body Care Sensorial organiza produtos por desejo, ocasião e experiência: brilho, hidratação, banho, perfumação, textura, frutas tropicais e rituais indulgentes. Isso cria caminhos para lançamentos sazonais, kits e linhas permanentes.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {["Glow effect", "Skinificação corporal", "Ritual gourmand", "Tropicalização premium"].map((item) => (
                  <div key={item} className="rounded-[1.25rem] bg-porcelain p-5 text-lg font-light text-graphite">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="colecoes" className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Coleções"
          title="Oito coleções para diferentes territórios de desejo corporal."
          text="Cada coleção pode ser desenvolvida como linha independente, kit sazonal, extensão de marca ou cápsula de inovação."
        />
        <div className="mt-12 grid gap-5">
          {collections.map((collection, index) => {
            const Icon = collection.icon;
            return (
              <Reveal key={collection.title} delay={(index % 2) * 0.04} className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white shadow-soft">
                <div className={`grid gap-0 lg:grid-cols-[0.92fr_1.08fr] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="group relative min-h-[360px] bg-mist">
                    <PlaceholderImage label={collection.imageLabel} />
                  </div>
                  <div className="p-7 md:p-10 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-graphite/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-graphite/62">
                        coleção {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-porcelain text-graphite">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h2 className="mt-8 text-[clamp(2.1rem,4vw,4.6rem)] font-light leading-[1.02] text-graphite">{collection.title}</h2>
                    <p className="mt-5 text-sm leading-7 text-graphite/64">{collection.concept}</p>
                    {showTechnicalDetails ? (
                      <div className="mt-7 grid gap-3 md:grid-cols-2">
                        <div className="rounded-[1.35rem] bg-porcelain p-5">
                          <p className="text-xs font-medium uppercase tracking-[0.14em] text-graphite/42">Ativos e base técnica</p>
                          <p className="mt-3 text-sm leading-7 text-graphite/66">{collection.actives}</p>
                        </div>
                        <div className="rounded-[1.35rem] bg-porcelain p-5">
                          <p className="text-xs font-medium uppercase tracking-[0.14em] text-graphite/42">Benefícios cosméticos</p>
                          <p className="mt-3 text-sm leading-7 text-graphite/66">{collection.benefits}</p>
                        </div>
                      </div>
                    ) : null}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {collection.versions.map((version) => (
                        <span key={version} className="rounded-full border border-graphite/10 px-3 py-2 text-xs text-graphite/62">
                          {version}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Produtos"
          title="Cards para montar uma arquitetura sensorial modular."
          text="Esses produtos podem operar como itens de entrada, produtos hero, kits presenteáveis ou extensões sazonais da marca."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {productCards.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.title} delay={(index % 3) * 0.035} className="group overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
                <div className="relative aspect-[16/10]">
                  <PlaceholderImage label={product.label} />
                </div>
                <div className="p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-porcelain text-graphite">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-7 text-2xl font-light leading-tight text-graphite">{product.title}</h2>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-graphite/42">{product.collection}</p>
                  <p className="mt-5 text-sm leading-7 text-graphite/62">{product.actives}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Comparativo"
          title="Coleções com papéis comerciais diferentes."
          text="A tabela ajuda a escolher quais territórios priorizar conforme canal, público, ticket e calendário de lançamento."
        />
        <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left">
              <thead className="bg-porcelain text-xs uppercase tracking-[0.14em] text-graphite/48">
                <tr>
                  <th className="px-5 py-4 font-medium">Coleção</th>
                  <th className="px-5 py-4 font-medium">Território</th>
                  <th className="px-5 py-4 font-medium">Ativos</th>
                  <th className="px-5 py-4 font-medium">Benefício cosmético</th>
                  <th className="px-5 py-4 font-medium">Papel comercial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/8 text-sm text-graphite/68">
                {collections.map((collection) => (
                  <tr key={collection.title} className="transition hover:bg-porcelain/70">
                    <td className="px-5 py-5 font-medium text-graphite">{collection.title}</td>
                    <td className="px-5 py-5">{collection.concept}</td>
                    <td className="px-5 py-5">{collection.actives}</td>
                    <td className="px-5 py-5">{collection.benefits}</td>
                    <td className="px-5 py-5">{collection.versions.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {showCommercialPositioning ? (
        <section className="section-shell pb-20 md:pb-32">
          <SectionTitle
            eyebrow="Arquitetura comercial"
            title="Como organizar a linha para vender por desejo, rotina e sazonalidade."
            text="A recomendação é combinar produto hero, itens de recompra, kits e coleções sazonais para aumentar presença de prateleira e recorrência."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {architecture.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.04} className="rounded-[1.75rem] border border-graphite/10 bg-white p-7 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-graphite text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-8 text-3xl font-light leading-tight text-graphite">{item.title}</h2>
                  <p className="mt-5 text-sm leading-7 text-graphite/62">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </section>
      ) : null}

      <section className="section-shell pb-20 md:pb-32">
        <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-graphite text-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr] lg:items-stretch">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow text-white/54">Conclusão comercial</p>
              <h2 className="mt-5 text-[clamp(2.4rem,5vw,5.8rem)] font-light leading-[1.02]">
                Uma plataforma para lançar desejo, não apenas hidratação.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                A LQF pode transformar esses territórios em uma linha proprietária com conceito, fórmula, sensorial, embalagem, testes, regularização e produção alinhados à estratégia da marca.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MinimalButton href="/contato#formulario" variant="light">
                  Desenvolver Body Care Sensorial
                </MinimalButton>
                <MinimalButton href="/produtos/corporal/cases-de-sucesso" variant="darkGhost">
                  Ver Cases Corporais
                </MinimalButton>
              </div>
            </div>
            <div className="group relative min-h-[360px]">
              <PlaceholderImage label="IMG-CONCLUSAO-COMERCIAL-BODY-CARE" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-24 md:pb-36">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" text="Respostas rápidas para orientar decisão, escopo e posicionamento da plataforma." />
        <div className="mt-10 grid gap-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 2) * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-porcelain text-graphite">
                  <ListChecks className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-xl font-medium text-graphite">{faq.question}</h2>
                  <p className="mt-3 text-sm leading-7 text-graphite/62">{faq.answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
