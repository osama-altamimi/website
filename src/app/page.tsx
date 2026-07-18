import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDownToLineIcon } from "lucide-react"

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-row items-center gap-3">
            <div className="relative size-20 overflow-hidden rounded-xl">
              <Image
                src="/assets/avatar.png"
                alt="الصورة الشخصية لـ أسامة"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-md text-muted-foreground sm:text-lg">
                Hi, I'm
              </span>
              <h1 className="font-rustico text-3xl">Osama AL-Tamimi</h1>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ArrowDownToLineIcon />
                  View resume
                </a>
              }
            />
          </div>
        </div>

        <div>
          <p className="text-muted-foreground">
            Full-Stack Developer from Saudi Arabia focused on building modern
            web applications and scalable systems, passionate about software
            engineering and infrastructure.
          </p>
        </div>

        <div>skills</div>
      </div>
    </>
  )
}
