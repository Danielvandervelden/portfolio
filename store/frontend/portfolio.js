/*
/* State module for portfolio
/*_______________________________________________________*/


export const state = () => ({
	portfolioItems: [
		{
			name: 'NMS Database',
			id: new Date() * Math.random() + Math.random(),
			website: 'https://nmsdatabase.com',
			content: `<p>This is by far the biggest project I have ever done. It started out of love for the game
			"No Man's Sky". It ended up just being a project that I can add to my portfolio since I wouldn't have time
			to keep everything updated. It utilizes a Firebase backend which stores all of the data.</p>
			
			<p>On the frontend there is the possibility to search for a weapon, planet or ship and actually posting a find is also
			possible if the user registers. Once again, the registration is done through Firebase using an email confirmation system.</p>`,
			background: require(`@/assets/images/portfolioimages/nmsdatabase.png`)
		},
		{
			name: 'Car Insurance Application',
			id: new Date() * Math.random() + Math.random(),
			content: `<p>This was a very big Car Insurance Application that I had to build for a client. The application itself is not live yet, but as soon as it
			is I will link it here.</p>
			
			<p>This application is built in purely Vue.JS and utilizes many different packages such as Vuei18n, Axios and VeeValidate.</p>`,
			background: require(`@/assets/images/portfolioimages/car-insurance-app.png`)
		},
		{
			name: 'Saarbakt',
			id: new Date() * Math.random() + Math.random(),
			website: 'https://www.saarbakt.nl',
			content: `The very first website I made. This one was for my sister. She wanted a blog to post
			all sorts of different recipes on. It is built using Wordpress and everything is compiled/transpiled using
			Webpack. It has been while since it was built and I have learned a ridiculous amount since then. Most likely
			I would setup the entire project much better.`,
			background: require(`@/assets/images/portfolioimages/saarbakt.png`)
		},
		{
			name: 'EKI Magento 2 Webshop',
			id: new Date() * Math.random() + Math.random(),
			website: 'https://www.eki.nl',
			content: `One of the Magento 2 webshops I am particularly proud of. Built with, obviously, Magento 2. It uses
			the core Front End technologies that are shipped with Magento 2 such as Less, RequireJS and Grunt.
			
			<p>All the "blocks" you see throughout the webshop are widgets which we developed and implemented through
			a widget library. These are all configurable through the backend for easy creation of CMS pages and also 
			product pages.</p>`,
			background: require(`@/assets/images/portfolioimages/eki.png`)
		},
	]
})

export const getters = {
	getPortfolioItems: state => {
		return state.portfolioItems;
	},
}

export const mutations = {
	formSubmitted() {
		document.querySelector('body').classList.remove('loading');
	}
}

export const actions = {
	submitForm(context, formInput) {
		document.querySelector('body').classList.add('loading');
		this.$axios.$post('contactform.json', formInput)
			.then( res => {
				context.commit('formSubmitted');
			}) 
	}
}