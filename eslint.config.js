import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-multiple-empty-lines': 'warn',
      'no-tabs': 'warn',
      indent: ['warn', 2],
      quotes: ['warn', 'single'],
      'jsx-quotes': ['warn', 'prefer-single'],
      semi: ['error', 'never'],
      eqeqeq: 'error',
    },
  },
]
