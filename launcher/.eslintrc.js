/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ["@typescript-rust-turbo/eslint-config/index.js"],
	parserOptions: {
		project: true
	}
};
