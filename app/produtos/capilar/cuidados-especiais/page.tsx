import type { Metadata } from "next";
import { Activity, BadgeCheck, Beaker, Droplets, FlaskConical, Layers3, Leaf, Moon, ShieldCheck, Sparkles, SunMedium, Waves } from "lucide-react";
import { TechnicalRoutineLanding, type TechnicalLandingConfig, type TechnicalProduct } from "@/app/produtos/facial/_components/TechnicalRoutineLanding";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.capilarCuidadosEspeciais;

const image = "/products/cuidados-especiais-capilar/cuidados-especiais-capilar-placeholder.jpg";

const claimNote = "Claims de queda, caspa, metais, cloro, proteção UV, proteção térmica, reconstrução, resistência, oleosidade e resultados percentuais exigem testes adequados e validação regulatória.";

const antiquedaProducts: TechnicalProduct[] = [
  {
    name: "Shampoo Antiqueda",
    moment: "Antiqueda",
    functionText: "Limpeza e vitalidade",
    headline: "Higienização para couro cabeludo com sensação de força e frescor.",
    indication: "Produto para rotina de limpeza da linha antiqueda cosmética, com foco em couro cabeludo, vitalidade dos fios e equilíbrio sensorial.",
    actives: ["Complexo botânico", "Bioex Capilar", "Pantenol", "Cafeína", "Niacinamida"],
    benefits: ["Ajuda no cuidado do couro cabeludo", "Contribui para vitalidade", "Promove sensação de limpeza", "Auxilia no controle visual da oleosidade"],
    usage: "Aplicar nos cabelos úmidos, massagear couro cabeludo e fios, enxaguar e repetir se necessário.",
    regulatory: claimNote,
    imageLabel: "IMG-SHAMPOO-ANTIQUEDA",
    icon: Leaf
  },
  {
    name: "Condicionador Antiqueda",
    moment: "Antiqueda",
    functionText: "Equilíbrio e desembaraço",
    headline: "Condicionamento leve para maciez e penteabilidade.",
    indication: "Complemento da rotina antiqueda cosmética para melhorar sensorial, brilho e desembaraço sem pesar.",
    actives: ["Pantenol", "Aminoácidos", "Niacinamida", "Agentes condicionantes"],
    benefits: ["Melhora maciez", "Facilita desembaraço", "Contribui para brilho", "Ajuda no toque sedoso"],
    usage: "Aplicar no comprimento e pontas após o shampoo, pausar por alguns minutos e enxaguar.",
    regulatory: claimNote,
    imageLabel: "IMG-CONDICIONADOR-ANTIQUEDA",
    icon: Waves
  },
  {
    name: "Tônico Capilar Antiqueda",
    moment: "Uso diário",
    functionText: "Cuidado intensivo do couro cabeludo",
    headline: "Etapa central da comunicação antiqueda cosmética.",
    indication: "Tônico para uso diário no couro cabeludo, com ativos botânicos e estimulantes cosméticos voltados à vitalidade dos fios.",
    actives: ["Scutellaria baicalensis", "Triticum vulgare", "Glycine max sprout", "Cafeína", "Niacinamida"],
    benefits: ["Ajuda a fortalecer o couro cabeludo", "Contribui para vitalidade dos fios", "Apoia a rotina antiqueda cosmética", "Promove sensação estimulante"],
    usage: "Agitar antes de aplicar. Aplicar diariamente no couro cabeludo e massagear para distribuir uniformemente.",
    care: ["Apresentar a rotina como sistema completo para claims antiqueda.", "Claims de redução de queda e crescimento exigem comprovação."],
    regulatory: claimNote,
    imageLabel: "IMG-TONICO-CAPILAR-ANTIQUEDA",
    icon: Activity
  }
];

