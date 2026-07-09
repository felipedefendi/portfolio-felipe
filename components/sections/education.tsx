"use client";

import { GraduationCap, Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { Section } from "@/components/section";

export function Education() {
  const { t } = useLanguage();
  const e = t.education;

  return (
    <Section id="education" title={e.title}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2 text-accent">
            <GraduationCap className="h-5 w-5" />
            <h3 className="font-semibold text-foreground">
              {e.educationLabel}
            </h3>
          </div>
          <p className="font-medium text-foreground">{e.degree}</p>
          <p className="text-sm text-muted-foreground">
            {e.school} · {e.period}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2 text-accent">
            <Languages className="h-5 w-5" />
            <h3 className="font-semibold text-foreground">
              {e.languagesLabel}
            </h3>
          </div>
          <ul className="space-y-3">
            {e.languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-center justify-between"
              >
                <span className="text-foreground">{lang.name}</span>
                <span className="text-sm text-muted-foreground">
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
