'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function AirovaPage() {
  const screenshots = [
    {
      id: 1,
      title: 'AI Assistant Setup',
      description: 'Intuitive wizard for configuring your personalized AI assistant',
      image: '/portfolio/airova/Screenshot 2026-05-31 180126.png',
    },
    {
      id: 2,
      title: 'Knowledge Base Management',
      description: 'Upload and organize documents to train your AI model',
      image: '/portfolio/airova/Screenshot 2026-05-31 180209.png',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Track conversations, user satisfaction, and AI performance metrics',
      image: '/portfolio/airova/Screenshot 2026-05-31 180312.png',
    },
  ]

  const features = [
    {
      title: 'AI Assistant Builder',
      description: 'Easy setup wizard to configure your personalized AI assistant',
    },
    {
      title: 'Knowledge Base',
      description: 'Upload documents and FAQs to train your assistant',
    },
    {
      title: 'Chat Interface',
      description: 'Natural conversation experience with your AI assistant',
    },
    {
      title: 'Business Configuration',
      description: 'Customize branding, tone, and behavior for your business',
    },
    {
      title: 'Multi-channel Deployment',
      description: 'Deploy to website, WhatsApp, Telegram, and more',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track conversations, user satisfaction, and insights',
    },
  ]

  const industries = ['Restaurants', 'Clinics', 'Retail Stores', 'Service Providers', 'E-commerce']

  const techStack = ['Next.js', 'TypeScript', 'OpenAI API', 'PostgreSQL', 'Node.js', 'Webhooks']

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
            <span className="text-orange font-mono text-sm tracking-widest">AI & AUTOMATION</span>
            <h1 className="font-mono text-4xl md:text-6xl font-medium text-text mt-4 mb-4">Airova</h1>
            <p className="text-lg text-text-muted max-w-3xl">
              Personalized AI assistants for every business. Airova makes it simple to deploy intelligent conversational AI across multiple channels in minutes, not weeks.
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

      {/* Industries */}
      <section className="py-20 bg-surface">
        <div className="container-custom">
          <h2 className="font-mono text-3xl md:text-4xl font-medium text-text mb-12 text-center">Industries We Support</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry}
                variants={staggerItem}
                className="bg-surface border border-border p-6 text-center hover:border-orange transition-colors"
              >
                <p className="font-mono text-sm text-text">{industry}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
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
          <h2 className="font-mono text-3xl md:text-4xl font-medium text-text mb-6">Ready to deploy AI for your business?</h2>
          <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
            Let's build a personalized AI assistant that drives customer satisfaction and reduces support costs.
          </p>
          <Link href="/contact">
            <motion.button
              className="btn-primary px-10 py-4 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}
