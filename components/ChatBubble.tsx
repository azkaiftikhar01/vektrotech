'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChatForm from '@/components/ChatForm'

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-5 z-[80] flex flex-col items-end gap-3 pointer-events-none">
      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
            className="w-[360px] max-w-[calc(100vw-2.5rem)] rounded-3xl shadow-2xl overflow-hidden border border-gray-100 pointer-events-auto"
            style={{ background: '#fff' }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ background: 'linear-gradient(135deg, #0084FF 0%, #6D3ACF 100%)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                  V
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-none">Vektro</p>
                  <p className="text-white/70 text-xs mt-0.5">We reply within 24 h</p>
                </div>
                <span className="ml-1 w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Chat form — constrained height */}
            <div className="overflow-hidden" style={{ height: 460 }}>
              <ChatForm />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bubble button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Open chat"
        className="pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
        style={{ background: 'linear-gradient(135deg, #0084FF 0%, #6D3ACF 100%)' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
        transition={{ duration: 0.25 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="20" height="20" viewBox="0 0 16 16" fill="none"
            >
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="22" height="22" viewBox="0 0 24 24" fill="none"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
