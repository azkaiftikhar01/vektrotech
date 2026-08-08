'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

interface Stat {
  prefix?: string
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 40, suffix: '%', label: 'increase in online orders after a checkout rebuild' },
  { value: 80, suffix: '%', label: 'of scheduling automated for a healthcare client' },
  { prefix: '<', value: 5, suffix: 'min', label: 'to deploy an AI assistant across web, WhatsApp, and Telegram' },
]

function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, stat.value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, stat.value])

  return (
    <span ref={ref} className="font-mono text-4xl md:text-5xl text-text">
      {stat.prefix}
      {display}
      <span className="text-orange">{stat.suffix}</span>
    </span>
  )
}

export default function StatsBar() {
  return (
    <section className="border-y border-border">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`py-12 px-6 text-center md:text-left ${
              i > 0 ? 'border-t md:border-t-0 md:border-l border-border' : ''
            }`}
          >
            <StatCounter stat={stat} />
            <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-xs mx-auto md:mx-0">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
