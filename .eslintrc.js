module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    parserOptions: { ecmaVersion: 8, sourceType: 'module' },
    ignorePatterns: ['node_modules/*'],
    extends: ['eslint:recommended'],
    overrides: [
      {
        files: ['**/*.js', '**/*.jsx'],
        settings: {
          react: { version: 'detect' },
        },
        env: {
          browser: true,
          node: true,
          es6: true,
        },
        extends: [
          'eslint:recommended',
          'plugin:import/errors',
          'plugin:import/warnings',
          'plugin:import/typescript',
          'plugin:react/recommended',
          'plugin:react-hooks/recommended',
          'plugin:prettier/recommended'
        ],
        rules: {
          'no-restricted-imports': [
            'error',
            {
              patterns: ['@/features/*/*'],
            },
          ],
          'linebreak-style': ['error', 'unix'],
          'react/prop-types': 'off',

          'import/order': [
            'error',
            {
              groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
              'newlines-between': 'always',
              alphabetize: { order: 'asc', caseInsensitive: true },
            },
          ],
          'import/default': 'off',
          'import/no-named-as-default-member': 'off',
          'import/no-named-as-default': 'off',
  
          'react/react-in-jsx-scope': 'off',
  
          'no-unused-vars': ['error'],
  
          'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        },
      },
    ],
  };