import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Beaker,
  CircleDot,
  Droplets,
  FlaskConical,
  Gem,
  Heart,
  Layers3,
  Leaf,
  ListChecks,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Dermocorporais | Skinificação do Corpo com Séruns de Alta Performance",
  description:
    "Linha dermocorporal de séruns para skinificação do corpo, com niacinamida, ácido hialurônico, colágeno vegetal, ureia, lipoproteínas, óleos vegetais e hidratação inteligente."
};

const showRegulatoryNotes = true;
const showB2BPositioning = true;
const showIngredientDetails = true;
const image = "/products/dermocorporais-skinificacao/dermocorporais-placeholder.jpg";

const conceptCards = [
  {
    title: "Hidratação inteligente",
    text: "Umectantes e ativos que ajudam a manter a pele hidratada por mais tempo.",
    icon: Droplets
  },
  {
    title: "Barreira cutânea",
    text: "Óleos vegetais, pró-vitamina B5 e lipídios que auxiliam na proteção da pele.",
    icon: ShieldCheck
  },
  {
    title: "Textura leve",
    text: "Fórmulas nutritivas, mas de rápida absorção e toque confortável.",
    icon: Sparkles
  },
  {
    title: "Benefícios direcionados",
    text: "Séruns para uniformizar, renovar, reparar, proteger e prolongar a hidratação.",
    icon: Layers3
  }
];

const baseBlocks = [
  {
    title: "Base glicerinada + óleos vegetais",
    text: "Ajuda a reforçar a barreira lipídica, promovendo toque macio, nutrição e conforto sem pesar na pele.",
    icon: Leaf
  },
  {
    title: "Umectantes de alta performance",
    text: "Contribuem para hidratação imediata e prolongada, auxiliando na retenção de água e na melhora da aparência de ressecamento.",
    icon: Droplets
  },
  {
    title: "Pró-vitamina B5",
    text: "Forma um filme protetor delicado, ajudando a reduzir a perda de água e a manter a pele mais confortável.",
    icon: Beaker
  },
  {
    title: "Ação desodorante",
    text: "Ajuda a prolongar a sensação de pele perfumada, limpa e fresca ao longo do dia.",
    icon: Sparkles
  },
  {
    title: "Sensorial leve e nutritivo",
    text: "Textura de rápida absorção, ideal para uso diário e para consumidores que não gostam de acabamento pesado.",
    icon: CircleDot
  }
];

