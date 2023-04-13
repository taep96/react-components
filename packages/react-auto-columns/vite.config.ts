import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    // Prevent mangling in development for easier debugging
    minifyIdentifiers: process.env.NODE_ENV === "production",
  },
  
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "lib/columns.tsx"),
      name: "react-auto-columns",
      fileName: (format) => `lib.${format}.js`,
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
  },
});
