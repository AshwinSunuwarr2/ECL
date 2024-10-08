/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your global color palette here
        primary: '#889C9B',
        background: '#B2BEBF',
        txt: '#486966',
        secondary: '#3B3936',
        danger: '#BD2A2E',
        // You can also create a custom shade scale
        brand: {
          light: '#3ABEFF',
          DEFAULT: '#1DA1F2',
          dark: '#0A74DA',
        },
      },
      fontFamily: {
        primary: ['nunito', 'serif'],
        title: ['Zilla Slab', 'serif'],
      },
    },
  },
  plugins: [],
}

