import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Beaker,
  Blend,
  CircleDot,
  Droplets,
  FlaskConical,
  Gem,
  Heart,
  Layers3,
  Leaf,
  LineChart,
  ListChecks,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Target
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Cases de Sucesso em Cuidado Corporal | LQF Farmacêutica",
  description:
    "Estudo estratégico de oportunidades em cuidado corporal com categorias de alta demanda, ativos funcionais, sensorial ideal e arquitetura de linha para marcas de cosméticos."
};

const showBenchmarks = false;
const image = "/products/cases-cuidado-corporal/cases-placeholder.jpg";

const marketCards = [
  {
    title: "Rotinas mais completas",
    text: "O consumidor busca produtos corporais com benefício claro, sensorial agradável e uso simples no dia a dia.",
    icon: Layers3
  },
  {
    title: "Valor percebido maior",
    text: "Ativos conhecidos elevam a proposta técnica e ajudam a transformar categorias tradicionais em linhas premium.",
    icon: Gem
  },
  {
    title: "Demanda recorrente",
    text: "Hidratação, reparação, conforto e proteção seguem como necessidades frequentes no mercado brasileiro.",
    icon: LineChart
  }
];

const categories = [
  {
    title: "Hidratante corporal para pele seca",
    pain: "Ressecamento, aspereza e sensação de repuxamento.",
    active: "Ácido hialurônico, glicerina, manteiga de karité e vitamina E.",
    sensorial: "Creme rico, absorção confortável e acabamento macio.",
    opportunity: "Linha diária com comunicação de maciez, elasticidade e conforto prolongado.",
    icon: Droplets
  },
  {
    title: "Creme hidratante multifuncional",
    pain: "Busca por praticidade em um produto para diferentes áreas do corpo.",
    active: "Pantenol, niacinamida, glicerina e óleos vegetais.",
    sensorial: "Textura cremosa leve, fácil espalhabilidade e toque não pegajoso.",
    opportunity: "Produto herói para uso familiar, nécessaire, academia e rotina pós-banho.",
    icon: Sparkles
  },
  {
    title: "Óleo de banho emulsionável",
    pain: "Banho que limpa, mas deixa a pele desconfortável ou ressecada.",
    active: "Óleos vegetais, vitamina E e agentes emolientes.",
    sensorial: "Óleo que emulsiona em contato com água, toque nutritivo e enxágue fácil.",
    opportunity: "Categoria sensorial de maior valor, com narrativa de banho nutritivo.",
    icon: SprayCan
  },
  {
    title: "Multirrestaurador corporal",
    pain: "Pele sensibilizada, áreas ásperas e necessidade de reparação intensiva.",
    active: "Pantenol, ceramidas, niacinamida e manteiga de karité.",
    sensorial: "Bálsamo concentrado, filme protetor delicado e conforto imediato.",
    opportunity: "Produto premium para áreas específicas e cuidado de alta performance.",
    icon: ShieldCheck
  },
  {
    title: "Hidratante restaurador corporal",
    pain: "Pele seca com aparência opaca e barreira cutânea fragilizada.",
    active: "Ceramidas, glicerina, pantenol e vitamina E.",
    sensorial: "Loção densa, rápida absorção e acabamento aveludado.",
    opportunity: "Linha de reparação diária com linguagem de barreira cutânea e conforto.",
    icon: BadgeCheck
  },
  {
    title: "Regenerador corporal dermocalmante",
    pain: "Desconforto, sensibilidade visual e sensação de pele fragilizada.",
    active: "Pantenol, aloe vera, niacinamida e ativos botânicos calmantes.",
    sensorial: "Gel-creme fresco, toque leve e sensação de alívio cosmético.",
    opportunity: "Produto para rotinas pós-sol, pós-depilação e cuidado de peles delicadas.",
    icon: Leaf
  },
  {
    title: "Regenerador labial",
    pain: "Lábios ressecados, rachados ou com aparência áspera.",
    active: "Manteiga de karité, óleos vegetais, vitamina E e pantenol.",
    sensorial: "Balm confortável, brilho discreto e filme flexível.",
    opportunity: "Item de alto giro para complementar kits corporais e linhas de cuidado diário.",
    icon: Heart
  },
  {
    title: "Loção hidratante multirreparadora",
    pain: "Necessidade de hidratação frequente com toque agradável para uso contínuo.",
    active: "Glicerina, niacinamida, ceramidas e ácido hialurônico.",
    sensorial: "Loção fluida, espalhamento rápido e pele com toque sedoso.",
    opportunity: "Produto de entrada para linha corporal completa, com uso diário e recorrente.",
    icon: Blend
  },
  {
    title: "Óleo biorestaurador",
    pain: "Pele sem viço, ressecada e com necessidade de nutrição sensorial.",
    active: "Óleos vegetais, vitamina E e emolientes de alta performance.",
    sensorial: "Óleo seco, luminosidade discreta e toque sofisticado.",
    opportunity: "Produto aspiracional para ritual corporal, banho premium e finalização.",
    icon: CircleDot
  },
  {
    title: "Creme preventivo de assaduras",
    pain: "Atrito, dobra de pele e áreas sujeitas a desconforto.",
    active: "Óxido de zinco, pantenol, glicerina e óleos vegetais.",
    sensorial: "Creme protetor, boa aderência e espalhabilidade controlada.",
    opportunity: "Categoria funcional para linhas adultas, infantis, esportivas ou maternas.",
    icon: PackageCheck
  }
];

