import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ImageFeatureSection } from "@/components/ImageFeatureSection";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { conceptImages, pageMeta, privateLabelBlocks } from "@/lib/site";

export const metadata: Metadata = pageMeta.privateLabel;

export default function PrivateLabelPage() {
  return (
    <main>
      <HeroSection
        eyebrow="Private Label"
        title="Sua linha de produtos com estrutura farmacêutica."
        subtitle="Desenvolvemos e fabricamos cosméticos e dermocosméticos para marcas que desejam lançar ou ampliar seu portfólio com segurança, qualidade e alto padrão técnico."
        image={conceptImages.privateLabel}
        compact
      />
      <ImageFeatureSection
        eyebrow="Parceria estratégica"
        title="Private Label para marcas que querem crescer com consistência."
        text="Oferecemos suporte desde a concepção da fórmula até a fabricação final, considerando posicionamento da marca, público-alvo, embalagem, regularização, controle de qualidade e viabilidade produtiva."
        image={conceptImages.packaging}
      />
      <section className="section-shell py-16 md:py-28">
        <SectionTitle eyebrow="Modelos de projeto" title="Do lançamento ao portfólio consolidado." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {privateLabelBlocks.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="min-h-72 rounded-[1.5rem] border border-graphite/10 bg-white/76 p-7">
              <h2 className="text-3xl font-light text-graphite">{item.title}</h2>
              <p className="mt-8 text-sm leading-7 text-graphite/65">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
