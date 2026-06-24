import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orbilink: {
          50: "#E8F0FD",
          100: "#D1E1FB",
          200: "#A3C3F7",
          300: "#75A5F3",
          400: "#6194F6",
          500: "#4984E3",
          600: "#3173D0",
          700: "#1863BD",
          800: "#0052AA",
          900: "#004288",
          950: "#003166",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
