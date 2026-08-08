'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/lib/useIsMobile'
import { useReducedMotion } from '@/lib/useReducedMotion'

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false })

export default function HeroOrbit() {
  const isMobile = useIsMobile()
  const reducedMotion = useReducedMotion()
  const showScene = !isMobile && !reducedMotion

  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      {showScene && (
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
          <HeroScene />
        </div>
      )}

      <div className="relative z-10 container-custom py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 pl-3 pr-4 py-1.5 mb-8 font-mono text-xs text-text-muted"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green animate-pulse-slow" />
          </span>
          build → test → ship
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono font-medium text-3xl sm:text-4xl md:text-h1 text-text max-w-3xl leading-[1.15] tracking-tight"
        >
          We build software for companies who don&rsquo;t want to hire an in-house dev team
          <span className="text-orange">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-base md:text-lg text-text-muted leading-relaxed"
        >
          SaaS products, AI assistants, and automation — designed, built, tested, and shipped
          by a senior team that plugs straight into your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <Link href="/contact" className="btn-primary">
            Start a project
          </Link>
          <Link href="/portfolio" className="btn-outline">
            See the work
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
