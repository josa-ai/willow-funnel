import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark "Midnight Moss" theme
        background: '#1a2318',        // Deep forest black
        surface: '#242f22',           // Slightly lighter for cards
        'surface-warm': '#2a3628',    // Warm dark surface
        border: '#3d4a3a',            // Subtle green-tinted border
        cream: '#2a3628',             // Dark card background
        gold: '#D4AF37',              // Premium gold accent
        'sage-light': '#8DA390',      // Muted sage for secondary text
        forest: '#0f1610',            // Darkest background (footer)
        primary: {
          DEFAULT: '#8DA390',         // Light sage for primary elements
          dark: '#a8bfab',            // Lighter for hover states
          light: '#6b8a6e',           // Dimmer variant
        },
        accent: {
          DEFAULT: '#D4AF37',         // Gold accent
          dark: '#E8C252',            // Brighter gold for hover
          light: '#c8a56d',           // Softer gold
        },
        text: {
          DEFAULT: '#e8ebe7',         // Off-white primary text
          muted: '#a8bfab',           // Muted sage text
          light: '#6b8a6e',           // Dim text
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.4)',
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
