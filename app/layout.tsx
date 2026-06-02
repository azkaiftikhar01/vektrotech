import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LogoAnimation from '@/components/LogoAnimation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vektro - Software Agency | Custom Development & AI Solutions',
  description:
    'Full-service software agency specializing in web design, mobile apps, AI assistants, and QA automation. Build software that moves your business forward.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Vektro - Software Agency',
    description:
      'Full-service software agency specializing in web design, mobile apps, AI assistants, and QA automation.',
    url: 'https://vektro.com',
    type: 'website',
    images: [
      {
        url: 'https://vektro.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vektro - Software Agency',
    description: 'Full-service software agency specializing in custom development.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%231B2A6B' width='100' height='100'/><text x='50%' y='50%' font-size='60' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'>V</text></svg>"
        />
      </head>
      <body className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen">
        <div className="w-full overflow-x-hidden">
          <LogoAnimation />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
