import { cn } from "@/lib/utils"
import { type BundledLanguage, codeToHtml } from "shiki"

export default async function SyntaxHighlighter({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children: string
  lang: BundledLanguage
}) {
  const out = await codeToHtml(children, {
    lang: props.lang,
    theme: "github-dark",
  })

  return (
    <div
      className={cn(
        "relative flex-1 overflow-hidden [&_*]:!bg-transparent [&_.line:before]:sticky [&_.line:before]:left-2 [&_.line:before]:z-10 [&_.line:before]:translate-y-[-1px] [&_.line:before]:pr-1 [&_pre]:h-[--height] [&_pre]:overflow-auto [&_pre]:!bg-transparent [&_pre]:px-4 [&_pre]:pt-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed",
        className
      )}
      dangerouslySetInnerHTML={{ __html: out }}
      {...props}
    />
  )
}
