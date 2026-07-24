"use client"

import { useState } from "react"

export function useCopy(duration = 2000) {
  const [copied, setCopied] = useState(false)

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, duration)

      return true
    } catch {
      return false
    }
  }

  return {
    copied,
    copy,
  }
}
