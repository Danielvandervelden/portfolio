const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
	  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	  { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Hind+Siliguri:300,700" },
	  { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Work+Sans:300,900" },
	  { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.7.1/css/all.css" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
	"~assets/styles/_base.scss"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
	{ src: '~/plugins/vue-flickity', ssr: false },
	{ src: '~/plugins/scrollto'}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

  transition: {
	  name: 'fade',
	  mode: 'out-in'
  }
}
