import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import { createHtmlPlugin } from "vite-plugin-html";
import svgrPlugin from "vite-plugin-svgr";
import path from "path";
import EnvironmentPlugin from "vite-plugin-environment";
// const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://wakafalhambra.xyz",
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "/src") }],
  },
  plugins: [
    react(),
    legacy({ modernPolyfills: ["features/string/replace-all"] }),
    svgrPlugin(),
    createHtmlPlugin({ minify: true }),
    EnvironmentPlugin("all", { prefix: "VITE_REACT_APP_" }),
  ],
});
