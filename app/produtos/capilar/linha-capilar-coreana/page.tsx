import type { Metadata } from "next";
import { BadgeCheck, Droplets, FlaskConical, Layers3, ShieldCheck, Sparkles, TestTube2, Waves } from "lucide-react";
import { TechnicalRoutineLanding, type TechnicalLandingConfig } from "@/app/produtos/facial/_components/TechnicalRoutineLanding";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.linhaCapilarCoreana;

const image = "/products/linha-capilar-coreana/linha-capilar-coreana-placeholder.jpg";

const mascaraIntensiva = [
  {
    name: "Máscara Intensiva Recuperação Total",
    moment: "Tratamento intensivo",
    functionText: "Hidratação, estrutura, brilho e maciez em uma etapa",
    headline: "Uma etapa premium para cabelos danificados, opacos, porosos e ressecados.",
    indication: "Máscara de alto sensorial para cabelos danificados, opacos, porosos, ásperos e ressecados. A proposta combina ativos de inspiração skincare para melhorar a aparência da fibra, promover toque macio, brilho e sensação de recuperação cosmética.",
    actives: ["Blend de aminoácidos com PCA", "Esqualano", "Fitoesterol em glutamato", "Extrato de geleia real", "Óleo de ojon"],
    benefits: ["Ajuda na hidratação da fibra", "Promove toque mais macio", "Contribui para brilho e aparência saudável", "Ajuda a melhorar a aparência de porosidade", "Sensorial premium em uma única etapa"],
    usage: "Aplicar nos fios limpos e úmidos, distribuir no comprimento e pontas, deixar agir conforme orientação da fórmula final e enxaguar completamente.",
    care: ["Evitar contato com os olhos.", "Claims de recuperação total, reconstrução e resultado imediato devem ser comprovados."],
    regulatory: "Claims de reconstrução, resistência, quebra, porosidade e resultados imediatos exigem testes adequados.",
    imageLabel: "IMG-MASCARA-INTENSIVA-RECUPERACAO-TOTAL",
    icon: Sparkles
  }
];

const hidratacao3Passos = [
  {
    name: "Shampoo Hidratante",
    moment: "Passo 1",
    functionText: "Limpeza confortável",
    headline: "Limpeza inicial para preparar a fibra para o ritual de hidratação.",
    indication: "Shampoo para cabelos secos, opacos, sem movimento e sem emoliência, desenvolvido para iniciar o protocolo coreano com limpeza equilibrada e sensorial confortável.",
    actives: ["Sistema de limpeza suave", "Ativos condicionantes", "Sensorial hidratante"],
    benefits: ["Remove impurezas", "Prepara o fio para tratamento", "Ajuda a preservar conforto", "Deixa a fibra pronta para condicionamento"],
    usage: "Aplicar no couro cabeludo e fios molhados, massagear suavemente e enxaguar. Repetir se necessário.",
    care: ["Evitar contato com os olhos."],
    regulatory: "Claims de hidratação já na lavagem devem ser validados por testes sensoriais e instrumentais.",
    imageLabel: "IMG-SHAMPOO-HIDRATANTE-COREANO",
    icon: Waves
  },
  {
    name: "Condicionador Hidratante",
    moment: "Passo 2",
    functionText: "Emoliência e alinhamento",
    headline: "Condicionamento leve para toque macio e fios mais alinhados.",
    indication: "Condicionador para complementar o shampoo hidratante e melhorar a sensação de desembaraço, emoliência e alinhamento da fibra capilar.",
    actives: ["Agentes condicionantes", "Emolientes capilares", "Sistema de brilho"],
    benefits: ["Ajuda no desembaraço", "Promove maciez", "Melhora a sensação de alinhamento", "Contribui para brilho"],
    usage: "Aplicar no comprimento e pontas após o shampoo, massagear, pausar conforme orientação e enxaguar.",
    care: ["Não aplicar diretamente sobre couro cabeludo sensibilizado sem validação."],
    regulatory: "Claims de alinhamento, brilho e proteção da cor devem ser comprovados quando usados publicamente.",
    imageLabel: "IMG-CONDICIONADOR-HIDRATANTE-COREANO",
    icon: Droplets
  },
  {
    name: "Máscara de Hidratação Intensiva",
    moment: "Passo 3",
    functionText: "Hidratação profunda",
    headline: "Ritual coreano de hidratação profunda para fios secos e ressecados.",
    indication: "Máscara para cabelos secos, opacos, sem movimento e sem emoliência, com ativos que ajudam a melhorar o toque, a maleabilidade e a aparência saudável da fibra.",
    actives: ["Algas marinhas", "Peptídeos bioativos", "Óleo de jojoba", "Óleo de rosa mosqueta", "Arginina", "Queratina"],
    benefits: ["Hidratação intensa", "Ajuda na maciez", "Melhora a sensação de movimento", "Contribui para brilho", "Apoia a aparência de fibra saudável"],
    usage: "Aplicar após o condicionador ou conforme protocolo definido, distribuir no comprimento e pontas, pausar e enxaguar.",
    care: ["Ajustar frequência conforme condição do fio."],
    regulatory: "Claims de hidratação profunda, reparação e resultado imediato devem ser sustentados por testes adequados.",
    imageLabel: "IMG-MASCARA-HIDRATACAO-INTENSIVA-COREANA",
    icon: FlaskConical
  }
];

