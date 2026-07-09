"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { Section } from "@/components/section";
import { GitHubIcon } from "@/components/icons";
import { projects, type ProjectStatus } from "@/lib/data/projects";

const statusDot: Record<ProjectStatus, string> = {
  live: "bg-emerald-500",
  "in-progress": "bg-amber-500",
  planned: "bg-muted-foreground",
};

export function Projects() {
  const { t, locale } = useLanguage();

  return (
    <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const c = project.content[locale];
          return (
            <article
              key={project.slug}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <span
                    className={`h-2 w-2 rounded-full ${statusDot[project.status]}`}
                    aria-hidden
                  />
                  {t.projects.status[project.status]}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {c.tagline}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-sm">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-accent"
                  >
                    {t.projects.viewLive}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    {t.projects.viewCode}
                  </a>
                ) : null}
                {project.repos?.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    {repo.label}
                  </a>
                ))}
                {!project.liveUrl && !project.repoUrl && !project.repos?.length ? (
                  <span className="text-xs text-muted-foreground">
                    {t.projects.comingSoon}
                  </span>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
