const { author, config } = require('./package.json')

const title = `${author.name} | Junior full-stack developer`
const description = 'My name is Alain CAO VAN TRUONG. I am a full-stack web developer student and I currently study at HÉTIC, a web school based in Montreuil.'
const color = '#FF4000'

const projects = [
  'assoie-louvart',
  'meerodrop',
  'offit',
  'scaneat',
  'gaetan-lefebvre',
  'chatmean',
].map((name) => `/project/${name}`)

const BASE_URL = process.env.NODE_ENV === 'production'
  ? author.url
  : `http://localhost:${config.nuxt.port}`

export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: `${author.name} | %s`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: color },
      { name: 'theme-color', content: color },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: BASE_URL },
      { name: 'og:image', content: `${BASE_URL}/og.png` },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@AlainCVT' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${BASE_URL}/twitter.png` },
      { name: 'twitter:image:alt', content: author.name },
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
        color,
      },
    ],
  },
  loading: {
    color,
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
    '~/plugins/vue-mq.js',
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
  ],
  styleResources: {
    scss: [
      '~/assets/styles/tools/_index.scss',
    ],
  },
  generate: {
    routes: projects,
  },
  sitemap: {
    hostname: author.url,
    routes: [
      {
        url: '/',
        priority: 1,
      },
      {
        url: '/about',
        priority: 0.8,
      },
      ...projects.map((project) => ({
        url: project,
        priority: 0.6,
      })),
    ],
    defaults: {
      changefreq: 'monthly',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true,
    },
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
