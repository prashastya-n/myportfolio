// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fff7f9',      // very light pinkish white (soft background)
        primary: '#4a2c2a',         // deep brownish-red (text, headings)
        accent: '#f4c2c2',          // soft cherry blossom pink (buttons, highlights)
        accentDark: '#dba3a3',      // deeper pink for hover states
        secondary: '#fcebea',       // pale blush/cream accent color
        textLight: '#8c6d6a',       // muted rose for secondary text
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
      },
    },
  },
  plugins: [],
};