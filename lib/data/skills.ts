export type SkillTierId = "core" | "proficient" | "familiar";

export const skillTiers: { id: SkillTierId; items: string[] }[] = [
  {
    id: "core",
    items: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "React",
      "Next.js",
      "NestJS",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "SQL Server",
      "Oracle",
      "Prisma",
      "Git",
      "Docker",
      "Claude Code",
    ],
  },
  {
    id: "proficient",
    items: [
      "Vue.js",
      "React Native",
      "MySQL",
      "MongoDB",
      "Tailwind CSS",
      "Vite",
      "Jest",
      "GitHub Actions",
      "Supabase",
      "Firebase",
    ],
  },
  {
    id: "familiar",
    items: ["Java", "Go", "C", "Angular", "Kubernetes", "AWS", "Azure", "GCP"],
  },
];
