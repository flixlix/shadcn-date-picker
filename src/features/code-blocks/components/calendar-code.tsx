import { fetchRepoContent } from "../lib/fetch-repo-content"
import CodeBlockWrapper from "./code-block-wrapper"
import CopyCode from "./copy-code"
import SyntaxHighlighter from "./syntax-highlighter"

export default async function CalendarCode() {
  const response = await fetchRepoContent("src/components/ui/calendar.tsx")
  const content = atob((await response.json())?.response?.data?.content)

  return (
    <div className="grid max-w-full overflow-x-scroll">
      <div className="relative grid w-full overflow-y-hidden">
        <p className="px-4 text-sm font-medium text-foreground">
          components/ui/calendar.tsx
        </p>
        <CodeBlockWrapper className="mt-2">
          <SyntaxHighlighter lang="tsx">{content}</SyntaxHighlighter>
          <CopyCode className="absolute right-4 top-4" code={content} />
        </CodeBlockWrapper>
      </div>
    </div>
  )
}
