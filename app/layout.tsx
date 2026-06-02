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
  metadataBase: new URL('https://vektro.tech'),
  alternates: {
    canonical: 'https://vektro.tech',
  },
  verification: {
    google: 'K_L_d8hCSuoj5OVYAPpVxYfr8c9p2MTnMTVZoR9POKY',
  },
  openGraph: {
    title: 'Vektro - Software Agency',
    description:
      'Full-service software agency specializing in web design, mobile apps, AI assistants, and QA automation.',
    url: 'https://vektro.tech',
    type: 'website',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Vektro',
              url: 'https://vektro.tech',
              logo: 'https://vektro.tech/logo.png',
              description:
                'Full-service software agency specializing in web design, mobile apps, AI assistants, and QA automation.',
              email: 'hello@vektro.tech',
              sameAs: [
                'https://linkedin.com/company/vektro',
                'https://instagram.com/vektro.tech',
              ],
              serviceType: [
                'Web Development',
                'Mobile App Development',
                'AI Assistants',
                'QA Automation',
                'Custom Software',
              ],
            }),
          }}
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
