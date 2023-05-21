const config = {
  root: true,
  extends: ["eslint-config-custom"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.json",
      "./apps/*/tsconfig.json",
      "./packages/*/tsconfig.json",
    ],
  },
  settings: {
    next: {
      rootDir: ["apps/*"],
    },
    tailwindcss: {
      config: __dirname + "/apps/react-auto-columns-demo/tailwind.config.ts",
    },
  },
};

module.exports = config;
