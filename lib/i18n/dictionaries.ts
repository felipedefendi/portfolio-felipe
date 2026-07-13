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
        "Sou Engenheiro de Software formado, com mais de 4 anos atuando em tecnologia — do suporte técnico à consultoria em sistemas corporativos. Essa trajetória me deu algo que raramente se aprende só programando: entender o problema do negócio antes de escrever a primeira linha de código.",
        "Hoje atuo como Consultor HCM na Senior Sistemas, onde lido diariamente com SQL avançado, automações e manutenção de bancos de dados de grandes empresas. Como desenvolvedor full-stack, uno essa base sólida de dados ao ecossistema moderno de JavaScript e TypeScript — React, Next.js, Node e Nest.",
        "Falo inglês fluente, prezo por código limpo e bem testado, e busco oportunidades remotas ou híbridas onde eu possa construir produtos confiáveis e seguir evoluindo.",
      ],
      highlights: [
        { value: "4+ anos", label: "em tecnologia" },
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
          role: "Consultor HCM",
          company: "Senior Sistemas — Unidade Norte do Paraná",
          period: "mar/2025 – atual",
          bullets: [
            "Manutenção e automação de bancos de dados (Oracle, SQL Server, MySQL) de empresas clientes, aplicando SQL avançado e regras de negócio customizadas.",
            "Resolução de bugs e incidentes em módulos do sistema HCM, com certificações em diversos módulos e nas linguagens internas da Senior.",
            "Tradução de requisitos de negócio em soluções técnicas, em contato direto com times e clientes.",
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
    },
    education: {
      title: "Formação & Idiomas",
      educationLabel: "Formação",
      degree: "Bacharelado em Engenharia de Software",
      school: "UniCesumar",
      period: "2021 – 2024",
      certificationsLabel: "Certificações",
      certifications:
        "Certificações em múltiplos módulos e nas linguagens internas da Senior Sistemas.",
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
        "Desenvolvedor Full-Stack e Engenheiro de Software com mais de 4 anos em tecnologia, unindo forte base em bancos de dados e sistemas corporativos ao ecossistema moderno JavaScript/TypeScript (React, Next.js, Node, Nest). Experiência prática em desenvolvimento full-stack assistido por IA — principalmente com Claude Code —, conduzindo planejamento de arquitetura, backend, banco de dados, testes automatizados e deploy em produção de múltiplos projetos. Inglês fluente, foco em código limpo, testável e confiável.",
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
        "I'm a Software Engineering graduate with over 4 years in tech — from technical support to enterprise systems consulting. That path taught me something you rarely learn from coding alone: to understand the business problem before writing the first line of code.",
        "Today I work as an HCM Consultant at Senior Sistemas, dealing daily with advanced SQL, automation and database maintenance for large companies. As a full-stack developer, I pair that solid data foundation with the modern JavaScript and TypeScript ecosystem — React, Next.js, Node and Nest.",
        "I'm fluent in English, care about clean and well-tested code, and I'm looking for remote or hybrid opportunities where I can build reliable products and keep growing.",
      ],
      highlights: [
        { value: "4+ years", label: "in tech" },
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
          role: "HCM Consultant",
          company: "Senior Sistemas — North Paraná Unit",
          period: "Mar 2025 – present",
          bullets: [
            "Maintenance and automation of client databases (Oracle, SQL Server, MySQL) using advanced SQL and custom business rules.",
            "Resolved bugs and incidents across HCM modules, holding certifications in several modules and Senior's internal languages.",
            "Translated business requirements into technical solutions, working directly with teams and clients.",
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
    },
    education: {
      title: "Education & Languages",
      educationLabel: "Education",
      degree: "Bachelor's in Software Engineering",
      school: "UniCesumar",
      period: "2021 – 2024",
      certificationsLabel: "Certifications",
      certifications:
        "Certifications in multiple modules and Senior Sistemas' internal languages.",
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
        "Full-Stack Developer and Software Engineer with 4+ years in tech, combining a strong foundation in databases and enterprise systems with the modern JavaScript/TypeScript ecosystem (React, Next.js, Node, Nest). Hands-on experience with AI-assisted full-stack development — primarily with Claude Code — leading architecture planning, backend, database design, automated testing and production deployment across multiple projects. Fluent in English, focused on clean, testable and reliable code.",
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
