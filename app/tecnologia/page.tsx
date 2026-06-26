import type { Metadata } from "next";
import { CardGrid } from "@/components/CardGrid";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ImageFeatureSection } from "@/components/ImageFeatureSection";
import { SectionTitle } from "@/components/SectionTitle";
import { pageMeta, placeholders, technologyItems } from "@/lib/site";

export const metadata: Metadata = pageMeta.tecnologia;

export default function TecnologiaPage() {
  return (
    <main>
      <HeroSection
        eyebrow="Tecnologia"
        title="Tecnologia aplicada à precisão industrial."
        subtitle="Processos controlados, ambientes adequados, laboratórios equipados e sistemas de qualidade para desenvolver e fabricar produtos com segurança e consistência."
        image={placeholders[1]}
        compact
      />
      <section className="section-shell py-16 md:py-28">
        <SectionTitle
          eyebrow="Estrutura produtiva"
          title="Controle técnico em cada etapa."
          text="Nossa estrutura atende marcas que precisam de um parceiro industrial com capacidade técnica para desenvolvimento, regularização, fabricação, envase, embalagem e controle de qualidade."
        />
        <div className="mt-12">
          <CardGrid items={technologyItems} />
        </div>
      </section>
      {technologyItems.slice(0, 6).map((item, index) => (
        <ImageFeatureSection
          key={item.title}
          eyebrow="Bloco técnico"
          title={item.title}
          text={item.text}
          image={placeholders[index % placeholders.length]}
          reverse={index % 2 === 1}
        />
      ))}
      <CTASection />
    </main>
  );
}
