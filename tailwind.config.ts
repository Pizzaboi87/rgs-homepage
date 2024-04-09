import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cardBg: "linear-gradient(112.92deg, #7fc3e71f 24.55%, #587b861f 92.75%)",
        contactBg: "linear-gradient(98.89deg, #132a35 2.06%, #0b1926 106.72%);"
      },
      fontFamily: {
        segoe: ["Segoe UI", "sans-serif"],
      },
      colors: {
        active: "#71d37b",
        text: "#5ab163",
        normal: "#4f4f4f",
        darkGrey: "#112831",
        darkBackground: "#0c1b28"
      }
    },
  },
  plugins: [],
};
export default config;
