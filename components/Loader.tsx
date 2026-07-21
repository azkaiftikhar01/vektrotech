'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Phase = 'fill' | 'hold' | 'lift' | 'done'

const DURS = { fill: 1800, hold: 450, lift: 700 }

const ICON = '/logo-icon.png'
const ICON_W = 190
const ICON_H = Math.round(ICON_W * (524 / 604))

function buildWave(amplitude: number, wavelength: number, width: number) {
  const step = 6
  const y = (x: number) => (amplitude * Math.sin((x / wavelength) * 2 * Math.PI)).toFixed(2)
  let d = `M ${-step} ${y(-step)} `
  for (let x = -step; x <= width + step; x += step) {
    d += `L ${x} ${y(x)} `
  }
  d += `L ${width + step} 40 L ${-step} 40 Z`
  return d
}

const WAVE = buildWave(3.5, 46, ICON_W)

export default function Loader() {
  const [phase, setPhase] = useState<Phase>('fill')
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReduced(prefersReduced)

    const fillMs = prefersReduced ? 1 : DURS.fill
    const holdMs = prefersReduced ? 1 : DURS.hold
    const liftMs = prefersReduced ? 300 : DURS.lift

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

  const maskStyle = {
    WebkitMaskImage: `url(${ICON})`,
    maskImage: `url(${ICON})`,
    WebkitMaskSize: 'contain' as const,
    maskSize: 'contain' as const,
    WebkitMaskRepeat: 'no-repeat' as const,
    maskRepeat: 'no-repeat' as const,
    WebkitMaskPosition: 'center' as const,
    maskPosition: 'center' as const,
  }

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: phase === 'lift' ? '-100%' : 0 }}
      transition={{ duration: (reduced ? 300 : DURS.lift) / 1000, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="grain-gradient-bg" />

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative" style={{ width: ICON_W, height: ICON_H }}>
          {/* ghost — the real mark, dim, visible from the first frame */}
          <img
            src={ICON}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain opacity-[0.22]"
          />

          {/* water — masked to the exact icon silhouette */}
          <div className="absolute inset-0 overflow-hidden" style={maskStyle}>
            <motion.div
              className="absolute left-0 right-0 bottom-0"
              initial={{ height: '0%' }}
              animate={{ height: '100%' }}
              transition={{ duration: (reduced ? 0.3 : DURS.fill / 1000), ease: [0.22, 0.8, 0.28, 1] }}
              style={{ background: 'linear-gradient(180deg, #5CC8FF 0%, #155EEF 55%, #0A2E85 100%)' }}
            >
              <svg
                width={ICON_W * 2}
                height={20}
                viewBox={`0 0 ${ICON_W * 2} 20`}
                className="absolute left-0"
                style={{ top: -9 }}
              >
                <motion.g
                  animate={reduced ? { x: 0 } : { x: [0, -ICON_W] }}
                  transition={reduced ? { duration: 0 } : { duration: 3.2, repeat: Infinity, ease: 'linear' }}
                >
                  <path d={WAVE} fill="#2FD8C9" opacity={0.85} transform="translate(0,9)" />
                  <path d={WAVE} fill="#2FD8C9" opacity={0.85} transform={`translate(${ICON_W},9)`} />
                </motion.g>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