const reconstrucao4Passos = [
  {
    name: "Shampoo Purificante",
    moment: "Passo 1",
    functionText: "Preparar a fibra",
    headline: "Limpeza preparatória para protocolo reconstrutor.",
    indication: "Shampoo para iniciar o protocolo em cabelos danificados, elásticos, porosos ou sensibilizados por química, preparando os fios para as próximas etapas.",
    actives: ["Sistema purificante", "Limpeza técnica", "Preparo de fibra"],
    benefits: ["Remove resíduos", "Prepara para tratamento", "Ajuda na sensação de limpeza técnica", "Favorece distribuição dos passos seguintes"],
    usage: "Aplicar nos cabelos molhados, massagear suavemente e enxaguar.",
    care: ["Evitar uso excessivo em fios muito sensibilizados."],
    regulatory: "Claims purificantes e antirresíduos exigem validação técnica.",
    imageLabel: "IMG-SHAMPOO-PURIFICANTE-RECONSTRUCAO",
    icon: Waves
  },
  {
    name: "Condicionador Neutralizante",
    moment: "Passo 2",
    functionText: "Equilibrar sensorial",
    headline: "Etapa de equilíbrio para preparar o fio para máscaras técnicas.",
    indication: "Condicionador neutralizante para complementar a limpeza e favorecer toque mais organizado antes das etapas de reconstrução e hidratação profunda.",
    actives: ["Sistema condicionante", "Equilíbrio sensorial", "Agentes de alinhamento"],
    benefits: ["Ajuda no alinhamento", "Melhora a sensação de desembaraço", "Prepara a fibra", "Contribui para toque macio"],
    usage: "Aplicar no comprimento e pontas, pausar conforme orientação e enxaguar.",
    care: ["Validar compatibilidade com protocolos químicos."],
    regulatory: "Claims de neutralização devem estar tecnicamente respaldados.",
    imageLabel: "IMG-CONDICIONADOR-NEUTRALIZANTE",
    icon: BadgeCheck
  },
  {
    name: "Máscara Reconstrutora",
    moment: "Passo 3",
    functionText: "Reconstrução cosmética",
    headline: "Ativos proteicos e ácido hialurônico para aparência de fibra mais resistente.",
    indication: "Máscara reconstrutora para cabelos danificados, elásticos, porosos ou sensibilizados por química, com ativos de suporte à aparência de resistência, estrutura e densidade cosmética.",
    actives: ["Queratina", "Proteínas hidrolisadas de trigo", "Proteínas de milho", "Proteínas de soja", "Creatina", "Ácido hialurônico"],
    benefits: ["Ajuda a melhorar a aparência de fibra fragilizada", "Contribui para sensação de força", "Melhora toque e estrutura cosmética", "Apoia brilho e alinhamento"],
    usage: "Aplicar após as etapas de limpeza e condicionamento técnico, pausar conforme orientação e enxaguar.",
    care: ["Evitar excesso de frequência em fios rígidos.", "Resultados de reconstrução exigem comprovação."],
    regulatory: "Claims de reconstrução, quebra, resistência, elasticidade e porosidade devem aparecer apenas com comprovação.",
    imageLabel: "IMG-MASCARA-RECONSTRUTORA",
    icon: TestTube2
  },
  {
    name: "Máscara de Hidratação Profunda",
    moment: "Passo 4",
    functionText: "Nutrição e acabamento",
    headline: "Etapa final para conforto, emoliência e aparência saudável.",
    indication: "Máscara de hidratação profunda para finalizar protocolo reconstrutor com emoliência, nutrição cosmética, brilho e sensação de fibra mais maleável.",
    actives: ["Blend de óleos vegetais", "Ceramidas vegetais", "Lipídeos de coco e girassol", "Arginina", "Polissacarídeos", "Pró-vitamina B5"],
    benefits: ["Promove sensação de hidratação profunda", "Ajuda no brilho", "Contribui para maciez", "Apoia barreira lipídica da fibra", "Melhora a aparência de pontas ressecadas"],
    usage: "Aplicar no comprimento e pontas após a máscara reconstrutora, pausar conforme orientação e enxaguar.",
    care: ["Ajustar frequência conforme diagnóstico capilar."],
    regulatory: "Claims de proteção da cor, reparação profunda e resultado imediato devem ser validados.",
    imageLabel: "IMG-MASCARA-HIDRATACAO-PROFUNDA-RECONSTRUCAO",
    icon: Droplets
  }
];

