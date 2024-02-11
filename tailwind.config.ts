import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#0B32FF",
      secondary: "#22264F",
      body: "#575757",
      lightBlue: "#F8F7FF",
      grey: "#E9E9E9",
      lightGrey: "#F9F9F9",
      success: "#00D27A",
      error: "#D20032",
      white: "#fff",
      transparent: "transparent"
    }
  },
  plugins: [],
};
export default config;
