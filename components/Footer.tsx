import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-graphite/10 bg-porcelain text-graphite">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <Logo variant="vertical" />
          <p className="mt-8 max-w-md text-2xl font-light leading-tight text-graphite/74">A ciência por trás da beleza.</p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm text-graphite/62">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-graphite">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-4 text-sm text-graphite/62">
          <p className="flex gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              Avenida Floriano Andre Cabrera, 1361
              <br />
              Cidade Jardim | CEP: 15.081-190
              <br />
              São José do Rio Preto - SP
            </span>
          </p>
          <p className="flex gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0" />
            <a href="tel:+551732093010" className="transition hover:text-graphite">17 3209-3010</a>
          </p>
          <p className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0" /> contato@lqf.com.br</p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.facebook.com/GrupoLQF/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook LQF"
              className="grid h-10 w-10 place-items-center rounded-full border border-graphite/12 bg-white text-graphite/70 transition hover:border-graphite/28 hover:text-graphite"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/lqflaboratorio/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram LQF"
              className="grid h-10 w-10 place-items-center rounded-full border border-graphite/12 bg-white text-graphite/70 transition hover:border-graphite/28 hover:text-graphite"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell border-t border-graphite/10 py-6 text-xs text-graphite/45">
        © {new Date().getFullYear()} LQF Farmacêutica. Todos os direitos reservados.
      </div>
    </footer>
  );
}
