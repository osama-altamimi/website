import type { ComponentType } from "react"
import type { SvgIconProps } from "@thesvg/react"
import {
  React,
  Nextdotjs,
  TailwindCss,
  ShadcnUi,
  Typescript,
  Javascript,
  Nodejs,
  Docker,
  Python,
  Mysql,
  Postgresql,
  Mongodb,
  Git,
  Vercel,
  Prisma,
  Postman,
  Express,
  Caddy,
} from "@thesvg/react"

export interface Technologie {
  id: string
  href: string
  label: string
  icon: ComponentType<SvgIconProps>
  iconProps?: any
}

export const technologies: Technologie[] = [
  {
    id: "react",
    href: "https://react.dev/",
    label: "React",
    icon: React,
  },
  {
    id: "nextjs",
    href: "https://nextjs.org/",
    label: "Next.js",
    icon: Nextdotjs,
    iconProps: {
      variant: "mono",
    },
  },
  {
    id: "tailwindcss",
    href: "https://tailwindcss.com/",
    label: "Tailwind CSS",
    icon: TailwindCss,
  },
  {
    id: "shadcnui",
    href: "https://ui.shadcn.com/",
    label: "shadcn/ui",
    icon: ShadcnUi,
    iconProps: {
      variant: "light",
    },
  },
  {
    id: "typescript",
    href: "https://www.typescriptlang.org/",
    label: "TypeScript",
    icon: Typescript,
  },
  {
    id: "javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    label: "JavaScript",
    icon: Javascript,
  },
  {
    id: "nodejs",
    href: "https://nodejs.org/",
    label: "Node.js",
    icon: Nodejs,
  },
  {
    id: "docker",
    href: "https://www.docker.com/",
    label: "Docker",
    icon: Docker,
  },
  {
    id: "python",
    href: "https://www.python.org/",
    label: "Python",
    icon: Python,
  },
  {
    id: "mysql",
    href: "https://www.mysql.com/",
    label: "MySQL",
    icon: Mysql,
    iconProps: {
      variant: "wordmark",
    },
  },
  {
    id: "postgresql",
    href: "https://www.postgresql.org/",
    label: "PostgreSQL",
    icon: Postgresql,
  },
  {
    id: "mongodb",
    href: "https://www.mongodb.com/",
    label: "MongoDB",
    icon: Mongodb,
  },
  {
    id: "git",
    href: "https://git-scm.com/",
    label: "Git",
    icon: Git,
  },
  {
    id: "vercel",
    href: "https://vercel.com/",
    label: "Vercel",
    icon: Vercel,
    iconProps: {
      variant: "mono",
    },
  },
  {
    id: "prisma",
    href: "https://www.prisma.io/",
    label: "Prisma",
    icon: Prisma,
    iconProps: {
      variant: "mono",
    },
  },
  {
    id: "postman",
    href: "https://www.postman.com/",
    label: "Postman",
    icon: Postman,
  },
  {
    id: "express",
    href: "https://expressjs.com/",
    label: "Express",
    icon: Express,
    iconProps: {
      variant: "mono",
    },
  },
  {
    id: "caddy",
    href: "https://caddyserver.com/",
    label: "Caddy",
    icon: Caddy,
  },
]
