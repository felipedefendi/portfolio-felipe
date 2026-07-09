"use client";

import { ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { useLanguage } from "@/lib/i18n/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      {/* brilho de fundo sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(600px circle at 50% -10%, color-mix(in srgb, var(--accent) 25%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-24 sm:px-6 sm:py-32">
        <p className="text-sm font-medium text-muted-foreground">
          {t.hero.greeting}
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {t.hero.name}
        </h1>
        <p className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
          {t.hero.role}
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.tagline}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {t.hero.ctaProjects}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            {t.hero.ctaContact}
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/felipedefendi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-defendi-43215b209"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
