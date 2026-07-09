"use client";

import Link from "next/link";
import { ArrowLeft, FileDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { skillTiers } from "@/lib/data/skills";
import { contactInfo } from "@/lib/data/contact";

export default function CvPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-background py-8 print:bg-white print:py-0">
      {/* Barra de ações (some na impressão) */}
      <div className="mx-auto mb-6 flex max-w-[820px] items-center justify-between px-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.cv.backToSite}
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          <FileDown className="h-4 w-4" />
          {t.cv.download}
        </button>
      </div>

      {/* Folha do currículo — acompanha o tema na tela, branca na impressão */}
      <article
        id="cv-sheet"
        className="mx-auto max-w-[820px] rounded-xl border border-border bg-card p-10 text-foreground shadow-lg print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none"
      >
        {/* Cabeçalho */}
        <header className="border-b border-border pb-5">
          <h1 className="text-3xl font-bold text-foreground">{t.hero.name}</h1>
          <p className="mt-1 text-lg font-medium text-accent">{t.hero.role}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>{contactInfo.email}</span>
            <span>{contactInfo.phoneDisplay}</span>
            <span>{t.contact.locationValue}</span>
            <span>{contactInfo.github}</span>
            <span>{contactInfo.linkedin}</span>
          </div>
        </header>

        {/* Resumo */}
        <Block title={t.cv.summaryLabel}>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t.cv.summary}
          </p>
        </Block>

        {/* Habilidades */}
        <Block title={t.skills.title}>
          <div className="space-y-1.5">
            {skillTiers.map((tier) => (
              <p key={tier.id} className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {t.skills.tiers[tier.id].label}:{" "}
                </span>
                {tier.items.join(" · ")}
              </p>
            ))}
          </div>
        </Block>

        {/* Experiência */}
        <Block title={t.experience.title}>
          <div className="space-y-4">
            {t.experience.items.map((item) => (
              <div key={item.company}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-accent">{item.company}</p>
                <ul className="mt-1.5 space-y-1">
                  {item.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-snug text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Block>

        {/* Formação & Idiomas */}
        <Block title={t.education.title}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-foreground">
                {t.education.degree}
              </p>
              <p className="text-sm text-muted-foreground">
                {t.education.school} · {t.education.period}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {t.education.languagesLabel}
              </p>
              <ul className="text-sm text-muted-foreground">
                {t.education.languages.map((lang) => (
                  <li key={lang.name}>
                    {lang.name} — {lang.level}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Block>
      </article>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}
