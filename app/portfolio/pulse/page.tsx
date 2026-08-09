'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function PulsePage() {
  const screenshots = [
    {
      id: 1,
      title: 'Overview Dashboard',
      description: 'Live uptime, active incidents, deploy count, and a real-time response-time/error chart',
      image: '/portfolio/pulse/overview.png',
    },
    {
      id: 2,
      title: 'Deployment History',
      description: 'Full deploy log across every service — status, environment, commit, and duration',
      image: '/portfolio/pulse/deployments.png',
    },
    {
      id: 3,
      title: 'Service Health Grid',
      description: 'Per-service uptime, response time, and error rate with live status indicators',
      image: '/portfolio/pulse/services.png',
    },
    {
      id: 4,
      title: 'Incident Tracking',
      description: 'Active and resolved incidents grouped by severity, with time-since and affected service',
      image: '/portfolio/pulse/incidents.png',
    },
  ]

  const features = [
    {
      title: 'Real-Time Health Feed',
      description: 'Live-updating uptime, error rate, and response time across all monitored services',
    },
    {
      title: 'Deployment History',
      description: 'Full deploy log with status, environment, commit hash, and duration',
    },
    {
      title: 'Incident Tracking',
      description: 'Active and resolved incidents grouped by severity, tied to the affected service',
    },
    {
      title: 'Per-Service Metrics',
      description: 'Uptime, response time, and error rate broken out per service with live sparklines',
    },
    {
      title: 'Response Time & Error Charts',
      description: '24H / 7D / 30D views averaged across every monitored service',
    },
    {
      title: 'Status-Driven UI',
      description: 'Healthy, degraded, and incident states reflected instantly across the whole dashboard',
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
            <span className="text-orange font-mono text-sm tracking-widest">SAAS & OBSERVABILITY</span>
            <h1 className="font-mono text-4xl md:text-6xl font-medium text-text mt-4 mb-4">Pulse</h1>
            <p className="text-lg text-text-muted max-w-3xl">
              A deployment observability dashboard — real-time uptime, response times, and error rates across every
              monitored service, plus deploy history and incident tracking in one place.
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
          <h2 className="font-mono text-3xl md:text-4xl font-medium text-text mb-6">Need visibility into your own stack?</h2>
          <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
            Let&rsquo;s build a monitoring or internal tooling dashboard tailored to how your systems actually run.
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
