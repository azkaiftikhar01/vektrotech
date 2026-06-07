'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/Logo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  if (!mounted) return null

  return (
    <>
      {/* Pill Navbar — centered floating */}
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          className="pointer-events-auto bg-[#F0EFEB] rounded-full flex items-center gap-2 px-3 py-2.5 shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-gray-300/80"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          whileHover={{
            scale: 1.025,
            y: -2,
            boxShadow: '0 8px 40px rgba(0,0,0,0.13)',
            transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 px-2">
            <Logo size="small" style={{ height: '48px', width: 'auto' }} />
          </Link>

          {/* Separator */}
          <span className="hidden md:block w-px h-5 bg-gray-300/70" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-blue'
                    : 'text-gray-700 hover:text-navy hover:bg-black/5'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Separator */}
          <span className="hidden md:block w-px h-5 bg-gray-300/70" />

          {/* CTA Button */}
          <Link href="/contact" className="hidden md:block">
            <motion.button
              className="bg-navy text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-navy/90 transition-colors duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Get Started
            </motion.button>
          </Link>

          {/* Mobile: Logo + Hamburger only */}
          <div className="md:hidden flex items-center gap-3 pl-1">
            <button
              className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block h-[1.5px] w-5 bg-navy origin-center"
                animate={isMobileMenuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.span
                className="block h-[1.5px] w-5 bg-navy"
                animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[1.5px] w-5 bg-navy origin-center"
                animate={isMobileMenuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Full-Screen Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`block text-center font-serif text-4xl font-bold tracking-tight transition-colors duration-200 ${
                      pathname === link.href ? 'text-blue' : 'text-white/90 hover:text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.15 + navLinks.length * 0.06, duration: 0.45 }}
                className="mt-4"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="bg-blue text-white text-base font-semibold px-10 py-3.5 rounded-full hover:opacity-90 transition-opacity">
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
