'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChatForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const steps = [
    {
      type: 'message',
      content: "Hi! 👋 Enter your information below so we can contact you and provide a detailed quote.",
    },
    {
      type: 'input',
      key: 'name',
      label: "What's your full name?",
      placeholder: 'John Doe',
    },
    {
      type: 'input',
      key: 'email',
      label: 'What email should we reach you at?',
      placeholder: 'you@company.com',
      inputType: 'email',
    },
    {
      type: 'input',
      key: 'phone',
      label: 'Phone number?',
      placeholder: '+1 (555) 123-4567',
      inputType: 'tel',
    },
    {
      type: 'select',
      key: 'service',
      label: 'Which service interests you?',
      options: ['Web Development', 'Mobile App', 'AI & Automation', 'QA Testing'],
    },
    {
      type: 'select',
      key: 'budget',
      label: "What's your budget range?",
      options: ['$5K - $10K', '$10K - $25K', '$25K - $50K', '$50K+'],
    },
    {
      type: 'select',
      key: 'timeline',
      label: 'When do you need this?',
      options: ['ASAP (1-2 weeks)', '1-2 months', '2-3 months', 'Flexible'],
    },
    {
      type: 'textarea',
      key: 'description',
      label: 'Tell us about your project briefly',
      placeholder: "What are your goals and requirements?",
    },
  ]

  const handleNext = (value = '') => {
    if (steps[currentStep].type !== 'message' && value.trim()) {
      setFormData({
        ...formData,
        [steps[currentStep].key]: value,
      })
      setCurrentStep(currentStep + 1)
    } else if (steps[currentStep].type === 'message') {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setError('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    handleNext(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const input = e.target as HTMLInputElement
      if (input.value.trim()) {
        handleNext(input.value)
      }
    }
  }

  const currentStepData = steps[currentStep]
  const isFormComplete = Object.values(formData).every(val => val.trim() !== '')

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-blue/20 shadow-lg overflow-hidden flex flex-col h-[480px] sm:h-[600px]">
        {/* Chat Container */}
        <div className="flex-1 overflow-y-auto p-8 space-y-4 bg-gradient-to-br from-white via-blue/2 to-white">
          <AnimatePresence mode="wait">
            {/* Display all completed messages */}
            {steps.slice(0, currentStep).map((step, idx) => (
              <motion.div
                key={`completed-${idx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {step.type === 'message' && (
                  <div className="flex items-end gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      V
                    </div>
                    <div className="bg-blue/10 text-navy px-4 py-3 rounded-2xl rounded-bl-none max-w-md text-sm">
                      {step.content}
                    </div>
                  </div>
                )}
                {step.type !== 'message' && formData[step.key as keyof typeof formData] && (
                  <>
                    <div className="flex items-end gap-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        V
                      </div>
                      <div className="bg-blue/10 text-navy px-4 py-3 rounded-2xl rounded-bl-none max-w-md text-sm">
                        {step.label}
                      </div>
                    </div>
                    <div className="flex justify-end mt-2">
                      <div className="bg-navy text-white px-4 py-2 rounded-2xl rounded-br-none max-w-md text-sm">
                        {formData[step.key as keyof typeof formData]}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}

            {/* Display current step bot message */}
            {currentStep < steps.length && (
              <motion.div
                key={`current-bot-${currentStep}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {steps[currentStep].type === 'message' ? (
                  <div className="flex items-end gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      V
                    </div>
                    <div className="bg-blue/10 text-navy px-4 py-3 rounded-2xl rounded-bl-none max-w-md text-sm">
                      {steps[currentStep].content}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-end gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      V
                    </div>
                    <div className="bg-blue/10 text-navy px-4 py-3 rounded-2xl rounded-bl-none max-w-md text-sm">
                      {steps[currentStep].label}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Success Message */}
            {submitted && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8 space-y-3"
              >
                <div className="text-4xl">✨</div>
                <p className="text-navy font-semibold">Thank you!</p>
                <p className="text-gray-600 text-sm">We'll get back to you with a quote within 24 hours.</p>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        {!submitted && currentStep < steps.length && (
          <div className="border-t border-blue/10 bg-white p-4 space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex gap-2"
            >
              {currentStepData.type === 'input' && (
                <input
                  type={currentStepData.inputType || 'text'}
                  placeholder={currentStepData.placeholder}
                  autoFocus
                  onKeyPress={handleKeyPress}
                  onBlur={(e) => {
                    if (e.target.value.trim()) handleNext(e.target.value)
                  }}
                  className="flex-1 px-4 py-2 rounded-full border border-blue/30 text-navy placeholder-gray-400 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all text-sm"
                />
              )}
              {currentStepData.type === 'select' && (
                <select
                  autoFocus
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 rounded-full border border-blue/30 text-navy focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all text-sm appearance-none bg-white"
                >
                  <option value="">Select...</option>
                  {(currentStepData.options || []).map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}
              {currentStepData.type === 'textarea' && (
                <textarea
                  placeholder={currentStepData.placeholder}
                  autoFocus
                  rows={2}
                  onKeyPress={handleKeyPress}
                  onBlur={(e) => {
                    if (e.target.value.trim()) handleNext(e.target.value)
                  }}
                  className="flex-1 px-4 py-2 rounded-xl border border-blue/30 text-navy placeholder-gray-400 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all text-sm resize-none"
                />
              )}
            </motion.div>
          </div>
        )}

        {/* Submit Button */}
        {!submitted && isFormComplete && currentStep === steps.length && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-blue/10 bg-gradient-to-r from-blue/5 to-purple/5 px-4 py-4"
          >
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full btn-primary py-3 font-semibold hover:opacity-90 disabled:opacity-50 transition-all"
            >
              {isLoading ? 'Sending...' : 'Send My Request'}
            </button>
          </motion.div>
        )}

        {/* Continue Button for Messages */}
        {!submitted && currentStep < steps.length && currentStepData.type === 'message' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="border-t border-blue/10 bg-gradient-to-r from-blue/5 to-purple/5 px-4 py-3 text-center"
          >
            <button
              onClick={() => handleNext()}
              className="text-blue hover:text-purple font-medium text-sm transition-colors"
            >
              Continue →
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
