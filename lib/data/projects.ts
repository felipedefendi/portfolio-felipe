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
    slug: "faxina",
    status: "in-progress",
    tags: ["Flutter", "Dart", "UI/UX", "Arquitetura Modular"],
    repoUrl: "https://github.com/felipedefendi/faxina-front",
    content: {
      pt: {
        title: "Faxina!",
        tagline: "App que conecta prestadoras de serviços domésticos diretamente ao cliente.",
        description:
          "Aplicativo mobile que conecta prestadoras de serviços domésticos diretamente aos clientes, sem intermediários. Atuei principalmente na estruturação do mockup, das regras de negócio e do fluxo do produto, no desenho da interface e no desenvolvimento do Front-end em Flutter, usando uma arquitetura modular voltada a um melhor desempenho do app.",
      },
      en: {
        title: "Faxina!",
        tagline: "An app connecting home cleaning service providers directly to clients.",
        description:
          "A mobile app that connects home cleaning service providers directly to clients, with no intermediaries. I was mainly responsible for structuring the mockups, business rules and product flow, the interface design, and the Flutter front-end development, using a modular architecture aimed at better app performance.",
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
    slug: "softdesk-hcm-bot",
    status: "live",
    tags: [
      "Node.js",
      "TypeScript",
      "React",
      "Vite",
      "Express",
      "Playwright",
      "API Senior X",
      "GitHub Actions",
      "Nginx",
      "Oracle Cloud",
    ],
    repoUrl: "https://github.com/felipedefendi/softdesk-hcm-bot",
    liveUrl: "https://painelhcm.duckdns.org",
    content: {
      pt: {
        title: "SoftDesk HCM Bot + Painel HCM",
        tagline: "Automação de rodízio de chamados com painel de gestão da equipe de suporte.",
        description:
          "Automação em produção 24/7 que monitora a fila de chamados sem atendente do SoftDesk (sistema de chamados da Senior) e, quando o SLA de encaminhamento estoura, atribui ao próximo atendente do rodízio e notifica o time no Microsoft Teams via Power Automate. O Painel HCM (React + Vite) traz oito telas: fila ao vivo com SLA regressivo, saúde do bot, histórico, rodízio reordenável, cofre de credenciais cifradas (AES-256-GCM), auditoria e gestão de usuários, com login individual autenticado na API do Senior X Platform e relatórios diário/semanal/mensal no Teams. Integração por engenharia reversa da API interna do SoftDesk; deploy contínuo com GitHub Actions numa VM Oracle Cloud (systemd, nginx, HTTPS).",
      },
      en: {
        title: "SoftDesk HCM Bot + HCM Dashboard",
        tagline: "Ticket round-robin automation with a management dashboard for the support team.",
        description:
          "A 24/7 production automation that monitors the unassigned-ticket queue of SoftDesk (Senior's ticketing system) and, once the routing SLA is exceeded, assigns the ticket to the next agent in rotation and notifies the team on Microsoft Teams via Power Automate. The HCM Dashboard (React + Vite) has eight screens: live queue with SLA countdown, bot health, history, reorderable rotation, encrypted credential vault (AES-256-GCM), audit log and user management, with per-user login authenticated against the Senior X Platform API and daily/weekly/monthly reports on Teams. Integration built by reverse-engineering SoftDesk's internal API; continuous deployment with GitHub Actions to an Oracle Cloud VM (systemd, nginx, HTTPS).",
      },
    },
  },
  {
    slug: "motor-edicao-video",
    status: "live",
    tags: ["Python", "FFmpeg", "OpenCV", "Whisper", "PyTorch", "Pillow", "Claude Code", "Agentes de IA"],
    content: {
      pt: {
        title: "Motor de Edição de Vídeo Automatizada",
        tagline: "Pipeline em Python que monta, substitui e audita vídeos a partir de um job em JSON.",
        description:
          "Conjunto de scripts Python 3.12 orientados a jobs (configuração em JSON) que transcrevem o áudio com Whisper (PyTorch/CUDA), alinham o roteiro palavra a palavra, geram tipografia cinética em legendas ASS com medição de fonte via Pillow calibrada contra o libass e renderizam com FFmpeg usando filtros compostos, concatenação sem perdas e processamento paralelo. Inclui visão computacional com OpenCV (rastreamento ORB/RANSAC, inpainting, máscaras HSV, compositing com sombra), separação de voz com Demucs, substituição de falas alinhada por difflib, banco de efeitos sonoros com corte por transiente, detector de lip-sync quebrado e auditoria automática do render por comparação de histogramas. Empacotado como skill de agente para Claude Code, Codex e Custom GPT, com documentação para operação por IA.",
      },
      en: {
        title: "Automated Video Editing Engine",
        tagline: "A Python pipeline that assembles, replaces and audits videos from a JSON job file.",
        description:
          "A set of job-driven Python 3.12 scripts (JSON config) that transcribe audio with Whisper (PyTorch/CUDA), align the script word by word, generate kinetic typography as ASS subtitles with Pillow font metrics calibrated against libass, and render with FFmpeg using complex filter graphs, lossless concatenation and parallel processing. Includes computer vision with OpenCV (ORB/RANSAC tracking, inpainting, HSV masks, shadow compositing), vocal separation with Demucs, difflib-aligned speech replacement, a transient-cut sound effects bank, a broken lip-sync detector and automatic render auditing via histogram comparison. Packaged as an agent skill for Claude Code, Codex and Custom GPT, with documentation for AI-driven operation.",
      },
    },
  },
  {
    slug: "jukedigital",
    status: "in-progress",
    tags: ["Cloudflare Workers", "Hono", "Durable Objects", "D1", "React", "Tailwind", "Spotify API", "Turborepo"],
    content: {
      pt: {
        title: "JukeDigital",
        tagline: "Jukebox digital para bares e restaurantes, com fila controlada pelo estabelecimento.",
        description:
          "Clientes escolhem músicas pelo celular via QR Code na mesa, o estabelecimento modera a fila e a reprodução toca num painel web ligado ao som do local. Monorepo (pnpm + Turborepo) com API em Cloudflare Workers (Hono) usando Durable Objects para o estado de cada sala, D1, KV e R2, frontend React + Vite + Tailwind, schemas Zod compartilhados e integração com a API e o Web Playback SDK do Spotify.",
      },
      en: {
        title: "JukeDigital",
        tagline: "A digital jukebox for bars and restaurants, with a venue-controlled queue.",
        description:
          "Customers pick songs from their phones via a QR code on the table, the venue moderates the queue and playback runs on a web player connected to the venue's sound system. Monorepo (pnpm + Turborepo) with a Cloudflare Workers API (Hono) using Durable Objects for per-room state, D1, KV and R2, a React + Vite + Tailwind frontend, shared Zod schemas and integration with the Spotify API and Web Playback SDK.",
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
