import fs from "node:fs"

export function hasDependency(name: string): boolean {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"))

  return Boolean(
    pkg.dependencies?.[name] ||
    pkg.devDependencies?.[name]
  )
}