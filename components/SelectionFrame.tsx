import type { ReactNode } from 'react'

interface SelectionFrameProps {
  children: ReactNode
  dims?: string
  label?: string
  className?: string
}

const corners = [
  'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
  'top-0 right-0 translate-x-1/2 -translate-y-1/2',
  'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
  'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
]

export default function SelectionFrame({ children, dims, label, className = '' }: SelectionFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <span className="absolute -top-8 left-0 text-[11px] font-mono text-blue bg-white border border-navy/15 px-2 py-0.5 rounded z-20 whitespace-nowrap">
          {label}
        </span>
      )}
      <div className="relative">
        {children}
        <div className="absolute inset-0 border border-navy/20 pointer-events-none rounded-[inherit]" />
        {corners.map((pos) => (
          <span
            key={pos}
            className={`absolute ${pos} w-2.5 h-2.5 bg-white border border-navy/40 rounded-[2px] pointer-events-none z-20`}
          />
        ))}
      </div>
      {dims && (
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[11px] font-mono text-navy/40 whitespace-nowrap">
          {dims}
        </span>
      )}
    </div>
  )
}
