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
        secondary: "#9855FF",
      },
      backgroundColor: {
        "button-secondary": "rgba(140, 69, 255, 0.40)",
        secondary: "#9855FF",
      },
      backgroundImage: {
        "black-shade":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 3.8%, #050208 86.04%)",
      },
      borderColor: {
        "button-secondary": "rgba(255, 255, 255, 0.15)",
        grey: "rgba(255, 255, 255, 0.15)",
        secondary: "rgba(152, 85, 255, 0.3)",
      },
      boxShadow: {
        "button-secondary": "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
        "hero-img":
          "0px -20px 70px 0px rgba(140, 69, 255, 0.25), 0px -19px 70px 0px rgba(140, 69, 255, 0.40)",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
