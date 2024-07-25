"use client"

import { MainTitle } from "@/components/header/main-title"
import { ThemeToggle } from "@/components/header/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Github } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

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

const SCROLL_TRIGGER = 50

export function Header() {
  const [scrollBorder, setScrollBorder] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_TRIGGER) {
        setScrollBorder(true)
      } else {
        setScrollBorder(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
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
            <ThemeToggle />
          </div>
        </div>
        <HamburgerMenu />
      </div>
      <div
        className={cn(
          "w-full border-b transition-all duration-500 ease-in-out motion-reduce:duration-0",
          scrollBorder ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  )
}
