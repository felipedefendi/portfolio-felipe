"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#about", label: t.nav.about },
    { href: "/#skills", label: t.nav.skills },
    { href: "/#projects", label: t.nav.projects },
    { href: "/#experience", label: t.nav.experience },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur print:hidden">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Início">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-white">
            FD
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/cv"
            className="hidden items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <FileText className="h-4 w-4" />
            {t.nav.resume}
          </Link>
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-4 py-2 sm:px-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/cv"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground"
              >
                <FileText className="h-4 w-4" />
                {t.nav.resume}
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
