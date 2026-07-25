import "./globals.css"
import { metadata, viewport } from "@/config/metadata"
import { geistSans, geistMono, rustico } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Footer } from "@/components/sections/footer"
import { ThemeToggle } from "@/components/theme/theme-toggle"

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
            <div className="fixed right-4 bottom-4 z-50">
              <ThemeToggle />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
