import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertOctagon } from "lucide-react"
import Link from "next/link"
import { fetchRepoContent } from "../lib/fetch-repo-content"
import SyntaxHighlighter from "./syntax-highlighter"

const path =
  "src/registry/new-york/components/date-picker/date-range-picker.tsx"

export default async function RangePickerCode() {
  const response = await fetchRepoContent(path).catch(
    () => ({ ok: false }) as Response
  )
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
            href={`https://github.com/flixlix/shadcn-date-picker/blob/main/${path}`}
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
      <div className="relative grid w-full overflow-hidden">
        <p className="px-4 text-sm font-medium text-foreground">
          components/date-range-picker.tsx
        </p>
        <div className="relative overflow-hidden rounded-md bg-zinc-950">
          <SyntaxHighlighter lang="tsx">{content}</SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
