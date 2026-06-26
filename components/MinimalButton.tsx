import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function MinimalButton({
  href,
  children,
  variant = "dark"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "ghost" | "darkGhost";
}) {
  const styles = {
    dark: "bg-graphite text-white hover:bg-graphite/88",
    light: "bg-white text-graphite hover:bg-porcelain",
    ghost: "border border-graphite/20 text-graphite hover:border-graphite/45 hover:bg-white/60",
    darkGhost: "border border-white/20 text-white hover:border-white/45 hover:bg-white/10"
  };

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition ${styles[variant]}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
