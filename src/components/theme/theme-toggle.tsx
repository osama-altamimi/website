"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
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
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark)}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] dark:hidden" />
            <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
            <span className="dark:hidden">Light</span>
            <span className="hidden dark:block">Dark</span>
          </Button>
        }
      />
      <TooltipContent>
        <p>Toggle theme</p>
        <Kbd>D</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}
