'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

const projects = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    category: 'web',
    description: 'A full-featured e-commerce platform with real-time inventory management.',
    image: '{PROJECT_1_IMAGE}',
  },
  {
    id: 2,
    name: 'Fitness Tracking App',
    category: 'mobile',
    description: 'iOS and Android app for tracking workouts, nutrition, and health goals.',
    image: '{PROJECT_2_IMAGE}',
  },
  {
    id: 3,
    name: 'Customer Support AI',
    category: 'ai',
    description: 'Intelligent chatbot handling 80% of customer support inquiries automatically.',
    image: '{PROJECT_3_IMAGE}',
  },
  {
    id: 4,
    name: 'SaaS Dashboard',
    category: 'web',
    description: 'Complex analytics dashboard for B2B SaaS platform with custom visualizations.',
    image: '{PROJECT_4_IMAGE}',
  },
  {
    id: 5,
    name: 'Mobile Banking',
    category: 'mobile',
    description: 'Secure banking app with advanced security features and seamless UX.',
    image: '{PROJECT_5_IMAGE}',
  },
  {
    id: 6,
    name: 'QA Test Suite',
    category: 'qa',
    description: 'Comprehensive automated testing suite covering 95% of codebase.',
    image: '{PROJECT_6_IMAGE}',
  },
]

const categories = ['all', 'web', 'mobile', 'ai', 'qa']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-white via-blue/3 to-purple/3 text-navy flex items-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
              Our Work
            </h1>
            <p className="text-xl text-gray-300">
              A selection of projects we're proud of. See how we've helped businesses like yours
              succeed digitally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue text-white shadow-lg'
                    : 'bg-light-bg text-navy hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative bg-light-bg rounded-lg overflow-hidden h-80 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Project Image */}
                  <div className="w-full h-full flex items-center justify-center text-3xl font-bold opacity-20 bg-gradient-to-br from-purple/10 to-blue/10">
                    {project.image}
                  </div>

                  {/* Hover Overlay */}
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                    <h4 className="font-serif text-white text-xl font-bold mb-2 text-center">
                      {project.name}
                    </h4>
                    <p className="text-blue text-sm font-medium mb-2 capitalize">
                      {project.category}
                    </p>
                    <p className="text-white text-sm text-center mb-4">
                      {project.description}
                    </p>
                    <motion.a
                      href="#"
                      className="text-blue font-medium hover:text-white transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Case Study →
                    </motion.a>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-blue text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {project.category}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-body-text text-lg">
                No projects in this category yet. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-10 -right-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl bottom-10 -left-48 animate-pulse"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-5xl font-bold mb-6">
              Want to see your project here?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let's discuss your project and how we can help bring it to life.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-white text-navy px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
