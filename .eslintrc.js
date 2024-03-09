// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	ignorePatterns: ["launcher", "docs", "packages/**"],
	extends: ["@typescript-rust-turbo/eslint-config/index.js"],
	parserOptions: {
		project: true
	}
};
