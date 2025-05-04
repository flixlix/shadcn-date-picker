import { useState } from "react"

export const PM_OPTIONS = ["pnpm", "npm", "yarn", "bun"] as const
export const DEFAULT_PM = "pnpm" as const
export type PackageManager = (typeof PM_OPTIONS)[number]

/**
 * Get the package manager from local storage or use the default one.
 * @returns package manager to use
 */
export function usePM() {
  const [pm, setPM] = useState<PackageManager>(DEFAULT_PM)
  const setPackageManager = (newPM: PackageManager) => {
    setPM(newPM)
    localStorage.setItem("package-manager", newPM)
  }
  const getPackageManager = () => {
    const storedPM = localStorage.getItem("package-manager") as PackageManager
    return storedPM || DEFAULT_PM
  }
  const resetPackageManager = () => {
    setPM(DEFAULT_PM)
    localStorage.removeItem("package-manager")
  }
  return {
    pm,
    setPackageManager,
    getPackageManager,
    resetPackageManager,
  }
}
