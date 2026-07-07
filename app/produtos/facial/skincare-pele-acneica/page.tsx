import type { Metadata } from "next";
import { Activity, BadgeCheck, Droplets, FlaskConical, Gauge, Moon, ShieldCheck, Sparkles, SunMedium, Waves } from "lucide-react";
import { TechnicalRoutineLanding, type TechnicalLandingConfig } from "@/app/produtos/facial/_components/TechnicalRoutineLanding";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.skincarePeleAcneica;

const image = "/products/skincare-pele-acneica/skincare-pele-acneica-placeholder.jpg";

const dayProducts = [
  {
    name: "Sabonete Limpeza Intensiva",
    lot: "INV251007",
    moment: "Dia",
    functionText: "Limpar e refrescar",
    headline: "Limpeza efetiva com frescor e controle da oleosidade excessiva.",
    indication: "Desenvolvido para limpeza efetiva da pele, remoção de impurezas e auxílio no equilíbrio da oleosidade excessiva. Ajuda a reduzir a aparência dos poros e contribui para uma pele com aspecto mais uniforme, fresca e confortável.",
    actives: ["Mentol", "Colágeno", "Vitamina B7", "Pró-vitamina B5"],
    benefits: ["Limpa", "Promove sensação calmante", "Nutre", "Refresca", "Ajuda no controle da oleosidade excessiva"],
    usage: "Aplique algumas gotas do sabonete na pele úmida e massageie suavemente. Enxágue após a aplicação. Uso diário, conforme tolerância da pele.",
    care: ["Evitar área dos olhos.", "Ajustar frequência em peles sensibilizadas."],
    regulatory: "Claims de poros, oleosidade e uniformização devem ser validados por testes adequados.",
    imageLabel: "IMG-SABONETE-LIMPEZA-INTENSIVA",
    icon: Waves
  },
  {
    name: "Sérum Ácido Salicílico e Zinco",
    lot: "INV251018",
    moment: "Dia",
    functionText: "Controlar oleosidade e cuidar dos poros",
    headline: "Controle da oleosidade, cuidado dos poros e ação secativa cosmética.",
    indication: "Sérum leve para peles oleosas e com tendência à acne. A combinação de ácido salicílico e zinco PCA ajuda no controle visual da oleosidade, no cuidado de poros obstruídos e na melhora da aparência das imperfeições.",
    actives: ["Ácido salicílico 2%", "Zinco PCA 2%"],
    benefits: ["Ajuda no controle da oleosidade", "Auxilia no cuidado da pele com tendência à acne", "Promove ação secativa cosmética", "Reduz a aparência de brilho excessivo", "Ajuda na aparência de poros mais limpos", "Contribui para menor aparência de vermelhidão"],
    usage: "Aplicar na pele limpa após a higienização. Pode ser usado diariamente, conforme tolerância da pele. Durante o dia, finalizar com filtro solar.",
    care: ["Evitar área dos olhos.", "Não aplicar sobre pele irritada ou lesionada.", "Introduzir gradualmente em peles sensíveis."],
    regulatory: "Claims de acne, comedões, vermelhidão, ação secativa e oleosidade devem ser validados por testes adequados.",
    imageLabel: "IMG-SERUM-SALICILICO-ZINCO-PELE-ACNEICA",
    icon: FlaskConical
  },
  {
    name: "Filtro Solar FPS 60",
    moment: "Dia",
    functionText: "Proteger",
    headline: "Proteção diária indispensável para pele oleosa e em rotina com ativos.",
    indication: "Etapa essencial para rotinas com ácido salicílico, esfoliantes ou produtos secativos. Pode ser desenvolvido em versão oil free, toque seco e não comedogênica, conforme validação da fórmula.",
    actives: ["Sistema fotoprotetor", "Sensorial oil free", "Acabamento toque seco"],
    benefits: ["Proteção solar diária", "Ajuda a preservar a aparência saudável da pele", "Complementa rotinas com ativos seborreguladores", "Pode apoiar acabamento matte, conforme testes"],
    usage: "Aplicar pela manhã como última etapa da rotina diurna. Reaplicar conforme exposição solar, suor ou instruções do produto final.",
    care: ["FPS, UVA/UVB, resistência à água e não comedogenicidade exigem testes específicos."],
    regulatory: "Claims de FPS 60, proteção UVA/UVB, toque seco, oil free e não comedogênico devem ser comprovados por testes específicos.",
    imageLabel: "IMG-FILTRO-SOLAR-FPS60-PELE-ACNEICA",
    icon: ShieldCheck
  }
];

