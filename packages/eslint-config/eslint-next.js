module.exports = {
  extends: [
    'next',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  globals: { React: 'readonly' },
  env: { node: true, jest: true },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'max-len': 0,
    quotes: 0,
    'comma-dangle': 0,
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '_' }],
    '@typescript-eslint/no-unused-vars': 0,
    'no-param-reassign': 0,
    'no-console': 'warn',
    'linebreak-style': 0,
    'import/no-anonymous-default-export': 0,
    'import/extensions': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': [
      1,
      {
        devDependencies: ['**/*.test.tsx', '**/*.spec.tsx', '**/test-utils.tsx', '**/config.ts'],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
};
