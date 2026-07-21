'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SelectionFrame from './SelectionFrame'

function ArrowRight({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const projects = [
  {
    tag: 'E-COMMERCE',
    title: 'Phool — 40% more online orders',
    href: '/portfolio/phool',
    image: '/portfolio/phool/Screenshot 2026-05-31 174131.png',
    rotate: -7,
    x: -70,
    y: 8,
  },
  {
    tag: 'HEALTHCARE',
    title: 'Premier Health — 80% scheduling automated',
    href: '/portfolio/premier-health',
    image: '/portfolio/premierhealth/Screenshot 2026-05-31 174224.png',
    rotate: 2,
    x: 0,
    y: -6,
  },
  {
    tag: 'AI PRODUCT',
    title: 'Airova — under 5 min to deploy',
    href: '/portfolio/airova',
    image: '/portfolio/airova/Screenshot 2026-05-31 180126.png',
    rotate: 8,
    x: 70,
    y: 10,
  },
]

export default function CaseStudiesShowcase() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-gray-400">Showcase</span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mt-3">Real work, real results.</h2>
        <p className="text-sm text-gray-400 mt-3">Hover a card to bring it to the front.</p>
      </div>

      <div className="relative h-[440px] md:h-[560px] flex items-center justify-center mb-20">
        {projects.map((p, i) => (
          <motion.div
            key={p.href}
            initial={{ opacity: 0, y: 60, x: p.x, rotate: p.rotate }}
            whileInView={{ opacity: 1, y: p.y, x: p.x, rotate: p.rotate }}
            whileHover={{ rotate: 0, scale: 1.06, y: p.y - 26, zIndex: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{ zIndex: i }}
            className="absolute w-[86%] md:w-[500px] cursor-pointer"
          >
            <Link href={p.href}>
              <SelectionFrame>
                <div
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-navy/10 bg-white"
                  style={{ boxShadow: '0 24px 60px rgba(27,42,107,0.2)' }}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 500px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm px-5 py-3.5">
                    <span className="text-[10px] font-semibold tracking-widest text-blue">{p.tag}</span>
                    <h3 className="font-serif font-bold text-navy text-base mt-0.5 leading-snug flex items-center gap-1.5">
                      {p.title}
                      <ArrowRight className="w-3 h-3 flex-shrink-0" />
                    </h3>
                  </div>
                </div>
              </SelectionFrame>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-400 text-sm mb-1">Want to see more?</p>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-6">Browse the full portfolio</h3>
        <Link href="/portfolio">
          <button className="btn-outline inline-flex items-center gap-2 text-sm px-6 py-3">
            View all case studies <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </section>
  )
}
