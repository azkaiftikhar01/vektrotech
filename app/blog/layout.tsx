import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Vektro Blog',
    default: 'Blog | Vektro — Insights on AI, Cloud & Software Development',
  },
  description:
    'Expert insights on AI development, cloud migration, QA automation, mobile development, and web design from the Vektro team.',
  openGraph: {
    type: 'website',
    siteName: 'Vektro Blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
