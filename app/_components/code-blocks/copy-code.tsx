"use client"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState } from "react"
import { toast } from "sonner"

export default function CopyCode({
  code,
  path = "app/_components/date-picker/date-picker.tsx",
  className,
}:
  | {
      code?: string
      path?: undefined
      className?: string
    }
  | {
      code?: undefined
      path?: string
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
            variant="outline"
            aria-label="Copy to clipboard"
            onClick={handleClickCopy}
            disabled={pending}
            className={className}
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
                  animate={isClicked ? "clicked" : "unclicked"}
                  variants={clipboardVariants}
                  className="stroke-muted-foreground"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
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
          <span>Copy Code</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
