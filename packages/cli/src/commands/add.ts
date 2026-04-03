import path from "path"
import fs from "fs-extra"
import pc from "picocolors"
import { createRequire } from "module"

const require = createRequire(import.meta.url)

function resolveRegistryPath() {
  return path.dirname(
    require.resolve("@hemia/ui-registry/package.json")
  )
}

export async function add(name: string) {
  const registryRoot = resolveRegistryPath()
  const source = path.join(registryRoot, "registry", name)

  if (!(await fs.pathExists(source))) {
    console.log(pc.red(`❌ Component "${name}" not found in registry`))
    process.exit(1)
  }

  const target = path.resolve(process.cwd(), "src/components/ui", name)

  await fs.copy(source, target, {
    filter: (src) => !src.endsWith("meta.json")
  })

  console.log(pc.green(`✅ Component "${name}" added to src/components/ui/${name}`))
}
