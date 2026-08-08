'use client'

import { motion } from 'framer-motion'
import { revealContainer, revealItem } from '@/lib/animations'

export const services = [
  { title: 'Custom software development', desc: 'Bespoke systems engineered around your exact requirements.' },
  { title: 'Web & mobile development', desc: 'Pixel-perfect sites and native apps built to convert and retain.' },
  { title: 'SaaS product development', desc: 'From zero to a shippable product, architected to scale.' },
  { title: 'AI & automation', desc: 'Custom AI assistants and workflow automation that ship fast.' },
  { title: 'UI/UX design', desc: 'Interfaces designed for clarity first, decoration second.' },
  { title: 'Cloud, DevOps & CI/CD', desc: 'Always-on infrastructure with pipelines that ship safely.' },
  { title: 'QA & testing', desc: 'Automated and manual testing baked into every release.' },
  { title: 'System integrations', desc: 'Connecting the tools your business already runs on.' },
]

export default function ServicesGrid() {
  return (
    <section className="container-custom py-20 md:py-28">
      <div className="text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-text-dim">What we do</span>
        <h2 className="font-mono text-2xl md:text-h2 text-text mt-3">Every discipline, one team.</h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={revealContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            variants={revealItem}
            className="group border-b border-r border-border p-8 transition-colors duration-200 hover:bg-surface"
          >
            <span className="font-mono text-sm text-text-dim group-hover:text-orange transition-colors duration-200">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-mono text-base text-text mt-4 leading-snug">{service.title}</h3>
            <p className="text-sm text-text-muted mt-2 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
