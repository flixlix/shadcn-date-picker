"use client"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import React, { type ReactNode } from "react"

export default function CodeBlockWrapper({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <div className={cn("relative overflow-hidden rounded-md", className)}>
      <Collapsible open={isOpened} onOpenChange={setIsOpened}>
        <CollapsibleContent
          forceMount
          className={cn("overflow-y-hidden", !isOpened && "max-h-32")}
        >
          <div
            className={cn(
              "bg-zinc-950 [&_pre]:my-0 [&_pre]:max-h-full [&_pre]:!pb-[100px]",
              !isOpened ? "[&_pre]:overflow-y-hidden" : "[&_pre]:overflow-auto"
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            "absolute flex items-center justify-center p-2",
            isOpened
              ? "inset-x-0 bottom-0 bg-zinc-950 py-8"
              : "inset-0 bg-gradient-to-b from-zinc-900/30 to-zinc-950/90"
          )}
        >
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="h-8 text-xs">
              {isOpened ? "Collapse" : "Expand"}
            </Button>
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </div>
  )
}
