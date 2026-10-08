import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://www.di-science.pp.ua'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Данило Іванов — академічне портфоліо',
    template: '%s | Данило Іванов',
  },
  description: 'Академічне портфоліо Данила Іванова: наукові дослідження, тези, доповіді та університетські досягнення.',
  keywords: [
    'Данило Іванов',
    'Данило Іванов академічне портфоліо',
    'Іванов Данило Тимурович',
    'ХНПУ',
    'ХНПУ імені Григорія Сковороди',
    'наукові дослідження',
    'тези доповідей',
    'студент математики та інформатики',
    'академічне портфоліо',
  ],
  applicationName: 'Академічне портфоліо Данила Іванова',
  authors: [{ name: 'Данило Іванов', url: siteUrl }],
  creator: 'Данило Іванов',
  publisher: 'Данило Іванов',
  category: 'education',
  classification: 'Academic portfolio',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    locale: 'uk_UA',
    url: siteUrl,
    siteName: 'Академічне портфоліо Данила Іванова',
    title: 'Данило Іванов — академічне портфоліо',
    description: 'Наукові дослідження, тези, доповіді та університетські досягнення студента ХНПУ.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Академічне портфоліо Данила Іванова',
      },
    ],
    firstName: 'Данило',
    lastName: 'Іванов',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Данило Іванов — академічне портфоліо',
    description: 'Наукові дослідження, тези та університетські досягнення Данила Іванова.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  generator: 'v0.app',
  verification: {
    google: 'TwcCzZHJ-x1NTA9UQpnOAW75n__9WGeVfL_NRZiBSWs',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
