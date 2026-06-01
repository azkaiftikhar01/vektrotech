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
    color: 'from-blue-300 to-cyan-300',
    domain: 'website.com',
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
    color: 'from-purple-300 to-pink-300',
    domain: 'app.dev',
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
    color: 'from-orange-300 to-red-300',
    domain: 'chat.ai',
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
    color: 'from-indigo-300 to-purple-300',
    domain: 'ai-dashboard.app',
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
    color: 'from-green-300 to-emerald-300',
    domain: 'qa-results.test',
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
    color: 'from-rose-300 to-pink-300',
    domain: 'custom.build',
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
            <p className="text-xl text-gray-600">
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
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Mockup Screen */}
                <motion.div
                  className={`${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`relative bg-gradient-to-br ${service.color} rounded-3xl shadow-2xl overflow-hidden`}>
                    {/* Browser Chrome */}
                    <div className="bg-white rounded-t-2xl px-6 py-4 flex items-center gap-2 border-b border-gray-200">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-gray-100 rounded px-3 py-1 text-xs text-gray-600 text-center">
                          {service.domain}
                        </div>
                      </div>
                    </div>

                    {/* Content - Service Specific */}
                    {service.id === 'website' && (
                      <div className="aspect-video bg-gradient-to-br from-white via-blue/5 to-cyan/5 flex flex-col items-center justify-center p-8">
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="text-center"
                        >
                          <h3 className="font-serif text-3xl font-bold text-navy mb-2">Modern Websites</h3>
                          <p className="text-gray-600 text-sm">Responsive & High Performance</p>
                        </motion.div>
                      </div>
                    )}

                    {service.id === 'mobile' && (
                      <div className="aspect-video bg-gradient-to-br from-white via-purple/5 to-pink/5 flex flex-col items-center justify-center p-8">
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-center"
                        >
                          <h3 className="font-serif text-3xl font-bold text-navy">Native Apps</h3>
                          <p className="text-gray-600 text-sm mt-2">iOS & Android</p>
                        </motion.div>
                      </div>
                    )}

                    {service.id === 'ai-chatbots' && (
                      <div className="aspect-video bg-gradient-to-br from-white via-orange/5 to-red/5 flex flex-col justify-end gap-3 p-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-gray-200 rounded-lg py-2 px-4 text-sm text-gray-700 w-3/4"
                        >
                          How can I help you?
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg py-2 px-4 text-sm ml-auto w-3/4 text-right"
                        >
                          24/7 Support Ready!
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                          className="bg-gray-200 rounded-lg py-2 px-4 text-sm text-gray-700 w-3/4"
                        >
                          We are here to help
                        </motion.div>
                      </div>
                    )}

                    {service.id === 'ai-personalized' && (
                      <div className="aspect-video bg-gradient-to-br from-white via-indigo/5 to-purple/5 p-6 flex flex-col justify-between">
                        <div className="space-y-3">
                          {[40, 65, 85].map((width, i) => (
                            <motion.div
                              key={i}
                              initial={{ width: '0%' }}
                              whileInView={{ width: `${width}%` }}
                              transition={{ delay: i * 0.15, duration: 0.8 }}
                              className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                            ></motion.div>
                          ))}
                        </div>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                          className="w-8 h-8 border-3 border-purple-300 border-t-purple-600 rounded-full mx-auto"
                        ></motion.div>
                      </div>
                    )}

                    {service.id === 'qa' && (
                      <div className="aspect-video bg-gradient-to-br from-white via-green/5 to-emerald/5 p-6 flex flex-col justify-center gap-4">
                        {['Functionality', 'Performance', 'Security'].map((test, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="flex items-center gap-3"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ delay: i * 0.2, duration: 0.6, repeat: Infinity }}
                              className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
                            >
                              <span className="text-white font-bold">✓</span>
                            </motion.div>
                            <span className="text-gray-700 font-medium">{test}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {service.id === 'custom' && (
                      <div className="aspect-video bg-gradient-to-br from-white via-rose/5 to-pink/5 p-6 flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-3">
                          {[1, 2, 3, 4].map((block) => (
                            <motion.div
                              key={block}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: block * 0.1 }}
                              className="bg-gradient-to-br from-rose-300 to-pink-300 rounded-lg h-16 flex items-center justify-center font-semibold text-white text-sm"
                            >
                              Module {block}
                            </motion.div>
                          ))}
                        </div>
                        <motion.div
                          animate={{ width: ['0%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="h-1.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"
                        ></motion.div>
                      </div>
                    )}

                    {/* Device Shadow */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-2 bg-black/10 rounded-full blur-xl"></div>
                  </div>
                </motion.div>

                {/* Content - alternates position */}
                <div className={idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-navy">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
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
                        <span className="text-gray-700">{feature}</span>
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
