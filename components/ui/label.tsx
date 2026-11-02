import * as React from "react"
import { cn } from "@/lib/utils"

export type LabelProps = React.ComponentProps<"label">

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "text-sm font-semibold leading-none text-foreground select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}
