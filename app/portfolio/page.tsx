'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      name: 'Phool',
      slug: 'phool',
      tagline: 'Flower Delivery & Custom Arrangements',
      description: 'Beautiful e-commerce platform for flower delivery with custom bouquet builder. Customers can explore curated selections, create personalized arrangements, and place bulk orders with dedicated event coordinators.',
      features: ['Product Catalog', 'Custom Builder', 'Bulk Orders', 'Event Coordination', 'Payment Integration'],
      tech: ['Next.js', 'React', 'MongoDB', 'Stripe'],
      color: 'from-pink-300 to-rose-300',
      image: '/portfolio/phool/Screenshot 2026-05-31 174131.png',
    },
    {
      id: 2,
      name: 'Premier Health',
      slug: 'premier-health',
      tagline: 'Complete Medical Practice Management',
      description: 'Comprehensive healthcare platform for internal medicine and pediatrics. Features appointment scheduling, patient management, blog for health education, insurance handling, and administrative dashboard for medical teams.',
      features: ['Appointment System', 'Patient Portal', 'Blog Management', 'Insurance Integration', 'Staff Dashboard', 'Medical Records'],
      tech: ['Next.js', 'React', 'PostgreSQL', 'Node.js'],
      color: 'from-red-300 to-pink-300',
      image: '/portfolio/premierhealth/Screenshot 2026-05-31 174224.png',
    },
    {
      id: 3,
      name: 'Airova',
      slug: 'airova',
      tagline: 'Personalized AI Assistants for Business',
      description: 'AI-powered platform delivering customized conversational assistants for restaurants, clinics, retail, and services. Launch intelligent assistants in minutes with branded conversations, knowledge base configuration, and multi-channel deployment.',
      features: ['AI Assistant Builder', 'Knowledge Base', 'Chat Interface', 'Business Configuration', 'Multi-tenant Setup', 'Analytics'],
      tech: ['Next.js', 'TypeScript', 'OpenAI API', 'PostgreSQL'],
      color: 'from-purple-300 to-indigo-300',
      image: '/portfolio/airova/Screenshot 2026-05-31 180126.png',
    },
    {
      id: 4,
      name: 'NFSYT',
      slug: 'nfsyt',
      tagline: 'Mental Wellness & Therapy Support',
      description: 'Comprehensive mental health platform providing therapy support, mood tracking with CBT journaling, wellness exercises, appointment management, and support groups. Safe space for mental health growth with professional therapist connections.',
      features: ['Chat Support', 'Journal Tracking', 'Appointments', 'Exercises & Breathing', 'Progress Tracking', 'Support Groups', 'Therapist Matching'],
      tech: ['Next.js', 'React', 'PostgreSQL', 'Real-time Chat'],
      color: 'from-blue-300 to-purple-300',
      image: '/portfolio/nfsyt/Screenshot 2026-05-31 174350.png',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue/3 to-purple/3 pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-blue font-semibold text-sm tracking-widest">OUR WORK</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-navy mt-4 mb-4 md:mb-6">
            Projects We're Proud Of
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            From flower delivery platforms to AI assistants and mental wellness apps, we build software that makes a real impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 md:space-y-24"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Info */}
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-2">
                      {project.name}
                    </h2>
                    <p className="text-xl text-blue font-semibold">{project.tagline}</p>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-serif text-lg font-bold text-navy mb-3">Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-blue text-lg">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-bold text-navy mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue/10 text-blue px-4 py-2 rounded-full text-sm font-medium border border-blue/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Mockup */}
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <Link href={`/portfolio/${project.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className={`relative bg-gradient-to-br ${project.color} rounded-3xl shadow-2xl overflow-hidden cursor-pointer`}
                  >
                    {/* Browser Chrome */}
                    <div className="bg-white rounded-t-2xl px-6 py-4 flex items-center gap-2 border-b border-gray-200">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-gray-100 rounded px-3 py-1 text-xs text-gray-600 text-center">
                          {project.name.toLowerCase()}.com
                        </div>
                      </div>
                    </div>

                    {/* Screen Content */}
                    <div className="aspect-video bg-white overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1200}
                        height={675}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Device Shadow */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-2 bg-black/10 rounded-full blur-xl"></div>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-4 md:mb-6">
            Ready to bring your vision to life?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We combine stunning design with powerful functionality to create software that users love.
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
        </motion.div>
      </div>
    </div>
  )
}
