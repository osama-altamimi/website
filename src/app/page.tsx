import { FadeInStagger } from "@/components/ui/animations/fade-in"
import ProfileIntro from "@/components/sections/profile-intro"
import ProfileSkills from "@/components/sections/profile-skills"
import ProfileContact from "@/components/sections/profile-contact"

export default function Home() {
  return (
    <FadeInStagger
      as="main"
      className="mx-auto w-full max-w-3xl space-y-14 px-4 py-16 sm:px-6 sm:py-24"
    >
      <ProfileIntro />
      <ProfileSkills />
      <ProfileContact />
    </FadeInStagger>
  )
}
