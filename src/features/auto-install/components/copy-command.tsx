"use client"

import { CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { siteConfig } from "@/config/site"
import { usePM, type PackageManager } from "@/hooks/use-pm"
import { cn } from "@/lib/utils"
import React from "react"
import CopyCode from "./copy-code"

const tabTriggerMinimalClassName =
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow rounded-none border-b border-transparent bg-transparent p-0 pb-1.5 font-mono text-zinc-400 data-[state=active]:border-b-zinc-50 data-[state=active]:bg-transparent data-[state=active]:text-zinc-50"

const COMMANDS = {
  pnpm: `pnpm dlx shadcn@latest add ${siteConfig.url}r/date-picker.json`,
  npm: `npx shadcn@latest add ${siteConfig.url}r/date-picker.json`,
  yarn: `yarn dlx shadcn@latest add ${siteConfig.url}r/date-picker.json`,
  bun: `bun add shadcn@latest ${siteConfig.url}r/date-picker.json`,
} as {
  [key in PackageManager]: string
}

export default function CopyCommand() {
  const { pm, setPackageManager } = usePM()
  return (
    <div className="relative mt-2 max-h-[650px] overflow-x-auto rounded-xl bg-zinc-950 dark:bg-zinc-900">
      <CardContent className="px-0 py-0 font-mono">
        <Tabs
          defaultValue={pm}
          onValueChange={(value) => setPackageManager(value as PackageManager)}
        >
          <div className="relative flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-3 pt-2.5">
            <TabsList className="inline-flex h-7 translate-y-[2px] items-center justify-center gap-3 rounded-lg bg-transparent p-0 pl-1 text-muted-foreground">
              {Object.keys(COMMANDS).map((key) => (
                <TabsTrigger
                  key={key + "trigger"}
                  className={tabTriggerMinimalClassName}
                  value={key}
                >
                  {key}
                </TabsTrigger>
              ))}
            </TabsList>
            <CopyCode code={COMMANDS[pm as PackageManager]} />
          </div>
          {Object.entries(COMMANDS).map(([key, command]) => (
            <div key={key + "content"} className="overflow-x-auto">
              <TabsContent
                value={key}
                className="mt-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <CodeBlock>{command}</CodeBlock>
              </TabsContent>
            </div>
          ))}
        </Tabs>
      </CardContent>
    </div>
  )
}

function CodeBlock(props: React.ComponentProps<"pre">) {
  const { className, children, ...rest } = props
  return (
    <pre className={cn("px-4 py-5", className)} {...rest}>
      <code className="relative font-mono text-sm leading-none text-white">
        {children}
      </code>
    </pre>
  )
}
