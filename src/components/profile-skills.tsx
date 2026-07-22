import { FadeInGroup, FadeInItem } from "@/components/ui/animations/fade-in"
import { skills } from "@/lib/skills"
import { ButtonAnchor } from "@/components/ui/button"

export default function ProfileSkills() {
  return (
    <div className="flex flex-col gap-3">
      <FadeInItem as="h2" className="font-rustico text-2xl sm:text-3xl">
        Technical skills
      </FadeInItem>

      <div className="grid gap-3 sm:grid-cols-2">
        {skills.map((group) => (
          <FadeInItem
            key={group.id}
            className="bg-card/30 flex flex-col gap-3 rounded-lg border p-4 odd:last:sm:col-span-2"
          >
            <div className="flex items-center gap-2">
              <div className="bg-input/30 rounded-lg border p-2">
                <group.icon className="size-4" />
              </div>
              <h3 className="font-medium">{group.label}</h3>
            </div>

            <FadeInGroup className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <FadeInItem as="h4" key={item.id}>
                  <ButtonAnchor
                    variant="outline"
                    size="sm"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-1.5"
                  >
                    <item.icon {...item.iconProps} />
                    {item.label}
                  </ButtonAnchor>
                </FadeInItem>
              ))}
            </FadeInGroup>
          </FadeInItem>
        ))}
      </div>
    </div>
  )
}
