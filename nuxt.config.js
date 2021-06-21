export default {
  ssr: false,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'workflow-builder-ui',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/components.ts', '@/plugins/filters.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo',
  ],

  styleResources: {
    scss: [
      '@/assets/scss/_mixins.scss',
      '@/assets/scss/_variables.scss',
      '@/assets/scss/_global.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.(xml|bpmn)$/,
        loader: 'raw-loader',
      });
    },
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://sharing-bug-44.hasura.app/v1/graphql',
        httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret':
              'd7EZzix2G98aMh51guE6jx0E97Xrq2g0Dcr2aO88NFv5eYCWYsJJR3dJYqIIasek',
          },
        },
      },
    },
  },
};
