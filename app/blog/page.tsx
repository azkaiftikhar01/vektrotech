import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Vektro — Insights on AI, Cloud & Software Development',
  description:
    'Expert insights on AI development, cloud migration, QA automation, mobile development, and web design. Written by the Vektro engineering team.',
  alternates: {
    canonical: 'https://vektro.tech/blog',
  },
  openGraph: {
    title: 'Blog | Vektro — AI, Cloud & Software Insights',
    description:
      'Expert insights on AI development, cloud migration, QA automation, mobile development, and web design.',
    url: 'https://vektro.tech/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vektro Blog — AI, Cloud & Software Insights',
    description: 'Expert insights on software development, AI, cloud, and more.',
  },
}

const posts = [
  {
    slug: 'ai-reshaping-software-development-2025',
    title: 'How AI Is Quietly Reshaping Software Development in 2025',
    excerpt:
      "From copilots to autonomous agents, AI has moved from a novelty to a genuine force multiplier in engineering teams. Here's what's actually changing — and what isn't.",
    category: 'AI & Development',
    readTime: '7 min',
    publishedAt: 'June 5, 2025',
    author: 'Vektro Team',
  },
  {
    slug: 'cloud-migration-business-case-2025',
    title: 'The Business Case for Cloud Migration: What No One Actually Tells You',
    excerpt:
      "Cloud migration promises lower costs and infinite scale. The reality is messier — but the upside is real if you approach it right. Here's the honest breakdown.",
    category: 'Cloud',
    readTime: '8 min',
    publishedAt: 'June 2, 2025',
    author: 'Vektro Team',
  },
  {
    slug: 'qa-automation-high-growth-startups',
    title: 'QA Automation: The Secret Weapon of High-Growth Startups',
    excerpt:
      "Fast-moving startups that skip QA automation don't ship faster — they just break things faster. Here's how smart teams use automation to move quicker without the chaos.",
    category: 'QA Automation',
    readTime: '6 min',
    publishedAt: 'May 28, 2025',
    author: 'Vektro Team',
  },
  {
    slug: 'react-native-vs-flutter-2025',
    title: "React Native vs Flutter in 2025: An Honest Developer's Take",
    excerpt:
      'Both frameworks have matured significantly. But which one should you actually pick for your next mobile project? We break down the real tradeoffs with zero hype.',
    category: 'Mobile Development',
    readTime: '9 min',
    publishedAt: 'May 20, 2025',
    author: 'Vektro Team',
  },
  {
    slug: 'custom-ai-assistants-for-business',
    title: 'Custom AI Assistants for Business: Before You Build, Read This',
    excerpt:
      "Everyone wants a custom ChatGPT. Not everyone knows what they're actually signing up for. Here's what businesses need to understand before committing to an AI assistant build.",
    category: 'AI',
    readTime: '7 min',
    publishedAt: 'May 14, 2025',
    author: 'Vektro Team',
  },
  {
    slug: 'website-losing-revenue-signs',
    title: '7 Signs Your Website Is Silently Losing You Revenue',
    excerpt:
      "A slow, confusing, or outdated website doesn't just annoy visitors — it costs you real money every day. Here are the red flags most businesses completely miss.",
    category: 'Web Development',
    readTime: '6 min',
    publishedAt: 'May 8, 2025',
    author: 'Vektro Team',
  },
]

export default function BlogPage() {
  const featuredPost = posts[0]
  const gridPosts = posts.slice(1)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Vektro Blog',
            description: 'Expert insights on AI, cloud, mobile development, QA automation, and web design.',
            url: 'https://vektro.tech/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Vektro',
              url: 'https://vektro.tech',
              logo: { '@type': 'ImageObject', url: 'https://vektro.tech/logo-mark.png' },
            },
            blogPost: posts.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.title,
              description: p.excerpt,
              url: `https://vektro.tech/blog/${p.slug}`,
              datePublished: p.publishedAt,
              author: { '@type': 'Organization', name: 'Vektro' },
            })),
          }),
        }}
      />

      <div className="pt-32 pb-20 bg-bg">
        {/* Hero */}
        <section className="container-custom mb-16 text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-orange border border-border px-3 py-1 mb-4">
            Our blog
          </span>
          <h1 className="font-mono font-medium text-4xl md:text-h1 text-text mb-4 leading-tight">
            Insights that actually help
          </h1>
          <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            No fluff. Just honest takes on AI, cloud infrastructure, mobile development,
            QA automation, and everything in between — from the team building it daily.
          </p>
        </section>

        <div className="container-custom">
          {/* Featured Post */}
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block bg-surface border border-border hover:border-orange transition-colors duration-200 mb-10"
          >
            <div className="p-8 md:p-10">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-orange border border-border px-3 py-1 mb-4">
                {featuredPost.category}
              </span>
              <h2 className="font-mono text-2xl md:text-3xl text-text mb-3 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-5 max-w-3xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-dim">
                <span>{featuredPost.author}</span>
                <span>·</span>
                <span>{featuredPost.publishedAt}</span>
                <span>·</span>
                <span>{featuredPost.readTime} read</span>
                <span className="ml-auto text-orange font-mono group-hover:underline">Read article →</span>
              </div>
            </div>
          </Link>

          {/* Grid Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {gridPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-bg hover:bg-surface p-6 transition-colors duration-200 flex flex-col"
              >
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-orange border border-border px-3 py-1 mb-4 self-start">
                  {post.category}
                </span>
                <h2 className="font-mono text-lg text-text mb-3 leading-snug flex-1">{post.title}</h2>
                <p className="text-text-muted text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-text-dim mt-auto pt-4 border-t border-border">
                  <span>{post.publishedAt}</span>
                  <span>{post.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
