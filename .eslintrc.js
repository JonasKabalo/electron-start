module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
    'plugin:vue/recommended'
  ],
  globals: {
    __static: true,
  },
  rules: {
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-console': 0,
    'import/extensions': 0,
    'import/newline-after-import': 0,
    'no-multi-assign': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/component-name-in-template-casing': ['warn', 'kebab-case'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.test.js', 'src/**/*.js']
    }]
  }
};
