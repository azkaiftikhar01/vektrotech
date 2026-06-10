'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/animations'
import WhatWeDo from '@/components/WhatWeDo'

export default function Home() {
  const heroRef        = useRef<HTMLElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const servicesRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any
    ;(async () => {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {

        // ── 1. Hero content: drift up + fade as hero scrolls out ──────────────
        gsap.to(heroContentRef.current, {
          y: -80,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',       // when hero top hits viewport top
            end: 'bottom top',      // when hero bottom hits viewport top
            scrub: 1.8,
          },
        })

        // ── 2. Services: Awwwards clip-path card reveal ───────────────────────
        //    Section rises from below, top corners rounded → fully visible flat
        gsap.fromTo(
          servicesRef.current,
          { clipPath: 'inset(6% 2% 0% 2% round 36px 36px 0 0)', y: 40 },
          {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: servicesRef.current,
              start: 'top 92%',     // just as section enters viewport bottom
              end: 'top 8%',        // by the time it's near the top
              scrub: 1.1,
            },
          }
        )
      })
    })()

    return () => ctx?.revert()
  }, [])

  return (
    <div className="pt-20">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="min-h-screen bg-gradient-to-br from-[#EBF0FF] via-[#F3EEFF] to-[#E6F2FF] text-navy relative overflow-hidden flex items-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue/8 rounded-full blur-3xl" />
        </div>

        <div
          ref={heroContentRef}
          className="container-custom relative z-10 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              We Build Software That
              <br />
              <span className="bg-gradient-to-r from-blue via-blue to-purple bg-clip-text text-transparent">
                Moves Business Forward
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-xl"
            >
              From websites to AI-powered assistants — we design, build, and deliver the full digital stack that your business needs to thrive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link href="/portfolio">
                <motion.button
                  className="btn-primary px-8 py-3 text-lg font-semibold"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,132,255,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  See Our Work
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="btn-secondary px-8 py-3 text-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — hero graphic (visible on all screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: 'spring', stiffness: 100, damping: 15 }}
            className="relative flex items-center justify-center"
            style={{ minHeight: '260px' }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[90%] h-[90%] rounded-full border border-blue/20" style={{ borderStyle: 'dashed' }} />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[65%] h-[65%] rounded-full border border-purple/15" />
            <motion.div
              animate={{ opacity: [0.5, 0.9, 0.5], background: ['radial-gradient(circle, rgba(0,132,255,0.25) 0%, transparent 70%)', 'radial-gradient(circle, rgba(109,58,207,0.25) 0%, transparent 70%)', 'radial-gradient(circle, rgba(0,132,255,0.25) 0%, transparent 70%)'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 blur-2xl"
            />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} className="absolute w-[80%] h-[80%]">
              <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 left-1/2 w-3 h-3 rounded-full bg-blue/70 blur-[1px]" />
            </motion.div>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 11, repeat: Infinity, ease: 'linear' }} className="absolute w-[75%] h-[75%]">
              <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
                className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-purple/70 blur-[1px]" />
            </motion.div>
            <motion.div animate={{ y: [0, -14, 0], scale: [1, 1.03, 1] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10">
              <Image src="/hero-graphic.png" alt="Vektro" width={1000} height={800} priority quality={100}
                className="w-full h-auto max-w-[280px] sm:max-w-sm lg:max-w-lg object-contain drop-shadow-xl" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 text-3xl">
          ↓
        </motion.div>
      </section>

      {/* ── WHAT WE DO — GSAP clip-path reveal ───────────────────────────── */}
      <div
        ref={servicesRef}
        style={{
          clipPath: 'inset(6% 2% 0% 2% round 36px 36px 0 0)',
          willChange: 'clip-path, transform',
        }}
      >
        <WhatWeDo />
      </div>

      {/* ── RESULTS BAR ── */}
      <section className="bg-[#1B2A6B] py-10">
        <div className="container-custom">
          <p className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase text-center mb-6">Real Results From Real Clients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: '40%', label: 'More Online Orders', client: 'Phool' },
              { num: '80%', label: 'Scheduling Automated', client: 'Premier Health' },
              { num: '500+', label: 'Users Connected', client: 'NFSYT' },
              { num: '<5 min', label: 'AI Deployment', client: 'Airova' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center"
              >
                <p className="font-serif font-bold text-white text-3xl md:text-4xl">{s.num}</p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
                <p className="text-[#4da6ff] text-xs mt-1 font-medium">{s.client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#EEF3FF] via-[#F7F2FF] to-[#E8F4FF] py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="text-blue font-semibold text-sm tracking-widest">ABOUT VEKTRO</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-2 leading-tight">
                  Built by builders.<br />Obsessed with results.
                </h2>
              </div>
              <ul className="space-y-3">
                {['Expert Team', 'Results-Driven', '24/7 Support'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="text-blue text-2xl">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <motion.button className="btn-primary mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-blue/10"
            >
              <iframe src="/vektro_screen_demo_clean.html" className="w-full h-64 md:h-96 bg-white border-0"
                title="Vektro Services Animation" style={{ aspectRatio: '580/360' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#F5F8FF] via-white to-[#F0EEFF] py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-14"
          >
            <div className="border-t border-gray-200 mb-8" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy">
              <span className="font-normal italic">Featured</span> Projects
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {[
              { slug: 'phool', name: 'Phool', achievements: ['Increased Online Orders By 40%', 'Custom Bouquet Builder'], image: '/portfolio/phool/Screenshot 2026-05-31 174131.png' },
              { slug: 'premier-health', name: 'Premier Health', achievements: ['80% Of Scheduling Automated', 'Reduced Admin Work By 60%'], image: '/portfolio/premierhealth/Screenshot 2026-05-31 174224.png' },
              { slug: 'airova', name: 'Airova', achievements: ['AI Assistants Live In Minutes', 'Multi-Channel Deployment'], image: '/portfolio/airova/Screenshot 2026-05-31 180126.png' },
            ].map((project, idx) => (
              <Link href={`/portfolio/${project.slug}`} key={idx}>
                <motion.div variants={staggerItem} className="relative rounded-2xl overflow-hidden cursor-pointer group" whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                  <div className="absolute top-3 left-3 right-3 z-10 flex flex-col gap-2">
                    {project.achievements.map((tag, i) => (
                      <span key={i} className="bg-white/90 backdrop-blur-sm text-navy text-xs font-medium px-3 py-1.5 rounded-full w-fit shadow-sm">{tag}</span>
                    ))}
                  </div>
                  <div className="aspect-[4/3] relative bg-gray-900">
                    <Image src={project.image} alt={project.name} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-white font-bold text-lg drop-shadow-md">{project.name}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center">
            <Link href="/portfolio">
              <motion.button className="btn-outline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>View All Work</motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#EAF0FF] via-[#F3EEFF] to-[#E6F5FF] py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-blue font-semibold text-sm tracking-widest uppercase">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mt-2">What Our Clients Say</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Vektro delivered a polished product on time and the results speak for themselves — our online orders increased by 40% in the first quarter.", name: "Sarah Al-Rashid", role: "Founder", company: "Phool", initial: "S", color: 'from-pink-500 to-rose-400', linkedin: '#' },
              { quote: "They understood our complex healthcare requirements and built a system our entire staff loves using. Scheduling is now fully automated.", name: "Dr. James Okafor", role: "Director", company: "Premier Health", initial: "J", color: 'from-blue to-cyan-400', linkedin: '#' },
              { quote: "The Airova platform exceeded our expectations. The AI assistants are fast to deploy and our clients love the seamless experience.", name: "Marcus Chen", role: "CEO", company: "Airova", initial: "M", color: 'from-purple to-indigo-400', linkedin: '#' },
            ].map((t, idx) => (
              <motion.div key={idx} variants={staggerItem} className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FBBF24">
                      <path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 flex-1 text-sm md:text-base">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm`}>{t.initial}</div>
                    <div>
                      <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy text-sm hover:text-blue transition-colors flex items-center gap-1">
                        {t.name}
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#0084FF" className="opacity-60"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="#0084FF"/></svg>
                      </a>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-blue/8 text-blue px-3 py-1 rounded-full border border-blue/15">{t.company}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="gradient-bg text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-10 -right-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl bottom-10 -left-48 animate-pulse" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-6 md:space-y-8"
          >
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-navy">Ready to build something great?</h2>
            <p className="text-lg md:text-2xl text-navy/80">Let's talk about your project and how we can help move your business forward.</p>
            <Link href="/contact">
              <motion.button className="bg-white text-navy px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
