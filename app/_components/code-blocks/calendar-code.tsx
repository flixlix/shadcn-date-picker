import { Skeleton } from "@/components/ui/skeleton"
import dynamic from "next/dynamic"
import { fetchRepoContent } from "../../api/github-req/fetch-repo-content"
import CodeBlockWrapper from "./code-block-wrapper"
import CopyCode from "./copy-code"

const SyntaxHighlighter = dynamic(() => import("./syntax-highlighter"), {
  ssr: false,
  loading: () => <Skeleton className="h-32 w-full" />,
})

export default async function CalendarCode() {
  const response = await fetchRepoContent("components/ui/calendar.tsx")
  const content = atob((await response.json())?.response?.data?.content)

  return (
    <div className="grid max-w-full overflow-x-scroll">
      <CodeBlockWrapper>
        <div className="relative grid w-full overflow-hidden rounded-md">
          <SyntaxHighlighter code={content} />
          <CopyCode className="absolute right-4 top-4 z-10" code={content} />
        </div>
      </CodeBlockWrapper>
    </div>
  )
}
