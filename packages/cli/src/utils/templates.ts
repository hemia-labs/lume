/**
 * Templates for project initialization
 */

export const GLOBALS_CSS_TEMPLATE_VUETIFY = `@layer vuetify;
@import "tailwindcss";
@import "vuetify/styles" layer(vuetify);

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

@theme inline {
  --color-lume-border: var(--lume-border);
  --color-lume-background: var(--lume-background);
  --color-lume-foreground: var(--lume-foreground);
  --color-lume-primary: var(--lume-primary);
  --color-lume-primary-foreground: var(--lume-primary-foreground);
  --color-lume-secondary: var(--lume-secondary);
  --color-lume-secondary-foreground: var(--lume-secondary-foreground);
  --color-lume-muted: var(--lume-muted);
  --color-lume-muted-foreground: var(--lume-muted-foreground);
  --color-lume-accent: var(--lume-accent);
  --color-lume-accent-foreground: var(--lume-accent-foreground);
  --color-lume-card: var(--lume-card);
  --color-lume-card-foreground: var(--lume-card-foreground);
  --color-lume-input: var(--lume-input);
  --color-lume-ring: var(--lume-ring);
  --color-lume-destructive: var(--lume-destructive);
  --color-lume-destructive-foreground: var(--lume-destructive-foreground);

  --lume-radius-sm: 0.375rem;
  --lume-radius-md: 0.5rem;
  --lume-radius-lg: 0.75rem;
  --lume-radius: 0.625rem;
}

:root {
  --lume-primary: 222.2 47.4% 11.2%;
  --lume-primary-foreground: 210 40% 98%;

  --lume-secondary: 210 40% 96.1%;
  --lume-secondary-foreground: 222.2 47.4% 11.2%;

  --lume-destructive: 0 84.2% 60.2%;
  --lume-destructive-foreground: 210 40% 98%;

  --lume-muted: 210 40% 96.1%;
  --lume-muted-foreground: 215.4 16.3% 46.9%;

  --lume-accent: 210 40% 96.1%;
  --lume-accent-foreground: 222.2 47.4% 11.2%;

  --lume-border: 214.3 31.8% 91.4%;
  --lume-input: 214.3 31.8% 91.4%;
  --lume-ring: 210 5% 80% / 30%;

  --lume-background: 0 0% 100%;
  --lume-foreground: 222.2 47.4% 11.2%;

  --lume-card: 0 0% 100%;
  --lume-card-foreground: 222.2 47.4% 11.2%;
}

[data-theme="dark"] {
  --lume-primary: 210 40% 98%;
  --lume-primary-foreground: 222.2 47.4% 11.2%;

  --lume-secondary: 217.2 32.6% 17.5%;
  --lume-secondary-foreground: 210 40% 98%;

  --lume-destructive: 0 62.8% 30.6%;
  --lume-destructive-foreground: 210 40% 98%;

  --lume-muted: 217.2 32.6% 17.5%;
  --lume-muted-foreground: 215 20.2% 65.1%;

  --lume-accent: 217.2 32.6% 17.5%;
  --lume-accent-foreground: 210 40% 98%;

  --lume-border: 217.2 32.6% 17.5%;
  --lume-input: 217.2 32.6% 17.5%;
  --lume-ring: 217.2 32.6% 50% / 30%;

  --lume-background: 222.2 84% 4.9%;
  --lume-foreground: 210 40% 98%;

  --lume-card: 222.2 84% 4.9%;
  --lume-card-foreground: 210 40% 98%;
}

@layer base {
  * {
    border-color: hsl(var(--lume-border));
  }

  html,
  body,
  #app {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif !important;
  }

  body {
    background-color: hsl(var(--lume-background));
  }
}

@supports (color: color-mix(in lab, red, red)) {
  * {
    outline-color: color-mix(in oklab, var(--lume-ring) 50%, transparent);
  }
}

`

