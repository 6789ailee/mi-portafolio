/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customBg: 'var(--bg-color)',
        customText: 'var(--text-primary)',
        accent: 'var(--text-accent)',
        secondary: 'var(--text-secondary)',
        
        'rosa-chillon': '#ff007f', 
        'lila-chillon': '#a855f7', 
        'azul-chillon': '#00d4ff', 
      },
      boxShadow: {
        'glass-rosa': '0 8px 32px 0 rgba(255, 0, 127, 0.37)',
        'glass-azul': '0 8px 32px 0 rgba(0, 212, 255, 0.37)',
        'neon-glow': '0 0 15px rgba(168, 85, 247, 0.5)',
      },
      animation: {
        'reveal-up': 'revealUp 0.8s cubic-bezier(0, 0, 0.2, 1) forwards',
        'fade-in-blur': 'fadeInBlur 1.5s ease-out forwards',
        'infinite-scroll': 'scroll 30s linear infinite',
        
        'scan': 'scan 3s linear infinite',
        'blink-fast': 'blink 0.5s step-end infinite',
        'glitch': 'glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite',
        'gradient-x': 'gradientX 3s ease infinite', 
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite', 
      },
      keyframes: {
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeInBlur: {
          '0%': { opacity: '0', filter: 'blur(20px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' },
        },
        scan: {
          '0%': { top: '-20%' },
          '100%': { top: '120%' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.1)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    }
  },
  plugins: [],
}