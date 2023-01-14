module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './server/tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/no-cycle': 'off',
    radix: 'off',
    'no-plusplus': { allowForLoopAfterthoughts: true },
    'no-await-in-loop': 'off',
  },
};