const config: TechnicalLandingConfig = {
  eyebrow: "Capilar • K-beauty",
  title: "Linha Capilar Coreana — Skinificação",
  subtitle: "O futuro dos cuidados capilares inspirado na beleza coreana.",
  intro: "Uma linha haircare premium inspirada na K-beauty e na skinificação capilar, com ativos de skincare aplicados aos fios, protocolos em etapas e foco em hidratação, reconstrução, brilho, proteção e aparência saudável da fibra capilar.",
  image,
  heroImageLabel: "IMG-HERO-LINHA-CAPILAR-COREANA",
  badges: ["K-beauty", "Skinificação capilar", "Protocolos em etapas", "Hidratação", "Reconstrução", "Brilho"],
  primaryCta: "Conhecer protocolos",
  secondaryCta: "Ver rotina capilar",
  anchors: [["Conceito", "#conceito"], ["Máscara", "#mascara-intensiva"], ["Hidratação 3 passos", "#hidratacao-3-passos"], ["Reconstrução 4 passos", "#reconstrucao-4-passos"], ["Indicação", "#indicacao"], ["Kits", "#kits"], ["Claims", "#claims"], ["FAQ", "#faq"]],
  concept: {
    imageLabel: "IMG-CONCEITO-SKINIFICACAO-CAPILAR",
    title: "Skinificação capilar é tratar cabelo com lógica de skincare.",
    text: "A tendência leva ativos, etapas e sensorialidade do cuidado facial para os fios. A linha organiza protocolos com limpeza, condicionamento, máscaras e ativos de suporte à fibra para marcas que desejam uma plataforma capilar premium e consultiva.",
    highlight: "Cabelos também pedem protocolo, sensorial e ativos inteligentes.",
    cards: [
      { title: "Ritual em etapas", text: "Protocolos claros para hidratação, reconstrução e cuidado intensivo.", icon: Layers3 },
      { title: "Ativos de skincare", text: "Ácido hialurônico, PCA, esqualano, peptídeos e ceramidas aplicados ao haircare.", icon: FlaskConical },
      { title: "Brilho e maciez", text: "Foco em aparência saudável, toque confortável e fibra mais alinhada.", icon: Sparkles },
      { title: "Fibra sensibilizada", text: "Arquitetura para cabelos secos, porosos, opacos ou sensibilizados por química.", icon: ShieldCheck },
      { title: "B2B premium", text: "Produtos para kits, protocolos profissionais e narrativas de inovação.", icon: BadgeCheck }
    ]
  },
  architecture: {
    imageLabel: "IMG-PROTOCOLOS-CAPILARES-COREANOS",
    title: "Três protocolos para necessidades capilares de alto valor percebido.",
    text: "A linha permite montar uma arquitetura comercial em tratamento intensivo, hidratação em três passos e reconstrução em quatro passos.",
    groups: [
      { title: "Máscara Intensiva Recuperação Total", items: ["Aminoácidos com PCA", "Esqualano", "Fitoesterol", "Geleia real", "Óleo de ojon"], functionText: "Hidratação, estrutura, brilho e maciez em uma etapa." },
      { title: "Kit Recuperação Imediata da Hidratação Capilar — 3 Passos", items: ["Shampoo Hidratante", "Condicionador Hidratante", "Máscara de Hidratação Intensiva"], functionText: "Ritual coreano de hidratação profunda para fios secos e ressecados." },
      { title: "Reconstrução Capilar Completa — 4 Passos", items: ["Shampoo Purificante", "Condicionador Neutralizante", "Máscara Reconstrutora", "Máscara de Hidratação Profunda"], functionText: "Protocolo para cabelos danificados, elásticos, porosos ou sensibilizados por química." }
    ]
  },
  sections: [
    { id: "mascara-intensiva", eyebrow: "Protocolo 1", title: "Máscara Intensiva Recuperação Total.", text: "Uma etapa premium para hidratação, estrutura, brilho e maciez, com ativos de alto apelo cosmético.", imageLabel: "IMG-MASCARA-INTENSIVA-RECUPERACAO-TOTAL", products: mascaraIntensiva },
    { id: "hidratacao-3-passos", eyebrow: "Protocolo 2", title: "Kit Recuperação Imediata da Hidratação Capilar — 3 Passos.", text: "Ritual coreano de hidratação profunda para cabelos secos, opacos, sem movimento e sem emoliência.", imageLabel: "IMG-KIT-HIDRATACAO-CAPILAR-3-PASSOS", products: hidratacao3Passos },
    { id: "reconstrucao-4-passos", eyebrow: "Protocolo 3", title: "Reconstrução Capilar Completa — 4 Passos.", text: "Protocolo reconstrutor para cabelos danificados, elásticos, porosos ou sensibilizados por química.", imageLabel: "IMG-RECONSTRUCAO-CAPILAR-4-PASSOS", products: reconstrucao4Passos }
  ],
  summaryImageLabel: "IMG-ROTINA-CAPILAR-COREANA",
  summaryRows: [
    ["Intensivo", "1", "Máscara Intensiva Recuperação Total", "Hidratação, brilho e maciez em etapa única"],
    ["Hidratação", "1", "Shampoo Hidratante", "Limpar e preparar"],
    ["Hidratação", "2", "Condicionador Hidratante", "Desembaraçar e alinhar"],
    ["Hidratação", "3", "Máscara de Hidratação Intensiva", "Hidratar profundamente"],
    ["Reconstrução", "1", "Shampoo Purificante", "Preparar a fibra"],
    ["Reconstrução", "2", "Condicionador Neutralizante", "Equilibrar sensorial"],
    ["Reconstrução", "3", "Máscara Reconstrutora", "Reconstrução cosmética"],
    ["Reconstrução", "4", "Máscara de Hidratação Profunda", "Nutrição e acabamento"]
  ],
  indicationImageLabel: "IMG-INDICACAO-LINHA-CAPILAR-COREANA",
  indicationRows: [
    ["Cabelos secos e ressecados", "Kit Hidratação 3 Passos", "Hidratação, movimento e emoliência"],
    ["Cabelos opacos", "Máscara Intensiva ou Kit Hidratação", "Brilho e aparência saudável"],
    ["Cabelos porosos", "Máscara Intensiva ou Reconstrução 4 Passos", "Aparência de fibra mais alinhada"],
    ["Cabelos sensibilizados por química", "Reconstrução Capilar 4 Passos", "Suporte à aparência de resistência"],
    ["Fios ásperos", "Máscara Intensiva Recuperação Total", "Maciez e toque mais confortável"],
    ["Rotina premium em etapas", "Protocolos 3 e 4 passos", "Experiência consultiva e maior valor percebido"]
  ],
  commercial: {
    title: "Uma plataforma capilar B2B para protocolos, kits e inovação.",
    text: "A Linha Capilar Coreana une tendência, sensorialidade e ativos reconhecidos para criar uma arquitetura de haircare premium com alto potencial de kits, rituais e venda consultiva.",
    territories: ["K-beauty capilar", "Skinificação capilar", "Protocolos em etapas", "Hidratação profunda", "Reconstrução cosmética", "Cabelos sensibilizados", "Brilho e maciez", "Kits premium", "Ritual profissional", "Haircare de inovação"],
    message: "Ativos de skincare, protocolos capilares e sensorial premium para marcas que querem liderar inovação em haircare.",
    kits: [
      ["Kit Hidratação Coreana", "Shampoo Hidratante + Condicionador Hidratante + Máscara de Hidratação Intensiva."],
      ["Kit Reconstrução Completa", "Shampoo Purificante + Condicionador Neutralizante + Máscara Reconstrutora + Máscara de Hidratação Profunda."],
      ["Tratamento Intensivo", "Máscara Intensiva Recuperação Total como produto herói de alta recompra."]
    ]
  },
  claims: {
    safe: ["Ajuda na hidratação da fibra", "Promove maciez", "Contribui para brilho", "Melhora a aparência de fios porosos", "Apoia alinhamento", "Sensorial premium"],
    proof: ["Reconstrução", "Redução de quebra", "Aumento de resistência", "Elasticidade", "Porosidade", "Proteção da cor", "Resultados imediatos"],
    avoid: ["Reconstrói completamente", "Elimina quebra", "Cura dano químico", "Recuperação garantida", "Resultado instantâneo absoluto"]
  },
  finalCta: {
    imageLabel: "IMG-CTA-LINHA-CAPILAR-COREANA",
    title: "Crie uma linha capilar inspirada na K-beauty.",
    text: "A LQF pode desenvolver protocolos capilares premium com narrativa técnica, ativos de alta percepção e arquitetura pronta para kits, rituais e posicionamento B2B.",
    primary: "Criar linha capilar coreana",
    secondary: "Ver protocolos"
  },
  faq: [
    ["O que é skinificação capilar?", "É a aplicação da lógica do skincare ao cuidado dos fios, com ativos, protocolos e sensorialidade organizados em etapas claras."],
    ["A linha reconstrói o cabelo?", "A proposta é cosmética e ajuda a melhorar a aparência de fios danificados, porosos ou sensibilizados. Claims de reconstrução e resistência exigem comprovação."],
    ["Os protocolos podem virar kits?", "Sim. A arquitetura foi pensada para kits de hidratação, reconstrução e tratamento intensivo."],
    ["A linha é inspirada em K-beauty?", "Sim. A narrativa usa protocolos em etapas, ativos de skincare e sensorial premium inspirados na beleza coreana."],
    ["Pode ser usada em cabelos com química?", "Pode ser posicionada para cabelos sensibilizados por química, desde que a formulação final e os claims sejam validados por testes adequados."]
  ],
  flags: {
    showInternalLotCodes: false,
    showRegulatoryNotes: true,
    showB2BPositioning: true,
    showUsageInstructions: true,
    showKitSuggestions: true,
    showIngredientDetails: true,
    showProtocolSteps: true
  }
};

export default function LinhaCapilarCoreanaPage() {
  return <TechnicalRoutineLanding config={config} />;
}
