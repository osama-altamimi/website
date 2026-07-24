import Image from "next/image"
import { ButtonAnchor } from "@/components/ui/button"
import { ArrowDownToLineIcon } from "lucide-react"
import { socials } from "@/lib/socials"
import { FadeInItem } from "@/components/ui/animations/fade-in"

export default function ProfileIntro() {
  const resumeButton = (
    <ButtonAnchor
      variant="outline"
      size="lg"
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View resume"
      className="w-full"
    >
      <ArrowDownToLineIcon />
      View resume
    </ButtonAnchor>
  )
  return (
    <div className="flex flex-col gap-3">
      <div className="flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <FadeInItem className="relative size-20 overflow-hidden rounded-xl">
            <Image
              src="/assets/avatar.png"
              alt="Osama AL-Tamimi profile picture"
              fill
              sizes="80px"
              className="object-cover"
              preload
            />
          </FadeInItem>

          <FadeInItem className="flex flex-col">
            <span className="text-muted-foreground sm:text-lg">Hi, I'm</span>
            <h1 className="font-rustico text-3xl sm:text-4xl">
              Osama AL-Tamimi
            </h1>
          </FadeInItem>
        </div>

        <FadeInItem className="hidden sm:block">{resumeButton}</FadeInItem>
      </div>

      <FadeInItem as="p" className="text-muted-foreground">
        Full-Stack Developer based in Saudi Arabia, building modern web
        applications and scalable systems with a focus on software engineering
        and infrastructure.
      </FadeInItem>

      <FadeInItem className="block sm:hidden">{resumeButton}</FadeInItem>

      <div className="flex gap-2">
        {socials
          .filter((social) => ["github", "youtube", "x"].includes(social.id))
          .map((social) => (
            <FadeInItem key={social.id}>
              <ButtonAnchor
                variant="outline"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon {...social.iconProps} aria-hidden="true" />
                {social.label}
              </ButtonAnchor>
            </FadeInItem>
          ))}
      </div>
    </div>
  )
}
