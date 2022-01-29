module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    importResolver: {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-img-element': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    '@typescript-eslint/no-var-requires': 0,
  },
};
