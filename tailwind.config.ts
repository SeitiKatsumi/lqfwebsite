import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        porcelain: "#F7F6F3",
        mist: "#E8E6E1",
        mineral: "#D8D2C7",
        ash: "#9A9994",
        graphite: "#3F3F3B",
        brass: "#B8A06A"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(63, 63, 59, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
