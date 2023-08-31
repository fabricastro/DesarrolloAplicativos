/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD4556",
        secondary: "#BD3944",
        oscuro: "#53212B",
        blanco: "#FFFBF5",
      },
    },
  },
  plugins: [nextui()],
};
