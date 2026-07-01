import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  Beaker,
  CheckCircle2,
  ClipboardCheck,
  Dna,
  Droplets,
  Eye,
  FlaskConical,
  Gauge,
  HeartHandshake,
  Leaf,
  Microscope,
  Moon,
  PackageCheck,
  Palette,
  ScanFace,
  ShieldCheck,
  Sparkles,
  SunMedium,
  WandSparkles
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.cronogramaFacialColorido;

const basePath = "/products/cronograma-facial-colorido";

const routineSteps = [
  {
    label: "Pêssego",
    title: "Nutrição antioxidante",
    text: "Uma etapa de proteção diária e luminosidade, com narrativa de defesa antioxidante e cuidado preventivo.",
    icon: ShieldCheck,
    color: "#D8A184",
    image: `${basePath}/peach-hero.jpg`
  },
  {
    label: "Amarelo",
    title: "Hidratação clareadora",
    text: "Uma proposta de energia, brilho e uniformização visual para rotinas diurnas ou noturnas.",
    icon: SunMedium,
    color: "#D8C57E",
    image: `${basePath}/amarelo-hero.jpg`
  },
  {
    label: "Rosa",
    title: "Restauração antienvelhecimento",
    text: "Uma linha de reparação, conforto e reforço de barreira para peles maduras, cansadas ou sensibilizadas.",
    icon: Sparkles,
    color: "#D9A8A6",
    image: `${basePath}/rosa-hero.jpg`
  },
  {
    label: "Verde",
    title: "Controle e equilíbrio",
    text: "Uma etapa para oleosidade, poros aparentes e acabamento matte sem transformar a rotina em algo pesado.",
    icon: Gauge,
    color: "#A8B49A",
    image: `${basePath}/verde-hero.jpg`
  }
];

const evolutionItems = [
  { title: "Rotinas complexas", text: "O cuidado deixa de depender de muitas instruções e passa a ser guiado por uma lógica visual simples.", icon: ClipboardCheck, mode: "passado" },
  { title: "Texturas pesadas", text: "A experiência evolui para sensoriais leves, sofisticados e adaptáveis aos hábitos do consumidor.", icon: Droplets, mode: "passado" },
  { title: "Foco só na correção", text: "A nova proposta combina desempenho, prazer de uso, autocuidado e desejo de continuidade.", icon: Activity, mode: "futuro" },
  { title: "Alta performance", text: "A rotina precisa entregar resultado percebido, mas também precisa ser fácil de entender e agradável de repetir.", icon: BadgeCheck, mode: "futuro" },
  { title: "Entretenimento sensorial", text: "Cor, textura, etapa e ritual viram linguagem de produto, conteúdo e venda consultiva.", icon: WandSparkles, mode: "futuro" },
  { title: "Autocuidado prazeroso", text: "O produto entra no dia a dia como uma experiência de amor-próprio, não apenas como obrigação.", icon: HeartHandshake, mode: "futuro" }
];

const colorScience = [
  { title: "Astaxantina", text: "Ativo associado à tonalidade pêssego e à narrativa antioxidante.", color: "#D8A184", icon: ShieldCheck },
  { title: "Óleo de Buriti", text: "Fonte natural da cor amarela, com presença de betacaroteno e vitamina E.", color: "#D8C57E", icon: SunMedium },
  { title: "Vitamina B12", text: "Ativo relacionado à tonalidade rosa e à proposta de regeneração e conforto.", color: "#D9A8A6", icon: Sparkles },
  { title: "Clorofila", text: "Fonte da cor verde, com narrativa antioxidante, detox e dermocalmante.", color: "#A8B49A", icon: Leaf }
];

const textures = [
  {
    title: "Sérum Facial",
    icon: Droplets,
    image: `${basePath}/colors-2.jpg`,
    points: ["Textura leve e rápida absorção", "Filme hidratante confortável", "Sensação refrescante e toque sedoso", "Ideal para todos os tipos de pele"]
  },
  {
    title: "Creme Facial",
    icon: ScanFace,
    image: `${basePath}/colors-3.jpg`,
    points: ["Sensorial sofisticado e aveludado", "Nutrição intensiva", "Proteção contra o ressecamento", "Conforto prolongado para a pele"]
  }
];

