module.exports = {
	env: {browser: true, es2021: true},
	extends: [
		'eslint:recommended',
		'xo',
		'prettier',
		'next/core-web-vitals',
		'plugin:react-hooks/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
	rules: {
		'no-unused-vars': 'off',
		'no-unused-expressions': 'off',
		'no-unused-labels': 'off',
		'no-unused-vars': 'off',
		'no-unused-expressions': 'off',
		'new-cap': 'off',
		'no-alert': 'off',
	},
};
