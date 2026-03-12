import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#5A7AEA",
          mint: "#A6E3D4",
          yellow: "#FFE6A7",
          dark: "#1E293B"
        }
      },
      borderRadius: {
        "2xl": "1.5rem",
        "3xl": "2rem"
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;

