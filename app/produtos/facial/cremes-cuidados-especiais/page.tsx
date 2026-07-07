import type { Metadata } from "next";
import Image from "next/image";
import {
  AlertTriangle,
  BadgeCheck,
  CheckCircle2,
  Droplets,
  FlaskConical,
  Gauge,
  Layers3,
  ListChecks,
  Microscope,
  Moon,
  ScanFace,
  ShieldCheck,
  Sparkles,
  SunMedium
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.cremesCuidadosEspeciais;

const showRegulatoryNotes = true;
const showB2BPositioning = true;
const showIngredientDetails = true;
const showUsageWarnings = true;
const image = "/products/cremes-cuidados-especiais/cremes-placeholder.jpg";

const sharedBase = [
  {
    title: "Niacinamida como elo técnico",
    text: "Ativo versátil associado à barreira cutânea, suavidade, aparência uniforme e equilíbrio visual da pele.",
    icon: ShieldCheck
  },
  {
    title: "Texturas inteligentes",
    text: "Bases pensadas para unir toque premium, espalhabilidade, absorção confortável e experiência de uso contínuo.",
    icon: Droplets
  },
  {
    title: "Ativos protagonistas",
    text: "Cada produto explora um território de skincare moderno com ativos reconhecidos e linguagem cosmética segura.",
    icon: FlaskConical
  },
  {
    title: "Coleção modular",
    text: "Arquitetura ideal para kits, rotinas por necessidade, campanhas educativas e expansão de portfólio.",
    icon: Layers3
  }
];

const creams = [
  {
    title: "Creme Facial com Retinol",
    slug: "retinol",
    imageLabel: "IMG-CREME-FACIAL-RETINOL",
    icon: Moon,
    actives: ["Palmitato de retinol nanoencapsulado", "Niacinamida", "Pantenol", "Ácidos graxos essenciais"],
    focus: "Firmeza, textura refinada e suavização visual de linhas finas.",
    text: "Um creme noturno com narrativa de renovação progressiva, conforto e aparência mais lisa. A nanoencapsulação ajuda a construir um discurso técnico de entrega controlada e maior sofisticação sensorial.",
    benefits: ["Auxilia na aparência de firmeza.", "Contribui para textura visualmente refinada.", "Ajuda a suavizar a aparência de linhas finas.", "Promove sensação de pele nutrida e confortável."],
    need: "Linhas finas, textura irregular e perda visual de firmeza.",
    warning: "Uso preferencialmente noturno. Recomendar filtro solar durante o dia."
  },
  {
    title: "Creme Facial com Ácido Salicílico",
    slug: "salicilico",
    imageLabel: "IMG-CREME-FACIAL-ACIDO-SALICILICO",
    icon: Gauge,
    actives: ["Ácido salicílico", "Niacinamida", "Affipore", "Extrato de Barosma Betulina"],
    focus: "Controle de oleosidade, toque seco, aparência de poros reduzida e pele equilibrada.",
    text: "Uma fórmula direcionada para peles oleosas ou mistas, com sensorial leve e acabamento mais seco. O conceito favorece equilíbrio, textura visualmente uniforme e rotina diária sem peso.",
    benefits: ["Ajuda a controlar a oleosidade.", "Contribui para aparência de poros menos evidentes.", "Promove toque seco confortável.", "Auxilia na aparência de pele equilibrada."],
    need: "Oleosidade, brilho excessivo e poros aparentes.",
    warning: "Recomendar filtro solar durante o dia e atenção ao uso combinado com outros ácidos."
  },
  {
    title: "Creme Facial com Ácido Hialurônico",
    slug: "hialuronico",
    imageLabel: "IMG-CREME-FACIAL-ACIDO-HIALURONICO",
    icon: Droplets,
    actives: ["Ácido hialurônico", "Silanol", "Niacinamida", "Pantenol"],
    focus: "Hidratação intensa, viço, elasticidade e aparência de preenchimento.",
    text: "Uma proposta hidratante de alto apelo, com sensorial confortável e narrativa de pele viçosa. Ideal para marcas que buscam um produto de entrada com desejo amplo e uso diário.",
    benefits: ["Promove hidratação intensa.", "Contribui para aparência de viço.", "Auxilia na sensação de elasticidade.", "Melhora a aparência de pele preenchida pelo cuidado hidratante."],
    need: "Desidratação, falta de viço e sensação de pele repuxada.",
    warning: "Uso diário conforme orientação de rotulagem."
  },
  {
    title: "Creme Facial com Ácido Glicólico",
    slug: "glicolico",
    imageLabel: "IMG-CREME-FACIAL-ACIDO-GLICOLICO",
    icon: Sparkles,
    actives: ["Ácido glicólico", "Niacinamida", "Pantenol"],
    focus: "Renovação da superfície da pele, luminosidade e textura refinada.",
    text: "Um creme de renovação cosmética para melhorar a aparência da textura e estimular uma rotina de pele mais luminosa. A presença de niacinamida e pantenol equilibra a narrativa com conforto.",
    benefits: ["Auxilia na renovação da superfície da pele.", "Contribui para aparência mais luminosa.", "Ajuda a refinar a textura visual.", "Promove sensação de pele mais macia."],
    need: "Textura opaca, aspereza visual e falta de luminosidade.",
    warning: "Recomendar filtro solar durante o dia e uso gradual conforme tolerância."
  },
  {
    title: "Creme Facial com Arbutin e Ácido Tranexâmico",
    slug: "arbutin-tranexamico",
    imageLabel: "IMG-CREME-FACIAL-ARBUTIN-TRANEXAMICO",
    icon: ScanFace,
    actives: ["Arbutin", "Ácido tranexâmico", "Niacinamida"],
    focus: "Uniformização visual do tom e melhora da aparência de manchas.",
    text: "Uma fórmula voltada para uniformidade visual, luminosidade e aparência mais equilibrada do tom da pele, sempre com comunicação cosmética segura e claims sujeitos à comprovação.",
    benefits: ["Contribui para aparência de tom mais uniforme.", "Ajuda a melhorar a aparência de manchas.", "Auxilia na luminosidade da pele.", "Promove cuidado facial direcionado."],
    need: "Tom irregular, aparência de manchas e perda de luminosidade.",
    warning: "Recomendar filtro solar durante o dia. Claims de clareamento exigem comprovação."
  },
  {
    title: "Creme Facial com Vitamina C",
    slug: "vitamina-c",
    imageLabel: "IMG-CREME-FACIAL-VITAMINA-C",
    icon: SunMedium,
    actives: ["Ácido ascórbico nanoencapsulado", "Extrato de Biofoetida", "Ácido ferúlico", "Niacinamida"],
    focus: "Luminosidade, ação antioxidante e aparência mais radiante.",
    text: "Um creme antioxidante com alto valor percebido, ideal para comunicação de glow saudável, proteção cosmética contra radicais livres e aparência mais radiante.",
    benefits: ["Contribui para ação antioxidante cosmética.", "Promove aparência mais radiante.", "Auxilia na luminosidade da pele.", "Ajuda a preservar aparência saudável."],
    need: "Pele opaca, rotina urbana e desejo de luminosidade.",
    warning: "Recomendar filtro solar durante o dia e validação de estabilidade conforme formulação final."
  }
];

const needs = [
  ["Linhas finas e textura irregular", "Creme Facial com Retinol", "Firmeza e suavização visual"],
  ["Oleosidade e poros aparentes", "Creme Facial com Ácido Salicílico", "Equilíbrio e toque seco"],
  ["Desidratação e falta de viço", "Creme Facial com Ácido Hialurônico", "Hidratação e aparência preenchida"],
  ["Aspereza e opacidade", "Creme Facial com Ácido Glicólico", "Renovação e luminosidade"],
  ["Tom irregular e manchas aparentes", "Arbutin + Ácido Tranexâmico", "Uniformização visual"],
  ["Pele apagada e rotina urbana", "Creme Facial com Vitamina C", "Glow e ação antioxidante cosmética"]
];

const routine = [
  {
    title: "Manhã",
    text: "Ácido hialurônico ou vitamina C podem compor a rotina diurna, sempre com filtro solar ao final.",
    icon: SunMedium
  },
  {
    title: "Noite",
    text: "Retinol, ácido glicólico e rotinas uniformizadoras podem ser organizados para uso noturno e progressivo.",
    icon: Moon
  },
  {
    title: "Alternância",
    text: "Ácidos, retinoides e vitamina C devem ser combinados com estratégia, evitando sobreposição agressiva.",
    icon: Layers3
  },
  {
    title: "Conforto",
    text: "Niacinamida, pantenol e bases inteligentes ajudam a sustentar suavidade e barreira cutânea.",
    icon: ShieldCheck
  }
];

const safeClaims = [
  "Promove hidratação e conforto.",
  "Auxilia na aparência de pele mais uniforme.",
  "Contribui para textura visualmente refinada.",
  "Ajuda a manter a barreira cutânea.",
  "Promove sensação de pele macia.",
  "Pele com aparência mais luminosa.",
  "Contribui para ação antioxidante cosmética.",
  "Ajuda a equilibrar a aparência de oleosidade."
];

const proofClaims = [
  "Clareamento de manchas.",
  "Redução de acne.",
  "Redução percentual de rugas.",
  "Redução de poros.",
  "Aumento de firmeza em X dias.",
  "Resultados quantitativos de luminosidade.",
  "Melhora clínica de textura.",
  "Eficácia dermatologicamente comprovada."
];

const avoidClaims = [
  "Elimina manchas.",
  "Trata acne.",
  "Remove rugas.",
  "Fecha poros definitivamente.",
  "Substitui procedimentos dermatológicos.",
  "Resultado garantido.",
  "Uso sem necessidade de fotoproteção."
];

const faqs = [
  ["Todos os cremes têm niacinamida?", "Sim. A proposta da linha usa a niacinamida como ativo comum para reforçar suavidade, barreira cutânea, textura e aparência geral da pele."],
  ["Posso usar retinol e ácido glicólico no mesmo dia?", "A combinação deve ser avaliada com cuidado. Para comunicação pública, a recomendação é orientar alternância e uso progressivo conforme tolerância e rotulagem."],
  ["Os produtos com ácidos exigem filtro solar?", "Sim. Produtos com ácidos, retinoides, vitamina C e uniformizadores devem reforçar a recomendação de uso de filtro solar durante o dia."],
  ["A linha clareia manchas?", "A linguagem deve ser cosmética e segura: ajuda a melhorar a aparência de manchas e contribui para uniformização visual do tom. Claims de clareamento exigem comprovação."],
  ["A LQF pode adaptar a linha para uma marca?", "Sim. É possível ajustar ativos, textura, concentração, embalagem, fragrância, claims, rotulagem e arquitetura de linha conforme estratégia e viabilidade técnica."]
];

function PlaceholderImage({ label, priority = false }: { label: string; priority?: boolean }) {
  return (
    <div className="group relative h-full min-h-[320px] w-full overflow-hidden rounded-[1.75rem] bg-mist shadow-soft">
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

export default function CremesCuidadosEspeciaisPage() {
  return (
    <main className="overflow-hidden">
      <section className="grain section-shell pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Facial • cremes especiais • skincare técnico</p>
            <h1 className="mt-5 text-[clamp(3rem,7.6vw,8.2rem)] font-light leading-[0.94] text-graphite">
              Cremes para Cuidados Especiais da Pele.
            </h1>
            <p className="mt-7 max-w-2xl text-[clamp(1.35rem,2.2vw,2.1rem)] font-light leading-tight text-graphite">
              Ativos consagrados, texturas inteligentes e cuidado facial para cada necessidade da pele.
            </p>
            <p className="body-large mt-6 max-w-2xl">
              Uma coleção de cremes faciais com ativos protagonistas do skincare moderno, todos associados à niacinamida para potencializar suavidade, performance cosmética, barreira cutânea, textura e aparência geral.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <MinimalButton href="#produtos">Ver produtos</MinimalButton>
              <MinimalButton href="/contato#formulario" variant="ghost">Desenvolver linha facial</MinimalButton>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[1.12]">
            <PlaceholderImage label="IMG-HERO-CREMES-CUIDADOS-ESPECIAIS" priority />
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-20 md:py-32">
        <SectionTitle
          eyebrow="Conceito da linha"
          title="Uma plataforma facial modular para necessidades específicas."
          text="A linha organiza ativos de alta procura em uma arquitetura simples de entender, com cremes direcionados para textura, oleosidade, hidratação, luminosidade, uniformização visual e ação antioxidante cosmética."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sharedBase.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite"><Icon className="h-5 w-5" /></span>
                <h2 className="mt-8 text-2xl font-light text-graphite">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-graphite/62">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.05fr]">
            <div className="relative min-h-[360px] bg-mist lg:min-h-[620px]">
              <PlaceholderImage label="IMG-BASE-COMUM-NIACINAMIDA" />
            </div>
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow">Base comum</p>
              <h2 className="mt-5 text-[clamp(2.35rem,5vw,5.8rem)] font-light leading-[1.02] text-graphite">
                Niacinamida como base de suavidade e performance cosmética.
              </h2>
              <p className="body-large mt-7">
                A niacinamida funciona como eixo técnico da coleção: ajuda a reforçar a aparência de barreira equilibrada, melhora a sensação de conforto e sustenta uma comunicação moderna para diferentes necessidades da pele.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {["Barreira cutânea", "Textura e maciez", "Uniformidade visual", "Conforto de uso"].map((item) => (
                  <div key={item} className="rounded-[1.25rem] bg-porcelain p-5 text-lg font-light text-graphite">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="produtos" className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Visão geral dos produtos"
          title="Seis cremes, seis territórios de cuidado facial."
          text="Cada produto apresenta um ativo protagonista, uma necessidade clara e um discurso cosmético seguro para marcas que desejam criar uma linha facial robusta."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {creams.map((cream, index) => {
            const Icon = cream.icon;
            return (
              <Reveal key={cream.title} delay={(index % 3) * 0.04} className="group overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
                <div className="relative aspect-[4/3]"><PlaceholderImage label={cream.imageLabel} /></div>
                <div className="p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite"><Icon className="h-5 w-5" /></span>
                  <h2 className="mt-8 text-3xl font-light leading-tight text-graphite">{cream.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-graphite/62">{cream.focus}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cream.actives.slice(0, 3).map((active) => <span key={active} className="rounded-full bg-porcelain px-3 py-2 text-xs text-graphite/58">{active}</span>)}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Seções individuais"
          title="Cada creme com ativo, benefício e indicação claros."
          text="A estrutura facilita apresentação comercial, desenvolvimento de kits e comunicação por necessidade de pele."
        />
        <div className="mt-12 grid gap-5">
          {creams.map((cream, index) => {
            const Icon = cream.icon;
            return (
              <Reveal key={cream.slug} delay={(index % 2) * 0.04} className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white shadow-soft">
                <div className={`grid gap-0 lg:grid-cols-[0.92fr_1.08fr] ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-[360px] bg-mist"><PlaceholderImage label={cream.imageLabel} /></div>
                  <div className="p-7 md:p-10 lg:p-12">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite"><Icon className="h-5 w-5" /></span>
                    <h2 className="mt-8 text-[clamp(2rem,4vw,4.4rem)] font-light leading-[1.02] text-graphite">{cream.title}</h2>
                    <h3 className="mt-5 text-xl font-medium text-graphite">{cream.focus}</h3>
                    <p className="mt-5 text-sm leading-7 text-graphite/64">{cream.text}</p>
                    {showIngredientDetails ? (
                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {cream.actives.map((active) => <div key={active} className="rounded-[1.25rem] bg-porcelain p-4 text-sm leading-6 text-graphite/66">{active}</div>)}
                      </div>
                    ) : null}
                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                      {cream.benefits.map((benefit) => (
                        <div key={benefit} className="flex gap-3 rounded-[1.25rem] border border-graphite/10 p-4 text-sm leading-6 text-graphite/66">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brass" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 rounded-[1.25rem] bg-porcelain p-5 text-sm leading-7 text-graphite/64"><strong className="text-graphite">Indicação:</strong> {cream.need}</p>
                    {showUsageWarnings ? (
                      <p className="mt-3 flex gap-3 rounded-[1.25rem] border border-graphite/10 p-5 text-sm leading-7 text-graphite/62">
                        <AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-brass" />
                        <span>{cream.warning}</span>
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="aspect-[1.12]"><PlaceholderImage label="IMG-INDICACAO-POR-NECESSIDADE-SKINCARE" /></Reveal>
          <SectionTitle
            eyebrow="Indicação por necessidade"
            title="Escolha o creme pelo que a pele precisa comunicar."
            text="A matriz ajuda a transformar um portfólio técnico em uma jornada de compra consultiva, clara e fácil de entender."
          />
        </div>
        <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead className="bg-porcelain text-xs uppercase tracking-[0.14em] text-graphite/48">
                <tr>
                  {["Necessidade", "Creme indicado", "Benefício percebido"].map((head) => <th key={head} className="px-5 py-4 font-medium">{head}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/8 text-sm text-graphite/68">
                {needs.map((row) => (
                  <tr key={row[0]} className="transition hover:bg-porcelain/70">
                    {row.map((cell, index) => <td key={cell} className={`px-5 py-5 ${index === 0 ? "font-medium text-graphite" : ""}`}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Tabela comparativa"
          title="Ativos, foco e posicionamento em uma mesma leitura."
          text="Uma comparação direta para orientar desenvolvimento, discurso comercial e arquitetura de linha."
        />
        <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1120px] border-collapse text-left">
              <thead className="bg-porcelain text-xs uppercase tracking-[0.14em] text-graphite/48">
                <tr>
                  {["Produto", "Ativos protagonistas", "Foco cosmético", "Melhor indicação"].map((head) => <th key={head} className="px-5 py-4 font-medium">{head}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/8 text-sm text-graphite/68">
                {creams.map((cream) => (
                  <tr key={cream.title} className="transition hover:bg-porcelain/70">
                    <td className="px-5 py-5 font-medium text-graphite">{cream.title}</td>
                    <td className="px-5 py-5">{cream.actives.join(", ")}</td>
                    <td className="px-5 py-5">{cream.focus}</td>
                    <td className="px-5 py-5">{cream.need}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionTitle
            eyebrow="Rotina recomendada"
            title="Uma linha técnica precisa de orientação simples."
            text="A rotina deve deixar claro quando usar, como alternar ativos e por que a fotoproteção é indispensável em produtos com ácidos, retinoides, vitamina C e uniformizadores."
          />
          <Reveal className="aspect-[1.12]"><PlaceholderImage label="IMG-ROTINA-CREMES-FACIAIS" /></Reveal>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {routine.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite"><Icon className="h-5 w-5" /></span>
                <h2 className="mt-8 text-2xl font-light text-graphite">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-graphite/62">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {showRegulatoryNotes ? (
        <section className="section-shell pb-20 md:pb-32">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal className="aspect-[1.12]"><PlaceholderImage label="IMG-CLAIMS-SEGURANCA-COSMETICA" /></Reveal>
            <SectionTitle
              eyebrow="Claims e segurança regulatória"
              title="Claims devem ser cosméticos, responsáveis e comprováveis."
              text="Clareamento, acne, rugas, poros, firmeza e resultados quantitativos devem aparecer apenas como claims sujeitos à comprovação."
            />
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              { title: "Claims seguros", items: safeClaims, icon: BadgeCheck },
              { title: "Sujeitos à comprovação", items: proofClaims, icon: Microscope },
              { title: "Evitar", items: avoidClaims, icon: AlertTriangle }
            ].map((group) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.title} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite"><Icon className="h-5 w-5" /></span>
                  <h2 className="mt-8 text-2xl font-light text-graphite">{group.title}</h2>
                  <ul className="mt-5 grid gap-2 text-sm leading-7 text-graphite/62">
                    {group.items.map((claim) => <li key={claim}>• {claim}</li>)}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </section>
      ) : null}

      {showB2BPositioning ? (
        <section className="section-shell pb-20 md:pb-32">
          <Reveal className="rounded-[2rem] border border-graphite/10 bg-white p-8 shadow-soft md:p-12">
            <p className="eyebrow">Posicionamento comercial B2B</p>
            <h2 className="mt-5 max-w-5xl text-[clamp(2.4rem,5vw,5.8rem)] font-light leading-[1.02] text-graphite">
              Uma coleção facial pronta para vitrines técnicas e rotinas consultivas.
            </h2>
            <p className="body-large mt-7 max-w-4xl">
              A linha permite criar kits por necessidade, campanhas por ativo protagonista, venda recorrente e uma arquitetura premium para marcas que desejam competir no território dermocosmético.
            </p>
            <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {["Ativos reconhecidos", "Linha modular", "Venda por necessidade", "Rotina premium"].map((item) => <div key={item} className="rounded-[1.25rem] bg-porcelain p-5 text-lg font-light text-graphite">{item}</div>)}
            </div>
          </Reveal>
        </section>
      ) : null}

      <section className="section-shell pb-20 md:pb-32">
        <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-graphite text-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr] lg:items-stretch">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow text-white/54">CTA final</p>
              <h2 className="mt-5 text-[clamp(2.4rem,5vw,5.8rem)] font-light leading-[1.02]">
                Crie uma linha facial técnica, desejável e fácil de vender.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                A LQF pode apoiar conceito, ativos, textura, embalagem, testes, rotulagem e produção para transformar essa coleção em uma linha proprietária de alto valor percebido.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MinimalButton href="/contato#formulario" variant="light">Desenvolver linha de cremes</MinimalButton>
                <MinimalButton href="#produtos" variant="darkGhost">Ver produtos</MinimalButton>
              </div>
            </div>
            <div className="relative min-h-[360px]"><PlaceholderImage label="IMG-CTA-CREMES-CUIDADOS-ESPECIAIS" /></div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-24 md:pb-36">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" text="Respostas rápidas para orientar formulação, uso, claims e estratégia comercial da linha." />
        <div className="mt-10 grid gap-3">
          {faqs.map(([question, answer], index) => (
            <Reveal key={question} delay={(index % 2) * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-porcelain text-graphite">
                  <ListChecks className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-xl font-medium text-graphite">{question}</h2>
                  <p className="mt-3 text-sm leading-7 text-graphite/62">{answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
