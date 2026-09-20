/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: {
          DEFAULT: '#0A0D12',
          card: '#0D1117',
          elevated: '#111722',
        },
        primary: {
          DEFAULT: '#0066FF',
          hover: '#0052CC',
          light: '#3385FF',
          bright: '#00A3FF',
          glow: 'rgba(0, 102, 255, 0.4)',
        },
        accent: {
          cyan: '#00D1FF',
          blue: '#0066FF',
          electric: '#00F0FF',
        },
        muted: {
          DEFAULT: '#9CA3AF',
          dark: '#6B7280',
          light: '#D1D5DB',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          highlight: 'rgba(255, 255, 255, 0.15)',
          blue: 'rgba(0, 102, 255, 0.3)',
          cyan: 'rgba(0, 163, 255, 0.4)',
        }
      },
      fontFamily: {
        sans: ['"Manrope"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Manrope"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 102, 255, 0.25)',
        'glow-md': '0 0 25px rgba(0, 102, 255, 0.35)',
        'glow-lg': '0 0 45px rgba(0, 102, 255, 0.45)',
        'glow-cyan': '0 0 35px rgba(0, 163, 255, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(circle at 50% 30%, rgba(0, 102, 255, 0.18) 0%, rgba(5, 5, 5, 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'blue-gradient': 'linear-gradient(135deg, #0066FF 0%, #00A3FF 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
