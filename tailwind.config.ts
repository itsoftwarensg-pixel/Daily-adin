import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        textGray: "#5F5F5F",
        primaryRed: "#FF0C0C",
        gray: {
          1: "#F8F6F6",
          2: "#F5F5F5",
          3: "#ECECEC",
          4: "#EEEEEE",
          5: "#D0D0D0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