const terapiaProducts: TechnicalProduct[] = [
  {
    name: "Terapia Capilar Higienizador Estimulante",
    moment: "Passo 1",
    functionText: "Pré-limpeza cremosa",
    headline: "Prepara o couro cabeludo com frescor e conforto.",
    indication: "Higienizador cremoso para pré-limpeza do couro cabeludo, com sensação calmante, frescor e apoio ao equilíbrio da oleosidade.",
    actives: ["Argila branca", "Camomila", "Jojoba", "Abacate", "Xilitol verde"],
    benefits: ["Ajuda no controle visual da oleosidade", "Promove sensação de conforto", "Auxilia na remoção de impurezas", "Prepara para o shampoo"],
    usage: "Umedecer os cabelos, aplicar no couro cabeludo e massagear. Sem enxaguar, seguir para o shampoo passo 2.",
    regulatory: claimNote,
    imageLabel: "IMG-HIGIENIZADOR-ESTIMULANTE",
    icon: Beaker
  },
  {
    name: "Terapia Capilar Shampoo",
    moment: "Passo 2",
    functionText: "Limpeza equilibrante",
    headline: "Limpeza para couro cabeludo e fibra com sensação purificante.",
    indication: "Shampoo com ativos vegetais para remoção da oleosidade excessiva e cuidado do couro cabeludo sem comprometer o conforto dos fios.",
    actives: ["Agrião", "Sálvia", "Limão", "Quilaia", "Hera", "Bardana", "Xilitol verde"],
    benefits: ["Limpeza equilibrante", "Sensação purificante", "Conforto para couro cabeludo", "Fios mais leves"],
    usage: "Aplicar após o higienizador, massagear couro cabeludo e fibra, deixar agir por alguns minutos e enxaguar.",
    regulatory: claimNote,
    imageLabel: "IMG-TERAPIA-CAPILAR-SHAMPOO",
    icon: Droplets
  },
  {
    name: "Terapia Capilar Máscara",
    moment: "Passo 3",
    functionText: "Condicionamento e proteção",
    headline: "Acabamento com alinhamento, brilho e filme protetor.",
    indication: "Máscara leve para estender o cuidado do couro cabeludo à fibra capilar, com reposição lipídica e sensorial disciplinado.",
    actives: ["Pró-vitamina B5", "Proteínas de trigo", "Proteínas de soja", "Proteínas de milho", "Proteínas de arroz", "Jojoba", "Abacate"],
    benefits: ["Desembaraço", "Alinhamento", "Brilho", "Maciez", "Filme protetor", "Sensação de fios disciplinados"],
    usage: "Aplicar nos cabelos úmidos após o shampoo, massagear mecha a mecha, pausar e enxaguar suavemente.",
    regulatory: claimNote,
    imageLabel: "IMG-TERAPIA-CAPILAR-MASCARA",
    icon: Sparkles
  }
];

