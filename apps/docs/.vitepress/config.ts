import { defineConfig } from "vitepress"

export default defineConfig({
  title: "@hemia/ui-vue",
  description: "A shadcn-inspired component system for Vue 3 + Tailwind CSS",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/introduction" },
      { text: "Components", link: "/components/button" }
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/guide/introduction" },
          { text: "Installation", link: "/guide/installation" }
        ]
      },
      {
        text: "Components",
        items: [
          { text: "Button", link: "/components/button" }
        ]
      }
    ]
  }
})
