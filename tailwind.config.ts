import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1B2A33",
          light: "#25394480",
          soft: "#28404D",
        },
        celadon: {
          DEFAULT: "#EEF2EC",
          dark: "#DEE6DA",
        },
        paper: "#FAF8F2",
        seal: {
          DEFAULT: "#C1442D",
          dark: "#9E3521",
        },
        brass: {
          DEFAULT: "#B08D57",
          light: "#D8C293",
        },
        charcoal: "#2B2B28",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderColor: {
        hairline: "#1B2A331f",
      },
    },
  },
  plugins: [],
};

export default config;
