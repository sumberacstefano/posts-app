export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Posts app',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1, maximum-scale=1'
			},
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'google-site-verification', content: '' },
			{ property: 'og:type', content: 'website' },
			{
				hid: 'twitter:card',
				name: 'twitter:card',
				content: 'summary_large_image'
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: 'Posts app'
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id purus lorem. Suspendisse vel cursus odio, eget aliquet mauris. Aliquam interdum, erat in porta accumsan, leo quam gravida nibh, in consequat ex metus vitae nulla.'
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id purus lorem. Suspendisse vel cursus odio, eget aliquet mauris. Aliquam interdum, erat in porta accumsan, leo quam gravida nibh, in consequat ex metus vitae nulla.'
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: process.env.baseURL + '/img/opengraph-image.png'
			},
			{
				hid: 'og:url',
				property: 'og:url',
				content: process.env.baseURL
			}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Work+Sans:wght@400;500;600&display=swap'
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/scss/main.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/stylelint
		'@nuxtjs/stylelint-module'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios'
	],

	env: {
		baseURL: 'localhost:3000',
		baseApi: 'https://jsonplaceholder.typicode.com/'
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
