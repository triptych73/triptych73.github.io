/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0F1115',
        void: '#050505',
        panel: '#16191D',
        border: '#2A2E35',
        stone: '#F5F5F0',
        bronze: '#9A8C74',
        bronzeDark: '#5C5242',
        emerald: '#10B981',
        alert: '#EF4444',
        glass: 'rgba(255, 255, 255, 0.05)'
      },
      fontFamily: {
        header: ['Cinzel', 'serif'],
        ui: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
         'grid-pattern': "linear-gradient(to right, rgba(42, 46, 53, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(42, 46, 53, 0.3) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
}
