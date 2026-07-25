import type { Metadata } from "next"
import { FadeInStagger, FadeInItem } from "@/components/ui/animations/fade-in"
import { ButtonLink } from "@/components/ui/button"
import { HouseIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <FadeInStagger
      as="main"
      className="mx-auto mt-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24"
    >
      <FadeInItem
        as="span"
        className="font-rustico text-muted-foreground text-8xl sm:text-9xl"
      >
        404
      </FadeInItem>

      <div className="flex flex-col gap-3 py-6">
        <FadeInItem as="h1" className="text-3xl font-semibold sm:text-4xl">
          Page Not Found
        </FadeInItem>
        <FadeInItem as="p" className="text-muted-foreground">
          The page you are looking for moved, vanished, or never existed.
        </FadeInItem>
      </div>

      <FadeInItem>
        <ButtonLink size="lg" href="/" className="w-50 gap-1.5">
          <HouseIcon />
          Return Home
        </ButtonLink>
      </FadeInItem>
    </FadeInStagger>
  )
}
