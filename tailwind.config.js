/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
theme: {
  extend: {
    animation: {
      'reveal-up': 'revealUp 0.8s cubic-bezier(0, 0, 0.2, 1) forwards',
      'fade-in-blur': 'fadeInBlur 1.5s ease-out forwards',
    },
    keyframes: {
      revealUp: {
        '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
        '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
      },
      fadeInBlur: {
        '0%': { opacity: '0', filter: 'blur(20px)' },
        '100%': { opacity: '1', filter: 'blur(0px)' },
      }
    }
  }
}
}