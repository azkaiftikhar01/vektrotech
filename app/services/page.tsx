'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Custom software development',
    description:
      'Bespoke software built specifically for your business, from internal tools to client-facing platforms.',
    features: ['Full-stack development', 'Architecture design', 'Database design', 'Cloud deployment'],
  },
  {
    title: 'Web & mobile development',
    description: 'Responsive web apps and native mobile apps engineered for performance and built to convert.',
    features: ['Responsive web apps', 'Native iOS & Android', 'Cross-platform builds', 'App store deployment'],
  },
  {
    title: 'SaaS product development',
    description: 'From zero to a shippable product — architecture, billing, and onboarding built to scale.',
    features: ['Multi-tenant architecture', 'Billing & subscriptions', 'Onboarding flows', 'Roadmap iteration'],
  },
  {
    title: 'AI & automation',
    description: 'Custom AI assistants and workflow automation deployed across the channels your users are on.',
    features: ['Custom AI assistants', 'Workflow automation', 'Multi-channel deployment', 'Model integration'],
  },
  {
    title: 'UI/UX design',
    description: 'Interfaces designed for clarity first — research and iteration before a single pixel ships.',
    features: ['User research', 'Wireframing & prototyping', 'Design systems', 'Usability testing'],
  },
  {
    title: 'Cloud, DevOps & CI/CD',
    description: 'Always-on infrastructure with pipelines that ship safely, every time.',
    features: ['Infrastructure as code', 'Automated pipelines', 'Monitoring & alerting', 'Zero-downtime deploys'],
  },
  {
    title: 'QA & testing',
    description: 'Automated and manual testing baked into every release, not bolted on at the end.',
    features: ['Test automation', 'Manual QA', 'Performance testing', 'Security testing'],
  },
  {
    title: 'System integrations',
    description: 'Connecting the tools your business already runs on, cleanly and reliably.',
    features: ['API integrations', 'Third-party services', 'Data migration', 'Legacy system bridges'],
  },
]

const stats = ['40% more online orders', '80% scheduling automated', 'AI live in <5min', '500+ users connected']

export default function Services() {
  return (
    <div className="pt-32 bg-bg">
      {/* HERO */}
      <section className="border-b border-border pb-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-mono tracking-widest uppercase text-orange mb-4"
            >
              What we build
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono font-medium text-3xl md:text-h1 text-text leading-tight"
            >
              End-to-end software that drives real results<span className="text-orange">.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-text-muted mt-6 max-w-xl"
            >
              Web, mobile, AI, and automation — every service built to move your business forward. No fluff, just
              outcomes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link href="/contact" className="btn-primary">
                Start a project
              </Link>
              <Link href="/portfolio" className="btn-outline">
                See the work
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-12"
          >
            {stats.map((stat) => (
              <span key={stat} className="text-xs font-mono border border-border text-text-muted px-3 py-1.5">
                {stat}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-4">
        <div className="container-custom divide-y divide-border">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-12 py-14"
            >
              <span className="font-mono text-2xl text-text-dim">{String(idx + 1).padStart(2, '0')}</span>

              <div>
                <h2 className="font-mono text-2xl md:text-3xl text-text mb-3">{service.title}</h2>
                <p className="text-text-muted leading-relaxed max-w-xl mb-6">{service.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-sm text-text-muted">
                      <span className="text-orange">→</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="container-custom text-center">
          <h2 className="font-mono text-2xl md:text-h2 text-text mb-4">Ready to build something great?</h2>
          <p className="text-text-muted mb-10 max-w-xl mx-auto">
            Let&rsquo;s talk about your project and how we can help move your business forward.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a project
          </Link>
        </div>
      </section>
    </div>
  )
}
