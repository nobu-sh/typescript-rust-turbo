/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ["@typescript-rust-turbo/eslint-config/next.js"],
	parserOptions: {
		project: true
	}
};
