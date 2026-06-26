import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Motion";

export function CardGrid({ items }: { items: Array<{ title: string; text: string; icon?: LucideIcon }> }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <Reveal
            key={item.title}
            delay={index * 0.04}
            className="group min-h-72 rounded-[1.5rem] border border-graphite/10 bg-white/70 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
          >
            {Icon && <Icon className="h-7 w-7 text-brass" strokeWidth={1.4} />}
            <h3 className="mt-10 text-2xl font-light text-graphite">{item.title}</h3>
            <p className="mt-5 text-sm leading-7 text-graphite/64">{item.text}</p>
          </Reveal>
        );
      })}
    </div>
  );
}
