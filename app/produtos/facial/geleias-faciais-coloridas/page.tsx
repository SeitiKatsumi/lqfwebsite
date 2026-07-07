import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeCheck,
  CheckCircle2,
  Droplets,
  FlaskConical,
  Gauge,
  Gem,
  Leaf,
  ListChecks,
  Palette,
  ShieldCheck,
  Sparkles,
  Waves
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.geleiasFaciaisColoridas;

const showRegulatoryNotes = true;
const showB2BPositioning = true;
const showIngredientDetails = true;
const showUsageWarnings = true;
const image = "/products/geleias-faciais-coloridas/geleias-placeholder.jpg";

const riceComplex = [
  "Complexo de arroz com carboidratos e proteínas hidrolisadas.",
  "Ação umectante e hidratante para toque leve.",
  "Formação de filme protetor flexível.",
  "Aumento de suavidade e melhora do sensorial.",
  "Base oil free em gel glicerinado com inspiração K-beauty."
];

const jellies = [
  {
    title: "Geleia Facial Roxa",
    subtitle: "Uniformizadora",
    color: "bg-violet-100 text-violet-900 border-violet-200",
    imageLabel: "IMG-GELEIA-FACIAL-ROXA",
    icon: Sparkles,
    actives: ["Arroz", "Niacinamida", "Amora", "Uva"],
    focus: "Luminosidade, uniformização visual do tom, ação antioxidante e pele com mais viço.",
    benefits: ["Ajuda na aparência de tom mais uniforme.", "Contribui para luminosidade.", "Promove sensação de pele viçosa.", "Apoia uma narrativa antioxidante cosmética."],
    need: "Tom irregular, opacidade e busca por luminosidade."
  },
  {
    title: "Geleia Facial Vermelha",
    subtitle: "Firmadora",
    color: "bg-rose-100 text-rose-900 border-rose-200",
    imageLabel: "IMG-GELEIA-FACIAL-VERMELHA",
    icon: Gem,
    actives: ["Arroz", "Colágeno vegetal de Acacia Senegal", "Frutas vermelhas"],
    focus: "Firmeza cosmética, filme hidratante, leve efeito tensor, viço e toque aveludado.",
    benefits: ["Contribui para sensação de firmeza.", "Forma filme hidratante confortável.", "Ajuda no toque aveludado.", "Promove aparência de pele revitalizada."],
    need: "Pele com necessidade de viço, filme hidratante e sensorial tensor."
  },
  {
    title: "Geleia Facial Azul",
    subtitle: "Hidratação",
    color: "bg-sky-100 text-sky-900 border-sky-200",
    imageLabel: "IMG-GELEIA-FACIAL-AZUL",
    icon: Droplets,
    actives: ["Arroz", "Ácido hialurônico de médio peso molecular", "Algas marinhas"],
    focus: "Hidratação intensa, filme protetor flexível, frescor, barreira cutânea e pele viçosa.",
    benefits: ["Promove sensação de hidratação intensa.", "Contribui para barreira cutânea.", "Entrega frescor imediato.", "Ajuda na aparência de pele luminosa."],
    need: "Desidratação, desconforto e busca por frescor."
  },
  {
    title: "Geleia Facial Verde",
    subtitle: "Antioleosidade",
    color: "bg-emerald-100 text-emerald-900 border-emerald-200",
    imageLabel: "IMG-GELEIA-FACIAL-VERDE",
    icon: Leaf,
    actives: ["Arroz", "Agrião", "Bardana", "Sálvia", "Limão", "Hera", "Quilaia", "Pepino", "Algas marinhas"],
    focus: "Controle visual da oleosidade, sensação purificante, frescor, toque oil free e apoio antipoluição cosmético.",
    benefits: ["Ajuda a controlar o brilho excessivo.", "Promove sensação purificante.", "Entrega toque leve oil free.", "Apoia narrativa antipoluição cosmética."],
    need: "Oleosidade, brilho excessivo e necessidade de frescor."
  }
];

