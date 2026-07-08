import {
  Activity,
  BadgeCheck,
  Droplets,
  FlaskConical,
  Leaf,
  ShieldCheck,
  Sparkles,
  Waves,
  Wind
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { TechnicalLandingConfig, TechnicalProduct } from "@/app/produtos/facial/_components/TechnicalRoutineLanding";

export type CapilarLine = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  products: Array<{
    name: string;
    moment: string;
    headline: string;
    indication: string;
    actives: string[];
    benefits: string[];
    imageLabel: string;
    icon?: LucideIcon;
  }>;
};

const defaultClaimNote =
  "Claims de queda, crescimento, caspa, proteção térmica, proteção solar, reparação, resistência, anti-frizz, porosidade, perfume duradouro e resultados imediatos devem ser usados apenas com comprovação técnica e validação regulatória.";

const icons = [Droplets, Sparkles, Leaf, Waves, ShieldCheck, FlaskConical, Activity, Wind, BadgeCheck];

function toProduct(item: CapilarLine["products"][number], index: number): TechnicalProduct {
  const Icon = item.icon ?? icons[index % icons.length];
  return {
    name: item.name,
    moment: item.moment,
    functionText: item.headline,
    headline: item.headline,
    indication: item.indication,
    actives: item.actives,
    benefits: item.benefits,
    usage: "Aplicar conforme a etapa da rotina capilar, sempre do meio às pontas ou no couro cabeludo quando indicado. Ajustar frequência, modo de uso e comunicação final conforme fórmula, testes e proposta da marca.",
    regulatory: defaultClaimNote,
    imageLabel: item.imageLabel,
    icon: Icon
  };
}

export function createCapilarLandingConfig(input: {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  image: string;
  heroImageLabel: string;
  badges: string[];
  primaryCta: string;
  secondaryCta: string;
  conceptTitle: string;
  conceptText: string;
  conceptHighlight: string;
  conceptCards: Array<{ title: string; text: string; icon?: LucideIcon }>;
  lines: CapilarLine[];
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
  finalPrimary: string;
  finalSecondary: string;
  faq: Array<[string, string]>;
  labels?: TechnicalLandingConfig["labels"];
  architectureTitle?: string;
  architectureText?: string;
  backHref?: string;
  backLabel?: string;
}): TechnicalLandingConfig {
  return {
    eyebrow: input.eyebrow,
    title: input.title,
    subtitle: input.subtitle,
    intro: input.intro,
    image: input.image,
    heroImageLabel: input.heroImageLabel,
    badges: input.badges,
    primaryCta: input.primaryCta,
    secondaryCta: input.secondaryCta,
    anchors: [
      ["Conceito", "#conceito"],
      ["Arquitetura", "#rotina"],
      ...input.lines.slice(0, 6).map((line) => [line.eyebrow, `#${line.id}`] as [string, string]),
      ["Comparativo", "#resumo"],
      ["Indicação", "#indicacao"],
      ["Claims", "#claims"],
      ["FAQ", "#faq"]
    ],
    labels: {
      architectureEyebrow: "Arquitetura capilar",
      summaryEyebrow: "Comparativo",
      summaryTitle: "Escolha por necessidade, ativo e resultado percebido.",
      summaryText: "Uma matriz técnica para apresentação comercial, treinamento e montagem de kits.",
      indicationEyebrow: "Indicação por necessidade",
      indicationTitle: "Diagnóstico rápido para orientar a linha ideal.",
      indicationText: "A seleção combina dor do consumidor, sensorial desejado e posicionamento B2B.",
      claimsTitle: "Linguagem cosmética segura e defensável.",
      ...input.labels
    },
    concept: {
      imageLabel: input.heroImageLabel.replace("HERO", "CONCEITO"),
      title: input.conceptTitle,
      text: input.conceptText,
      highlight: input.conceptHighlight,
      cards: input.conceptCards.map((card, index) => ({ ...card, icon: card.icon ?? icons[index % icons.length] }))
    },
    architecture: {
      imageLabel: input.heroImageLabel.replace("HERO", "ARQUITETURA"),
      title: input.architectureTitle ?? "Uma plataforma para transformar tecnologia em linha vendável.",
      text: input.architectureText ?? "Cada bloco foi estruturado para permitir navegação por benefício, rotina, ativo protagonista e argumento comercial.",
      groups: input.lines.map((line) => ({
        title: line.title,
        functionText: line.text,
        items: line.products.flatMap((product) => product.actives).slice(0, 6)
      }))
    },
    sections: input.lines.map((line) => ({
      id: line.id,
      eyebrow: line.eyebrow,
      title: line.title,
      text: line.text,
      imageLabel: `IMG-${line.id.toUpperCase().replaceAll("-", "-")}`,
      products: line.products.map(toProduct)
    })),
    summaryImageLabel: input.heroImageLabel.replace("HERO", "COMPARATIVO"),
    summaryRows: input.summaryRows,
    indicationImageLabel: input.heroImageLabel.replace("HERO", "INDICACAO"),
    indicationRows: input.indicationRows,
    commercial: {
      title: input.commercialTitle,
      text: input.commercialText,
      territories: input.territories,
      message: input.commercialMessage,
      kits: input.kits
    },
    claims: {
      safe: input.claimsSafe,
      proof: input.claimsProof,
      avoid: input.claimsAvoid
    },
    finalCta: {
      imageLabel: input.heroImageLabel.replace("HERO", "CTA"),
      title: input.finalTitle,
      text: input.finalText,
      primary: input.finalPrimary,
      secondary: input.finalSecondary
    },
    faq: input.faq,
    backHref: input.backHref ?? "/produtos#capilar",
    backLabel: input.backLabel ?? "Voltar para linhas capilares",
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
}
