export type Locale = "pt" | "en";

export const dictionaries = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      resume: "Currículo",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Felipe Defendi",
      role: "Desenvolvedor Full-Stack",
      tagline:
        "Engenheiro de Software com base sólida em bancos de dados e sistemas corporativos. Transformo problemas de negócio em software confiável.",
      ctaProjects: "Ver projetos",
      ctaContact: "Entrar em contato",
    },
    about: {
      title: "Sobre mim",
      paragraphs: [
        "Sou Engenheiro de Software formado, com mais de 5 anos atuando em tecnologia — do suporte técnico à consultoria em sistemas corporativos. Essa trajetória me deu algo que raramente se aprende só programando: entender o problema do negócio antes de escrever a primeira linha de código.",
        "Hoje atuo no Suporte Técnico HCM da Senior Norte PR, canal da Senior Sistemas, onde lido diariamente com SQL avançado, regras LSP, integrações e manutenção de bancos de dados de grandes empresas — e onde criei, por conta própria, a automação de rodízio de chamados e o painel de gestão que o time de suporte usa em produção. Como desenvolvedor, uno essa base de dados ao ecossistema JavaScript/TypeScript (React, Next.js, Node, Nest), a Python para automação e processamento de mídia, e a agentes de IA construídos sobre APIs de LLM.",
        "Falo inglês fluente, prezo por código limpo e bem testado, e busco oportunidades remotas ou híbridas onde eu possa construir produtos confiáveis e seguir evoluindo.",
      ],
      highlights: [
        { value: "5+ anos", label: "em tecnologia" },
        { value: "Inglês", label: "avançado/fluente" },
        { value: "Eng. de Software", label: "bacharelado" },
        { value: "SQL", label: "bancos de produção" },
      ],
    },
    skills: {
      title: "Habilidades",
      subtitle:
        "Organizadas por nível de domínio — do que uso no dia a dia com total confiança ao que estou explorando.",
      tiers: {
        core: {
          label: "Domínio sólido",
          description: "Uso com confiança total no dia a dia.",
        },
        proficient: {
          label: "Uso com frequência",
          description: "Trabalho bem e com autonomia.",
        },
        familiar: {
          label: "Conhecimento / estudando",
          description: "Já utilizei ou estou aprofundando.",
        },
      },
    },
    experience: {
      title: "Experiência",
      current: "atual",
      items: [
        {
          role: "Suporte Técnico HCM",
          company: "Senior Norte PR — canal Senior Sistemas",
          period: "mar/2025 – atual",
          bullets: [
            "Manutenção de bancos de dados (Oracle, SQL Server, MySQL) de empresas clientes com SQL avançado; manutenção de relatórios customizados, regras LSP e processos automáticos do Gestão de Pessoas HCM para gestores e áreas de negócio.",
            "Criei e mantenho em produção a automação de rodízio de chamados do SoftDesk e o Painel HCM da equipe (Node/TypeScript, React, API do Senior X, Teams via Power Automate), eliminando a distribuição manual de chamados.",
            "Suporte a sistemas de terceiros integrados ao HCM G5 e ao Senior X: teste e validação de web services (incluindo os do Atestado Digital) e diagnóstico de falhas de integração, com 10 certificações técnicas Pro em módulos HCM e GRS e trilha completa de LSP.",
            "Instalação e atualização de produtos Senior nos clientes (G5/G6, SGU, bancos de dados), preparação de estações de trabalho e diagnóstico básico de rede e conectividade.",
            "Tradução de requisitos de negócio em soluções técnicas, em contato direto com times e clientes, documentando procedimentos e automações.",
          ],
        },
        {
          role: "Líder de Suporte e Onboarding",
          company: "InovaClick",
          period: "2021 – 2023",
          bullets: [
            "Liderei o suporte técnico de um aplicativo de vistorias veiculares usado por frotas de empresas como Localiza, Unidas, BRF e Transpanorama.",
            "Identifiquei, reproduzi e documentei bugs, atuando junto aos desenvolvedores na priorização e na solução.",
            "Conduzi reuniões de onboarding com funcionários, gestores e diretores, além de acompanhar métricas e a evolução do atendimento.",
          ],
        },
      ],
    },
    projects: {
      title: "Projetos",
      subtitle:
        "Seleção de projetos que demonstram meu trabalho full-stack — do banco de dados à interface.",
      status: {
        live: "Online",
        "in-progress": "Em construção",
        planned: "Planejado",
      },
      viewLive: "Ver online",
      viewCode: "Código",
      comingSoon: "Em breve",
      privateUse: "Uso interno / código privado",
    },
    education: {
      title: "Formação & Idiomas",
      educationLabel: "Formação",
      degree: "Bacharelado em Engenharia de Software",
      school: "UniCesumar",
      period: "2021 – 2024",
      certificationsLabel: "Certificações Senior",
      certifications:
        "11 certificações técnicas Pro (Universidade Corporativa Senior) e trilha completa de LSP.",
      certificationItems: [
        "HCM Administração de Pessoal",
        "HCM Controle de Ponto",
        "HCM Gestão do Ponto",
        "HCM Benefícios",
        "HCM Gestão de Remuneração",
        "HCM Recrutamento e Seleção",
        "HCM Segurança do Trabalho",
        "HCM Medicina Ocupacional",
        "GRS X Controle de Terminais de Ponto",
        "GRS XT Integrações",
        "Senior Certified Talent Operation — Dpto. Pessoal",
        "LSP Básico, Intermediário e Avançado",
        "Gerador de Relatórios · CBDS · SGU",
        "Integração HCM com sistemas de terceiros (web services)",
      ],
      languagesLabel: "Idiomas",
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Avançado / Fluente" },
        { name: "Espanhol", level: "Intermediário" },
      ],
    },
    contact: {
      title: "Contato",
      subtitle:
        "Aberto a oportunidades full-stack remotas ou híbridas. Vamos conversar!",
      form: {
        name: "Nome",
        email: "Seu e-mail",
        message: "Mensagem",
        namePlaceholder: "Seu nome",
        emailPlaceholder: "voce@email.com",
        messagePlaceholder: "Escreva sua mensagem...",
        send: "Enviar mensagem",
        subject: "Contato via portfólio",
      },
      channels: {
        emailLabel: "E-mail",
        whatsappLabel: "WhatsApp",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
        locationLabel: "Localização",
      },
      locationValue: "Maringá – PR, Brasil",
    },
    cv: {
      download: "Baixar PDF",
      backToSite: "Voltar ao site",
      summaryLabel: "Resumo profissional",
      summary:
        "Desenvolvedor Full-Stack e Engenheiro de Software com mais de 5 anos em tecnologia, unindo forte base em bancos de dados e sistemas corporativos (ecossistema Senior: HCM, LSP, Senior X) ao ecossistema JavaScript/TypeScript (React, Next.js, Node, Nest) e a Python para automação e processamento de mídia. Construo agentes de IA e ferramentas sobre APIs de LLM e Claude Code, do planejamento de arquitetura ao deploy em produção, com automações rodando 24/7 em uso real por equipes. Inglês fluente, foco em código limpo, testável e confiável.",
      contactLabel: "Contato",
      projectsLabel: "Projetos",
    },
    notFound: {
      title: "Página não encontrada",
      description: "A página que você procura não existe ou foi movida.",
      back: "Voltar ao início",
    },
    footer: {
      builtWith: "Feito com Next.js e Tailwind CSS",
      rights: "Todos os direitos reservados.",
    },
    theme: {
      toggle: "Alternar tema",
    },
    lang: {
      toggle: "Mudar idioma",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Felipe Defendi",
      role: "Full-Stack Developer",
      tagline:
        "Software Engineer with a strong foundation in databases and enterprise systems. I turn business problems into reliable software.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I'm a Software Engineering graduate with over 5 years in tech — from technical support to enterprise systems consulting. That path taught me something you rarely learn from coding alone: to understand the business problem before writing the first line of code.",
        "Today I work in HCM Technical Support at Senior Norte PR, a Senior Sistemas channel partner, dealing daily with advanced SQL, LSP rules, integrations and database maintenance for large companies — and where I built, on my own initiative, the ticket round-robin automation and the management dashboard the support team runs in production. As a developer, I pair that data foundation with the JavaScript/TypeScript ecosystem (React, Next.js, Node, Nest), Python for automation and media processing, and AI agents built on LLM APIs.",
        "I'm fluent in English, care about clean and well-tested code, and I'm looking for remote or hybrid opportunities where I can build reliable products and keep growing.",
      ],
      highlights: [
        { value: "5+ years", label: "in tech" },
        { value: "English", label: "advanced/fluent" },
        { value: "Software Eng.", label: "bachelor's degree" },
        { value: "SQL", label: "production databases" },
      ],
    },
    skills: {
      title: "Skills",
      subtitle:
        "Grouped by level of command — from what I use confidently every day to what I'm exploring.",
      tiers: {
        core: {
          label: "Strong command",
          description: "I use these confidently every day.",
        },
        proficient: {
          label: "Work comfortably with",
          description: "Productive and independent.",
        },
        familiar: {
          label: "Familiar / learning",
          description: "Used before or currently deepening.",
        },
      },
    },
    experience: {
      title: "Experience",
      current: "present",
      items: [
        {
          role: "HCM Technical Support",
          company: "Senior Norte PR — Senior Sistemas channel partner",
          period: "Mar 2025 – present",
          bullets: [
            "Maintenance of client databases (Oracle, SQL Server, MySQL) using advanced SQL; maintenance of custom reports, LSP rules and automatic processes in Senior HCM for managers and business areas.",
            "Built and run in production the SoftDesk ticket round-robin automation and the team's HCM Dashboard (Node/TypeScript, React, Senior X API, Teams via Power Automate), removing manual ticket distribution.",
            "Support for third-party systems integrated with HCM G5 and Senior X: testing and validation of web services (including the Digital Medical Certificate ones) and troubleshooting of integration failures, with 10 Pro technical certifications across HCM and GRS modules and the full LSP track.",
            "Installation and upgrades of Senior products at client sites (G5/G6, SGU, databases), workstation setup and basic network and connectivity troubleshooting.",
            "Translated business requirements into technical solutions, working directly with teams and clients and documenting procedures and automations.",
          ],
        },
        {
          role: "Support & Onboarding Lead",
          company: "InovaClick",
          period: "2021 – 2023",
          bullets: [
            "Led technical support for a vehicle inspection app used by fleets of companies such as Localiza, Unidas, BRF and Transpanorama.",
            "Identified, reproduced and documented bugs, working alongside developers on prioritization and resolution.",
            "Ran onboarding sessions with employees, managers and directors, and tracked support metrics and progress.",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle:
        "A selection of projects that showcase my full-stack work — from the database to the interface.",
      status: {
        live: "Live",
        "in-progress": "In progress",
        planned: "Planned",
      },
      viewLive: "View live",
      viewCode: "Code",
      comingSoon: "Coming soon",
      privateUse: "Internal use / private code",
    },
    education: {
      title: "Education & Languages",
      educationLabel: "Education",
      degree: "Bachelor's in Software Engineering",
      school: "UniCesumar",
      period: "2021 – 2024",
      certificationsLabel: "Senior Certifications",
      certifications:
        "11 Pro technical certifications (Senior Corporate University) and the full LSP track.",
      certificationItems: [
        "HCM Personnel Administration",
        "HCM Time & Attendance Control",
        "HCM Time Management",
        "HCM Benefits",
        "HCM Compensation Management",
        "HCM Recruitment & Selection",
        "HCM Occupational Safety",
        "HCM Occupational Health",
        "GRS X Time Clock Terminal Control",
        "GRS XT Integrations",
        "Senior Certified Talent Operation — Personnel Dept.",
        "LSP Basic, Intermediate and Advanced",
        "Report Generator · CBDS · SGU",
        "HCM integration with third-party systems (web services)",
      ],
      languagesLabel: "Languages",
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Advanced / Fluent" },
        { name: "Spanish", level: "Intermediate" },
      ],
    },
    contact: {
      title: "Contact",
      subtitle:
        "Open to remote or hybrid full-stack opportunities. Let's talk!",
      form: {
        name: "Name",
        email: "Your email",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@email.com",
        messagePlaceholder: "Write your message...",
        send: "Send message",
        subject: "Contact from portfolio",
      },
      channels: {
        emailLabel: "Email",
        whatsappLabel: "WhatsApp",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
        locationLabel: "Location",
      },
      locationValue: "Maringá – PR, Brazil",
    },
    cv: {
      download: "Download PDF",
      backToSite: "Back to site",
      summaryLabel: "Professional summary",
      summary:
        "Full-Stack Developer and Software Engineer with 5+ years in tech, combining a strong foundation in databases and enterprise systems (Senior ecosystem: HCM, LSP, Senior X) with the JavaScript/TypeScript ecosystem (React, Next.js, Node, Nest) and Python for automation and media processing. I build AI agents and tooling on top of LLM APIs and Claude Code, from architecture planning to production deployment, with automations running 24/7 in real use by teams. Fluent in English, focused on clean, testable and reliable code.",
      contactLabel: "Contact",
      projectsLabel: "Projects",
    },
    notFound: {
      title: "Page not found",
      description: "The page you're looking for doesn't exist or was moved.",
      back: "Back to home",
    },
    footer: {
      builtWith: "Built with Next.js and Tailwind CSS",
      rights: "All rights reserved.",
    },
    theme: {
      toggle: "Toggle theme",
    },
    lang: {
      toggle: "Switch language",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
