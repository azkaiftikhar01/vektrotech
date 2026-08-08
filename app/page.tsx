import HeroOrbit from '@/components/HeroOrbit'
import StatsBar from '@/components/StatsBar'
import CaseStudiesShowcase from '@/components/CaseStudiesShowcase'
import ServicesGrid from '@/components/ServicesGrid'

export default function Home() {
  return (
    <div className="relative bg-bg">
      <HeroOrbit />
      <StatsBar />
      <CaseStudiesShowcase />
      <ServicesGrid />

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative border-t border-border">
        <div className="container-custom max-w-3xl mx-auto py-24 md:py-32 text-center">
          <h2 className="font-mono text-2xl md:text-h2 text-text leading-tight">
            Have something that needs building?
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-md mx-auto mt-5">
            Don&rsquo;t let limited resources or bandwidth hold you back. Get direct access to a
            team ready to bring your ideas to life.
          </p>
          <a href="mailto:hello@vektro.tech" className="btn-primary inline-block mt-10">
            hello@vektro.tech
          </a>
        </div>
      </section>
    </div>
  )
}
