import { processSteps } from "@/lib/site";
import { Reveal } from "@/components/Motion";

export function ProcessTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-4">
      {processSteps.slice(0, compact ? 4 : processSteps.length).map((step, index) => (
        <Reveal key={step.title} delay={index * 0.05} className="grid gap-5 rounded-[1.5rem] border border-graphite/10 bg-white/72 p-5 md:grid-cols-[9rem_1fr] md:p-7">
          <div className="text-sm text-ash">0{index + 1}</div>
          <div>
            <h3 className="text-2xl font-light text-graphite">{step.title}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-graphite/65">{step.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
