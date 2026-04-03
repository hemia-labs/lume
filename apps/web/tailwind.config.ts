import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{vue,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        xl: "var(--radius-lg)",
      },
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
      }
    }
  },
  plugins: []
} satisfies Config
