"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { MinimalButton } from "@/components/MinimalButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className={`mx-auto flex max-w-[1500px] items-center justify-between rounded-full px-4 py-3 transition ${scrolled || open ? "glass-nav" : "bg-white/20 backdrop-blur-md"}`}>
        <Link href="/" className="flex items-center">
          <Logo compact />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-normal text-graphite/72 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-graphite">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MinimalButton href="/contato">Desenvolva sua linha</MinimalButton>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-graphite/15 bg-white/60 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-[1500px] rounded-[28px] border border-graphite/10 bg-porcelain/96 p-4 shadow-soft backdrop-blur-xl lg:hidden">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-lg font-light text-graphite transition hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3">
            <MinimalButton href="/contato">Desenvolva sua linha</MinimalButton>
          </div>
        </div>
      )}
    </header>
  );
}
