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

export const rustico = localFont({
  variable: "--font-rustico",
  src: [
    {
      path: "../fonts/Rustico-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
})
