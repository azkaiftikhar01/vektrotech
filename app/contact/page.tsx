'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  'Custom software development',
  'Web & mobile development',
  'SaaS product development',
  'AI & automation',
  'UI/UX design',
  'Cloud, DevOps & CI/CD',
  'QA & testing',
  'System integrations',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitError, setSubmitError] = useState('')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to submit form')

      setSubmitted(true)
      setFormData({ name: '', email: '', service: '', message: '' })
    } catch (err) {
      setSubmitError('Something went wrong. Please try again or email us directly.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pt-32 bg-bg min-h-screen">
      <div className="container-custom pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-16"
        >
          <h1 className="font-mono font-medium text-3xl md:text-h1 text-text mb-4">
            Let&rsquo;s talk<span className="text-orange">.</span>
          </h1>
          <p className="text-text-muted text-base md:text-lg">
            Tell us about your project. We&rsquo;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16">
          {/* FORM */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="border border-orange bg-surface p-10 text-center"
              >
                <p className="font-mono text-orange text-3xl mb-4">✓</p>
                <h2 className="font-mono text-xl text-text mb-2">Thank you!</h2>
                <p className="text-text-muted mb-6">We&rsquo;ve received your message and will get back to you soon.</p>
                <button onClick={() => setSubmitted(false)} className="text-orange font-mono text-sm hover:underline">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-text-muted mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-surface border transition-colors focus:outline-none placeholder:text-text-dim text-text ${
                      errors.name ? 'border-orange' : 'border-border focus:border-orange'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-orange text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-text-muted mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-surface border transition-colors focus:outline-none placeholder:text-text-dim text-text ${
                      errors.email ? 'border-orange' : 'border-border focus:border-orange'
                    }`}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="text-orange text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-mono text-text-muted mb-2">
                    Project type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-border focus:border-orange transition-colors focus:outline-none text-text appearance-none"
                  >
                    <option value="">Select one...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-text-muted mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-surface border transition-colors focus:outline-none resize-none placeholder:text-text-dim text-text ${
                      errors.message ? 'border-orange' : 'border-border focus:border-orange'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-orange text-sm mt-1">{errors.message}</p>}
                </div>

                {submitError && <p className="text-orange text-sm">{submitError}</p>}

                <button type="submit" disabled={isLoading} className="btn-primary w-full disabled:opacity-60">
                  {isLoading ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="border border-border p-8">
              <h3 className="font-mono text-text mb-4">Get in touch</h3>
              <p className="text-sm text-text-muted font-mono mb-1">Email</p>
              <a href="mailto:hello@vektro.tech" className="text-orange hover:underline">
                hello@vektro.tech
              </a>
              <p className="text-sm text-text-muted font-mono mt-4 mb-1">Response time</p>
              <p className="text-text-muted">Within 24 hours</p>
            </div>

            <div className="border border-border p-8">
              <h3 className="font-mono text-text mb-4">Why vektro;</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-orange">→</span>
                  <span>Senior team of engineers and designers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange">→</span>
                  <span>Results-driven approach to every project</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange">→</span>
                  <span>Dedicated point of contact throughout</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange">→</span>
                  <span>On-time delivery, transparent communication</span>
                </li>
              </ul>
            </div>

            <div className="border border-border p-8">
              <h3 className="font-mono text-text mb-4">Follow us</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/vektro-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-border text-text-muted text-sm font-mono hover:border-orange hover:text-orange transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/vektro.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-border text-text-muted text-sm font-mono hover:border-orange hover:text-orange transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
