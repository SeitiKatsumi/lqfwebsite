import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeCheck,
  Brush,
  CheckCircle2,
  Droplets,
  FlaskConical,
  Gauge,
  Layers3,
  ListChecks,
  Microscope,
  Palette,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Waves
} from "lucide-react";
import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.higienizacaoPele;

const showInternalLotCodes = true;
const showRegulatoryNotes = true;
const showB2BPositioning = true;
const showUsageWarnings = true;
const showIngredientDetails = true;
const image = "/products/higienizacao-pele/higienizacao-placeholder.jpg";

const anchors = [
  ["Conceito", "#conceito"],
  ["Produtos", "#produtos"],
  ["Necessidade", "#necessidade"],
  ["Rotina", "#rotina"],
  ["Claims", "#claims"],
  ["FAQ", "#faq"]
];

const conceptCards = [
  { title: "Limpa", text: "Remove impurezas, resíduos e oleosidade excessiva.", icon: Droplets },
  { title: "Equilibra", text: "Ajuda a manter a pele com toque confortável.", icon: Gauge },
  { title: "Prepara", text: "Deixa a pele pronta para maquiagem ou skincare.", icon: Palette },
  { title: "Protege", text: "Contribui para preservar a barreira cutânea.", icon: ShieldCheck },
  { title: "Refresca", text: "Proporciona sensação de pele limpa e renovada.", icon: Waves }
];

