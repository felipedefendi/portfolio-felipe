import type { Locale } from "@/lib/i18n/dictionaries";

export type ProjectStatus = "live" | "in-progress" | "planned";

type ProjectContent = {
  title: string;
  tagline: string;
  description: string;
};

export type Project = {
  slug: string;
  status: ProjectStatus;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  content: Record<Locale, ProjectContent>;
};

export const projects: Project[] = [
  {
    slug: "painel-futebol",
    status: "planned",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind", "Recharts", "REST APIs"],
    content: {
      pt: {
        title: "Painel de Estatísticas de Futebol",
        tagline: "Dashboard de desempenho de times e jogadores.",
        description:
          "Aplicação full-stack que consome uma API pública de futebol para exibir classificações, forma recente dos times, estatísticas de jogadores e comparativos — com gráficos interativos, cache local dos dados e um modo demo resiliente a falhas de API.",
      },
      en: {
        title: "Football Statistics Dashboard",
        tagline: "A team and player performance dashboard.",
        description:
          "A full-stack app that consumes a public football API to show standings, recent team form, player statistics and comparisons — with interactive charts, local data caching and a demo mode resilient to API failures.",
      },
    },
  },
  {
    slug: "api-gestao",
    status: "planned",
    tags: ["NestJS", "PostgreSQL", "Prisma", "JWT", "Docker", "Swagger", "Jest"],
    content: {
      pt: {
        title: "API de Gestão (RESTful)",
        tagline: "API robusta com autenticação, testes e documentação.",
        description:
          "API RESTful para gestão de recursos empresariais, com autenticação JWT, banco relacional, documentação interativa (Swagger/OpenAPI) e testes automatizados — empacotada com Docker e seguindo boas práticas (SOLID, DTOs, validação).",
      },
      en: {
        title: "Management API (RESTful)",
        tagline: "A robust API with authentication, tests and documentation.",
        description:
          "A RESTful API for managing business resources, featuring JWT authentication, a relational database, interactive documentation (Swagger/OpenAPI) and automated tests — containerized with Docker and following best practices (SOLID, DTOs, validation).",
      },
    },
  },
  {
    slug: "assistente-ia",
    status: "planned",
    tags: ["Next.js", "TypeScript", "IA / Claude API", "Tailwind"],
    content: {
      pt: {
        title: "Assistente com IA",
        tagline: "Aplicação web com integração de IA generativa.",
        description:
          "Aplicação full-stack que integra IA generativa para gerar insights e respostas em tempo real, com streaming, interface responsiva e integração segura via server actions (sem expor chaves de API no frontend).",
      },
      en: {
        title: "AI Assistant",
        tagline: "A web app with generative AI integration.",
        description:
          "A full-stack app that integrates generative AI to produce real-time insights and answers, with response streaming, a responsive interface and secure server-side integration (no API keys exposed on the frontend).",
      },
    },
  },
];
