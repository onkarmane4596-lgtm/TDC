import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })

export const metadata: Metadata = {
  title: "The Daddy Cinematics | Premium Cinematic Wedding & Event Films",
  description:
    "Top-rated cinematic wedding and event film production studio based in Pune. Serving Mumbai, Pune, Satara, and Kolhapur. We craft legacy films, pre-weddings, and commercial ads.",
  keywords: [
    // --- Brand Specific SEO ---
    "The Daddy Cinematics",
    "the daddy cinematics pune",
    "the daddy cinematics weddings",
    "thedaddycinematics",
    "The Daddy Cinematics Studio",
    "thetejaslokhande",
    "the tejas lokhande",
    "Tejas Lokhande cinematographer",
    "Tejas Lokhande director",
    "@thedaddycinematics",
    "@thetejaslokhande",
    // --- Global & Local SEO ---
    "Cinematic Wedding Films",
    "Best Wedding Videographer in Pune",
    "Luxury Wedding Videos Mumbai",
    "Pre-Wedding Videography Satara",
    "Event Filmmaking Kolhapur",
    "Commercial Ad Film Production",
    "Top Wedding Cinematographer Maharashtra",
    "Candid Wedding Videography",
    "Trending Cinematic Storytelling",
  ],
  authors: [{ name: "Tejas Lokhande", url: "https://instagram.com/thetejaslokhande" }],
  creator: "The Daddy Cinematics",
  publisher: "The Daddy Cinematics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "The Daddy Cinematics | Premium Cinematic Wedding & Event Films",
    description:
      "Top-rated cinematic wedding and event film production studio based in Pune. Serving Mumbai, Pune, Satara, and Kolhapur.",
    url: "https://thedaddycinematics.com",
    siteName: "The Daddy Cinematics",
    images: [
      {
        url: "/TDC%20LOGO.png",
        width: 1200,
        height: 630,
        alt: "The Daddy Cinematics Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Daddy Cinematics | Premium Cinematic Wedding & Event Films",
    description:
      "Cinematic wedding and event film production studio based in Pune. Serving Mumbai, Pune, Satara, and Kolhapur.",
    creator: "@thedaddycinematics",
    images: ["/TDC%20LOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/TDC%20LOGO.png",
    shortcut: "/TDC%20LOGO.png",
    apple: "/TDC%20LOGO.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
