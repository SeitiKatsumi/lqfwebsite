import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionTitle } from "@/components/SectionTitle";
import { pageMeta, placeholders } from "@/lib/site";

export const metadata: Metadata = pageMeta.processo;

export default function ProcessoPage() {
  return (
    <main>
      <HeroSection
        eyebrow="Processo LQF"
        title="Da ideia ao produto pronto para o mercado."
        subtitle="Um processo estruturado para transformar conceitos em produtos cosméticos e dermocosméticos reais, seguros e competitivos."
        image={placeholders[2]}
        compact
      />
      <section className="section-shell py-16 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionTitle
            eyebrow="Macroetapas"
            title="Uma jornada técnica, clara e acompanhada."
            text="Da reunião inicial à liberação do produto acabado, cada etapa conecta estratégia, viabilidade, qualidade e documentação."
          />
          <ProcessTimeline />
        </div>
      </section>
      <CTASection />
    </main>
  );
}
