import { ThemeOptions } from "@mui/material"
import darkPalette from "./palettes/dark"
import lightPalette from "./palettes/light"

function getDesignTokents(mode: "light" | "dark"): ThemeOptions {
  return {
    palette: mode === "dark" ? darkPalette : lightPalette
  }
}

export default getDesignTokents