module.exports = {
  root: true,
  extends: ['eslint-config-custom/eslint-server'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
