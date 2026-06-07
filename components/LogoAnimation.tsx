'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function LogoAnimation() {
  const [phase, setPhase] = useState<'enter' | 'spin' | 'shrink' | 'done'>('enter')

  useEffect(() => {
    // Logo enters → start spinning
    const t1 = setTimeout(() => setPhase('spin'), 300)
    // After spinning, implode
    const t2 = setTimeout(() => setPhase('shrink'), 2200)
    // Remove from DOM
    const t3 = setTimeout(() => setPhase('done'), 2900)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (phase === 'done') return null

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'linear-gradient(160deg, #F0F4FF 0%, #F8F4FF 30%, #EDF6FF 65%, #F5F0FF 100%)' }}
      animate={phase === 'shrink' ? { opacity: 0 } : { opacity: 1 }}
      transition={phase === 'shrink' ? { duration: 0.55, delay: 0.3 } : { duration: 0 }}
    >
      {/* Container: logo + ring — this is what implodes */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={
          phase === 'shrink'
            ? { scale: 0, opacity: 0 }
            : phase === 'enter'
            ? { scale: 0.7, opacity: 0 }
            : { scale: 1, opacity: 1 }
        }
        transition={
          phase === 'enter'
            ? { duration: 0 }
            : phase === 'spin'
            ? { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
            : { duration: 0.45, ease: [0.4, 0, 1, 1] }
        }
      >
        {/* Outer spinning gradient arc */}
        <motion.svg
          width="220" height="220"
          viewBox="0 0 220 220"
          className="absolute"
          style={{ top: '50%', left: '50%', marginTop: -110, marginLeft: -110 }}
          animate={phase === 'spin' || phase === 'shrink'
            ? { rotate: [0, 360, 720] }
            : { rotate: 0 }
          }
          transition={{ duration: 1.9, ease: 'easeInOut', times: [0, 0.6, 1] }}
        >
          <defs>
            <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0084FF" stopOpacity="0" />
              <stop offset="40%" stopColor="#0084FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#6D3ACF" stopOpacity="1" />
            </linearGradient>
          </defs>
          <circle
            cx="110" cy="110" r="100"
            fill="none"
            stroke="url(#arc-grad)"
            strokeWidth="2.5"
            strokeDasharray="220 430"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Inner counter-spinning thin ring */}
        <motion.svg
          width="180" height="180"
          viewBox="0 0 180 180"
          className="absolute"
          style={{ top: '50%', left: '50%', marginTop: -90, marginLeft: -90 }}
          animate={phase === 'spin' || phase === 'shrink'
            ? { rotate: [0, -360, -540] }
            : { rotate: 0 }
          }
          transition={{ duration: 1.9, ease: 'easeInOut', times: [0, 0.6, 1] }}
        >
          <circle
            cx="90" cy="90" r="82"
            fill="none"
            stroke="#6D3ACF"
            strokeWidth="1"
            strokeDasharray="80 435"
            strokeLinecap="round"
            opacity="0.4"
          />
        </motion.svg>

        {/* Logo */}
        <div className="relative z-10">
          <Image
            src="/logo.png"
            alt="Vektro"
            width={140}
            height={88}
            priority
            quality={100}
          />
        </div>
      </motion.div>

      {/* Subtle glow behind logo */}
      {(phase === 'spin') && (
        <motion.div
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: 240,
            height: 240,
            background: 'radial-gradient(circle, rgba(0,132,255,0.18) 0%, rgba(109,58,207,0.12) 60%, transparent 100%)',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0.7], scale: [0.5, 1.1, 1] }}
          transition={{ duration: 0.8 }}
        />
      )}
    </motion.div>
  )
}
