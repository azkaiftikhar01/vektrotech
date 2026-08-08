'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function About() {
  return (
    <div className="pt-32 bg-bg">
      {/* HERO SECTION */}
      <section className="min-h-[70vh] flex items-center border-b border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-mono font-medium text-4xl md:text-h1 text-text mb-6">
              We are vektro<span className="text-orange">;</span>
            </h1>
            <p className="text-xl text-orange font-mono tracking-wide">Connect. Build. Elevate.</p>
            <p className="text-text-muted text-lg md:text-xl mt-6">
              A full-service software agency built by builders for forward-thinking businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION - 3 PILLARS */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="font-mono text-3xl md:text-h2 text-text mb-4">Our core values</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Three principles that guide everything we build
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border"
          >
            {[
              {
                title: 'Connect',
                description:
                  'We start by understanding your business, your users, and your goals. Deep connections lead to better solutions.',
              },
              {
                title: 'Build',
                description:
                  'With clear vision, we engineer solutions that are scalable, maintainable, and built to last. Quality is non-negotiable.',
              },
              {
                title: 'Elevate',
                description:
                  "We don't just deliver projects - we elevate your business forward. Your success is our success.",
              },
            ].map((pillar, idx) => (
              <motion.div key={idx} variants={staggerItem} className="bg-bg p-8 hover:bg-surface transition-colors">
                <h3 className="font-mono text-2xl text-orange mb-3">{pillar.title}</h3>
                <p className="text-text-muted leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT BODY TEXT */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-3xl md:text-4xl text-text mb-6 md:mb-8">Who we are</h2>
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                Vektro is a full-service software agency built for businesses that refuse to stay
                average. We don&apos;t just write code - we solve problems, remove friction, and build
                software that actually moves your business forward.
              </p>
              <p>
                Founded on the belief that great software is a combination of strategic thinking,
                technical excellence, and obsessive attention to detail, we&apos;ve built a team of
                specialists in web development, mobile apps, AI &amp; automation, and quality assurance.
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

      {/* CTA BANNER */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-mono text-2xl md:text-h2 text-text mb-4 md:mb-6">
              Ready to build something great?
            </h2>
            <p className="text-text-muted mb-8 md:mb-10 max-w-2xl mx-auto">
              Let&apos;s talk about your project and how we can help move your business forward.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
