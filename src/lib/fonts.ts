import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const lastik = localFont({
  variable: "--font-serif",
  src: "../fonts/lastik-regular.woff2",
  weight: "400",
  style: "normal",
})
