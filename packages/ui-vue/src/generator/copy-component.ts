import path from "path"
import fs from "fs-extra"
import { resolveRegistryPath } from "./resolve-registry"

export async function copyComponent(name: string) {
  const registryRoot = resolveRegistryPath()

  const source = path.join(registryRoot, "registry", name)
  const target = path.resolve(process.cwd(), "src/components/ui", name)

  await fs.copy(source, target, {
    filter: (src) => !src.endsWith("meta.json")
  })

  console.log(`✅ Component "${name}" added to src/components/ui/${name}`)
}
