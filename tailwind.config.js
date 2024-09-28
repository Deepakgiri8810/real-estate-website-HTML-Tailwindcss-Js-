/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.75rem",
        base: "0.875rem",
        md: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
    },

    fontFamily:{
      poppins:["Poppins", "sans-serif"]
    }
  },
  plugins: [],
};