const products = [
  {
    title: "Sabonete Limpeza Intensiva",
    code: "Lote INV251007",
    imageLabel: "IMG-SABONETE-LIMPEZA-INTENSIVA",
    icon: Droplets,
    headline: "Limpeza efetiva, frescor e equilíbrio para a pele.",
    indication:
      "Desenvolvido para limpeza efetiva da pele, remoção de impurezas e auxílio no equilíbrio da oleosidade excessiva. Ajuda a reduzir a aparência dos poros e contribui para uma pele com aspecto mais uniforme, fresca e saudável.",
    benefits5: ["Limpa", "Promove sensação calmante", "Nutre", "Refresca", "Ajuda no controle da oleosidade excessiva"],
    actives: ["Mentol", "Colágeno", "Vitaminas do complexo B, incluindo B7 e pró-vitamina B5"],
    cosmeticBenefits: ["Sensação imediata de frescor", "Pele com toque limpo e confortável", "Ajuda a remover oleosidade excessiva", "Contribui para aparência de poros menos evidentes", "Ajuda a manter viço e sensação de pele saudável"],
    use: "Aplique algumas gotas na pele úmida, massageie suavemente para distribuir uniformemente e enxágue após a aplicação. Uso diário, conforme tolerância da pele.",
    warnings: ["Evitar contato com os olhos.", "Suspender em caso de sensibilização."],
    need: "Limpeza diária com frescor"
  },
  {
    title: "Sabonete Primer Make Up",
    code: "Lote INV251008",
    imageLabel: "IMG-SABONETE-PRIMER-MAKE-UP",
    icon: Brush,
    headline: "Limpa, suaviza e prepara a pele para receber a maquiagem.",
    indication:
      "Desenvolvido para preparar a pele antes da maquiagem. Ajuda a remover oleosidade excessiva, reduzir a aparência dos poros e uniformizar visualmente a pele com suavidade e precisão.",
    benefits5: ["Remove oleosidade excessiva", "Suaviza visualmente linhas finas", "Ajuda a reduzir a aparência dos poros", "Uniformiza visualmente", "Protege contra a sensação de ressecamento"],
    actives: ["Ácido hialurônico", "Pantenol", "Glicerina"],
    cosmeticBenefits: ["Pele mais confortável antes da maquiagem", "Ajuda no acabamento uniforme", "Hidratação e maciez", "Sensação de pele preparada", "Toque suave e equilibrado"],
    use: "Aplique algumas gotas na pele úmida, massageie suavemente e enxágue. Use antes da maquiagem ou na rotina diária de limpeza.",
    warnings: ["Uso conforme necessidade e tolerância da pele."],
    need: "Preparar a pele para maquiagem"
  },
  {
    title: "Sabonete Demaquilante Micelar Make Out",
    code: "Lote INV251009",
    imageLabel: "IMG-SABONETE-DEMAQUILANTE-MICELAR-MAKE-OUT",
    icon: Sparkles,
    headline: "Remove maquiagem, limpa e deixa a pele confortável.",
    indication:
      "Desenvolvido para remover maquiagem e cuidar da pele durante a higienização. A proposta micelar facilita a limpeza, ajuda a remover resíduos e proporciona sensação de conforto e refrescância.",
    benefits5: ["Demaquila", "Limpa", "Promove sensação calmante", "Nutre", "Ajuda na recuperação da sensação de conforto"],
    actives: ["Ácido hialurônico", "Beta glucan", "Aloe vera", "Pantenol"],
    cosmeticBenefits: ["Facilita a remoção da maquiagem", "Ajuda a manter a pele hidratada", "Proporciona sensação de frescor", "Promove toque suave", "Contribui para conforto após a limpeza"],
    use: "Aplique na pele úmida e massageie suavemente. Também pode ser aplicado em disco de algodão para auxiliar na remoção da maquiagem. Enxágue após a aplicação.",
    warnings: ["Evitar contato direto com os olhos.", "Remover completamente em caso de desconforto."],
    need: "Remover maquiagem"
  },
  {
    title: "Sabonete com Ácido Glicólico 10%",
    code: "Lote INV251010",
    imageLabel: "IMG-SABONETE-ACIDO-GLICOLICO-10",
    icon: FlaskConical,
    headline: "Limpeza renovadora para textura, luminosidade e poros.",
    indication:
      "Desenvolvido para higienizar a pele enquanto auxilia na renovação da superfície cutânea. O ácido glicólico contribui para remover células mortas, ajuda na desobstrução dos poros e melhora a aparência de textura irregular, opacidade e ressecamento.",
    benefits5: ["Remove oleosidade excessiva", "Hidrata", "Ajuda a desobstruir poros", "Promove renovação da superfície da pele", "Suaviza a aparência de ressecamento"],
    actives: ["Ácido glicólico 10%"],
    cosmeticBenefits: ["Pele com aparência mais luminosa", "Textura mais uniforme", "Toque mais macio", "Ajuda na aparência de poros refinados", "Auxilia na limpeza de pele oleosa ou opaca"],
    use: "Aplique na pele úmida e massageie suavemente, evitando área dos olhos, cantos do nariz, boca e regiões sensibilizadas. Enxágue completamente.",
    warnings: ["Usar preferencialmente à noite ou conforme orientação técnica.", "Introduzir gradualmente na rotina.", "Não aplicar sobre pele irritada, lesionada ou sensibilizada.", "Evitar exposição solar durante o uso.", "Usar filtro solar diariamente.", "Claims de renovação, oleosidade e poros devem ser validados por testes adequados."],
    need: "Renovar textura e luminosidade"
  },
  {
    title: "Sabonete Esfoliante Anticravos",
    code: "Lote INV251006",
    imageLabel: "IMG-SABONETE-ESFOLIANTE-ANTICRAVOS",
    icon: Microscope,
    headline: "Esfoliação semanal, efeito purificante e pele com toque renovado.",
    indication:
      "Desenvolvido para limpeza efetiva, esfoliação e auxílio no cuidado da pele com tendência a cravos e oleosidade excessiva. A combinação de carvão ativado, argila preta, colágeno e glicerina ajuda a remover impurezas e partículas acumuladas.",
    benefits5: ["Limpa", "Ajuda no controle da oleosidade excessiva", "Promove sensação remineralizante", "Efeito detox antipoluição", "Auxilia na renovação da superfície da pele"],
    actives: ["Carvão ativado", "Argila preta", "Colágeno", "Glicerina"],
    cosmeticBenefits: ["Remove impurezas superficiais", "Ajuda no cuidado da pele com tendência a cravos", "Proporciona toque mais liso", "Ajuda a reduzir o brilho excessivo", "Promove sensação purificante"],
    use: "Aplique na pele úmida e massageie suavemente com movimentos circulares. Enxágue completamente. Uso semanal ou conforme tolerância da pele.",
    warnings: ["Evitar área dos olhos.", "Não aplicar sobre pele irritada ou lesionada.", "Não usar com excesso de fricção.", "Suspender em caso de sensibilização."],
    need: "Esfoliação semanal e sensação purificante"
  },
  {
    title: "Água Micelar Hidratante",
    code: "Lote INV251011",
    imageLabel: "IMG-AGUA-MICELAR-HIDRATANTE",
    icon: Waves,
    headline: "Limpa, demaquila, tonifica e hidrata sem enxágue.",
    indication:
      "Produto multibenefício desenvolvido para facilitar a rotina de higienização da pele. Limpa, demaquila, ajuda a desobstruir poros, tonifica e contribui para a reposição da barreira hidrolipídica com ingredientes extraídos do girassol e do coco.",
    benefits5: ["Limpa", "Reequilibra", "Demaquila", "Tonifica", "Hidrata", "Suaviza"],
    actives: ["Lipídeos do coco", "Lipídeos do girassol"],
    cosmeticBenefits: ["Higienização prática", "Sensação de pele fresca", "Ajuda a manter conforto e hidratação", "Remove resíduos leves de maquiagem", "Pele com toque suave"],
    use: "Aplique em disco de algodão ou gaze e passe em toda a face com movimentos suaves até completa higienização. Não é necessário enxaguar.",
    warnings: ["Uso diário conforme necessidade.", "Evitar contato direto com os olhos."],
    need: "Limpeza sem enxágue para todos os tipos de pele"
  },
  {
    title: "Água Micelar Detox",
    code: "Lote INV251012",
    imageLabel: "IMG-AGUA-MICELAR-DETOX",
    icon: Gauge,
    headline: "Purificação prática para pele mista a oleosa.",
    indication:
      "Produto multibenefício desenvolvido para facilitar a rotina de peles mistas a oleosas. Limpa, ajuda a desobstruir poros, tonifica, remove impurezas e promove sensação purificante com ação matificante.",
    benefits5: ["Limpa", "Purifica", "Demaquila", "Tonifica", "Promove sensação detox", "Ajuda no controle da oleosidade excessiva"],
    actives: ["Carvão ativado", "Lipídeos do coco", "Lipídeos do girassol"],
    cosmeticBenefits: ["Pele com sensação mais limpa", "Toque mais fresco", "Ajuda a reduzir aparência de brilho excessivo", "Sensação matificante", "Ideal para pele mista a oleosa"],
    use: "Aplique em disco de algodão ou gaze e passe em toda a face com movimentos suaves até completa higienização. Não é necessário enxaguar.",
    warnings: ["Uso diário ou conforme necessidade.", "Claims de efeito detox, oleosidade e matificação exigem validação adequada."],
    need: "Pele mista a oleosa"
  }
];

