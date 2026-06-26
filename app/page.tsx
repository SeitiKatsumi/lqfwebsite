import type { Metadata } from "next";
import Image from "next/image";
import { CardGrid } from "@/components/CardGrid";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ImageFeatureSection } from "@/components/ImageFeatureSection";
import { MinimalButton } from "@/components/MinimalButton";
import { PartnersSection } from "@/components/PartnersSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ProductCategoryCard } from "@/components/ProductCategoryCard";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { authorityPillars, pageMeta, placeholders, productCategories, qualityItems, technologyItems } from "@/lib/site";

export const metadata: Metadata = pageMeta.home;

export default function HomePage() {
  return (
    <main>
      <HeroSection
        eyebrow=""
        title="A ciência por trás da beleza."
        subtitle="A LQF Farmacêutica desenvolve, regulariza e fabrica cosméticos e dermocosméticos para marcas que buscam qualidade, segurança e alto padrão técnico."
        image={placeholders[0]}
        secondary="Conheça a estrutura LQF"
      />

      <section className="section-shell py-16 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionTitle
            eyebrow="Manifesto"
            title="Antes da beleza chegar ao mercado, ela passa pela ciência."
            text="A LQF é parceira de marcas que desejam transformar ideias, fórmulas e projetos em produtos cosméticos e dermocosméticos prontos para competir com segurança, desempenho e credibilidade."
          />
          <Reveal delay={0.1} className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-mist shadow-soft">
            <Image src={placeholders[1]} alt="" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-16 md:py-28">
        <SectionTitle eyebrow="Autoridade" title="Estrutura técnica para marcas que exigem mais." />
        <div className="mt-12">
          <CardGrid items={authorityPillars} />
        </div>
      </section>

      <ImageFeatureSection
        eyebrow="Sobre"
        title="Uma indústria farmacêutica dedicada à criação de produtos de beleza."
        text="Atuamos como parceira estratégica para marcas que desejam lançar, ampliar ou profissionalizar suas linhas com uma estrutura técnica robusta, segura e preparada para atender às exigências do mercado."
        image={placeholders[2]}
        reverse
        button={{ href: "/sobre", label: "Conheça a LQF" }}
      />

      <section className="section-shell py-16 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle
            eyebrow="Tecnologia"
            title="Tecnologia que controla cada detalhe."
            text="Na LQF, tecnologia não está apenas nos equipamentos. Está na forma como cada processo é pensado, validado, documentado e controlado."
          />
          <CardGrid items={technologyItems.slice(0, 8)} />
        </div>
      </section>

      <section className="section-shell py-16 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Produtos"
            title="Desenvolvemos linhas completas para diferentes categorias."
            text="Capacidade técnica para desenvolver e fabricar cosméticos, dermocosméticos e produtos de cuidado pessoal com estratégia e viabilidade produtiva."
          />
          <MinimalButton href="/produtos" variant="ghost">Ver categorias</MinimalButton>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((item, index) => <ProductCategoryCard key={item.title} {...item} index={index} />)}
        </div>
      </section>

      <section className="section-shell py-16 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionTitle
            eyebrow="Processo LQF"
            title="Da ideia ao produto pronto para o mercado."
            text="Um processo estruturado para transformar conceitos em produtos reais, seguros e competitivos."
          />
          <ProcessTimeline compact />
        </div>
      </section>

      <ImageFeatureSection
        eyebrow="Private Label"
        title="Sua marca. Nossa estrutura."
        text="A LQF atua no modelo Private Label para empresas que desejam lançar produtos próprios com uma estrutura farmacêutica preparada para desenvolver, fabricar e entregar cosméticos e dermocosméticos com alto padrão técnico."
        image={placeholders[0]}
        button={{ href: "/private-label", label: "Quero desenvolver minha linha" }}
      />

      <section className="section-shell py-16 md:py-28">
        <Reveal className="rounded-[2rem] border border-graphite/10 bg-white p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <SectionTitle
              eyebrow="Qualidade"
              title="Qualidade não é uma etapa. É o processo inteiro."
              text="Todos os processos são conduzidos com controle, documentação e validação, assegurando conformidade desde pesquisa e desenvolvimento até expedição."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {qualityItems.map((item) => (
                <div key={item} className="rounded-2xl bg-porcelain px-5 py-4 text-sm text-graphite/72">{item}</div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <PartnersSection />

      <CTASection />
    </main>
  );
}
