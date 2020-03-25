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
      { name: 'msapplication-TileColor', content: '#FFBF00' },
      { name: 'theme-color', content: '#FFBF00' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#FFBF00',
      },
    ],
  },
  loading: {
    color: '#FFBF00',
    background: '#1A1A1A',
  },
  css: [
    '~/assets/styles/index.scss',
  ],
  router: {
    middleware: [
      'route',
    ],
  },
  plugins: [
    '~/plugins/vue-mixin.js',
    '~/plugins/vue-meta.js',
    '~/plugins/vue-mq.js',
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
      '~/assets/styles/index.scss',
    ],
  },
  generate: {
    routes: [
      '/project/assoie-louvart',
      '/project/meerodrop',
      '/project/offit',
      '/project/scaneat',
      '/project/gaetan-lefebvre',
      '/project/chatmean',
    ],
  },
  build: {
    extend(configuration, { isDev, isClient }) {
      if (isDev && isClient) {
        configuration.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[name]__[local]--[hash:base64:5]',
        },
      },
    },
  },
}
