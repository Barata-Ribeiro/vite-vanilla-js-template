import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  globalIgnores(['dist/**/*', 'build/**/*', 'node_modules/*']),
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    settings: {
      'import/core-modules': ['eslint/config'],
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.cjs', '.ts', '.mts', '.cts'],
          moduleDirectory: ['node_modules', 'src/'],
          paths: ['src'],
        },
      },
    },
    languageOptions: {
      globals: { ...globals.browser },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      indent: 'off',
      'no-unused-vars': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prettier/prettier': 'error',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/unambiguous': 'off',
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'script',
    },
  },
  eslintPluginPrettierRecommended,
]);
