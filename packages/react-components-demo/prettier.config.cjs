const config = require("../../prettier.config.cjs");

/** @type {import("prettier").Config} */
module.exports = {
  ...config,
  plugins: [...config.plugins, require.resolve("prettier-plugin-tailwindcss")],
};
