'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SelectionFrame from './SelectionFrame'
import { useReducedMotion } from '@/lib/useReducedMotion'

function ArrowRight({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const projects = [
  {
    tag: 'E-COMMERCE',
    title: 'Phool — checkout rebuild',
    description: 'Rebuilt the checkout flow for a flower delivery brand end to end, from cart to confirmation.',
    result: '40% more orders',
    href: '/portfolio/phool',
    image: '/portfolio/phool/Screenshot 2026-05-31 174131.png',
  },
  {
    tag: 'HEALTHCARE',
    title: 'Premier Health — scheduling automation',
    description: 'Automated appointment scheduling for a medical practice, cutting admin work sitewide.',
    result: '80% scheduling automated',
    href: '/portfolio/premier-health',
    image: '/portfolio/premierhealth/Screenshot 2026-05-31 174224.png',
  },
  {
    tag: 'AI PRODUCT',
    title: 'Airova — AI assistant platform',
    description: 'Personalized AI assistants businesses can deploy across web, WhatsApp, and Telegram.',
    result: '<5min to deploy',
    href: '/portfolio/airova',
    image: '/portfolio/airova/Screenshot 2026-05-31 180126.png',
  },
]

function CardBody({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link href={project.href}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-bg border border-border hover:border-orange p-6 md:p-10 transition-colors duration-200"
      >
        <SelectionFrame dims={project.tag}>
          <div className="relative aspect-[16/10] overflow-hidden bg-surface">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 90vw, 45vw"
            />
          </div>
        </SelectionFrame>

        <div>
          <span className="text-[11px] font-mono tracking-widest text-text-dim">{project.tag}</span>
          <h3 className="font-mono text-xl md:text-2xl text-text mt-3 leading-snug flex items-center gap-2">
            {project.title}
            <ArrowRight className="w-4 h-4 flex-shrink-0 text-text-dim group-hover:text-orange group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-sm text-text-muted mt-3 leading-relaxed max-w-md">{project.description}</p>
          <p className="font-mono text-lg text-orange mt-6">{project.result}</p>
        </div>
      </motion.div>
    </Link>
  )
}

function StackCard({
  project,
  index,
  isLast,
  reducedMotion,
}: {
  project: (typeof projects)[number]
  index: number
  isLast: boolean
  reducedMotion: boolean
}) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.94])
  const opacity = useTransform(scrollYProgress, [0.65, 1], [1, isLast ? 1 : 0.6])

  // Reduced motion: plain stacked blocks, no scroll-pin/scale-linked motion.
  if (reducedMotion) {
    return (
      <div className="container-custom py-6">
        <CardBody project={project} />
      </div>
    )
  }

  return (
    <div ref={wrapperRef} className="relative" style={{ height: isLast ? '100vh' : '130vh' }}>
      <div
        className="sticky flex items-center px-6"
        style={{ top: `${88 + index * 16}px`, height: `calc(100vh - ${88 + index * 16}px)`, zIndex: index + 1 }}
      >
        <motion.div style={{ scale, opacity }} className="w-full max-w-5xl mx-auto">
          <CardBody project={project} />
        </motion.div>
      </div>
    </div>
  )
}

export default function CaseStudiesShowcase() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative">
      <div className="container-custom text-center pt-24 pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-text-dim">Selected work</span>
        <h2 className="font-mono text-2xl md:text-h2 text-text mt-3">Real work, real results.</h2>
      </div>

      {projects.map((p, i) => (
        <StackCard
          key={p.href}
          project={p}
          index={i}
          isLast={i === projects.length - 1}
          reducedMotion={reducedMotion}
        />
      ))}

      <div className="text-center py-20">
        <p className="text-text-dim text-sm mb-1">Want to see more?</p>
        <h3 className="font-mono text-xl md:text-2xl text-text mb-6">Browse the full portfolio</h3>
        <Link href="/portfolio" className="btn-outline inline-flex items-center gap-2">
          View all case studies <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