const specialProducts: TechnicalProduct[] = [
  {
    name: "Shampoo Metal Detox",
    moment: "Detox",
    functionText: "Limpeza de resíduos",
    headline: "Detox para metais, cloro, poluição e resíduos acumulados.",
    indication: "Shampoo para cabelos expostos à poluição, cloro, praia, piscina, resíduos metálicos e agressões externas.",
    actives: ["Poliitaconato de sódio", "Citrato de sódio", "Sapindus mukorossi", "Gengibre", "Alecrim"],
    benefits: ["Ajuda a remover resíduos minerais", "Contribui para brilho", "Facilita penteabilidade", "Sensação de couro cabeludo limpo"],
    usage: "Aplicar nos cabelos úmidos, massagear até formar espuma, pausar por alguns minutos e enxaguar.",
    regulatory: claimNote,
    imageLabel: "IMG-SHAMPOO-METAL-DETOX",
    icon: FlaskConical
  },
  {
    name: "Shampoo Anticaspa",
    moment: "Couro cabeludo",
    functionText: "Descamação e oleosidade",
    headline: "Cuidado intensivo para descamação visível e oleosidade.",
    indication: "Fórmula para auxiliar no controle da descamação visível e da oleosidade do couro cabeludo, com suporte ao sensorial dos fios.",
    actives: ["Octopirox", "Biotina", "Pró-vitamina B5", "Oligoelementos Zn, Ca e Mg", "Algas vermelhas", "Alcaçuz", "Xilitol verde"],
    benefits: ["Auxilia no controle da descamação visível", "Ajuda no controle da oleosidade", "Sensação de limpeza prolongada", "Frescor"],
    usage: "Aplicar nos cabelos úmidos, massagear couro cabeludo e fibra, deixar agir por alguns minutos e enxaguar.",
    care: ["Cetoconazol e claims anticaspa podem envolver enquadramento regulatório específico."],
    regulatory: claimNote,
    imageLabel: "IMG-SHAMPOO-ANTICASPA",
    icon: ShieldCheck
  },
  {
    name: "Reconstrução Capilar Imediata Unidose",
    moment: "Passos 1 e 2",
    functionText: "Protocolo intensivo",
    headline: "Para fios quebradiços, porosos, frágeis e elásticos.",
    indication: "Tratamento em duas etapas para melhorar a aparência de fios fragilizados, porosos e sensibilizados.",
    actives: ["Extrato de tília", "Ácido itacônico", "Arginina", "D-pantenol", "Linhaça", "Chia", "Queratina vegetal", "Creatina"],
    benefits: ["Ajuda a preencher irregularidades", "Melhora sensação de força", "Promove brilho", "Contribui para redução visual da porosidade"],
    usage: "Aplicar o passo 1 mecha a mecha após higienização, pausar com calor médio, aplicar o passo 2 sem enxaguar, pausar novamente e enxaguar abundantemente.",
    regulatory: claimNote,
    imageLabel: "IMG-RECONSTRUCAO-UNIDOSE",
    icon: Layers3
  },
  {
    name: "Óleo Lamelar",
    moment: "Lamelar",
    functionText: "Brilho e alinhamento",
    headline: "Tecnologia lamelar para brilho, toque sedoso e redução visual do frizz.",
    indication: "Óleo para deposição de estruturas finas e sobrepostas na haste capilar, criando superfície mais lisa e uniforme.",
    actives: ["Óleo de Amaranthus caudatus", "Blend de 10 óleos vegetais"],
    benefits: ["Reposição lipídica", "Ajuda a reduzir frizz", "Melhora sensorial instantâneo", "Forma filme protetor aveludado"],
    usage: "Borrifar nos cabelos molhados após a higienização, enluvar mecha a mecha, pausar e enxaguar.",
    regulatory: claimNote,
    imageLabel: "IMG-OLEO-LAMELAR",
    icon: Sparkles
  },
  {
    name: "Fluido Lamelar",
    moment: "Lamelar",
    functionText: "Reparação disciplinante",
    headline: "Ação lamelar com brilho, maciez, penteabilidade e toque aveludado.",
    indication: "Fluido para corrigir irregularidades da fibra, alinhar a superfície dos fios e melhorar a aparência geral.",
    actives: ["Carbocisteína", "Aminoácidos", "Quinoa"],
    benefits: ["Ajuda na selagem das cutículas", "Redução visual da porosidade", "Brilho intenso", "Alinhamento"],
    usage: "Aplicar nos cabelos úmidos após higienização ou nos cabelos secos para pentear e disciplinar.",
    regulatory: claimNote,
    imageLabel: "IMG-FLUIDO-LAMELAR",
    icon: Waves
  },
  {
    name: "Leave-in Proteção Térmica e Danos Solares",
    moment: "Proteção",
    functionText: "Praia, piscina e calor",
    headline: "Proteção térmica, solar e condicionamento para rotinas externas.",
    indication: "Leave-in condicionante, emoliente e protetor para calor, exposição solar, ressecamento, praia e piscina.",
    actives: ["Água integral de coco vetorizada", "Polissacarídeos de algas marinhas", "Linhaça", "Filtro UVB"],
    benefits: ["Hidratação", "Condicionamento", "Maciez", "Brilho", "Ação anti-frizz imediata", "Ajuda na proteção da cor"],
    usage: "Aplicar nos cabelos secos ou úmidos antes do uso de secador, prancha ou exposição solar.",
    regulatory: claimNote,
    imageLabel: "IMG-LEAVE-IN-PRAIA-PISCINA",
    icon: SunMedium
  },
  {
    name: "Máscara Acidificante",
    moment: "Acidificação",
    functionText: "pH e cutículas",
    headline: "Equilíbrio de pH, selagem de cutículas e brilho.",
    indication: "Máscara para fios ásperos, opacos, porosos ou danificados, com foco em retenção de água e nutrientes.",
    actives: ["Vinagre balsâmico", "Alfa e poli-hidroxiácidos", "Polissacarídeos", "Proteínas vegetais", "Óleo de abacate"],
    benefits: ["Ajuda a equilibrar o pH", "Selagem das cutículas", "Brilho", "Maciez", "Redução visual do frizz"],
    usage: "Aplicar após o shampoo, enluvar mecha a mecha, pausar de 3 a 5 minutos e enxaguar.",
    regulatory: claimNote,
    imageLabel: "IMG-MASCARA-ACIDIFICANTE",
    icon: Beaker
  },
  {
    name: "Máscara Hair Líquida",
    moment: "Nutrição prática",
    functionText: "Brilho intenso",
    headline: "Condicionamento premium, brilho intenso e nutrição prática.",
    indication: "Máscara líquida para hidratação, nutrição e condicionamento premium, rica em óleos vegetais.",
    actives: ["Avelã", "Pêssego", "Macadâmia", "Canola", "Argan", "Chia", "Kukui", "Goji berry", "Marula", "Monoi"],
    benefits: ["Nutrição", "Brilho intenso", "Proteção da fibra", "Toque sedoso", "Praticidade de uso"],
    usage: "Aplicar nos cabelos molhados como máscara convencional ou nos fios úmidos/secos como pré-escova.",
    regulatory: claimNote,
    imageLabel: "IMG-MASCARA-HAIR-LIQUIDA",
    icon: Droplets
  },
  {
    name: "Tratamento Capilar Noturno",
    moment: "Noite",
    functionText: "Sono de beleza",
    headline: "Nutrição e hidratação para cabelos secos enquanto dorme.",
    indication: "Creme leve de aplicação noturna, rapidamente absorvido pela fibra capilar, com sensação de revitalização ao despertar.",
    actives: ["Carbocisteína", "Aminoácidos", "Murumuru", "Babaçu", "Vitamina E", "Óleos de abacate, açaí, algodão, amêndoas, buriti, copaíba e girassol"],
    benefits: ["Nutrição noturna", "Hidratação", "Maciez", "Brilho", "Redução visual do ressecamento"],
    usage: "Aplicar nos cabelos secos à noite, enluvando as mechas. Deixar agir durante a noite e higienizar no dia seguinte.",
    regulatory: claimNote,
    imageLabel: "IMG-TRATAMENTO-CAPILAR-NOTURNO",
    icon: Moon
  }
];

