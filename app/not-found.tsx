import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container">
      <section className="mx-auto flex max-w-xl flex-col items-center py-52">
        <h1 className="mb-8 text-center text-7xl font-bold text-primary">
          404
        </h1>
        <p className="mb-4 text-lg">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <Button variant="outline" asChild>
          <Link href="/">
            Back to Homepage
            <Home className="size-4" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
