"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "motion/react"

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { SunIcon, MoonIcon } from "lucide-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark" ? "light" : "dark"

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement
      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable

      if (
        isTyping ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.repeat ||
        event.isComposing
      ) {
        return
      }

      if (event.code === "KeyD") {
        event.preventDefault()
        setTheme(isDark)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isDark, setTheme])

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, filter: "blur(4px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              aria-label="Toggle theme"
              className="h-10 w-10 rounded-full border-2 bg-[#F7F7F7]! dark:bg-[#151515]!"
              onClick={() => setTheme(isDark)}
            >
              <SunIcon className="h-[1.2rem] w-[1.2rem] dark:hidden" />
              <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
            </Button>
          }
        />
        <TooltipContent side="left">
          <p>Toggle theme</p>
          <Kbd>D</Kbd>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  )
}
