module.exports = {
  extends: ['eslint:recommended', 'turbo', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint', 'jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['dist', 'node_modules'],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'no-console': 1,
  },
};
