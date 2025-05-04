import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "../ui/separator"
import PersonalIcon from "./personal-icon"

export default function Logo() {
  return (
    <div className="flex items-center justify-start truncate">
      <HoverCard openDelay={0} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Link href="https://luca-felix.com" className="pe-2">
            <PersonalIcon className="hidden md:inline-block" />
          </Link>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          alignOffset={-12}
          className="w-full max-w-sm px-0 pb-0 pt-2"
        >
          <Link href="https://luca-felix.com" className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-1 px-2">
              <div className="size-2 rounded-full bg-red-400" />
              <div className="size-2 rounded-full bg-amber-400" />
              <div className="size-2 rounded-full bg-green-400" />
            </div>
            <Image
              loading="lazy"
              src="/luca-felix-web.png"
              alt="preview of my personal portfolio"
              className="overflow-clip rounded-sm object-contain"
              width={382}
              height={229}
            />
          </Link>
        </HoverCardContent>
      </HoverCard>
      <Link href="/" className="flex items-center">
        <Separator orientation="vertical" className="h-5 rotate-[20deg]" />
        <h1 className="ps-2 text-lg font-extralight tracking-wide">
          Shadcn Date Picker
        </h1>
      </Link>
    </div>
  )
}
