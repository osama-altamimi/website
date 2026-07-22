import { FadeInStagger } from "@/components/ui/animations/fade-in"
import ProfileIntro from "@/components/profile-intro"
import ProfileSkills from "@/components/profile-skills"

export default function Home() {
  return (
    <FadeInStagger
      as="main"
      className="mx-auto w-full max-w-3xl space-y-12 px-4 py-16 sm:px-6 sm:py-24"
    >
      <ProfileIntro />
      <ProfileSkills />
    </FadeInStagger>
  )
}
