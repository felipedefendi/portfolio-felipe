"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Section } from "@/components/section";

export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience" title={t.experience.title}>
      <ol className="relative space-y-10 border-l border-border pl-6">
        {t.experience.items.map((item) => (
          <li key={item.company} className="relative">
            <span
              className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent"
              aria-hidden
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-semibold text-foreground">
                {item.role}
              </h3>
              <span className="text-xs font-medium text-muted-foreground">
                {item.period}
              </span>
            </div>
            <p className="text-sm text-accent">{item.company}</p>
            <ul className="mt-3 space-y-2">
              {item.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
