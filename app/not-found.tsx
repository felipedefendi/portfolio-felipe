"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-4 text-center">
      <p className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-7xl font-extrabold text-transparent sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-foreground">
        {t.notFound.title}
      </h1>
      <p className="mt-2 text-muted-foreground">{t.notFound.description}</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.notFound.back}
      </Link>
    </div>
  );
}
