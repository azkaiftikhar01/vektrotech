import type { Variants } from 'framer-motion'

// Spread directly onto motion components as props (not used as variants)
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export const slideUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
}

// Used as variants={staggerContainer} — transition must live inside each variant state
export const staggerContainer: Variants = {
  initial:    { opacity: 0 },
  whileInView: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  hidden:     { opacity: 0 },
  visible:    { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
}

export const staggerItem: Variants = {
  initial:    { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden:     { opacity: 0, y: 20 },
  visible:    { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.3 },
}

export const hoverLift = {
  whileHover: { y: -8 },
  transition: { duration: 0.3 },
}

// Restrained scroll-reveal per the dark/technical design system: short duration,
// small translate, staggered ~80ms per child, plays once.
export const revealContainer: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.33, 1, 0.68, 1] } },
}