const activeIngredients = [
  {
    title: "Ácido hialurônico",
    text: "Contribui para hidratação, maciez e aparência mais viçosa.",
    icon: Droplets
  },
  {
    title: "Glicerina",
    text: "Umectante clássico para conforto e retenção de hidratação.",
    icon: Beaker
  },
  {
    title: "Pantenol",
    text: "Ajuda a promover sensação de reparação, suavidade e cuidado.",
    icon: Heart
  },
  {
    title: "Niacinamida",
    text: "Auxilia na aparência uniforme e no suporte à barreira cutânea.",
    icon: Sparkles
  },
  {
    title: "Ceramidas",
    text: "Associadas ao reforço da barreira e ao conforto de peles secas.",
    icon: ShieldCheck
  },
  {
    title: "Manteiga de karité",
    text: "Emoliente nutritivo para toque macio e sensação de proteção.",
    icon: Leaf
  },
  {
    title: "Óleos vegetais",
    text: "Entregam nutrição sensorial, brilho discreto e maior emoliência.",
    icon: CircleDot
  },
  {
    title: "Vitamina E",
    text: "Ativo antioxidante usado para proteção cosmética e estabilidade sensorial.",
    icon: BadgeCheck
  },
  {
    title: "Óxido de zinco",
    text: "Forma uma barreira física cosmética em produtos protetores.",
    icon: FlaskConical
  }
];

const architecture = [
  {
    title: "Entrada diária",
    products: "Loção hidratante, creme multifuncional e regenerador labial.",
    role: "Produtos de uso frequente, alto giro e linguagem simples."
  },
  {
    title: "Tratamento intensivo",
    products: "Multirrestaurador, restaurador corporal e dermocalmante.",
    role: "Produtos com mais técnica, benefícios claros e maior valor percebido."
  },
  {
    title: "Ritual sensorial",
    products: "Óleo de banho emulsionável e óleo biorestaurador.",
    role: "Produtos aspiracionais, com experiência premium e narrativa de autocuidado."
  },
  {
    title: "Proteção específica",
    products: "Creme preventivo de assaduras e produtos para áreas de atrito.",
    role: "Soluções funcionais para públicos e ocasiões de uso bem definidos."
  }
];

