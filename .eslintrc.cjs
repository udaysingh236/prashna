module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended, plugin:jest/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'jest'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'linebreak-style': 0,
    'object-curly-newline': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'no-param-reassign': ['error', { props: false }],
    'react/jsx-one-expression-per-line': 0,
  },
};
