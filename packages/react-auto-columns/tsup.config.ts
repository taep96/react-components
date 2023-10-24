import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: {
    index: "src/columns.tsx",
  },
  dts: true,
  format: ["cjs", "esm"],
  clean: !options.watch,
  banner: {
    js: '"use client";',
  },
}));
