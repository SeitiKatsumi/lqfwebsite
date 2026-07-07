import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeCheck,
  CheckCircle2,
  Droplets,
  FlaskConical,
  Layers3,
  ListChecks,
  Moon,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Waves
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.skinimalismo;

const showInternalLotCodes = true;
const showRegulatoryNotes = true;
const showB2BPositioning = true;
const showUsageInstructions = true;
const showKitSuggestions = true;
const image = "/products/skinimalismo/skinimalismo-placeholder.jpg";

const anchors = [
  ["Conceito", "#conceito"],
  ["Dia", "#rotina-dia"],
  ["Noite", "#rotina-noite"],
  ["Tabela", "#tabela"],
  ["Benefícios", "#beneficios"],
  ["Kits", "#kits"],
  ["Claims", "#claims"],
  ["FAQ", "#faq"]
];

const dayRoutine = [
  {
    title: "Sabonete Limpeza Intensiva",
    lot: "INV251007",
    imageLabel: "IMG-SABONETE-LIMPEZA-INTENSIVA",
    icon: Waves,
    focus: "Limpeza efetiva, frescor, nutrição e controle da oleosidade excessiva.",
    indication:
      "Limpeza efetiva da pele, remoção e equilíbrio da oleosidade excessiva, contração visual de poros e uniformização suave da aparência da pele.",
    actives: ["Mentol", "Colágeno", "Vitamina B7", "Pró-Vitamina B5"],
    benefits: ["Limpa", "Acalma", "Nutre", "Refresca", "Controla oleosidade excessiva"],
    use: "Aplique algumas gotas do sabonete na pele úmida e massageie para distribuir uniformemente. Enxágue após aplicação. Uso diário."
  },
  {
    title: "Creme Hidratante Facial Dia",
    lot: "INV251001",
    imageLabel: "IMG-CREME-HIDRATANTE-FACIAL-DIA",
    icon: SunMedium,
    focus: "Hidratação equilibrada, conforto, elasticidade e apoio à barreira cutânea.",
    indication:
      "Ideal para todo tipo de pele, com entrega de cuidado completo de nutrição e apoio à revitalização da barreira protetora.",
    actives: ["Ácido Hialurônico", "Glicerina", "Lactato de Sódio", "Alantoína", "Serina", "Ureia"],
    benefits: ["Equilibra a hidratação", "Ajuda a preservar a umidade", "Apoia elasticidade", "Reduz sensação de ressecamento", "Conforto diurno"],
    use: "Para uso diurno, aplicar diariamente na pele higienizada."
  },
  {
    title: "Filtro Solar FPS 30",
    lot: "",
    imageLabel: "IMG-FILTRO-SOLAR-FPS30",
    icon: ShieldCheck,
    focus: "Proteção solar diária como etapa indispensável do ritual reduzido.",
    indication: "Produto de finalização para proteção diária. FPS e proteção UVA/UVB devem ser comprovados por testes específicos.",
    actives: ["Sistema fotoprotetor", "Sensorial diário", "Acabamento confortável"],
    benefits: ["Ajuda a proteger a pele", "Completa a rotina diurna", "Apoia prevenção cosmética de danos visíveis", "Uso diário"],
    use: "Aplicar como última etapa da rotina diurna, conforme quantidade e reaplicação indicadas na rotulagem validada."
  }
];

const nightRoutine = [
  {
    title: "Água Micelar Hidratante",
    lot: "INV251011",
    imageLabel: "IMG-AGUA-MICELAR-HIDRATANTE",
    icon: Droplets,
    focus: "Limpar, demaquilar, tonificar, hidratar e suavizar sem enxágue.",
    indication:
      "Produto multibenefício desenvolvido para facilitar a rotina moderna: limpa, demaquila, desobstrui poros, higieniza, tonifica e repõe a barreira hidrolipídica.",
    actives: ["Lipídeos do coco", "Lipídeos do girassol"],
    benefits: ["Limpa", "Reequilibra", "Demaquila", "Desobstrui poros", "Tonifica", "Protege", "Controla oleosidade excessiva", "Refresca", "Hidrata", "Suaviza"],
    use: "Aplicar o produto em disco de algodão ou gaze e passar em toda a face com movimentos suaves. Não é necessário enxaguar após uso."
  },
  {
    title: "Creme Hidratante Facial Noite",
    lot: "INV251002",
    imageLabel: "IMG-CREME-HIDRATANTE-FACIAL-NOITE",
    icon: Moon,
    focus: "Hidratação noturna, nutrição, conforto e apoio à barreira cutânea.",
    indication:
      "Ideal para todo tipo de pele, com cuidado completo de atividade protetora cosmética, conforto e apoio à barreira durante o período noturno.",
    actives: ["Kappaphycus Alvarezii", "Fucus Vesiculosus", "Laminaria Saccharina", "Óleos de girassol, milho, gergelim, macadâmia e oliva", "Pró-Vitamina B5"],
    benefits: ["Nutrição noturna", "Apoio à barreira cutânea", "Conforto ao acordar", "Filme protetor cosmético", "Pele hidratada por mais tempo"],
    use: "Para uso noturno, aplicar diariamente na pele higienizada."
  }
];

