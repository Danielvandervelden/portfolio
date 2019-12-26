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
			"No Man's Sky". It ended up being a project that I can add to my portfolio since I wouldn't have time
			to keep everything updated. It utilizes a Firebase backend which stores all of the data.</p>
			
			<p>On the frontend there is the possibility to search for a weapon, planet or ship and actually posting a find is also
			possible if the user registers. Registration is done through the Firebase backend as well as the logging in part. When a user registers
			they need to confirm their email address by clicking a confirmation link. As of that moment they are a fullfledget member and they are 
			allowed to post all of their findings.</p>
			
			<p>
				This application contains a lot of custom UI elements, such as input fields and select fields. These all make use of Vue.js's easy
				two-way binding. A user also has their own profile on which all of their posts are displayed.
			</p>`,
			background: require(`@/assets/images/portfolioimages/nmsdatabase.png`)
		},
		{
			name: 'Car Insurance Application',
			id: new Date() * Math.random() + Math.random(),
			content: `<p>
				This was a very big Car Insurance Application that I had to build for a client. The application itself is not live yet, but as soon as it
				is I will link it here.
				</p>
			
			<p>
				This application is built in purely Vue.JS and utilizes many different packages such as Vuei18n, Axios and VeeValidate. It was built with the
				intention of being some sort of template for them to continue to build upon. There are many different types of insurance such as
				car, home and scooter. The entire configuration had to be setup as globally as possible so that further extension of the project was easy.
			</p>
			
			<p>
				In order to make this application as good as possible I decided to split the entire design up into components and layouts before building. The folder structure
				for a project this big was very important so that it wouldn't get messy later on. Everything is split up neatly into configuration files for packages (i.e. VeeValidate, Axios & Vuei18n), different component folders such as UI elements (buttons, input fields, select boxes) and layouts
				for an easy configuration of for example sidebars.
			</p>`,
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
			name: 'Magento 2 Webshop',
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