import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "@/styles/interactive.css"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stoop - The Free Furniture App",
  description: "Find, share, and collect free furniture in your community with Stoop",
  keywords: ["furniture", "free", "community", "sustainability", "app", "reuse"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 btn-hover">
                  <div className="relative w-10 h-10 overflow-hidden">
                    <Image
                      src="/images/stoop-logo-new.jpg"
                      alt="Stoop Logo"
                      fill
                      className="object-contain opacity-100"
                      priority
                      style={{ opacity: 1 }}
                    />
                  </div>
                  <span className="font-bold text-xl hidden sm:inline-block">Stoop</span>
                </Link>
                <nav className="flex items-center gap-6">
                  <Link href="/" className="text-sm font-medium transition-colors hover:text-primary nav-link">
                    Home
                  </Link>
                  <Link href="/community" className="text-sm font-medium transition-colors hover:text-primary nav-link">
                    Community
                  </Link>
                  <Link href="/feedback" className="text-sm font-medium transition-colors hover:text-primary nav-link">
                    Feedback
                  </Link>
                </nav>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 bg-muted/40">
              <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">About Stoop</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/about"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary link-hover"
                      >
                        Our Mission
                      </Link>
                    </li>
                    <li>
                      <Link href="/team" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary link-hover"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/support"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary link-hover"
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Legal</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/privacy"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary link-hover"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary link-hover"
                      >
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Connect</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://x.com/stooptoronto?s=21"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary link-hover"
                      >
                        X (formerly Twitter)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/stoop_inc?igsh=MXFldGNoZHZ6N3FpaA=="
                        className="text-sm text-muted-foreground transition-colors hover:text-primary link-hover"
                      >
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="mailto:contact@stoopinc.com"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary link-hover"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="container mt-8 border-t pt-6">
                <p className="text-xs text-muted-foreground text-center">
                  &copy; {new Date().getFullYear()} Stoop Inc. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'