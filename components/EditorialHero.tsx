import Image from "next/image";
import { Reveal } from "@/components/Motion";

export function EditorialHero({
  eyebrow,
  title,
  text,
  image,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  align?: "left" | "right";
}) {
  return (
    <section className="section-shell py-12 md:py-20">
      <Reveal className="relative min-h-[560px] overflow-hidden rounded-[1.5rem] bg-graphite shadow-soft md:min-h-[640px] md:rounded-[2rem]">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover brightness-[0.72]" />
        <div className="absolute inset-0 bg-graphite/24" />
        <div className={`absolute inset-0 ${align === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-graphite/88 via-graphite/58 to-graphite/20`} />
        <div className={`absolute inset-0 flex items-end px-5 pb-12 pt-24 md:px-12 md:pb-12 md:pt-28 ${align === "right" ? "justify-end text-right" : ""}`}>
          <div className="max-w-2xl">
            <p className="eyebrow !text-white/75">{eyebrow}</p>
            <h2 className="mt-4 text-[clamp(1.85rem,4.2vw,4.8rem)] font-light leading-[1] !text-white">{title}</h2>
            <p className={`mt-5 max-w-xl text-[0.82rem] font-light leading-6 !text-white/80 md:mt-6 md:text-base md:leading-8 ${align === "right" ? "ml-auto" : ""}`}>{text}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