const comparison = products.map((product) => ({
  product: product.title.replace("Sabonete ", "").replace("Água Micelar ", "Micelar "),
  format: product.title.includes("Água") ? "Água micelar" : product.title.includes("Demaquilante") ? "Sabonete demaquilante micelar" : product.title.includes("Esfoliante") ? "Sabonete esfoliante" : "Sabonete líquido",
  actives: product.actives.join(", "),
  function: product.need,
  frequency: product.title.includes("Esfoliante") ? "Uso semanal" : product.title.includes("Glicólico") ? "Conforme tolerância" : "Uso diário ou conforme necessidade"
}));

const routines = [
  { title: "Rotina diária básica", steps: ["Use o Sabonete Limpeza Intensiva ou a Água Micelar Hidratante.", "Finalize com hidratante ou tratamento facial.", "Durante o dia, use filtro solar."] },
  { title: "Antes da maquiagem", steps: ["Use o Sabonete Primer Make Up.", "Enxágue e seque suavemente.", "Aplique sua rotina de preparação e maquiagem."] },
  { title: "Para remover maquiagem", steps: ["Use a Água Micelar Hidratante ou Detox em algodão.", "Em seguida, use o Sabonete Demaquilante Micelar Make Out.", "Enxágue e finalize com hidratação."] },
  { title: "Para pele oleosa ou mista", steps: ["Use Água Micelar Detox para higienização prática.", "Use Sabonete Limpeza Intensiva conforme necessidade.", "Inclua o Esfoliante Anticravos semanalmente."] },
  { title: "Para renovação da textura", steps: ["Use o Sabonete com Ácido Glicólico 10% conforme tolerância.", "Evite combinar no mesmo momento com esfoliação física.", "Use filtro solar diariamente."] }
];

