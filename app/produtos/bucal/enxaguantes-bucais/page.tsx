import type { Metadata } from "next";
import { getInnovationLandingConfig } from "@/app/produtos/_data/innovationLandingConfigs";
import { TechnicalRoutineLanding } from "@/app/produtos/facial/_components/TechnicalRoutineLanding";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.enxaguantesBucais;

export default function EnxaguantesBucaisPage() {
  return <TechnicalRoutineLanding config={getInnovationLandingConfig("enxaguantesBucais")} />;
}