const serums = [
  {
    name: "Sérum Corporal Uniformizador",
    active: "Niacinamida",
    complement: "Óleo de Girassol",
    headline: "Para uma pele com aparência mais uniforme, iluminada e equilibrada.",
    description:
      "Um sérum corporal pensado para peles com aparência opaca, tom irregular, textura desigual ou sinais de desequilíbrio. A niacinamida é um ativo consagrado no skincare por sua versatilidade e excelente aceitação em fórmulas de cuidado diário. Associada ao óleo de girassol, contribui para uma pele mais macia, nutrida e visualmente uniforme.",
    benefits: [
      "Ajuda a uniformizar a aparência do tom da pele.",
      "Contribui para reduzir a aparência de textura irregular.",
      "Auxilia na manutenção da barreira cutânea.",
      "Promove ação antioxidante cosmética.",
      "Ajuda a melhorar a aparência de pele sem viço."
    ],
    complementDetails: [
      "Rico em vitamina E.",
      "Contribui para proteção contra radicais livres.",
      "Promove nutrição e hidratação sem toque pesado.",
      "Ajuda a manter a pele macia e confortável."
    ],
    perceived: "Pele com aparência mais uniforme, iluminada e equilibrada.",
    indication: "Pele sem viço, tom irregular, aparência opaca e necessidade de equilíbrio.",
    imageLabel: "IMG-SERUM-CORPORAL-UNIFORMIZADOR-NIACINAMIDA",
    cta: "Quero uniformização",
    icon: Sparkles
  },
  {
    name: "Sérum Corporal Renovador",
    active: "Ácido Hialurônico",
    complement: "Óleo de Abacate",
    headline: "Hidratação profunda, elasticidade e aparência revitalizada.",
    description:
      "Um sérum corporal desenvolvido para peles desidratadas, com aparência cansada, perda de viço e sensação de menor elasticidade. O ácido hialurônico é reconhecido por ajudar na retenção de água, contribuindo para uma pele mais hidratada, macia e com aparência preenchida. O óleo de abacate complementa a fórmula com nutrição e conforto.",
    benefits: [
      "Promove hidratação profunda e duradoura.",
      "Ajuda a melhorar a aparência de elasticidade.",
      "Contribui para sensação de firmeza.",
      "Suaviza a aparência de linhas finas causadas por ressecamento.",
      "Auxilia na reposição da água perdida pela pele."
    ],
    complementDetails: [
      "Rico em componentes nutritivos.",
      "Fonte de vitaminas A, B, C e E.",
      "Contribui para o conforto da pele.",
      "Auxilia na nutrição da barreira natural."
    ],
    perceived: "Pele com aparência mais firme, viçosa, preenchida e revitalizada.",
    indication: "Pele desidratada, perda de viço e aparência de linhas finas por ressecamento.",
    imageLabel: "IMG-SERUM-CORPORAL-RENOVADOR-ACIDO-HIALURONICO",
    cta: "Quero renovação",
    icon: Droplets
  },
  {
    name: "Sérum Corporal Reparador",
    active: "Colágeno Vegetal de Acacia Senegal",
    complement: "Manteiga de Manga",
    headline: "Filme hidratante, firmeza cosmética e toque aveludado.",
    description:
      "Um sérum corporal para peles secas, ásperas ou com áreas críticas de ressecamento, como joelhos, cotovelos, pernas e braços. O colágeno vegetal forma um filme hidratante delicado sobre a pele, ajudando a promover toque sedoso, sensação de firmeza e proteção contra o ressecamento. A manteiga de manga intensifica a nutrição e o conforto.",
    benefits: [
      "Forma filme protetor hidratante.",
      "Ajuda a melhorar a aparência de firmeza e elasticidade.",
      "Promove toque aveludado e confortável.",
      "Contribui para proteção contra ressecamento intenso.",
      "Auxilia no cuidado de áreas ásperas e ressecadas."
    ],
    complementDetails: [
      "Rica em componentes nutritivos.",
      "Fonte de vitaminas A e C.",
      "Ajuda a melhorar a aparência de áreas ressecadas.",
      "Contribui para sensação de pele restaurada e macia."
    ],
    perceived: "Pele com aparência reparada, firme e extremamente macia.",
    indication: "Áreas críticas, joelhos, cotovelos ressecados e pele áspera.",
    imageLabel: "IMG-SERUM-CORPORAL-REPARADOR-COLAGENO-VEGETAL",
    cta: "Quero reparação",
    icon: Gem
  },
  {
    name: "Sérum Corporal Protetor",
    active: "Ureia",
    complement: "Óleo de Aloe Vera",
    headline: "Hidratação intensa, retenção de água e proteção da barreira cutânea.",
    description:
      "Um sérum corporal desenvolvido para peles secas, sensibilizadas ou com tendência ao ressecamento recorrente. A ureia é um ativo clássico em fórmulas corporais por sua capacidade de auxiliar na retenção de água e promover hidratação intensa. O óleo de aloe vera complementa a fórmula com sensação calmante, conforto e cuidado dermoprotetor.",
    benefits: [
      "Promove hidratação intensa e prolongada.",
      "Ajuda na retenção de água na pele.",
      "Contribui para melhora da aparência de elasticidade.",
      "Auxilia no fortalecimento da barreira contra agressões externas.",
      "Promove sensação de conforto em peles secas."
    ],
    complementDetails: [
      "Rico em componentes vegetais.",
      "Contém vitaminas, minerais e aminoácidos.",
      "Proporciona sensação calmante.",
      "Contribui para sensação dermoprotetora."
    ],
    perceived: "Pele protegida, hidratada por mais tempo e com menor sensação de sensibilização.",
    indication: "Pele seca, sensibilizada, ressecamento recorrente e necessidade de hidratação intensa.",
    imageLabel: "IMG-SERUM-CORPORAL-PROTETOR-UREIA",
    cta: "Quero proteção",
    icon: ShieldCheck
  },
  {
    name: "Sérum Corporal Hidratação Prolongada",
    active: "Lipoproteínas de Aveia, Trigo e Amêndoas",
    complement: "Óleo de Algodão",
    headline: "Filme hidratante inteligente para pele equilibrada, protegida e confortável.",
    description:
      "Um sérum corporal criado para peles que precisam de hidratação prolongada, conforto e equilíbrio. As lipoproteínas ajudam a formar um filme hidratante inteligente, contribuindo para proteção, maciez e melhora da aparência da pele. O óleo de algodão entrega nutrição leve e toque confortável.",
    benefits: [
      "Forma filme hidratante inteligente.",
      "Contribui para reestruturação da aparência da epiderme.",
      "Promove sensação calmante.",
      "Ajuda a reduzir a aparência de vermelhidão causada por ressecamento ou exposição solar.",
      "Contribui para proteção contra radicais livres."
    ],
    complementDetails: [
      "Leve, nutritivo e confortável.",
      "Não deixa sensação pesada.",
      "Ajuda a equilibrar peles sensíveis e oleosas.",
      "Promove toque macio e sedoso."
    ],
    perceived: "Pele hidratada por horas, protegida e equilibrada.",
    indication: "Pele sensível, hidratação prolongada, conforto e rotina diária.",
    imageLabel: "IMG-SERUM-CORPORAL-HIDRATACAO-PROLONGADA-LIPOPROTEINAS",
    cta: "Quero hidratação prolongada",
    icon: Heart
  }
];

