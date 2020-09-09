module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'no-console': 'warn',
    'prefer-const': 'off',
    'no-shadow': 'off',
    'default-case': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
