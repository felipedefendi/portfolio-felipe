"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { Section } from "@/components/section";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import {
  contactInfo,
  emailUrl,
  whatsappUrl,
} from "@/lib/data/contact";

export function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(t.contact.form.subject);
    const body = encodeURIComponent(
      `${name}\n${email}\n\n${message}`,
    );
    window.location.href = `${emailUrl}?subject=${subject}&body=${body}`;
  }

  const channels = [
    {
      label: t.contact.channels.emailLabel,
      value: contactInfo.email,
      href: emailUrl,
      icon: Mail,
    },
    {
      label: t.contact.channels.whatsappLabel,
      value: contactInfo.phoneDisplay,
      href: whatsappUrl,
      icon: MessageCircle,
    },
    {
      label: t.contact.channels.linkedinLabel,
      value: contactInfo.linkedin,
      href: contactInfo.linkedinUrl,
      icon: LinkedInIcon,
    },
    {
      label: t.contact.channels.githubLabel,
      value: contactInfo.github,
      href: contactInfo.githubUrl,
      icon: GitHubIcon,
    },
  ];

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                {t.contact.form.name}
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.form.namePlaceholder}
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                {t.contact.form.email}
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contact.form.emailPlaceholder}
                className={inputClass}
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-sm font-medium">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.contact.form.messagePlaceholder}
              className={`${inputClass} resize-y`}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            {t.contact.form.send}
          </button>
        </form>

        <div className="space-y-3">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/60"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">
                  {label}
                </span>
                <span className="block truncate text-sm font-medium text-foreground">
                  {value}
                </span>
              </span>
            </a>
          ))}
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
              <MapPin className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">
                {t.contact.channels.locationLabel}
              </span>
              <span className="block text-sm font-medium text-foreground">
                {t.contact.locationValue}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
