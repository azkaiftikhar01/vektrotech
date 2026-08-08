import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#131313',
        'surface-2': '#1a1a1a',
        border: '#262626',
        text: '#f5f5f5',
        'text-muted': '#8a8a8a',
        'text-dim': '#5c5c5c',
        orange: '#f97316',
        green: '#4ade80',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Legacy alias — every `font-serif` usage in the old light theme pointed at the
        // display/heading face. Mapped to mono during the dark-theme rewrite so nothing
        // regresses to a system serif before every call site is swept to `font-mono`.
        serif: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        h1: ['56px', { lineHeight: '1.05' }],
        h2: ['32px', { lineHeight: '1.15' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.35s ease-out',
        'pulse-slow': 'pulseSlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
