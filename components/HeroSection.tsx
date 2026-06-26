import Image from "next/image";
import { MinimalButton } from "@/components/MinimalButton";

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  image,
  primary = "Desenvolva sua linha",
  secondary,
  compact = false
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  primary?: string;
  secondary?: string;
  compact?: boolean;
}) {
  return (
    <section className="grain relative overflow-hidden pt-24">
      <div className={`section-shell grid items-center gap-8 py-8 lg:grid-cols-[0.92fr_1.08fr] ${compact ? "min-h-[78svh]" : "min-h-svh"}`}>
        <div className="relative z-10 pb-6">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="display-title mt-7">{title}</h1>
          <p className="body-large mt-8 max-w-2xl">{subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <MinimalButton href="/contato#formulario">{primary}</MinimalButton>
            {secondary && <MinimalButton href="/tecnologia" variant="ghost">{secondary}</MinimalButton>}
          </div>
        </div>
        <div className="relative min-h-[52svh] overflow-hidden rounded-[2rem] bg-mist shadow-soft md:min-h-[72svh]">
          <Image src={image} alt="" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/22 via-transparent to-white/10" />
        </div>
      </div>
    </section>
  );
}
