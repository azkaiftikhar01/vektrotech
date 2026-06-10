import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Vektro | Get a Free Quote',
  description: 'Ready to build something great? Tell us about your project and we\'ll get back to you with a detailed quote within 24 hours.',
  alternates: { canonical: 'https://vektro.tech/contact' },
  openGraph: { title: 'Contact — Vektro', url: 'https://vektro.tech/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
