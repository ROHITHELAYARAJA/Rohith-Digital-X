/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        '2xl': '1380px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          crimson: '#FFAE00', // Replaced with HeyDigital Amber Flame
          'crimson-dark': '#E69500',
          'crimson-light': '#FFF5DB',
          'crimson-subtle': '#FFFDF7',
          amber: '#FFAE00',
          'amber-glow': '#FF9900',
          'amber-bright': '#FFB800',
          'amber-dark': '#E69500',
          'amber-subtle': '#FFF8EB',
          coral: '#FF4D3D',
          'coral-hover': '#FF3B2B',
          'coral-subtle': '#FFF1F0',
        },
        coral: {
          DEFAULT: '#FF4D3D',
          hover: '#FF3B2B',
          glow: 'rgba(255, 77, 61, 0.4)',
          subtle: '#FFF1F0',
          dark: '#E03627',
        },
        sand: {
          DEFAULT: '#F4EFE6',
          dark: '#E7DECE',
          subtle: '#FAF7F2',
          border: '#E2D8C7',
        },
        void: {
          DEFAULT: '#070708',
          900: '#0A0A0C',
          800: '#121316',
          700: '#181A20',
          600: '#23262E',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        charcoal: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#868E96',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
          900: '#121416',
          950: '#070708',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"General Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        manrope: ['"Manrope"', '"Inter"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        lora: ['"Lora"', 'Georgia', 'serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
        worksans: ['"Work Sans"', 'sans-serif'],
        display: ['"Manrope"', '"Inter"', '"Outfit"', 'system-ui', 'sans-serif'],
        general: ['"General Sans"', 'system-ui', 'sans-serif'],
        boska: ['"Playfair Display"', '"Boska"', 'Georgia', 'serif'],
        bonny: ['"Lora"', '"Bonny"', 'Georgia', 'serif'],
        melodrama: ['"Playfair Display"', 'serif'],
        trench: ['"Trench Slab"', 'Rockwell', 'serif'],
        khand: ['"Khand"', 'Impact', 'sans-serif'],
        pilcrow: ['"DM Sans"', 'system-ui', 'sans-serif'],
        britney: ['"Britney"', 'sans-serif'],
        hind: ['"Hind"', 'system-ui', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        nunito: ['"Nunito"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.96)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap, 1rem)))' },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        'shine': {
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
          'to': { 'background-position': '0% 0%' },
        },
        'orbit': {
          '0%': {
            transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))',
          },
          '100%': {
            transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))',
          },
        },
        'shimmer-slide': {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
        'shiny-text': {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shiny-width)) 0',
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shiny-width)) 0',
          },
        },
        'rippling': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'marquee': 'marquee var(--duration, 30s) linear infinite',
        'border-beam': 'border-beam calc(var(--duration, 8)*1s) infinite linear',
        'shine': 'shine 8s ease infinite',
        'meteor': 'meteor 5s linear infinite',
        'orbit': 'orbit calc(var(--duration)*1s) linear infinite',
        'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        'shiny-text': 'shiny-text 8s infinite',
        'rippling': 'rippling var(--duration) ease-out',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'crimson-sm': '0 2px 10px -1px rgba(255, 174, 0, 0.35)',
        'crimson-md': '0 6px 24px -2px rgba(255, 174, 0, 0.40)',
        'amber-glow': '0 0 25px rgba(255, 174, 0, 0.4)',
        'amber-pill': '0 8px 30px -4px rgba(255, 174, 0, 0.45)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}
