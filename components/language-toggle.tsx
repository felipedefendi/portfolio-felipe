"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      aria-label={t.lang.toggle}
      title={t.lang.toggle}
      onClick={toggleLocale}
      className="inline-flex h-9 items-center justify-center gap-1 rounded-lg border border-border bg-card px-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
    >
      <span className={locale === "pt" ? "text-accent" : "text-muted-foreground"}>
        PT
      </span>
      <span className="text-border">/</span>
      <span className={locale === "en" ? "text-accent" : "text-muted-foreground"}>
        EN
      </span>
    </button>
  );
}
