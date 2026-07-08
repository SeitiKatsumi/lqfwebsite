import {
  Activity,
  BadgeCheck,
  Brush,
  Droplets,
  FlaskConical,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Waves,
  Wind
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { createCapilarLandingConfig, type CapilarLine } from "@/app/produtos/capilar/_components/CapilarLandingFactory";
import type { TechnicalLandingConfig } from "@/app/produtos/facial/_components/TechnicalRoutineLanding";

type ProductSeed = {
  name: string;
  moment: string;
  headline: string;
  indication: string;
  actives: string[];
  benefits: string[];
  imageLabel: string;
  icon?: LucideIcon;
};

type Preset = {
  family: "capilar" | "unhas" | "infantil" | "bucal";
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  image: string;
  heroImageLabel: string;
  badges: string[];
  conceptTitle: string;
  conceptText: string;
  conceptHighlight: string;
  conceptCards: Array<{ title: string; text: string; icon?: LucideIcon }>;
  sections: Array<{
    id: string;
    eyebrow: string;
    title: string;
    text: string;
    products: ProductSeed[];
  }>;
  summaryRows: Array<[string, string, string, string]>;
  indicationRows: Array<[string, string, string]>;
  commercialTitle: string;
  commercialText: string;
  commercialMessage: string;
  territories: string[];
  kits: Array<[string, string]>;
  claimsSafe: string[];
  claimsProof: string[];
  claimsAvoid: string[];
  finalTitle: string;
  finalText: string;
  faq: Array<[string, string]>;
};

const safeClaims = [
  "Ajuda a melhorar a aparência",
  "Promove sensação de cuidado",
  "Contribui para hidratação e conforto",
  "Auxilia na rotina cosmética",
  "Melhora o sensorial percebido"
];

const proofClaims = [
  "Resultados imediatos",
  "Redução de quebra, oleosidade ou sensibilidade",
  "Proteção solar, térmica ou antimicrobiana",
  "Crescimento, firmeza, resistência ou recuperação",
  "Claims quantitativos e comparativos"
];

const avoidClaims = [
  "Cura ou tratamento médico",
  "Resultado garantido",
  "Substitui avaliação profissional",
  "Elimina definitivamente alterações",
  "Promessas absolutas sem teste"
];

function line(id: string, eyebrow: string, title: string, text: string, products: ProductSeed[]): CapilarLine {
  return { id, eyebrow, title, text, products };
}

function makeConfig(input: Preset): TechnicalLandingConfig {
  const back = {
    capilar: ["/produtos#capilar", "Voltar para linhas capilares"],
    unhas: ["/produtos#unhas", "Voltar para linhas de unhas"],
    infantil: ["/produtos#bebe-e-infantil", "Voltar para Bebê e Infantil"],
    bucal: ["/produtos#bucal", "Voltar para linha bucal"]
  }[input.family];

  const labels =
    input.family === "capilar"
      ? undefined
      : {
          architectureEyebrow: "Arquitetura da linha",
          summaryTitle: "Escolha por necessidade, ativo e oportunidade.",
          summaryText: "Uma matriz técnica para venda consultiva, treinamento e montagem de kits.",
          indicationTitle: "Diagnóstico rápido para orientar a solução ideal."
        };

  return createCapilarLandingConfig({
    eyebrow: input.eyebrow,
    title: input.title,
    subtitle: input.subtitle,
    intro: input.intro,
    image: input.image,
    heroImageLabel: input.heroImageLabel,
    badges: input.badges,
    primaryCta: "Desenvolver esta linha",
    secondaryCta: "Ver arquitetura",
    conceptTitle: input.conceptTitle,
    conceptText: input.conceptText,
    conceptHighlight: input.conceptHighlight,
    conceptCards: input.conceptCards,
    lines: input.sections.map((section) => line(section.id, section.eyebrow, section.title, section.text, section.products)),
    summaryRows: input.summaryRows,
    indicationRows: input.indicationRows,
    commercialTitle: input.commercialTitle,
    commercialText: input.commercialText,
    commercialMessage: input.commercialMessage,
    territories: input.territories,
    kits: input.kits,
    claimsSafe: input.claimsSafe,
    claimsProof: input.claimsProof,
    claimsAvoid: input.claimsAvoid,
    finalTitle: input.finalTitle,
    finalText: input.finalText,
    finalPrimary: "Criar minha linha",
    finalSecondary: "Falar com a LQF",
    faq: input.faq,
    labels,
    architectureTitle: input.family === "capilar" ? undefined : "Uma plataforma modular para transformar necessidade em linha comercial.",
    architectureText:
      input.family === "capilar"
        ? undefined
        : "Cada bloco organiza produto, benefício, ativo e cuidado regulatório para facilitar venda consultiva, briefing técnico e modelos de página.",
    backHref: back[0],
    backLabel: back[1]
  });
}

export const innovationLandingPresets = {
  capilarVariada: {
    family: "capilar",
    eyebrow: "Capilar • Portfólio",
    title: "Capilar Variada.",
    subtitle: "Resultados percebidos para diferentes necessidades dos fios.",
    intro:
      "Uma plataforma completa para marcas que desejam linhas capilares segmentadas por benefício, sensorial e rotina de uso.",
    image: "/products/capilar-variada/capilar-variada-placeholder.jpg",
    heroImageLabel: "IMG-HERO-CAPILAR-VARIADA",
    badges: ["Hidratação", "Nutrição", "Cachos", "Loiros", "Detox", "Anti-quebra"],
    conceptTitle: "Um portfólio amplo para rotinas capilares de alta procura.",
    conceptText:
      "A linha organiza soluções por dor do consumidor: fios secos, opacos, porosos, cacheados, loiros, lisos, fragilizados ou com necessidade de detox.",
    conceptHighlight: "Cada necessidade vira uma narrativa de produto simples de vender e fácil de entender.",
    conceptCards: [
      { title: "Rotinas claras", text: "Benefícios fáceis de explicar no ponto de venda.", icon: BadgeCheck },
      { title: "Ativos reconhecíveis", text: "Pantenol, queratina vegetal, ceramidas, óleos e extratos.", icon: FlaskConical },
      { title: "Sensorial imediato", text: "Maciez, brilho, movimento e toque mais disciplinado.", icon: Sparkles }
    ],
    sections: [
      {
        id: "portfolio",
        eyebrow: "Linhas",
        title: "De hidratação a anti-quebra.",
        text: "Linhas pensadas para ampliar portfólio com lógica de benefício.",
        products: [
          {
            name: "Hidratação e Brilho",
            moment: "Hidratar",
            headline: "Pantenol, mel vegetal e coco para maciez e brilho.",
            indication: "Fios secos, opacos e sem movimento.",
            actives: ["Pantenol", "Mel vegetal", "Coco"],
            benefits: ["Ajuda na hidratação", "Promove brilho", "Melhora maciez", "Contribui para movimento"],
            imageLabel: "IMG-HIDRATACAO-BRILHO",
            icon: Droplets
          },
          {
            name: "Nutrição",
            moment: "Nutrir",
            headline: "Proteínas, ômegas e marula para toque nutrido.",
            indication: "Cabelos ásperos, ressecados e sem emoliência.",
            actives: ["Proteínas hidrolisadas", "Ômegas", "Marula"],
            benefits: ["Nutrição cosmética", "Emoliência", "Brilho", "Toque sedoso"],
            imageLabel: "IMG-NUTRICAO-CAPILAR",
            icon: Leaf
          },
          {
            name: "Restauração",
            moment: "Restaurar",
            headline: "Queratina vegetal, ácido hialurônico e argan.",
            indication: "Fios porosos, danificados e fragilizados.",
            actives: ["Queratina vegetal", "Ácido hialurônico", "Argan"],
            benefits: ["Apoia a reconstrução visual", "Melhora alinhamento", "Reduz aspereza", "Auxilia no brilho"],
            imageLabel: "IMG-RESTAURACAO-CAPILAR",
            icon: ShieldCheck
          },
          {
            name: "Cachos",
            moment: "Definir",
            headline: "Linho dourado, colágeno vegetal e aloe vera.",
            indication: "Cachos que buscam definição, hidratação e controle de volume.",
            actives: ["Linho dourado", "Colágeno vegetal", "Aloe vera"],
            benefits: ["Ajuda na definição", "Reduz frizz visual", "Promove hidratação", "Melhora elasticidade cosmética"],
            imageLabel: "IMG-CACHOS",
            icon: Waves
          },
          {
            name: "Loiros",
            moment: "Matizar",
            headline: "Pantenol, aminoácidos e Acid Violet 43.",
            indication: "Cabelos loiros ou descoloridos que precisam de cuidado e neutralização visual.",
            actives: ["Pantenol", "10 aminoácidos", "Acid Violet 43"],
            benefits: ["Neutralização visual", "Maciez", "Cuidado pós-descoloração", "Brilho"],
            imageLabel: "IMG-CABELOS-LOIROS",
            icon: SunMedium
          },
          {
            name: "Anti-quebra",
            moment: "Fortalecer",
            headline: "Quinoa, queratina vegetal e ceramida vegetal.",
            indication: "Fios fragilizados e quebradiços.",
            actives: ["Quinoa", "Queratina vegetal", "Ceramida vegetal"],
            benefits: ["Ajuda na resistência visual", "Reduz sensação de fragilidade", "Melhora toque", "Apoia proteção cosmética"],
            imageLabel: "IMG-ANTI-QUEBRA",
            icon: Activity
          }
        ]
      }
    ],
    summaryRows: [
      ["Hidratação", "Pantenol e coco", "Secos e opacos", "Maciez e brilho"],
      ["Nutrição", "Ômegas e marula", "Ásperos", "Emoliência"],
      ["Restauração", "Queratina vegetal", "Porosos", "Reparação visual"],
      ["Cachos", "Linho e aloe", "Cacheados", "Definição"],
      ["Loiros", "Aminoácidos e violeta", "Descoloridos", "Neutralização visual"],
      ["Anti-quebra", "Quinoa e ceramida", "Frágeis", "Força cosmética"]
    ],
    indicationRows: [
      ["Fios secos", "Hidratação e Brilho", "Texturas leves e sensorial hidratante"],
      ["Fios fragilizados", "Restauração ou Anti-quebra", "Ativos reconstrutores sujeitos a comprovação"],
      ["Cachos", "Linha Cachos", "Definição, elasticidade e controle visual de frizz"]
    ],
    commercialTitle: "Uma vitrine capilar completa para diferentes perfis de consumo.",
    commercialText: "A linha permite criar famílias, kits e comunicação por necessidade, com apelo claro para varejo e e-commerce.",
    commercialMessage: "Capilar variada transforma diagnóstico simples em portfólio vendável.",
    territories: ["Hidratação", "Nutrição", "Restauração", "Cachos", "Loiros", "Detox", "Lisos", "Anti-quebra"],
    kits: [
      ["Kit Hidratação", "Shampoo, condicionador e máscara."],
      ["Kit Reconstrução", "Rotina para fios porosos e fragilizados."],
      ["Kit Cachos", "Limpeza, tratamento e finalização."]
    ],
    claimsSafe: safeClaims,
    claimsProof: proofClaims,
    claimsAvoid: avoidClaims,
    finalTitle: "Transforme variedade em estratégia capilar.",
    finalText: "Desenvolva uma linha por necessidade, com ativos reconhecíveis e narrativa de benefício clara.",
    faq: [
      ["A linha pode virar kits?", "Sim. A arquitetura foi pensada para kits por necessidade, rotina e tipo de cabelo."],
      ["Pode comunicar resultado imediato?", "Somente quando houver teste adequado para sustentar o claim."]
    ]
  },
  mascarasCapilares: {
    family: "capilar",
    eyebrow: "Capilar • Tratamento",
    title: "Máscaras Capilares.",
    subtitle: "Alta performance para hidratação, reconstrução, antiporosidade e densidade.",
    intro: "Coleção de máscaras para transformar tratamento capilar em experiência sensorial e argumento técnico.",
    image: "/products/mascaras-capilares/mascaras-capilares-placeholder.jpg",
    heroImageLabel: "IMG-HERO-MASCARAS-CAPILARES",
    badges: ["Desmaia Total", "Reconstrução", "Colágeno", "Antiporosidade", "Engrossa Fios"],
    conceptTitle: "Máscaras com narrativa técnica e sensorial de alto valor.",
    conceptText:
      "Cada máscara posiciona uma dor capilar: hidratação, reparação visual, porosidade, espessura, vitaminas e acabamento imediato.",
    conceptHighlight: "Tratamento de alto giro com percepção premium na aplicação.",
    conceptCards: [
      { title: "Textura rica", text: "Cremes densos, fios alinhados e sensorial de salão.", icon: Waves },
      { title: "Ativos protagonistas", text: "Queratina, pantenol, ceramidas, óleos e aminoácidos.", icon: FlaskConical },
      { title: "Kits inteligentes", text: "Arquitetura perfeita para cronogramas e combos.", icon: BadgeCheck }
    ],
    sections: [
      {
        id: "mascaras",
        eyebrow: "Coleção",
        title: "Sete máscaras para diferentes promessas cosméticas.",
        text: "Uma família para hidratar, reconstruir, alinhar, encorpar e entregar brilho.",
        products: [
          { name: "Desmaia Total", moment: "Alinhamento", headline: "Ácido hialurônico, tecnologia lamelar, mel vegetal e karité.", indication: "Fios rebeldes, ásperos e sem alinhamento.", actives: ["Ácido hialurônico", "Tecnologia lamelar", "Mel vegetal", "Karité"], benefits: ["Maciez", "Brilho", "Redução visual de frizz", "Toque sedoso"], imageLabel: "IMG-DESMAIA-TOTAL", icon: Sparkles },
          { name: "Ultra Hidratação", moment: "Hidratação", headline: "Pantenol, queratina quaternizada, algas e murumuru.", indication: "Cabelos ressecados e opacos.", actives: ["Pantenol", "Queratina quaternizada", "Algas", "Murumuru"], benefits: ["Hidratação", "Maleabilidade", "Maciez", "Brilho"], imageLabel: "IMG-ULTRA-HIDRATACAO", icon: Droplets },
          { name: "Ultra Reconstrutora", moment: "Reconstrução", headline: "Queratina vegetal, ácido itacônico, arginina, chia e ceramida vegetal.", indication: "Fios danificados por química ou calor.", actives: ["Queratina vegetal", "Ácido itacônico", "Arginina", "Ceramida vegetal"], benefits: ["Reparação visual", "Resistência cosmética", "Redução de aspereza", "Brilho"], imageLabel: "IMG-ULTRA-RECONSTRUTORA", icon: ShieldCheck },
          { name: "Teia de Colágeno", moment: "Elasticidade", headline: "Colágeno vegetal, pantenol e blend de óleos.", indication: "Cabelos sem movimento e com baixa maleabilidade.", actives: ["Colágeno vegetal", "Pantenol", "10 óleos"], benefits: ["Filme flexível", "Maciez", "Brilho", "Sensorial teia"], imageLabel: "IMG-TEIA-COLAGENO", icon: Waves },
          { name: "Antiporosidade", moment: "Selagem visual", headline: "Vinagre balsâmico, proteínas vegetais, ácido glicólico e abacate.", indication: "Fios porosos e desalinhados.", actives: ["Vinagre balsâmico", "Proteínas vegetais", "Ácido glicólico", "Abacate"], benefits: ["Alinhamento", "Brilho", "Redução de porosidade visual", "Toque liso"], imageLabel: "IMG-ANTIPOROSIDADE", icon: ShieldCheck },
          { name: "Engrossa Fios", moment: "Densidade", headline: "KAPs, arginina, quinoa, proteínas e argan.", indication: "Fios finos e com aparência frágil.", actives: ["KAPs", "Arginina", "Quinoa", "Argan"], benefits: ["Aparência encorpada", "Força cosmética", "Brilho", "Resistência visual"], imageLabel: "IMG-ENGROSSA-FIOS", icon: Activity },
          { name: "Bomba de Vitaminas", moment: "Vitalidade", headline: "Biotina, pantenol, vitamina E, niacinamida e pós-biótico mineral.", indication: "Cabelos sem vitalidade e brilho.", actives: ["Biotina", "Pantenol", "Vitamina E", "Niacinamida"], benefits: ["Vitalidade", "Brilho", "Cuidado antioxidante", "Maciez"], imageLabel: "IMG-BOMBA-VITAMINAS", icon: Leaf }
        ]
      }
    ],
    summaryRows: [
      ["Desmaia Total", "Lamelar e karité", "Frizz e aspereza", "Alinhamento visual"],
      ["Ultra Hidratação", "Pantenol e algas", "Ressecamento", "Maciez"],
      ["Ultra Reconstrutora", "Queratina e ceramida", "Dano químico", "Reparação visual"],
      ["Antiporosidade", "Glicólico e proteínas", "Porosidade", "Brilho"],
      ["Engrossa Fios", "KAPs e quinoa", "Fios finos", "Densidade visual"]
    ],
    indicationRows: [
      ["Fios porosos", "Antiporosidade", "Sensação de selagem e brilho"],
      ["Fios secos", "Ultra Hidratação", "Reposição de maciez"],
      ["Fios finos", "Engrossa Fios", "Aparência mais encorpada"]
    ],
    commercialTitle: "Máscaras que viram cronogramas, kits e rituais de salão.",
    commercialText: "A coleção amplia ticket médio e permite campanhas por benefício percebido.",
    commercialMessage: "Uma máscara para cada necessidade cria uma régua comercial simples e potente.",
    territories: ["Cronograma", "Salão em casa", "Reconstrução", "Antiporosidade", "Vitaminas", "Densidade"],
    kits: [["Cronograma Premium", "Hidratação, nutrição e reconstrução."], ["Kit Fios Porosos", "Antiporosidade + Ultra Reconstrutora."], ["Kit Brilho", "Desmaia Total + Bomba de Vitaminas."]],
    claimsSafe: safeClaims,
    claimsProof: proofClaims,
    claimsAvoid: avoidClaims,
    finalTitle: "Transforme tratamento capilar em linha de alto valor.",
    finalText: "Desenvolva máscaras por necessidade, com sensorial premium e linguagem técnica defensável.",
    faq: [["As máscaras podem ter claims de reconstrução?", "Sim, desde que a comunicação final seja sustentada por testes adequados."], ["A linha serve para cronograma?", "Sim. A arquitetura favorece cronogramas e kits por necessidade capilar."]]
  },
  oleosCapilares: {
    family: "capilar",
    eyebrow: "Capilar • Finalização",
    title: "Óleos Capilares.",
    subtitle: "Brilho, anti-frizz, proteção e acabamento premium.",
    intro: "Linha de óleos finalizadores para marcas que desejam sensorial sofisticado, toque leve e percepção imediata de cuidado.",
    image: "/products/oleos-capilares/oleos-capilares-placeholder.jpg",
    heroImageLabel: "IMG-HERO-OLEOS-CAPILARES",
    badges: ["Brilho", "Anti-frizz", "Pontas", "Proteção térmica", "Óleo extraordinário"],
    conceptTitle: "Finalizadores com apelo sensorial e performance cosmética.",
    conceptText: "Óleos capilares entregam brilho, maciez, disciplina e experiência premium em um produto de uso diário.",
    conceptHighlight: "Pequenas doses, alto valor percebido.",
    conceptCards: [
      { title: "Toque leve", text: "Acabamento sem pesar quando a fórmula é bem balanceada.", icon: Wind },
      { title: "Brilho imediato", text: "Filme cosmético para melhorar reflexão de luz.", icon: Sparkles },
      { title: "Portfólio versátil", text: "Nutrição, frizz, pontas, proteção e multifuncionalidade.", icon: BadgeCheck }
    ],
    sections: [
      {
        id: "oleos",
        eyebrow: "Portfólio",
        title: "Finalizadores para cada momento da rotina.",
        text: "Do reparador de pontas ao óleo extraordinário multifuncional.",
        products: [
          { name: "Óleo de Nutrição", moment: "Nutrir", headline: "Macadâmia, argan, abacate, jojoba e vitamina E.", indication: "Fios ressecados e opacos.", actives: ["Macadâmia", "Argan", "Abacate", "Jojoba", "Vitamina E"], benefits: ["Nutrição", "Brilho", "Maciez", "Toque sedoso"], imageLabel: "IMG-OLEO-NUTRICAO", icon: Leaf },
          { name: "Óleo Anti-Frizz Disciplinante", moment: "Disciplinar", headline: "Amaranto e esqualeno para controle visual de frizz.", indication: "Cabelos arrepiados, secos ou indisciplinados.", actives: ["Amaranto", "Esqualeno"], benefits: ["Reduz frizz visual", "Promove alinhamento", "Brilho", "Leveza"], imageLabel: "IMG-OLEO-ANTI-FRIZZ", icon: Wind },
          { name: "Óleo Reparador de Pontas", moment: "Pontas", headline: "Blend de silicones para selagem visual e brilho.", indication: "Pontas secas, ásperas e com aparência aberta.", actives: ["Blend de silicones"], benefits: ["Suaviza pontas", "Brilho", "Toque sedoso", "Aparência de pontas alinhadas"], imageLabel: "IMG-OLEO-REPARADOR-PONTAS", icon: Sparkles },
          { name: "Óleo de Brilho Intenso", moment: "Glow capilar", headline: "Feniltrimeticone para acabamento luminoso.", indication: "Fios sem brilho e acabamento opaco.", actives: ["Feniltrimeticone"], benefits: ["Alto brilho", "Toque seco", "Acabamento premium", "Sensação sofisticada"], imageLabel: "IMG-OLEO-BRILHO-INTENSO", icon: SunMedium },
          { name: "Óleo de Proteção Térmica e Solar", moment: "Proteger", headline: "Silicones e filtro solar com claims sujeitos a teste.", indication: "Cabelos expostos a calor, sol e agressões externas.", actives: ["Blend de silicones", "Filtro solar"], benefits: ["Ajuda a proteger", "Brilho", "Toque sedoso", "Reduz ressecamento visual"], imageLabel: "IMG-OLEO-PROTECAO-TERMICA-SOLAR", icon: ShieldCheck },
          { name: "Óleo Extraordinário", moment: "Multifuncional", headline: "Camomila, pracaxi, crambe, moringa, argan, aloe vera, marula e oliva.", indication: "Linha premium multifuncional para diferentes tipos de cabelo.", actives: ["Pracaxi", "Crambe", "Moringa", "Argan", "Marula", "Oliva"], benefits: ["Nutrição", "Brilho", "Maciez", "Acabamento multifuncional"], imageLabel: "IMG-OLEO-EXTRAORDINARIO", icon: BadgeCheck }
        ]
      }
    ],
    summaryRows: [
      ["Nutrição", "Óleos vegetais", "Fios secos", "Maciez"],
      ["Anti-frizz", "Amaranto e esqualeno", "Frizz", "Disciplina visual"],
      ["Pontas", "Silicones", "Pontas ásperas", "Selagem visual"],
      ["Brilho", "Feniltrimeticone", "Opacidade", "Luminosidade"],
      ["Proteção", "Silicones e filtro", "Calor e sol", "Claim sujeito a teste"]
    ],
    indicationRows: [["Opacidade", "Óleo de Brilho Intenso", "Finalização luminosa"], ["Pontas secas", "Reparador de Pontas", "Aparência alinhada"], ["Frizz", "Anti-Frizz", "Controle visual"]],
    commercialTitle: "Finalizadores de alta percepção para completar linhas capilares.",
    commercialText: "Óleos são produtos de uso recorrente e excelente complemento para kits de tratamento.",
    commercialMessage: "Um bom óleo transforma rotina em acabamento premium.",
    territories: ["Finalização", "Brilho", "Anti-frizz", "Proteção", "Pontas", "Multifuncional"],
    kits: [["Kit Brilho", "Máscara + óleo de brilho."], ["Kit Pontas", "Reparador + óleo nutritivo."], ["Kit Verão", "Óleo com proposta de proteção cosmética."]],
    claimsSafe: safeClaims,
    claimsProof: proofClaims,
    claimsAvoid: avoidClaims,
    finalTitle: "Crie uma linha de finalizadores com assinatura sensorial.",
    finalText: "Óleos capilares elevam a percepção da marca e fecham a rotina com brilho, maciez e sofisticação.",
    faq: [["Pode falar em proteção térmica?", "Sim, apenas com testes que sustentem o claim e limites claros de uso."], ["Óleo pesa no cabelo?", "A sensação depende da formulação, dosagem e tipo de fio."]]
  },
  perfumesCapilares: {
    family: "capilar",
    eyebrow: "Capilar • Sensorial",
    title: "Perfumes Capilares.",
    subtitle: "Fragrância, brilho e assinatura sensorial para os fios.",
    intro: "Plataforma de perfumes capilares para marcas que querem transformar haircare em experiência memorável.",
    image: "/products/perfumes-capilares/perfumes-capilares-placeholder.jpg",
    heroImageLabel: "IMG-HERO-PERFUMES-CAPILARES",
    badges: ["Fragrância", "Brilho", "Bifásico", "Óleo siliconado", "Premium"],
    conceptTitle: "Perfume capilar como extensão do cuidado e da identidade da marca.",
    conceptText: "A fragrância no cabelo cria lembrança, diferenciação e ritual. A linha pode atuar com brilho, frescor e toque leve.",
    conceptHighlight: "Hair mist técnico, seguro e com linguagem de beleza premium.",
    conceptCards: [
      { title: "Assinatura olfativa", text: "Famílias frutais, florais, gourmand, fresh e âmbar.", icon: Sparkles },
      { title: "Bases tecnológicas", text: "Óleo siliconado perfumado ou líquido bifásico.", icon: FlaskConical },
      { title: "Uso diário", text: "Produto de reaplicação e alto potencial de recompra.", icon: BadgeCheck }
    ],
    sections: [
      {
        id: "tecnologias",
        eyebrow: "Tecnologias",
        title: "Duas rotas para perfumar e finalizar.",
        text: "Bases ajustáveis por brilho, leveza e intensidade olfativa.",
        products: [
          { name: "Óleo Siliconado Perfumado", moment: "Brilho", headline: "Finalizador com brilho, toque sedoso e fragrância sofisticada.", indication: "Fios que buscam acabamento, perfume e controle visual de frizz.", actives: ["Blend de silicones", "Fragrância", "Agentes de brilho"], benefits: ["Perfuma os fios", "Promove brilho", "Toque sedoso", "Reduz frizz visual"], imageLabel: "IMG-OLEO-SILICONADO-PERFUMADO", icon: Sparkles },
          { name: "Líquido Bifásico Perfumado", moment: "Frescor", headline: "Hair mist leve com fase aquosa e fase emoliente.", indication: "Uso diário para refrescar e perfumar sem pesar.", actives: ["Fase aquosa", "Fase emoliente", "Fragrância"], benefits: ["Perfume leve", "Sensação de frescor", "Brilho suave", "Reaplicação prática"], imageLabel: "IMG-LIQUIDO-BIFASICO-PERFUMADO", icon: Wind }
        ]
      },
      {
        id: "familias",
        eyebrow: "Famílias olfativas",
        title: "Fragrâncias públicas sem uso de marcas de referência.",
        text: "A comunicação pode trabalhar territórios olfativos seguros e autorais.",
        products: [
          { name: "Frutal Tropical", moment: "Solar", headline: "Notas tropicais, frescas e vibrantes.", indication: "Linhas jovens, verão, brilho e corpo.", actives: ["Frutas tropicais", "Notas frescas"], benefits: ["Energia", "Frescor", "Assinatura tropical"], imageLabel: "IMG-FRUTAL-TROPICAL", icon: SunMedium },
          { name: "Floral Rosé", moment: "Elegante", headline: "Floral suave com fundo limpo e feminino.", indication: "Linhas premium e sensoriais.", actives: ["Floral", "Rosé", "Musk limpo"], benefits: ["Delicadeza", "Elegância", "Memória olfativa"], imageLabel: "IMG-FLORAL-ROSE", icon: Heart },
          { name: "Gourmand", moment: "Conforto", headline: "Notas doces, cremosas e envolventes.", indication: "Campanhas sensoriais e coleções especiais.", actives: ["Baunilha", "Caramelo", "Notas cremosas"], benefits: ["Aconchego", "Diferenciação", "Alto apelo comercial"], imageLabel: "IMG-GOURMAND-CAPILAR", icon: Sparkles }
        ]
      }
    ],
    summaryRows: [["Óleo siliconado", "Silicones e fragrância", "Brilho", "Finalização"], ["Bifásico", "Fase aquosa e emoliente", "Frescor", "Uso diário"], ["Frutal", "Notas tropicais", "Jovem", "Energia"], ["Floral", "Notas suaves", "Premium", "Elegância"]],
    indicationRows: [["Fios opacos", "Óleo siliconado", "Brilho e perfume"], ["Reaplicação", "Bifásico", "Frescor leve"], ["Linha autoral", "Família olfativa própria", "Assinatura de marca"]],
    commercialTitle: "Perfume capilar abre uma frente sensorial para o portfólio.",
    commercialText: "O produto conversa com beleza, autocuidado, presenteáveis e extensão de fragrância.",
    commercialMessage: "Perfumar os fios é criar memória de marca.",
    territories: ["Hair mist", "Fragrância", "Brilho", "Fresh", "Gourmand", "Premium"],
    kits: [["Kit Sensorial", "Perfume + óleo de brilho."], ["Kit Verão", "Bifásico fresh + linha capilar."], ["Kit Presente", "Fragrância autoral + embalagem especial."]],
    claimsSafe: safeClaims,
    claimsProof: proofClaims,
    claimsAvoid: avoidClaims,
    finalTitle: "Crie uma assinatura olfativa para sua linha capilar.",
    finalText: "Perfumes capilares ampliam experiência, diferenciação e recompra.",
    faq: [["Pode citar perfumes famosos?", "Não na copy pública. Referências devem ficar apenas em benchmark interno."], ["Perfume capilar trata o cabelo?", "A função principal é sensorial; benefícios cosméticos dependem da formulação e validação."]]
  },
  tonicosCapilares: {
    family: "capilar",
    eyebrow: "Capilar • Couro cabeludo",
    title: "Tônicos Capilares.",
    subtitle: "Cuidado direcionado para couro cabeludo, raiz e aparência dos fios.",
    intro: "Linha de tônicos para marcas que desejam atuar em oleosidade, caspa, queda cosmética, quebra, fortalecimento e densidade visual.",
    image: "/products/tonicos-capilares/tonicos-capilares-placeholder.jpg",
    heroImageLabel: "IMG-HERO-TONICOS-CAPILARES",
    badges: ["Oleosidade", "Antiqueda", "Anticaspa", "Antiquebra", "Fortalecedor", "Engrossador"],
    conceptTitle: "Tônicos aproximam haircare da lógica de tratamento do couro cabeludo.",
    conceptText: "Produtos leave-on permitem rotinas consultivas, ativos direcionados e maior percepção técnica.",
    conceptHighlight: "Cuidado da raiz com linguagem cosmética responsável.",
    conceptCards: [
      { title: "Raiz e couro cabeludo", text: "Aplicação localizada com sensorial leve.", icon: Activity },
      { title: "Ativos técnicos", text: "Cafeína, niacinamida, biotina, pantenol e complexos vegetais.", icon: FlaskConical },
      { title: "Claims sensíveis", text: "Queda, caspa e crescimento exigem validação robusta.", icon: ShieldCheck }
    ],
    sections: [
      {
        id: "tonicos",
        eyebrow: "Soluções",
        title: "Tônicos por necessidade do couro cabeludo.",
        text: "Arquitetura para cuidado diário e protocolos de marca.",
        products: [
          { name: "Controle de Oleosidade", moment: "Equilíbrio", headline: "Complexo vegetal, biotina, pantenol, xilitol, mentol e alecrim.", indication: "Couro cabeludo oleoso e raiz pesada.", actives: ["Complexo vegetal", "Biotina", "Pantenol", "Mentol", "Alecrim"], benefits: ["Sensação refrescante", "Controle visual da oleosidade", "Conforto", "Leveza"], imageLabel: "IMG-TONICO-OLEOSIDADE", icon: Droplets },
          { name: "Antiqueda Cosmético", moment: "Força", headline: "Baicapil, cafeína, niacinamida e complexo botânico.", indication: "Fios com queda cosmética ou fragilidade percebida.", actives: ["Baicapil", "Cafeína", "Niacinamida", "Complexo botânico"], benefits: ["Apoia fortalecimento cosmético", "Cuidado da raiz", "Aparência de fios mais fortes", "Rotina leave-on"], imageLabel: "IMG-TONICO-ANTIQUEDA", icon: Activity },
          { name: "Anticaspa Cetoconazol 1%", moment: "Caspa", headline: "Tecnologia sujeita a enquadramento regulatório específico.", indication: "Projetos que exigem avaliação regulatória para claim de caspa.", actives: ["Cetoconazol 1%"], benefits: ["Estratégia técnica", "Necessita validação", "Comunicação restrita", "Produto especializado"], imageLabel: "IMG-TONICO-CETOCONAZOL", icon: ShieldCheck },
          { name: "Anticaspa Octopirox 1%", moment: "Conforto", headline: "Piroctone olamine para propostas de controle cosmético da descamação.", indication: "Couro cabeludo com descamação visível, sujeito a testes.", actives: ["Octopirox 1%"], benefits: ["Apoio ao equilíbrio", "Sensação de limpeza", "Conforto", "Claim sujeito a comprovação"], imageLabel: "IMG-TONICO-OCTOPIROX", icon: ShieldCheck },
          { name: "Antiquebra", moment: "Resistência", headline: "Ativos para aparência de fios mais resistentes.", indication: "Fios frágeis que quebram com facilidade.", actives: ["Aminoácidos", "Pantenol", "Proteínas"], benefits: ["Reduz sensação de fragilidade", "Força cosmética", "Cuidado contínuo", "Maciez"], imageLabel: "IMG-TONICO-ANTIQUEDA", icon: Activity },
          { name: "Engrossador de Fio", moment: "Densidade", headline: "Ativos para aparência mais encorpada e raiz com mais presença.", indication: "Fios finos e sem densidade visual.", actives: ["Peptídeos", "Biotina", "Niacinamida"], benefits: ["Densidade visual", "Fios com aparência encorpada", "Cuidado da raiz", "Sensorial leve"], imageLabel: "IMG-TONICO-ENGROSSADOR", icon: Waves }
        ]
      }
    ],
    summaryRows: [["Oleosidade", "Mentol e vegetais", "Raiz oleosa", "Frescor"], ["Antiqueda", "Baicapil e cafeína", "Queda cosmética", "Força visual"], ["Anticaspa", "Cetoconazol/Octopirox", "Descamação", "Claim regulado"], ["Engrossador", "Peptídeos", "Fios finos", "Densidade visual"]],
    indicationRows: [["Raiz oleosa", "Controle de Oleosidade", "Frescor e leveza"], ["Queda cosmética", "Antiqueda", "Validação de claim"], ["Fios finos", "Engrossador", "Aparência encorpada"]],
    commercialTitle: "Tônicos criam uma linha técnica e recorrente para cuidado capilar.",
    commercialText: "A categoria permite venda consultiva e comunicação por necessidade do couro cabeludo.",
    commercialMessage: "Couro cabeludo cuidado sustenta uma narrativa capilar mais completa.",
    territories: ["Raiz", "Oleosidade", "Queda cosmética", "Caspa", "Fortalecimento", "Densidade"],
    kits: [["Kit Raiz Equilibrada", "Tônico oleosidade + shampoo detox."], ["Kit Força", "Tônico antiqueda + máscara fortificante."], ["Kit Densidade", "Tônico engrossador + finalizador."]],
    claimsSafe: safeClaims,
    claimsProof: proofClaims,
    claimsAvoid: avoidClaims,
    finalTitle: "Desenvolva uma linha de tônicos com precisão técnica.",
    finalText: "Do equilíbrio da raiz à densidade visual, a LQF estrutura fórmulas, claims e rotinas com cuidado regulatório.",
    faq: [["Pode prometer crescimento?", "Não sem comprovação. A comunicação deve usar linguagem cosmética e testes adequados."], ["Claims anticaspa são sensíveis?", "Sim. Exigem enquadramento regulatório e validação técnica."]]
  },
  essencialInfantil: {
    family: "infantil",
    eyebrow: "Bebê e Infantil • Low Poo",
    title: "Essencial Infantil.",
    subtitle: "Cuidado inteligente, suave e divertido para cabelos infantis.",
    intro: "Linha infantil com proposta Low Poo, sensorial delicado e ativos conhecidos por conforto, hidratação e desembaraço.",
    image: "/products/essencial-infantil/essencial-infantil-placeholder.jpg",
    heroImageLabel: "IMG-HERO-ESSENCIAL-INFANTIL",
    badges: ["Low Poo", "Infantil", "Vegano", "Perfume suave", "Sem sulfatos agressivos"],
    conceptTitle: "Uma rotina infantil simples, segura e com apelo afetivo.",
    conceptText: "A linha combina limpeza suave, desembaraço, hidratação, definição e praticidade para famílias.",
    conceptHighlight: "Cuidado infantil precisa ser delicado na experiência e rigoroso na validação.",
    conceptCards: [
      { title: "Suavidade", text: "Rotina pensada para conforto e fácil enxágue.", icon: Heart },
      { title: "Desembaraço", text: "Produtos para reduzir atrito e facilitar o penteado.", icon: Waves },
      { title: "Claims validados", text: "Sem lágrimas, hipoalergênico e uso infantil exigem testes.", icon: ShieldCheck }
    ],
    sections: [
      {
        id: "rotina-infantil",
        eyebrow: "Produtos",
        title: "Uma linha completa para rotina infantil.",
        text: "Da limpeza à finalização, com ativos suaves e comunicação responsável.",
        products: [
          { name: "Shampoo Low Poo", moment: "Limpar", headline: "Limpeza suave para cabelos infantis.", indication: "Cabelos infantis que precisam de limpeza sem agressividade.", actives: ["Aloe vera", "Camomila", "Calêndula", "Pantenol"], benefits: ["Limpa com suavidade", "Ajuda no conforto", "Perfume delicado", "Fácil enxágue"], imageLabel: "IMG-SHAMPOO-LOW-POO-INFANTIL", icon: Droplets },
          { name: "Condicionador Desembaraçante", moment: "Desembaraçar", headline: "Maciez e penteabilidade para a rotina diária.", indication: "Fios embaraçados, secos ou difíceis de pentear.", actives: ["Aloe vera", "Romã", "Pró-vitamina B5"], benefits: ["Ajuda no desembaraço", "Reduz atrito", "Promove maciez", "Toque leve"], imageLabel: "IMG-CONDICIONADOR-INFANTIL", icon: Waves },
          { name: "Máscara Hidratante", moment: "Hidratar", headline: "Cuidado extra para fios secos ou cacheados.", indication: "Cabelos infantis que precisam de hidratação ocasional.", actives: ["Aloe vera", "Calêndula", "Pantenol"], benefits: ["Hidratação", "Maciez", "Brilho", "Conforto"], imageLabel: "IMG-MASCARA-INFANTIL", icon: Heart },
          { name: "Creme de Pentear", moment: "Finalizar", headline: "Desembaraço, forma e controle visual de frizz.", indication: "Cabelos ondulados, cacheados ou com frizz visual.", actives: ["Aloe vera", "Camomila", "Pantenol"], benefits: ["Facilita penteado", "Ajuda na definição", "Reduz frizz visual", "Maciez"], imageLabel: "IMG-CREME-PENTEAR-INFANTIL", icon: Sparkles },
          { name: "Ativador de Cachos", moment: "Definir", headline: "Formato, leveza e toque macio para cachinhos.", indication: "Cabelos cacheados infantis.", actives: ["Aloe vera", "Romã", "Pantenol"], benefits: ["Definição", "Maciez", "Brilho", "Controle visual"], imageLabel: "IMG-ATIVADOR-CACHOS-INFANTIL", icon: Waves },
          { name: "Spray Desembaraçante", moment: "Praticidade", headline: "Ajuda rápida para pentear sem enxágue.", indication: "Rotina diária antes da escola ou após banho.", actives: ["Aloe vera", "Camomila", "Calêndula"], benefits: ["Desembaraço rápido", "Perfume suave", "Leveza", "Praticidade"], imageLabel: "IMG-SPRAY-DESEMBARACANTE-INFANTIL", icon: Wind }
        ]
      }
    ],
    summaryRows: [["Shampoo", "Aloe e camomila", "Limpeza", "Suavidade"], ["Condicionador", "Romã e B5", "Embaraço", "Maciez"], ["Máscara", "Calêndula", "Secura", "Hidratação"], ["Creme", "Aloe", "Finalização", "Penteabilidade"]],
    indicationRows: [["Cabelos cacheados", "Ativador + creme", "Definição com leveza"], ["Rotina diária", "Shampoo + condicionador", "Limpeza e desembaraço"], ["Cabelos secos", "Máscara", "Hidratação ocasional"]],
    commercialTitle: "Linha infantil com portfólio completo e comunicação responsável.",
    commercialText: "A arquitetura funciona para farmácias, perfumarias, e-commerce e kits familiares.",
    commercialMessage: "Cuidado infantil precisa unir delicadeza, performance e segurança.",
    territories: ["Infantil", "Low Poo", "Cachos", "Desembaraço", "Perfume suave", "Vegano"],
    kits: [["Kit Banho", "Shampoo + condicionador."], ["Kit Cachinhos", "Creme + ativador."], ["Kit Família", "Rotina completa infantil."]],
    claimsSafe: ["Limpa suavemente", "Ajuda no desembaraço", "Promove maciez", "Perfume suave", "Auxilia na rotina infantil"],
    claimsProof: ["Sem lágrimas", "Hipoalergênico", "Dermatologicamente testado", "Pediatra testado", "Uso infantil específico"],
    claimsAvoid: ["Pode ser usado por qualquer criança sem restrição", "Não arde os olhos sem teste", "Resolve dermatites", "Substitui orientação médica"],
    finalTitle: "Crie uma linha infantil com suavidade e rigor técnico.",
    finalText: "A LQF estrutura fórmulas, testes e linguagem segura para o cuidado infantil.",
    faq: [["Pode comunicar sem lágrimas?", "Somente com testes específicos."], ["A linha é Low Poo?", "A proposta pode ser Low Poo, desde que a formulação final siga essa diretriz."]]
  },
  enxaguantesBucais: {
    family: "bucal",
    eyebrow: "Bucal • Higiene complementar",
    title: "Enxaguantes Bucais.",
    subtitle: "Hálito fresco, cuidado diário e plataformas para diferentes públicos.",
    intro: "Linha de enxaguantes com versões infantis, adultas, sem álcool, clareadora cosmética e para dentes sensíveis.",
    image: "/products/enxaguantes-bucais/enxaguantes-bucais-placeholder.jpg",
    heroImageLabel: "IMG-HERO-ENXAGUANTES-BUCAIS",
    badges: ["Infantil", "Sem álcool", "Flúor", "Frescor", "Sensibilidade", "Clareador cosmético"],
    conceptTitle: "Higiene bucal complementar com segmentação de alto giro.",
    conceptText: "A categoria permite propostas por público, sabor, sensorial, presença ou ausência de álcool e necessidades específicas.",
    conceptHighlight: "Cuidado bucal exige linguagem precisa, validação e enquadramento regulatório.",
    conceptCards: [
      { title: "Rotina diária", text: "Uso complementar à escovação e fio dental.", icon: Droplets },
      { title: "Segmentação", text: "Infantil, adulto, sem álcool, sensível e clareador visual.", icon: BadgeCheck },
      { title: "Claims regulados", text: "Flúor, sensibilidade e ação antimicrobiana exigem validação.", icon: ShieldCheck }
    ],
    sections: [
      {
        id: "portfolio-bucal",
        eyebrow: "Portfólio",
        title: "Enxaguantes para diferentes estratégias de linha.",
        text: "Sabores, sensoriais e ativos organizados por público e objetivo cosmético.",
        products: [
          { name: "Infantil sem álcool", moment: "Kids", headline: "Morango mentolado, uva mentolada e menta suave.", indication: "Crianças acima da idade validada, sempre com supervisão de adulto.", actives: ["Flúor sob validação", "Aromas infantis", "Base sem álcool"], benefits: ["Hálito fresco", "Rotina lúdica", "Sabor agradável", "Apoio à higiene"], imageLabel: "IMG-ENXAGUANTE-INFANTIL", icon: Heart },
          { name: "Adulto com álcool e flúor", moment: "Tradicional", headline: "Herbal, frescor, gelado e tropical.", indication: "Consumidores adultos que buscam sensação intensa de limpeza.", actives: ["Flúor sob validação", "Álcool", "Aromas refrescantes"], benefits: ["Frescor intenso", "Hálito agradável", "Rotina complementar", "Sensorial clássico"], imageLabel: "IMG-ENXAGUANTE-ADULTO-ALCOOL", icon: Wind },
          { name: "Adulto sem álcool", moment: "Conforto", headline: "Versão frutal para rotina mais suave.", indication: "Consumidores que preferem enxaguante sem álcool.", actives: ["Base sem álcool", "Aroma frutal"], benefits: ["Frescor suave", "Conforto", "Uso diário", "Sabor agradável"], imageLabel: "IMG-ENXAGUANTE-SEM-ALCOOL", icon: Droplets },
          { name: "Clareador cosmético", moment: "Aparência", headline: "Óleos essenciais, mentol e bicarbonato.", indication: "Apoio à remoção de manchas superficiais conforme validação.", actives: ["Melaleuca", "Menta", "Eucalipto", "Toranja", "Bicarbonato"], benefits: ["Frescor", "Apoio à limpeza", "Aparência mais cuidada", "Claim sujeito a teste"], imageLabel: "IMG-ENXAGUANTE-CLAREADOR", icon: Sparkles },
          { name: "Dentes sensíveis", moment: "Conforto", headline: "Cloreto de potássio e arginina com óleos essenciais.", indication: "Consumidores com desconforto associado à sensibilidade, conforme validação.", actives: ["Cloreto de potássio", "Arginina", "Óleos essenciais"], benefits: ["Conforto", "Frescor", "Apoio à rotina", "Claim sujeito a teste"], imageLabel: "IMG-ENXAGUANTE-SENSIVE", icon: ShieldCheck }
        ]
      }
    ],
    summaryRows: [["Infantil", "Sem álcool e sabores", "Crianças", "Rotina lúdica"], ["Adulto", "Álcool e flúor", "Frescor intenso", "Hálito"], ["Sem álcool", "Base suave", "Conforto", "Uso diário"], ["Clareador", "Bicarbonato", "Manchas superficiais", "Aparência"], ["Sensíveis", "Arginina e potássio", "Sensibilidade", "Conforto"]],
    indicationRows: [["Público infantil", "Infantil sem álcool", "Supervisão adulta e validação"], ["Frescor intenso", "Adulto com álcool", "Sensorial tradicional"], ["Conforto", "Sem álcool ou sensíveis", "Uso diário suave"]],
    commercialTitle: "Linha bucal com arquitetura por público, sabor e necessidade.",
    commercialText: "Enxaguantes permitem ampliar marca para higiene diária com produtos de alto giro.",
    commercialMessage: "Cada versão precisa equilibrar frescor, segurança e comunicação regulatória.",
    territories: ["Bucal", "Hálito", "Sem álcool", "Infantil", "Sensibilidade", "Clareador visual"],
    kits: [["Kit Kids", "Sabores infantis sem álcool."], ["Kit Fresh", "Versões adultas refrescantes."], ["Kit Sensitive", "Enxaguante sensível + rotina bucal."]],
    claimsSafe: ["Hálito fresco", "Auxilia na higiene bucal", "Promove sensação de limpeza", "Sabor agradável", "Uso complementar"],
    claimsProof: ["Flúor", "Ação antimicrobiana", "Sensibilidade", "Clareamento", "Proteção anticárie"],
    claimsAvoid: ["Cura sensibilidade", "Clareia definitivamente", "Substitui escovação", "Elimina bactérias sem teste"],
    finalTitle: "Desenvolva uma linha bucal com precisão regulatória.",
    finalText: "A LQF estrutura sabores, sensoriais, ativos e claims para enxaguantes de alto potencial comercial.",
    faq: [["Enxaguante substitui escovação?", "Não. A comunicação segura é de uso complementar à higiene bucal."], ["Pode falar em clareamento?", "Prefira neutralização visual ou remoção de manchas superficiais apenas com validação."]]
  },
  cuidadosUnhasCuticulas: {
    family: "unhas",
    eyebrow: "Unhas • Nail care",
    title: "Cuidados para Unhas e Cutículas.",
    subtitle: "Do protocolo profissional ao home care diário.",
    intro:
      "Linha completa para higienizar, amolecer, tratar, nutrir, proteger, fortalecer e auxiliar na redução do hábito de roer unhas.",
    image: "/products/cuidados-unhas-cuticulas/cuidados-unhas-cuticulas-placeholder.jpg",
    heroImageLabel: "IMG-HERO-LINHA-UNHAS-CUTICULAS",
    badges: ["Profissional", "Home Care", "Cutículas", "Fortalecimento", "Antirroer", "Nutrição"],
    conceptTitle: "Nail care completo em todas as etapas do cuidado.",
    conceptText:
      "Unhas e cutículas precisam de uma rotina que vai da higienização ao fortalecimento, com produtos para protocolo profissional e manutenção em casa.",
    conceptHighlight: "Cada etapa tem um produto. Cada produto tem uma função clara no cuidado das unhas.",
    conceptCards: [
      { title: "Higienizar", text: "Preparação antes do procedimento.", icon: Droplets },
      { title: "Nutrir", text: "Óleos e ceras para cuidado diário.", icon: Leaf },
      { title: "Fortalecer", text: "Séruns e ativos para aparência de unhas mais resistentes.", icon: ShieldCheck }
    ],
    sections: [
      {
        id: "protocolo-unhas",
        eyebrow: "Protocolo",
        title: "Protocolo profissional + rotina home care.",
        text: "Produtos que organizam o cuidado das unhas em uma jornada de alto valor percebido.",
        products: [
          { name: "Spray Higienizante para Unhas", moment: "Higienizar", headline: "Preparação pré-procedimento com apoio à higiene.", indication: "Protocolos profissionais de manicure e nail designer.", actives: ["Clorexidina", "Sesquicaprilato de xilitila"], benefits: ["Higieniza", "Promove frescor", "Prepara a área", "Apoia boas práticas"], imageLabel: "IMG-SPRAY-ANTISSEPTICO-UNHAS", icon: Droplets },
          { name: "Amolecedor de Cutículas Glicerina", moment: "Amolecer", headline: "Ação rápida para procedimento profissional.", indication: "Rotina de manicure com foco em agilidade.", actives: ["Glicerina", "Emolientes dermatológicos"], benefits: ["Facilita remoção", "Conforto", "Não deixa resíduo oleoso conforme validação", "Uso profissional"], imageLabel: "IMG-AMOLECEDOR-CUTICULAS-GLICERINA", icon: Waves },
          { name: "Amolecedor Karité + Cravo", moment: "Amolecer e nutrir", headline: "Amolece enquanto nutre e proporciona conforto.", indication: "Protocolos premium de cuticulagem.", actives: ["Manteiga de karité", "Óleo de cravo"], benefits: ["Emoliência", "Nutrição", "Conforto", "Barreira nutritiva"], imageLabel: "IMG-AMOLECEDOR-CUTICULAS-KARITE-CRAVO", icon: Leaf },
          { name: "Óleo Hidratante para Cutículas", moment: "Nutrir", headline: "Nutrição diária para cutículas macias.", indication: "Home care e manutenção entre procedimentos.", actives: ["Óleo de abacate", "Semente de uva", "Vitamina E", "Cravo"], benefits: ["Nutrição", "Maciez", "Reduz ressecamento", "Aparência cuidada"], imageLabel: "IMG-OLEO-HIDRATANTE-CUTICULAS", icon: Sparkles },
          { name: "Cera Protetora", moment: "Tratamento intensivo", headline: "Camada protetora para unhas e cutículas ressecadas.", indication: "Unhas e cutículas com aparência fragilizada.", actives: ["Neonyca", "Melaleuca", "Karité"], benefits: ["Filme protetor", "Nutrição", "Aparência mais resistente", "Cuidado intensivo"], imageLabel: "IMG-CERA-PROTETORA-UNHAS-CUTICULAS", icon: ShieldCheck },
          { name: "Sérum Fortalecedor", moment: "Fortalecer", headline: "Tripla ação cosmética para unhas frágeis.", indication: "Unhas opacas ou com aparência enfraquecida.", actives: ["Neonyca", "Melaleuca", "Óleo de cravo"], benefits: ["Fortalecimento visual", "Secagem rápida conforme teste", "Uso prático", "Pode ser usado sobre esmalte conforme validação"], imageLabel: "IMG-SERUM-FORTALECEDOR-UNHAS", icon: Activity },
          { name: "Base Inibidora", moment: "Auxiliar hábito", headline: "Sabor amargo para desencorajar roer unhas.", indication: "Apoio cosmético e comportamental para adultos e crianças sob supervisão.", actives: ["Benzoato de denatônio", "Extrato de gengibre"], benefits: ["Ajuda a desencorajar o hábito", "Uso contínuo", "Aplicação prática", "Claim infantil sujeito à validação"], imageLabel: "IMG-BASE-INIBIDORA-ROER-UNHAS", icon: Brush }
        ]
      }
    ],
    summaryRows: [["Spray", "Clorexidina", "Higienização", "Pré-procedimento"], ["Amolecedor", "Glicerina", "Cutículas", "Procedimento rápido"], ["Óleo", "Óleos vegetais", "Home care", "Nutrição"], ["Cera", "Karité e melaleuca", "Ressecamento", "Proteção cosmética"], ["Sérum", "Neonyca", "Unhas frágeis", "Fortalecimento visual"], ["Base amarga", "Denatônio", "Roer unhas", "Apoio comportamental"]],
    indicationRows: [["Profissional", "Spray + amolecedor", "Protocolo de manicure"], ["Home care", "Óleo + cera", "Manutenção diária"], ["Hábito de roer", "Base inibidora", "Supervisão e linguagem segura"]],
    commercialTitle: "Uma linha completa para nail designers, farmácias e home care.",
    commercialText: "A plataforma transforma produtos individuais em protocolo de cuidado com maior valor percebido.",
    commercialMessage: "Um produto para cada etapa. Um protocolo para unhas mais bonitas todos os dias.",
    territories: ["Nail care", "Cutículas", "Home care", "Protocolo profissional", "Antirroer", "Kits presenteáveis"],
    kits: [["Kit Profissional", "Spray + amolecedor + óleo protetor."], ["Kit Cutículas Perfeitas", "Óleo + cera hidratante + cera protetora."], ["Kit Antirroer", "Base amarga + sérum + cera."]],
    claimsSafe: ["Hidrata cutículas", "Ajuda a reduzir ressecamento", "Promove maciez", "Facilita remoção de cutículas", "Ajuda a desencorajar o hábito por sabor amargo"],
    claimsProof: ["Antisséptico", "Ação antimicrobiana", "Uso infantil", "Fortalece unhas", "Aumenta espessura", "Secagem rápida"],
    claimsAvoid: ["Cura micose", "Elimina fungos", "Corrige definitivamente o hábito", "Faz a unha crescer garantido"],
    finalTitle: "Transforme cuidado de unhas em protocolo completo.",
    finalText: "Higienização, amolecimento, nutrição, proteção, fortalecimento e apoio contra o hábito de roer unhas em uma plataforma de nail care.",
    faq: [["A base resolve onicofagia?", "Não. Ela ajuda a desencorajar por sabor amargo, mas hábitos persistentes podem exigir acompanhamento adequado."], ["Spray previne fungos?", "Claims antimicrobianos exigem testes e enquadramento regulatório."]]
  },
  basesUnhas: {
    family: "unhas",
    eyebrow: "Unhas • Bases",
    title: "Bases para Unhas.",
    subtitle: "Bases de tratamento para unhas mais fortes, protegidas, hidratadas e bonitas.",
    intro: "Linha completa de bases para transformar a esmaltação em cuidado, com opções para fortalecer, hidratar, nutrir, proteger, camuflar e reestruturar.",
    image: "/products/bases-unhas/bases-unhas-placeholder.jpg",
    heroImageLabel: "IMG-HERO-LINHA-BASES-UNHAS",
    badges: ["Fortalecimento", "Hidratação", "Crescimento saudável", "Camuflagem", "Antioxidante", "7 em 1"],
    conceptTitle: "A base deixou de ser apenas preparação. Agora é tratamento.",
    conceptText:
      "A base é o primeiro contato da unha com a esmaltação e pode entregar ativos, proteção, brilho, nivelamento, hidratação, resistência e cuidado contínuo.",
    conceptHighlight: "Cada base trata uma necessidade. Cada esmaltação vira uma oportunidade de cuidado.",
    conceptCards: [
      { title: "Fortalecer", text: "Para unhas frágeis, moles ou quebradiças.", icon: ShieldCheck },
      { title: "Hidratar", text: "Para unhas ressecadas, opacas e sem flexibilidade.", icon: Droplets },
      { title: "Camuflar", text: "Neutralização visual do aspecto amarelado.", icon: Sparkles }
    ],
    sections: [
      {
        id: "bases",
        eyebrow: "Coleção",
        title: "Onze bases. Uma solução para cada necessidade.",
        text: "Bases para endurecer, nutrir, hidratar, proteger, camuflar e reestruturar a aparência das unhas.",
        products: [
          { name: "Base Endurecedora", moment: "Resistência", headline: "Blindagem e sensação de dureza para unhas fracas.", indication: "Unhas frágeis, moles e quebradiças.", actives: ["Formol conforme regulamentação"], benefits: ["Ajuda a endurecer", "Camada protetora", "Brilho", "Claim restrito"], imageLabel: "IMG-BASE-ENDURECEDORA", icon: ShieldCheck },
          { name: "Base Estimula Crescimento", moment: "Crescimento saudável", headline: "Pantenol e proteínas hidrolisadas para unhas longas e cuidadas.", indication: "Unhas que quebram durante o crescimento.", actives: ["Pró-vitamina B5", "Proteínas hidrolisadas"], benefits: ["Hidratação", "Flexibilidade", "Apoio ao crescimento saudável conforme validação", "Aparência fortalecida"], imageLabel: "IMG-BASE-ESTIMULA-CRESCIMENTO", icon: Leaf },
          { name: "Base Nutritiva", moment: "Nutrição", headline: "Pantenol e complexo de 10 aminoácidos.", indication: "Unhas sem vida e com aparência enfraquecida.", actives: ["Pantenol", "10 aminoácidos"], benefits: ["Nutrição cosmética", "Vitalidade", "Aparência mais saudável", "Reduz quebras conforme validação"], imageLabel: "IMG-BASE-NUTRITIVA", icon: FlaskConical },
          { name: "Base Rejuvenescedora", moment: "Revitalização", headline: "Cálcio, creatina e ácido hialurônico.", indication: "Unhas ressecadas, descamadas ou maduras.", actives: ["Cálcio", "Creatina", "Ácido hialurônico"], benefits: ["Hidratação", "Flexibilidade", "Aparência revitalizada", "Conforto"], imageLabel: "IMG-BASE-REJUVENESCEDORA", icon: Sparkles },
          { name: "Base Unhas Saudáveis", moment: "Proteção diária", headline: "Colágeno vegetal e melaleuca para cuidado diário.", indication: "Uso frequente antes da esmaltação.", actives: ["Colágeno vegetal", "Melaleuca"], benefits: ["Proteção cosmética", "Aparência resistente", "Hidratação", "Claim antimicrobiano sujeito a teste"], imageLabel: "IMG-BASE-UNHAS-SAUDAVEIS", icon: Heart },
          { name: "Base Hidratação", moment: "Hidratar", headline: "Óleo de coco e pantenol para brilho e flexibilidade.", indication: "Unhas ressecadas e opacas.", actives: ["Óleo de coco", "Pantenol"], benefits: ["Hidrata", "Brilho natural", "Flexibilidade", "Aspecto saudável"], imageLabel: "IMG-BASE-HIDRATACAO", icon: Droplets },
          { name: "Base 7x1", moment: "Multibenefício", headline: "Cálcio, creatina, AH, vitamina E, queratina vegana e argan.", indication: "Múltiplas necessidades em uma base.", actives: ["Cálcio", "Creatina", "Ácido hialurônico", "Vitamina E", "Queratina vegana"], benefits: ["Nutrição", "Nivelamento visual", "Brilho", "Cuidado completo"], imageLabel: "IMG-BASE-7X1", icon: BadgeCheck },
          { name: "Base Antioxidante", moment: "Defesa cosmética", headline: "Resveratrol, vitamina C, vitamina E e semente de uva.", indication: "Unhas expostas a agressões externas.", actives: ["Resveratrol", "Vitamina C", "Vitamina E", "Uva"], benefits: ["Ação antioxidante cosmética", "Vitalidade", "Brilho", "Proteção visual"], imageLabel: "IMG-BASE-ANTIOXIDANTE", icon: SunMedium },
          { name: "Base Proteção Total", moment: "Escudo", headline: "Melaleuca, cravo, biotina e copaíba.", indication: "Unhas finas, frágeis ou expostas a desgaste.", actives: ["Melaleuca", "Cravo", "Biotina", "Copaíba"], benefits: ["Barreira cosmética", "Aparência fortalecida", "Proteção diária", "Claims sensíveis sujeitos a teste"], imageLabel: "IMG-BASE-PROTECAO-TOTAL", icon: ShieldCheck },
          { name: "Base Camuflagem", moment: "Efeito óptico", headline: "Neutralização visual do aspecto amarelado.", indication: "Unhas amareladas visualmente ou esmaltes claros.", actives: ["Clareador óptico UV"], benefits: ["Camuflagem visual", "Luminosidade", "Efeito óptico imediato", "Não comunicar clareamento definitivo"], imageLabel: "IMG-BASE-CAMUFLAGEM", icon: Sparkles },
          { name: "Base Reestruturadora", moment: "Reforço físico", headline: "Fibras de nylon para trama protetora.", indication: "Unhas muito fragilizadas ou pós-procedimentos, conforme validação.", actives: ["Fibras de nylon"], benefits: ["Reforço físico visual", "Trama protetora", "Aparência mais resistente", "Claim sujeito a teste"], imageLabel: "IMG-BASE-REESTRUTURADORA", icon: Activity }
        ]
      }
    ],
    summaryRows: [["Endurecedora", "Formol", "Unhas moles", "Resistência"], ["Crescimento", "Pantenol", "Quebra ao crescer", "Flexibilidade"], ["Nutritiva", "Aminoácidos", "Sem vida", "Vitalidade"], ["Camuflagem", "Óptico UV", "Amarelado", "Neutralização visual"], ["Reestruturadora", "Nylon", "Fragilizadas", "Reforço físico"]],
    indicationRows: [["Unhas frágeis", "Endurecedora, 7x1 ou Reestruturadora", "Atenção regulatória"], ["Unhas ressecadas", "Hidratação, Nutritiva ou Rejuvenescedora", "Conforto e brilho"], ["Unhas amareladas", "Camuflagem", "Efeito óptico seguro"]],
    commercialTitle: "Uma base para cada necessidade. Uma esmaltação com valor de tratamento.",
    commercialText: "A linha transforma um produto tradicional em plataforma de tratamento e alto valor agregado.",
    commercialMessage: "A base certa transforma a esmaltação em tratamento.",
    territories: ["Base tratamento", "Unhas fortes", "Hidratação", "Camuflagem", "Antioxidante", "Pós-unhas artificiais"],
    kits: [["Kit Unhas Fortes", "Endurecedora + Reestruturadora + 7x1."], ["Kit Hidratação", "Hidratação + Nutritiva + Rejuvenescedora."], ["Kit Esmaltação Perfeita", "Camuflagem + 7x1 + Unhas Saudáveis."]],
    claimsSafe: ["Ajuda a fortalecer a aparência", "Promove brilho", "Hidrata a placa ungueal", "Neutraliza visualmente o aspecto amarelado", "Forma camada protetora"],
    claimsProof: ["Formol em concentração permitida", "Crescimento", "Endurecimento", "Resistência", "Clareamento", "Recuperação pós-artificiais"],
    claimsAvoid: ["Cura unhas fracas", "Faz a unha crescer garantido", "Clareia definitivamente", "Substitui tratamento dermatológico"],
    finalTitle: "Transforme base em tratamento de alto valor.",
    finalText: "Fortalecimento, hidratação, nutrição, crescimento saudável, proteção, camuflagem e reestruturação em uma plataforma premium.",
    faq: [["Base substitui tratamento dermatológico?", "Não. A finalidade é cosmética e alterações persistentes devem ser avaliadas por profissional de saúde."], ["Base com formol exige cuidado?", "Sim. Deve seguir limites, rotulagem, segurança e requisitos regulatórios aplicáveis."]]
  }
} satisfies Record<string, Preset>;

export type InnovationLandingKey = keyof typeof innovationLandingPresets;

export function getInnovationLandingConfig(key: InnovationLandingKey): TechnicalLandingConfig {
  return makeConfig(innovationLandingPresets[key]);
}
