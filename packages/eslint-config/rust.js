require("@ariesclark/eslint-config/eslint-patch");
const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");
process.env["ESLINT_PROJECT_ROOT"] = process.cwd();

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@ariesclark/eslint-config", "@ariesclark/eslint-config/node", "eslint-config-turbo"],
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    
    // Generated outputs
    "index.js",
    "index.d.ts",
  ],
  overrides: [
    {
      files: ["**/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
};
