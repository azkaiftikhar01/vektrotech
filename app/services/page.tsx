'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp } from '@/lib/animations'

const services = [
  {
    id: 'website',
    title: 'Website Design & Development',
    description:
      'We design and build modern, responsive websites that look stunning and perform flawlessly. From concept to launch, we handle everything.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'E-commerce Solutions',
      'CMS Integration',
    ],
    image: '{WEBSITE_SERVICE_IMAGE}',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps built with user experience and performance in mind. We bring your ideas to both iOS and Android.',
    features: [
      'Native Development',
      'Cross-platform Apps',
      'UI/UX Design',
      'App Store Deployment',
    ],
    image: '{MOBILE_SERVICE_IMAGE}',
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots & Virtual Assistants',
    description:
      'Intelligent conversational AI that engages your users, answers questions, and automates support. Available 24/7 across web and mobile.',
    features: [
      'Natural Language Processing',
      'Multi-channel Integration',
      'Custom Training Data',
      'Analytics & Insights',
    ],
    image: '{CHATBOT_SERVICE_IMAGE}',
  },
  {
    id: 'ai-personalized',
    title: 'Personalised AI Assistants',
    description:
      'Custom AI solutions tailored to your specific business needs. From recommendation engines to predictive analytics, we build smart software.',
    features: [
      'Machine Learning Models',
      'Predictive Analytics',
      'Custom Algorithms',
      'Integration Services',
    ],
    image: '{PERSONALIZED_AI_IMAGE}',
  },
  {
    id: 'qa',
    title: 'QA Automation & Manual Testing',
    description:
      'Comprehensive quality assurance that catches bugs before your users do. We combine automated testing with expert manual validation.',
    features: [
      'Test Automation',
      'Performance Testing',
      'Security Testing',
      'Continuous Integration',
    ],
    image: '{QA_SERVICE_IMAGE}',
  },
  {
    id: 'custom',
    title: 'Custom Software Development',
    description:
      'Bespoke software solutions built specifically for your business. From internal tools to client-facing platforms, we build what you need.',
    features: [
      'Full-Stack Development',
      'Architecture Design',
      'Database Solutions',
      'Cloud Deployment',
    ],
    image: '{CUSTOM_SOFTWARE_IMAGE}',
  },
]

export default function Services() {
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
              Services Built to Scale
            </h1>
            <p className="text-xl text-gray-300">
              From web and mobile to AI and automation, we offer comprehensive solutions to power your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - ALTERNATING LAYOUT */}
      <section className="py-20 bg-white">
        <div className="container-custom space-y-24">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              id={service.id}
            >
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'md:grid-cols-2-reverse' : ''
                }`}
              >
                {/* Image - alternates position */}
                <motion.div
                  className={`bg-light-bg rounded-lg h-96 flex items-center justify-center ${
                    idx % 2 === 1 ? 'md:order-2' : 'md:order-1'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl font-bold opacity-30 text-center">
                    {service.image}
                  </div>
                </motion.div>

                {/* Content - alternates position */}
                <div className={idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-body-text mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, featureIdx) => (
                      <motion.div
                        key={featureIdx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: featureIdx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-blue text-xl mt-1">✓</span>
                        <span className="text-body-text">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <motion.button
                      className="btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get a Quote
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
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
              Ready to build something great?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let's talk about your project and how we can help move your business forward.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-white text-navy px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
