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
        'blue': '#0084FF',
        'purple': '#6D3ACF',
        'light-bg': '#F4F6FB',
        'body-text': '#6B7280',
      },
      fontFamily: {
        'serif': ['DM Serif Display', 'serif'],
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
      },
    },
  },
  plugins: [],
}
export default config
