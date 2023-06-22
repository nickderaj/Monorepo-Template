module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  globals: { React: 'readonly' },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
