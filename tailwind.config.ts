import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
