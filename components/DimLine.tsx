interface DimLineProps {
  label?: string
  className?: string
}

export default function DimLine({ label, className = '' }: DimLineProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full border border-navy/30 bg-white flex-shrink-0" />
      <span className="flex-1 h-px bg-navy/15" />
      {label && <span className="mx-3 text-[11px] font-mono text-navy/35 flex-shrink-0">{label}</span>}
      <span className="flex-1 h-px bg-navy/15" />
      <span className="w-1.5 h-1.5 rounded-full border border-navy/30 bg-white flex-shrink-0" />
    </div>
  )
}
