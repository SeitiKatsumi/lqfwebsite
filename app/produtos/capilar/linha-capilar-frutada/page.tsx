import type { Metadata } from "next";
import { BadgeCheck, Droplets, FlaskConical, Leaf, PackageCheck, ShieldCheck, Sparkles, SunMedium } from "lucide-react";
import { TechnicalRoutineLanding, type TechnicalLandingConfig, type TechnicalProduct } from "@/app/produtos/facial/_components/TechnicalRoutineLanding";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.linhaCapilarFrutada;

const image = "/products/linha-capilar-frutada/linha-capilar-frutada-placeholder.jpg";

const claimNote = "Claims de brilho, forca, resistencia, prevencao de danos, recuperacao capilar e percentuais devem aparecer apenas com comprovacao tecnica adequada.";

const frutixBrilho: TechnicalProduct[] = [
  {
    name: "Linha Frutix Brilho",
    moment: "Brilho",
    functionText: "Cuticulas, alinhamento e disciplina",
    headline: "Abacaxi, banana e cacau para brilho, alinhamento e aparencia mais disciplinada.",
    indication: "Linha para cabelos sem brilho, rebeldes, danificados por quimicas, calor ou agressoes externas, com foco em organizacao da superficie dos fios e melhor reflexao de luz.",
    actives: ["Abacaxi", "Banana", "Cacau", "Mucilagens", "Acidos de frutas", "Sais minerais"],
    benefits: ["Ajuda a organizar as cuticulas", "Promove brilho", "Contribui para alinhamento", "Reduz a aparencia de rebeldia", "Auxilia no cuidado de cabelos danificados"],
    usage: "Usar shampoo, condicionador e mascara da linha conforme necessidade dos fios. A mascara pode entrar uma a duas vezes por semana.",
    regulatory: claimNote,
    imageLabel: "IMG-FRUTIX-BRILHO",
    icon: Sparkles
  }
];

const frutixHidratante: TechnicalProduct[] = [
  {
    name: "Linha Frutix Hidratante",
    moment: "Hidratacao",
    functionText: "Reposicao hidrica e movimento",
    headline: "Mamao, melao e cacau para maciez, emoliencia e sensacao de movimento.",
    indication: "Linha para cabelos ressecados, enfraquecidos, asperos ou sem movimento, com proposta de manutencao da hidratacao capilar e melhora do sensorial.",
    actives: ["Mamao", "Melao", "Cacau", "Vitaminas", "Acucares essenciais", "Polifenois"],
    benefits: ["Ajuda a hidratar", "Reduz a sensacao de ressecamento", "Melhora maciez", "Contribui para maleabilidade", "Auxilia na protecao contra perda de agua"],
    usage: "Usar shampoo e condicionador na rotina de lavagem. Aplicar a mascara no comprimento e pontas de uma a duas vezes por semana.",
    regulatory: claimNote,
    imageLabel: "IMG-FRUTIX-HIDRATANTE",
    icon: Droplets
  }
];

const frutixProtecao: TechnicalProduct[] = [
  {
    name: "Linha Frutix Protecao",
    moment: "Protecao",
    functionText: "Reforco e nutricao",
    headline: "Manga, maracuja e cupuacu para cuidado de fios frageis e expostos.",
    indication: "Linha para cabelos enfraquecidos, expostos a agressoes diarias e com necessidade de protecao, nutricao e reforco da aparencia saudavel da fibra.",
    actives: ["Manga", "Maracuja", "Cupuacu", "Flavonoides", "Taninos", "Sais minerais"],
    benefits: ["Ajuda a proteger contra agressoes externas", "Promove nutricao", "Contribui para aparencia de fibra mais cuidada", "Reduz sensacao de fragilidade", "Entrega brilho e sensorial tropical"],
    usage: "Aplicar a rotina completa da linha em lavagens alternadas ou como protocolo de protecao para cabelos expostos a danos diarios.",
    regulatory: claimNote,
    imageLabel: "IMG-FRUTIX-PROTECAO",
    icon: ShieldCheck
  }
];

