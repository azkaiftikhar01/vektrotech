'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

const services = [
  'Website Design & Development',
  'Mobile App Development',
  'AI Chatbots & Virtual Assistants',
  'Personalised AI Assistants',
  'QA Automation & Manual Testing',
  'Custom Software Development',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="min-h-[40vh] bg-gradient-to-br from-white via-blue/3 to-purple/3 text-navy flex items-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
              Let's Talk
            </h1>
            <p className="text-xl text-gray-600">
              Tell us about your project. We'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* FORM SIDE */}
            <motion.div
              {...fadeInUp}
              className="lg:order-1"
            >
              <h2 className="font-serif text-3xl font-bold mb-8">
                {submitted ? 'Message Sent!' : 'Send us a message'}
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-light-bg border-2 border-blue rounded-lg p-8 text-center"
                >
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                    Thank you!
                  </h3>
                  <p className="text-body-text mb-4">
                    We've received your message and will get back to you soon.
                  </p>
                  <motion.button
                    onClick={() => setSubmitted(false)}
                    className="text-blue font-medium hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-light-bg focus:border-blue'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-light-bg focus:border-blue'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone Field (Optional) */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-light-bg focus:border-blue transition-all focus:outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                        errors.service
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-light-bg focus:border-blue'
                      }`}
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none resize-none ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-light-bg focus:border-blue'
                      }`}
                      placeholder="Tell us about your project..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* CONTACT INFO SIDE */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="lg:order-2 space-y-8"
            >
              <div className="bg-light-bg p-8 rounded-lg">
                <h3 className="font-serif text-xl font-bold text-navy mb-4">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-body-text font-medium mb-1">Email</p>
                    <a
                      href="mailto:hello@vektro.tech"
                      className="text-blue font-medium hover:underline"
                    >
                      hello@vektro.tech
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-body-text font-medium mb-2">
                      Response Time
                    </p>
                    <p className="text-body-text">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue/5 to-purple/5 border border-blue/20 text-navy p-8 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-4">
                  Why Choose Vektro?
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-blue mt-1">✓</span>
                    <span>Expert team of developers and designers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue mt-1">✓</span>
                    <span>Results-driven approach to every project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue mt-1">✓</span>
                    <span>24/7 support and dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue mt-1">✓</span>
                    <span>On-time delivery and transparent communication</span>
                  </li>
                </ul>
              </div>

              <div className="bg-light-bg p-8 rounded-lg">
                <h3 className="font-serif text-xl font-bold text-navy mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/company/vektro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue/10 text-blue rounded-lg text-sm font-medium hover:bg-blue hover:text-white transition-all border border-blue/20"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com/vektro.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue/10 text-blue rounded-lg text-sm font-medium hover:bg-blue hover:text-white transition-all border border-blue/20"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
