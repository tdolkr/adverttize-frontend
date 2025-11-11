import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-poppins)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        display: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          DEFAULT: "#fbbf24",
          dark: "#d97706"
        }
      },
      boxShadow: {
        glow: "0 0 50px rgba(251, 191, 36, 0.25)"
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.85) 100%)",
        "feature-overlay":
          "linear-gradient(180deg, rgba(21,21,21,0.4) 0%, rgba(10,10,10,0.9) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
