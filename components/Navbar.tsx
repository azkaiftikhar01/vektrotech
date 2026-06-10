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

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => { setIsMobileMenuOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  if (!mounted) return null

  return (
    <>
      {/* ── Pill Navbar ─────────────────────────────────────────────── */}
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          className="pointer-events-auto bg-[#F0EFEB] rounded-full flex items-center gap-2 px-3 py-2.5 shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-gray-300/80"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          whileHover={{
            scale: 1.025, y: -2,
            boxShadow: '0 8px 40px rgba(0,0,0,0.13)',
            transition: { duration: 0.3 },
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 px-2">
            <Logo size="small" style={{ height: '54px', width: 'auto' }} />
          </Link>

          {/* Desktop separator */}
          <span className="hidden md:block w-px h-5 bg-gray-300/70" />

          {/* Desktop links */}
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

          {/* Desktop separator */}
          <span className="hidden md:block w-px h-5 bg-gray-300/70" />

          {/* Desktop CTA */}
          <Link href="/contact" className="hidden md:block">
            <motion.button
              className="bg-navy text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-navy/90 transition-colors duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Get Started
            </motion.button>
          </Link>

          {/* Mobile hamburger — pure 3 lines, X lives inside the overlay */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block h-[1.5px] w-5 bg-navy rounded-full" />
            <span className="block h-[1.5px] w-5 bg-navy rounded-full" />
            <span className="block h-[1.5px] w-5 bg-navy rounded-full" />
          </button>
        </motion.nav>
      </div>

      {/* ── Full-screen mobile overlay — z-[60] sits above the pill ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-[#1B2A6B] flex flex-col"
          >
            {/* Top bar — logo + close button */}
            <div className="flex items-center justify-between px-6 pt-7 pb-4 flex-shrink-0">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Logo
                  size="small"
                  style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }}
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="mx-6 h-px bg-white/10 flex-shrink-0" />

            {/* Nav links */}
            <nav className="flex flex-col items-start justify-center flex-1 px-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ delay: 0.08 + i * 0.055, duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 font-serif text-[2.2rem] font-bold tracking-tight leading-tight transition-colors duration-200 ${
                      pathname === link.href ? 'text-[#4da6ff]' : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA + social row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.38, duration: 0.4 }}
              className="px-8 pb-10 flex-shrink-0"
            >
              <div className="h-px bg-white/10 mb-6" />
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-[#0084FF] text-white font-semibold text-base py-4 rounded-2xl hover:opacity-90 transition-opacity">
                  Get Started →
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