const linePrograms = [
  {
    label: "Pêssego",
    title: "Nutrição antioxidante",
    headline: "Astaxantina nanoencapsulada",
    description: "O antioxidante supremo para uma narrativa de proteção contra sinais de fotoenvelhecimento e estímulo à síntese de colágeno.",
    color: "#D8A184",
    image: `${basePath}/peach-1.jpg`,
    icon: ShieldCheck,
    ingredients: ["Complexo botânico: calêndula, camomila, romã e aloe vera", "Pantenol: filme protetor e hidratação prolongada"],
    benefits: ["Previne sinais de fotoenvelhecimento", "Fortalece defesas antioxidantes", "Auxilia na luminosidade e no tom da pele"]
  },
  {
    label: "Amarelo",
    title: "Hidratação clareadora",
    headline: "Coenzima Q10",
    description: "Energia para as células, combate ao envelhecimento precoce e renovação da pele com tecnologia biotecnológica.",
    color: "#D8C57E",
    image: `${basePath}/amarelo-1.jpg`,
    icon: SunMedium,
    ingredients: ["Ácido lipóico: renovação celular e uniformização", "Niacinamida: clareamento progressivo e redução de manchas", "Óleo de buriti: fonte da cor amarela, rico em betacaroteno e vitamina E"],
    benefits: ["Uniformiza o tom da pele", "Aumenta a energia celular e o brilho", "Favorece a síntese de colágeno e elastina"]
  },
  {
    label: "Rosa",
    title: "Restauração antienvelhecimento",
    headline: "Extrato de alga vermelha nanoencapsulado",
    description: "Rico em ficobiliproteínas, oferece proteção celular avançada e firmeza estrutural.",
    color: "#D9A8A6",
    image: `${basePath}/rosa-1.jpg`,
    icon: Sparkles,
    ingredients: ["Vitamina B12: fonte da cor rosa", "Regeneração celular, conforto e redução de sensibilidade visual"],
    benefits: ["Protege a matriz estrutural e reduz degradação de colágeno", "Melhora a firmeza e auxilia na redução da flacidez", "Reforça a barreira cutânea"]
  },
  {
    label: "Verde",
    title: "Controle e equilíbrio",
    headline: "Extrato de Barosma betulina",
    description: "Tecnologia inteligente para atuar nos mecanismos de produção de sebo sem ressecar.",
    color: "#A8B49A",
    image: `${basePath}/verde-1.jpg`,
    icon: Gauge,
    ingredients: ["Clorofila: fonte da cor verde", "Ação antioxidante, detox e efeito dermocalmante"],
    benefits: ["Controla a oleosidade excessiva e reduz o brilho", "Minimiza poros aparentes e uniformiza a textura", "Promove efeito matte prolongado"]
  }
];

const treatmentMatrix = [
  { need: "Proteção diária e luminosidade", match: "Pêssego", moment: "Use pela manhã para blindagem antioxidante.", color: "#D8A184", icon: SunMedium },
  { need: "Clareamento e energia", match: "Amarelo", moment: "Use no ritual noturno para renovação.", color: "#D8C57E", icon: Moon },
  { need: "Firmeza e reparação profunda", match: "Rosa", moment: "Uso diário para peles maduras ou cansadas.", color: "#D9A8A6", icon: Dna },
  { need: "Poros dilatados e brilho excessivo", match: "Verde", moment: "Use antes da maquiagem para efeito matte.", color: "#A8B49A", icon: Eye }
];

const standards = [
  { title: "100% vegano", text: "Sem ingredientes de origem animal.", icon: Leaf },
  { title: "Cruelty-free", text: "Desenvolvido com responsabilidade e respeito.", icon: HeartHandshake },
  { title: "Livre de parabenos e glúten", text: "Fórmulas limpas, seguras e de alta tolerância.", icon: ShieldCheck },
  { title: "Dermatologicamente testado", text: "Eficácia avaliada para todos os tipos de pele, incluindo as sensíveis.", icon: Microscope }
];

const lqfSteps = [
  { title: "Conceito de linha", text: "Definição de posicionamento, narrativa cromática, sensorialidade e mix ideal.", icon: Palette },
  { title: "Formulação", text: "Desenvolvimento ou adaptação técnica conforme proposta, textura, embalagem e viabilidade.", icon: FlaskConical },
  { title: "Validação", text: "Ensaios, estabilidade, compatibilidade e documentação para avançar com segurança.", icon: ClipboardCheck },
  { title: "Produção", text: "Fabricação, envase, controle de qualidade, rastreabilidade e liberação do produto acabado.", icon: PackageCheck }
];

