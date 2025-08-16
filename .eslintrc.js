

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:lit/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'lit/a11y-language': 'warn',
    'lit/no-duplicate-template-bindings': 'warn',
    'lit/no-invalid-html': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  plugins: ['lit', '@typescript-eslint'],
};


