"use client"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { humanizeString } from "@/utils/humanize-string"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Separator() {
  return (
    <>
      <svg
        className="mx-[-0.25rem] h-3 w-3 text-secondary-foreground"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18L15 12 9 6"></path>
      </svg>
    </>
  )
}

export default function Breadcrumbs() {
  const pathName = usePathname()
  if (pathName === "/") return null

  const paths = pathName
    .split("/")
    .filter((path) => path.length > 0) as string[]

  return (
    <div className="container grid grid-cols-1 gap-4 py-2">
      <div className="-ms-4 flex w-fit items-center rounded-sm p-0 text-secondary-foreground">
        <Link
          href="/"
          passHref
          className={cn(buttonVariants({ variant: "link" }), "py-0 font-light")}
        >
          Home
        </Link>
        <Separator />
        {paths.map((path, index) => (
          <div className="flex items-center" key={index}>
            {index !== paths.length - 1 ? (
              <div className="flex items-center">
                <Link
                  href={`/${paths.slice(0, index + 1).join("/")}`}
                  passHref
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    (index === paths.length - 1 && "font-bold") || "font-light",
                    "py-0"
                  )}
                >
                  {humanizeString(path || "")}
                </Link>
                <Separator />
              </div>
            ) : (
              <div className="flex items-center">
                <span className="truncate px-4 py-0 font-bold">
                  {humanizeString(decodeURIComponent(path) || "")}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