export const GLOBALS_CSS_TEMPLATE = `@import "tailwindcss";

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

@theme inline {
  --color-lume-border: var(--lume-border);
  --color-lume-background: var(--lume-background);
  --color-lume-foreground: var(--lume-foreground);
  --color-lume-primary: var(--lume-primary);
  --color-lume-primary-foreground: var(--lume-primary-foreground);
  --color-lume-secondary: var(--lume-secondary);
  --color-lume-secondary-foreground: var(--lume-secondary-foreground);
  --color-lume-muted: var(--lume-muted);
  --color-lume-muted-foreground: var(--lume-muted-foreground);
  --color-lume-accent: var(--lume-accent);
  --color-lume-accent-foreground: var(--lume-accent-foreground);
  --color-lume-card: var(--lume-card);
  --color-lume-card-foreground: var(--lume-card-foreground);
  --color-lume-input: var(--lume-input);
  --color-lume-ring: var(--lume-ring);
  --color-lume-destructive: var(--lume-destructive);
  --color-lume-destructive-foreground: var(--lume-destructive-foreground);

  --lume-radius-sm: 0.375rem;
  --lume-radius-md: 0.5rem;
  --lume-radius-lg: 0.75rem;
  --lume-radius: 0.625rem;
}

:root {
  --lume-primary: 222.2 47.4% 11.2%;
  --lume-primary-foreground: 210 40% 98%;

  --lume-secondary: 210 40% 96.1%;
  --lume-secondary-foreground: 222.2 47.4% 11.2%;

  --lume-destructive: 0 84.2% 60.2%;
  --lume-destructive-foreground: 210 40% 98%;

  --lume-muted: 210 40% 96.1%;
  --lume-muted-foreground: 215.4 16.3% 46.9%;

  --lume-accent: 210 40% 96.1%;
  --lume-accent-foreground: 222.2 47.4% 11.2%;

  --lume-border: 214.3 31.8% 91.4%;
  --lume-input: 214.3 31.8% 91.4%;
  --lume-ring: 210 5% 80% / 30%;

  --lume-background: 0 0% 100%;
  --lume-foreground: 222.2 47.4% 11.2%;

  --lume-card: 0 0% 100%;
  --lume-card-foreground: 222.2 47.4% 11.2%;
}

[data-theme="dark"] {
  --lume-primary: 210 40% 98%;
  --lume-primary-foreground: 222.2 47.4% 11.2%;

  --lume-secondary: 217.2 32.6% 17.5%;
  --lume-secondary-foreground: 210 40% 98%;

  --lume-destructive: 0 62.8% 30.6%;
  --lume-destructive-foreground: 210 40% 98%;

  --lume-muted: 217.2 32.6% 17.5%;
  --lume-muted-foreground: 215 20.2% 65.1%;

  --lume-accent: 217.2 32.6% 17.5%;
  --lume-accent-foreground: 210 40% 98%;

  --lume-border: 217.2 32.6% 17.5%;
  --lume-input: 217.2 32.6% 17.5%;
  --lume-ring: 217.2 32.6% 50% / 30%;

  --lume-background: 222.2 84% 4.9%;
  --lume-foreground: 210 40% 98%;

  --lume-card: 222.2 84% 4.9%;
  --lume-card-foreground: 210 40% 98%;
}

@layer base {
  * {
    border-color: hsl(var(--lume-border));
  }

  html,
  body,
  #app {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif !important;
  }

  body {
    background-color: hsl(var(--lume-background));
  }
}

@supports (color: color-mix(in lab, red, red)) {
  * {
    outline-color: color-mix(in oklab, var(--lume-ring) 50%, transparent);
  }
}

`

export interface TemplateConfig {
  framework: string
  template?: string
  globalsCssPath: string
  componentsPath: string
  utilsPath: string
}

/**
 * Get template configuration based on framework and template type
 */
export function getTemplateConfig(
  framework: string,
  template?: string
): TemplateConfig {
  // Default paths for different frameworks
  const configs: Record<string, Partial<TemplateConfig>> = {
    "vite-vue": {
      globalsCssPath: "src/assets/globals.css",
      componentsPath: "src/components",
      utilsPath: "src/lib/utils"
    },
    nuxt: {
      globalsCssPath: "assets/css/globals.css",
      componentsPath: "components",
      utilsPath: "utils"
    },
    next: {
      globalsCssPath: "src/app/globals.css",
      componentsPath: "src/components",
      utilsPath: "src/lib/utils"
    }
  }

  const templateKey = template || `vite-${framework}`
  const config = configs[templateKey] || configs["vite-vue"]

  return {
    framework,
    template: templateKey,
    globalsCssPath: config.globalsCssPath!,
    componentsPath: config.componentsPath!,
    utilsPath: config.utilsPath!
  }
}
