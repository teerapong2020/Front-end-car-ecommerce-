/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shadowWave: {
          "0%": { boxShadow: "0 0 0px rgba(35, 162, 109, 1)" },
          "100%": { boxShadow: "0 0 140px rgba(35, 162, 109, 1)" },
        },
      },
      animation: {
        shadowWave: "shadowWave 2s ",
      },
    },
  },
  plugins: [],
};
