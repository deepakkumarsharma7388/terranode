/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#161B26',     // logo jaisa navy-charcoal (hero background)
        accent: '#F26418',  // logo ka orange  ← yahi asli change hai
        slate: '#7C8595',   // logo ka grey (optional, kaam aaye to)
        cloud: '#F5F3EE',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
