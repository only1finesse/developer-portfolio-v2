/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1000px",
        xl: "1280px",
      },
      fontFamily: {
        burtons: "burtons",
        logoFont: ["Jost", "sans-serif"],
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        // darkBlue: '#1C3C67',
        darkBlue: '#0E223B',
        lightBlue: '#A8DADC',
        offBlue: '#457B9D',
        // lightWhite: "#c4cfde",
        offWhite: "#F1FAEE",
        designColor: "#E63946",
      },
      boxShadow: {
        shadowOne: "5px 5px 5px #1c1e22, -5px -5px 10px #141212",
      },
    },
  },
  plugins: [],
}