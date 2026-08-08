'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function PremierHealthPage() {
  const screenshots = [
    {
      id: 1,
      title: 'Landing Page',
      description: 'Professional welcome page with appointment booking CTA',
      image: '/portfolio/premierhealth/Screenshot 2026-05-31 174224.png',
    },
    {
      id: 2,
      title: 'Appointment Request Modal',
      description: 'Interactive form for patients to request appointments',
      image: '/portfolio/premierhealth/Screenshot 2026-05-31 174242.png',
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      description: 'Complete dashboard for medical staff with quick actions',
      image: '/portfolio/premierhealth/Screenshot 2026-05-31 174302.png',
    },
    {
      id: 4,
      title: 'Appointments Management',
      description: 'Table view for managing patient appointments and scheduling',
      image: '/portfolio/premierhealth/Screenshot 2026-05-31 174313.png',
    },
    {
      id: 5,
      title: 'Blog Post Editor',
      description: 'Rich text editor for creating health education content',
      image: '/portfolio/premierhealth/Screenshot 2026-05-31 174326.png',
    },
  ]

  const features = [
    {
      title: 'Medical Practice Management',
      description: 'Complete solution for internal medicine and pediatrics practices',
    },
    {
      title: 'Appointment Scheduling',
      description: 'Easy online booking system with confirmation emails',
    },
    {
      title: 'Patient Portal',
      description: 'Secure access for patients to view records and history',
    },
    {
      title: 'Blog Management',
      description: 'Publish health articles and patient education content',
    },
    {
      title: 'Insurance Integration',
      description: 'Support for multiple insurance providers and billing',
    },
    {
      title: 'Staff Dashboard',
      description: 'Admin panel for managing appointments and operations',
    },
  ]

  const techStack = ['Next.js', 'React', 'PostgreSQL', 'Node.js', 'TypeScript', 'Tailwind CSS']

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
            <span className="text-orange font-mono text-sm tracking-widest">HEALTHCARE TECHNOLOGY</span>
            <h1 className="font-mono text-4xl md:text-6xl font-medium text-text mt-4 mb-4">Premier Health</h1>
            <p className="text-lg text-text-muted max-w-3xl">
              Complete medical practice management platform for internal medicine and pediatrics. Streamline appointments, patient management, billing, and health education in one unified system.
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
                  <div className="space-y-3">
                    <p className="text-sm font-mono text-text">Key Highlights:</p>
                    <ul className="space-y-2">
                      {screenshot.id === 1 && (
                        <>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Professional healthcare branding</span>
                          </li>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Clear appointment booking CTA</span>
                          </li>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Contact and hours information</span>
                          </li>
                        </>
                      )}
                      {screenshot.id === 2 && (
                        <>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Form validation and error handling</span>
                          </li>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>International phone number support</span>
                          </li>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Reason for visit selection</span>
                          </li>
                        </>
                      )}
                      {screenshot.id === 3 && (
                        <>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Quick action shortcuts</span>
                          </li>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Sidebar navigation menu</span>
                          </li>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Welcome message for staff</span>
                          </li>
                        </>
                      )}
                      {screenshot.id === 4 && (
                        <>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Comprehensive appointment data</span>
                          </li>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Action buttons: Confirm and Delete</span>
                          </li>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Status tracking system</span>
                          </li>
                        </>
                      )}
                      {screenshot.id === 5 && (
                        <>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Rich text editor for content</span>
                          </li>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>Draft and publish options</span>
                          </li>
                          <li className="flex items-start gap-2 text-text-muted">
                            <span className="text-orange">✓</span>
                            <span>SEO-friendly content creation</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
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

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="font-mono text-3xl md:text-4xl font-medium text-text mb-6">Ready to transform your practice?</h2>
          <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
            Premier Health is built for modern medical practices. Let's discuss how we can streamline your operations.
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
