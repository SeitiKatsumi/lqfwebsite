export function Logo({ compact = false, tone = "dark" }: { compact?: boolean; tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-white" : "text-graphite";
  const muted = tone === "light" ? "text-white/56" : "text-ash";

  return (
    <div className={`leading-none ${color}`} aria-label="LQF Farmacêutica">
      <div className={compact ? "text-2xl font-light" : "text-[2rem] font-light"}>LQF</div>
      {!compact && <div className={`mt-1 text-[0.55rem] font-normal uppercase ${muted}`}>Farmacêutica</div>}
    </div>
  );
}
