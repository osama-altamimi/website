import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDownToLineIcon } from "lucide-react"
import { socials } from "@/lib/socials"
import { FadeInStagger, FadeInItem } from "@/components/ui/animations/fade-in"

export default function ProfileIntro() {
  const resumeButton = (
    <Button
      variant="outline"
      size="lg"
      className="w-full"
      nativeButton={false}
      render={
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <ArrowDownToLineIcon />
          View resume
        </a>
      }
    />
  )
  return (
    <FadeInStagger className="flex flex-col gap-3">
      <div className="flex sm:items-center sm:justify-between">
        <FadeInItem className="flex items-center gap-3">
          <div className="relative size-20 overflow-hidden rounded-xl">
            <Image
              src="/assets/avatar.png"
              alt="الصورة الشخصية لـ أسامة"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>

          <FadeInItem className="flex flex-col">
            <span className="text-muted-foreground sm:text-lg">Hi, I'm</span>
            <h1 className="font-rustico text-3xl">Osama AL-Tamimi</h1>
          </FadeInItem>
        </FadeInItem>

        <FadeInItem className="hidden sm:block">{resumeButton}</FadeInItem>
      </div>

      <FadeInItem>
        <p className="text-muted-foreground">
          Full-Stack Developer from Saudi Arabia focused on building modern web
          applications and scalable systems, passionate about software
          engineering and infrastructure.
        </p>
      </FadeInItem>

      <FadeInItem className="block sm:hidden">{resumeButton}</FadeInItem>

      <div className="flex gap-2">
        {socials
          .filter((social) => ["github", "youtube", "x"].includes(social.id))
          .map((social) => (
            <FadeInItem key={social.id} className="flex gap-2">
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon {...social.iconProps} />
                    {social.label}
                  </a>
                }
              />
            </FadeInItem>
          ))}
      </div>
    </FadeInStagger>
  )
}
