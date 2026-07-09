"use client";

import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { useLanguage } from "@/lib/i18n/language-context";

const socials = [
  {
    href: "https://github.com/felipedefendi",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://www.linkedin.com/in/felipe-defendi-43215b209",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "mailto:felipe.defendi@outlook.com.br",
    label: "E-mail",
    icon: Mail,
  },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Felipe Defendi. {t.footer.rights}
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