const indicationRows = [
  ["Pele ressecada", "Ureia ou Lipoproteínas", "Hidratação intensa e prolongada"],
  ["Pele sem viço ou tom irregular", "Niacinamida", "Aparência mais uniforme e iluminada"],
  ["Perda de firmeza", "Ácido Hialurônico ou Colágeno Vegetal", "Pele com aparência mais firme e viçosa"],
  ["Áreas críticas e ressecamento intenso", "Colágeno Vegetal", "Toque macio, conforto e filme protetor"],
  ["Pele sensibilizada", "Ureia ou Lipoproteínas", "Conforto, proteção e hidratação"],
  ["Pele áspera", "Colágeno Vegetal ou Ácido Hialurônico", "Textura mais suave e aparência revitalizada"]
];

const routineSteps = [
  "Escolha o sérum de acordo com a necessidade da pele.",
  "Aplique sobre a pele limpa e seca.",
  "Massageie até completa absorção.",
  "Reforce em áreas críticas, como joelhos, cotovelos, pernas e braços.",
  "Use diariamente para melhores resultados cosméticos."
];

const safeClaims = [
  "Hidratação imediata e prolongada.",
  "Ajuda a manter a barreira cutânea.",
  "Contribui para a aparência de pele mais uniforme.",
  "Promove toque macio e sedoso.",
  "Ajuda a melhorar a textura da pele.",
  "Auxilia na sensação de firmeza.",
  "Protege contra o ressecamento.",
  "Fórmula de rápida absorção.",
  "Sensorial leve e nutritivo.",
  "Pele com aparência mais viçosa."
];

const proofClaims = [
  "Hidratação por X horas.",
  "Redução percentual de ressecamento.",
  "Pele mais firme em X dias.",
  "Uniformização visível do tom em X semanas.",
  "Redução de vermelhidão pós-sol.",
  "Resultado clinicamente comprovado."
];

const avoidClaims = [
  "Trata dermatite.",
  "Cura ressecamento extremo.",
  "Elimina manchas.",
  "Clareia definitivamente.",
  "Reverte envelhecimento.",
  "Regenera a pele em profundidade.",
  "Resultado garantido."
];

const claimGroups = [
  { title: "Claims seguros", items: safeClaims, icon: BadgeCheck },
  { title: "Claims que exigem comprovação", items: proofClaims, icon: FlaskConical },
  { title: "Evitar", items: avoidClaims, icon: ShieldCheck }
];

