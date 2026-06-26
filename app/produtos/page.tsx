import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { EditorialHero } from "@/components/EditorialHero";
import { HeroSection } from "@/components/HeroSection";
import { ProductCategoryCard } from "@/components/ProductCategoryCard";
import { SectionTitle } from "@/components/SectionTitle";
import { chemicalImages, conceptImages, pageMeta, productCategories } from "@/lib/site";

export const metadata: Metadata = pageMeta.produtos;

export default function ProdutosPage() {
  return (
    <main>
      <HeroSection
        eyebrow="Produtos"
        title="Um portfólio técnico para marcas de beleza, cuidado e tratamento."
        subtitle="Desenvolvemos e fabricamos linhas completas de cosméticos, dermocosméticos e produtos de cuidado pessoal, com formulações adaptadas ao posicionamento de cada marca."
        image={conceptImages.products}
        compact
      />
      <EditorialHero
        eyebrow="Desenvolvimento técnico"
        title="Linhas pensadas da fórmula ao produto final."
        text="Capilar, facial, corporal, infantil, materna ou sob demanda: cada categoria nasce com sensorialidade, performance e viabilidade produtiva."
        image={chemicalImages.development}
      />
      <section className="section-shell py-16 md:py-28">
        <SectionTitle
          eyebrow="Categorias"
          title="Linhas completas, formulações específicas e desenvolvimento sob demanda."
          text="Cada categoria pode ser desenvolvida com sensorialidade, performance, embalagem e requisitos técnicos alinhados à estratégia da marca."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((item, index) => <ProductCategoryCard key={item.title} {...item} index={index} />)}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
