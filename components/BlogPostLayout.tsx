'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface BlogPostLayoutProps {
  title: string
  category: string
  categoryColor: string
  publishedAt: string
  readTime: string
  author: string
  children: React.ReactNode
}

const relatedPosts = [
  { slug: 'ai-reshaping-software-development-2025', title: 'How AI Is Reshaping Software Development in 2025', category: 'AI & Dev' },
  { slug: 'cloud-migration-business-case-2025', title: 'The Business Case for Cloud Migration', category: 'Cloud' },
  { slug: 'qa-automation-high-growth-startups', title: 'QA Automation: The Secret Weapon of High-Growth Startups', category: 'QA' },
  { slug: 'react-native-vs-flutter-2025', title: 'React Native vs Flutter in 2025: An Honest Take', category: 'Mobile' },
  { slug: 'custom-ai-assistants-for-business', title: 'Custom AI Assistants for Business: Before You Build, Read This', category: 'AI' },
  { slug: 'website-losing-revenue-signs', title: '7 Signs Your Website Is Silently Losing You Revenue', category: 'Web' },
]

export default function BlogPostLayout({
  title,
  category,
  publishedAt,
  readTime,
  author,
  children,
}: BlogPostLayoutProps) {
  return (
    <div className="pt-32 pb-20 bg-bg">
      <div className="container-custom max-w-4xl">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 text-sm text-text-muted mb-8 font-mono"
        >
          <Link href="/" className="hover:text-orange transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-orange transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-text-muted truncate max-w-[200px]">{title}</span>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-orange border border-border px-3 py-1 mb-4">
            {category}
          </span>
          <h1 className="font-mono text-3xl md:text-5xl text-text leading-tight mb-5">{title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <span>By <strong className="text-text-muted">{author}</strong></span>
            <span>·</span>
            <time dateTime={publishedAt}>{publishedAt}</time>
            <span>·</span>
            <span>{readTime} read</span>
          </div>
        </motion.header>

        <div className="h-px bg-border mb-10" />

        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="prose prose-invert prose-lg max-w-none prose-headings:font-mono prose-headings:text-text prose-headings:font-medium prose-p:text-text-muted prose-a:text-orange prose-a:no-underline hover:prose-a:underline prose-strong:text-text prose-li:text-text-muted prose-blockquote:border-l-orange prose-blockquote:text-text-muted prose-code:text-orange prose-hr:border-border"
        >
          {children}
        </motion.article>

        <div className="h-px bg-border mt-14 mb-10" />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border border-border p-8 md:p-10 text-center"
        >
          <h3 className="font-mono text-xl md:text-2xl text-text mb-3">Ready to put this into practice?</h3>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">
            Vektro builds the software that moves businesses forward. Let&apos;s talk about your project.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get a free consultation
          </Link>
        </motion.div>

        {/* Related Posts */}
        <div className="mt-14">
          <h3 className="font-mono text-xl text-text mb-6">More from the blog</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts
              .filter((p) => p.title !== title)
              .slice(0, 4)
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block border border-border p-5 hover:border-orange transition-colors duration-200"
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-text-dim">{post.category}</span>
                  <p className="text-text font-mono mt-1.5 group-hover:text-orange transition-colors leading-snug">
                    {post.title}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
