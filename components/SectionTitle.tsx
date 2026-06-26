import { Reveal } from "@/components/Motion";

export function SectionTitle({ eyebrow, title, text, center = false }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 text-[clamp(2rem,4.6vw,5rem)] font-light leading-[1.02] text-graphite">{title}</h2>
      {text && <p className="body-large mt-5 max-w-3xl md:mt-7">{text}</p>}
    </Reveal>
  );
}
