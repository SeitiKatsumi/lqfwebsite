"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "@/components/Motion";
import { SectionTitle } from "@/components/SectionTitle";

const structureNumbers = [
  "39",
  "40",
  "41",
  "42",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "36",
  "37",
  "38"
];

const structureImages = structureNumbers.map((number) => ({
  mono: `/structure/estrutura-${number}-mono.jpg`,
  color: `/structure/estrutura-${number}-pro.jpg`
}));

export function StructureCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "previous" | "next") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const distance = Math.min(scroller.clientWidth * 0.82, 760);
    scroller.scrollBy({ left: direction === "next" ? distance : -distance, behavior: "smooth" });
  };

  return (
    <section className="section-shell py-16 md:py-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          eyebrow="Estrutura LQF"
          title="Nossa estrutura"
          text="Um olhar sobre a estrutura técnica que sustenta pesquisa, qualidade, produção e rastreabilidade dentro da LQF."
        />
        <Reveal className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll("previous")}
            className="grid h-12 w-12 place-items-center rounded-full border border-graphite/12 bg-white text-graphite transition hover:border-graphite/28"
            aria-label="Ver fotos anteriores"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("next")}
            className="grid h-12 w-12 place-items-center rounded-full bg-graphite text-white transition hover:bg-graphite/88"
            aria-label="Ver próximas fotos"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-10">
        <div
          ref={scrollerRef}
          className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-5 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 [&::-webkit-scrollbar]:hidden"
        >
          {structureImages.map((item, index) => (
            <div
              key={item.mono}
              className="group relative aspect-[16/10] w-[78vw] max-w-[720px] shrink-0 snap-start overflow-hidden rounded-[1.5rem] bg-mist shadow-soft md:w-[58vw] lg:w-[42vw]"
              tabIndex={0}
            >
              <Image
                src={item.mono}
                alt={`Estrutura LQF ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 42vw, (min-width: 768px) 58vw, 78vw"
                className="object-cover transition duration-700 group-hover:scale-[1.025] group-focus:scale-[1.025]"
              />
              <Image
                src={item.color}
                alt=""
                fill
                sizes="(min-width: 1024px) 42vw, (min-width: 768px) 58vw, 78vw"
                className="object-cover opacity-0 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100 group-focus:scale-[1.025] group-focus:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/24 via-transparent to-transparent opacity-80" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
