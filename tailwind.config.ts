import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: "#991b1b",
          dim: "rgba(153,27,27,0.2)",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 1%)" },
          "30%": { transform: "translate(-1%, 4%)" },
          "40%": { transform: "translate(4%, -2%)" },
          "50%": { transform: "translate(-3%, 3%)" },
          "60%": { transform: "translate(2%, -4%)" },
          "70%": { transform: "translate(-4%, 2%)" },
          "80%": { transform: "translate(1%, -1%)" },
          "90%": { transform: "translate(3%, 3%)" },
        },
      },
      animation: {
        grain: "grain 0.3s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
