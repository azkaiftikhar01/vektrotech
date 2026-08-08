import Image from 'next/image'
import React from 'react'

interface LogoProps {
  size?: 'small' | 'large'
  className?: string
  style?: React.CSSProperties
}

export default function Logo({ size = 'small', className = '', style }: LogoProps) {
  const markPx = size === 'small' ? 26 : 40
  const textClass = size === 'small' ? 'text-lg' : 'text-2xl'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} style={style}>
      <Image src="/logo-mark.svg" alt="" width={markPx} height={markPx} priority style={{ width: markPx, height: markPx }} />
      <span className={`font-mono font-medium ${textClass} text-text lowercase leading-none`}>
        vektro;
      </span>
    </span>
  )
}
