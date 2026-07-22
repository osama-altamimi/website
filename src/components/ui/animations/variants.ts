import type { Variants } from "motion/react"

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
} satisfies Variants

export const variantsMap = {
  item: {
    hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  },
  blur: {
    hidden: {
      opacity: 0,
      filter: "blur(4px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
      },
    },
  },
} satisfies Record<string, Variants>
