'use client'

import { motion } from 'framer-motion'

const COLORS: Record<string, string> = {
  blue: '#155EEF',
  purple: '#2FD8C9',
}

interface CursorPinProps {
  name: string
  color?: 'blue' | 'purple'
  className?: string
  delay?: number
}

export default function CursorPin({ name, color = 'blue', className = '', delay = 0 }: CursorPinProps) {
  const hex = COLORS[color]
  return (
    <motion.div
      className={`absolute pointer-events-none select-none z-20 ${className}`}
      animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <div className="flex items-start">
        <svg width="16" height="16" viewBox="0 0 16 16" fill={hex} className="drop-shadow-sm">
          <path d="M1 1l5.5 13 2-5.5L14 6.5z" />
        </svg>
        <span
          className="ml-1 text-[11px] font-medium text-white px-2 py-0.5 rounded-md rounded-tl-none shadow-sm whitespace-nowrap"
          style={{ background: hex }}
        >
          {name}
        </span>
      </div>
    </motion.div>
  )
}
