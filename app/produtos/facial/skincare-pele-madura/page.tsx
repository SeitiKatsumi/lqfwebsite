import type { Metadata } from "next";
import { BadgeCheck, Droplets, FlaskConical, HeartPulse, Moon, ShieldCheck, Sparkles, SunMedium, Waves } from "lucide-react";
import { TechnicalRoutineLanding, type TechnicalLandingConfig } from "@/app/produtos/facial/_components/TechnicalRoutineLanding";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.skincarePeleMadura;

const image = "/products/skincare-pele-madura/skincare-pele-madura-placeholder.jpg";

const dayProducts = [
  {
    name: "Sabonete Limpeza Intensiva",
    lot: "INV251007",
    moment: "Dia",
    functionText: "Limpar e refrescar",
    headline: "Limpeza efetiva com frescor, viço e equilíbrio.",
    indication: "Desenvolvido para limpeza efetiva da pele, remoção de impurezas e auxílio no equilíbrio da oleosidade excessiva. Ajuda a reduzir a aparência dos poros e contribui para uma pele com aspecto mais uniforme, fresca e confortável.",
    actives: ["Mentol", "Colágeno", "Vitamina B7", "Pró-vitamina B5"],
    benefits: ["Pele limpa e fresca", "Menor sensação de oleosidade", "Toque confortável", "Aparência de poros menos evidentes", "Viço e sensação de pele saudável"],
    usage: "Aplique algumas gotas do sabonete na pele úmida e massageie suavemente para distribuir uniformemente. Enxágue após a aplicação. Uso diário, conforme tolerância da pele.",
    care: ["Evitar área dos olhos.", "Ajustar frequência em peles sensibilizadas."],
    regulatory: "Claims de poros, oleosidade e uniformização devem ser validados por testes adequados.",
    imageLabel: "IMG-SABONETE-LIMPEZA-INTENSIVA",
    icon: Waves
  },
  {
    name: "Creme Hidratante Facial Dia",
    lot: "INV251001",
    moment: "Dia",
    functionText: "Hidratar e preservar conforto",
    headline: "Hidratação equilibrada, maciez e apoio à barreira protetora.",
    indication: "Ideal para todos os tipos de pele, entrega cuidado completo de hidratação, nutrição e apoio à barreira protetora. Ácido hialurônico associado à glicerina ajuda a preservar a umidade e manter aparência macia, viçosa e confortável.",
    actives: ["Ácido hialurônico", "Glicerina", "Lactato de sódio", "Alantoína", "Serina", "Ureia"],
    benefits: ["Hidratação equilibrada", "Pele mais macia", "Redução da sensação de ressecamento", "Conforto ao longo do dia", "Apoio à barreira cutânea", "Aparência mais viçosa"],
    usage: "Para uso diurno, aplicar diariamente sobre a pele limpa e seca.",
    care: ["Usar conforme tolerância da pele.", "Associar ao filtro solar durante o dia."],
    regulatory: "Claims de hidratação prolongada, firmeza e elasticidade devem ser comprovados por testes adequados.",
    imageLabel: "IMG-CREME-HIDRATANTE-FACIAL-DIA",
    icon: Droplets
  },
  {
    name: "Filtro Solar FPS 60",
    moment: "Dia",
    functionText: "Proteger",
    headline: "Proteção diária indispensável para preservar a aparência saudável da pele.",
    indication: "Etapa essencial no cuidado da pele madura, especialmente em rotinas voltadas à uniformização do tom e prevenção visual dos sinais associados à exposição solar.",
    actives: ["Sistema fotoprotetor", "Sensorial diário", "Acabamento confortável"],
    benefits: ["Proteção solar diária", "Complementa rotinas de uniformização do tom", "Ajuda a preservar a aparência saudável da pele", "Etapa indispensável em rotinas com ativos uniformizadores"],
    usage: "Aplicar pela manhã como última etapa da rotina diurna. Reaplicar conforme necessidade, exposição solar, suor ou instruções do produto final.",
    care: ["FPS, UVA/UVB, resistência à água e sensorial final exigem testes específicos."],
    regulatory: "Claims de FPS 60, proteção UVA/UVB, resistência à água, toque seco, hidratação e uso em pele madura devem ser comprovados por testes específicos.",
    imageLabel: "IMG-FILTRO-SOLAR-FPS60-PELE-MADURA",
    icon: ShieldCheck
  }
];

