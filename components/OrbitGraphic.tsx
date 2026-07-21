'use client'

import { motion } from 'framer-motion'

interface OrbitGraphicProps {
  size?: number
  className?: string
}

export default function OrbitGraphic({ size = 400, className = '' }: OrbitGraphicProps) {
  return (
    <div className={`relative flex-shrink-0 ${className}`} style={{ width: size, height: size }}>
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="200"
          cy="200"
          r="188"
          fill="none"
          stroke="rgba(27,42,107,0.14)"
          strokeWidth="1"
          strokeDasharray="520 60"
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="rgba(0,132,255,0.22)"
          strokeWidth="1.5"
          strokeDasharray="70 22 300 12"
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx="140"
          cy="272"
          r="46"
          fill="none"
          stroke="rgba(109,58,207,0.3)"
          strokeWidth="1.5"
          strokeDasharray="230 50"
        />
      </motion.svg>
    </div>
  )
}
