import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Motion";

export function ProductCategoryCard({ title, text, image, index }: { title: string; text: string; image: string; index: number }) {
  return (
    <Reveal delay={(index % 4) * 0.04} className="group overflow-hidden rounded-[1.75rem] border border-graphite/10 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/38 to-transparent opacity-70" />
      </div>
      <div className="grid min-h-56 gap-8 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-light text-graphite">{title}</h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-brass transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="self-end text-sm leading-7 text-graphite/64">{text}</p>
      </div>
    </Reveal>
  );
}
