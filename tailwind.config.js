/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "primary": "#49129C",
        "secondary": {
          100: "#C51297",
          200: "#831266",
        },
        "tertiary": "#EF2967",
      },
      fontFamily: {
        "parkinsans-bold": ["Parkinsans-Bold", "sans-serif"],
        "parkinsans-light": ["Parkinsans-Light", "sans-serif"],
        "parkinsans-medium": ["Parkinsans-Medium", "sans-serif"],
    },
  },
},
  plugins: [],
}

