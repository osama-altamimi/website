import type { ComponentType } from "react"
import type { SvgIconProps } from "@thesvg/react"
import { MailIcon } from "lucide-react"
import { Github, Youtube, X, Discord } from "@thesvg/react"

export interface Social {
  id: string
  href: string
  label: string
  icon: ComponentType<SvgIconProps>
  iconProps?: any
}

export const socials: Social[] = [
  {
    id: "email",
    href: "mailto:me@ousama.dev",
    label: "Email",
    icon: MailIcon,
  },
  {
    id: "github",
    href: "https://github.com/osama-altamimi",
    label: "GitHub",
    icon: Github,
    iconProps: {
      variant: "mono",
    },
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/@ousama144",
    label: "YouTube",
    icon: Youtube,
    iconProps: {
      variant: "mono",
    },
  },
  {
    id: "discord",
    href: "discord://-/users/768757998402928680",
    label: "Discord",
    icon: Discord,
    iconProps: {
      variant: "mono",
    },
  },
]
