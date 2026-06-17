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
  categoryColor,
  publishedAt,
  readTime,
  author,
  children,
}: BlogPostLayoutProps) {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom max-w-4xl">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-navy/50 mb-8"
        >
          <Link href="/" className="hover:text-blue transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-navy/70 truncate max-w-[200px]">{title}</span>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: `${categoryColor}18`, color: categoryColor }}
          >
            {category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-5">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-navy/50">
            <span>By <strong className="text-navy/70">{author}</strong></span>
            <span>·</span>
            <time dateTime={publishedAt}>{publishedAt}</time>
            <span>·</span>
            <span>{readTime} read</span>
          </div>
        </motion.header>

        {/* Divider */}
        <div className="h-px bg-navy/10 mb-10" />

        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-navy prose-li:text-gray-600 prose-blockquote:border-l-blue prose-blockquote:text-navy/70"
        >
          {children}
        </motion.article>

        {/* Divider */}
        <div className="h-px bg-navy/10 mt-14 mb-10" />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue/8 to-purple/8 border border-blue/15 rounded-2xl p-8 md:p-10 text-center"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-3">
            Ready to put this into practice?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Vektro builds the software that moves businesses forward. Let&apos;s talk about your project.
          </p>
          <Link href="/contact">
            <motion.button
              className="bg-navy text-white font-semibold px-8 py-3.5 rounded-full hover:bg-navy/90 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Free Consultation
            </motion.button>
          </Link>
        </motion.div>

        {/* Related Posts */}
        <div className="mt-14">
          <h3 className="font-serif text-2xl font-bold text-navy mb-6">More from the Blog</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts
              .filter((p) => p.title !== title)
              .slice(0, 4)
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block border border-navy/10 rounded-xl p-5 hover:border-blue/30 hover:shadow-md transition-all duration-200 bg-white/50"
                >
                  <span className="text-xs font-semibold text-blue/80 uppercase tracking-wider">{post.category}</span>
                  <p className="text-navy font-medium mt-1.5 group-hover:text-blue transition-colors leading-snug">
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
