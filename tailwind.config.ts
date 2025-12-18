import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f7f6f3',
        surface: '#ffffff',
        // More pronounced section backgrounds
        'surface-warm': '#ece5d8',   // Warm beige - pronounced
        'surface-sage': '#dce8dc',   // Light sage green - visible tint
        'surface-gray': '#e8e8e4',   // Cool gray - distinct
        'surface-cream': '#f8f4ec',  // Warmer cream
        border: '#e5e2db',
        // Premium color additions
        cream: '#FFFDF8',
        gold: '#D4AF37',
        'sage-light': '#8DA390',
        forest: '#435442',
        primary: {
          DEFAULT: '#5d7052',
          dark: '#435442',
          light: '#7a8f6d',
        },
        accent: {
          DEFAULT: '#c8a56d',
          dark: '#b08f55',
          light: '#d9be8e',
        },
        text: {
          DEFAULT: '#435442',
          muted: '#6b7c64',
          light: '#8a9883',
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(67, 84, 66, 0.08)',
        'card-hover': '0 8px 30px rgba(67, 84, 66, 0.12)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-jakarta)', 'sans-serif'],
      },
      fontSize: {
        // Minimum 18px - all sizes scaled proportionally
        sm: ['1.125rem', { lineHeight: '1.5' }],     // 18px (was 14px)
        base: ['1.125rem', { lineHeight: '1.6' }],   // 18px (was 16px)
        lg: ['1.25rem', { lineHeight: '1.5' }],      // 20px (was 18px)
        xl: ['1.375rem', { lineHeight: '1.4' }],     // 22px (was 20px)
        '2xl': ['1.625rem', { lineHeight: '1.35' }], // 26px (was 24px)
        '3xl': ['2rem', { lineHeight: '1.25' }],     // 32px (was 30px)
        '4xl': ['2.5rem', { lineHeight: '1.1' }],    // 40px
        '5xl': ['3.5rem', { lineHeight: '1.05' }],   // 56px
        '6xl': ['4.5rem', { lineHeight: '1' }],      // 72px
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 15px 5px rgba(212, 175, 55, 0.2)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
