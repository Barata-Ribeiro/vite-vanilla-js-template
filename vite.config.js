import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import autoprefixer from "autoprefixer";

export default defineConfig({
  root: "src",
  base: "./",
  build: {
    outDir: "../dist",
  },
  plugins: [
    eslint({
      cache: false,
      fix: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
