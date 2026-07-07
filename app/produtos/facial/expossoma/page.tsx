import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  CloudSun,
  Droplets,
  FlaskConical,
  Gauge,
  Leaf,
  ListChecks,
  Microscope,
  Moon,
  Orbit,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Sprout,
  SunMedium,
  Waves,
  Wind
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.escudoExpossoma;

const showRegulatoryNotes = true;
const showB2BPositioning = true;
const showScientificDetails = true;
const showClinicalClaims = true;
const image = "/products/escudo-expossoma/escudo-placeholder.jpg";

const anchors = [
  ["O que é expossoma", "#expossoma"],
  ["Pele", "#pele"],
  ["Tecnologia pele", "#tecnologia-pele"],
  ["Produtos pele", "#produtos-pele"],
  ["Cabelos", "#cabelos"],
  ["Tecnologia capilar", "#tecnologia-capilar"],
  ["Produtos cabelos", "#produtos-cabelos"],
  ["Rotina completa", "#rotina"],
  ["Claims", "#claims"],
  ["FAQ", "#faq"]
];

const exposomeFactors = [
  { title: "Ambiente", text: "Poluição, fumaça, radiação UV e variações climáticas.", icon: Building2 },
  { title: "Estilo de vida", text: "Sono, estresse, alimentação, rotina intensa e hábitos diários.", icon: Moon },
  { title: "Resposta biológica", text: "Estresse oxidativo, ressecamento, desconforto e perda de vitalidade.", icon: Orbit },
  { title: "Aparência", text: "Pele opaca, sensível, desidratada e cabelos frágeis, porosos e sem brilho.", icon: Sparkles }
];

const skinBarriers = [
  { title: "Barreira física", text: "Ajuda a proteger contra agressões externas.", icon: ShieldCheck },
  { title: "Barreira hídrica", text: "Ajuda a reduzir a perda de água e manter hidratação.", icon: Droplets },
  { title: "Barreira antioxidante", text: "Contribui para proteção contra estresse oxidativo.", icon: SunMedium },
  { title: "Barreira sensorial", text: "Promove conforto, maciez e equilíbrio.", icon: Waves }
];

const skinTechBenefits = [
  "Ajuda a proteger contra os efeitos visíveis da poluição urbana.",
  "Contribui para reduzir a aparência de danos causados por estressores ambientais.",
  "Promove sensação calmante contra agressores físicos e químicos.",
  "Auxilia na hidratação e no reforço da barreira cutânea.",
  "Ajuda a preservar a aparência saudável da pele."
];

const phytoPillars = [
  {
    title: "Frescor",
    subtitle: "Chá Verde + Alecrim",
    text: "Solução botânica para sensação refrescante, vitalidade e pele com aparência revitalizada.",
    benefits: ["Sensação refrescante.", "Pele com aparência revitalizada.", "Apoio antioxidante cosmético."],
    icon: Leaf
  },
  {
    title: "Proteção",
    subtitle: "Luteína + Cúrcuma",
    text: "Fontes naturais de antioxidantes para auxiliar a defesa contra sinais de estresse ambiental.",
    benefits: ["Ajuda a proteger contra radicais livres.", "Contribui para aparência mais saudável.", "Auxilia na defesa contra sinais de estresse ambiental."],
    icon: ShieldCheck
  },
  {
    title: "Nutrição",
    subtitle: "Arroz + Oliva + Jojoba",
    text: "Lipídeos vegetais para nutrir, suavizar e apoiar a barreira cutânea.",
    benefits: ["Nutrição da pele.", "Toque macio e confortável.", "Apoio à barreira lipídica."],
    icon: Sprout
  }
];

