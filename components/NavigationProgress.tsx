'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavigationProgress() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const t = setTimeout(() => setVisible(false), 700)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={pathname}
          className="fixed top-0 left-0 right-0 z-[999] h-[3px] origin-left"
          style={{
            background: 'linear-gradient(90deg, #0084FF 0%, #6D3ACF 60%, #0084FF 100%)',
            backgroundSize: '200% 100%',
          }}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{
            scaleX: [0, 0.6, 0.85, 1],
            backgroundPosition: ['0% 0%', '100% 0%'],
          }}
          exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.1 } }}
          transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
        />
      )}
    </AnimatePresence>
  )
}
