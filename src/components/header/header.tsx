"use client"

import { MainTitle } from "@/components/header/main-title"
import { ModeSwitcher } from "@/components/header/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { useScrollY } from "@/hooks/use-scroll-y"
import { cn } from "@/lib/utils"
import { Github } from "lucide-react"
import Link from "next/link"
import HamburgerMenu from "./hamburger-menu"

function GithubLink() {
  return (
    <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
      <div
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <Github className="size-5 stroke-[1.5]" />
        <span className="sr-only">GitHub</span>
      </div>
    </Link>
  )
}

const SCROLL_TRIGGER = 1

export function Header() {
  const scrollY = useScrollY()
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-background/70 backdrop-blur-md"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <MainTitle />
        <div className="flex items-center justify-end gap-x-4">
          <div className="hidden shrink-0 items-center gap-x-1 md:flex">
            <GithubLink />
            <ModeSwitcher />
          </div>
        </div>
        <HamburgerMenu />
      </div>
      <div
        className={cn(
          "w-full border-b transition-all duration-500 ease-in-out motion-reduce:duration-0",
          scrollY >= SCROLL_TRIGGER ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  )
}
