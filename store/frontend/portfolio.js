/*
/* State module for portfolio
/*_______________________________________________________*/


export const state = () => ({
	portfolioItems: [
		[1, {
			name: 'Saarbakt',
			id: new Date() * Math.random() + Math.random(),
			website: 'https://www.saarbakt.nl',
			content: `This is the very first website I ever created. It utilizes Wordpress for a backend
			so that it's easy to manage for the user. Languages/techniques used are: PHP, SASS, Javascript, HTML5`,
			background: `@/assets/images/portfolioimages/Saarbaktlogoheader.png`
		}],
		[2, {
			name: 'PrimalConquer',
			id: new Date() * Math.random() + Math.random(),
			website: 'https://primalconquer.com',
			content: `The second website I ever made. Also utilizes Wordpress as a backend for easy use. This 
			is a website for a gaming private server of a popular game called "Conquer Online". Next to Wordpress
			as a backend, there's the possibility to register an account for the server which gets saved in a 
			separate MYSQL database. Based on those login details you can not only login to the actual game,
			but also in the website to view your character and stats. This separate login system is based on
			PHP sessions.`
		}],
		[3, {
			name: 'Kwintessens',
			id: new Date() * Math.random() + Math.random(),
			website: 'https://www.kwintessens.nl',
			content: `This is a Magento 2 webshop. I did the frontend for this website. Magento 2 is an
			eCommerce platform for, obviously, webshops. Its backend is based on PHP, the Javascript utilizes
			KnockoutJS and RequireJS and LESS is what it ships with by default. For this I used Javascript's
			ES6 features and I compiled it with Babel in order for older browsers to understand it.`
		}]
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