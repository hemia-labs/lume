import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,tsx}",
    "../../packages/registry/registry/vue/**/*.{vue,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--lume-radius-lg)",
        md: "var(--lume-radius-md)",
        sm: "var(--lume-radius-sm)",
      },
      colors: {
        lume: {
          background: "hsl(var(--lume-background))",
          foreground: "hsl(var(--lume-foreground))",
          card: {
            DEFAULT: "hsl(var(--lume-card))",
            foreground: "hsl(var(--lume-card-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--lume-popover))",
            foreground: "hsl(var(--lume-popover-foreground))",
          },
          primary: {
            DEFAULT: "hsl(var(--lume-primary))",
            foreground: "hsl(var(--lume-primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--lume-secondary))",
            foreground: "hsl(var(--lume-secondary-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--lume-muted))",
            foreground: "hsl(var(--lume-muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--lume-accent))",
            foreground: "hsl(var(--lume-accent-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--lume-destructive))",
            foreground: "hsl(var(--lume-destructive-foreground))",
          },
          border: "hsl(var(--lume-border))",
          input: "hsl(var(--lume-input))",
          ring: "hsl(var(--lume-ring))",
          sidebar: {
            DEFAULT: "hsl(var(--lume-sidebar))",
            foreground: "hsl(var(--lume-sidebar-foreground))",
            primary: {
              DEFAULT: "hsl(var(--lume-sidebar-primary))",
              foreground: "hsl(var(--lume-sidebar-primary-foreground))",
            },
            accent: {
              DEFAULT: "hsl(var(--lume-sidebar-accent))",
              foreground: "hsl(var(--lume-sidebar-accent-foreground))",
            },
            border: "hsl(var(--lume-sidebar-border))",
            ring: "hsl(var(--lume-sidebar-ring))",
          },
          surface: "hsl(var(--lume-surface))",
          code: {
            highlight: "hsl(var(--lume-code-highlight))",
            number: "hsl(var(--lume-code-number))",
          },
          selection: {
            DEFAULT: "hsl(var(--lume-selection))",
            foreground: "hsl(var(--lume-selection-foreground))",
          },
        }
      }
    }
  },
  plugins: []
} satisfies Config
