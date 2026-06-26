import { MinimalButton } from "@/components/MinimalButton";
import { Reveal } from "@/components/Motion";

export function CTASection() {
  return (
    <section className="section-shell py-16 md:py-28">
      <Reveal className="overflow-hidden rounded-[2rem] bg-graphite px-6 py-14 text-white md:px-12 md:py-20">
        <p className="eyebrow text-white/52">Próximo projeto</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2 className="text-[clamp(2.1rem,5vw,5.6rem)] font-light leading-[1.02]">Pronto para transformar sua ideia em produto?</h2>
          <div>
            <p className="text-lg font-light leading-8 text-white/72">
              Fale com a LQF Farmacêutica e descubra como desenvolver sua linha de cosméticos ou dermocosméticos com estrutura técnica, qualidade e segurança.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MinimalButton href="/contato" variant="light">Solicitar contato</MinimalButton>
              <MinimalButton href="https://wa.me/5500000000000" variant="darkGhost">Falar pelo WhatsApp</MinimalButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
