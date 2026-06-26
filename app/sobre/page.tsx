import type { Metadata } from "next";
import { CardGrid } from "@/components/CardGrid";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ImageFeatureSection } from "@/components/ImageFeatureSection";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { StructureCarousel } from "@/components/StructureCarousel";
import { conceptImages, differentials, pageMeta } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = pageMeta.sobre;

const essence = [
  {
    title: "Missão",
    text: "Desenvolver e fabricar cosméticos e dermocosméticos com alto padrão técnico, segurança e qualidade, contribuindo para que marcas entreguem produtos confiáveis, eficazes e desejáveis ao mercado."
  },
  {
    title: "Visão",
    text: "Ser reconhecida como uma indústria farmacêutica de referência em desenvolvimento, formulação e fabricação terceirizada de produtos de beleza, cuidado e tratamento."
  },
  {
    title: "Posicionamento",
    text: "A LQF é a base científica, técnica e produtiva por trás de marcas que desejam crescer com segurança, qualidade e consistência."
  }
];

export default function SobrePage() {
  return (
    <main>
      <HeroSection
        eyebrow="Sobre a LQF"
        title="A nossa estrutura"
        subtitle="Somos uma indústria farmacêutica especializada em transformar ideias, fórmulas e projetos em cosméticos e dermocosméticos prontos para o mercado."
        image={conceptImages.facade}
        compact
      />
      <ImageFeatureSection
        eyebrow="Quem somos"
        title="Por trás de grandes produtos, existe uma estrutura técnica."
        text="A LQF Farmacêutica une ciência, tecnologia, controle de qualidade e capacidade produtiva para transformar ideias em produtos prontos para competir com alto padrão de segurança, desempenho e apresentação."
        image={conceptImages.editorialB}
      />
      <section className="section-shell py-16 md:py-28">
        <SectionTitle eyebrow="Essência" title="Ciência, qualidade e consistência como base de crescimento." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {essence.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="min-h-80 rounded-[1.5rem] border border-graphite/10 bg-white/76 p-7">
              <h2 className="text-3xl font-light text-graphite">{item.title}</h2>
              <p className="mt-8 text-sm leading-7 text-graphite/65">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section-shell py-16 md:py-28">
        <SectionTitle eyebrow="Diferenciais" title="O que torna a LQF diferente" />
        <div className="mt-12">
          <CardGrid items={differentials.map((title) => ({ title, text: "Estrutura técnica para desenvolvimento, fabricação e controle com padrão farmacêutico.", icon: CheckCircle2 }))} />
        </div>
      </section>
      <StructureCarousel />
      <CTASection />
    </main>
  );
}
