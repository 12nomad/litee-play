/** @type {import('tailwindcss').Config} */
import * as defaultTheme from "tailwindcss/defaultTheme";
import * as flowbite from "flowbite/plugin";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['"Lobster"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [flowbite],
  darkMode: "class",
};