const skinProducts = [
  {
    title: "Creme Escudo Facial",
    headline: "Gel-creme diário com toque aveludado e filme protetor confortável.",
    text: "Um gel-creme facial para uso diário, ideal para todos os tipos de pele. Sua textura leve entrega hidratação sem pesar, formando um filme protetor confortável com toque aveludado sofisticado.",
    imageLabel: "IMG-CREME-ESCUDO-FACIAL",
    icon: ScanFace,
    benefits: ["Hidratação leve e confortável.", "Toque aveludado sofisticado.", "Filme protetor sobre a pele.", "Sensação de frescor e suavidade.", "Ajuda a proteger contra os efeitos visíveis do expossoma."],
    indication: "Todos os tipos de pele, rotinas antipoluição, pele exposta à rotina urbana e consumidores que buscam skincare leve e protetor."
  },
  {
    title: "Creme Escudo Corporal",
    headline: "Hidratação avançada, toque leve e proteção da barreira cutânea.",
    text: "Um hidratante corporal avançado com base autoemulsionante vegetal, proposta PEG-free, ésteres funcionais e sensorial leve para hidratação, sedosidade e conforto extra.",
    imageLabel: "IMG-CREME-ESCUDO-CORPORAL",
    icon: Droplets,
    benefits: ["Base autoemulsionante vegetal.", "Formação de cristais líquidos na pele.", "Hidratação profunda e duradoura.", "Redução da perda de água.", "Livre de etoxilados, proposta PEG-free."],
    indication: "Todos os tipos de pele, uso diário e pele corporal exposta ao clima, poluição e ressecamento."
  }
];

const hairSignals = ["Perda de brilho", "Porosidade", "Dificuldade ao pentear", "Frizz", "Pontas duplas", "Quebra", "Sensação áspera", "Opacidade", "Fios desalinhados"];

const hairActives = [
  {
    title: "Gengibre",
    subtitle: "Antioxidante botânico",
    text: "Rico em compostos bioativos associados à ação antioxidante, ajuda a reduzir o estresse oxidativo e favorece a vitalidade da fibra capilar.",
    benefits: ["Ajuda a reduzir o estresse oxidativo.", "Contribui para aparência de fios mais fortes.", "Auxilia na proteção contra agressões ambientais."],
    icon: Leaf
  },
  {
    title: "Algas Kappaphycus Alvarezii",
    subtitle: "Revestimento e proteção",
    text: "Ajudam a formar uma película protetora sobre a haste capilar, funcionando como escudo natural contra estressores ambientais.",
    benefits: ["Forma barreira protetora sobre os fios.", "Ajuda a preservar a cutícula.", "Contribui para redução de quebra e pontas duplas."],
    icon: Waves
  },
  {
    title: "Alginato de Sódio",
    subtitle: "Quelação e revestimento",
    text: "Atua como agente quelante, ajudando a reduzir a interação de metais pesados e poluentes com a fibra capilar.",
    benefits: ["Ajuda a remover resíduos de poluição.", "Contribui para desintoxicação cosmética dos fios.", "Favorece sensação de cabelo mais limpo e leve."],
    icon: FlaskConical
  },
  {
    title: "Extrato de Amaranto",
    subtitle: "Penteabilidade e maleabilidade",
    text: "Rico em peptídeos e polissacarídeos, ajuda a melhorar penteabilidade e maleabilidade em cabelos danificados.",
    benefits: ["Melhora a penteabilidade.", "Ajuda a reduzir o atrito ao pentear.", "Promove sensação de maciez."],
    icon: Sprout
  }
];

const hairBenefits = [
  "Ajuda a proteger a cutícula capilar.",
  "Contribui para manter a integridade da camada lipídica.",
  "Auxilia na preservação do córtex capilar.",
  "Melhora a aparência de brilho.",
  "Ajuda a prevenir perda de massa capilar por danos externos.",
  "Facilita o desembaraço.",
  "Ajuda a reduzir a aparência de porosidade.",
  "Promove fios mais alinhados e disciplinados.",
  "Contribui para redução do frizz.",
  "Melhora a sensação de maciez."
];

const proofClaims = [
  "Aumento de brilho em até 25x.",
  "Redução de porosidade em até 38%.",
  "Melhora da penteabilidade em cabelos secos e molhados.",
  "Redução de quebra capilar.",
  "Preservação da cutícula."
];

