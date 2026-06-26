import { Reveal } from "@/components/Motion";

export function SectionTitle({ eyebrow, title, text, center = false }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 text-[clamp(2.2rem,5vw,5.8rem)] font-light leading-[0.98] text-graphite">{title}</h2>
      {text && <p className="body-large mt-7 max-w-3xl">{text}</p>}
    </Reveal>
  );
}
