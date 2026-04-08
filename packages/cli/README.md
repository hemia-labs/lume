# @hemia/lume

CLI for adding Lume UI components to your project. Inspired by shadcn/ui.

## Quick start

```bash
bunx @hemia/lume@latest init
bunx @hemia/lume@latest add button
```

## Commands

### `init`

Initialize Lume in your project:

```bash
bunx @hemia/lume@latest init

# With template
bunx @hemia/lume@latest init -t nuxt

# With preset
bunx @hemia/lume@latest init --preset dashboard
```

Creates `lume.config.json` and sets up Tailwind configuration.

### `add`

Add components to your project:

```bash
# Single component
bunx @hemia/lume@latest add button

# Multiple components
bunx @hemia/lume@latest add button card badge

# All components
bunx @hemia/lume@latest add --all

# Skip confirmation
bunx @hemia/lume@latest add button -y
```

Components are **copied to your project** (not installed from npm).

### `list`

List available components:

```bash
bunx @hemia/lume@latest list

# For specific framework
bunx @hemia/lume@latest list --framework react
```

## How it works

1. Components are stored in `@hemia/lume-registry`
2. CLI detects your framework from `lume.config.json`
3. Copies component files to `src/components/ui/`
4. Installs required dependencies automatically

## Framework support

- ✅ **Vue 3** — Full support
- 🚧 **React** — Coming soon
- 🚧 **Svelte** — Coming soon
- 🚧 **Astro** — Coming soon

## Configuration

The `lume.config.json` file:

```json
{
  "framework": "vue",
  "style": "default",
  "template": "vite-vue",
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/assets/globals.css"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## Templates

- `vite-vue` — Vite + Vue 3
- `nuxt` — Nuxt 3
- `next` — Next.js (coming soon)

## Presets

- `dashboard` — Button, Card, Input, Select, Table, Chart
- `auth` — Button, Input, Card, Form
- `landing` — Button, Card, Hero, Features, CTA

## License

MIT