const nightProducts = [
  {
    name: "Água Micelar Detox",
    lot: "INV251012",
    moment: "Noite",
    functionText: "Remover impurezas e purificar",
    headline: "Limpeza prática, efeito purificante e sensação matte.",
    indication: "Produto multibenefício para peles mistas e oleosas. Limpa, ajuda a remover resíduos, tonificar e promover sensação purificante com carvão ativado e lipídeos de coco e girassol.",
    actives: ["Carvão ativado", "Lipídeos do coco", "Lipídeos do girassol"],
    benefits: ["Limpa", "Purifica", "Demaquila", "Ajuda a desobstruir poros", "Tonifica", "Promove sensação detox", "Ajuda no controle da oleosidade excessiva", "Refresca", "Hidrata", "Ajuda na remoção de impurezas"],
    usage: "Aplicar em disco de algodão ou gaze e passar na face com movimentos suaves até completa higienização. Não é necessário enxaguar.",
    care: ["Evitar contato direto com os olhos.", "Claims antipoluição e matificação devem ser testados."],
    regulatory: "Claims de antipoluição, matificação, oleosidade e desobstrução de poros devem ser validados por testes adequados.",
    imageLabel: "IMG-AGUA-MICELAR-DETOX",
    icon: Droplets
  },
  {
    name: "Gel Hidratante Facial",
    lot: "INV251003",
    moment: "Noite",
    functionText: "Hidratar sem pesar",
    headline: "Hidratação inteligente para peles oleosas.",
    indication: "Ideal para peles oleosas ou com tendência ao excesso de oleosidade. Promove hidratação leve, filme protetor e sensação equilibrada sem deixar toque pesado.",
    actives: ["Agrião", "Bardana", "Sálvia", "Limão", "Hera", "Quilaia", "Ácido hialurônico", "Pantenol"],
    benefits: ["Hidratação leve sem pesar", "Ajuda no controle visual do brilho", "Sensação refrescante", "Toque confortável", "Apoio à barreira cutânea", "Pele com viço natural"],
    usage: "Aplicar diariamente sobre a pele limpa e seca.",
    care: ["Ajustar uso conforme sensibilidade individual."],
    regulatory: "Claims adstringentes, antissépticos, antisseborreicos, clareadores e descongestionantes devem ser comunicados com linguagem cosmética segura e comprovação.",
    imageLabel: "IMG-GEL-HIDRATANTE-FACIAL-PELE-ACNEICA",
    icon: Moon
  }
];

