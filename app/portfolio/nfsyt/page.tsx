'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function NFSYTPage() {
  const screenshots = [
    {
      id: 1,
      title: 'Wellness Dashboard',
      description: 'User-friendly dashboard showing mood tracking and wellness insights',
      image: '/portfolio/nfsyt/Screenshot 2026-05-31 174350.png',
    },
    {
      id: 2,
      title: 'Therapy Chat Interface',
      description: 'Secure messaging system to connect with therapists and counselors',
      image: '/portfolio/nfsyt/Screenshot 2026-05-31 195312.png',
    },
    {
      id: 3,
      title: 'Journaling & Mood Tracking',
      description: 'CBT-based journaling tool with mood tracking and progress visualization',
      image: '/portfolio/nfsyt/Screenshot 2026-05-31 195323.png',
    },
    {
      id: 4,
      title: 'Guided Exercises',
      description: 'Library of wellness exercises including breathing and meditation guides',
      image: '/portfolio/nfsyt/Screenshot 2026-05-31 195342.png',
    },
    {
      id: 5,
      title: 'Appointment Management',
      description: 'Schedule and manage therapy appointments with reminders',
      image: '/portfolio/nfsyt/Screenshot 2026-05-31 195355.png',
    },
    {
      id: 6,
      title: 'Support Community',
      description: 'Connect with others in supportive group spaces and resources',
      image: '/portfolio/nfsyt/Screenshot 2026-05-31 195431.png',
    },
  ]

  const features = [
    {
      title: 'Chat Support',
      description: 'Connect with therapists and counselors through secure messaging',
    },
    {
      title: 'Journal & Tracking',
      description: 'CBT-based journaling to track mood and mental health progress',
    },
    {
      title: 'Wellness Exercises',
      description: 'Guided breathing exercises, meditations, and coping strategies',
    },
    {
      title: 'Appointment Management',
      description: 'Schedule and manage therapy appointments seamlessly',
    },
    {
      title: 'Support Groups',
      description: 'Connect with others in supportive community spaces',
    },
    {
      title: 'Progress Tracking',
      description: 'Visualize your mental health journey with detailed insights',
    },
  ]

  const exercises = ['Box Breathing', '4-7-8 Breathing', 'Belly Breathing', 'Progressive Relaxation', 'Mindfulness Meditation']

  const techStack = ['Next.js', 'React', 'PostgreSQL', 'Node.js', 'Real-time Chat', 'Tailwind CSS']

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue/3 to-purple/3">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-100 to-purple-100 pt-32 pb-12">
        <div className="container-custom">
          <Link href="/portfolio" className="text-blue font-semibold mb-6 inline-block hover:underline">
            ← Back to Portfolio
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-semibold text-sm tracking-widest">MENTAL WELLNESS</span>
            <h1 className="font-serif text-6xl font-bold text-navy mt-4 mb-4">NFSYT</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Comprehensive mental wellness platform providing therapy support, mood tracking, wellness exercises, and a caring community. Your journey to better mental health starts here.
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

      {/* Wellness Exercises */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-serif text-4xl font-bold text-navy mb-12 text-center">Guided Wellness Exercises</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {exercises.map((exercise) => (
              <motion.div
                key={exercise}
                variants={staggerItem}
                className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-navy">{exercise}</p>
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
                className="bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-lg font-semibold border border-blue-300 hover:bg-blue-200 transition-colors"
              >
                {tech}
              </div>
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
                  <span className="text-blue-600 font-semibold text-sm">SCREENSHOT {screenshot.id}</span>
                  <h3 className="font-serif text-3xl font-bold text-navy mt-2 mb-4">{screenshot.title}</h3>
                  <p className="text-gray-700 text-lg mb-6">{screenshot.description}</p>
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

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl font-bold text-navy mb-6">Ready to launch a mental wellness platform?</h2>
          <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
            Let's build a compassionate, feature-rich platform that truly makes a difference in people's mental health.
          </p>
          <Link href="/contact">
            <motion.button
              className="btn-primary px-10 py-4 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}
