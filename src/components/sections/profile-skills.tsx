import { FadeInItem } from "@/components/ui/animations/fade-in"
import { skills } from "@/config/skills"
import { ButtonAnchor } from "@/components/ui/button"

export default function ProfileSkills() {
  return (
    <section className="flex flex-col gap-3">
      <FadeInItem as="h2" className="font-heading text-2xl sm:text-3xl">
        Technical skills
      </FadeInItem>

      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        {skills.map((group) =>
          group.items.map((item) => (
            <FadeInItem key={item.id}>
              <ButtonAnchor
                variant="outline"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-full gap-1.5"
              >
                <item.icon {...item.iconProps} aria-hidden="true" />
                {item.label}
              </ButtonAnchor>
            </FadeInItem>
          ))
        )}
      </div>
    </section>
  )
}