const spotProducts = [
  {
    name: "Sabonete Esfoliante Anticravos",
    lot: "INV251006",
    moment: "Pontual",
    functionText: "Esfoliar e purificar semanalmente",
    headline: "Esfoliação semanal, efeito purificante e toque renovado.",
    indication: "Desenvolvido para limpeza efetiva, esfoliação e auxílio no cuidado da pele com tendência a cravos e oleosidade excessiva. Ajuda a remover impurezas, partículas acumuladas e resíduos de poluição urbana.",
    actives: ["Carvão ativado", "Argila preta", "Colágeno", "Glicerina"],
    benefits: ["Remove impurezas superficiais", "Ajuda no cuidado da pele com tendência a cravos", "Proporciona toque mais liso", "Ajuda a reduzir brilho excessivo", "Promove sensação purificante"],
    usage: "Aplique na pele úmida e massageie suavemente com movimentos circulares. Enxágue completamente. Uso semanal ou conforme tolerância.",
    care: ["Evitar área dos olhos.", "Não usar sobre pele irritada.", "Não usar com excesso de fricção.", "Evitar combinar no mesmo dia com muitos ativos esfoliantes."],
    regulatory: "Claims anticravos, detox, antipoluição e renovação devem ser validados por testes adequados.",
    imageLabel: "IMG-SABONETE-ESFOLIANTE-ANTICRAVOS",
    icon: Sparkles
  },
  {
    name: "Gel Secativo Pele Acneica",
    lot: "INV251014",
    moment: "Pontual",
    functionText: "Cuidado localizado",
    headline: "Cuidado pontual para imperfeições, brilho e vermelhidão aparente.",
    indication: "Produto para aplicação localizada em peles com tendência à acne. Zinco PCA contribui para o controle visual da oleosidade, enquanto ácido salicílico auxilia no cuidado dos poros e das imperfeições.",
    actives: ["Ácido salicílico", "Zinco PCA", "Hamamélis", "Alantoína"],
    benefits: ["Ação secativa cosmética", "Ajuda a reduzir a aparência de vermelhidão", "Contribui para menor sensação de desconforto", "Auxilia no cuidado das imperfeições", "Ajuda no controle da oleosidade local"],
    usage: "Aplicar uma fina camada na pele limpa ou diretamente sobre a imperfeição, conforme orientação do produto final.",
    care: ["Evitar área dos olhos e mucosas.", "Não aplicar sobre pele lesionada.", "Suspender em caso de sensibilização persistente."],
    regulatory: "Claims de redução rápida, acne, vermelhidão, ação secativa e controle microbiano devem ser validados por testes adequados.",
    imageLabel: "IMG-GEL-SECATIVO-PELE-ACNEICA",
    icon: Activity
  },
  {
    name: "Máscara Secativa Pele Acneica",
    lot: "INV251015",
    moment: "Pontual",
    functionText: "Purificar e controlar brilho",
    headline: "Purificação, controle de brilho e conforto para pele oleosa.",
    indication: "Máscara para pele oleosa e com tendência à acne. Óxido de zinco e argila branca contribuem para sensação purificante, controle visual da oleosidade e aparência mais equilibrada.",
    actives: ["Óxido de zinco", "Argila branca", "Óleo de melaleuca", "Colágeno", "Vitaminas do complexo B"],
    benefits: ["Reduz a aparência de brilho excessivo", "Ajuda no controle visual da oleosidade", "Promove sensação purificante", "Sensação calmante", "Apoio à barreira cutânea", "Ajuda no cuidado de imperfeições"],
    usage: "Aplicar uma camada sobre a pele limpa, evitando área dos olhos. Deixar agir pelo tempo indicado na formulação e enxaguar completamente.",
    care: ["Evitar uso excessivo em peles sensibilizadas.", "Não aplicar sobre pele lesionada."],
    regulatory: "Claims de controle microbiano, acne, vermelhidão, secatividade e redução de imperfeições devem ser validados por testes adequados.",
    imageLabel: "IMG-MASCARA-SECATIVA-PELE-ACNEICA",
    icon: Gauge
  }
];

