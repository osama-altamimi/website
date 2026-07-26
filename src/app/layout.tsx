import "./globals.css"
import { metadata, viewport } from "@/config/metadata"
import { geistSans, geistMono, rustico } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Footer } from "@/components/sections/footer"
import { SideButtons } from "@/components/sections/side-buttons"

export { metadata, viewport }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(geistSans.variable, geistMono.variable, rustico.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            {children}
            <Footer />
            <SideButtons />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
