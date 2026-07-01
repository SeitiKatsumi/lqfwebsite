import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Beaker,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  FlaskConical,
  Gauge,
  PackageCheck,
  Palette,
  Sparkles,
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
    label: "Rosa",
    title: "Despertar",
    text: "Uma entrada suave para limpeza, frescor e preparo sensorial da pele.",
    icon: Droplets,
    color: "#D9A8A6",
    image: `${basePath}/rosa-hero.jpg`
  },
  {
    label: "Pêssego",
    title: "Equilibrar",
    text: "Texturas confortáveis para organizar a rotina e criar percepção de cuidado diário.",
    icon: Sparkles,
    color: "#D8B399",
    image: `${basePath}/peach-hero.jpg`
  },
  {
    label: "Verde",
    title: "Renovar",
    text: "Uma etapa visualmente fresca para produtos de tratamento, pausa e manutenção.",
    icon: Beaker,
    color: "#A8B49A",
    image: `${basePath}/verde-hero.jpg`
  },
  {
    label: "Amarelo",
    title: "Finalizar",
    text: "O fechamento da jornada, com acabamento, proteção visual e presença de linha completa.",
    icon: Gauge,
    color: "#D8C57E",
    image: `${basePath}/amarelo-hero.jpg`
  }
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
              Uma linha facial pensada para transformar cuidado diário em uma jornada intuitiva, memorável e pronta para ganhar presença no ponto de venda.
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
            Crie uma experiência facial que o cliente entende, usa e quer completar.
          </h2>
          <p className="body-large mx-auto mt-7 max-w-3xl">
            Conte para a LQF o estágio do seu projeto e vamos avaliar formulação, embalagem, viabilidade e caminho técnico para transformar a ideia em linha pronta.
          </p>
          <div className="mt-9 flex justify-center">
            <MinimalButton href="/contato#formulario">Falar com a LQF</MinimalButton>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
