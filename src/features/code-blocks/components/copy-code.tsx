"use client"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState } from "react"
import { toast } from "sonner"

export default function CopyCode({
  code,
  path = "features/date-picker/date-picker.tsx",
  copyTooltip = "Copy Code",
  className,
}: (
  | {
      code?: string
      path?: undefined
    }
  | {
      code?: undefined
      path?: string
    }
) & {
  copyTooltip?: string
  className?: string
}) {
  const [isClicked, setIsClicked] = useState(false)
  const [pending, setPending] = useState(false)

  const clipboardVariants = {
    clicked: { opacity: 0, transition: { delay: 0, duration: 0.2 } },
    unclicked: { opacity: 1 },
  }

  const circleVariants = {
    clicked: {
      opacity: 1,
      pathLength: 1,
      transition: { delay: 0.2, duration: 0.3 },
    },
    unclicked: { opacity: 0, pathLength: 0 },
  }

  const loadingCircleVariants = {
    idle: { rotate: 0, opacity: 0, transition: { duration: 0.3 } },
    pending: {
      rotate: 360,
      opacity: 1,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 1,
      },
    },
  }

  const checkmarkVariants = {
    clicked: {
      opacity: 1,
      pathLength: 1,
      transition: { delay: 0.5, duration: 0.3 },
    },
    unclicked: { opacity: 0, pathLength: 0 },
  }

  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0, 0.3], [0, 1])
  const handleClickCopy = async () => {
    setPending(true)
    try {
      if (code) {
        navigator.clipboard.writeText(code).catch((err) => {
          throw err ?? "Could not copy to clipboard"
        })
        setIsClicked(true)
        setTimeout(() => setPending(false), 50)
        setTimeout(() => setIsClicked(false), 5000)
        return
      }

      const response = await fetch(`/api/github-req?path=${path}`, {
        method: "GET",
        cache: "force-cache",
      })
      if (!response.ok) {
        throw new Error(response.statusText ?? "Failed to fetch code")
      }
      const content = (await response.json())?.response?.data?.content
      if (!content) {
        throw new Error("Empty Content")
      }
      navigator.clipboard.writeText(atob(content)).catch((err) => {
        throw err ?? "Could not copy to clipboard"
      })
      setIsClicked(true)
      setTimeout(() => setPending(false), 50)
      setTimeout(() => setIsClicked(false), 5000)
    } catch (err) {
      const error = err instanceof Error ? err.message : undefined
      toast.error("Failed to copy code", {
        dismissible: true,
        closeButton: true,
        description: error || "Unknown error",
      })
      console.error(error)
      setPending(false)
    }
  }
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            aria-label="Copy to clipboard"
            onClick={handleClickCopy}
            disabled={pending}
            className={cn(
              "z-10 h-6 w-6 rounded-[0.5rem] text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3",
              className
            )}
            size="icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-4 stroke-2"
            >
              <g fill="none" fillRule="evenodd">
                <motion.g
                  initial={false}
                  animate={isClicked || pending ? "clicked" : "unclicked"}
                  variants={clipboardVariants}
                  className="stroke-current"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </motion.g>
                <motion.g
                  initial={false}
                  animate={pending ? "pending" : "idle"}
                  variants={loadingCircleVariants}
                  className="stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-6.219-8.56"
                  />
                </motion.g>
                <g className="stroke-green-500">
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                    initial={false}
                    animate={isClicked ? "clicked" : "unclicked"}
                    variants={circleVariants}
                  />
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 11 3 3L22 4"
                    initial={false}
                    animate={isClicked ? "clicked" : "unclicked"}
                    variants={checkmarkVariants}
                    style={{ pathLength, opacity }}
                  />
                </g>
              </g>
            </svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>{copyTooltip}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
