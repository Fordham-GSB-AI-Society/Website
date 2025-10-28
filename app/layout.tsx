import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: 'Fordham GSB AI Society - Artificial Intelligence Community',
  description: 'The Fordham GSB AI Society is a student-led organization dedicated to advancing artificial intelligence education, research, and innovation on campus and beyond',
  openGraph: {
    title: 'Fordham GSB AI Society - Artificial Intelligence Community',
    description: 'The Fordham GSB AI Society is a student-led organization dedicated to advancing artificial intelligence education, research, and innovation on campus and beyond',
    images: [
      {
        url: '/fgsbais_logo.png', // Your image URL
        alt: 'Fordham GSB AI Society',
      }
    ],
    url: 'https://www.fordhamgsb-ais.org',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fordham GSB AI Society - Artificial Intelligence Community',
    description: 'The Fordham GSB AI Society is a student-led organization dedicated to advancing artificial intelligence education, research, and innovation on campus and beyond',
    images: ['/fgsbais_logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NLHE0F8N44"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NLHE0F8N44');
            `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}