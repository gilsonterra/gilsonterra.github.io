import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        fluid: "calc(1vw + 1rem)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      "patrick-hand": ["var(--patrick-hand)", "cursive"],
      "ballo-paaji-2": ["var(--ballo-paaji-2)", "cursive"],
      righteous: ["var(--righteous)", "cursive"],
    },
  },
  plugins: [],
} satisfies Config;
