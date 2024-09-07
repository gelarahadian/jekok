import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        "button-secondary": "rgba(140, 69, 255, 0.40)",
      },
      borderColor: {
        "button-secondary": "rgba(255, 255, 255, 0.15)",
        "header-bottom": "rgba(255, 255, 255, 0.15)",
      },
      boxShadow: {
        "button-secondary": "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
