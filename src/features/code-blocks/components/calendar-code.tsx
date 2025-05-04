import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertOctagon } from "lucide-react"
import Link from "next/link"
import { fetchRepoContent } from "../lib/fetch-repo-content"
import CodeBlockWrapper from "./code-block-wrapper"
import CopyCode from "./copy-code"
import SyntaxHighlighter from "./syntax-highlighter"

export default async function CalendarCode() {
  const response = await fetchRepoContent(
    "src/registry/new-york/components/ui/calendar.tsx"
  ).catch(() => ({ ok: false }) as Response)
  if (!response.ok)
    return (
      <Alert variant="destructive">
        <AlertOctagon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to fetch the code snippet. Please try again later.
          <br />
          Alternatively, you can view this demo code in the{" "}
          <Link
            target="_blank"
            href={`https://github.com/flixlix/shadcn-date-picker/blob/main/src/registry/new-york/components/ui/calendar.tsx`}
          >
            repository
          </Link>
          .
        </AlertDescription>
      </Alert>
    )
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