const cronogramaProducts: TechnicalProduct[] = [
  {
    name: "Etapa Hidratação",
    moment: "Semana 1",
    functionText: "Reposição de água",
    headline: "Maciez, elasticidade e movimento natural.",
    indication: "Etapa para ajudar a manter água na fibra capilar e reduzir sensação de ressecamento.",
    actives: ["Pró-vitamina B5", "Blend de 12 óleos vegetais"],
    benefits: ["Ajuda a manter água na fibra", "Melhora maciez", "Contribui para brilho natural"],
    usage: "Após lavar com shampoo, aplicar no comprimento e pontas, pausar por 3 minutos e enxaguar.",
    regulatory: claimNote,
    imageLabel: "IMG-CRONOGRAMA-HIDRATACAO",
    icon: Droplets
  },
  {
    name: "Etapa Nutrição",
    moment: "Semana 2",
    functionText: "Reposição lipídica",
    headline: "Proteção contra ressecamento, frizz e perda de hidratação.",
    indication: "Etapa para repor camada lipídica, promover toque sedoso e ajudar a manter cutículas alinhadas.",
    actives: ["Blend de 10 óleos", "Queratina vegetal"],
    benefits: ["Reposição lipídica", "Reduz frizz", "Promove toque sedoso", "Ajuda no alinhamento"],
    usage: "Aplicar nos fios úmidos após shampoo, massagear, pausar por 3 minutos e enxaguar.",
    regulatory: claimNote,
    imageLabel: "IMG-CRONOGRAMA-NUTRICAO",
    icon: Leaf
  },
  {
    name: "Etapa Reconstrução",
    moment: "Semana 3",
    functionText: "Reposição proteica",
    headline: "Para fios fragilizados, quebradiços ou afinados.",
    indication: "Etapa para apoiar a reconstrução da aparência da fibra e sensação de fios mais fortes.",
    actives: ["Proteínas vegetais hidrolisadas", "Glicerídeos da soja", "Fração insaponificável do karité"],
    benefits: ["Apoio à aparência da fibra", "Sensação de fios mais fortes", "Brilho", "Alinhamento"],
    usage: "Aplicar após o shampoo, pausar por 3 minutos e enxaguar completamente. Não é necessário condicionador.",
    regulatory: claimNote,
    imageLabel: "IMG-CRONOGRAMA-RECONSTRUCAO",
    icon: ShieldCheck
  }
];

