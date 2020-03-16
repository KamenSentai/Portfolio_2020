export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Alain Cao Van Truong',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  loading: {
    color: '#FFBF00',
    background: '#1A1A1A',
  },
  css: [
    '~assets/styles/index.scss',
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '~assets/styles/index.scss',
    ],
  },
  build: {
  },
}
