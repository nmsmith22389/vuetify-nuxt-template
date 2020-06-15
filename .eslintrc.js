/**
 * @typedef {import('@nmsmith22389/eslint-config/types/eslint').Linter.Config<Rules>} Config
 * @template {import('@nmsmith22389/eslint-config/types/eslint').Linter.RulesRecord} Rules
 */

/**
 * @typedef {import('@nmsmith22389/eslint-config/types/eslint').ESLintRules} ESLintRules
 * @typedef {import('@nmsmith22389/eslint-config/types/import').ImportRules} ImportRules
 * @typedef {import('@nmsmith22389/eslint-config/types/typescript').TypescriptRules} TypescriptRules
 */

/**
 * @type {Config<ESLintRules & ImportRules & TypescriptRules>}
 */
module.exports = {
    root: true,
    parserOptions: {
        project: './tsconfig.eslint.json',
        // extraFileExtensions: ['.vue'],
    },
    extends: [
        '@nuxtjs',
        // '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        '@nmsmith22389/eslint-config',
    ],
    rules: {
        'no-prototype-builtins': 'warn',
    },
};
