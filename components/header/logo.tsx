import Link from "next/link"
import PersonalIcon from "./personal-icon"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center justify-start gap-3 truncate">
      <PersonalIcon className="hidden md:inline-block" />
      <h1 className="text-xl font-extralight tracking-wide">
        Shadcn Date Picker
      </h1>
    </Link>
  )
}
