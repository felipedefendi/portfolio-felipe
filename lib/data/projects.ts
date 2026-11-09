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
          "Automação em produção 24/7 que monitora a fila de chamados sem atendente do SoftDesk (sistema de chamados da Senior) e, quando o SLA estoura, atribui ao próximo atendente do rodízio e notifica o time no Microsoft Teams com Adaptive Cards e @menção real. A integração com o SoftDesk foi feita por engenharia reversa da API interna que a própria SPA usa, sem navegador. O Painel HCM (React + Vite) autentica cada pessoa na API do Senior X Platform, gerencia usuários com papéis e vínculo ao atendente do SoftDesk, guarda credenciais de clientes num cofre AES-256-GCM com destrave temporário, registra auditoria append-only e decide toda permissão no servidor. Relatórios diário, semanal e mensal da fila chegam no Teams; oito telas cobrem fila ao vivo com SLA regressivo, saúde do bot, histórico, rodízio, agenda de férias e feriados, cofre, usuários e auditoria. Deploy contínuo com GitHub Actions numa VM Oracle Cloud (systemd, nginx, HTTPS, fail2ban).",
      },
      en: {
        title: "SoftDesk HCM Bot + HCM Dashboard",
        tagline: "Ticket round-robin automation with a management dashboard for the support team.",
        description:
          "A 24/7 production automation that monitors the unassigned-ticket queue of SoftDesk (Senior's ticketing system) and, once the SLA is exceeded, assigns the ticket to the next agent in rotation and notifies the team on Microsoft Teams with Adaptive Cards and real @mentions. The SoftDesk integration was built by reverse-engineering the internal API the SPA itself uses, with no browser. The HCM Dashboard (React + Vite) authenticates each person against the Senior X Platform API, manages users with roles linked to their SoftDesk agent, stores client credentials in an AES-256-GCM vault with temporary unlock, keeps an append-only audit log and enforces every permission server-side. Daily, weekly and monthly queue reports go to Teams; eight screens cover the live queue with SLA countdown, bot health, history, rotation, vacation and holiday schedule, vault, users and audit. Continuous deployment with GitHub Actions to an Oracle Cloud VM (systemd, nginx, HTTPS, fail2ban).",
      },
    },
  },
  {
    slug: "motor-edicao-video",
    status: "live",
    tags: ["Python", "FFmpeg", "OpenCV", "Whisper", "Demucs", "Hyperframes MCP", "SQLite", "Claude Code", "Codex", "Agentes de IA"],
    content: {
      pt: {
        title: "Motor de Edição de Vídeo + Estúdio Criativo",
        tagline: "Pipeline em Python operado por agentes de IA, com interface local de revisão e aprovação.",
        description:
          "Motor Python 3.12 orientado a jobs: transcrição com Whisper (PyTorch/CUDA), timeline cortada pela voz real, tipografia cinética em ASS (Pillow calibrado contra o libass), render FFmpeg com filtros compostos e concatenação sem perdas em paralelo, visão computacional com OpenCV (rastreamento ORB/RANSAC, inpainting, máscaras HSV), separação de voz com Demucs, detector de lip-sync e auditoria do render por histograma. O motor é operado de ponta a ponta por skills que escrevi para Claude Code, Codex e Custom GPT, que também encadeiam plataformas de geração (Google Flow/Veo 3, Grok Imagine, ElevenLabs, ChatGPT) por API e automação de interface, e geram animações e motion graphics em código via Hyperframes (MCP). Por cima, o Estúdio Criativo: núcleo Python com SQLite que coordena jobs, tarefas, revisões, decisões e orçamento (um dono por tarefa, comandos com ID único que não executam duas vezes, conflito detectado quando PC e celular decidem ao mesmo tempo, aprovação presa ao hash do arquivo) e uma tela local para comparar versões, comentar e aprovar pelo computador ou celular.",
      },
      en: {
        title: "Video Editing Engine + Creative Studio",
        tagline: "A Python pipeline run by AI agents, with a local review and approval interface.",
        description:
          "A job-driven Python 3.12 engine: Whisper transcription (PyTorch/CUDA), a timeline cut from the real voice envelope, kinetic typography as ASS subtitles (Pillow calibrated against libass), FFmpeg rendering with complex filter graphs and lossless parallel concatenation, computer vision with OpenCV (ORB/RANSAC tracking, inpainting, HSV masks), vocal separation with Demucs, a lip-sync detector and histogram-based render auditing. The engine is operated end to end by skills I wrote for Claude Code, Codex and Custom GPT, which also chain generation platforms (Google Flow/Veo 3, Grok Imagine, ElevenLabs, ChatGPT) through APIs and interface automation, and generate animations and motion graphics as code via Hyperframes (MCP). On top sits the Creative Studio: a Python core with SQLite coordinating jobs, tasks, reviews, decisions and budget (one owner per task, uniquely identified commands that never run twice, conflicts detected when desktop and phone decide at once, approvals pinned to the file's hash) and a local UI to compare versions, comment and approve from desktop or phone.",
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
    slug: "jukedigital",
    status: "in-progress",
    tags: ["Cloudflare Workers", "Hono", "Durable Objects", "D1", "KV", "R2", "React", "Tailwind", "Spotify API", "Mercado Pago", "Turborepo"],
    repoUrl: "https://github.com/felipedefendi/jukedigital",
    content: {
      pt: {
        title: "JukeDigital",
        tagline: "Jukebox digital para bares e restaurantes, 100% serverless na Cloudflare.",
        description:
          "Clientes pedem músicas pelo celular via QR Code na mesa, o estabelecimento modera a fila e a reprodução segue sozinha. Monorepo (pnpm + Turborepo) com quatro apps: API em Cloudflare Workers (Hono), app web React + Vite + Tailwind, painel super-admin isolado atrás do Cloudflare Access e landing estática sem JavaScript. Um Durable Object por estabelecimento coordena o WebSocket em tempo real e avança a fila por alarme conferindo o estado no Spotify, então a música continua sem nenhuma tela aberta. D1 com réplicas de leitura, KV para cache e limite de requisições, R2 para logos e banners. Consumo da Web API e do Web Playback SDK do Spotify com OAuth por estabelecimento e refresh token cifrado (AES-GCM com chave derivada por HKDF), Last.fm para gêneros e faixas similares, login do cliente por link mágico e código por e-mail (Resend), Web Push, Pix fura-fila via Mercado Pago com webhook, auditoria, histórico exportável e rotina diária de limpeza via cron.",
      },
      en: {
        title: "JukeDigital",
        tagline: "A digital jukebox for bars and restaurants, fully serverless on Cloudflare.",
        description:
          "Customers request songs from their phones via a QR code on the table, the venue moderates the queue and playback runs on its own. Monorepo (pnpm + Turborepo) with four apps: a Cloudflare Workers API (Hono), a React + Vite + Tailwind web app, an isolated super-admin panel behind Cloudflare Access and a static zero-JavaScript landing page. One Durable Object per venue coordinates the real-time WebSocket and advances the queue on alarms by checking playback state on Spotify, so music keeps playing with no screen open. D1 with read replicas, KV for caching and rate limiting, R2 for logos and banners. Spotify Web API and Web Playback SDK with per-venue OAuth and an encrypted refresh token (AES-GCM with an HKDF-derived key), Last.fm for genres and similar tracks, customer login by magic link and e-mail code (Resend), Web Push, Pix skip-the-line payments through Mercado Pago with webhooks, audit log, exportable history and a daily housekeeping cron.",
      },
    },
  },
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