const config: TechnicalLandingConfig = {
  eyebrow: "Facial • Pele acneica",
  title: "Skincare para Pele Acneica",
  subtitle: "Uma rotina completa para controlar brilho, cuidar das imperfeições e manter a pele equilibrada.",
  intro: "Linha dermocosmética para peles mistas, oleosas e com tendência à acne, com limpeza, controle da oleosidade, hidratação leve, proteção solar e cuidados pontuais com ativos como ácido salicílico, zinco PCA, carvão ativado, argilas, pantenol e ácido hialurônico.",
  image,
  heroImageLabel: "IMG-HERO-SKINCARE-PELE-ACNEICA",
  badges: ["Pele oleosa", "Tendência à acne", "Controle de brilho", "Oil free", "Cuidado pontual", "FPS 60"],
  primaryCta: "Conhecer a rotina",
  secondaryCta: "Ver cuidados pontuais",
  anchors: [["Conceito", "#conceito"], ["Rotina Dia", "#rotina-dia"], ["Rotina Noite", "#rotina-noite"], ["Pontuais", "#cuidados-pontuais"], ["Indicação", "#indicacao"], ["Kits", "#kits"], ["Claims", "#claims"], ["FAQ", "#faq"]],
  concept: {
    imageLabel: "IMG-CONCEITO-PELE-OLEOSA-ACNEICA",
    title: "Pele oleosa também precisa de equilíbrio, hidratação e barreira protegida.",
    text: "Um dos maiores erros no cuidado da pele oleosa é apostar apenas em limpeza agressiva e produtos secativos. A proposta desta linha é equilibrar: limpar sem ressecar, controlar brilho sem agredir, hidratar sem pesar e agir pontualmente nas imperfeições quando necessário.",
    highlight: "Pele oleosa não precisa de ressecamento. Precisa de equilíbrio inteligente.",
    cards: [
      { title: "Limpeza sem agressão", text: "Remove impurezas e oleosidade excessiva com sensação de frescor.", icon: Waves },
      { title: "Controle de brilho", text: "Ajuda a manter aparência mais matte e equilibrada.", icon: Gauge },
      { title: "Poros e imperfeições", text: "Auxilia no cuidado da pele com tendência a cravos e espinhas.", icon: Activity },
      { title: "Hidratação leve", text: "Mantém a barreira cutânea sem sensação oleosa.", icon: Droplets },
      { title: "Cuidado pontual", text: "Produtos específicos para uso localizado ou semanal.", icon: BadgeCheck }
    ]
  },
  architecture: {
    imageLabel: "IMG-ARQUITETURA-ROTINA-PELE-ACNEICA",
    title: "Uma rotina completa em três momentos.",
    text: "A arquitetura organiza cuidados diários de manhã, cuidados noturnos e reforços pontuais para momentos específicos da pele oleosa.",
    groups: [
      { title: "Cuidados Diários — Dia", items: ["Sabonete Limpeza Intensiva", "Sérum Ácido Salicílico e Zinco", "Filtro Solar FPS 60"], functionText: "Limpar, equilibrar o brilho e proteger." },
      { title: "Cuidados Diários — Noite", items: ["Água Micelar Detox", "Gel Hidratante Facial"], functionText: "Remover impurezas, purificar e hidratar sem pesar." },
      { title: "Cuidados Pontuais", items: ["Sabonete Esfoliante Anticravos", "Gel Secativo Pele Acneica", "Máscara Secativa Pele Acneica"], functionText: "Reforços semanais ou localizados para brilho, poros e imperfeições." }
    ]
  },
  sections: [
    { id: "rotina-dia", eyebrow: "Cuidados Diários — Dia", title: "Limpar, equilibrar e proteger.", text: "Durante o dia, a pele oleosa precisa começar limpa, receber ativos que ajudem no controle do brilho e finalizar com proteção solar adequada.", imageLabel: "IMG-CUIDADOS-DIA-PELE-ACNEICA", products: dayProducts },
    { id: "rotina-noite", eyebrow: "Cuidados Diários — Noite", title: "Remover impurezas, purificar e hidratar sem pesar.", text: "À noite, a rotina ajuda a remover resíduos de poluição, oleosidade acumulada e maquiagem, preparando a pele para uma hidratação leve e equilibrada.", imageLabel: "IMG-CUIDADOS-NOITE-PELE-ACNEICA", products: nightProducts },
    { id: "cuidados-pontuais", eyebrow: "Cuidados Pontuais", title: "Produtos de reforço para esfoliação, imperfeições e controle do brilho.", text: "A pele oleosa pode precisar de cuidados específicos em momentos pontuais: esfoliação semanal, aplicação localizada e máscara para aparência de brilho e poros obstruídos.", imageLabel: "IMG-CUIDADOS-PONTUAIS-PELE-ACNEICA", products: spotProducts }
  ],
  summaryImageLabel: "IMG-ROTINA-RESUMIDA-PELE-ACNEICA",
  summaryRows: [
    ["Dia", "1", "Sabonete Limpeza Intensiva", "Limpar e refrescar"],
    ["Dia", "2", "Sérum Ácido Salicílico e Zinco", "Controlar oleosidade e cuidar dos poros"],
    ["Dia", "3", "Filtro Solar FPS 60", "Proteger"],
    ["Noite", "1", "Água Micelar Detox", "Remover impurezas e purificar"],
    ["Noite", "2", "Gel Hidratante Facial", "Hidratar sem pesar"],
    ["Pontual", "1", "Sabonete Esfoliante Anticravos", "Esfoliar e purificar semanalmente"],
    ["Pontual", "2", "Gel Secativo Pele Acneica", "Cuidado localizado"],
    ["Pontual", "3", "Máscara Secativa Pele Acneica", "Purificar e controlar brilho"]
  ],
  indicationImageLabel: "IMG-INDICACAO-PELE-ACNEICA",
  indicationRows: [
    ["Oleosidade excessiva", "Sérum Salicílico e Zinco, Água Micelar Detox", "Menor brilho e aparência equilibrada"],
    ["Poros obstruídos", "Sérum Salicílico e Zinco, Esfoliante Anticravos", "Sensação de poros limpos"],
    ["Espinhas pontuais", "Gel Secativo", "Ação localizada e secativa cosmética"],
    ["Pele oleosa desidratada", "Gel Hidratante Facial", "Hidratação leve e conforto"],
    ["Sensação detox", "Água Micelar Detox, Esfoliante Anticravos", "Pele purificada e fresca"],
    ["Controle semanal", "Máscara Secativa", "Redução visual de brilho e oleosidade"],
    ["Rotina diurna", "Sabonete, Sérum, FPS 60", "Limpeza, equilíbrio e proteção"]
  ],
  commercial: {
    title: "Uma rotina completa para um dos maiores territórios do skincare.",
    text: "Pele oleosa e tendência à acne são dores recorrentes entre consumidores jovens e adultos. A linha cria uma arquitetura completa para venda por kits, protocolos e necessidades específicas.",
    territories: ["Pele oleosa", "Tendência à acne", "Controle de brilho", "Poros e imperfeições", "Cuidado pontual", "Detox urbano", "Hidratação oil free", "Rotina dia e noite", "Kit pele acneica", "Adolescentes e adultos"],
    message: "Controle, frescor e equilíbrio para peles que pedem cuidado sem peso.",
    kits: [
      ["Kit Diário Pele Acneica", "Sabonete Limpeza Intensiva + Sérum Salicílico e Zinco + Filtro Solar FPS 60."],
      ["Kit Noite Detox", "Água Micelar Detox + Gel Hidratante Facial."],
      ["Kit Controle Pontual", "Esfoliante Anticravos + Gel Secativo + Máscara Secativa."],
      ["Kit Completo Pele Acneica", "Todos os produtos da rotina diária, noturna e pontual."]
    ]
  },
  claims: {
    safe: ["Ajuda no controle da oleosidade", "Pele com aparência mais equilibrada", "Sensação de frescor", "Cuidado pontual para imperfeições", "Promove sensação purificante", "Hidratação leve"],
    proof: ["Reduz acne", "Reduz comedões", "Reduz vermelhidão", "Controle microbiano", "Ação secativa em X horas", "Controle de oleosidade por X horas", "Não comedogênico", "FPS 60 e UVA/UVB"],
    avoid: ["Cura acne", "Elimina espinhas", "Fecha poros", "Zera oleosidade", "Trata infecção", "Resultado garantido"]
  },
  finalCta: {
    imageLabel: "IMG-CTA-PELE-ACNEICA",
    title: "Uma rotina completa para pele oleosa e com tendência à acne.",
    text: "Do cuidado diário ao tratamento pontual, esta linha entrega arquitetura completa para limpar, equilibrar, hidratar, proteger e cuidar das imperfeições da pele oleosa.",
    primary: "Criar minha linha para pele acneica",
    secondary: "Ver rotina completa"
  },
  faq: [
    ["Essa linha trata acne?", "A proposta é auxiliar no cuidado cosmético da pele oleosa e com tendência à acne. Claims terapêuticos, como tratamento de acne, devem ser validados conforme regulamentação específica."],
    ["Pele oleosa precisa de hidratante?", "Sim. Pele oleosa também pode ficar desidratada. O Gel Hidratante Facial foi pensado para hidratar com textura leve, sem sensação pesada."],
    ["Posso usar o sérum com ácido salicílico todos os dias?", "Pode ser usado diariamente conforme tolerância da pele e orientação da formulação. Em peles sensíveis, recomenda-se introdução gradual."],
    ["O esfoliante pode ser usado todos os dias?", "Não. A recomendação é uso semanal ou conforme tolerância, evitando excesso de fricção."],
    ["Precisa usar filtro solar?", "Sim. O filtro solar é indispensável, especialmente em rotinas com ácido salicílico, esfoliantes e produtos secativos."]
  ],
  flags: { showInternalLotCodes: true, showRegulatoryNotes: true, showB2BPositioning: true, showUsageInstructions: true, showKitSuggestions: true }
};

export default function SkincarePeleAcneicaPage() {
  return <TechnicalRoutineLanding config={config} />;
}
