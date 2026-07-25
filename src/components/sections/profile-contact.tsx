import { FadeInGroup, FadeInItem } from "@/components/ui/animations/fade-in"
import { Separator } from "@/components/ui/separator"
import { ButtonAnchor } from "@/components/ui/button"
import { CheckIcon, SendIcon } from "lucide-react"
import { CopyButton } from "@/components/copy-button"
import { CONTACT_EMAIL } from "@/config/site"

const services = [
  { title: "Showcase websites & landing pages" },
  { title: "Custom web applications & SaaS" },
  { title: "API integrations & backend development" },
  { title: "Performance improvements & technical refactoring" },
]

export default function ProfileContact() {
  return (
    <section className="flex flex-col gap-3">
      <FadeInItem as="h2" className="font-rustico text-2xl sm:text-3xl">
        Contact
      </FadeInItem>

      <FadeInItem className="rounded-lg border p-4 sm:p-6">
        <FadeInGroup className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <FadeInItem as="h3" className="text-lg sm:text-xl">
              Have a project in mind?
            </FadeInItem>
            <FadeInItem as="p" className="text-muted-foreground">
              Whether you have a new idea, an existing product that needs
              improvement, or just want to discuss web development, my inbox is
              always open. I'll get back to you as soon as I can.
            </FadeInItem>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            {services.map((service, index) => (
              <FadeInItem
                key={index}
                as="li"
                className="flex items-center gap-2"
              >
                <CheckIcon className="size-4" />
                <span>{service.title}</span>
              </FadeInItem>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <FadeInItem>
              <Separator />
            </FadeInItem>
            <div className="flex flex-wrap gap-2">
              <FadeInItem className="flex-1">
                <ButtonAnchor
                  size="lg"
                  href={`mailto:${CONTACT_EMAIL}`}
                  rel="noopener noreferrer"
                  aria-label="Email me"
                  className="w-full gap-1.5"
                >
                  <SendIcon />
                  {CONTACT_EMAIL}
                </ButtonAnchor>
              </FadeInItem>
              <FadeInItem>
                <CopyButton
                  variant="outline"
                  size="icon-lg"
                  text={CONTACT_EMAIL}
                  tooltip="Copy email address"
                  aria-label="Copy email address"
                />
              </FadeInItem>
            </div>
          </div>
        </FadeInGroup>
      </FadeInItem>
    </section>
  )
}
