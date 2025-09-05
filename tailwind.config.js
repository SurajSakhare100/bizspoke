/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'canela': ['Canela Text', 'serif'],
      },
      colors: {
        'blue-100': 'var(--color-blue-100)',
        'blue-40': 'var(--color-blue-40)',
        'yellow-600': 'var(--color-yellow-600)',
        'bg-expertise': 'var(--color-bg-expertise)',
      },
    },
  },
  plugins: [],
}