const hairProducts = [
  {
    title: "Shampoo Escudo",
    headline: "Limpeza suave para fios expostos ao estresse ambiental.",
    text: "Shampoo suave e condicionante, desenvolvido para limpar os fios sem agredir, ajudando a manter a maciez e reduzir a sensação áspera e porosa.",
    imageLabel: "IMG-SHAMPOO-ESCUDO",
    benefits: ["Limpeza delicada.", "Sensação de fios mais macios.", "Ajuda a reduzir aspereza.", "Prepara os cabelos para tratamento.", "Ideal para uso frequente."],
    icon: Droplets
  },
  {
    title: "Máscara Condicionante Escudo",
    headline: "Nutrição, alinhamento e brilho intenso para a fibra capilar.",
    text: "Máscara multifuncional para cuidar da fibra capilar, promovendo nutrição, equilíbrio, condicionamento e alinhamento.",
    imageLabel: "IMG-MASCARA-CONDICIONANTE-ESCUDO",
    benefits: ["Nutrição da fibra capilar.", "Ajuda a alinhar os fios.", "Promove brilho intenso.", "Contribui para redução de frizz.", "Apoia a barreira protetora dos fios."],
    icon: Sparkles
  },
  {
    title: "Leave-in Finalizador Escudo",
    headline: "Alinhamento, proteção e reparação instantânea da aparência dos fios.",
    text: "Finalizador diário que ajuda a alinhar a fibra capilar, melhorar a penteabilidade, reduzir atrito, minimizar quebra mecânica e controlar o frizz.",
    imageLabel: "IMG-LEAVE-IN-FINALIZADOR-ESCUDO",
    benefits: ["Alinhamento da fibra capilar.", "Melhora da penteabilidade.", "Redução do atrito ao pentear.", "Controle de frizz.", "Finalização com toque macio."],
    icon: Wind
  }
];

const routineGroups = [
  { title: "Manhã", items: ["Creme Escudo Facial.", "Creme Escudo Corporal.", "Leave-in Finalizador Escudo nos cabelos."], icon: SunMedium },
  { title: "Banho", items: ["Shampoo Escudo.", "Máscara Condicionante Escudo.", "Creme Escudo Corporal após o banho."], icon: Droplets },
  { title: "Ao longo do dia", items: ["Reaplicação corporal, se necessário.", "Leave-in para controle de frizz e proteção dos fios."], icon: CloudSun }
];

const comparisonRows = [
  ["Creme Escudo Facial", "Pele do rosto", "Hidratar e proteger", "Pepino, algas e fitosinergia antioxidante", "Pele hidratada, fresca e protegida"],
  ["Creme Escudo Corporal", "Pele do corpo", "Hidratação avançada e barreira", "Cristais líquidos, ésteres funcionais e sistema vegetal", "Pele sedosa, perfumada e confortável"],
  ["Shampoo Escudo", "Cabelos", "Limpeza suave", "Gengibre, algas, alginato e amaranto", "Fios limpos, macios e menos ásperos"],
  ["Máscara Condicionante Escudo", "Cabelos", "Nutrição e alinhamento", "Complexo botânico antipoluição", "Fios mais brilhantes, macios e disciplinados"],
  ["Leave-in Finalizador Escudo", "Cabelos", "Finalização e proteção", "Filme protetor e ativos de penteabilidade", "Menos frizz, mais alinhamento e proteção"]
];

const commercialTerritories = [
  "Antipoluição urbana",
  "Proteção contra expossoma",
  "Skincare ambiental",
  "Haircare antipoluição",
  "Barreira cutânea",
  "Estresse oxidativo",
  "Glow saudável",
  "Proteção invisível",
  "Rotina urbana premium",
  "Longevidade da beleza"
];

const safeClaims = [
  "Ajuda a proteger contra os efeitos visíveis da poluição.",
  "Contribui para proteção contra estressores ambientais.",
  "Promove hidratação e conforto.",
  "Ajuda a fortalecer a barreira cutânea.",
  "Pele com aparência mais radiante.",
  "Cabelos com aparência mais brilhante.",
  "Melhora a sensação de penteabilidade.",
  "Ajuda a reduzir o frizz.",
  "Promove toque macio.",
  "Forma filme protetor cosmético."
];

const validationClaims = [
  "Proteção antipoluição comprovada.",
  "Redução de danos induzidos por poluição.",
  "Combate ao fotoenvelhecimento.",
  "Aumento de brilho em 25x.",
  "Redução da porosidade em 38%.",
  "Prevenção da perda de massa capilar.",
  "Melhora percentual da penteabilidade.",
  "Proteção contra radiação UV."
];

const avoidClaims = [
  "Bloqueia totalmente a poluição.",
  "Substitui protetor solar.",
  "Cura irritações.",
  "Trata doenças de pele.",
  "Elimina danos capilares.",
  "Reverte envelhecimento.",
  "Elimina queda capilar.",
  "Proteção absoluta contra expossoma."
];

