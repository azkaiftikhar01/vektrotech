'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SelectionFrame from './SelectionFrame'

const clients = ['Phool', 'Premier Health', 'NFSYT', 'Airova']

export default function ClientShowcasePanel() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-14 md:gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-block bg-white border border-navy/10 rounded-lg px-5 py-3 mb-8"
            style={{ boxShadow: '0 4px 20px rgba(27,42,107,0.06)' }}
          >
            <span className="font-serif font-bold text-navy tracking-tight text-lg">AIROVA :</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy leading-tight">
            Why Airova trusted us <br /> with their AI launch.
          </h2>

          <p className="text-xs uppercase tracking-widest text-gray-400 mt-10 mb-4">We&rsquo;ve delivered for:</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {clients.map((name) => (
              <span key={name} className="font-serif font-bold text-lg text-navy/60">
                {name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-8"
        >
          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 4px 24px rgba(27,42,107,0.08)' }}>
            <p className="text-xs text-gray-400 mb-3">Testimonial</p>
            <p className="text-navy text-lg leading-snug">
              &ldquo;The Airova platform exceeded our expectations. The AI assistants are fast to deploy and our
              clients love the seamless experience.&rdquo;
            </p>
            <p className="text-sm text-gray-500 mt-4">Marcus Chen | CEO</p>
          </div>

          <SelectionFrame dims="Airova — Live product" className="mt-2">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-navy/10">
              <Image
                src="/portfolio/airova/Screenshot 2026-05-31 180209.png"
                alt="Airova AI assistant platform"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </div>
          </SelectionFrame>
        </motion.div>
      </div>
    </section>
  )
}
