import type { Metadata } from "next";
import { CardGrid } from "@/components/CardGrid";
import { CTASection } from "@/components/CTASection";
import { EditorialHero } from "@/components/EditorialHero";
import { HeroSection } from "@/components/HeroSection";
import { ImageFeatureSection } from "@/components/ImageFeatureSection";
import { SectionTitle } from "@/components/SectionTitle";
import { conceptImages, pageMeta, technologyItems } from "@/lib/site";

export const metadata: Metadata = pageMeta.tecnologia;

const technologyImages = [
  conceptImages.technology,
  conceptImages.editorialB,
  conceptImages.quality,
  conceptImages.packaging,
  conceptImages.about,
  conceptImages.editorialA
];

export default function TecnologiaPage() {
  return (
    <main>
      <HeroSection
        eyebrow="Tecnologia"
        title="Tecnologia aplicada à precisão industrial."
        subtitle="Processos controlados, ambientes adequados, laboratórios equipados e sistemas de qualidade para desenvolver e fabricar produtos com segurança e consistência."
        image={conceptImages.technology}
        compact
      />
      <EditorialHero
        eyebrow="Precisao industrial"
        title="Tecnica, acabamento e controle no mesmo padrao."
        text="A estrutura produtiva sustenta tanto a seguranca do processo quanto a percepcao de valor que a marca entrega no ponto de contato com o consumidor."
        image={conceptImages.editorialB}
        align="right"
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
          image={technologyImages[index % technologyImages.length]}
          reverse={index % 2 === 1}
        />
      ))}
      <CTASection />
    </main>
  );
}
