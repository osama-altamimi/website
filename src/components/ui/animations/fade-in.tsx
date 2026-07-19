"use client"

import React from "react"
import type { Variants } from "motion/react"
import { motion } from "motion/react"

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const variantsMap: Record<string, Variants> = {
  text: {
    hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  },
  button: {
    hidden: { opacity: 0, y: 10, scale: 0.92 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  },
  image: {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
}

export function FadeInStagger({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInItem({
  children,
  className,
  variant = "text",
}: {
  children: React.ReactNode
  className?: string
  variant?: "text" | "button" | "image"
}) {
  return (
    <motion.div variants={variantsMap[variant]} className={className}>
      {children}
    </motion.div>
  )
}
