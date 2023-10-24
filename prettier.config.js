/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} */
const config = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "next",
    "react",
    "<BUILT_IN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "",
    "~",
    "^[./~]",
    "",
    "<TYPES>",
    "<TYPES>^[./~]",
  ],
  tailwindConfig: "./apps/react-auto-columns-demo/tailwind.config.ts",
};

export default config;
