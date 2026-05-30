import Image from 'next/image'

interface LogoProps {
  size?: 'small' | 'large'
  className?: string
}

export default function Logo({ size = 'small', className = '' }: LogoProps) {
  const dimensions = size === 'small' ? { width: 120, height: 75 } : { width: 360, height: 225 }

  return (
    <Image
      src="/logo.png"
      alt="Vektro - Software Agency"
      width={dimensions.width}
      height={dimensions.height}
      priority
      className={className}
    />
  )
}
