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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue/3 to-purple/3">
      {/* Header */}
      <section className="bg-gradient-to-br from-red-100 to-pink-100 pt-32 pb-12">
        <div className="container-custom">
          <Link href="/portfolio" className="text-blue font-semibold mb-6 inline-block hover:underline">
            ← Back to Portfolio
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-red-600 font-semibold text-sm tracking-widest">HEALTHCARE TECHNOLOGY</span>
            <h1 className="font-serif text-6xl font-bold text-navy mt-4 mb-4">Premier Health</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Complete medical practice management platform for internal medicine and pediatrics. Streamline appointments, patient management, billing, and health education in one unified system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="font-serif text-4xl font-bold text-navy mb-12 text-center">Key Features</h2>
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-serif text-xl font-bold text-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Screenshots Showcase */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-serif text-4xl font-bold text-navy mb-12 text-center">Platform Overview</h2>
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
                  <span className="text-red-600 font-semibold text-sm">SCREENSHOT {screenshot.id}</span>
                  <h3 className="font-serif text-3xl font-bold text-navy mt-2 mb-4">{screenshot.title}</h3>
                  <p className="text-gray-700 text-lg mb-6">{screenshot.description}</p>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-navy">Key Highlights:</p>
                    <ul className="space-y-2">
                      {screenshot.id === 1 && (
                        <>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Professional healthcare branding</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Clear appointment booking CTA</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Contact and hours information</span>
                          </li>
                        </>
                      )}
                      {screenshot.id === 2 && (
                        <>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Form validation and error handling</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>International phone number support</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Reason for visit selection</span>
                          </li>
                        </>
                      )}
                      {screenshot.id === 3 && (
                        <>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Quick action shortcuts</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Sidebar navigation menu</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Welcome message for staff</span>
                          </li>
                        </>
                      )}
                      {screenshot.id === 4 && (
                        <>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Comprehensive appointment data</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Action buttons: Confirm and Delete</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Status tracking system</span>
                          </li>
                        </>
                      )}
                      {screenshot.id === 5 && (
                        <>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Rich text editor for content</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
                            <span>Draft and publish options</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600">✓</span>
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
                    className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200"
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
          <h2 className="font-serif text-4xl font-bold text-navy mb-12 text-center">Technology Stack</h2>
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
                className="bg-red-100 text-red-600 px-6 py-3 rounded-full text-lg font-semibold border border-red-300 hover:bg-red-200 transition-colors"
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
          <h2 className="font-serif text-4xl font-bold text-navy mb-6">Ready to transform your practice?</h2>
          <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
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
