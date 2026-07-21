import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#1B2A6B',
        'blue': '#155EEF',
        'blue-deep': '#0A2E85',
        // legacy utility name kept so existing `purple`/`to-purple` classes sitewide
        // pick up the new teal brand accent without touching every file
        'purple': '#2FD8C9',
        'teal': '#2FD8C9',
        'ink': '#0B0F14',
        'light-bg': '#F4F6FB',
        'body-text': '#6B7280',
      },
      fontFamily: {
        // legacy utility name kept (used as `font-serif` sitewide for headings) —
        // now points at the bold geometric display face, not an actual serif
        'serif': ['Sora', 'sans-serif'],
        'sans': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': '64px',
        'h2': '48px',
        'h3': '32px',
      },
      animation: {
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'lift': 'lift 0.3s ease-out',
        'shiny': 'shiny 6s linear infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lift: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-8px)' },
        },
        shiny: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
