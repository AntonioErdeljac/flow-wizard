module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ['*.test.tsx'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'no-await-in-loop': 0,
    'consistent-return': 0,
    'max-len': ['error', { code: 300 }],
    'react/require-default-props': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
