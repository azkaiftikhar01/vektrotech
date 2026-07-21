'use client'

import { motion } from 'framer-motion'
import OrbitGraphic from './OrbitGraphic'

const quadrants = [
  {
    tag: '01',
    title: 'Web & Digital Products',
    desc: 'Pixel-perfect sites and web apps engineered to convert.',
    align: 'md:items-end md:text-right',
  },
  {
    tag: '02',
    title: 'Mobile & AI Assistants',
    desc: 'Native apps and custom AI agents your users open every day.',
    align: 'md:items-start md:text-left',
  },
  {
    tag: '03',
    title: 'Cloud & QA',
    desc: 'Always-on infrastructure backed by automated testing pipelines.',
    align: 'md:items-end md:text-right',
  },
  {
    tag: '04',
    title: 'Custom Software',
    desc: 'Bespoke systems engineered from scratch around your exact requirements.',
    align: 'md:items-start md:text-left',
  },
]

export default function ServicesQuadrant() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-gray-400">What we do</span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mt-3">Every discipline, one team.</h2>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-navy/10">
          {quadrants.map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`flex flex-col gap-3 p-10 md:p-16 border-b border-navy/10 ${
                i % 2 === 0 ? 'md:border-r' : ''
              } ${q.align} items-start`}
            >
              <span className="text-xs text-blue font-semibold">{q.tag}</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy">{q.title}</h3>
              <p className="text-sm text-gray-500 max-w-xs">{q.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center pointer-events-none bg-[#F4F6FB] rounded-full">
          <OrbitGraphic size={84} />
        </div>
      </div>
    </section>
  )
}
