"use client"

import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"

type ClockPrecision = "hours" | "minutes" | "seconds"

export function LiveClock({
  timeZone = "Asia/Riyadh",
  hour12 = false,
  precision = "minutes",
  className,
  ...props
}: React.ComponentProps<"span"> & {
  timeZone?: string
  hour12?: boolean
  precision?: ClockPrecision
}) {
  const [time, setTime] = useState<string | null>(null)

  const formatter = useMemo(() => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone,
      hour12,
      hour: "numeric",
    }

    if (precision === "minutes" || precision === "seconds") {
      options.minute = "2-digit"
    }
    if (precision === "seconds") {
      options.second = "2-digit"
    }

    return new Intl.DateTimeFormat("en", options)
  }, [timeZone, hour12, precision])

  useEffect(() => {
    const updateClock = () => {
      setTime(formatter.format(new Date()))
    }

    updateClock()

    const id = setInterval(updateClock, 1000)
    return () => clearInterval(id)
  }, [formatter])

  const placeholder = useMemo(() => {
    const parts = ["--"]
    if (precision === "minutes" || precision === "seconds") parts.push("--")
    if (precision === "seconds") parts.push("--")
    let base = parts.join(":")
    if (hour12) base += " --"
    return base
  }, [precision, hour12])

  return (
    <span className={cn("font-mono text-xs", className)} {...props}>
      {time ?? placeholder}
    </span>
  )
}
