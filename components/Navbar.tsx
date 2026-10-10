"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-white ${isActive(l.href) ? "text-gold" : "text-mist"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link href="/internships" className="btn-primary hidden md:inline-flex">Explore Internships</Link>
          <button
            type="button"
            className="rounded-md p-2 text-slate-200 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-charcoal px-5 pb-5 pt-2 md:hidden">
          <ul className="flex flex-col">
            {siteConfig.nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-3 text-mist hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/internships" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">Explore Internships</Link>
        </div>
      )}
    </header>
  );
}
