/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "800px" },
        sm: { max: "639px" },
        "-sm": { min: "639px" },
      },
      colors: {
        "gdsc-color-blue": '#4385F3'
      },
      backgroundImage: {
        'hero': "url('/src/images/banner(1).png')",
      },
    },
  },
  plugins: [],
};
