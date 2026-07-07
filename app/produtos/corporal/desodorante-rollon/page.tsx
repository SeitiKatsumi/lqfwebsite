import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Beaker,
  CircleDot,
  Droplets,
  FlaskConical,
  Flower2,
  Heart,
  Leaf,
  ListChecks,
  ShieldCheck,
  Sparkles,
  SprayCan,
  SunMedium
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Desodorante Roll-on com Ação Uniformizadora da Pele | LQF Farmacêutica",
  description:
    "Landing técnica para desodorante roll-on uniformizador sem álcool etílico, com niacinamida, óleo de rosa mosqueta, proteção contra odores e sensorial confortável."
};

const showClinicalValidationNotice = true;
const showTechnicalFormula = true;
const showB2BPositioning = true;
const image = "/products/desodorante-rollon/desodorante-placeholder.jpg";

const formulaItems = [
  {
    title: "Cloridróxido de alumínio",
    text: "Ativo antitranspirante clássico para auxiliar no controle da transpiração e contribuir para proteção contra odores.",
    icon: ShieldCheck
  },
  {
    title: "Niacinamida",
    text: "Ativo associado ao cuidado da barreira cutânea e à melhora gradual da aparência de uniformidade do tom da pele.",
    icon: Sparkles
  },
  {
    title: "Óleo de rosa mosqueta",
    text: "Ingrediente emoliente que contribui para sensação de maciez, conforto e pele visualmente mais bem cuidada.",
    icon: Flower2
  },
  {
    title: "Base sem álcool etílico",
    text: "Direcionada para aplicação mais delicada, confortável e adequada ao uso diário.",
    icon: Droplets
  }
];

const benefits = [
  "Ajuda a proteger contra odores.",
  "Promove sensação de frescor e conforto.",
  "Auxilia na aparência mais uniforme do tom da pele.",
  "Contribui para toque macio e delicado.",
  "Ajuda a manter a barreira cutânea equilibrada.",
  "Pode ser estruturado com fórmula sem álcool etílico.",
  "Comunica cuidado das axilas além da proteção básica.",
  "Permite posicionamento dermocosmético premium."
];

const activeCards = [
  {
    title: "Niacinamida e uniformização",
    text: "Auxilia na aparência mais uniforme, no equilíbrio visual da pele e no suporte cosmético à barreira cutânea.",
    imageLabel: "IMG-NIACINAMIDA-UNIFORMIZACAO",
    icon: Beaker
  },
  {
    title: "Óleo de rosa mosqueta",
    text: "Contribui para sensação de maciez, nutrição e cuidado em uma narrativa clean beauty sofisticada.",
    imageLabel: "IMG-OLEO-ROSA-MOSQUETA",
    icon: Flower2
  },
  {
    title: "Ativos da fórmula",
    text: "Combinação de sistema desodorante, emolientes e base sensorial para aplicação confortável.",
    imageLabel: "IMG-ATIVOS-DESODORANTE-ROLLON",
    icon: FlaskConical
  },
  {
    title: "Textura cremosa roll-on",
    text: "Espalhabilidade suave, filme delicado e acabamento confortável para rotina diária.",
    imageLabel: "IMG-TEXTURA-CREMOSA-ROLLON",
    icon: Droplets
  }
];

const claims = [
  "Livre de álcool etílico, conforme formulação final.",
  "Auxilia na proteção contra odores.",
  "Promove sensação de frescor.",
  "Contribui para a aparência mais uniforme da pele.",
  "Ajuda a manter a pele macia e confortável.",
  "Dermatologicamente testado apenas quando houver teste comprobatório."
];

const avoidClaims = [
  "Clareia imediatamente.",
  "Elimina manchas.",
  "Resultado garantido em X dias sem comprovação.",
  "Trata doenças ou alterações dermatológicas.",
  "Substitui avaliação médica."
];

