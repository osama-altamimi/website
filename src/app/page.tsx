import ProfileIntro from "@/components/profile-intro"
import ProfileSkills from "@/components/profile-skills"
import ProfileContact from "@/components/profile-contact"

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-14 px-4 py-16 sm:px-6 sm:py-24">
      <ProfileIntro />
      <ProfileSkills />
      <ProfileContact />
    </main>
  )
}
