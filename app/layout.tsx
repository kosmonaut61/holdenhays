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
  metadataBase: new URL("https://www.holdenhays.com"),
  title: {
    default: "Holden Hays — Product Leader & Designer",
    template: "%s | Holden Hays",
  },
  description:
    "Portfolio of Holden Hays, a Phoenix-based product-focused leader blending product design, product marketing, and commercial strategy.",
  applicationName: "Holden Hays",
  authors: [{ name: "Holden Hays" }],
  creator: "Holden Hays",
  publisher: "Holden Hays",
  category: "portfolio",
  keywords: [
    "Holden Hays",
    "product leader",
    "product design",
    "product marketing",
    "portfolio",
    "Phoenix",
    "case studies",
    "B2B SaaS",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.holdenhays.com",
    siteName: "Holden Hays",
    title: "Holden Hays — Product Leader & Designer",
    description:
      "Product leadership and design case studies across growth, monetization, and system modernization.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holden Hays — Product Leader & Designer",
    description:
      "Product leadership and design case studies across growth, monetization, and system modernization.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Holden Hays",
              jobTitle: "Product Focused Leader",
              url: "https://www.holdenhays.com",
              email: "mailto:hello@holdenhays.com",
              homeLocation: {
                "@type": "Place",
                name: "Phoenix, Arizona",
              },
            }),
          }}
        />
      </head>
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

// this is the real kosmo

// Hello World
