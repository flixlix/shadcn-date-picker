"use client"

import { PrismAsyncLight } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function SyntaxHighlighter({ code }: { code: string }) {
  return (
    <PrismAsyncLight
      language="typescript"
      wrapLines
      wrapLongLines
      customStyle={{
        borderWidth: "1px",
        borderColor: "hsl(var(--border))",
        borderRadius: "var(--radius)",
        backgroundColor: "hsl(var(--card))",
      }}
      style={vscDarkPlus}
    >
      {code}
    </PrismAsyncLight>
  )
}
