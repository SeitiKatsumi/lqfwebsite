import type { Metadata } from "next";
import { getInnovationLandingConfig } from "@/app/produtos/_data/innovationLandingConfigs";
import { TechnicalRoutineLanding } from "@/app/produtos/facial/_components/TechnicalRoutineLanding";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.cuidadosUnhasCuticulas;

export default function CuidadosUnhasCuticulasPage() {
  return <TechnicalRoutineLanding config={getInnovationLandingConfig("cuidadosUnhasCuticulas")} />;
}
