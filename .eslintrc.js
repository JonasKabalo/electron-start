module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    'html', 'vue',
  ],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    __static: true,
  },
};
