import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        background: "var(--background)",
        "background-dark": "var(--background-dark)",
        "background-darkest": "var(--background-darkest)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
export default config;
