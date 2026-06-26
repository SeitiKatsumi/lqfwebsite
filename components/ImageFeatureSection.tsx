import Image from "next/image";
import { Reveal } from "@/components/Motion";
import { MinimalButton } from "@/components/MinimalButton";

export function ImageFeatureSection({
  eyebrow,
  title,
  text,
  image,
  reverse,
  button
}: {
  eyebrow?: string;
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
  button?: { href: string; label: string };
}) {
  return (
    <section className="section-shell py-12 md:py-28">
      <div className={`grid items-center gap-8 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal className="overflow-hidden rounded-[2rem] bg-mist shadow-soft">
          <div className="relative aspect-[4/5] md:aspect-[16/12]">
            <Image src={image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal className="px-1 md:px-8" delay={0.1}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,4.8rem)] font-light leading-[1.02] text-graphite">{title}</h2>
          <p className="body-large mt-5 md:mt-7">{text}</p>
          {button && <div className="mt-8"><MinimalButton href={button.href} variant="ghost">{button.label}</MinimalButton></div>}
        </Reveal>
      </div>
    </section>
  );
}
