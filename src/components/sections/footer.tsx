"use client"

import { motion } from "motion/react"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-muted-foreground mx-auto mt-auto flex w-full max-w-3xl flex-col gap-0.5 px-4 pb-8 text-center text-xs"
    >
      <span>&copy; {new Date().getFullYear()} Osama AL-Tamimi</span>
      <span>Made in Saudi</span>
    </motion.footer>
  )
}
