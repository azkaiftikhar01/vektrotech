'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import CursorPin from './CursorPin'

const clients = ['Phool', 'Premier Health', 'NFSYT', 'Airova']

export default function HeroOrbit() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const ringScale = useTransform(scrollYProgress, [0, 1], [1, 0.42])
  const ringOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0.45])

  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, -50])

  const logosOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1])
  const logosY = useTransform(scrollYProgress, [0.35, 0.6], [30, 0])

  return (
    <div ref={containerRef} className="relative" style={{ height: '180vh' }}>
      <div className="sticky top-20 h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: ringScale, opacity: ringOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ rotate: 360, y: [0, -18, 0] }}
            transition={{
              rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="relative w-[420px] h-[420px] md:w-[560px] md:h-[560px] opacity-[0.14]"
          >
            <Image src="/favicon.png" alt="" fill className="object-contain" priority />
          </motion.div>
        </motion.div>

        <CursorPin name="Azka" color="blue" delay={0} className="top-[24%] left-[15%] hidden md:block" />
        <CursorPin name="Vektro" color="purple" delay={1.4} className="bottom-[28%] right-[16%] hidden md:block" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 flex flex-col items-center px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/70 pl-3 pr-4 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            <span className="text-xs uppercase tracking-widest text-navy/60">Full-service software agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-navy max-w-3xl leading-[1.1] md:leading-[1.05] tracking-tight"
          >
            <span className="block">We build software that</span>
            <span className="pill-highlight inline-block bg-blue text-white rounded-[1.5rem] md:rounded-[2rem] px-4 md:px-6 py-1 md:py-2 mt-2 whitespace-normal md:whitespace-nowrap">
              moves business forward
            </span>
            <span className="inline-block w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-teal ml-3 align-middle" />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center mt-10"
          >
            <Link href="/contact">
              <button className="btn-primary text-sm px-7 py-3.5">Start a project</button>
            </Link>
            <p className="text-xs text-navy/40 mt-3">Replies within 24 hours. No obligation.</p>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: logosOpacity, y: logosY }}
          className="absolute z-10 inset-x-0 overflow-hidden"
        >
          <div className="flex marquee-track w-max">
            {[...clients, ...clients, ...clients, ...clients].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-serif font-bold text-xl md:text-2xl text-navy/60 px-8 md:px-10 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
