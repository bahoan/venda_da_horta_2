/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#07AA1D',
        'brand-green-dark': '#058e18',
        'brand-orange': '#ff6b00',
        'brand-orange-light': '#ff8533',
        'brand-grey': '#E9E9E9',
        'brand-grey-dark': '#d1d1d1',
        text: {
          dark: '#1e293b',
          medium: '#475569',
          light: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
