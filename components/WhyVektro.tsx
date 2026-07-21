'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import OrbitGraphic from './OrbitGraphic'
import SelectionFrame from './SelectionFrame'
import DimLine from './DimLine'

export default function WhyVektro() {
  return (
    <>
      {/* ── Scale your team ─────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-14 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <SelectionFrame dims="Vektro — brand system">
              <div className="relative aspect-[5/4] rounded-2xl overflow-hidden border border-navy/10 bg-gradient-to-br from-[#EEF3FF] via-[#F7F2FF] to-[#E8F4FF] flex items-center justify-center">
                <Image
                  src="/hero-graphic.png"
                  alt="Vektro"
                  width={600}
                  height={480}
                  className="w-2/3 h-auto object-contain drop-shadow-xl"
                />
              </div>
            </SelectionFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <OrbitGraphic size={80} className="mb-6" />
            <span className="text-xs uppercase tracking-widest text-gray-400">For growing teams</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mt-3 leading-tight">
              Scale your output instantly. <br /> Zero overhead.
            </h2>
            <DimLine label="544px" className="my-6 max-w-xs" />
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Our team, your brand. Say yes to bigger projects without adding permanent payroll — get senior-level
              execution that plugs straight into your existing workflow.
            </p>
            <Link href="/contact">
              <button className="btn-outline mt-8 text-sm px-6 py-3">Partner with us</button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── The Vektro Standard ──────────────────────────────────────────── */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-20 md:py-28 text-center flex flex-col items-center">
        <OrbitGraphic size={130} className="mb-8" />
        <div
          className="inline-flex items-center gap-2 bg-white border border-navy/10 rounded-full px-4 py-2 text-xs font-medium text-navy/70"
          style={{ boxShadow: '0 2px 12px rgba(27,42,107,0.06)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          Senior talent, every project
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mt-6">The Vektro Standard</h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-5 max-w-xl">
          Don&rsquo;t limit your product to one person&rsquo;s skillset. We bring the full team — design,
          engineering, AI, and QA — to every project, with every release reviewed by a lead before it ships. Quality
          that doesn&rsquo;t depend on who happened to be free that week.
        </p>
      </section>
    </>
  )
}
