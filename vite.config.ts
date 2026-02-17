import { defineConfig } from "vite";

export default defineConfig({
  base: "/besttarot/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
});