const comparison = [
  {
    criterion: "Proteção diária",
    active: "Cloridróxido de alumínio",
    sensory: "Frescor limpo e sensação confortável",
    opportunity: "Unir eficácia percebida com estética dermocosmética premium."
  },
  {
    criterion: "Uniformização gradual",
    active: "Niacinamida",
    sensory: "Toque cremoso, leve e delicado",
    opportunity: "Levar a linguagem de skincare para o cuidado das axilas."
  },
  {
    criterion: "Maciez e cuidado",
    active: "Óleo de rosa mosqueta",
    sensory: "Emoliência delicada e acabamento suave",
    opportunity: "Criar narrativa clean beauty com alto valor percebido."
  },
  {
    criterion: "Fórmula limpa",
    active: "Base sem álcool etílico e sem corantes",
    sensory: "Aplicação confortável e visual branco leitoso",
    opportunity: "Posicionar como produto de uso diário com apelo moderno."
  }
];

const commercialBlocks = [
  "Roll-on funcional para marcas que querem sair do território básico de proteção.",
  "Produto com alto potencial de recompra e uso diário.",
  "Narrativa de axilas cuidadas, conforto e aparência uniforme.",
  "Arquitetura extensível para versões sensitive, fresh, botânica ou fragrâncias autorais."
];

