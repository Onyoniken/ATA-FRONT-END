/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // add any other files that contain Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#001f3f',
      },

      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      // Keep any existing theme extensions here
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      // Keep any existing variant extensions here
    },
  },
  plugins: [
    // Add any plugins you're using here
  ],
}