module.exports = {
  root: true,
  extends: ['eslint-config-custom/eslint-next'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