const faqs = [
  ["O que significa expossoma?", "Expossoma é o conjunto de exposições externas, internas e comportamentais que acompanham uma pessoa ao longo da vida, como poluição, radiação UV, fumaça, estresse, sono, dieta, clima e hábitos de vida."],
  ["A linha protege contra poluição?", "A proposta da linha é ajudar a proteger pele e cabelos contra os efeitos visíveis da poluição e de estressores ambientais. Claims específicos de proteção antipoluição devem ser comprovados por testes adequados."],
  ["O Creme Escudo Facial substitui protetor solar?", "Não. A linha pode ajudar na proteção cosmética contra estressores ambientais, mas não substitui produtos de fotoproteção quando houver exposição solar."],
  ["A linha é indicada para todos os tipos de pele?", "A proposta dos cremes facial e corporal é atender todos os tipos de pele, com texturas leves, confortáveis e de uso diário. A formulação final deve ser validada conforme testes de segurança e compatibilidade."],
  ["Qual é o diferencial da linha capilar?", "A linha capilar combina ativos botânicos, agentes de revestimento, ação antioxidante e melhora da penteabilidade para ajudar a proteger a fibra capilar contra agressões ambientais."],
  ["Os resultados são imediatos?", "Alguns benefícios sensoriais, como maciez, frescor, hidratação e penteabilidade, podem ser percebidos logo após o uso. Claims quantitativos devem ser comprovados por testes específicos."]
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
      <div className="absolute inset-x-8 top-8 h-28 rounded-full border border-white/50 bg-white/10 blur-sm" />
      <div className="absolute left-5 top-5 max-w-[calc(100%-2.5rem)] truncate rounded-full bg-white/86 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-graphite/60 backdrop-blur-md">
        {label}
      </div>
    </div>
  );
}

function DataCard({ item, index = 0 }: { item: { title: string; text: string; icon: typeof ShieldCheck }; index?: number }) {
  const Icon = item.icon;
  return (
    <Reveal delay={index * 0.035} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="mt-8 text-2xl font-light text-graphite">{item.title}</h2>
      <p className="mt-4 text-sm leading-7 text-graphite/62">{item.text}</p>
    </Reveal>
  );
}

