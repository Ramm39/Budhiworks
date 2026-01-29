import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          base: "#0B0F19",
          tile: "rgba(255, 255, 255, 0.03)",
          border: "rgba(255, 255, 255, 0.06)",
        },
        accent: {
          blue: "#4F7DF3",
          cyan: "#22D3EE",
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "grid-pattern-light": "linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "16px 16px",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(79, 125, 243, 0.3)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.2)",
        "tile-hover": "0 8px 32px rgba(79, 125, 243, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