const summary = [
  ["Manhã", "Sabonete Limpeza Intensiva", "Limpeza, frescor e controle da oleosidade"],
  ["Manhã", "Creme Hidratante Facial Dia", "Hidratação equilibrada e conforto"],
  ["Manhã", "Filtro Solar FPS 30", "Proteção solar diária validada por testes"],
  ["Noite", "Água Micelar Hidratante", "Limpeza, demaquilação e hidratação sem enxágue"],
  ["Noite", "Creme Hidratante Facial Noite", "Nutrição e apoio à barreira cutânea"]
];

const benefits = [
  { title: "Rotina mais simples", text: "Menos etapas reduzem atrito e facilitam adesão diária.", icon: Layers3 },
  { title: "Cuidado completo", text: "Limpeza, hidratação, proteção e cuidado noturno organizados em poucos passos.", icon: BadgeCheck },
  { title: "Sensorial confortável", text: "Texturas pensadas para uso cotidiano e boa percepção de pele.", icon: Sparkles },
  { title: "Narrativa comercial clara", text: "Uma linha fácil de explicar, treinar e vender no ponto de contato.", icon: FlaskConical }
];

const kits = [
  ["Kit Essencial Dia", "Sabonete Limpeza Intensiva + Creme Hidratante Facial Dia + Filtro Solar FPS 30"],
  ["Kit Essencial Noite", "Água Micelar Hidratante + Creme Hidratante Facial Noite"],
  ["Kit Ritual Skinimalista", "Os cinco produtos em uma rotina completa de dia e noite"],
  ["Kit Viagem", "Versões compactas para rotina reduzida e portátil"]
];

