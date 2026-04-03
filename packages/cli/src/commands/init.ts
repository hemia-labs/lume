import fs from "fs-extra"
import path from "path"
import pc from "picocolors"

export async function init() {
  const configPath = path.resolve(process.cwd(), "hemia.config.json")

  if (await fs.pathExists(configPath)) {
    console.log(pc.yellow("⚠️  hemia.config.json already exists"))
    return
  }

  const config = {
    style: "default",
    tailwind: {
      config: "tailwind.config.ts",
      css: "src/assets/globals.css",
      prefix: ""
    },
    aliases: {
      components: "@/components",
      utils: "@/lib/utils"
    }
  }

  await fs.writeJson(configPath, config, { spaces: 2 })
  console.log(pc.green("✅ hemia.config.json created"))
}
