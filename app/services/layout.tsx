import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — Vektro | Web, Mobile, AI & Automation',
  description: 'Full-service software development: websites, mobile apps, AI assistants, QA automation, and custom software. Built to move your business forward.',
  alternates: { canonical: 'https://vektro.tech/services' },
  openGraph: { title: 'Services — Vektro', url: 'https://vektro.tech/services' },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
