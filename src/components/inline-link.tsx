import { cn } from "@/lib/utils"
import { type ClassValue } from "clsx"
import Link, { type LinkProps } from "next/link"

export function InlineLink({
  href,
  children,
  openInNewTab = true,
  className,
  ...props
}: {
  href: LinkProps["href"]
  children: React.ReactNode
  openInNewTab?: boolean
  className?: ClassValue
}) {
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "underline-offset-4 hover:text-primary hover:underline",
        className
      )}
      target={openInNewTab ? "_blank" : undefined}
      rel="noreferrer"
    >
      {children}
    </Link>
  )
}
