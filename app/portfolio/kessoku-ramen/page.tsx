'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function KessokuRamenPage() {
  const screenshots = [
    {
      id: 1,
      title: 'Landing Page',
      description: 'Late-night counter branding with hours, seats, and broth count set up front',
      image: '/portfolio/kessoku-ramen/home.png',
    },
    {
      id: 2,
      title: 'House Bowls Menu',
      description: 'Six house bowls, each orderable as-is or as a starting point for the builder',
      image: '/portfolio/kessoku-ramen/menu.png',
    },
    {
      id: 3,
      title: 'Bowl Builder',
      description: 'Step-by-step broth, noodle, and topping picker with a live running total',
      image: '/portfolio/kessoku-ramen/order.png',
    },
  ]

  const features = [
    {
      title: 'Custom Bowl Builder',
      description: 'Step-by-step broth → noodle → topping flow with live price calculation',
    },
    {
      title: 'House Bowl Menu',
      description: 'Pre-configured bowls that double as starting points in the builder',
    },
    {
      title: 'Cart & Checkout Flow',
      description: 'Persistent cart with running total across the ordering session',
    },
    {
      title: 'Brand-First Design',
      description: 'Dark, high-contrast layout built around a distinct late-night identity',
    },
    {
      title: 'Responsive Layout',
      description: 'Menu grid and builder both adapt cleanly from desktop to mobile',
    },
    {
      title: 'Fast, Static-First Pages',
      description: 'Prerendered routes for near-instant page loads',
    },
  ]

  const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel']

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <section className="border-b border-border pt-32 pb-12">
        <div className="container-custom">
          <Link href="/portfolio" className="text-orange font-mono text-sm mb-6 inline-block hover:underline">
            ← Back to Portfolio
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange font-mono text-sm tracking-widest">RESTAURANT & ORDERING</span>
            <h1 className="font-mono text-4xl md:text-6xl font-medium text-text mt-4 mb-4">Kessoku Ramen</h1>
            <p className="text-lg text-text-muted max-w-3xl">
              A late-night ramen counter's landing site and custom bowl builder — pick a house bowl or build one
              from broth up and watch the price update as you go.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="font-mono text-3xl md:text-4xl font-medium text-text mb-12 text-center">Key Features</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="bg-surface border border-border p-8 hover:border-orange transition-colors"
              >
                <h3 className="font-mono text-lg font-medium text-text mb-2">{feature.title}</h3>
                <p className="text-text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-surface">
        <div className="container-custom">
          <h2 className="font-mono text-3xl md:text-4xl font-medium text-text mb-12 text-center">Technology Stack</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {techStack.map((tech) => (
              <div
                key={tech}
                className="bg-surface text-text px-6 py-3 text-sm font-mono border border-border hover:border-orange transition-colors"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Screenshots Showcase */}
      <section className="py-20 bg-surface">
        <div className="container-custom">
          <h2 className="font-mono text-3xl md:text-4xl font-medium text-text mb-12 text-center">Platform Overview</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {screenshots.map((screenshot, idx) => (
              <motion.div
                key={screenshot.id}
                variants={staggerItem}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-orange font-mono text-sm">SCREENSHOT {screenshot.id}</span>
                  <h3 className="font-mono text-2xl md:text-3xl font-medium text-text mt-2 mb-4">{screenshot.title}</h3>
                  <p className="text-text-muted text-lg mb-6">{screenshot.description}</p>
                </div>

                {/* Screenshot */}
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden bg-surface border border-border"
                  >
                    <Image
                      src={screenshot.image}
                      alt={screenshot.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="font-mono text-3xl md:text-4xl font-medium text-text mb-6">Ready to build an ordering experience like this?</h2>
          <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
            Let&rsquo;s design a custom ordering flow that fits your brand as tightly as this one fits Kessoku&rsquo;s.
          </p>
          <Link href="/contact">
            <motion.button
              className="btn-primary px-10 py-4 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}