const anchors = [
  ["Conceito", "#conceito"],
  ["Arroz", "#arroz"],
  ["Geleias", "#geleias"],
  ["Indicação", "#indicacao"],
  ["Rotina", "#rotina"],
  ["Claims", "#claims"],
  ["FAQ", "#faq"]
];

function ImagePanel({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-[0_24px_80px_rgba(63,63,59,0.08)] ${tall ? "min-h-[520px]" : "min-h-[360px]"}`}>
      <Image src={image} alt={label} fill className="object-cover transition duration-700 group-hover:scale-[1.035]" sizes="(max-width: 900px) 100vw, 50vw" priority={label.includes("HERO")} />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/36 via-white/0 to-white/10" />
      <div className="absolute bottom-5 left-5 rounded-full border border-white/35 bg-white/78 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-700 backdrop-blur">
        {label}
      </div>
    </div>
  );
}

function IconCard({ title, text, icon: Icon, index = 0 }: { title: string; text: string; icon: LucideIcon; index?: number }) {
  return (
    <Reveal delay={index * 0.04}>
      <div className="h-full rounded-[26px] border border-stone-200 bg-white/76 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(63,63,59,0.08)]">
        <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700"><Icon className="h-5 w-5" /></span>
        <h3 className="text-2xl font-light text-stone-800">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-stone-500">{text}</p>
      </div>
    </Reveal>
  );
}

function JellyCard({ item, index }: { item: (typeof jellies)[number]; index: number }) {
  const Icon = item.icon;
  return (
    <Reveal delay={index * 0.04}>
      <article className="overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-[0_22px_70px_rgba(63,63,59,0.06)] transition duration-300 hover:-translate-y-1">
        <div className="relative min-h-[320px]">
          <Image src={image} alt={item.imageLabel} fill className="object-cover" sizes="(max-width: 900px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/38 via-transparent to-white/8" />
          <span className={`absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-full border ${item.color} backdrop-blur`}><Icon className="h-5 w-5" /></span>
          <span className="absolute bottom-5 left-5 rounded-full border border-white/35 bg-white/75 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-stone-700 backdrop-blur">{item.imageLabel}</span>
        </div>
        <div className="p-7">
          <p className={`inline-flex rounded-full border px-4 py-2 text-xs font-medium ${item.color}`}>{item.subtitle}</p>
          <h3 className="mt-5 text-4xl font-light leading-tight text-stone-800">{item.title}</h3>
          <p className="mt-4 text-base leading-8 text-stone-500">{item.focus}</p>
          {showIngredientDetails ? <div className="mt-6 flex flex-wrap gap-2">{item.actives.map((active) => <span key={active} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-xs text-stone-600">{active}</span>)}</div> : null}
          <ul className="mt-6 space-y-2 text-sm leading-7 text-stone-500">{item.benefits.map((benefit) => <li key={benefit} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-stone-500" />{benefit}</li>)}</ul>
        </div>
      </article>
    </Reveal>
  );
}

export default function GeleiasFaciaisColoridasPage() {
  return (
    <main className="bg-[#fbfaf7] text-stone-800">
      <section className="mx-auto grid min-h-screen max-w-[1500px] items-center gap-12 px-6 pb-24 pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">Jelly skincare</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(4rem,11vw,11rem)] font-light leading-[0.86] tracking-[-0.02em] text-stone-800">Geleias Faciais Coloridas.</h1>
            <p className="mt-8 max-w-2xl text-2xl font-light leading-10 text-stone-500">Skincare leve, colorido e funcional para cada necessidade da pele.</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-500">Coleção em gel glicerinado, oil free, textura leve e inspiração coreana, com complexo de arroz para hidratação, filme protetor e sensorial suave.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MinimalButton href="#geleias">Conhecer as cores</MinimalButton>
              <MinimalButton href="#indicacao" variant="ghost">Escolher por necessidade</MinimalButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}><ImagePanel label="IMG-HERO-GELEIAS-FACIAIS-COLORIDAS" tall /></Reveal>
      </section>

      <nav className="sticky top-24 z-20 mx-auto mb-12 flex max-w-[1500px] gap-2 overflow-x-auto px-6 py-3 lg:px-10">
        {anchors.map(([label, href]) => <a key={href} href={href} className="whitespace-nowrap rounded-full border border-stone-200 bg-white/86 px-4 py-2 text-sm text-stone-600 shadow-sm backdrop-blur transition hover:bg-stone-900 hover:text-white">{label}</a>)}
      </nav>

      <section id="conceito" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Conceito" title="Jelly skincare com função, cor e leveza." text="As geleias faciais traduzem a linguagem K-beauty em uma plataforma de cuidado leve, visualmente marcante e fácil de recomendar. A textura em gel favorece absorção confortável, frescor e uso diário." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <IconCard title="Oil free" text="Textura leve para rotina facial sem peso." icon={Gauge} />
            <IconCard title="Gel glicerinado" text="Sensorial macio, fresco e confortável." icon={Droplets} />
            <IconCard title="Cores funcionais" text="Cada cor comunica uma necessidade da pele." icon={Palette} />
            <IconCard title="Rotina gamificada" text="Arquitetura visual simples para kits e recomendação." icon={Sparkles} />
          </div>
        </div>
        <ImagePanel label="IMG-CONCEITO-JELLY-SKINCARE" />
      </section>

      <section id="arroz" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <ImagePanel label="IMG-COMPLEXO-DE-ARROZ" />
        <div>
          <SectionTitle eyebrow="Ativo base" title="Complexo de arroz como assinatura sensorial." text="Toda a linha contém um complexo formado por carboidratos e proteínas hidrolisadas, criando uma base comum de cuidado, conforto e sofisticação técnica." />
          <div className="mt-8 grid gap-3">
            {riceComplex.map((item) => <div key={item} className="flex gap-3 rounded-[22px] border border-stone-200 bg-white/76 p-5 text-sm leading-7 text-stone-600 backdrop-blur"><BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-stone-500" />{item}</div>)}
          </div>
        </div>
      </section>

      <section id="geleias" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Coleção" title="Quatro cores, quatro territórios de cuidado." text="Uma linha modular para marcas que desejam uma rotina facial intuitiva, colorida e tecnicamente defensável." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {jellies.map((item, index) => <JellyCard key={item.title} item={item} index={index} />)}
        </div>
      </section>

      <section id="indicacao" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Indicação" title="Escolha por necessidade da pele." text="A comunicação por cor simplifica o ponto de venda e permite kits por rotina, tipo de pele ou objetivo cosmético." />
        <div className="mt-10 overflow-hidden rounded-[28px] border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] text-left text-sm">
              <thead className="bg-stone-50 text-xs uppercase tracking-[0.12em] text-stone-400">
                <tr>{["Cor", "Ativos", "Foco", "Necessidade"].map((item) => <th key={item} className="p-5 font-semibold">{item}</th>)}</tr>
              </thead>
              <tbody>
                {jellies.map((item) => (
                  <tr key={item.title} className="border-t border-stone-100 align-top">
                    <td className="p-5 font-medium text-stone-800">{item.title} - {item.subtitle}</td>
                    <td className="p-5 text-stone-500">{item.actives.join(", ")}</td>
                    <td className="p-5 text-stone-500">{item.focus}</td>
                    <td className="p-5 text-stone-500">{item.need}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="rotina" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Rotina" title="Uma rotina leve, visual e fácil de entender." text="As geleias podem entrar após a limpeza e antes do hidratante ou protetor, conforme a necessidade de cada pele e estratégia da marca." />
          <div className="mt-10 grid gap-4">
            {["Limpar a pele com produto suave.", "Aplicar a geleia escolhida em camada fina.", "Combinar com hidratante quando necessário.", "Finalizar com filtro solar durante o dia.", "Alternar cores conforme objetivo cosmético da rotina."].map((item, index) => <div key={item} className="rounded-[22px] border border-stone-200 bg-white p-5 text-sm text-stone-600">{index + 1}. {item}</div>)}
          </div>
        </div>
        <ImagePanel label="IMG-ROTINA-GELEIAS-FACIAIS" />
      </section>

      {showRegulatoryNotes ? (
        <section id="claims" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
          <SectionTitle eyebrow="Claims" title="Comunicação colorida com segurança regulatória." text="Claims de clareamento, oleosidade, poros, firmeza, antipoluição e calmante devem aparecer apenas como claims sujeitos à comprovação." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <IconCard title="Claims seguros" text="Hidrata, promove sensação de frescor, ajuda na suavidade, contribui para viço e melhora o sensorial da pele." icon={ShieldCheck} />
            <IconCard title="Sujeitos à comprovação" text="Uniformização, controle de oleosidade, firmeza, poros, antipoluição, ação calmante e performance antioxidante." icon={AlertTriangle} />
            <IconCard title="Evitar absolutos" text="Não prometer clareamento definitivo, controle total da oleosidade, tratamento médico ou resultados garantidos." icon={ListChecks} />
          </div>
        </section>
      ) : null}

      {showB2BPositioning ? (
        <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="rounded-[32px] bg-stone-900 p-8 text-white md:p-12">
            <FlaskConical className="h-8 w-8 text-stone-300" />
            <h2 className="mt-8 text-5xl font-light leading-tight md:text-7xl">Uma linha facial com apelo visual e lógica técnica.</h2>
            <p className="mt-8 text-lg leading-8 text-white/68">A coleção permite storytelling por cores, kits por necessidade, rotina gamificada e presença forte no ponto de venda sem perder a linguagem dermocosmética segura.</p>
          </div>
          <ImagePanel label="IMG-CORES-FUNCIONAIS-GELEIAS" />
        </section>
      ) : null}

      {showUsageWarnings ? (
        <section className="mx-auto max-w-[1100px] px-6 py-16 lg:px-10">
          <div className="rounded-[28px] border border-amber-200 bg-amber-50/70 p-7">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700"><AlertTriangle className="h-4 w-4" /> Avisos de uso</p>
            <p className="mt-4 text-sm leading-7 text-amber-900/75">A formulação final deve considerar compatibilidade com tipo de pele, fragrância, corantes, estabilidade, segurança de uso e validação dos claims propostos. Evitar área dos olhos em caso de orientação técnica específica.</p>
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Desenvolvimento LQF" title="Crie uma linha jelly skincare com assinatura própria." text="Geleias leves, coloridas e funcionais para marcas que querem unir sensorial, educação de rotina e diferenciação visual com base técnica." />
          <div className="mt-8 flex flex-wrap gap-3">
            <MinimalButton href="/contato#formulario">Desenvolver esta linha</MinimalButton>
            <MinimalButton href="#geleias" variant="ghost">Ver coleção</MinimalButton>
          </div>
        </div>
        <ImagePanel label="IMG-CTA-GELEIAS-FACIAIS" />
      </section>

      <section id="faq" className="mx-auto max-w-[1100px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes." />
        <div className="mt-10 grid gap-4">
          {[
            ["As geleias são oil free?", "Sim, o conceito da linha trabalha textura leve, oil free e gel glicerinado, conforme desenvolvimento final."],
            ["Todas têm complexo de arroz?", "Sim. O complexo de arroz é a base comum da coleção, com proposta umectante, hidratante, formadora de filme e sensorial suave."],
            ["Posso vender por necessidade da pele?", "Sim. A arquitetura por cores facilita a recomendação: roxa para luminosidade, vermelha para firmeza, azul para hidratação e verde para oleosidade."],
            ["Os claims precisam de testes?", "Claims de clareamento, oleosidade, poros, firmeza, antipoluição e calmante devem ser comprovados por testes adequados."],
            ["A linha pode virar kit?", "Sim. A proposta é ideal para kits, rotinas coloridas, campanhas educativas e lançamentos com apelo visual."]
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