const config: TechnicalLandingConfig = {
  eyebrow: "Capilar • Performance 360",
  title: "Linha Capilar Performance 360.",
  subtitle: "Resultados imediatos e cuidado completo para couro cabeludo e fibra capilar.",
  intro: "Uma plataforma capilar de alta performance para queda cosmética, couro cabeludo, detox, caspa, reconstrução, proteção térmica, lamelares, acidificação, tratamento noturno e cronograma capilar.",
  image,
  heroImageLabel: "IMG-HERO-CAPILAR-PERFORMANCE-360",
  badges: ["Couro cabeludo", "Fibra capilar", "Reconstrução", "Detox", "Lamelares", "Cronograma capilar"],
  primaryCta: "Conhecer tecnologias",
  secondaryCta: "Ver protocolos capilares",
  anchors: [["Conceito", "#conceito"], ["Antiqueda", "#antiqueda"], ["Terapia Capilar", "#terapia-capilar"], ["Cuidados Especiais", "#cuidados-especiais"], ["Cronograma", "#cronograma-capilar"], ["Indicação", "#indicacao"], ["Kits", "#kits"], ["Claims", "#claims"], ["FAQ", "#faq"]],
  labels: {
    architectureEyebrow: "Arquitetura da plataforma",
    summaryEyebrow: "Mapa 360",
    summaryTitle: "Categorias, protocolos e funções principais.",
    summaryText: "Uma visão clara para treinamento comercial, criação de kits e montagem de protocolos capilares.",
    indicationTitle: "Escolha o tratamento pelo que o cabelo precisa agora.",
    indicationText: "A arquitetura ajuda a orientar produtos, protocolos e kits por necessidade de couro cabeludo ou fibra capilar.",
    claimsTitle: "Claims capilares com linguagem segura e validação técnica.",
    claimsText: "Produtos com apelos de queda, caspa, metais, proteção, reconstrução e resultados imediatos exigem comunicação cuidadosa e comprovação adequada."
  },
  concept: {
    imageLabel: "IMG-CONCEITO-HAIR-PERFORMANCE-LAB",
    title: "Cuidado capilar de alta performance, da raiz às pontas.",
    text: "Os cabelos precisam de soluções diferentes em momentos diferentes. O couro cabeludo pode pedir equilíbrio, controle de oleosidade, conforto ou estímulo; a fibra pode precisar de limpeza profunda, reposição proteica, nutrição, proteção térmica, redução de porosidade ou brilho imediato.",
    highlight: "O cabelo bonito começa no couro cabeludo, mas precisa de tecnologia em toda a fibra.",
    cards: [
      { title: "Couro cabeludo equilibrado", text: "Produtos para oleosidade, queda cosmética, descamação e conforto.", icon: Activity },
      { title: "Fibra capilar protegida", text: "Tratamentos para porosidade, quebra, frizz e ressecamento.", icon: ShieldCheck },
      { title: "Protocolos inteligentes", text: "Passos organizados para experiência e percepção de resultado.", icon: Layers3 },
      { title: "Tecnologias de performance", text: "Botânicos, proteínas, aminoácidos, quelantes, lamelares e óleos.", icon: FlaskConical },
      { title: "Resultado sensorial", text: "Brilho, maciez, alinhamento, desembaraço e toque sedoso.", icon: Sparkles }
    ]
  },
  architecture: {
    imageLabel: "IMG-ARQUITETURA-CAPILAR-360",
    title: "Uma plataforma completa para diferentes necessidades capilares.",
    text: "A arquitetura permite combinar rotina diária, protocolos profissionais, cuidados pontuais e tratamentos intensivos.",
    groups: [
      { title: "Linha Antiqueda", items: ["Shampoo", "Condicionador", "Tônico capilar"], functionText: "Cuidado completo para couro cabeludo, força e vitalidade dos fios." },
      { title: "Terapia Capilar 3 Passos", items: ["Higienizador estimulante", "Shampoo", "Máscara"], functionText: "Protocolo para couro cabeludo sensível, oleoso ou com necessidade de cuidado especial." },
      { title: "Cuidados Especiais", items: ["Metal Detox", "Anticaspa", "Reconstrução unidose", "Lamelares", "Leave-in", "Acidificante", "Hair líquida", "Noturno"], functionText: "Soluções técnicas para necessidades específicas dos fios." },
      { title: "Cronograma Capilar", items: ["Hidratação", "Nutrição", "Reconstrução"], functionText: "Sequência inteligente para manter fios equilibrados, protegidos e com aparência saudável." }
    ]
  },
  sections: [
    { id: "antiqueda", eyebrow: "Linha Antiqueda", title: "Cuidado completo para couro cabeludo, força e vitalidade dos fios.", text: "Shampoo, condicionador e tônico capilar combinam ativos botânicos, aminoácidos, pantenol, cafeína e niacinamida para auxiliar no cuidado da queda capilar cosmética.", imageLabel: "IMG-LINHA-ANTIQUEDA", products: antiquedaProducts },
    { id: "terapia-capilar", eyebrow: "Terapia Capilar 3 Passos", title: "Cuidado intensivo para couro cabeludo e fibra capilar.", text: "Protocolo em três passos que une equilíbrio da oleosidade, conforto do couro cabeludo, limpeza inteligente e acabamento da fibra.", imageLabel: "IMG-TERAPIA-CAPILAR-3-PASSOS", products: terapiaProducts },
    { id: "cuidados-especiais", eyebrow: "Cuidados Capilares Especiais", title: "Soluções técnicas para necessidades específicas dos fios.", text: "Produtos de alta performance para detox de metais, descamação, reconstrução, lamelares, proteção, acidificação, nutrição líquida e tratamento noturno.", imageLabel: "IMG-CUIDADOS-CAPILARES-ESPECIAIS", products: specialProducts },
    { id: "cronograma-capilar", eyebrow: "Cronograma Capilar", title: "Hidratar, nutrir e reconstruir em sequência inteligente.", text: "O cronograma capilar organiza os cuidados em três etapas essenciais para fios com aparência mais equilibrada, protegida e saudável.", imageLabel: "IMG-CRONOGRAMA-CAPILAR", products: cronogramaProducts }
  ],
  summaryImageLabel: "IMG-INDICACAO-CAPILAR-360",
  summaryRows: [
    ["Couro cabeludo", "Sistema", "Linha Antiqueda + Tônico", "Vitalidade, força e cuidado do couro cabeludo"],
    ["Couro cabeludo", "3 passos", "Terapia Capilar", "Equilíbrio, frescor e conforto"],
    ["Detox", "Pontual", "Shampoo Metal Detox", "Limpeza de resíduos, brilho e penteabilidade"],
    ["Descamação", "Pontual", "Shampoo Anticaspa", "Sensação de controle e limpeza"],
    ["Reconstrução", "Intensivo", "Reconstrução Unidose", "Força, maciez e aparência mais resistente"],
    ["Lamelares", "Finalização", "Óleo ou Fluido Lamelar", "Alinhamento, brilho e toque sedoso"],
    ["Proteção", "Leave-in", "Proteção Térmica e Danos Solares", "Proteção, maciez e brilho"],
    ["Cronograma", "Mensal", "Hidratação + Nutrição + Reconstrução", "Rotina completa e consultiva"]
  ],
  indicationImageLabel: "IMG-INDICACAO-CAPILAR-360",
  indicationRows: [
    ["Queda capilar cosmética", "Linha Antiqueda + Tônico", "Vitalidade, força e cuidado do couro cabeludo"],
    ["Oleosidade e desconforto", "Terapia Capilar 3 Passos", "Equilíbrio, frescor e conforto"],
    ["Resíduos de piscina, praia e metais", "Shampoo Metal Detox", "Limpeza detox e brilho"],
    ["Descamação visível", "Shampoo Anticaspa", "Sensação de controle e limpeza"],
    ["Fios frágeis e elásticos", "Reconstrução Unidose", "Força, maciez e aparência mais resistente"],
    ["Frizz e porosidade", "Óleo Lamelar ou Fluido Lamelar", "Alinhamento, brilho e toque sedoso"],
    ["Cabelos ásperos e opacos", "Máscara Acidificante", "pH equilibrado, brilho e selagem"],
    ["Cabelos secos durante a noite", "Tratamento Capilar Noturno", "Nutrição enquanto dorme"],
    ["Rotina mensal completa", "Cronograma Capilar", "Hidratação, nutrição e reconstrução"]
  ],
  commercial: {
    title: "Uma plataforma capilar completa para marcas que querem ir além do shampoo e condicionador.",
    text: "A Linha Capilar Performance 360 organiza o cuidado capilar em categorias claras e altamente comerciais: queda, couro cabeludo, detox, caspa, reconstrução, lamelares, proteção, acidificação, tratamento noturno e cronograma.",
    territories: ["Haircare profissional", "Couro cabeludo saudável", "Antiqueda cosmético", "Detox capilar", "Anticaspa", "Reconstrução capilar", "Lamelares", "Proteção térmica", "Praia e piscina", "Acidificação capilar", "Cronograma capilar", "Tratamento noturno"],
    message: "Uma solução para cada necessidade. Um protocolo para cada momento do cabelo.",
    kits: [
      ["Kit Antiqueda", "Shampoo + Condicionador + Tônico."],
      ["Kit Terapia Couro Cabeludo", "Higienizador Estimulante + Shampoo + Máscara."],
      ["Kit Detox Urbano", "Shampoo Metal Detox + Fluido Lamelar + Leave-in."],
      ["Kit Reconstrução Intensiva", "Reconstrução Unidose + Máscara Acidificante + Tratamento Noturno."],
      ["Kit Brilho Lamelar", "Óleo Lamelar + Fluido Lamelar + Máscara Hair Líquida."],
      ["Kit Praia e Piscina", "Shampoo Metal Detox + Leave-in + Máscara Acidificante."],
      ["Kit Cronograma Capilar", "Hidratação + Nutrição + Reconstrução."]
    ]
  },
  claims: {
    safe: ["Ajuda a limpar os fios", "Promove sensação de couro cabeludo fresco", "Ajuda a controlar a oleosidade visual", "Promove brilho", "Melhora maciez", "Ajuda a reduzir o frizz", "Facilita desembaraço", "Fios com aparência mais alinhada", "Ritual capilar completo"],
    proof: ["Redução de queda", "Crescimento capilar", "Ação anticaspa", "Cetoconazol", "Redução de oleosidade", "Remoção de metais", "Remoção de cloro", "Proteção térmica", "Proteção UVB", "Reconstrução imediata", "Resistência à quebra", "Liso prolongado termoativado"],
    avoid: ["Cura queda", "Elimina caspa definitivamente", "Faz crescer cabelo garantido", "Reconstrói 100% da fibra", "Remove todos os metais", "Proteção total contra sol e calor", "Resultado garantido na primeira aplicação"]
  },
  finalCta: {
    imageLabel: "IMG-CTA-CAPILAR-PERFORMANCE-360",
    title: "Transforme cuidado capilar em protocolo de alta performance.",
    text: "Da raiz às pontas, a Linha Capilar Performance 360 entrega uma plataforma para marcas que desejam lançar produtos técnicos, sensoriais e comerciais em uma arquitetura clara.",
    primary: "Criar minha linha capilar performance",
    secondary: "Ver protocolos completos"
  },
  faq: [
    ["A linha antiqueda trata queda capilar?", "A proposta é auxiliar no cuidado cosmético da queda capilar, especialmente quando associada à fragilidade dos fios e ao desequilíbrio do couro cabeludo. Claims específicos exigem comprovação."],
    ["O Shampoo Anticaspa pode usar cetoconazol?", "O uso de cetoconazol pode envolver enquadramento regulatório específico. A comunicação pública deve ser validada conforme legislação aplicável e documentação técnica."],
    ["O Metal Detox remove metais pesados?", "A tecnologia inclui agentes quelantes para auxiliar na remoção de resíduos minerais e metálicos. Claims específicos de remoção de metais, cloro e poluentes precisam de testes."],
    ["Qual produto usar para cabelo poroso e com frizz?", "Óleo Lamelar, Fluido Lamelar, Máscara Acidificante e Reconstrução Unidose são boas opções, conforme nível de dano e necessidade da fibra."],
    ["Qual produto usar antes de praia, piscina ou secador?", "O Leave-in Proteção Térmica e Danos Solares foi desenvolvido para esse território, com claims de proteção sujeitos à validação."],
    ["O Cronograma Capilar substitui todos os tratamentos?", "Não necessariamente. Ele organiza hidratação, nutrição e reconstrução, mas pode ser combinado com cuidados especiais conforme necessidade."]
  ],
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

export default function CapilarCuidadosEspeciaisPage() {
  return <TechnicalRoutineLanding config={config} />;
}
