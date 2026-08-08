'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function PhoolPage() {
  const screenshots = [
    {
      id: 1,
      title: 'Product Showcase',
      description: 'Beautiful product catalog displaying fresh flowers and arrangements',
      image: '/portfolio/phool/Screenshot 2026-05-31 174131.png',
    },
    {
      id: 2,
      title: 'Bouquet Builder',
      description: 'Interactive tool for customers to create custom flower arrangements',
      image: '/portfolio/phool/Screenshot 2026-05-31 174145.png',
    },
    {
      id: 3,
      title: 'Order Management',
      description: 'Complete order tracking and delivery coordination interface',
      image: '/portfolio/phool/Screenshot 2026-05-31 174203.png',
    },
  ]

  const features = [
    {
      title: 'Product Catalog',
      description: 'Curated selection of fresh flowers organized by type and occasion',
    },
    {
      title: 'Custom Bouquet Builder',
      description: 'Interactive tool to create personalized flower arrangements',
    },
    {
      title: 'Bulk Orders',
      description: 'Special pricing and management for corporate and event orders',
    },
    {
      title: 'Event Coordination',
      description: 'Dedicated team for weddings, events, and special occasions',
    },
    {
      title: 'Payment Integration',
      description: 'Secure checkout with multiple payment methods',
    },
    {
      title: 'Delivery Tracking',
      description: 'Real-time delivery status and customer notifications',
    },
  ]

  const techStack = ['Next.js', 'React', 'MongoDB', 'Stripe', 'Node.js', 'Tailwind CSS']

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
            <span className="text-orange font-mono text-sm tracking-widest">E-COMMERCE & RETAIL</span>
            <h1 className="font-mono text-4xl md:text-6xl font-medium text-text mt-4 mb-4">Phool</h1>
            <p className="text-lg text-text-muted max-w-3xl">
              Beautiful flower delivery platform with custom bouquet builder. Phool makes it easy for customers to order fresh flowers for any occasion with professional event coordination support.
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
          <h2 className="font-mono text-3xl md:text-4xl font-medium text-text mb-6">Ready to build your flower business?</h2>
          <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
            Let's create a beautiful e-commerce platform for your flower delivery service.
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