const safeClaims = ["Limpa a pele", "Remove impurezas", "Ajuda a controlar a oleosidade excessiva", "Promove sensação de frescor", "Ajuda a reduzir a aparência dos poros", "Pele com toque mais macio", "Ajuda a remover resíduos de maquiagem", "Não necessita enxágue nas águas micelares", "Promove sensação purificante", "Ajuda a preservar o conforto da pele"];
const proofClaims = ["Controle de oleosidade por X horas", "Redução de poros", "Redução de cravos", "Ação antipoluição comprovada", "Renovação celular", "Melhora da performance da maquiagem", "Efeito matificante por X horas", "pH equilibrado", "Não irrita a pele", "Hidratação por X horas"];
const avoidClaims = ["Fecha poros definitivamente", "Elimina cravos", "Cura acne", "Desintoxica a pele em profundidade", "Remove toda poluição da pele", "Rejuvenesce", "Previne envelhecimento de forma absoluta", "Resultado garantido"];

function ImagePanel({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-[28px] border border-stone-200 bg-stone-100 shadow-[0_24px_80px_rgba(63,63,59,0.08)] ${tall ? "min-h-[520px]" : "min-h-[360px]"}`}>
      <Image src={image} alt={label} fill className="object-cover transition duration-700 group-hover:scale-[1.035]" sizes="(max-width: 900px) 100vw, 50vw" priority={label.includes("HERO")} />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/38 via-stone-950/8 to-white/0" />
      <div className="absolute bottom-5 left-5 rounded-full border border-white/35 bg-white/75 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-700 backdrop-blur">
        {label}
      </div>
    </div>
  );
}

function FeatureCard({ item, index = 0 }: { item: { title: string; text: string; icon: LucideIcon }; index?: number }) {
  const Icon = item.icon;
  return (
    <Reveal delay={index * 0.04}>
      <div className="h-full rounded-[26px] border border-stone-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(63,63,59,0.08)]">
        <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-2xl font-light text-stone-800">{item.title}</h3>
        <p className="mt-4 text-sm leading-7 text-stone-500">{item.text}</p>
      </div>
    </Reveal>
  );
}

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  const Icon = product.icon;
  return (
    <Reveal delay={index * 0.035}>
      <article id={product.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-")} className="grid gap-8 rounded-[30px] border border-stone-200 bg-white p-5 shadow-[0_22px_70px_rgba(63,63,59,0.06)] lg:grid-cols-[0.86fr_1.14fr] lg:p-7">
        <ImagePanel label={product.imageLabel} />
        <div className="flex flex-col justify-center py-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700"><Icon className="h-5 w-5" /></span>
            {showInternalLotCodes ? <span className="rounded-full border border-stone-200 px-4 py-2 text-xs uppercase tracking-[0.12em] text-stone-500">{product.code}</span> : null}
          </div>
          <h3 className="mt-6 text-4xl font-light leading-tight text-stone-800 md:text-5xl">{product.title}</h3>
          <p className="mt-3 text-xl font-light text-stone-600">{product.headline}</p>
          <p className="mt-6 text-base leading-8 text-stone-500">{product.indication}</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <div className="rounded-[22px] bg-stone-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Multibenefícios</p>
              <ul className="mt-4 space-y-2 text-sm text-stone-600">{product.benefits5.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" />{item}</li>)}</ul>
            </div>
            {showIngredientDetails ? (
              <div className="rounded-[22px] bg-stone-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Ativos</p>
                <div className="mt-4 flex flex-wrap gap-2">{product.actives.map((item) => <span key={item} className="rounded-full border border-stone-200 bg-white px-3 py-2 text-xs text-stone-600">{item}</span>)}</div>
              </div>
            ) : null}
          </div>
          <div className="mt-6 rounded-[22px] border border-stone-200 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">Modo de uso</p>
            <p className="mt-3 text-sm leading-7 text-stone-600">{product.use}</p>
          </div>
          {showUsageWarnings && product.warnings.length ? (
            <div className="mt-4 rounded-[22px] border border-amber-200 bg-amber-50/60 p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700"><AlertTriangle className="h-4 w-4" /> Cuidados</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-900/75">{product.warnings.map((item) => <li key={item}>- {item}</li>)}</ul>
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

export default function HigienizacaoPelePage() {
  return (
    <main className="bg-[#faf9f6] text-stone-800">
      <section className="mx-auto grid min-h-screen max-w-[1500px] items-center gap-12 px-6 pb-24 pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">Higienização facial</p>
            <h1 className="mt-6 max-w-4xl text-[clamp(4rem,11vw,11rem)] font-light leading-[0.86] tracking-[-0.02em] text-stone-800">Produtos para Higienizar a Pele.</h1>
            <p className="mt-8 max-w-2xl text-2xl font-light leading-10 text-stone-500">Limpeza, frescor, equilíbrio e cuidado em cada etapa da rotina facial.</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-500">Uma linha completa para limpeza intensiva, controle de oleosidade, preparo para maquiagem, demaquilação, renovação suave, sensação purificante e águas micelares multifuncionais.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MinimalButton href="#produtos">Conhecer a linha</MinimalButton>
              <MinimalButton href="#necessidade" variant="ghost">Escolher por necessidade</MinimalButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Limpeza facial", "Controle de oleosidade", "Demaquilação", "Renovação suave", "Águas micelares"].map((item) => <span key={item} className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs text-stone-500">{item}</span>)}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}><ImagePanel label="IMG-HERO-HIGIENIZACAO-PELE" tall /></Reveal>
      </section>

      <nav className="sticky top-24 z-20 mx-auto mb-12 flex max-w-[1500px] gap-2 overflow-x-auto px-6 py-3 lg:px-10">
        {anchors.map(([label, href]) => <a key={href} href={href} className="whitespace-nowrap rounded-full border border-stone-200 bg-white/85 px-4 py-2 text-sm text-stone-600 shadow-sm backdrop-blur transition hover:bg-stone-900 hover:text-white">{label}</a>)}
      </nav>

      <section id="conceito" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Conceito" title="Limpar também é cuidar." text="A higienização é o primeiro passo de uma rotina de skincare eficiente. Mais do que remover impurezas, uma boa limpeza prepara a pele para receber ativos, melhora a sensação de frescor, ajuda no controle da oleosidade, preserva a barreira cutânea e contribui para uma aparência mais uniforme, confortável e luminosa." />
          <p className="mt-8 text-lg leading-9 text-stone-500">Esta linha transforma a limpeza facial em cuidado completo, com sabonetes líquidos, sabonetes funcionais, esfoliante, demaquilante micelar e águas micelares multifuncionais para diferentes momentos da rotina.</p>
        </div>
        <ImagePanel label="IMG-CONCEITO-LIMPEZA-INTELIGENTE" />
        <div className="lg:col-span-2 grid gap-4 md:grid-cols-5">
          {conceptCards.map((item, index) => <FeatureCard key={item.title} item={item} index={index} />)}
        </div>
      </section>

      <section id="produtos" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Portfólio" title="Sete soluções para higienizar, equilibrar e preparar a pele." text="Uma arquitetura de limpeza facial com produtos para rotina diária, pré-maquiagem, demaquilação, renovação da superfície, esfoliação semanal e higienização prática sem enxágue." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => <FeatureCard key={product.title} item={{ title: product.title, text: product.headline, icon: product.icon }} index={index} />)}
        </div>
        <div className="mt-16 grid gap-8">
          {products.map((product, index) => <ProductCard key={product.title} product={product} index={index} />)}
        </div>
      </section>

      <section id="necessidade" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="Indicação" title="Escolha a limpeza ideal para cada necessidade." text="A mesma linha pode organizar a comunicação por momento de uso, tipo de pele e benefício percebido, facilitando recomendação e construção de kits." />
        <div className="mt-10 overflow-hidden rounded-[28px] border border-stone-200 bg-white">
          <div className="grid min-w-[880px] grid-cols-[1fr_1fr_1fr] border-b border-stone-200 bg-stone-50 text-xs font-semibold uppercase tracking-[0.12em] text-stone-400">
            <div className="p-5">Necessidade</div><div className="p-5">Produto indicado</div><div className="p-5">Benefício percebido</div>
          </div>
          <div className="overflow-x-auto">
            {products.map((product) => (
              <div key={product.title} className="grid min-w-[880px] grid-cols-[1fr_1fr_1fr] border-b border-stone-100 last:border-b-0">
                <div className="p-5 text-stone-600">{product.need}</div>
                <div className="p-5 font-medium text-stone-800">{product.title}</div>
                <div className="p-5 text-stone-500">{product.cosmeticBenefits[0]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="Comparativo" title="Produtos, ativos e funções principais." text="Uma visão técnica para apoiar posicionamento, treinamento comercial e arquitetura de linha." />
          <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-[1040px] text-left text-sm">
                <thead className="bg-stone-50 text-xs uppercase tracking-[0.12em] text-stone-400">
                  <tr>{["Produto", "Formato", "Ativos destaque", "Função principal", "Frequência sugerida"].map((item) => <th key={item} className="p-5 font-semibold">{item}</th>)}</tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.product} className="border-t border-stone-100 align-top">
                      <td className="p-5 font-medium text-stone-800">{row.product}</td>
                      <td className="p-5 text-stone-500">{row.format}</td>
                      <td className="p-5 text-stone-500">{row.actives}</td>
                      <td className="p-5 text-stone-500">{row.function}</td>
                      <td className="p-5 text-stone-500">{row.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="rotina" className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <ImagePanel label="IMG-ROTINA-HIGIENIZACAO-FACIAL" />
        <div>
          <SectionTitle eyebrow="Rotina" title="Como montar uma rotina de higienização inteligente." text="A linha permite organizar diferentes rituais sem transformar a rotina em excesso de passos." />
          <div className="mt-10 grid gap-4">
            {routines.map((routine, index) => (
              <Reveal key={routine.title} delay={index * 0.035}>
                <div className="rounded-[24px] border border-stone-200 bg-white p-6">
                  <h3 className="text-2xl font-light text-stone-800">{routine.title}</h3>
                  <ol className="mt-4 space-y-2 text-sm leading-7 text-stone-500">{routine.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {showRegulatoryNotes ? (
        <section id="claims" className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10">
          <SectionTitle eyebrow="Claims e segurança" title="Claims sugeridos para validação." text="A linha possui forte potencial de comunicação, mas claims relacionados a poros, oleosidade, renovação, antipoluição, efeito detox, controle de cravos e desempenho de maquiagem devem ser validados tecnicamente." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[["Claims seguros", safeClaims, CheckCircle2], ["Claims que exigem comprovação", proofClaims, AlertTriangle], ["Evitar", avoidClaims, ListChecks]].map(([title, list, Icon]) => {
              const ClaimIcon = Icon as LucideIcon;
              return (
                <div key={title as string} className="rounded-[28px] border border-stone-200 bg-white p-7">
                  <ClaimIcon className="h-6 w-6 text-stone-500" />
                  <h3 className="mt-6 text-2xl font-light text-stone-800">{title as string}</h3>
                  <ul className="mt-5 space-y-2 text-sm leading-7 text-stone-500">{(list as string[]).map((item) => <li key={item}>- {item}</li>)}</ul>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {showB2BPositioning ? (
        <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="rounded-[32px] bg-stone-900 p-8 text-white md:p-12">
            <BadgeCheck className="h-8 w-8 text-stone-300" />
            <h2 className="mt-8 text-5xl font-light leading-tight md:text-7xl">A pele bem cuidada começa na limpeza.</h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">Produtos que limpam, demaquilam, renovam, matificam e hidratam criam uma jornada completa, com maior potencial de recompra e combinações entre produtos.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {["Limpeza facial inteligente", "Pele limpa sem ressecar", "Higienização com ativos", "Pré-maquiagem", "Demaquilação confortável", "Água micelar multifuncional", "Detox urbano", "Renovação com ácido glicólico"].map((item) => (
              <div key={item} className="rounded-[24px] border border-stone-200 bg-white p-6 text-stone-600">{item}</div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <SectionTitle eyebrow="Desenvolvimento LQF" title="Uma linha completa para limpar, preparar e equilibrar a pele." text="Produtos de higienização facial com ativos funcionais, sensorial agradável e benefícios direcionados para diferentes momentos da rotina. Uma plataforma ideal para marcas que desejam oferecer limpeza inteligente, prática e altamente comercial." />
          <div className="mt-8 flex flex-wrap gap-3">
            <MinimalButton href="/contato#formulario">Criar minha linha de limpeza facial</MinimalButton>
            <MinimalButton href="#produtos" variant="ghost">Ver produtos da coleção</MinimalButton>
          </div>
        </div>
        <ImagePanel label="IMG-CTA-HIGIENIZACAO-PELE" />
      </section>

      <section id="faq" className="mx-auto max-w-[1100px] px-6 py-24 lg:px-10">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes." />
        <div className="mt-10 grid gap-4">
          {[
            ["Qual produto usar todos os dias?", "O Sabonete Limpeza Intensiva, o Sabonete Primer Make Up e as Águas Micelares podem ser usados diariamente, conforme a necessidade e tolerância da pele."],
            ["A Água Micelar precisa de enxágue?", "Não. As águas micelares foram desenvolvidas para uso sem enxágue. Basta aplicar com algodão ou gaze e passar suavemente pela face."],
            ["Qual produto remove maquiagem?", "O Sabonete Demaquilante Micelar Make Out e as Águas Micelares ajudam na remoção de maquiagem e resíduos da pele."],
            ["Qual produto é melhor para pele oleosa?", "A Água Micelar Detox, o Sabonete Limpeza Intensiva, o Sabonete com Ácido Glicólico 10% e o Sabonete Esfoliante Anticravos são boas opções para peles com oleosidade excessiva, conforme tolerância."],
            ["Posso usar o Sabonete com Ácido Glicólico todos os dias?", "Depende da tolerância da pele e da formulação final. Por conter ácido glicólico 10%, recomenda-se introdução gradual, evitar área dos olhos e usar filtro solar diariamente."],
            ["O Esfoliante Anticravos pode ser usado todos os dias?", "A recomendação é uso semanal ou conforme tolerância da pele, evitando excesso de fricção."]
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