const nightProducts = [
  {
    name: "Água Micelar Hidratante",
    lot: "INV251011",
    moment: "Noite",
    functionText: "Limpar, demaquilar e tonificar",
    headline: "Limpa, demaquila, tonifica e hidrata sem enxágue.",
    indication: "Produto multibenefício para rotina de higienização. Limpa, demaquila, ajuda a desobstruir poros, higieniza, tonifica e contribui para a reposição da barreira hidrolipídica com ingredientes extraídos do girassol e do coco.",
    actives: ["Lipídeos do coco", "Lipídeos do girassol"],
    benefits: ["Higienização prática", "Remoção de resíduos e maquiagem leve", "Pele com sensação fresca", "Toque suave", "Conforto sem enxágue", "Apoio à barreira hidrolipídica"],
    usage: "Aplicar em disco de algodão ou gaze e passar em toda a face com movimentos suaves até completa higienização. Não é necessário enxaguar.",
    care: ["Evitar contato direto com os olhos.", "Validar indicação sem enxágue conforme formulação final."],
    regulatory: "Claims de desobstrução de poros, proteção e hidratação devem ser validados por testes adequados.",
    imageLabel: "IMG-AGUA-MICELAR-HIDRATANTE",
    icon: Moon
  },
  {
    name: "Sérum Ácido Tranexâmico e Niacinamida",
    lot: "INV251017",
    moment: "Noite",
    functionText: "Uniformizar visualmente o tom",
    headline: "Uniformização do tom, luminosidade e textura mais refinada.",
    indication: "Sérum facial desenvolvido para melhorar a aparência de manchas, tom irregular e opacidade. A associação de ácido tranexâmico e niacinamida atua em sinergia para uniformização visual progressiva, luminosidade e melhora da textura da pele.",
    actives: ["Ácido tranexâmico 3%", "Niacinamida 5%"],
    benefits: ["Pele com aparência mais uniforme", "Melhora visual de manchas aparentes", "Luminosidade natural", "Textura mais refinada", "Aparência revitalizada", "Apoio à barreira cutânea"],
    usage: "Aplique algumas gotas na pele limpa e seca. Pode ser usado na rotina diurna e/ou noturna, conforme orientação da formulação. Em rotinas de uniformização, filtro solar é indispensável.",
    care: ["Reforçar uso diário de filtro solar.", "Introduzir conforme tolerância da pele."],
    regulatory: "Claims de clareamento, manchas, hiperpigmentação, melasma, uniformização em prazo específico e renovação superficial devem ser validados por testes adequados.",
    imageLabel: "IMG-SERUM-TRANEXAMICO-NIACINAMIDA-PELE-MADURA",
    icon: Sparkles
  },
  {
    name: "Creme Hidratante Facial Noite",
    lot: "INV251002",
    moment: "Noite",
    functionText: "Nutrir e apoiar a barreira cutânea",
    headline: "Nutrição noturna, conforto e apoio à barreira cutânea.",
    indication: "Cuidado noturno com foco em hidratação, nutrição e apoio à recuperação da barreira cutânea. Bioativos vegetais de algas e óleos vegetais ajudam a manter a pele confortável, macia e com aparência revitalizada ao acordar.",
    actives: ["Kappaphycus Alvarezii", "Fucus Vesiculosus", "Laminaria Saccharina", "Óleos de girassol, milho, gergelim, macadâmia e oliva", "Pantenol"],
    benefits: ["Hidratação noturna", "Apoio à barreira cutânea", "Pele mais macia ao acordar", "Sensação de nutrição intensiva", "Conforto prolongado", "Aparência mais viçosa e descansada"],
    usage: "Para uso noturno, aplicar diariamente sobre a pele limpa e seca.",
    care: ["Ajustar sensorial e concentração conforme público-alvo."],
    regulatory: "Claims de reparação, firmeza, elasticidade, produção de colágeno, regeneração e ação antiestresse devem ser validados por testes adequados.",
    imageLabel: "IMG-CREME-HIDRATANTE-FACIAL-NOITE",
    icon: HeartPulse
  }
];