const faqs = [
  {
    question: "Esses cases exibem marcas concorrentes?",
    answer:
      showBenchmarks
        ? "Esta versão permite benchmark interno, mas a comunicação pública deve respeitar aprovações jurídicas e de marca."
        : "Não. Benchmarks são tratados apenas como referência estratégica interna. A copy pública apresenta categorias, benefícios e oportunidades sem citar marcas registradas."
  },
  {
    question: "A LQF pode desenvolver uma linha proprietária a partir dessas oportunidades?",
    answer:
      "Sim. A equipe pode avaliar proposta, público, sensorial, ativos, embalagem, volume estimado e requisitos regulatórios para estruturar uma linha adequada à marca."
  },
  {
    question: "É possível adaptar ativos e sensorial?",
    answer:
      "Sim. As combinações podem ser ajustadas conforme posicionamento, custo-alvo, tipo de pele, embalagem, experiência desejada e viabilidade produtiva."
  },
  {
    question: "Esses produtos fazem claims médicos?",
    answer:
      "Não. A linguagem deve permanecer cosmética, usando termos como contribui, auxilia, ajuda, promove sensação e melhora a aparência."
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

export default function CasesDeSucessoCorporalPage() {
  return (
    <main className="overflow-hidden">
      <section className="grain section-shell pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Corporal • estudo estratégico</p>
            <h1 className="mt-5 text-[clamp(3rem,7.6vw,8.2rem)] font-light leading-[0.94] text-graphite">
              Cases de Sucesso em Cuidado Corporal.
            </h1>
            <p className="body-large mt-7 max-w-2xl">
              Um mapa técnico de oportunidades para transformar categorias de alta procura em produtos proprietários com ativos funcionais, sensorial premium e alto valor percebido.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <MinimalButton href="#categorias">Ver categorias</MinimalButton>
              <MinimalButton href="/contato#formulario" variant="ghost">
                Desenvolver linha corporal
              </MinimalButton>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="group relative aspect-[1.12]">
            <PlaceholderImage label="IMG-HERO-CASES-CUIDADO-CORPORAL" priority />
            <div className="absolute -bottom-5 left-5 right-5 rounded-[1.5rem] border border-graphite/10 bg-white/88 p-4 shadow-soft backdrop-blur-xl md:left-auto md:w-80">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-graphite text-white">
                  <Target className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-graphite">Benchmark estratégico</p>
                  <p className="text-xs leading-5 text-graphite/58">Categorias fortes, sem exibir marcas concorrentes.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-20 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionTitle
            eyebrow="Mercado"
            title="O cuidado corporal deixou de ser uma categoria básica."
            text="No Brasil, o consumidor procura soluções que combinem hidratação, reparação, praticidade, sensorial agradável e benefícios claros. Oportunidades fortes nascem quando necessidades simples ganham construção técnica e experiência premium."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {marketCards.map((item, index) => {
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
              <PlaceholderImage label="IMG-ATIVOS-COSMETICOS" />
            </div>
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow">Insight estratégico</p>
              <h2 className="mt-5 text-[clamp(2.3rem,5vw,5.8rem)] font-light leading-[1.02] text-graphite">
                Necessidades simples podem virar produtos de alto valor percebido.
              </h2>
              <p className="body-large mt-7">
                Pele seca, atrito, desconforto, lábios ressecados e banho nutritivo são demandas fáceis de entender. O diferencial está em traduzir essas dores em fórmulas com ativos reconhecíveis, sensorial bem definido, embalagem adequada e narrativa comercial segura.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {["Dor clara", "Ativo reconhecível", "Sensorial memorável", "Arquitetura de linha"].map((item) => (
                  <div key={item} className="rounded-[1.25rem] bg-porcelain p-5 text-lg font-light text-graphite">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="categorias" className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Categorias de sucesso"
          title="Produtos campeões de demanda para construir uma linha proprietária."
          text="Cada categoria abaixo organiza dor do consumidor, ativos-chave, sensorial ideal e oportunidade de desenvolvimento."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.04} className="group overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
                <div className="relative aspect-[16/10]">
                  <PlaceholderImage label={`IMG-${item.title.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z0-9]+/g, "-").replace(/-$/g, "")}`} />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-porcelain text-graphite">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-graphite/38">case {String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mt-7 text-2xl font-light leading-tight text-graphite">{item.title}</h2>
                  <p className="mt-5 text-sm leading-7 text-graphite/62"><strong className="text-graphite">Dor:</strong> {item.pain}</p>
                  <p className="mt-3 text-sm leading-7 text-graphite/62"><strong className="text-graphite">Ativos:</strong> {item.active}</p>
                  <p className="mt-3 text-sm leading-7 text-graphite/62"><strong className="text-graphite">Sensorial:</strong> {item.sensorial}</p>
                  <p className="mt-3 rounded-[1.25rem] bg-porcelain p-4 text-sm leading-7 text-graphite/66">{item.opportunity}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Mapa comparativo"
          title="Da dor do consumidor à oportunidade de marca."
          text="A matriz resume onde cada produto pode atuar, quais ativos sustentam a proposta e qual experiência sensorial favorece a recompra."
        />
        <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1080px] border-collapse text-left">
              <thead className="bg-porcelain text-xs uppercase tracking-[0.14em] text-graphite/48">
                <tr>
                  <th className="px-5 py-4 font-medium">Categoria</th>
                  <th className="px-5 py-4 font-medium">Dor do consumidor</th>
                  <th className="px-5 py-4 font-medium">Ativos-chave</th>
                  <th className="px-5 py-4 font-medium">Sensorial ideal</th>
                  <th className="px-5 py-4 font-medium">Oportunidade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/8 text-sm text-graphite/68">
                {categories.map((item) => (
                  <tr key={item.title} className="transition hover:bg-porcelain/70">
                    <td className="px-5 py-5 font-medium text-graphite">{item.title}</td>
                    <td className="px-5 py-5">{item.pain}</td>
                    <td className="px-5 py-5">{item.active}</td>
                    <td className="px-5 py-5">{item.sensorial}</td>
                    <td className="px-5 py-5">{item.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle
            eyebrow="Ativos"
            title="Ingredientes que sustentam a narrativa técnica."
            text="A escolha dos ativos deve equilibrar reconhecimento pelo consumidor, segurança cosmética, viabilidade de formulação, sensorial e posicionamento de preço."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeIngredients.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(index % 3) * 0.035} className="rounded-[1.35rem] border border-graphite/10 bg-white p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-porcelain text-graphite">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h2 className="mt-6 text-xl font-light text-graphite">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-graphite/62">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Arquitetura sugerida"
          title="Uma linha corporal completa precisa ter entrada, tratamento, ritual e proteção."
          text="Essa organização ajuda a marca a vender por ocasião de uso, por necessidade da pele e por ticket de produto."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {architecture.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="rounded-[1.75rem] border border-graphite/10 bg-white p-7 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-graphite text-white">{index + 1}</span>
              <h2 className="mt-8 text-3xl font-light leading-tight text-graphite">{item.title}</h2>
              <p className="mt-5 text-sm leading-7 text-graphite/62"><strong className="text-graphite">Produtos:</strong> {item.products}</p>
              <p className="mt-4 rounded-[1.25rem] bg-porcelain p-4 text-sm leading-7 text-graphite/66">{item.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-graphite text-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr] lg:items-stretch">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow text-white/54">Desenvolvimento cosmético</p>
              <h2 className="mt-5 text-[clamp(2.4rem,5vw,5.8rem)] font-light leading-[1.02]">
                Transforme uma categoria forte em uma linha própria.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                A LQF pode apoiar a definição de conceito, ativos, sensorial, embalagem, testes, regularização e produção para uma linha corporal com posicionamento técnico e comercial.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MinimalButton href="/contato#formulario" variant="light">
                  Desenvolver minha linha
                </MinimalButton>
                <MinimalButton href="/produtos/corporal/body-splash-funcional" variant="darkGhost">
                  Ver Body Splash Funcional
                </MinimalButton>
              </div>
            </div>
            <div className="group relative min-h-[360px]">
              <PlaceholderImage label="IMG-CTA-DESENVOLVIMENTO-COSMETICO" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-24 md:pb-36">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" text="Pontos importantes para orientar estratégia, comunicação pública e próximos passos." />
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
