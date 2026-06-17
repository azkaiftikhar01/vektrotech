import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LogoAnimation from '@/components/LogoAnimation'
import PageTransition from '@/components/PageTransition'
import NavigationProgress from '@/components/NavigationProgress'
import ChatBubble from '@/components/ChatBubble'
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
                'https://www.linkedin.com/company/vektro-tech/',
                'https://www.instagram.com/vektro.tech/',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'SiteNavigationElement',
                  position: 1,
                  name: 'Services',
                  description: 'Web design, mobile apps, AI assistants, QA automation, and custom software development.',
                  url: 'https://vektro.tech/services',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 2,
                  name: 'Portfolio',
                  description: 'See our work — real projects delivering measurable results for clients.',
                  url: 'https://vektro.tech/portfolio',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 3,
                  name: 'About',
                  description: 'Meet the team behind Vektro and learn how we work.',
                  url: 'https://vektro.tech/about',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 4,
                  name: 'Blog',
                  description: 'Insights on AI, cloud, mobile development, QA automation, and web design from the Vektro team.',
                  url: 'https://vektro.tech/blog',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 5,
                  name: 'Contact',
                  description: 'Get in touch to start your project with Vektro.',
                  url: 'https://vektro.tech/contact',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        <div className="w-full overflow-x-hidden bg-transparent">
          <NavigationProgress />
          <LogoAnimation />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <ChatBubble />
        </div>
      </body>
    </html>
  )
}