const config: TechnicalLandingConfig = {
  eyebrow: "Facial • Pele madura",
  title: "Skincare para Pele Madura",
  subtitle: "Hidratação, luminosidade, uniformização e conforto para uma pele mais viçosa todos os dias.",
  intro: "Rotina dermocosmética completa para pele madura, desenvolvida para limpar com suavidade, hidratar profundamente, proteger durante o dia, uniformizar visualmente o tom e apoiar a barreira cutânea durante a noite.",
  image,
  heroImageLabel: "IMG-HERO-SKINCARE-PELE-MADURA",
  badges: ["Pele madura", "Hidratação", "Luminosidade", "Uniformização", "Barreira cutânea", "FPS 60"],
  primaryCta: "Conhecer a rotina",
  secondaryCta: "Ver dia e noite",
  anchors: [["Conceito", "#conceito"], ["Rotina Dia", "#rotina-dia"], ["Rotina Noite", "#rotina-noite"], ["Indicação", "#indicacao"], ["Kits", "#kits"], ["Claims", "#claims"], ["FAQ", "#faq"]],
  concept: {
    imageLabel: "IMG-CONCEITO-PELE-MADURA",
    title: "A pele madura precisa de constância, conforto e ativos inteligentes.",
    text: "Com o tempo, a pele pode apresentar maior tendência ao ressecamento, perda de viço, linhas finas, textura irregular, manchas aparentes e sensação de menor elasticidade. A linha organiza uma rotina simples: de manhã, limpar, hidratar e proteger. À noite, remover impurezas, uniformizar o tom e nutrir a pele enquanto ela descansa.",
    highlight: "Mais do que corrigir sinais do tempo, cuidar da pele madura é preservar sua luminosidade, conforto e vitalidade.",
    cards: [
      { title: "Hidratação", text: "Ajuda a reduzir a sensação de ressecamento e repuxamento.", icon: Droplets },
      { title: "Luminosidade", text: "Contribui para uma pele com aparência mais radiante.", icon: Sparkles },
      { title: "Uniformização", text: "Ajuda a melhorar a aparência do tom irregular e manchas aparentes.", icon: BadgeCheck },
      { title: "Proteção", text: "O filtro solar é essencial para preservar a pele durante o dia.", icon: ShieldCheck },
      { title: "Reparação noturna", text: "Apoio à barreira cutânea e conforto durante o descanso.", icon: Moon }
    ]
  },
  architecture: {
    imageLabel: "IMG-ARQUITETURA-ROTINA-PELE-MADURA",
    title: "Uma rotina completa em dois momentos.",
    text: "A arquitetura combina cuidado diurno e cuidado noturno para marcas que querem uma linha premium, clara e fácil de orientar.",
    groups: [
      { title: "Cuidados Diários — Dia", items: ["Sabonete Limpeza Intensiva", "Creme Hidratante Facial Dia", "Filtro Solar FPS 60"], functionText: "Limpar, hidratar, preservar conforto e proteger contra exposição solar diária." },
      { title: "Cuidados Diários — Noite", items: ["Água Micelar Hidratante", "Sérum Tranexâmico e Niacinamida", "Creme Hidratante Facial Noite"], functionText: "Remover impurezas, uniformizar visualmente o tom, hidratar e apoiar a barreira cutânea durante o sono." }
    ]
  },
  sections: [
    { id: "rotina-dia", eyebrow: "Cuidados Diários — Dia", title: "Limpar, hidratar e proteger.", text: "Durante o dia, a pele madura precisa de limpeza confortável, hidratação equilibrada e proteção solar para manter maciez, viço e cuidado contínuo.", imageLabel: "IMG-CUIDADOS-DIA-PELE-MADURA", products: dayProducts },
    { id: "rotina-noite", eyebrow: "Cuidados Diários — Noite", title: "Remover, uniformizar e nutrir.", text: "À noite, a rotina remove impurezas, resíduos e maquiagem, seguida por sérum uniformizador e creme noturno nutritivo.", imageLabel: "IMG-CUIDADOS-NOITE-PELE-MADURA", products: nightProducts }
  ],
  summaryImageLabel: "IMG-ROTINA-RESUMIDA-PELE-MADURA",
  summaryRows: [
    ["Dia", "1", "Sabonete Limpeza Intensiva", "Limpar e refrescar"],
    ["Dia", "2", "Creme Hidratante Facial Dia", "Hidratar e preservar conforto"],
    ["Dia", "3", "Filtro Solar FPS 60", "Proteger"],
    ["Noite", "1", "Água Micelar Hidratante", "Limpar, demaquilar e tonificar"],
    ["Noite", "2", "Sérum Tranexâmico e Niacinamida", "Uniformizar visualmente o tom"],
    ["Noite", "3", "Creme Hidratante Facial Noite", "Nutrir e apoiar a barreira cutânea"]
  ],
  indicationImageLabel: "IMG-INDICACAO-PELE-MADURA",
  indicationRows: [
    ["Limpeza diária", "Sabonete Limpeza Intensiva", "Pele limpa, fresca e confortável"],
    ["Ressecamento diurno", "Creme Hidratante Facial Dia", "Hidratação e maciez"],
    ["Proteção solar", "Filtro Solar FPS 60", "Proteção diária indispensável"],
    ["Remoção de resíduos e maquiagem", "Água Micelar Hidratante", "Limpeza prática sem enxágue"],
    ["Manchas aparentes e tom irregular", "Sérum Tranexâmico e Niacinamida", "Pele mais uniforme e luminosa"],
    ["Nutrição noturna", "Creme Hidratante Facial Noite", "Pele confortável e viçosa ao acordar"],
    ["Barreira cutânea fragilizada", "Hidratante Dia + Hidratante Noite", "Conforto e proteção contínua"]
  ],
  commercial: {
    title: "Uma rotina premium para o cuidado diário da pele madura.",
    text: "O público de pele madura busca produtos que entreguem clareza, conforto e benefícios percebidos. A linha organiza o cuidado em uma rotina fácil de seguir, com ativos conhecidos e proposta completa para hidratação, luminosidade, uniformização e proteção diária.",
    territories: ["Pele madura", "Longevidade da pele", "Uniformização do tom", "Hidratação profunda", "Barreira cutânea", "Rotina dia e noite", "Skincare premium acessível", "Pele com mais viço", "Sinais visíveis do tempo", "Proteção solar diária"],
    message: "Cuidado diário para uma pele madura mais luminosa, hidratada e confortável.",
    kits: [
      ["Kit Dia Pele Madura", "Sabonete Limpeza Intensiva + Creme Hidratante Facial Dia + Filtro Solar FPS 60."],
      ["Kit Noite Uniformizadora", "Água Micelar Hidratante + Sérum Tranexâmico e Niacinamida + Creme Hidratante Facial Noite."],
      ["Kit Completo Pele Madura", "Todos os produtos da rotina dia e noite."]
    ]
  },
  claims: {
    safe: ["Pele com aparência mais luminosa", "Ajuda a uniformizar visualmente o tom", "Promove hidratação", "Pele com sensação de conforto", "Ajuda a preservar a barreira cutânea", "Uso diário"],
    proof: ["Clareamento de manchas", "Redução de manchas de sol, idade ou acne", "Hidratação por X horas", "Firmeza", "Elasticidade", "Estímulo de colágeno", "Reparação de barreira", "FPS 60 e UVA/UVB"],
    avoid: ["Elimina manchas", "Clareia definitivamente", "Rejuvenesce", "Remove rugas", "Regenera a pele", "Resultado garantido", "Trata melasma"]
  },
  finalCta: {
    imageLabel: "IMG-CTA-PELE-MADURA",
    title: "Uma rotina completa para a beleza madura da pele.",
    text: "Do cuidado diurno à reparação noturna, esta linha entrega arquitetura simples, elegante e altamente comercial para marcas que desejam atender o público de pele madura com hidratação, luminosidade, uniformização e conforto.",
    primary: "Criar minha linha para pele madura",
    secondary: "Ver rotina completa"
  },
  faq: [
    ["Essa linha é indicada para pele madura?", "Sim. A rotina foi desenvolvida para atender necessidades comuns da pele madura, como ressecamento, perda de viço, manchas aparentes, textura irregular e necessidade de proteção diária."],
    ["Qual produto ajuda na uniformização do tom?", "O Sérum Ácido Tranexâmico e Niacinamida foi pensado para melhorar a aparência de manchas e uniformizar visualmente o tom da pele. Claims de clareamento devem ser comprovados por testes adequados."],
    ["Precisa usar filtro solar?", "Sim. O uso de filtro solar é indispensável, especialmente em rotinas com ativos uniformizadores e em peles com manchas aparentes."],
    ["A rotina é muito longa?", "Não. A linha foi organizada em três passos pela manhã e três passos à noite, criando uma rotina completa, mas simples de seguir."],
    ["A Água Micelar precisa de enxágue?", "Não. A Água Micelar Hidratante foi desenvolvida para uso sem enxágue, desde que a fórmula e a rotulagem estejam validadas para essa indicação."]
  ],
  flags: { showInternalLotCodes: true, showRegulatoryNotes: true, showB2BPositioning: true, showUsageInstructions: true, showKitSuggestions: true }
};

export default function SkincarePeleMaduraPage() {
  return <TechnicalRoutineLanding config={config} />;
}