const faq = [
  {
    question: "O desodorante roll-on uniformizador clareia a pele?",
    answer:
      "A comunicação deve ser cosmética e segura. A proposta é falar em auxílio à aparência mais uniforme do tom da pele e cuidado gradual, sem prometer clareamento imediato ou eliminação de manchas."
  },
  {
    question: "A fórmula é sem álcool?",
    answer:
      "O conceito foi estruturado como fórmula sem álcool etílico, com foco em conforto, aplicação delicada e uso diário. A formulação final deve confirmar esse posicionamento."
  },
  {
    question: "Pode ser vegano, sem parabenos e sem corantes?",
    answer:
      "Sim, desde que a formulação final, fornecedores, documentação técnica e testes sustentem esses claims."
  },
  {
    question: "A LQF pode desenvolver variações?",
    answer:
      "Sim. É possível avaliar fragrância, ativos, sensorial, embalagem, claims cosméticos, rotulagem e posicionamento conforme a estratégia da marca."
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

export default function DesodoranteRollonPage() {
  return (
    <main className="overflow-hidden">
      <section className="grain section-shell pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Corporal • axilas • dermocosmético</p>
            <h1 className="mt-5 text-[clamp(3rem,7.8vw,8.2rem)] font-light leading-[0.94] text-graphite">
              Desodorante Roll-on Uniformizador.
            </h1>
            <p className="mt-7 max-w-2xl text-[clamp(1.35rem,2.2vw,2.1rem)] font-light leading-tight text-graphite">
              Proteção contra odores, cuidado suave e uniformização gradual do tom da pele.
            </p>
            <p className="body-large mt-6 max-w-2xl">
              Uma proposta de roll-on sem álcool etílico que combina proteção diária, sensorial confortável e ativos cosméticos associados ao cuidado das axilas.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <MinimalButton href="#formula">Ver fórmula conceito</MinimalButton>
              <MinimalButton href="/contato#formulario" variant="ghost">
                Desenvolver desodorante
              </MinimalButton>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="group relative aspect-[1.12]">
            <PlaceholderImage label="IMG-HERO-DESODORANTE-ROLLON" priority />
            <div className="absolute -bottom-5 left-5 right-5 rounded-[1.5rem] border border-graphite/10 bg-white/88 p-4 shadow-soft backdrop-blur-xl md:left-auto md:w-80">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-graphite text-white">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-graphite">Proteção + cuidado</p>
                  <p className="text-xs leading-5 text-graphite/58">Categoria funcional com estética clean beauty.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-20 md:py-32">
        <SectionTitle
          eyebrow="Conceito"
          title="Muito além da proteção contra odores."
          text="O cuidado das axilas pode ser tratado com a mesma sofisticação do skincare: proteção, conforto, maciez e aparência mais uniforme em um produto de uso diário."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {formulaItems.map((item, index) => {
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
      </section>

      {showTechnicalFormula ? (
        <section id="formula" className="section-shell pb-20 md:pb-32">
          <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-white shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[1fr_1.05fr]">
              <div className="group relative min-h-[360px] bg-mist lg:min-h-[620px]">
                <PlaceholderImage label="IMG-PRODUTO-EM-DESTAQUE" />
              </div>
              <div className="p-8 md:p-12 lg:p-16">
                <p className="eyebrow">Técnica da fórmula</p>
                <h2 className="mt-5 text-[clamp(2.3rem,5vw,5.7rem)] font-light leading-[1.02] text-graphite">
                  Fórmula limpa, confortável e orientada por performance cosmética.
                </h2>
                <p className="body-large mt-7">
                  O conceito pode combinar sistema antitranspirante, niacinamida, óleo de rosa mosqueta e base cremosa sem álcool etílico para entregar proteção, conforto e apelo dermocosmético.
                </p>
                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {["Sem álcool etílico", "Niacinamida", "Rosa mosqueta", "Proteção contra odores"].map((item) => (
                    <div key={item} className="rounded-[1.25rem] bg-porcelain p-5 text-lg font-light text-graphite">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      ) : null}

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Benefícios cosméticos"
          title="Um roll-on com discurso técnico, sensorial e comercial."
          text="A comunicação deve sempre usar linguagem cosmética segura, evitando promessas médicas ou clareamento absoluto."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 0.035} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-porcelain text-graphite">
                <BadgeCheck className="h-4 w-4" />
              </span>
              <p className="mt-7 text-sm leading-7 text-graphite/66">{benefit}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Ativos de destaque"
          title="Ingredientes que sustentam uniformização, maciez e proteção."
          text="A narrativa equilibra eficácia percebida, sensorial agradável e claims cosméticos responsáveis."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {activeCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.04} className="group overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
                <div className="relative aspect-[4/5]">
                  <PlaceholderImage label={item.imageLabel} />
                </div>
                <div className="p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-porcelain text-graphite">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-7 text-2xl font-light leading-tight text-graphite">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-graphite/62">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="group aspect-[1.12]">
            <PlaceholderImage label="IMG-TEXTURA-CREMOSA-ROLLON" />
          </Reveal>
          <SectionTitle
            eyebrow="Experiência sensorial"
            title="Textura cremosa, aplicação suave e sensação de frescor."
            text="O sensorial precisa comunicar conforto imediato, filme delicado e acabamento equilibrado para uso diário, sem peso e sem percepção agressiva."
          />
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionTitle
            eyebrow="Modo de uso"
            title="Rotina simples para cuidado diário das axilas."
            text="Aplicar sobre a pele limpa e seca, aguardar alguns instantes antes de vestir a roupa e evitar uso sobre pele irritada ou lesionada."
          />
          <Reveal className="group aspect-[1.12]">
            <PlaceholderImage label="IMG-MODO-DE-USO-ROLLON" />
          </Reveal>
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Claims e validação"
          title="O discurso deve valorizar cuidado sem ultrapassar limites regulatórios."
          text="Claims específicos dependem de formulação final, testes, documentação técnica e estratégia regulatória."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal className="rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <h2 className="mt-8 text-2xl font-light text-graphite">Claims seguros</h2>
            <ul className="mt-5 grid gap-2 text-sm leading-7 text-graphite/62">
              {claims.map((claim) => <li key={claim}>• {claim}</li>)}
            </ul>
          </Reveal>
          <Reveal className="rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-porcelain text-graphite">
              <CircleDot className="h-5 w-5" />
            </span>
            <h2 className="mt-8 text-2xl font-light text-graphite">Evitar na copy pública</h2>
            <ul className="mt-5 grid gap-2 text-sm leading-7 text-graphite/62">
              {avoidClaims.map((claim) => <li key={claim}>• {claim}</li>)}
            </ul>
          </Reveal>
        </div>
        {showClinicalValidationNotice ? (
          <Reveal className="mt-5 rounded-[1.5rem] border border-graphite/10 bg-porcelain p-6 text-sm leading-7 text-graphite/64">
            Claims como "dermatologicamente testado", "hidratação por X horas" ou "uniformização visível em X semanas" só devem ser usados com testes e documentação comprobatória.
          </Reveal>
        ) : null}
      </section>

      {showB2BPositioning ? (
        <section className="section-shell pb-20 md:pb-32">
          <SectionTitle
            eyebrow="Posicionamento comercial"
            title="Uma categoria de recompra com narrativa premium."
            text="O desodorante roll-on uniformizador pode ampliar o ticket percebido da categoria ao combinar proteção, cuidado das axilas e linguagem de dermocosmético."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {commercialBlocks.map((item, index) => (
              <Reveal key={item} delay={index * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-graphite text-white">
                  <SunMedium className="h-4 w-4" />
                </span>
                <p className="mt-8 text-sm leading-7 text-graphite/66">{item}</p>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-shell pb-20 md:pb-32">
        <SectionTitle
          eyebrow="Tabela comparativa"
          title="Ativo, sensorial e oportunidade em uma mesma leitura."
          text="A matriz ajuda a orientar desenvolvimento, embalagem, copy, diferenciais e conversa técnica com marcas."
        />
        <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left">
              <thead className="bg-porcelain text-xs uppercase tracking-[0.14em] text-graphite/48">
                <tr>
                  <th className="px-5 py-4 font-medium">Eixo</th>
                  <th className="px-5 py-4 font-medium">Ativo-chave</th>
                  <th className="px-5 py-4 font-medium">Sensorial ideal</th>
                  <th className="px-5 py-4 font-medium">Oportunidade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/8 text-sm text-graphite/68">
                {comparison.map((item) => (
                  <tr key={item.criterion} className="transition hover:bg-porcelain/70">
                    <td className="px-5 py-5 font-medium text-graphite">{item.criterion}</td>
                    <td className="px-5 py-5">{item.active}</td>
                    <td className="px-5 py-5">{item.sensory}</td>
                    <td className="px-5 py-5">{item.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20 md:pb-32">
        <Reveal className="overflow-hidden rounded-[2rem] border border-graphite/10 bg-graphite text-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr] lg:items-stretch">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="eyebrow text-white/54">CTA final</p>
              <h2 className="mt-5 text-[clamp(2.4rem,5vw,5.8rem)] font-light leading-[1.02]">
                Desenvolva um roll-on que une proteção, conforto e cuidado cosmético.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
                A LQF pode apoiar conceito, fórmula, sensorial, embalagem, rotulagem, testes e produção para criar um desodorante roll-on com posicionamento dermocosmético.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <MinimalButton href="/contato#formulario" variant="light">
                  Desenvolver roll-on
                </MinimalButton>
                <MinimalButton href="/produtos/corporal/cases-de-sucesso" variant="darkGhost">
                  Ver cases corporais
                </MinimalButton>
              </div>
            </div>
            <div className="group relative min-h-[360px]">
              <PlaceholderImage label="IMG-CTA-DESODORANTE-ROLLON" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-24 md:pb-36">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" text="Pontos para orientar desenvolvimento, claims cosméticos e posicionamento do produto." />
        <div className="mt-10 grid gap-3">
          {faq.map((item, index) => (
            <Reveal key={item.question} delay={(index % 2) * 0.04} className="rounded-[1.5rem] border border-graphite/10 bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-porcelain text-graphite">
                  <ListChecks className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-xl font-medium text-graphite">{item.question}</h2>
                  <p className="mt-3 text-sm leading-7 text-graphite/62">{item.answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
