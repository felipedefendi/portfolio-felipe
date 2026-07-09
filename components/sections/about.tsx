"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Section } from "@/components/section";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" title={t.about.title}>
      <div className="grid gap-10 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-1">
          {t.about.highlights.map((h) => (
            <li
              key={h.label}
              className="rounded-xl border border-border bg-card p-4"
            >
              <p className="text-lg font-bold text-foreground">{h.value}</p>
              <p className="text-sm text-muted-foreground">{h.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
