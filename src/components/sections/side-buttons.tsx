"use client"
import { motion } from "motion/react"
import { ThemeToggle } from "@/components/theme/theme-toggle"

const item = {
  hidden: { opacity: 0, x: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
}

export function SideButtons() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col-reverse gap-2">
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0 }}
      >
        <ThemeToggle />
      </motion.div>

      {/* <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        
      </motion.div> */}
    </div>
  )
}
