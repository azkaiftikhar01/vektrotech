'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { revealContainer, revealItem } from '@/lib/animations'

const projects = [
  {
    id: 1,
    name: 'Phool',
    slug: 'phool',
    tagline: 'Flower Delivery & Custom Arrangements',
    achievements: ['40% more online orders', '1,000+ monthly users'],
    image: '/portfolio/phool/Screenshot 2026-05-31 174131.png',
  },
  {
    id: 2,
    name: 'Premier Health',
    slug: 'premier-health',
    tagline: 'Complete Medical Practice Management',
    achievements: ['80% scheduling automated', 'Admin work down 60%'],
    image: '/portfolio/premierhealth/Screenshot 2026-05-31 174224.png',
  },
  {
    id: 3,
    name: 'Airova',
    slug: 'airova',
    tagline: 'Personalized AI Assistants for Business',
    achievements: ['Live in under 5 minutes', '10+ business categories'],
    image: '/portfolio/airova/Screenshot 2026-05-31 180126.png',
  },
  {
    id: 4,
    name: 'NFSYT',
    slug: 'nfsyt',
    tagline: 'Mental Wellness & Therapy Support',
    achievements: ['500+ users connected', 'Retention up 35%'],
    image: '/portfolio/nfsyt/Screenshot 2026-05-31 174350.png',
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-bg pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <span className="font-mono text-orange text-xs tracking-widest">OUR WORK</span>
        </motion.div>

        <div className="border-t border-border mb-8 mt-4" />

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="font-mono text-3xl md:text-h1 text-text mb-12 md:mb-16"
        >
          Featured projects
        </motion.h1>

        {/* Projects Grid */}
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border mb-16"
        >
          {projects.map((project) => (
            <Link href={`/portfolio/${project.slug}`} key={project.id}>
              <motion.div
                variants={revealItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative bg-bg overflow-hidden cursor-pointer group h-full"
              >
                <div className="absolute top-3 left-3 right-3 z-10 flex flex-col gap-2">
                  {project.achievements.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-bg/85 backdrop-blur-sm border border-border text-text text-xs font-mono px-2.5 py-1 w-fit"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="aspect-[4/3] relative bg-surface">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="text-text-muted text-xs mb-0.5">{project.tagline}</p>
                  <span className="text-text font-mono text-lg">{project.name}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center border-t border-border pt-16"
        >
          <h2 className="font-mono text-2xl md:text-h2 text-text mb-4">Ready to bring your vision to life?</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            We combine sound engineering with careful design to build software that users love.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a project
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
