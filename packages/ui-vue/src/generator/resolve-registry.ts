import path from "path"
import { createRequire } from "module"

const require = createRequire(import.meta.url)

export function resolveRegistryPath() {
  return path.dirname(
    require.resolve("@hemia/ui-registry/package.json")
  )
}
