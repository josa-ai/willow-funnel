/**
 * Funnel Layout Template
 * 
 * Instructions:
 * 1. Choose font pairing from references/design-tokens.md
 * 2. Update Google Fonts imports
 * 3. Add meta tags for SEO
 */

import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

// ==================== FONT CONFIGURATION ====================
// Choose fonts from references/design-tokens.md
// Examples:
// - Editorial: Playfair Display + Source Sans 3
// - Modern Tech: Cabinet Grotesk + Inter
// - Bold: Clash Display + Satoshi
// - Warm: Fraunces + Plus Jakarta Sans

const fontDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const fontBody = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

// ==================== METADATA ====================
// Update with funnel-specific meta
export const metadata: Metadata = {
  title: '', // USER: Add page title
  description: '', // USER: Add meta description
  openGraph: {
    title: '',
    description: '',
    images: ['/og-image.jpg'], // Add OG image
  },
  twitter: {
    card: 'summary_large_image',
    title: '',
    description: '',
  },
}

// ==================== ROOT LAYOUT ====================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${fontDisplay.variable} ${fontBody.variable}`}
    >
      <head>
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon - update paths */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-body antialiased">
        {/* Skip to content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                     bg-primary text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to content
        </a>
        
        <main id="main-content">
          {children}
        </main>
        
        {/* Optional: Analytics scripts */}
        {/* 
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        */}
      </body>
    </html>
  )
}
