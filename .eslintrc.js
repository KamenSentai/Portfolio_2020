const { resolve } = require('path')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  globals: {
    hj: true,
    cy: true,
    Cypress: true,
  },
  rules: {
    'max-len': ['warn', {
      code: 100,
      ignoreComments: true,
      ignoreStrings: true,
      ignorePattern: 'd=([s]*?)',
    }],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-default-prop': [1],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
              'assets': resolve(__dirname, 'assets'),
              '~assets': resolve(__dirname, 'assets'),
              '~components': resolve(__dirname, 'components'),
              '~plugins': resolve(__dirname, 'plugins'),
              '~pages': resolve(__dirname, 'pages'),
              '~router': resolve(__dirname, '.nuxt/router'),
              'static': resolve(__dirname, 'static'),
              '~static': resolve(__dirname, 'static'),
              '~store': resolve(__dirname, '.nuxt/store'),
            }
          }
        }
      }
    }
  }
}
