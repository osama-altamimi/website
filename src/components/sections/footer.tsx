"use client"

import { motion } from "motion/react"
import { variantsMap } from "@/components/ui/animations/variants"
import { LiveClock } from "@/components/live-clock"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <motion.footer
      variants={variantsMap.blur}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-muted-foreground mx-auto mt-auto flex w-full max-w-3xl flex-col gap-0.5 px-4 pb-8 text-center text-xs"
    >
      <span>&copy; {year} Osama AL-Tamimi</span>
      <div className="flex items-center justify-center gap-1.5">
        <span>Made in Saudi</span>
        <span aria-hidden>·</span>
        <LiveClock hour12 />
      </div>
    </motion.footer>
  )
}
