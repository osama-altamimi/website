"use client"

import React from "react"
import { motion } from "motion/react"
import { containerVariants, variantsMap } from "@/components/ui/animations/variants"

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
