"use client"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import React, { ReactNode } from "react"

export default function CodeBlockWrapper({
  children,
}: {
  children: ReactNode
}) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn("relative overflow-hidden")}>
        <CollapsibleContent
          forceMount
          className={cn("overflow-hidden", !isOpened && "max-h-32")}
        >
          <div
            className={cn(
              "[&_pre]:my-0 [&_pre]:max-h-full [&_pre]:!pb-[100px]",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]"
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            "absolute flex items-center justify-center bg-gradient-to-b from-transparent to-background/90 p-2",
            isOpened ? "inset-x-0 bottom-0 h-12" : "inset-0"
          )}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="secondary"
              className={cn("h-8 text-xs", isOpened && "mb-10")}
            >
              {isOpened ? "Collapse" : "Expand"}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  )
}
