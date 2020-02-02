const pkg = require('./package')


module.exports = {
  mode: 'universal',

  render: {
  	bundleRenderer: {
  		shouldPreload: (file, type) => {
  			return ['script', 'style', 'font'].includes(type)
  		}
  	}
  },

  /*
  ** Headers of the page
  */
  head: {
	  title: "Daniel van der Velden a frontend webdeveloper portfolio",
    meta: [
	  { charset: 'utf-8' },
	  { name: "title", property: "og:title", content: "Daniel van der Velden a frontend webdeveloper portfolio" },
	  { name: 'image', property: "og:image", content: "/ogimage.png" },
	  { name: 'url', property: "og:url", content: "https://www.imdaniel.dev" },
	  { name: 'type', property: "og:type", content: "website" },
	  { hid: 'description', name: 'description', content: pkg.description },
	  { name: "twitter:title", property: "twitter:title", content: "Daniel van der Velden a frontend webdeveloper portfolio" },
	  { name: 'twitter:image', property: "twitter:image", content: "/ogimage.png" },
	  { name: 'viewport', content: 'width=device-width, initial-scale=1' }
	
    ],
    link: [
	  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  webfontloader: {
    google: {
      families: [
		  'Work+Sans:300,400,700',
		  'Hind+Siliguri:300,700'
		],
		urls: [
			'https://fonts.googleapis.com/css?family=Work+Sans:300,400,700&display=swap',
			'https://fonts.googleapis.com/css?family=Hind+Siliguri:300,700&display=swap'
		]
    }
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
	'nuxt-lazy-load',
	'nuxt-webfontloader',
	'@nuxtjs/sitemap',
	'@nuxtjs/robots',
	'@bazzite/nuxt-optimized-images',
	[
		'nuxt-fontawesome', {
			imports: [
				{
				  set: '@fortawesome/free-solid-svg-icons',
				  icons: ['fas']
				},
				{
				  set:'@fortawesome/free-brands-svg-icons',
				  icons: ['fab']
				}
			  ]
		}
	]
  ],

  optimizedImages: {
    optimizeImages: true
  },

  buildModules: [
	["@nuxtjs/google-analytics", {
		id: "UA-147622979-2"
	}]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
	},
	crossorigin: 'crossorigin'
  },

  pageTransition: {
	  name: 'fade',
	  mode: 'out-in'
  }
}
