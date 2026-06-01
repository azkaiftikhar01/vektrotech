'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import WhatWeDo from '@/components/WhatWeDo'
import ChatForm from '@/components/ChatForm'

export default function Home() {
  return (
    <div className="pt-20">
      {/* HERO SECTION - COMPLETELY REDESIGNED */}
      <section className="min-h-screen bg-gradient-to-br from-white via-white to-blue-100 text-navy relative overflow-hidden flex items-center">
        {/* Animated background gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container-custom relative z-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              
            </motion.div>

            {/* Main Headline - COMPACT 2 LINES */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              We Build
              <br />
              <span className="bg-gradient-to-r from-blue via-blue to-purple bg-clip-text text-transparent">
                Software That Moves Business Forward
              </span>
            </motion.h1>

            {/* Subtext - SINGLE LINE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-xl"
            >
              From websites to AI-powered assistants — we design, build, and deliver the full digital stack that your business needs to thrive.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link href="/portfolio">
                <motion.button
                  className="btn-primary px-8 py-3 text-lg font-semibold"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 132, 255, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  See Our Work
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="btn-secondary px-8 py-3 text-lg font-semibold"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Talk to Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Hero Graphic with Fade Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
            className="relative h-96 lg:h-96 hidden lg:flex items-center justify-center"
          >
            {/* Fade overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 rounded-3xl pointer-events-none z-10"></div>
            
            {/* Glow effect behind image */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-blue/10 to-purple/10 rounded-3xl blur-2xl"
            ></motion.div>

            <Image
              src="/hero-graphic.png"
              alt="Vektro - Software Agency Hero"
              width={600}
              height={600}
              priority
              className="w-full h-auto max-w-md object-contain relative z-5"
            />
          </motion.div>
        </div>

        {/* Scroll indicator with fade */}
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 text-3xl"
        >
          ↓
        </motion.div>
      </section>

      {/* WHAT WE DO SECTION - Floating Tech Stack */}
      <WhatWeDo />

      {/* ABOUT SECTION - REDESIGNED */}
      <section className="bg-gradient-to-r from-navy/5 to-blue/5 py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="text-blue font-semibold text-sm tracking-widest">ABOUT VEKTRO</span>
                <h2 className="font-serif text-5xl font-bold text-navy mt-2 leading-tight">
                  Built by builders. Obsessed with results.
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vektro is a full-service software agency built for businesses that refuse to stay average. We don't just write code — we solve problems, remove friction, and build software that actually moves your business forward.
              </p>
              <ul className="space-y-3">
                {['Expert Team', 'Results-Driven', '24/7 Support'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="text-blue text-2xl">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <motion.button
                  className="btn-primary mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>

            {/* Animation Container */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-blue/10"
            >
              <iframe
                src="/vektro_screen_demo_clean.html"
                className="w-full h-96 bg-white border-0"
                title="Vektro Services Animation"
                style={{ aspectRatio: '580/360' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-gradient-to-br from-blue/5 via-purple/3 to-blue/5 py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl font-bold mb-4 text-navy">Contact Us</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Enter your information below and we'll get back to you with a detailed quote within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ChatForm />
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO TEASER - IMPROVED */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl font-bold text-navy mb-4">Our Recent Work</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A selection of projects we're proud of
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {/* Project 1: Phool */}
            <Link href="/portfolio/phool">
              <motion.div
                variants={staggerItem}
                className="group relative bg-gradient-to-br from-pink-300 to-rose-300 rounded-3xl overflow-hidden h-80 shadow-lg cursor-pointer"
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-t-2xl px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="bg-gray-100 rounded px-2 py-1 text-xs text-gray-600 text-center">phool.com</div>
                  </div>
                </div>
                <div className="h-60 bg-gradient-to-br from-white via-blue/5 to-purple/5 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <Image
                    src="/portfolio/phool/Screenshot 2026-05-31 174131.png"
                    alt="Phool Flower Shop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            </Link>

            {/* Project 2: Premier Health */}
            <Link href="/portfolio/premier-health">
              <motion.div
                variants={staggerItem}
                className="group relative bg-gradient-to-br from-red-300 to-pink-300 rounded-3xl overflow-hidden h-80 shadow-lg cursor-pointer"
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-t-2xl px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="bg-gray-100 rounded px-2 py-1 text-xs text-gray-600 text-center">premierhealth.com</div>
                  </div>
                </div>
                <div className="h-60 bg-gradient-to-br from-white via-blue/5 to-purple/5 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <Image
                    src="/portfolio/premierhealth/Screenshot 2026-05-31 174224.png"
                    alt="Premier Health Medical Management"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            </Link>

            {/* Project 3: Airova */}
            <Link href="/portfolio/airova">
              <motion.div
                variants={staggerItem}
                className="group relative bg-gradient-to-br from-purple-300 to-indigo-300 rounded-3xl overflow-hidden h-80 shadow-lg cursor-pointer"
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-t-2xl px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="bg-gray-100 rounded px-2 py-1 text-xs text-gray-600 text-center">airova.com</div>
                  </div>
                </div>
                <div className="h-60 bg-gradient-to-br from-white via-blue/5 to-purple/5 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <Image
                    src="/portfolio/airova/Screenshot 2026-05-31 180126.png"
                    alt="Airova AI Assistants"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            </Link>

            {/* Project 4: NFSYT */}
            <Link href="/portfolio/nfsyt">
              <motion.div
                variants={staggerItem}
                className="group relative bg-gradient-to-br from-blue-300 to-purple-300 rounded-3xl overflow-hidden h-80 shadow-lg cursor-pointer"
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-t-2xl px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="bg-gray-100 rounded px-2 py-1 text-xs text-gray-600 text-center">nfsyt.com</div>
                  </div>
                </div>
                <div className="h-60 bg-gradient-to-br from-white via-blue/5 to-purple/5 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <Image
                    src="/portfolio/nfsyt/Screenshot 2026-05-31 174350.png"
                    alt="NFSYT Mental Wellness"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/portfolio">
              <motion.button
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Work
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER - COMPLETELY REDESIGNED */}
      <section className="gradient-bg text-white py-24 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-10 -right-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl bottom-10 -left-48 animate-pulse"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h2 className="font-serif text-6xl font-bold text-navy">
              Ready to build something great?
            </h2>
            <p className="text-2xl text-navy/80">
              Let's talk about your project and how we can help move your business forward.
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-white text-navy px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
