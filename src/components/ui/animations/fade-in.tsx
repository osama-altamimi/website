"use client"

import type { ElementType, ReactNode } from "react"
import { motion } from "motion/react"
import {
  containerVariants,
  variantsMap,
} from "@/components/ui/animations/variants"

type AsProp = keyof HTMLElementTagNameMap

type BaseProps = {
  children: ReactNode
  className?: string
  as?: AsProp
}

type FadeInItemProps = BaseProps & {
  variant?: keyof typeof variantsMap
}

export function FadeInStagger({ children, className, as = "div" }: BaseProps) {
  const Component = motion[as] as ElementType

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </Component>
  )
}

export function FadeInGroup({ children, className, as = "div" }: BaseProps) {
  const Component = motion[as] as ElementType
  return (
    <Component variants={containerVariants} className={className}>
      {children}
    </Component>
  )
}

export function FadeInItem({
  children,
  className,
  variant = "item",
  as = "div",
}: FadeInItemProps) {
  const Component = motion[as] as ElementType

  return (
    <Component variants={variantsMap[variant]} className={className}>
      {children}
    </Component>
  )
}
