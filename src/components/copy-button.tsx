"use client"

import { useCopy } from "@/hooks/use-copy"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type CopyButtonProps = React.ComponentProps<typeof Button> & {
  text: string
  label?: {
    label?: string
    copiedLabel?: string
  }
  tooltip?: string
}

export function CopyButton({
  text,
  label,
  tooltip,
  ...props
}: CopyButtonProps) {
  const { copied, copy } = useCopy()

  const button = (
    <Button {...props} onClick={() => copy(text)}>
      {copied ? <Check /> : <Copy />}
      {copied ? label?.copiedLabel : label?.label}
    </Button>
  )

  if (!tooltip) {
    return button
  }

  return (
    <Tooltip>
      <TooltipTrigger render={button} />
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  )
}
