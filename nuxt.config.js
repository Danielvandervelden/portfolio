const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
	title: 'Daniel van der Velden',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
	  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	  { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Hind+Siliguri:300,700" },
	  { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Work+Sans:300,900" },
	  { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.7.1/css/all.css" },
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
	{ src: '~/plugins/global_components' },
	{ src: '~/plugins/global_functions.js' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
	'@nuxtjs/pwa',
	'nuxt-lazy-load'
  ],

  buildModules: [
	["@nuxtjs/google-analytics", {
		id: "UA-116287331-2"
	}]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
	baseURL: "https://portfolio-57413.firebaseio.com/",
	withCredentials: false
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
