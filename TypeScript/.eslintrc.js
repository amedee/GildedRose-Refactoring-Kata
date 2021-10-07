module.exports = {
  env: {
    browser: false,
    commonjs: false,
    es2021: false,
    node: true,
    mocha: true
  },
  extends: [
    'eslint:recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-console': 'off'
  }
}
