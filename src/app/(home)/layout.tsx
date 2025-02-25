import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "../globals.css"
import Navbar from "../_components/Navbar"
import Headbar from "../_components/Headbar"

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
    "Discover sustainable and meaningful clothing at Sanity.rtwfm. Join us in recovering the world from madness through mindful fashion.",
  keywords: [
    "sustainable clothing",
    "mental health apparel",
    "eco-friendly fashion",
    "mindful fashion",
    "Sanity.rtwfm",
    "recover the world",
  ],
  openGraph: {
    title: "Sanity.rtwfm | Recover the World From Madness",
    description:
      "Discover sustainable and meaningful clothing at Sanity.rtwfm. Join us in recovering the world from madness through mindful fashion.",
    url: "https://www.sanityrtwfm.com",
    siteName: "Sanity.rtwfm",
    images: [
      {
        url: "https://www.sanityrtwfm.com/og-image.jpg", // Ganti dengan URL gambar Open Graph Anda
        width: 1200,
        height: 630,
        alt: "Sanity.rtwfm - Mindful Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanity.rtwfm | Recover the World From Madness",
    description:
      "Discover sustainable and meaningful clothing at Sanity.rtwfm. Join us in recovering the world from madness through mindful fashion.",
    images: ["https://www.sanityrtwfm.com/og-image.jpg"], // Ganti dengan URL gambar Twitter Anda
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "h-screen w-screen overflow-hidden relative font-sans antialiased",
          fontSans.variable
        )}
      >
        <Headbar />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
