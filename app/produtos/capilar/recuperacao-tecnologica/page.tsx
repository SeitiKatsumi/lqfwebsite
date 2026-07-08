import type { Metadata } from "next";
import { Activity, Atom, BadgeCheck, Droplets, FlaskConical, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { TechnicalRoutineLanding, type TechnicalLandingConfig, type TechnicalProduct } from "@/app/produtos/facial/_components/TechnicalRoutineLanding";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.capilarRecuperacaoTecnologica;

const image = "/products/capilar-recuperacao-tecnologica/capilar-recuperacao-tecnologica-placeholder.jpg";

const claimNote = "Claims de microbiota, crescimento, queda, síntese de queratina, regeneração, reparação molecular, força, resistência, porosidade e resultados imediatos devem ser usados apenas com comprovação técnica adequada.";

function line(name: string, moment: string, headline: string, indication: string, actives: string[], benefits: string[], imageLabel: string, icon: TechnicalProduct["icon"]): TechnicalProduct {
  return {
    name,
    moment,
    functionText: headline,
    headline,
    indication,
    actives,
    benefits,
    usage: "Usar como rotina completa com shampoo, condicionador, máscara e finalizador conforme diagnóstico dos fios. Ajustar frequência conforme condição da fibra e proposta final da marca.",
    regulatory: claimNote,
    imageLabel,
    icon
  };
}

const sections = [
  {
    id: "nutrioil",
    eyebrow: "Nutrioil",
    title: "Reposição lipídica para cabelos secos, porosos e sem brilho.",
    text: "Blend 100% vegetal com 12 óleos nobres e Goji Berry para nutrição, maciez, brilho e aparência mais confortável da fibra.",
    imageLabel: "IMG-LINHA-NUTRIOIL",
    products: [line("Linha Nutrioil", "Lipídios", "Nutrição, brilho e reposição da barreira lipídica.", "Indicada para cabelos secos, porosos, opacos, enfraquecidos ou sensibilizados por química e calor.", ["Avelã", "Pêssego", "Macadâmia", "Canola", "Argan", "Chia", "Kukui", "Camelina", "Cártamo", "Marula", "Monoi", "Goji Berry"], ["Ajuda na restauração visual da barreira lipídica", "Promove maciez e movimento", "Reduz aparência de frizz e porosidade", "Contribui para brilho saudável"], "IMG-NUTRIOIL-PRODUTOS", Droplets)]
  },
  {
    id: "reparacao",
    eyebrow: "Reparação molecular",
    title: "Aminoácidos para apoiar a aparência da estrutura capilar.",
    text: "Complexo de aminoácidos com PCA para fios quebradiços, elásticos, ásperos ou sensibilizados.",
    imageLabel: "IMG-LINHA-REPARACAO-MOLECULAR",
    products: [line("Linha Reparação Molecular", "Aminoácidos", "Força cosmética, maciez e elasticidade percebida.", "Indicada para cabelos quimicamente danificados, elásticos, frágeis, sem movimento ou com perda de massa visual.", ["Arginina", "Serina", "Prolina", "Glicina", "Alanina", "Ácido glutâmico", "Ácido aspártico", "Treonina", "Isoleucina", "Valina", "Histidina", "Fenilalanina", "PCA"], ["Ajuda a melhorar a resistência percebida", "Contribui para hidratação duradoura", "Melhora brilho e maciez", "Apoia a aparência saudável dos fios"], "IMG-REPARACAO-MOLECULAR-PRODUTOS", Atom)]
  },
  {
    id: "anti-aging",
    eyebrow: "Anti-aging capilar",
    title: "Bioativos multifuncionais para fios envelhecidos ou sensibilizados.",
    text: "Sistema com ácido hialurônico, creatina, proteínas vegetais e pós-biótico organomineral para vitalidade, brilho e conforto.",
    imageLabel: "IMG-LINHA-ANTI-AGING-CAPILAR",
    products: [line("Linha Anti Aging Capilar", "Vitalidade", "Hidratação, resistência cosmética e brilho para cabelos fragilizados.", "Indicada para cabelos envelhecidos, descoloridos, sensibilizados, opacos ou com perda de densidade visual.", ["Ácido hialurônico", "Creatina", "Pantotenato de cálcio", "Proteínas de trigo, soja e milho", "Zinco", "Ouro", "Silício", "Cobre", "Magnésio"], ["Ajuda a restaurar equilíbrio hídrico", "Contribui para resistência cosmética", "Melhora lubrificação e brilho", "Apoia a vitalidade do couro cabeludo"], "IMG-ANTI-AGING-CAPILAR-PRODUTOS", Sparkles)]
  },
  {
    id: "microbiota",
    eyebrow: "Microbiota capilar",
    title: "Equilíbrio do couro cabeludo e cuidado da raiz.",
    text: "Prebióticos, extratos vegetais e metionina para conforto, oleosidade visual equilibrada e fios com aparência mais forte.",
    imageLabel: "IMG-LINHA-MICROBIOTA-CAPILAR",
    products: [line("Linha Microbiota Capilar", "Couro cabeludo", "Cuidado do microambiente do couro cabeludo.", "Indicada para couro cabeludo oleoso, sensível, com desconforto ou rotinas de vitalidade da raiz.", ["Prebiótico cosmético", "Quina", "Capsicum", "Pólen", "Arnica", "Urtiga", "Ginseng", "Germe de trigo", "Metionina"], ["Ajuda no equilíbrio visual do couro cabeludo", "Promove sensação calmante", "Auxilia no controle visual da oleosidade", "Apoia vitalidade da raiz"], "IMG-MICROBIOTA-CAPILAR-PRODUTOS", Activity)]
  },
  {
    id: "gloss",
    eyebrow: "Antiporosidade e gloss",
    title: "Selagem cuticular, preenchimento visual e brilho espelhado.",
    text: "Quinoa e ácido glicólico para fios porosos, opacos, ásperos, com frizz e dificuldade de reter hidratação.",
    imageLabel: "IMG-LINHA-ANTIPOROSIDADE-GLOSS",
    products: [line("Linha Antiporosidade e Gloss Intenso", "Gloss", "Alinhamento, brilho e redução visual de porosidade.", "Indicada para cabelos porosos, opacos, ásperos, com frizz ou sensibilizados por química e calor.", ["Quinoa", "Ácido glicólico", "Aminoácidos", "Sistema acidificante"], ["Ajuda a alinhar a superfície cuticular", "Promove brilho intenso", "Contribui para maciez", "Reduz visualmente frizz e porosidade"], "IMG-ANTIPOROSIDADE-GLOSS-PRODUTOS", ShieldCheck)]
  }
];

const config: TechnicalLandingConfig = {
  eyebrow: "Capilar • Recuperação tecnológica",
  title: "Linha Capilar Recuperação Tecnológica",
  subtitle: "Tecnologias avançadas para recuperar, proteger e transformar a fibra capilar.",
  intro: "Uma plataforma capilar de alta performance para cabelos danificados, porosos, ressecados, envelhecidos, quimicamente sensibilizados ou com couro cabeludo em desequilíbrio.",
  image,
  heroImageLabel: "IMG-HERO-RECUPERACAO-TECNOLOGICA",
  badges: ["Reposição lipídica", "Reparação molecular", "Anti-aging capilar", "Microbiota", "Gloss intenso"],
  primaryCta: "Conhecer tecnologias",
  secondaryCta: "Ver linhas completas",
  anchors: [["Conceito", "#conceito"], ["Tecnologias", "#rotina"], ["Nutrioil", "#nutrioil"], ["Reparação", "#reparacao"], ["Anti-aging", "#anti-aging"], ["Microbiota", "#microbiota"], ["Gloss", "#gloss"], ["Claims", "#claims"], ["FAQ", "#faq"]],
  labels: {
    architectureEyebrow: "Visão geral",
    summaryEyebrow: "Comparativo",
    summaryTitle: "Cinco tecnologias para necessidades capilares distintas.",
    summaryText: "Uma matriz consultiva para organizar diagnóstico, kits, discurso comercial e recomendação por tipo de dano.",
    indicationTitle: "Escolha pela necessidade da fibra ou do couro cabeludo.",
    claimsTitle: "Performance capilar com claims defensáveis."
  },
  concept: {
    imageLabel: "IMG-CONCEITO-RECUPERACAO-CAPILAR",
    title: "Cabelos danificados precisam de tecnologia direcionada.",
    text: "Nem todo dano capilar é igual. Alguns fios perdem lipídios, outros perdem massa, aminoácidos ou equilíbrio do couro cabeludo. A linha organiza essas necessidades em soluções claras.",
    highlight: "Uma tecnologia para cada tipo de dano. Uma linha para cada momento do cabelo.",
    cards: [
      { title: "Nutrioil", text: "Reposição da bicamada lipídica para brilho, nutrição e maciez.", icon: Droplets },
      { title: "Reparação", text: "Aminoácidos para apoiar a aparência da fibra danificada.", icon: Atom },
      { title: "Anti-aging", text: "Bioativos para fios envelhecidos, descoloridos ou fragilizados.", icon: Sparkles },
      { title: "Microbiota", text: "Equilíbrio do couro cabeludo e cuidado da raiz.", icon: Activity },
      { title: "Gloss", text: "Selagem cuticular, brilho e redução visual de porosidade.", icon: ShieldCheck }
    ]
  },
  architecture: {
    imageLabel: "IMG-TECNOLOGIAS-CAPILARES",
    title: "Tecnologia certa para cada necessidade capilar.",
    text: "A arquitetura permite criar sublinhas completas com shampoo, condicionador, máscara, leave-in, óleo finalizador ou tônico.",
    groups: sections.map((section) => ({ title: section.title, items: section.products[0].actives.slice(0, 5), functionText: section.text }))
  },
  sections,
  summaryImageLabel: "IMG-COMPARATIVO-TECNOLOGIAS-CAPILARES",
  summaryRows: [
    ["Nutrioil", "Reposição lipídica", "Cabelos secos e porosos", "Fios nutridos, macios e brilhantes"],
    ["Reparação Molecular", "Aminoácidos + PCA", "Fios quebradiços ou elásticos", "Aparência mais forte e resistente"],
    ["Anti Aging", "Bioativos multifuncionais", "Fios envelhecidos ou sensibilizados", "Brilho, densidade visual e maciez"],
    ["Microbiota Capilar", "Prebiótico e extratos vegetais", "Couro cabeludo oleoso ou sensível", "Raiz equilibrada e fios com aparência forte"],
    ["Antiporosidade e Gloss", "Quinoa + ácido glicólico", "Fios porosos, opacos e com frizz", "Brilho, alinhamento e toque aveludado"]
  ],
  indicationImageLabel: "IMG-ROTINA-RECUPERACAO-TECNOLOGICA",
  indicationRows: [
    ["Secura e porosidade", "Nutrioil", "Reposição lipídica e brilho"],
    ["Quebra e elasticidade", "Reparação Molecular", "Reposição de aminoácidos e resistência percebida"],
    ["Envelhecimento capilar", "Anti Aging", "Vitalidade, hidratação e brilho"],
    ["Raiz em desequilíbrio", "Microbiota Capilar", "Conforto e oleosidade visual equilibrada"],
    ["Frizz e opacidade", "Antiporosidade e Gloss", "Selagem visual e brilho"]
  ],
  commercial: {
    title: "Uma plataforma tecnológica para marcas de haircare premium.",
    text: "A linha permite venda por diagnóstico, kits, protocolos e narrativas de tecnologia aplicada à fibra e ao couro cabeludo.",
    territories: ["Recuperação tecnológica", "Haircare premium", "Reposição lipídica", "Reparação molecular", "Anti-aging capilar", "Microbiota", "Antiporosidade", "Gloss intenso", "Cabelos quimicamente danificados", "Kits por diagnóstico"],
    message: "Tecnologia certa para cada necessidade capilar.",
    kits: [["Kit Nutrioil", "Shampoo, condicionador, máscara e óleo finalizador."], ["Kit Reparação Molecular", "Shampoo, condicionador, máscara e leave-in."], ["Kit Anti Aging", "Rotina completa para fios envelhecidos ou sensibilizados."], ["Kit Microbiota", "Shampoo, condicionador, máscara e tônico."], ["Kit Gloss Antiporosidade", "Shampoo, condicionador, máscara e leave-in."]]
  },
  claims: {
    safe: ["Promove brilho", "Ajuda a hidratar", "Contribui para maciez", "Ajuda a reduzir o frizz", "Melhora o sensorial", "Cuidado do couro cabeludo", "Haircare de alta performance"],
    proof: ["Reposição da bicamada lipídica", "Restauração molecular", "Microbiota", "Queda capilar", "Crescimento capilar", "Redução de porosidade", "Aumento de força e resistência", "Proteção térmica"],
    avoid: ["Regenera a fibra", "Reverte anos de dano", "Cura queda", "Faz crescer cabelo", "Resultado garantido na primeira aplicação"]
  },
  finalCta: {
    imageLabel: "IMG-CTA-RECUPERACAO-TECNOLOGICA",
    title: "Transforme tecnologia capilar em uma linha de alta performance.",
    text: "Nutrioil, Reparação Molecular, Anti Aging, Microbiota e Gloss Antiporosidade em uma plataforma completa para marcas que desejam lançar haircare técnico e desejável.",
    primary: "Criar minha linha capilar tecnológica",
    secondary: "Ver tecnologias completas"
  },
  faq: [
    ["Qual linha é indicada para cabelo seco e poroso?", "Nutrioil é a principal escolha para fios secos, porosos, opacos e com necessidade de reposição lipídica."],
    ["Qual linha é indicada para cabelo elástico ou quebradiço?", "Reparação Molecular é indicada para cabelos frágeis, elásticos, quebradiços ou quimicamente sensibilizados."],
    ["Qual linha cuida do couro cabeludo?", "Microbiota Capilar organiza a narrativa de raiz, conforto, oleosidade visual equilibrada e vitalidade."],
    ["Os resultados são imediatos?", "Efeitos sensoriais como maciez, brilho e alinhamento podem ser percebidos após o uso. Claims profundos exigem comprovação."]
  ],
  backHref: "/produtos#capilar",
  backLabel: "Voltar para linhas capilares",
  flags: { showInternalLotCodes: false, showRegulatoryNotes: true, showB2BPositioning: true, showUsageInstructions: true, showKitSuggestions: true, showIngredientDetails: true, showProtocolSteps: true, showClinicalClaims: true }
};

export default function CapilarRecuperacaoTecnologicaPage() {
  return <TechnicalRoutineLanding config={config} />;
}
