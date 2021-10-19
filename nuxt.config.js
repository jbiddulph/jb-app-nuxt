export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jbapp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@plugins/vuetify',
      {
    src: '~/Plugins/vuex-persist',
    src: '~/Plugins/vuelidate',
    mode: 'all'
  }],
  generate: {
    dir: 'pubmic'
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/style-resources',
    '@nuxtjs/moment',
    ['nuxt-vuex-localstorage', {
      mode: 'manual'
    }]
  ],

  // Style Resources
  styleResources: {
    scss: [
        'assets/scss/styles.scss',
        'assets/scss/variables.scss',
        'https://fonts.googleapis.com/css2?family=Raleway:wght@300;600',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600',
    ]
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://jwtapi.jbiddulph.com'
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://jwtapi.test/api'
    baseURL: 'https://jwtapi.jbiddulph.com/api'
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false, // here should be `false`, as you defined in user endpoint `propertyName`
          autoFetch: true
        },
        // `propertyName` in endpoint was depreacted
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'access_token' },
          logout: { url: 'auth/logout', method: 'post', propertyName: 'access_token' },
          user: { url: 'user', method: 'get', propertyName: false },
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
