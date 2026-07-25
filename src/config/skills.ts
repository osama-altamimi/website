import { technologies } from "@/lib/technologies"

import { Braces, Server, AppWindow, Database, Wrench } from "lucide-react"

function getTechnology(id: string) {
  const technology = technologies.find((item) => item.id === id)

  if (!technology) {
    throw new Error(`Technology "${id}" not found`)
  }

  return technology
}

export const skills = [
  {
    id: "languages",
    label: "Languages",
    icon: Braces,
    items: [
      getTechnology("typescript"),
      getTechnology("javascript"),
      getTechnology("python"),
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: AppWindow,
    items: [
      getTechnology("react"),
      getTechnology("nextjs"),
      getTechnology("tailwindcss"),
      getTechnology("shadcnui"),
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    items: [
      getTechnology("nodejs"),
      getTechnology("express"),
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    items: [
      getTechnology("mysql"),
      getTechnology("postgresql"),
      getTechnology("mongodb"),
      getTechnology("prisma"),
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    icon: Wrench,
    items: [
      getTechnology("docker"),
      getTechnology("git"),
      getTechnology("vercel"),
      getTechnology("postman"),
      getTechnology("caddy"),
    ],
  },
] as const
