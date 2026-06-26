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
    <section className="section-shell py-16 md:py-28">
      <Reveal className="relative min-h-[68svh] overflow-hidden rounded-[2rem] bg-graphite shadow-soft">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
        <div className={`absolute inset-0 ${align === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-graphite/86 via-graphite/46 to-graphite/8`} />
        <div className={`absolute inset-0 flex items-end p-6 md:p-12 ${align === "right" ? "justify-end text-right" : ""}`}>
          <div className="max-w-3xl">
            <p className="eyebrow !text-white/75">{eyebrow}</p>
            <h2 className="mt-5 text-[clamp(2.4rem,6vw,6.8rem)] font-light leading-none !text-white">{title}</h2>
            <p className={`mt-7 max-w-2xl text-base leading-8 !text-white/80 md:text-lg ${align === "right" ? "ml-auto" : ""}`}>{text}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
