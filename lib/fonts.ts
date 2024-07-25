import { Albert_Sans, JetBrains_Mono as FontMono } from "next/font/google"

export const fontSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
