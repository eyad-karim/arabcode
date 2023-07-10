/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      red: {
        DEFAULT: "#C10000",
        light: "#F7BEBE",
        dark: "#8F0000"
      },
      white: {
        DEFAULT: "#FFFFFF",
        light: "#F1F1F1",
        semilight : "#DDDDDD"
      }

    }
  },
  plugins: [],
}
