import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), peerDepsExternal(), tailwindcss()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "SharedUI",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
