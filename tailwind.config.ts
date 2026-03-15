import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["\"Playfair Display\"", "Georgia", "\"Times New Roman\"", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f8f7f4",
          100: "#f0ede5",
          200: "#e0dbd0",
          300: "#c4bfb0",
          400: "#8c8678",
          500: "#1c1b16",
          600: "#131210",
          700: "#0a0907",
          800: "#070604",
          900: "#040301",
        },
        gold: {
          300: "#d4b96a",
          400: "#c4a030",
          500: "#a8861a",
          600: "#8a6e0a",
        },
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
      },
    },
  },
  plugins: [],
};
export default config;
