import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { siteConfig } from "@/config/site"
import { Building, Link, MapPin } from "lucide-react"
import React, { type ReactElement } from "react"

export default function Footer() {
  return (
    <div className="container pt-[3rem]">
      <footer className="grid w-full grid-cols-1 items-start gap-4 border-t py-8 text-sm text-muted-foreground md:grid-cols-2 md:gap-2">
        <div className="flex items-center">
          <div>
            Made with{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="cursor-help">❤️</TooltipTrigger>
                <TooltipContent>Love</TooltipContent>
              </Tooltip>
            </TooltipProvider>{" "}
            by{" "}
            <HoverCard>
              <HoverCardTrigger
                href={siteConfig.portfolioUrl}
                target="blank"
                className="hover:text-primary hover:underline"
              >
                Luca Ziegler Félix
              </HoverCardTrigger>
              <HoverCardContent
                align="start"
                alignOffset={-112}
                sideOffset={16}
                className="w-96"
              >
                <div className="flex gap-4">
                  <a
                    href={siteConfig.portfolioUrl}
                    target="blank"
                    className="mt-1 h-full"
                  >
                    <Avatar>
                      <AvatarImage src={siteConfig.avatarUrl} />
                      <AvatarFallback>LF</AvatarFallback>
                    </Avatar>
                  </a>
                  <div className="ml-2">
                    <h4 className="text-sm font-semibold">
                      <a
                        href={siteConfig.portfolioUrl}
                        target="blank"
                        className="hover:text-primary hover:underline"
                      >
                        @flixlix
                      </a>
                    </h4>
                    <p className="text-sm">
                      Passionate full-stack software developer, designer and
                      student.
                    </p>
                    <CustomLinksSection />
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <div className="flex items-center justify-start md:justify-end">
          <p className="flex w-fit items-center gap-x-2 text-muted-foreground">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}

function CustomLinksSection() {
  return (
    <>
      <CustomLink
        link="https://maps.app.goo.gl/geSf6wxtUyXZyEGHA"
        icon={<MapPin />}
      >
        Germany
      </CustomLink>
      <CustomLink link="https://hfg-gmuend.de/" icon={<Building />}>
        Student - HfG Schwäbisch Gmünd
      </CustomLink>
      <CustomLink link={siteConfig.portfolioUrl} icon={<Link />}>
        My Portfolio
      </CustomLink>
    </>
  )
}

function CustomLink({
  children,
  link,
  icon,
}: {
  children: React.ReactNode
  link: string
  icon: ReactElement
}) {
  const classNameIcon = "mr-1 h-4 w-4 opacity-70"
  return (
    <a
      className="group flex cursor-pointer items-center pt-2 underline-offset-4 hover:underline"
      href={link}
      target="blank"
      rel="noopener noreferrer"
    >
      {React.cloneElement(icon, {
        className: classNameIcon,
      })}{" "}
      <span className="flex items-center text-xs text-muted-foreground group-hover:text-foreground">
        {children}
      </span>
    </a>
  )
}