function ImagePanel({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-[30px] border border-stone-200 bg-stone-100 shadow-[0_24px_80px_rgba(63,63,59,0.08)] ${tall ? "min-h-[520px]" : "min-h-[340px]"}`}>
      <Image src={image} alt={label} fill className="object-cover transition duration-700 group-hover:scale-[1.035]" sizes="(max-width: 900px) 100vw, 50vw" priority={label.includes("HERO")} />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/34 via-transparent to-white/10" />
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

function ProductStep({ product, index }: { product: (typeof dayRoutine | typeof nightRoutine)[number]; index: number }) {
  const Icon = product.icon;
  return (
    <Reveal delay={index * 0.04}>
      <article className="rounded-[30px] border border-stone-200 bg-white p-5 shadow-[0_22px_70px_rgba(63,63,59,0.06)] lg:p-7">
        <ImagePanel label={product.imageLabel} />
        <div className="mt-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700"><Icon className="h-5 w-5" /></span>
            {showInternalLotCodes && product.lot ? <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-stone-500">Lote {product.lot}</span> : null}
          </div>
          <h3 className="mt-5 text-4xl font-light leading-tight text-stone-800">{product.title}</h3>
          <p className="mt-3 text-xl font-light text-stone-600">{product.focus}</p>
          <p className="mt-5 text-sm leading-7 text-stone-500">{product.indication}</p>
          <div className="mt-6 flex flex-wrap gap-2">{product.actives.map((active) => <span key={active} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-xs text-stone-600">{active}</span>)}</div>
          <div className="mt-6 grid gap-3">
            {product.benefits.map((item) => <div key={item} className="flex gap-2 text-sm leading-6 text-stone-500"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-stone-500" />{item}</div>)}
          </div>
          {showUsageInstructions ? <p className="mt-6 rounded-[20px] bg-stone-50 p-5 text-sm leading-7 text-stone-600">{product.use}</p> : null}
        </div>
      </article>
    </Reveal>
  );
}

export default function SkinimalismoPage() {
  return (
    <main className="bg-[#fbfaf7] text-stone-800">
      <section className="mx-auto grid min-h-screen max-w-[1500px] items-center gap-12 px-6 pb-24 pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">Facial • Skinimalismo</p>
            <h1 className="mt-6 max-w-5xl text-[clamp(4.1rem,10vw,10rem)] font-light leading-[0.86] tracking-[-0.02em] text-stone-800">Ritual skincare reduzido.</h1>
            <p className="mt-8 max-w-2xl text-2xl font-light leading-10 text-stone-500">Menos passos. Mais inteligência para a pele.</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-500">Uma rotina premium de dia e noite com foco em praticidade, limpeza, hidratação, proteção solar e cuidado noturno da barreira cutânea.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MinimalButton href="#rotina-dia">Ver rotina dia</MinimalButton>
              <MinimalButton href="#rotina-noite" variant="ghost">Ver rotina noite</MinimalButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}><ImagePanel label="IMG-HERO-SKINIMALISMO" tall /></Reveal>
      </section>

      <nav className="sticky top-24 z-20 mx-auto mb-12 flex max-w-[1500px] gap-2 overflow-x-auto px-6 py-3 lg:px-10">
        {anchors.map(([label, href]) => <a key={href} href={href} className="whitespace-nowrap rounded-full border border-stone-200 bg-white/86 px-4 py-2 text-sm text-stone-600 shadow-sm backdrop-blur transition hover:bg-stone-900 hover:text-white">{label}</a>)}
      </nav>

      <section id="conceito" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Conceito" title="Skinimalismo é reduzir etapas sem reduzir inteligência." text="A proposta é concentrar a rotina em passos essenciais, com produtos multifuncionais e uma narrativa simples para o consumidor: limpar, hidratar, proteger durante o dia e recuperar conforto à noite." />
          <p className="mt-8 rounded-[28px] border border-stone-200 bg-white p-7 text-2xl font-light leading-10 text-stone-700">Menos excesso, mais constância: um ritual reduzido pode aumentar adesão, melhorar percepção de praticidade e organizar a comunicação da marca.</p>
        </div>
        <ImagePanel label="IMG-CONCEITO-SKINIMALISMO" />
      </section>

      <section id="rotina-dia" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Rotina dia" title="Três passos para limpar, hidratar e proteger." text="A rotina diurna prioriza limpeza efetiva, hidratação equilibrada e proteção solar diária." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">{dayRoutine.map((product, index) => <ProductStep key={product.title} product={product} index={index} />)}</div>
        <div className="mt-12"><ImagePanel label="IMG-ROTINA-DIA-SKINIMALISMO" /></div>
      </section>

      <section id="rotina-noite" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Rotina noite" title="Dois passos para limpar, suavizar e apoiar a barreira cutânea." text="A rotina noturna combina limpeza sem enxágue, demaquilação e cuidado hidratante com sensorial nutritivo." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">{nightRoutine.map((product, index) => <ProductStep key={product.title} product={product} index={index} />)}</div>
        <div className="mt-12"><ImagePanel label="IMG-ROTINA-NOITE-SKINIMALISMO" /></div>
      </section>

      <section id="tabela" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Rotina resumida" title="Poucos passos, função clara." text="Uma tabela objetiva para treinamento, venda consultiva e material comercial." />
        <div className="mt-10 overflow-hidden rounded-[28px] border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-[860px] text-left text-sm">
              <thead className="bg-stone-50 text-xs uppercase tracking-[0.12em] text-stone-400"><tr>{["Momento", "Produto", "Função principal"].map((item) => <th key={item} className="p-5 font-semibold">{item}</th>)}</tr></thead>
              <tbody>{summary.map(([moment, product, functionText]) => <tr key={`${moment}-${product}`} className="border-t border-stone-100"><td className="p-5 font-medium text-stone-800">{moment}</td><td className="p-5 text-stone-600">{product}</td><td className="p-5 text-stone-500">{functionText}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
        <div className="mt-12"><ImagePanel label="IMG-ROTINA-RESUMIDA-SKINIMALISMO" /></div>
      </section>

      <section id="beneficios" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Benefícios" title="Por que o ritual reduzido funciona comercialmente." text="A rotina reduzida simplifica a decisão de compra e ajuda a marca a criar um portfólio fácil de entender." />
        <div className="mt-12 grid gap-4 md:grid-cols-4">{benefits.map((item, index) => <IconCard key={item.title} {...item} index={index} />)}</div>
        <div className="mt-12"><ImagePanel label="IMG-BENEFICIOS-SKINIMALISMO" /></div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Perfil consumidor" title="Indicação por perfil de consumidor." text="Ideal para consumidores que buscam praticidade, rotina de baixa complexidade, sensorial agradável e produtos com função clara." />
          <div className="mt-8 grid gap-3">
            {["Público iniciante em skincare", "Consumidor com rotina corrida", "Marcas com comunicação minimalista", "Farmácias, perfumarias, e-commerce e kits de entrada"].map((item) => <span key={item} className="rounded-full border border-stone-200 bg-white px-5 py-3 text-sm text-stone-600">{item}</span>)}
          </div>
        </div>
        <ImagePanel label="IMG-BENEFICIOS-SKINIMALISMO" />
      </section>

      {showKitSuggestions ? (
        <section id="kits" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
          <SectionTitle eyebrow="Kits" title="Sugestões de arquitetura comercial." text="Os produtos podem ser organizados em kits por momento de uso, necessidade e ticket médio." />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {kits.map(([title, text], index) => <IconCard key={title} title={title} text={text} icon={Layers3} index={index} />)}
          </div>
          <div className="mt-12"><ImagePanel label="IMG-KITS-SKINIMALISMO" /></div>
        </section>
      ) : null}

      {showB2BPositioning ? (
        <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="rounded-[32px] bg-stone-900 p-8 text-white md:p-12">
            <FlaskConical className="h-8 w-8 text-stone-300" />
            <h2 className="mt-8 text-5xl font-light leading-tight md:text-7xl">Uma linha simples de vender, usar e recomprar.</h2>
            <p className="mt-8 text-lg leading-8 text-white/68">Skinimalismo cria uma plataforma facial B2B com narrativa clara, poucos passos e alta aderência para consumidores que querem resultado percebido sem rotina complexa.</p>
          </div>
          <ImagePanel label="IMG-CTA-SKINIMALISMO" tall />
        </section>
      ) : null}

      {showRegulatoryNotes ? (
        <section id="claims" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
          <SectionTitle eyebrow="Claims e segurança" title="Comunicação segura para um ritual reduzido." text="A linguagem deve evitar promessas absolutas e manter claims funcionais dentro de validação técnica e regulatória." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <IconCard title="Claims seguros" text="Limpa, refresca, hidrata, suaviza, ajuda no controle visual da oleosidade, promove sensação de conforto e apoia a barreira cutânea." icon={BadgeCheck} />
            <IconCard title="Comprovar" text="FPS 30, proteção UVA/UVB, contração de poros, uniformização, envelhecimento, hidratação por horas e qualquer claim quantitativo." icon={AlertTriangle} />
            <IconCard title="Evitar" text="Trata doenças de pele, elimina poros, bloqueia envelhecimento, regenera a pele ou substitui avaliação técnica e testes regulatórios." icon={ListChecks} />
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Desenvolvimento LQF" title="Crie uma linha facial reduzida, clara e sofisticada." text="A LQF pode apoiar o desenvolvimento de uma arquitetura skinimalista para marcas que buscam praticidade, sensorial premium e comunicação objetiva." />
          <div className="mt-8 flex flex-wrap gap-3">
            <MinimalButton href="/contato#formulario">Criar linha Skinimalismo</MinimalButton>
            <MinimalButton href="#kits" variant="ghost">Ver sugestões de kits</MinimalButton>
          </div>
        </div>
        <ImagePanel label="IMG-CTA-SKINIMALISMO" />
      </section>

      <section id="faq" className="mx-auto max-w-[1100px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes." />
        <div className="mt-10 grid gap-4">
          {[
            ["O que é skinimalismo?", "É uma proposta de rotina reduzida, com menos passos e produtos multifuncionais para facilitar adesão, praticidade e clareza de uso."],
            ["A rotina substitui todos os tratamentos faciais?", "Não necessariamente. Ela é uma base prática de cuidado diário e pode ser combinada com protocolos específicos conforme necessidade e tolerância da pele."],
            ["O filtro solar precisa de testes?", "Sim. FPS 30 e proteção UVA/UVB devem ser comprovados por testes específicos antes de comunicação comercial."],
            ["A Água Micelar precisa enxágue?", "A proposta descrita é sem enxágue, desde que a formulação e a rotulagem estejam validadas para essa indicação."],
            ["A linha pode virar kit?", "Sim. Ela foi estruturada para kits de dia, noite, ritual completo e versões compactas para rotina portátil."]
          ].map(([question, answer]) => <details key={question} className="rounded-[24px] border border-stone-200 bg-white p-6"><summary className="cursor-pointer list-none text-xl font-light text-stone-800">{question}</summary><p className="mt-4 text-sm leading-7 text-stone-500">{answer}</p></details>)}
        </div>
      </section>
    </main>
  );
}
