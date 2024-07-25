"use client"

import { useTheme } from "next-themes"
import { PrismAsyncLight } from "react-syntax-highlighter"

import {
  coyWithoutShadows,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism"

export default function SyntaxHighlighter({ code }: { code: string }) {
  const { resolvedTheme } = useTheme()
  return (
    <PrismAsyncLight
      language="typescript"
      wrapLines
      wrapLongLines
      customStyle={{
        borderWidth: "1px",
        boxShadow: "none",
        paddingTop: "1rem",
        borderLeft: "1px solid hsl(var(--border)) !important",
        borderTop: "1px solid hsl(var(--border)) !important",
        borderBottom: "1px solid hsl(var(--border)) !important",
        borderRight: "1px solid hsl(var(--border))",
        borderColor: "hsl(var(--border))",
        borderRadius: "var(--radius) !important",
        background: "hsl(var(--card))",
      }}
      style={resolvedTheme === "dark" ? vscDarkPlus : coyWithoutShadows}
    >
      {code}
    </PrismAsyncLight>
  )
}
