import js from '@eslint/js';
import globals from 'globals';

// The new @typescript-eslint is split into parser + plugin
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

// Prettier
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    // Apply to TS + TSX files
    files: ['**/*.{ts,tsx}'],

    // Set up the language environment
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      globals: {
        vi: true,
        describe: true,
        it: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
        beforeAll: true,
        afterAll: true,
        ...globals.browser,
      },
      // ecmaFeatures: { jsx: true }, // optional if parser is set
    },

    // Register your plugins
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },

    // Merge recommended configs + custom rules
    rules: {
      // Base JS recommended
      ...js.configs.recommended.rules,

      // TypeScript recommended
      ...tsPlugin.configs.recommended.rules,

      // React recommended
      ...reactPlugin.configs.recommended.rules,

      // React Hooks recommended
      ...reactHooksPlugin.configs.recommended.rules,

      // React Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Stop yelling at me for not importing React
      'react/react-in-jsx-scope': 'off',

      // Turn off explicit return type for TS
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Prettier last – disables style rules & runs Prettier
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
  },
];
