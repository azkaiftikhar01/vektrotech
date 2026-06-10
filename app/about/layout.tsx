import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Vektro | Built by Builders',
  description: 'We are Vektro — a full-service software agency obsessed with results. Expert team, results-driven, 24/7 support.',
  alternates: { canonical: 'https://vektro.tech/about' },
  openGraph: { title: 'About — Vektro', url: 'https://vektro.tech/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
