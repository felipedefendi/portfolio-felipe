# Portfólio — Felipe Defendi

Site de portfólio pessoal de **Felipe Defendi**, Desenvolvedor Full-Stack e Engenheiro de Software.
Bilíngue (PT/EN), com tema claro/escuro, seção de projetos, experiência e currículo em PDF.

🔗 **Ao vivo:** https://portfolio-felipe-sigma-jade.vercel.app

## ✨ Funcionalidades

- 🌗 Tema claro/escuro com toggle
- 🌐 Bilíngue Português / Inglês
- 📱 Responsivo, com menu mobile
- 📄 Currículo em `/cv` com exportação para PDF
- 🖼️ Imagem de Open Graph para compartilhamento
- ⚡ Animações sutis e SEO configurado

## 🛠️ Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [next-themes](https://github.com/pacocoursey/next-themes) · [lucide-react](https://lucide.dev/)

## 🚀 Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## 📦 Build de produção

```bash
npm run build
npm start
```

## 📁 Estrutura

```
app/                  Rotas (home, /cv), layout, favicon e imagem OG
components/           Navbar, Footer, Hero
components/sections/  Sobre, Habilidades, Projetos, Experiência, Formação, Contato
lib/i18n/             Dicionários PT/EN e contexto de idioma
lib/data/             Dados de skills, projetos e contato
```

---

Feito com Next.js e Tailwind CSS.
