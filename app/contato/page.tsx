import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { HeroSection } from "@/components/HeroSection";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";
import { conceptImages, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.contato;

export default function ContatoPage() {
  return (
    <main>
      <HeroSection
        eyebrow="Contato"
        title="Vamos desenvolver sua linha?"
        subtitle="Conte com a LQF Farmacêutica para transformar sua ideia em um produto pronto para o mercado."
        image={conceptImages.contact}
        compact
      />
      <section id="formulario" className="section-shell scroll-mt-28 grid gap-10 py-16 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionTitle
            eyebrow="Projeto"
            title="Conte o que sua marca precisa criar."
            text="Quanto mais claro o estágio do projeto, mais objetiva pode ser a conversa técnica inicial."
          />
          <Reveal className="mt-10 rounded-[1.5rem] bg-graphite p-6 text-white md:p-8">
            <p className="text-2xl font-light">A ciência por trás da beleza.</p>
            <p className="mt-5 text-sm leading-7 text-white/68">Desenvolvimento, regularização e fabricação terceirizada para marcas que exigem alto padrão técnico.</p>
          </Reveal>
        </div>
        <Reveal>
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
}
