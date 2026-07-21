'use client'

import Link from 'next/link'
import DimLine from '@/components/DimLine'
import HeroOrbit from '@/components/HeroOrbit'
import ServicesQuadrant from '@/components/ServicesQuadrant'
import ClientShowcasePanel from '@/components/ClientShowcasePanel'
import CaseStudiesShowcase from '@/components/CaseStudiesShowcase'
import WhyVektro from '@/components/WhyVektro'

export default function Home() {
  return (
    <div className="relative pt-20 bg-[#F4F6FB]">
      <HeroOrbit />

      <ServicesQuadrant />
      <ClientShowcasePanel />
      <CaseStudiesShowcase />
      <WhyVektro />

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Got a project in mind?</p>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-navy leading-[1.05]">
          Give your business <br /> the firepower it deserves.
        </h2>
        <DimLine label="663px" className="max-w-sm mx-auto my-8" />
        <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
          Don&rsquo;t let limited resources or bandwidth hold you back. Get direct access to a team ready to bring
          your ideas to life.
        </p>
        <Link href="/contact">
          <button className="btn-primary mt-8 text-sm px-7 py-3.5">Start a project</button>
        </Link>
      </section>

      {/* ── WORDMARK CLOSER ──────────────────────────────────────────────── */}
      <div className="relative z-10 pt-6 overflow-hidden">
        <p className="font-serif font-bold text-[16vw] md:text-[9rem] leading-[0.8] text-center text-navy/[0.06] select-none -mb-4 md:-mb-6">
          VEKTRO
        </p>
      </div>
    </div>
  )
}
