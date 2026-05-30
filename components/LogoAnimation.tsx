'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LogoAnimation() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <motion.div
      id="logo-animation-wrapper"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4.5, duration: 0.5 }}
      className="fixed inset-0 z-50 bg-white flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ scale: 1, y: 0 }}
        animate={{ scale: 0.25, y: -250 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      >
        <Image
          src="/logo.png"
          alt="Vektro"
          width={360}
          height={225}
          priority
          quality={100}
        />
      </motion.div>
    </motion.div>
  )
}
