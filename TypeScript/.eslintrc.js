module.exports = {
  env: {
    browser: false,
    commonjs: false,
    es2021: false,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  rules: {
    'no-console': 'off'
  },
  ignorePatterns: [
      'global.d.ts'
  ]
}
