import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css"
import Navbar from "./_components/Navbar"
import Headbar from "./_components/Headbar"
import Footer from "./_components/Footer"
import CTAWhatsapp from "./_components/CTA"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Sanity RTWFM | Recover the World From Madness",
  description:
    "Discover sustainable and meaningful clothing at Sanity RTWFM. Join us in recovering the world from madness through mindful fashion.",
  keywords: [
    "sustainable clothing",
    "mental health apparel",
    "eco-friendly fashion",
    "mindful fashion",
    "Sanity RTWFM",
    "recover the world",
  ],
  openGraph: {
    title: "Sanity RTWFM | Recover the World From Madness",
    description:
      "Discover sustainable and meaningful clothing at Sanity RTWFM. Join us in recovering the world from madness through mindful fashion.",
    url: "https://www.sanityrtwfm.com",
    siteName: "Sanity RTWFM",
    images: [
      {
        url: "/assets/images/logo/logo-primary-white.png",
        width: 1200,
        height: 630,
        alt: "Sanity RTWFM - Mindful Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanity RTWFM | Recover the World From Madness",
    description:
      "Discover sustainable and meaningful clothing at Sanity RTWFM. Join us in recovering the world from madness through mindful fashion.",
    images: ["https://www.sanityrtwfm.com/og-image.jpg"], // Ganti dengan URL gambar Twitter Anda
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen w-screen overflow-x-hidden overflow-y-auto relative font-sans antialiased",
          fontSans.variable
        )}
      >
        <header className="sticky top-0 z-50 w-full">
          <Headbar />
          <Navbar />
        </header>
        <main className="w-full mb-16">{children}</main>
        <Footer />
        <CTAWhatsapp />
      </body>
    </html>
  )
}
