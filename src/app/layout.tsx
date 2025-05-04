import Breadcrumbs from "@/components/breadcrumbs"
import Footer from "@/components/footer/footer"
import Header from "@/components/header"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/providers/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { type Metadata, type Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "year picker",
    "date picker",
    "date",
    "shadcn",
    "flixlix",
    "Luca Félix",
    "Luca Ziegler",
    "Luca Ziegler Félix",
    "Luca",
    "Ziegler",
    "Félix",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="og:url" content={String(siteConfig.url)} />
          <meta property="og:site_name" content={siteConfig.title} />
        </head>
        <body
          className={cn(
            "relative flex min-h-screen flex-col bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <Breadcrumbs />
            {children}
            <Toaster richColors />
            <Footer />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  )
}
