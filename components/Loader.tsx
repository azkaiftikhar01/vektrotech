'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Phase = 'fill' | 'hold' | 'lift' | 'done'

const DURS = { fill: 1100, hold: 350, lift: 550 }

export default function Loader() {
  const [phase, setPhase] = useState<Phase>('fill')
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReduced(prefersReduced)

    const fillMs = prefersReduced ? 1 : DURS.fill
    const holdMs = prefersReduced ? 1 : DURS.hold
    const liftMs = prefersReduced ? 1 : DURS.lift

    const t1 = setTimeout(() => setPhase('hold'), fillMs)
    const t2 = setTimeout(() => setPhase('lift'), fillMs + holdMs)
    const t3 = setTimeout(() => setPhase('done'), fillMs + holdMs + liftMs)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  if (phase === 'done') return null

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg"
      initial={{ y: 0 }}
      animate={{ y: phase === 'lift' ? '-100%' : 0 }}
      transition={{ duration: (reduced ? 0 : DURS.lift) / 1000, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex flex-col items-center gap-5 font-mono text-sm">
        <div className="flex items-center gap-2 text-text-muted">
          <span className="text-green">$</span>
          <span>vektro init</span>
          <span className="w-1.5 h-4 bg-orange animate-pulse-slow" aria-hidden="true" />
        </div>
        <div className="w-44 h-px bg-border overflow-hidden">
          <motion.div
            className="h-full bg-orange"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: (reduced ? 0 : DURS.fill) / 1000, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
