"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Section } from "@/components/section";
import { skillTiers } from "@/lib/data/skills";

const tierAccent: Record<string, string> = {
  core: "bg-accent",
  proficient: "bg-accent-2",
  familiar: "bg-muted-foreground",
};

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" title={t.skills.title} subtitle={t.skills.subtitle}>
      <div className="space-y-8">
        {skillTiers.map((tier) => {
          const meta = t.skills.tiers[tier.id];
          return (
            <div key={tier.id} className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${tierAccent[tier.id]}`}
                  aria-hidden
                />
                <h3 className="font-semibold text-foreground">{meta.label}</h3>
                <span className="text-xs text-muted-foreground">
                  {meta.description}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {tier.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
