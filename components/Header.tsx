"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems, type NavItem } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { MinimalButton } from "@/components/MinimalButton";

function DesktopNavItem({ item }: { item: NavItem }) {
  if (!item.children?.length) {
    return (
      <Link href={item.href} className="transition hover:text-graphite">
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link href={item.href} className="inline-flex items-center gap-1.5 transition hover:text-graphite">
        <span>{item.label}</span>
        <ChevronDown className="h-3.5 w-3.5 text-graphite/45 transition group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-[1.35rem] border border-graphite/10 bg-white/95 p-2 shadow-soft backdrop-blur-xl">
          {item.children.map((child) => (
            <div key={child.href} className="group/item relative">
              <Link
                href={child.href}
                className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm text-graphite/72 transition hover:bg-porcelain hover:text-graphite"
              >
                <span>{child.label}</span>
                {child.children?.length ? <ChevronRight className="h-3.5 w-3.5 text-graphite/40" /> : null}
              </Link>
              {child.children?.length ? (
                <div className="invisible absolute left-full top-0 w-72 pl-3 opacity-0 transition duration-200 group-hover/item:visible group-hover/item:opacity-100 group-focus-within/item:visible group-focus-within/item:opacity-100">
                  <div className="rounded-[1.35rem] border border-graphite/10 bg-white/95 p-2 shadow-soft backdrop-blur-xl">
                    {child.children.map((grandchild) => (
                      <Link
                        key={grandchild.href}
                        href={grandchild.href}
                        className="block rounded-2xl px-4 py-3 text-sm text-graphite/72 transition hover:bg-porcelain hover:text-graphite"
                      >
                        {grandchild.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({ item, onNavigate, level = 0 }: { item: NavItem; onNavigate: () => void; level?: number }) {
  return (
    <div>
      <Link
        href={item.href}
        onClick={onNavigate}
        className={`flex items-center justify-between rounded-2xl py-3 text-graphite transition hover:bg-white ${
          level === 0 ? "px-4 text-lg font-light" : level === 1 ? "px-6 text-base font-normal text-graphite/72" : "px-8 text-sm font-medium text-graphite/68"
        }`}
      >
        <span>{item.label}</span>
        {item.children?.length ? <ChevronDown className="h-4 w-4 text-graphite/36" /> : null}
      </Link>
      {item.children?.length ? (
        <div className="ml-3 border-l border-graphite/10">
          {item.children.map((child) => (
            <MobileNavItem key={child.href} item={child} onNavigate={onNavigate} level={level + 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    if (isAdmin) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isAdmin]);

  if (isAdmin) return null;

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className={`mx-auto flex max-w-[1500px] items-center justify-between rounded-full px-4 py-3 transition ${scrolled || open ? "glass-nav" : "bg-white/20 backdrop-blur-md"}`}>
        <Link href="/" className="flex items-center">
          <Logo priority />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-normal text-graphite/72 lg:flex">
          {navItems.map((item) => <DesktopNavItem key={item.href} item={item} />)}
        </nav>

        <div className="hidden lg:block">
          <MinimalButton href="/contato#formulario">Desenvolva sua linha</MinimalButton>
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
            {navItems.map((item) => <MobileNavItem key={item.href} item={item} onNavigate={() => setOpen(false)} />)}
          </nav>
          <div className="mt-3">
            <MinimalButton href="/contato#formulario">Desenvolva sua linha</MinimalButton>
          </div>
        </div>
      )}
    </header>
  );
}