export default function EscudoExpossomaPage() {
  return (
    <main className="overflow-hidden">
      <section className="grain section-shell pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Facial • dermocosmético • antipoluição</p>
            <h1 className="mt-5 text-[clamp(3rem,8vw,8.4rem)] font-light leading-[0.94] text-graphite">
              Linha Escudo Expossoma.
            </h1>
            <p className="mt-7 max-w-2xl text-[clamp(1.35rem,2.2vw,2.1rem)] font-light leading-tight text-graphite">
              Pele e cabelos protegidos contra os impactos invisíveis do ambiente.
            </p>
            <p className="body-large mt-6 max-w-2xl">
              Uma linha dermocosmética e capilar criada para ajudar a proteger contra os efeitos do expossoma: poluição urbana, fumaça, radiação UV, variações climáticas, estresse oxidativo e agressões diárias.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <MinimalButton href="#tecnologia-pele">Conhecer a tecnologia</MinimalButton>
              <MinimalButton href="#produtos-pele" variant="ghost">Ver produtos da linha</MinimalButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.12em] text-graphite/58">
              {["Antipoluição", "Barreira protetora", "Ação antioxidante", "Pele e cabelos", "Uso diário"].map((seal) => (
                <span key={seal} className="rounded-full border border-graphite/10 bg-white px-3 py-2">{seal}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[1.12]">
            <PlaceholderImage label="IMG-HERO-ESCUDO-EXPOSSOMA" priority />
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-8">
        <Reveal className="flex gap-2 overflow-x-auto rounded-full border border-graphite/10 bg-white/86 p-2 shadow-soft backdrop-blur-xl">
          {anchors.map(([label, href]) => (
            <a key={href} href={href} className="shrink-0 rounded-full px-4 py-2 text-sm text-graphite/62 transition hover:bg-porcelain hover:text-graphite">
              {label}
            </a>
          ))}
        </Reveal>
      </section>

      <section id="expossoma" className="section-shell py-20 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle
            eyebrow="O que é expossoma?"
            title="Entender o expossoma é entender que a beleza também precisa de proteção diária."
            text="O expossoma descreve a totalidade das exposições às quais uma pessoa é submetida ao longo da vida. Em conjunto com a genética, influencia saúde, bem-estar, longevidade e também a aparência da pele e dos cabelos."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {exposomeFactors.map((item, index) => <DataCard key={item.title} item={item} index={index} />)}
          </div>
        </div>
      </section>

      <section id="pele" className="section-shell pb-20 md:pb-32">
        <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.05fr]">
            <div className="relative min-h-[360px] bg-mist lg:min-h-[620px]">
              <PlaceholderImage label="IMG-EXPOSSOMA-PELE" />
            </div>
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow">Expossoma x pele</p>
              <h2 className="mt-5 text-[clamp(2.35rem,5vw,5.8rem)] font-light leading-[1.02] text-graphite">
                A pele é o primeiro escudo contra o mundo externo.
              </h2>
              <p className="body-large mt-7">
                A pele recebe diariamente a ação dos raios UV, da poluição, da fumaça, das mudanças de temperatura e também reflete sinais de hábitos de vida, sono, alimentação e equilíbrio geral.
              </p>
              <p className="mt-5 text-sm leading-7 text-graphite/62">
                Cuidar da pele diariamente é uma forma de apoiar sua função de barreira, reduzir a aparência de estresse ambiental e ajudar a prevenir sinais de envelhecimento precoce associados à exposição contínua.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skinBarriers.map((item, index) => <DataCard key={item.title} item={item} index={index} />)}
        </div>
      </section>

      <section id="tecnologia-pele" className="section-shell pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="aspect-[1.12]">
            <PlaceholderImage label="IMG-TECNOLOGIA-PEPINO-ALGAS" />
          </Reveal>
          <SectionTitle
            eyebrow="Tecnologia antipoluição para pele"
            title="Pepino + Hypnea Musciformis: proteção botânica contra agressores ambientais."
            text="Biomoléculas ativas de pepino se combinam a uma rede polimérica de polissacarídeos de algas marinhas para ajudar a hidratar, acalmar e reforçar a sensação de proteção da pele."
          />
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skinTechBenefits.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 0.035} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6">
              <BadgeCheck className="h-5 w-5 text-brass" />
              <p className="mt-8 text-sm leading-7 text-graphite/66">{benefit}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {showScientificDetails ? (
        <section className="section-shell pb-20 md:pb-32">
          <SectionTitle
            eyebrow="Fitosinergia multifaces"
            title="Um sistema multifásico para proteção cosmética avançada."
            text="Bioésteres, extratos botânicos e ativos antioxidantes permitem combinar fitoquímicos de diferentes características, criando uma abordagem completa contra o estresse oxidativo e os sinais do envelhecimento ambiental."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {phytoPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.04} className="rounded-[1.75rem] border border-graphite/10 bg-white p-7 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite"><Icon className="h-5 w-5" /></span>
                  <p className="eyebrow mt-8">{pillar.title}</p>
                  <h2 className="mt-3 text-3xl font-light text-graphite">{pillar.subtitle}</h2>
                  <p className="mt-4 text-sm leading-7 text-graphite/62">{pillar.text}</p>
                  <ul className="mt-6 grid gap-2 text-sm leading-7 text-graphite/62">
                    {pillar.benefits.map((benefit) => <li key={benefit}>• {benefit}</li>)}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </section>
      ) : null}

      <section id="produtos-pele" className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Produtos para pele"
          title="Dois escudos para a rotina diária da pele."
          text="Produtos desenvolvidos para criar uma camada cosmética de proteção, hidratação e conforto contra os efeitos visíveis do expossoma."
        />
        <div className="mt-12 grid gap-5">
          {skinProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.title} delay={index * 0.04} className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white shadow-soft">
                <div className={`grid gap-0 lg:grid-cols-[0.92fr_1.08fr] ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-[360px] bg-mist"><PlaceholderImage label={product.imageLabel} /></div>
                  <div className="p-7 md:p-10 lg:p-12">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite"><Icon className="h-5 w-5" /></span>
                    <h2 className="mt-8 text-[clamp(2rem,4vw,4.4rem)] font-light leading-[1.02] text-graphite">{product.title}</h2>
                    <h3 className="mt-5 text-xl font-medium text-graphite">{product.headline}</h3>
                    <p className="mt-5 text-sm leading-7 text-graphite/64">{product.text}</p>
                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                      {product.benefits.map((benefit) => <div key={benefit} className="rounded-[1.25rem] bg-porcelain p-4 text-sm leading-6 text-graphite/66">{benefit}</div>)}
                    </div>
                    <p className="mt-6 rounded-[1.25rem] border border-graphite/10 p-5 text-sm leading-7 text-graphite/62"><strong className="text-graphite">Indicação:</strong> {product.indication}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="cabelos" className="section-shell pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionTitle
            eyebrow="Expossoma x cabelos"
            title="Os cabelos também sofrem com o expossoma."
            text="A fibra capilar não possui defesas naturais contra radicais livres. Com o tempo, radiação UV, poluição urbana, fumaça, umidade, tratamentos químicos e agressões mecânicas podem comprometer cutícula, camada lipídica e córtex capilar."
          />
          <Reveal className="aspect-[1.12]"><PlaceholderImage label="IMG-EXPOSSOMA-CABELOS" /></Reveal>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {hairSignals.map((signal) => <span key={signal} className="rounded-full border border-graphite/10 bg-white px-4 py-2 text-sm text-graphite/62">{signal}</span>)}
        </div>
      </section>

      <section id="tecnologia-capilar" className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Tecnologia Escudo Capilar"
          title="Um complexo botânico para proteger a fibra capilar."
          text="Ativos botânicos, agentes de revestimento e sistemas de penteabilidade ajudam a preservar a cutícula, reduzir o estresse oxidativo e melhorar a aparência de força, brilho e maleabilidade dos fios."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {hairActives.map((active, index) => {
            const Icon = active.icon;
            return (
              <Reveal key={active.title} delay={index * 0.04} className="rounded-[1.75rem] border border-graphite/10 bg-white p-6 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite"><Icon className="h-5 w-5" /></span>
                <p className="eyebrow mt-8">{active.subtitle}</p>
                <h2 className="mt-3 text-2xl font-light text-graphite">{active.title}</h2>
                <p className="mt-4 text-sm leading-7 text-graphite/62">{active.text}</p>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-graphite/62">
                  {active.benefits.map((benefit) => <li key={benefit}>• {benefit}</li>)}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Benefícios capilares"
          title="Benefícios do escudo capilar contra o expossoma."
          text="A linha capilar organiza limpeza, tratamento e finalização em uma narrativa de proteção, brilho, alinhamento e redução de sinais visíveis de dano ambiental."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {hairBenefits.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 0.025} className="rounded-[1.5rem] border border-graphite/10 bg-white p-5">
              <CheckCircle2 className="h-5 w-5 text-brass" />
              <p className="mt-7 text-sm leading-7 text-graphite/66">{benefit}</p>
            </Reveal>
          ))}
        </div>
        {showClinicalClaims ? (
          <Reveal className="mt-5 rounded-[1.5rem] bg-porcelain p-6">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-graphite/48">Claims sujeitos à comprovação</p>
            <div className="mt-5 grid gap-3 md:grid-cols-5">
              {proofClaims.map((claim) => <span key={claim} className="rounded-full bg-white px-4 py-3 text-sm text-graphite/64">{claim}</span>)}
            </div>
          </Reveal>
        ) : null}
      </section>

      <section id="produtos-cabelos" className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Produtos para cabelos"
          title="Três etapas para proteger, condicionar e finalizar."
          text="Uma rotina capilar completa para limpeza suave, reparação da superfície dos fios, alinhamento, proteção e brilho."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {hairProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.title} delay={index * 0.04} className="group overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
                <div className="relative aspect-[4/3] bg-mist"><PlaceholderImage label={product.imageLabel} /></div>
                <div className="p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite"><Icon className="h-5 w-5" /></span>
                  <h2 className="mt-8 text-3xl font-light text-graphite">{product.title}</h2>
                  <h3 className="mt-4 text-lg font-medium text-graphite">{product.headline}</h3>
                  <p className="mt-4 text-sm leading-7 text-graphite/62">{product.text}</p>
                  <ul className="mt-6 grid gap-2 text-sm leading-6 text-graphite/62">
                    {product.benefits.map((benefit) => <li key={benefit}>• {benefit}</li>)}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="rotina" className="section-shell pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="aspect-[1.12]"><PlaceholderImage label="IMG-ROTINA-COMPLETA-EXPOSSOMA" /></Reveal>
          <SectionTitle
            eyebrow="Rotina completa"
            title="Uma rotina completa de proteção contra o expossoma."
            text="A linha integra cuidados de pele e cabelos em uma rotina diária de defesa cosmética: cremes facial e corporal para barreira e hidratação, shampoo, máscara e leave-in para limpeza, tratamento e finalização protetora."
          />
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {routineGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 0.04} className="rounded-[1.75rem] border border-graphite/10 bg-white p-7 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-graphite text-white"><Icon className="h-5 w-5" /></span>
                <h2 className="mt-8 text-3xl font-light text-graphite">{group.title}</h2>
                <ul className="mt-6 grid gap-3 text-sm leading-7 text-graphite/64">
                  {group.items.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Tabela comparativa"
          title="Produtos, funções e benefícios percebidos."
          text="Uma matriz simples para orientar desenvolvimento, discurso técnico, kit comercial e apresentação para a marca."
        />
        <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1080px] border-collapse text-left">
              <thead className="bg-porcelain text-xs uppercase tracking-[0.14em] text-graphite/48">
                <tr>
                  {["Produto", "Área", "Função principal", "Tecnologia", "Benefício percebido"].map((head) => <th key={head} className="px-5 py-4 font-medium">{head}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/8 text-sm text-graphite/68">
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className="transition hover:bg-porcelain/70">
                    {row.map((cell, index) => <td key={cell} className={`px-5 py-5 ${index === 0 ? "font-medium text-graphite" : ""}`}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {showB2BPositioning ? (
        <section className="section-shell pb-20 md:pb-32">
          <SectionTitle
            eyebrow="Posicionamento comercial"
            title="O novo território do cuidado diário: beleza antipoluição e proteção ambiental."
            text="A Linha Escudo Expossoma conecta ciência, rotina urbana, bem-estar, longevidade, skinificação e haircare de alta performance."
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {commercialTerritories.map((territory, index) => (
              <Reveal key={territory} delay={index * 0.025} className="rounded-[1.25rem] border border-graphite/10 bg-white p-5 text-lg font-light text-graphite shadow-soft">
                {territory}
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-5 rounded-[1.75rem] bg-graphite p-8 text-white">
            <p className="eyebrow text-white/50">Mensagem central</p>
            <p className="mt-4 text-[clamp(1.8rem,3vw,3.6rem)] font-light leading-tight">
              Um escudo cosmético para pele e cabelos enfrentarem os impactos invisíveis da vida moderna.
            </p>
          </Reveal>
        </section>
      ) : null}

      {showRegulatoryNotes ? (
        <section id="claims" className="section-shell pb-20 md:pb-32">
          <SectionTitle
            eyebrow="Claims e segurança regulatória"
            title="Claims sugeridos para validação."
            text="A comunicação deve valorizar proteção, barreira, hidratação, brilho, penteabilidade e ação antipoluição de forma segura. Claims técnicos e quantitativos devem ser validados por testes adequados."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              { title: "Claims seguros", items: safeClaims, icon: BadgeCheck },
              { title: "Exigem comprovação", items: validationClaims, icon: Microscope },
              { title: "Evitar", items: avoidClaims, icon: Gauge }
            ].map((group) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.title} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite"><Icon className="h-5 w-5" /></span>
                  <h2 className="mt-8 text-2xl font-light text-graphite">{group.title}</h2>
                  <ul className="mt-5 grid gap-2 text-sm leading-7 text-graphite/62">
                    {group.items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-5 rounded-[1.5rem] bg-porcelain p-6 text-sm leading-7 text-graphite/64">
            Claims de proteção, antipoluição e performance devem ser validados por testes adequados. A linha não substitui fotoproteção e não deve prometer proteção absoluta contra expossoma.
          </Reveal>
        </section>
      ) : null}

      <section className="section-shell pb-20 md:pb-32">
        <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-graphite text-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr] lg:items-stretch">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow text-white/54">CTA final</p>
              <h2 className="mt-5 text-[clamp(2.4rem,5vw,5.8rem)] font-light leading-[1.02]">
                Transforme proteção diária em desejo de consumo.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                A Linha Escudo Expossoma une ciência cosmética, ativos botânicos, tecnologia antipoluição e sensorial premium para criar uma rotina completa de proteção para pele e cabelos.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MinimalButton href="/contato#formulario" variant="light">Criar uma linha Escudo Expossoma</MinimalButton>
                <MinimalButton href="#tecnologia-pele" variant="darkGhost">Ver tecnologias da fórmula</MinimalButton>
              </div>
            </div>
            <div className="relative min-h-[360px]"><PlaceholderImage label="IMG-CTA-ESCUDO-EXPOSSOMA" /></div>
          </div>
        </Reveal>
      </section>

      <section id="faq" className="section-shell pb-24 md:pb-36">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" text="Respostas rápidas para orientar estratégia, formulação e comunicação da Linha Escudo Expossoma." />
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
