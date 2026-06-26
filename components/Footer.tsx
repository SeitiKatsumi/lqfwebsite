import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-graphite/10 bg-graphite text-white">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-8 max-w-md text-2xl font-light leading-tight text-white/82">A ciência por trás da beleza.</p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm text-white/64">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-4 text-sm text-white/68">
          <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Endereço institucional LQF</p>
          <p className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0" /> Telefone / WhatsApp</p>
          <p className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0" /> contato@lqf.com.br</p>
          <p className="flex gap-3"><Instagram className="mt-0.5 h-4 w-4 shrink-0" /> @lqflaboratorio</p>
        </div>
      </div>
      <div className="section-shell border-t border-white/10 py-6 text-xs text-white/45">
        © {new Date().getFullYear()} LQF Farmacêutica. Todos os direitos reservados.
      </div>
    </footer>
  );
}
