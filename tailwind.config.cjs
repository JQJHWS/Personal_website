/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'SF Pro Text', 'Inter', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      boxShadow: {
        'glow-brand': '0 0 40px rgba(34, 211, 238, 0.45)',
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at top, rgba(34,211,238,0.18), transparent 55%), radial-gradient(circle at bottom, rgba(56,189,248,0.12), transparent 55%)',
      },
    },
  },
  plugins: [],
};