const faqs = [
  {
    question: "O que significa skinificação do corpo?",
    answer:
      "É a aplicação da lógica do skincare facial ao cuidado corporal, com ativos reconhecidos, fórmulas direcionadas, benefícios específicos e maior atenção à barreira cutânea, hidratação, textura e aparência da pele."
  },
  {
    question: "Essa linha substitui um hidratante corporal comum?",
    answer:
      "A proposta é evoluir o conceito de hidratação corporal, oferecendo séruns com ativos direcionados e sensorial mais sofisticado. Pode ser usada como cuidado principal ou complementar."
  },
  {
    question: "Qual sérum escolher para pele ressecada?",
    answer:
      "As versões com ureia e lipoproteínas são indicadas para hidratação intensa e prolongada. Para áreas críticas, o sérum com colágeno vegetal e manteiga de manga pode ser uma boa opção."
  },
  {
    question: "Qual versão é indicada para pele sem viço ou tom irregular?",
    answer:
      "O sérum com niacinamida e óleo de girassol foi pensado para melhorar a aparência de uniformidade, luminosidade e equilíbrio da pele."
  },
  {
    question: "A linha tem textura pesada?",
    answer:
      "Não. A proposta é oferecer sensorial leve, nutritivo e de rápida absorção, ideal para uso diário."
  },
  {
    question: "Os resultados são imediatos?",
    answer:
      "Benefícios sensoriais, como maciez, conforto e hidratação, podem ser percebidos logo após o uso. Claims específicos de performance devem ser comprovados por testes adequados."
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

export default function DermocorporaisSkinificacaoPage() {
  return (
    <main className="overflow-hidden">
      <section className="grain section-shell pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Corporal • skinificação do corpo</p>
            <h1 className="mt-5 text-[clamp(3rem,7.6vw,8.2rem)] font-light leading-[0.94] text-graphite">
              Dermocorporais — Skinificação do Corpo.
            </h1>
            <p className="mt-7 max-w-2xl text-[clamp(1.35rem,2.2vw,2.1rem)] font-light leading-tight text-graphite">
              Ativos consagrados, tecnologia cosmética e performance visível para a pele corporal.
            </p>
            <p className="body-large mt-6 max-w-2xl">
              Uma linha de séruns corporais desenvolvida para transformar a hidratação em tratamento cosmético avançado. Fórmulas leves, nutritivas e de rápida absorção combinam ativos nobres, óleos vegetais e umectantes de alta performance.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <MinimalButton href="#linha">Conhecer a linha</MinimalButton>
              <MinimalButton href="#indicacao" variant="ghost">Ver indicação por necessidade</MinimalButton>
            </div>
            <div className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-graphite/10 bg-white px-4 py-3 text-sm text-graphite/68 shadow-soft">
              <Sparkles className="h-4 w-4 text-graphite" />
              Skincare para o corpo • Alta performance • Barreira cutânea • Textura leve
            </div>
          </Reveal>
          <Reveal delay={0.08} className="group relative aspect-[1.12]">
            <PlaceholderImage label="IMG-HERO-DERMOCORPORAIS-SKINIFICACAO" priority />
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-20 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionTitle
            eyebrow="Conceito"
            title="A pele do corpo também merece skincare."
            text="A skinificação corporal leva para o corpo a mesma inteligência do cuidado facial: ativos reconhecidos, fórmulas direcionadas, benefícios específicos e sensorial sofisticado."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {conceptCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-8 text-2xl font-light text-graphite">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-graphite/62">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.05fr]">
            <div className="group relative min-h-[360px] bg-mist lg:min-h-[620px]">
              <PlaceholderImage label="IMG-BASE-TECNOLOGICA-DERMOCORPORAIS" />
            </div>
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow">Base tecnológica comum</p>
              <h2 className="mt-5 text-[clamp(2.3rem,5vw,5.8rem)] font-light leading-[1.02] text-graphite">
                Uma base tecnológica para múltiplas necessidades da pele.
              </h2>
              <p className="body-large mt-7">
                Todas as versões compartilham uma base cosmética pensada para entregar conforto, hidratação e proteção no uso diário, com textura leve, nutrição inteligente e ativos de apoio.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {baseBlocks.map((block) => {
                  const Icon = block.icon;
                  return (
                    <div key={block.title} className="rounded-[1.35rem] border border-graphite/10 bg-porcelain p-5">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-graphite">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="mt-5 text-lg font-medium text-graphite">{block.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-graphite/62">{block.text}</p>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 rounded-[1.35rem] bg-graphite p-5 text-sm leading-7 text-white/72">
                Resultado percebido: pele macia, protegida, confortável e tratada com a mesma atenção dedicada ao rosto.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="linha" className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Visão geral"
          title="Cinco séruns. Cinco estratégias de cuidado corporal."
          text="Cada versão foi criada para uma necessidade específica da pele, combinando ativos protagonistas, óleos vegetais e benefícios cosméticos direcionados."
        />
        <div className="mt-12 grid gap-5">
          {serums.map((serum, index) => {
            const Icon = serum.icon;
            return (
              <Reveal key={serum.name} delay={(index % 2) * 0.04} className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white shadow-soft">
                <div className={`grid gap-0 lg:grid-cols-[0.92fr_1.08fr] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="group relative min-h-[360px] bg-mist">
                    <PlaceholderImage label={serum.imageLabel} />
                  </div>
                  <div className="p-7 md:p-10 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-graphite/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-graphite/62">
                        sérum {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-porcelain text-graphite">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h2 className="mt-8 text-[clamp(2rem,4vw,4.4rem)] font-light leading-[1.02] text-graphite">{serum.name}</h2>
                    <h3 className="mt-5 text-xl font-medium text-graphite">{serum.headline}</h3>
                    <p className="mt-5 text-sm leading-7 text-graphite/64">{serum.description}</p>
                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                      <div className="rounded-[1.35rem] bg-porcelain p-5">
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-graphite/42">Ativo protagonista</p>
                        <p className="mt-3 text-lg text-graphite">{serum.active}</p>
                      </div>
                      <div className="rounded-[1.35rem] bg-porcelain p-5">
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-graphite/42">Óleo ou complemento</p>
                        <p className="mt-3 text-lg text-graphite">{serum.complement}</p>
                      </div>
                    </div>
                    {showIngredientDetails ? (
                      <div className="mt-6 grid gap-3 lg:grid-cols-2">
                        <div className="rounded-[1.35rem] border border-graphite/10 p-5">
                          <p className="text-sm font-medium text-graphite">O que entrega</p>
                          <ul className="mt-4 grid gap-2 text-sm leading-6 text-graphite/64">
                            {serum.benefits.map((item) => <li key={item}>• {item}</li>)}
                          </ul>
                        </div>
                        <div className="rounded-[1.35rem] border border-graphite/10 p-5">
                          <p className="text-sm font-medium text-graphite">Diferencial do complemento</p>
                          <ul className="mt-4 grid gap-2 text-sm leading-6 text-graphite/64">
                            {serum.complementDetails.map((item) => <li key={item}>• {item}</li>)}
                          </ul>
                        </div>
                      </div>
                    ) : null}
                    <p className="mt-6 rounded-[1.35rem] bg-porcelain p-5 text-sm leading-7 text-graphite/66">
                      <strong className="text-graphite">Benefício percebido:</strong> {serum.perceived}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-graphite/62">
                      <strong className="text-graphite">Indicação:</strong> {serum.indication}
                    </p>
                    <div className="mt-8">
                      <MinimalButton href="/contato#formulario">{serum.cta}</MinimalButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="indicacao" className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Indicação estratégica"
          title="Escolha pelo que a pele precisa hoje."
          text="Uma matriz objetiva para orientar consumidor, equipe comercial e arquitetura de linha."
        />
        <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead className="bg-porcelain text-xs uppercase tracking-[0.14em] text-graphite/48">
                <tr>
                  <th className="px-5 py-4 font-medium">Necessidade da pele</th>
                  <th className="px-5 py-4 font-medium">Versão indicada</th>
                  <th className="px-5 py-4 font-medium">Benefício percebido</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/8 text-sm text-graphite/68">
                {indicationRows.map(([need, version, benefit]) => (
                  <tr key={need} className="transition hover:bg-porcelain/70">
                    <td className="px-5 py-5 font-medium text-graphite">{need}</td>
                    <td className="px-5 py-5">{version}</td>
                    <td className="px-5 py-5">{benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Comparativo"
          title="Uma rotina corporal completa, com ativos de skincare."
          text="Cinco versões para cobrir necessidades, textura, indicação e discurso técnico de linha."
        />
        <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1080px] border-collapse text-left">
              <thead className="bg-porcelain text-xs uppercase tracking-[0.14em] text-graphite/48">
                <tr>
                  <th className="px-5 py-4 font-medium">Sérum</th>
                  <th className="px-5 py-4 font-medium">Ativo protagonista</th>
                  <th className="px-5 py-4 font-medium">Óleo ou complemento</th>
                  <th className="px-5 py-4 font-medium">Função principal</th>
                  <th className="px-5 py-4 font-medium">Sensorial</th>
                  <th className="px-5 py-4 font-medium">Melhor indicação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/8 text-sm text-graphite/68">
                {serums.map((serum) => (
                  <tr key={serum.name} className="transition hover:bg-porcelain/70">
                    <td className="px-5 py-5 font-medium text-graphite">{serum.name.replace("Sérum Corporal ", "")}</td>
                    <td className="px-5 py-5">{serum.active}</td>
                    <td className="px-5 py-5">{serum.complement}</td>
                    <td className="px-5 py-5">{serum.perceived}</td>
                    <td className="px-5 py-5">Leve, nutritivo e de rápida absorção</td>
                    <td className="px-5 py-5">{serum.indication}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="group aspect-[1.12]">
            <PlaceholderImage label="IMG-ROTINA-DERMOCORPORAL" />
          </Reveal>
          <SectionTitle
            eyebrow="Rotina recomendada"
            title="Como inserir na rotina corporal"
            text="Os séruns corporais podem ser aplicados diariamente após o banho, com a pele limpa e seca, ou sempre que houver necessidade de reforço de hidratação e conforto."
          />
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {routineSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-graphite text-sm text-white">{index + 1}</span>
              <p className="mt-8 text-sm leading-7 text-graphite/66">{step}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {showB2BPositioning ? (
        <section className="section-shell pb-20 md:pb-32">
          <Reveal className="rounded-[2rem] border border-graphite/10 bg-white p-8 shadow-soft md:p-12">
            <p className="eyebrow">Posicionamento comercial</p>
            <h2 className="mt-5 max-w-5xl text-[clamp(2.4rem,5vw,5.8rem)] font-light leading-[1.02] text-graphite">
              Dermocosmético corporal de alta performance.
            </h2>
            <p className="body-large mt-7 max-w-4xl">
              A linha Dermocorporais evolui a hidratação tradicional para uma rotina com ativos conhecidos pelo consumidor de skincare, comunicação técnica e benefícios específicos.
            </p>
            <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {["Skincare para o corpo", "Barreira cutânea", "Uniformização do tom", "Sensorial leve"].map((item) => (
                <div key={item} className="rounded-[1.25rem] bg-porcelain p-5 text-lg font-light text-graphite">{item}</div>
              ))}
            </div>
          </Reveal>
        </section>
      ) : null}

      {showRegulatoryNotes ? (
        <section className="section-shell pb-20 md:pb-32">
          <SectionTitle
            eyebrow="Claims e segurança regulatória"
            title="Claims sugeridos para validação."
            text="A comunicação deve valorizar benefícios cosméticos sem ultrapassar limites regulatórios. Claims devem ser ajustados conforme testes, concentração de ativos e documentação técnica."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {claimGroups.map(({ title, items, icon: Icon }) => {
              return (
                <Reveal key={title} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-8 text-2xl font-light text-graphite">{title}</h2>
                  <ul className="mt-5 grid gap-2 text-sm leading-7 text-graphite/62">
                    {items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
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
              <p className="eyebrow text-white/54">CTA final</p>
              <h2 className="mt-5 text-[clamp(2.4rem,5vw,5.8rem)] font-light leading-[1.02]">
                A nova geração do cuidado corporal começa pela pele.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                Dermocorporais é uma linha pensada para marcas que desejam levar o body care a um novo patamar: mais técnico, mais sensorial, mais desejável e mais próximo do skincare facial.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MinimalButton href="/contato#formulario" variant="light">Criar uma linha Dermocorporal</MinimalButton>
                <MinimalButton href="#linha" variant="darkGhost">Ver ativos da coleção</MinimalButton>
              </div>
            </div>
            <div className="group relative min-h-[360px]">
              <PlaceholderImage label="IMG-CTA-DERMOCORPORAIS" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-24 md:pb-36">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" text="Respostas rápidas para orientar estratégia, formulação e comunicação da linha." />
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
