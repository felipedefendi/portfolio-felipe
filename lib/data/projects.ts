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
  repos?: { label: string; url: string }[];
  liveUrl?: string;
  content: Record<Locale, ProjectContent>;
};

export const projects: Project[] = [
  {
    slug: "futscorestats",
    status: "live",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind", "Recharts", "Zod", "Jest"],
    repoUrl: "https://github.com/felipedefendi/futscorestats",
    liveUrl: "https://futscorestats.vercel.app",
    content: {
      pt: {
        title: "FutScoreStats",
        tagline: "Painel de estatísticas do Campeonato Brasileiro.",
        description:
          "Aplicação full-stack que integra a API football-data.org para exibir classificação, forma recente e desempenho dos times do Brasileirão, com gráficos interativos. Os dados reais são armazenados em PostgreSQL como camada de cache (via Prisma), e um modo demonstração determinístico garante que o app nunca fique fora do ar por falha da API.",
      },
      en: {
        title: "FutScoreStats",
        tagline: "A Brazilian football league statistics dashboard.",
        description:
          "A full-stack app that integrates the football-data.org API to show standings, recent form and team performance for Brazil's top league, with interactive charts. Real data is cached in PostgreSQL via Prisma, and a deterministic demo mode ensures the app never goes down due to an API failure.",
      },
    },
  },
  {
    slug: "templates-sites-institucionais",
    status: "in-progress",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repos: [
      { label: "Essencial", url: "https://github.com/felipedefendi/site-essencial" },
      { label: "Profissional", url: "https://github.com/felipedefendi/site-profissional" },
      { label: "Conversão", url: "https://github.com/felipedefendi/site-conversao" },
      { label: "Premium", url: "https://github.com/felipedefendi/site-premium" },
    ],
    content: {
      pt: {
        title: "Templates de Sites Institucionais",
        tagline: "Linha de templates para venda a pequenos negócios locais.",
        description:
          "Quatro templates Next.js prontos para reuso comercial (Essencial, Profissional, Conversão e Premium), cada um com um nível de complexidade — de uma página institucional simples até um site com blog, SEO avançado e captação de leads em etapas. Cada projeto centraliza os dados do cliente em um único arquivo de configuração, permitindo aplicar o mesmo template a um novo negócio em minutos.",
      },
      en: {
        title: "Local Business Website Templates",
        tagline: "A line of templates for selling websites to small local businesses.",
        description:
          "Four ready-to-reuse Next.js templates (Essential, Professional, Conversion and Premium), each at a different complexity tier — from a simple one-page site to a full site with a blog, advanced SEO and multi-step lead capture. Each project centralizes client data in a single config file, so the same template can be applied to a new business in minutes.",
      },
    },
  },
  {
    slug: "fieldcore-api",
    status: "live",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Docker", "Swagger", "Jest"],
    repoUrl: "https://github.com/felipedefendi/fieldcore-api",
    liveUrl: "https://fieldcore-api.onrender.com/api/docs",
    content: {
      pt: {
        title: "FieldCore API",
        tagline: "API multi-tenant de gestão de ordens de serviço e manutenção.",
        description:
          "API RESTful para empresas de manutenção/assistência técnica gerenciarem clientes, equipamentos e ordens de serviço, com isolamento real entre empresas (multi-tenant), RBAC por papel, JWT com access e refresh token rotacionado, e uma máquina de estados para o ciclo de vida da ordem de serviço. Documentada em Swagger, com Docker Compose e testes automatizados.",
      },
      en: {
        title: "FieldCore API",
        tagline: "A multi-tenant work order and maintenance management API.",
        description:
          "A RESTful API for field service companies to manage customers, equipment and work orders, with real multi-tenant isolation, role-based access control, JWT with rotating refresh tokens, and a state machine for the work order lifecycle. Documented with Swagger, containerized with Docker Compose, and automated tests.",
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
