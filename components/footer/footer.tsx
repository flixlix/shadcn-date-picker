import { InlineLink } from "../inline-link"

export default function Footer() {
  return (
    <div className="container pt-[3rem]">
      <footer className="flex h-24 w-full flex-col items-start gap-2 border-t py-2 text-sm text-muted-foreground md:grid md:grid-cols-2 md:items-center">
        <div className="flex items-center">
          <p>
            Made with
            <span title="a.k.a. love"> ❤️ </span>
            by{" "}
            <InlineLink href="/about-me" openInNewTab={false}>
              Luca Ziegler Félix
            </InlineLink>
          </p>
        </div>
        <div className="flex items-center justify-end">
          <p className="w-fit text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
          </p>
        </div>
      </footer>
    </div>
  )
}