const frutixNutritivo: TechnicalProduct[] = [
  {
    name: "Linha Frutix Nutritivo",
    moment: "Nutricao",
    functionText: "Antioxidantes e vitalidade",
    headline: "Acai, acerola e uva para nutricao, brilho e energia capilar.",
    indication: "Linha para cabelos opacos, enfraquecidos, sem vitalidade e expostos a danos ambientais, com foco em nutricao e protecao antioxidante cosmetica.",
    actives: ["Acai", "Acerola", "Uva", "Bioflavonoides", "Polifenois", "Hidroxiacidos"],
    benefits: ["Promove nutricao da fibra", "Contribui para protecao antioxidante cosmetica", "Ajuda a reduzir sinais de desgaste ambiental", "Melhora aparencia de vitalidade", "Promove brilho"],
    usage: "Usar como rotina nutritiva em cabelos opacos ou sem vitalidade. Alternar com hidratacao e protecao conforme diagnostico capilar.",
    regulatory: claimNote,
    imageLabel: "IMG-FRUTIX-NUTRITIVO",
    icon: Leaf
  }
];

const manteigaAcerola: TechnicalProduct[] = [
  {
    name: "Manteiga Frutix Acerola",
    moment: "Forca",
    functionText: "Mascara amanteigada",
    headline: "Acerola biotecnologica para resistencia, maciez e barreira capilar.",
    indication: "Mascara amanteigada com propriedades emolientes e condicionantes para fios frageis, danificados ou com necessidade de reforco sensorial.",
    actives: ["Acerola biotecnologica", "Niacinamida", "L-prolina", "Betaina", "Cianidina", "Rutina", "Quercetina"],
    benefits: ["Ajuda a melhorar a resistencia da fibra", "Contribui para fortalecimento cosmetico", "Promove maciez intensa", "Reforca a barreira hidrolipidica", "Ajuda a reduzir a aparencia de danos"],
    usage: "Aplicar no comprimento e pontas apos higienizacao, pausar conforme orientacao da formula final e enxaguar. Pode entrar como reforco quinzenal ou mensal.",
    care: ["Claims quantitativos de forca e prevencao de danos dependem de testes."],
    regulatory: claimNote,
    imageLabel: "IMG-MANTEIGA-FRUTIX-ACEROLA",
    icon: PackageCheck
  }
];

