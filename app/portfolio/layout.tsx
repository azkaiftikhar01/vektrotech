import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Vektro | Featured Projects',
  description: 'See how Vektro helped clients increase orders by 40%, automate 80% of scheduling, and launch AI in under 5 minutes. Real results, real clients.',
  alternates: { canonical: 'https://vektro.tech/portfolio' },
  openGraph: { title: 'Portfolio — Vektro', url: 'https://vektro.tech/portfolio' },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
