'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function About() {
  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-white via-blue/3 to-purple/3 text-navy flex items-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
              We are Vektro;
            </h1>
            <p className="text-2xl text-blue font-medium tracking-wide">
              Connect. Build. Elevate.
            </p>
            <p className="text-gray-300 text-xl mt-6">
              A full-service software agency built by builders for forward-thinking businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION - 3 PILLARS */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-body-text text-lg max-w-2xl mx-auto">
              Three principles that guide everything we build
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Connect',
                description:
                  'We start by understanding your business, your users, and your goals. Deep connections lead to better solutions.',
                icon: '🔗',
              },
              {
                title: 'Build',
                description:
                  'With clear vision, we engineer solutions that are scalable, maintainable, and built to last. Quality is non-negotiable.',
                icon: '⚙️',
              },
              {
                title: 'Elevate',
                description:
                  'We don't just deliver projects—we elevate your business forward. Your success is our success.',
                icon: '📈',
              },
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="bg-light-bg p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="font-serif text-2xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-body-text leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT BODY TEXT */}
      <section className="bg-light-bg py-20">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-lg"
          >
            <h2 className="font-serif text-4xl font-bold mb-8">Who We Are</h2>
            <div className="space-y-6 text-lg text-body-text leading-relaxed">
              <p>
                Vektro is a full-service software agency built for businesses that refuse to stay
                average. We don't just write code — we solve problems, remove friction, and build
                software that actually moves your business forward.
              </p>
              <p>
                Founded on the belief that great software is a combination of strategic thinking,
                technical excellence, and obsessive attention to detail, we've built a team of
                specialists in web development, mobile apps, AI & automation, and quality assurance.
              </p>
              <p>
                Every project we take on is an opportunity to create something meaningful. We partner
                with our clients to understand their unique challenges and deliver solutions that
                create real business impact.
              </p>
              <p>
                Whether you need a stunning website, a game-changing mobile app, custom AI solutions,
                or comprehensive QA automation, we have the expertise and passion to bring your vision
                to life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-body-text text-lg max-w-2xl mx-auto">
              Talented builders from around the world, united by a passion for excellent software
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                variants={staggerItem}
                className="bg-light-bg rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="bg-gradient-to-br from-purple to-blue h-64 flex items-center justify-center text-white text-2xl">
                  {'{TEAM_MEMBER_' + num + '_PHOTO}'}
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-xl font-bold mb-1">
                    {'{TEAM_MEMBER_' + num + '_NAME}'}
                  </h4>
                  <p className="text-blue font-medium text-sm mb-3">
                    {'{TEAM_MEMBER_' + num + '_ROLE}'}
                  </p>
                  <p className="text-body-text text-sm">
                    {'{TEAM_MEMBER_' + num + '_BIO}'}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