const config: TechnicalLandingConfig = {
  eyebrow: "Capilar • Frutas brasileiras",
  title: "Linha Capilar Frutada",
  subtitle: "Frutas brasileiras, biotecnologia e performance para cabelos mais bonitos todos os dias.",
  intro: "Uma linha completa de cuidados capilares inspirada na riqueza das frutas tropicais brasileiras. Formulas com ativos biotecnologicos extraidos de frutas selecionadas para entregar brilho, hidratacao, protecao e nutricao a fibra capilar.",
  image,
  heroImageLabel: "IMG-HERO-LINHA-CAPILAR-FRUTADA",
  badges: ["Frutas brasileiras", "Biotecnologia", "Brilho", "Hidratacao", "Protecao", "Nutricao"],
  primaryCta: "Conhecer as linhas Frutix",
  secondaryCta: "Ver beneficios por fruta",
  anchors: [["Conceito", "#conceito"], ["Linhas Frutix", "#rotina"], ["Brilho", "#brilho"], ["Hidratacao", "#hidratacao"], ["Protecao", "#protecao"], ["Nutricao", "#nutricao"], ["Manteiga", "#manteiga-acerola"], ["Kits", "#kits"], ["Claims", "#claims"], ["FAQ", "#faq"]],
  labels: {
    architectureEyebrow: "Visao geral das linhas",
    summaryEyebrow: "Comparativo Frutix",
    summaryTitle: "Escolha a linha pelo que o cabelo precisa.",
    summaryText: "Uma matriz simples para orientar beneficios, narrativas de fruta e recomendacao de kits.",
    indicationTitle: "Beneficio por necessidade capilar.",
    indicationText: "A arquitetura facilita a venda consultiva por brilho, hidratacao, protecao, nutricao e reforco.",
    claimsTitle: "Claims frutados com seguranca tecnica.",
    claimsText: "A linha pode comunicar naturalidade, sensorial e beneficios cosmeticos, mantendo claims percentuais sujeitos a comprovacao."
  },
  concept: {
    imageLabel: "IMG-CONCEITO-FRUTAS-BIOTECNOLOGIA",
    title: "A forca das frutas brasileiras transformada em tecnologia capilar.",
    text: "A Linha Capilar Frutada une naturalidade, biotecnologia e sensorialidade em uma plataforma de haircare altamente desejavel. Cada combinacao de frutas foi pensada para uma necessidade especifica dos fios.",
    highlight: "Cada fruta entrega um beneficio. Cada linha, uma experiencia completa para os cabelos.",
    cards: [
      { title: "Naturalidade", text: "Frutas brasileiras como protagonistas da narrativa.", icon: Leaf },
      { title: "Biotecnologia", text: "Processo para aproveitamento dos componentes ativos.", icon: FlaskConical },
      { title: "Sensorial tropical", text: "Cores, aromas, texturas e ativos inspirados na biodiversidade brasileira.", icon: SunMedium },
      { title: "Rotina completa", text: "Shampoo, condicionador, mascara e manteiga capilar.", icon: PackageCheck },
      { title: "Beneficios direcionados", text: "Brilho, hidratacao, protecao, nutricao e resistencia.", icon: BadgeCheck }
    ]
  },
  architecture: {
    imageLabel: "IMG-VISAO-GERAL-FRUTIX",
    title: "Quatro linhas. Quatro necessidades capilares.",
    text: "A plataforma Frutix combina frutas protagonistas, beneficios claros e apelo sensorial para criar uma linha tropical premium e facil de comunicar.",
    groups: [
      { title: "Frutix Brilho", items: ["Abacaxi", "Banana", "Cacau"], functionText: "Organizacao das cuticulas, alinhamento, disciplina e brilho extra." },
      { title: "Frutix Hidratante", items: ["Mamao", "Melao", "Cacau"], functionText: "Reposicao hidrica, maciez, emoliencia e prevencao do ressecamento." },
      { title: "Frutix Protecao", items: ["Manga", "Maracuja", "Cupuacu"], functionText: "Protecao, reforco da fibra, nutricao e cuidado de cabelos enfraquecidos." },
      { title: "Frutix Nutritivo", items: ["Acai", "Acerola", "Uva"], functionText: "Nutricao, antioxidantes, energia capilar e protecao contra danos ambientais." },
      { title: "Manteiga Acerola", items: ["Acerola biotecnologica", "Niacinamida", "Polifenois"], functionText: "Mascara amanteigada para forca, resistencia e barreira capilar." }
    ]
  },
  sections: [
    { id: "brilho", eyebrow: "Frutix Brilho", title: "Abacaxi, banana e cacau para brilho, alinhamento e disciplina.", text: "Uma linha pensada para fios opacos, rebeldes e desalinhados, com narrativa tropical e performance cosmetica.", imageLabel: "IMG-FRUTIX-BRILHO", products: frutixBrilho },
    { id: "hidratacao", eyebrow: "Frutix Hidratante", title: "Mamao, melao e cacau para reposicao de agua, maciez e movimento.", text: "Hidratacao sensorial para cabelos ressecados, asperos ou sem movimento.", imageLabel: "IMG-FRUTIX-HIDRATANTE", products: frutixHidratante },
    { id: "protecao", eyebrow: "Frutix Protecao", title: "Manga, maracuja e cupuacu para protecao, nutricao e reforco da fibra.", text: "Uma linha para fios frageis e expostos a agressoes diarias.", imageLabel: "IMG-FRUTIX-PROTECAO", products: frutixProtecao },
    { id: "nutricao", eyebrow: "Frutix Nutritivo", title: "Acai, acerola e uva para nutricao, antioxidantes e vitalidade.", text: "Cuidado para cabelos opacos, enfraquecidos e sem vitalidade.", imageLabel: "IMG-FRUTIX-NUTRITIVO", products: frutixNutritivo },
    { id: "manteiga-acerola", eyebrow: "Manteiga Frutix", title: "Acerola biotecnologica para forca, resistencia e maciez.", text: "Uma mascara amanteigada de alto valor percebido para reforco da fibra e experiencia sensorial premium.", imageLabel: "IMG-MANTEIGA-FRUTIX-ACEROLA", products: manteigaAcerola }
  ],
  summaryImageLabel: "IMG-COMPARATIVO-LINHAS-FRUTIX",
  summaryRows: [
    ["Frutix Brilho", "Abacaxi, banana e cacau", "Brilho e alinhamento", "Fios mais brilhantes e disciplinados"],
    ["Frutix Hidratante", "Mamao, melao e cacau", "Reposicao hidrica", "Fios macios e maleaveis"],
    ["Frutix Protecao", "Manga, maracuja e cupuacu", "Protecao e reforco", "Fios protegidos e nutridos"],
    ["Frutix Nutritivo", "Acai, acerola e uva", "Nutricao e antioxidantes", "Fios nutridos e revitalizados"],
    ["Manteiga Acerola", "Acerola", "Forca e resistencia", "Fios mais resistentes e macios"]
  ],
  indicationImageLabel: "IMG-ROTINA-LINHA-CAPILAR-FRUTADA",
  indicationRows: [
    ["Cabelos sem brilho", "Frutix Brilho", "Brilho, alinhamento e disciplina"],
    ["Cabelos ressecados", "Frutix Hidratante", "Maciez, hidratacao e movimento"],
    ["Fios enfraquecidos", "Frutix Protecao", "Protecao e reforco da aparencia da fibra"],
    ["Cabelos opacos e sem vitalidade", "Frutix Nutritivo", "Nutricao e protecao antioxidante cosmetica"],
    ["Fios frageis e danificados", "Manteiga Frutix Acerola", "Forca cosmetica, maciez e barreira capilar"]
  ],
  commercial: {
    title: "Haircare tropical, biotecnologico e altamente desejavel.",
    text: "A Linha Capilar Frutada une ingredientes naturais brasileiros e tecnologia capilar em uma plataforma colorida, sensorial e facil de comunicar.",
    territories: ["Frutas brasileiras", "Haircare tropical", "Biotecnologia vegetal", "Brilho capilar", "Hidratacao capilar", "Nutricao capilar", "Protecao da fibra", "Forca e resistencia", "Cronograma frutado", "Produtos sensoriais"],
    message: "A energia das frutas brasileiras transformada em cuidado capilar de alta performance.",
    kits: [
      ["Kit Frutix Brilho", "Shampoo + Condicionador + Mascara Brilho."],
      ["Kit Frutix Hidratante", "Shampoo + Condicionador + Mascara Hidratante."],
      ["Kit Frutix Protecao", "Shampoo + Condicionador + Mascara Protecao."],
      ["Kit Frutix Nutritivo", "Shampoo + Condicionador + Mascara Nutritiva."],
      ["Kit Frutix Forca", "Manteiga Frutix Acerola + linha Frutix Nutritivo."],
      ["Kit Cronograma Frutado", "Frutix Hidratante + Frutix Nutritivo + Frutix Protecao + Manteiga Acerola."]
    ]
  },
  claims: {
    safe: ["Promove brilho", "Ajuda a hidratar", "Contribui para maciez", "Ajuda a reduzir o frizz", "Promove toque sedoso", "Ativos biotecnologicos", "Rotina capilar frutada"],
    proof: ["Aumento de 44% no brilho", "Aumento de 35% na forca mecanica", "Prevencao de danos em 50%", "Fortalecimento da fibra", "Aumento de resistencia", "Reducao de quebra"],
    avoid: ["Recupera totalmente os cabelos", "Regenera a fibra capilar", "Repara todos os danos", "Resultado garantido", "Impede quebra"]
  },
  finalCta: {
    imageLabel: "IMG-CTA-LINHA-CAPILAR-FRUTADA",
    title: "Transforme frutas brasileiras em uma linha capilar irresistivel.",
    text: "Biodiversidade, biotecnologia e sensorial tropical para criar uma plataforma completa de haircare com alto apelo visual e comercial.",
    primary: "Criar minha linha capilar frutada",
    secondary: "Ver kits Frutix"
  },
  faq: [
    ["As cores e conceitos vem das frutas?", "Sim. A proposta usa frutas brasileiras como protagonistas sensoriais e funcionais, criando uma narrativa natural e facil de entender."],
    ["A linha usa tecnologia biotecnologica?", "Sim. A proposta inclui beneficiamento das frutas para preservar e aproveitar componentes ativos em formulas capilares modernas."],
    ["Qual linha escolher para cabelos sem brilho?", "Frutix Brilho, com abacaxi, banana e cacau, e indicada para fios opacos, rebeldes e desalinhados."],
    ["Qual linha escolher para cabelos ressecados?", "Frutix Hidratante, com mamao, melao e cacau, e indicada para reposicao hidrica, maciez e maleabilidade."],
    ["A Manteiga Frutix Acerola fortalece os fios?", "A proposta e ajudar a melhorar a resistencia e a aparencia da fibra capilar. Claims quantitativos exigem testes."]
  ],
  backHref: "/produtos#capilar",
  backLabel: "Voltar para linhas capilares",
  flags: {
    showInternalLotCodes: false,
    showRegulatoryNotes: true,
    showB2BPositioning: true,
    showUsageInstructions: true,
    showKitSuggestions: true,
    showIngredientDetails: true,
    showProtocolSteps: true,
    showClinicalClaims: true
  }
};

export default function LinhaCapilarFrutadaPage() {
  return <TechnicalRoutineLanding config={config} />;
}
