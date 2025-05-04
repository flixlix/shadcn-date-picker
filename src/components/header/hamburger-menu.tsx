"use client"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import React from "react"
import { buttonVariants } from "../ui/button"
import { ModeSwitcher } from "./theme-toggle"

function OverlayMenu({
  isOpen,
  toggleOpen,
  closeMenu,
}: {
  isOpen: boolean
  toggleOpen: () => void
  closeMenu: () => void
}) {
  const [searchOpen, setSearchOpen] = React.useState(false)
  return (
    <div
      className={cn(
        "fixed inset-y-0 left-[-1rem] right-0 z-50 mx-0 flex h-screen w-full items-center bg-background/70 backdrop-blur-md transition-all md:hidden",
        isOpen
          ? "overflow-visible opacity-100"
          : "pointer-events-none opacity-0"
      )}
      onClick={toggleOpen}
    >
      <nav className="m-auto flex w-fit flex-col items-center justify-center gap-4">
        <ModeSwitcher />
        <Link
          href="/about-me"
          passHref
          aria-label="About Me"
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "text-2xl"
          )}
        >
          About Me
        </Link>
        <Link
          href="/portfolio"
          passHref
          aria-label="Portfolio"
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "text-2xl"
          )}
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          passHref
          aria-label="Contact"
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "text-2xl"
          )}
        >
          Contact
        </Link>
        <Link
          href="/statistics"
          passHref
          aria-label="Statistics"
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "text-2xl"
          )}
        >
          Statistics
        </Link>
      </nav>
    </div>
  )
}

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleOpen = () => setIsOpen((prev) => !prev)
  const hanbleClose = () => setIsOpen(false)
  return (
    <>
      <button
        className={cn(
          buttonVariants({
            size: "icon",
            variant: "ghost",
          }),
          "md:hidden"
        )}
        aria-label="Open Menu"
        onClick={toggleOpen}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      <OverlayMenu
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        closeMenu={hanbleClose}
      />
    </>
  )
}
