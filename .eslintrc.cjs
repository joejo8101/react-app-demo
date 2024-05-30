module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // "plugin:prettier/recommended", // Add Prettier plugin
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'], // prettier plugin
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Additional rules
    '@typescript-eslint/explicit-function-return-type': 'warn', // Ensure function return types are specified
    '@typescript-eslint/no-explicit-any': 'warn', // Discourage the use of `any` type
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables that start with _
    'react/jsx-uses-react': 'off', // No need with React 17+ JSX transform
    'react/react-in-jsx-scope': 'off', // No need with React 17+ JSX transform
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }], // Prettier rules
    eqeqeq: 'error', // Require === and !==
    curly: 'error', // Require curly braces for all control statements
    'no-console': 'warn', // Warn on console.log statements
    'no-debugger': 'error', // Disallow debugger statements
    'consistent-return': 'warn', // Require return statements to either always or never specify values
    'no-unused-expressions': 'warn', // Disallow unused expressions
  },
};
