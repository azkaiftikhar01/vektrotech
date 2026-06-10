'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { staggerContainer, staggerItem } from '@/lib/animations'

const projects = [
  {
    id: 1,
    name: 'Phool',
    slug: 'phool',
    tagline: 'Flower Delivery & Custom Arrangements',
    achievements: ['Increased Online Orders By 40%', 'Scaled To 1,000+ Monthly Users'],
    image: '/portfolio/phool/Screenshot 2026-05-31 174131.png',
  },
  {
    id: 2,
    name: 'Premier Health',
    slug: 'premier-health',
    tagline: 'Complete Medical Practice Management',
    achievements: ['Automated 80% Of Appointment Scheduling', 'Reduced Admin Work By 60%'],
    image: '/portfolio/premierhealth/Screenshot 2026-05-31 174224.png',
  },
  {
    id: 3,
    name: 'Airova',
    slug: 'airova',
    tagline: 'Personalized AI Assistants for Business',
    achievements: ['AI Assistants Live In Under 5 Minutes', 'Deployed Across 10+ Business Categories'],
    image: '/portfolio/airova/Screenshot 2026-05-31 180126.png',
  },
  {
    id: 4,
    name: 'NFSYT',
    slug: 'nfsyt',
    tagline: 'Mental Wellness & Therapy Support',
    achievements: ['Connected 500+ Users With Therapists', 'Improved User Retention By 35%'],
    image: '/portfolio/nfsyt/Screenshot 2026-05-31 174350.png',
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="text-blue font-semibold text-sm tracking-widest">OUR WORK</span>
        </motion.div>

        <div className="border-t border-gray-200 mb-8 mt-4"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-navy">
            <span className="font-normal italic">Featured</span> Projects
          </h1>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {projects.map((project) => (
            <Link href={`/portfolio/${project.slug}`} key={project.id}>
              <motion.div
                variants={staggerItem}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Achievement tags */}
                <div className="absolute top-3 left-3 right-3 z-10 flex flex-col gap-2">
                  {project.achievements.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/90 backdrop-blur-sm text-navy text-xs font-medium px-3 py-1.5 rounded-full w-fit shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Image */}
                <div className="aspect-[4/3] relative bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                {/* Bottom: tagline + name */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="text-white/70 text-xs mb-0.5">{project.tagline}</p>
                  <span className="text-white font-bold text-lg drop-shadow-md">{project.name}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
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
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