const gallery = [
  { src: `${basePath}/hero-colors.jpg`, title: "Linha completa", tag: "Sistema visual" },
  { src: `${basePath}/colors-2.jpg`, title: "Rotina cromática", tag: "Experiência" },
  { src: `${basePath}/colors-3.jpg`, title: "Presença de prateleira", tag: "Marca" },
  { src: `${basePath}/rosa-1.jpg`, title: "Módulo Rosa", tag: "Primeiro passo" },
  { src: `${basePath}/peach-1.jpg`, title: "Módulo Pêssego", tag: "Equilíbrio" },
  { src: `${basePath}/verde-1.jpg`, title: "Módulo Verde", tag: "Tratamento" },
  { src: `${basePath}/amarelo-1.jpg`, title: "Módulo Amarelo", tag: "Finalização" },
  { src: `${basePath}/peach-2.jpg`, title: "Detalhe de linha", tag: "Acabamento" }
];

export default function CronogramaFacialColoridoPage() {
  return (
    <main className="overflow-hidden">
      <section className="grain section-shell pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Facial • rotina guiada por cores</p>
            <h1 className="mt-5 text-[clamp(3rem,8vw,8.4rem)] font-light leading-[0.94] text-graphite">
              Cronograma Facial Colorido.
            </h1>
            <p className="body-large mt-7 max-w-2xl">
              Cuidado inteligente, divertido e multifuncional. Uma linha facial pensada para transformar o skincare em uma jornada intuitiva, memorável e pronta para ganhar presença no ponto de venda.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <MinimalButton href="/contato#formulario">Desenvolver esta linha</MinimalButton>
              <MinimalButton href="#jornada" variant="ghost">Ver cronograma</MinimalButton>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="relative">
            <div className="relative aspect-[1.06] overflow-hidden rounded-[2rem] bg-mist shadow-soft">
              <Image
                src={`${basePath}/hero-colors.jpg`}
                alt="Linha Cronograma Facial Colorido com produtos em embalagens rosa, verde, amarelo e pêssego"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-[1.5rem] border border-graphite/10 bg-white/88 p-4 shadow-soft backdrop-blur-xl md:left-auto md:w-80">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-graphite text-white">
                  <WandSparkles className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-graphite">Sistema fácil de entender</p>
                  <p className="text-xs leading-5 text-graphite/58">Cores, etapas e rotina em uma narrativa única.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white p-3 shadow-soft md:p-4">
          <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-graphite">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={`${basePath}/hero-colors.jpg`}
              aria-label="Vídeo Cronograma Facial Colorido"
            >
              <source src={`${basePath}/cronograma-facial-colorido-16-9.mp4`} type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </Reveal>
      </section>

      <section className="section-shell py-20 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle
            eyebrow="A evolução do cuidado"
            title="O consumidor evoluiu. A rotina também precisa evoluir."
            text="Não basta entregar resultados: o skincare precisa transformar a rotina em uma experiência de amor-próprio, com alta performance, prazer sensorial e leitura imediata."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {evolutionItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(index % 2) * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium uppercase text-graphite/42">{item.mode}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-porcelain text-graphite">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <h2 className="mt-10 text-2xl font-light text-graphite">{item.title}</h2>
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
            <div className="relative min-h-[360px] bg-mist lg:min-h-[620px]">
              <Image
                src={`${basePath}/colors-2.jpg`}
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow">A ciência por trás da cor</p>
              <h2 className="mt-5 text-[clamp(2.2rem,5vw,5.8rem)] font-light leading-[1.02] text-graphite">
                Zero corantes artificiais. Biotecnologia visível.
              </h2>
              <p className="body-large mt-7">
                A tonalidade de cada fórmula funciona como prova visual da concentração de ativos funcionais. A cor deixa de ser apenas estética e passa a orientar a narrativa técnica da linha.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {colorScience.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[1.35rem] border border-graphite/10 bg-porcelain p-5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full" style={{ backgroundColor: `${item.color}33`, color: item.color }}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="text-lg font-medium text-graphite">{item.title}</h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-graphite/62">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Duas texturas, uma experiência"
          title="Sérum e creme ampliam a jornada sem complicar a escolha."
          text="A mesma narrativa pode nascer em texturas diferentes, criando uma linha mais completa para rotinas rápidas, tratamentos contínuos e kits de uso combinado."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {textures.map((texture, index) => {
            const Icon = texture.icon;
            return (
              <Reveal key={texture.title} delay={index * 0.05} className="overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white">
                <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                  <Image src={texture.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-graphite text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="text-3xl font-light text-graphite">{texture.title}</h2>
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {texture.points.map((point) => (
                      <div key={point} className="rounded-2xl bg-porcelain px-4 py-3 text-sm leading-6 text-graphite/66">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="jornada" className="section-shell py-20 md:py-32">
        <SectionTitle
          eyebrow="Jornada gamificada"
          title="Cada cor orienta uma etapa. Cada etapa reforça o hábito."
          text="O cronograma cria uma leitura simples para o consumidor: escolher a cor, entender o momento da rotina e evoluir no cuidado com clareza visual."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {routineSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.label} delay={index * 0.04} className="group overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white">
                <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/86 px-3 py-1 text-xs font-medium text-graphite backdrop-blur-md">
                    Passo {index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-graphite/10 px-3 py-2 text-xs font-medium text-graphite/72">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: step.color }} />
                      {step.label}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full" style={{ backgroundColor: `${step.color}33`, color: step.color }}>
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <h2 className="mt-7 text-3xl font-light text-graphite">{step.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-graphite/64">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Linhas funcionais"
          title="Quatro cores, quatro territórios de tratamento."
          text="Cada módulo transforma um ativo protagonista em uma narrativa de uso, benefício percebido e combinação comercial."
        />
        <div className="mt-12 grid gap-5">
          {linePrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <Reveal key={program.label} delay={(index % 2) * 0.04} className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white">
                <div className={`grid gap-0 lg:grid-cols-[0.9fr_1.1fr] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-[360px] bg-mist">
                    <Image
                      src={program.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-7 md:p-10 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-graphite/10 px-3 py-2 text-xs font-medium text-graphite/70">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: program.color }} />
                        Linha {program.label}
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-full" style={{ backgroundColor: `${program.color}33`, color: program.color }}>
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <h2 className="mt-8 text-[clamp(2rem,4vw,4.2rem)] font-light leading-[1.02] text-graphite">{program.title}</h2>
                    <h3 className="mt-5 text-xl font-medium text-graphite">{program.headline}</h3>
                    <p className="mt-4 text-base font-light leading-8 text-graphite/68">{program.description}</p>
                    <div className="mt-8 grid gap-4 xl:grid-cols-2">
                      <div className="rounded-[1.35rem] bg-porcelain p-5">
                        <p className="text-xs font-medium uppercase text-graphite/42">Composição narrativa</p>
                        <div className="mt-4 grid gap-3">
                          {program.ingredients.map((ingredient) => (
                            <div key={ingredient} className="flex gap-3 text-sm leading-6 text-graphite/66">
                              <Beaker className="mt-1 h-4 w-4 shrink-0" style={{ color: program.color }} />
                              <span>{ingredient}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-[1.35rem] bg-porcelain p-5">
                        <p className="text-xs font-medium uppercase text-graphite/42">Benefícios de comunicação</p>
                        <div className="mt-4 grid gap-3">
                          {program.benefits.map((benefit) => (
                            <div key={benefit} className="flex gap-3 text-sm leading-6 text-graphite/66">
                              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" style={{ color: program.color }} />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <Reveal className="rounded-[2rem] border border-graphite/10 bg-white p-5 shadow-soft md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="p-2 md:p-6">
              <p className="eyebrow">Mapa de rotina</p>
              <h2 className="mt-4 text-[clamp(2.2rem,4.6vw,5.4rem)] font-light leading-[1.02] text-graphite">
                Um produto não entra sozinho. Ele entra em uma sequência.
              </h2>
              <p className="body-large mt-6">
                A linha pode ser apresentada como uma trilha de cuidado: começar, evoluir, alternar e repetir. O resultado é uma experiência mais consultiva para a marca e mais clara para quem compra.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {routineSteps.map((step, index) => (
                <div key={step.title} className="rounded-[1.5rem] border border-graphite/10 bg-porcelain p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase text-graphite/42">Nível {index + 1}</span>
                    <CheckCircle2 className="h-5 w-5" style={{ color: step.color }} />
                  </div>
                  <div className="mt-8 h-2 rounded-full bg-white">
                    <div className="h-2 rounded-full" style={{ width: `${(index + 1) * 25}%`, backgroundColor: step.color }} />
                  </div>
                  <h3 className="mt-5 text-2xl font-light text-graphite">{step.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-graphite/60">{step.title} a etapa {index + 1} da jornada facial.</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Matriz de tratamento"
          title="Cada cor, um momento. Cada combinação, uma oportunidade."
          text="A apresentação do cronograma ajuda a orientar a rotina e também amplia a lógica de kits, duos e recompra."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {treatmentMatrix.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.need} delay={(index % 2) * 0.04} className="rounded-[1.75rem] border border-graphite/10 bg-white p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full" style={{ backgroundColor: `${item.color}33`, color: item.color }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-porcelain px-3 py-1 text-xs font-medium text-graphite/52">Match: {item.match}</span>
                </div>
                <h2 className="mt-10 text-2xl font-light text-graphite">{item.need}</h2>
                <p className="mt-4 text-sm leading-7 text-graphite/62">{item.moment}</p>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-5 rounded-[1.5rem] bg-graphite p-6 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase text-white/42">Insight comercial</p>
              <p className="mt-2 text-xl font-light leading-8 text-white/82">
                Incentive o Cronograma Duo, como Verde de dia e Amarelo à noite, para aumentar percepção de valor e ticket médio.
              </p>
            </div>
            <ArrowUpRight className="h-7 w-7 shrink-0 text-brass" />
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionTitle
            eyebrow="Coleção visual"
            title="Uma linha com leitura imediata e alto potencial de campanha."
            text="As cores ajudam a organizar a narrativa, diferenciar SKUs, criar kits e reforçar o desejo de completar a rotina."
          />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {gallery.map((item, index) => (
              <Reveal key={item.src} delay={(index % 3) * 0.04} className="group overflow-hidden rounded-[1.5rem] border border-graphite/10 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="text-base font-medium text-graphite">{item.title}</p>
                    <p className="mt-1 text-xs uppercase text-graphite/44">{item.tag}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-brass transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <Reveal className="overflow-hidden rounded-[2rem] bg-graphite text-white">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow text-white/48">Desenvolvimento LQF</p>
              <h2 className="mt-5 text-[clamp(2.2rem,4.8vw,5.6rem)] font-light leading-[1.02]">
                Do conceito cromático à linha pronta para o mercado.
              </h2>
              <p className="mt-7 max-w-2xl text-base font-light leading-8 text-white/70 md:text-xl md:leading-9">
                A LQF estrutura a conversa técnica para transformar a ideia em produtos viáveis, coerentes com a marca e preparados para escalar com controle.
              </p>
              <div className="mt-9">
                <MinimalButton href="/contato#formulario" variant="light">Solicitar análise do projeto</MinimalButton>
              </div>
            </div>
            <div className="grid gap-px bg-white/10 p-px sm:grid-cols-2">
              {lqfSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-graphite p-7 md:p-9">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-10 text-2xl font-light text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Padrão além da performance"
          title="Formulado com responsabilidade para uma nova geração de marcas."
          text="O conceito combina desejo, clareza visual e atributos de responsabilidade que ajudam a sustentar a proposta no mercado."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {standards.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(index % 4) * 0.04} className="rounded-[1.75rem] border border-graphite/10 bg-white p-7">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-10 text-2xl font-light text-graphite">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-graphite/62">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["Rotina vendável", "Facilita kits, reposição, combos e comunicação recorrente."],
            ["Linha escalável", "Permite ampliar SKUs sem perder coerência visual e narrativa."],
            ["Marca consultiva", "Ajuda o consumidor a entender o uso sem depender de textos longos."]
          ].map(([title, text]) => (
            <Reveal key={title} className="rounded-[1.75rem] border border-graphite/10 bg-white p-7">
              <BadgeCheck className="h-6 w-6 text-brass" />
              <h2 className="mt-10 text-3xl font-light text-graphite">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-graphite/62">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pb-24 md:pb-36">
        <Reveal className="rounded-[2rem] border border-graphite/10 bg-white p-8 text-center shadow-soft md:p-14">
          <p className="eyebrow">Próxima linha facial</p>
          <h2 className="mx-auto mt-5 max-w-5xl text-[clamp(2.2rem,5.4vw,6rem)] font-light leading-[1.02] text-graphite">
            Desperte a pele para um futuro de skincare colorido e inteligente.
          </h2>
          <p className="body-large mx-auto mt-7 max-w-3xl">
            Conte para a LQF o estágio do seu projeto e faça parte dessa evolução comercial com formulação, embalagem, viabilidade e caminho técnico para transformar a ideia em linha pronta.
          </p>
          <div className="mt-9 flex justify-center">
            <MinimalButton href="/contato#formulario">Falar com a LQF</MinimalButton>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
