import { Card } from "@/components/ui/card"
import { type ReactNode } from "react"

export default function DemoDisplay({ children }: { children: ReactNode }) {
  return (
    <Card className="flex min-h-60 w-full items-center justify-center p-10">
      {children}
    </Card>
  )
}
