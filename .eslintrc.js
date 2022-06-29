module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  globals: {
    describe: true,
    it: true,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 0 }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 'off',
    'max-classes-per-file': ['error', 2],
    'no-prototype-builtins': 0,
  },
};
