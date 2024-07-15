/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],  // เพิ่มฟอนต์ที่ต้องการ
      },
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
  plugins: [
    flowbite.plugin(),
  ],
};
