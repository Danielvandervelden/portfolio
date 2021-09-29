/*
/* State module for portfolio
/*_______________________________________________________*/


export const state = () => ({
	portfolioItems: [
		{
			name: 'NMS Database',
			id: new Date() * Math.random() + Math.random(),
			tech: ['Vue.js', 'Nuxt.js', 'Vuex', 'Firebase', 'Node.js', 'Webpack', 'SCSS'],
			website: 'https://nmsdatabase.com',
			content: `<p>This is by far the biggest project I have ever done. It started out of love for the game
			"No Man's Sky". It ended up being a project that I can add to my portfolio since I wouldn't have time
			to keep everything updated. It utilizes a Firebase backend which stores all of the data.</p>
			
			<p>On the frontend there is the possibility to search for a weapon, planet or ship and actually posting a find is also
			possible if the user registers. Registration is done through the Firebase backend as well as the logging in part. When a user registers
			they need to confirm their email address by clicking a confirmation link. As of that moment they are a fully fledged member and they are 
			allowed to post all of their findings.</p>
			
			<p>
				This application contains a lot of custom UI elements, such as input fields and select fields. These all make use of Vue.js's easy
				two-way binding. A user also has their own profile on which all of their posts are displayed.
			</p>`,
			background: require(`@/assets/images/portfolioimages/nmsdatabase.png`)
		},
		{
			name: 'Distridata',
			id: new Date() * Math.random() + Math.random(),
			tech: ['Nuxt.js', 'Vuex', 'Axios', 'Webpack', 'SCSS'],
			website: 'https://www.distridata.nl',
			content: `<p>
				This PWA was built using Wordpress as headless CMS (it was completely revamped backend wise) and using Nuxt.js as a frontend.
				</p>
			
			<p>
				The Wordpress backend makes a page builder called "DIVI" available, with which the user can build up their page using custom components that we've built. These pages can be queried
				from the Frontend through an API. The entire page is sent back as a JSON object and parsed on the Frontend to render all of our components.
			</p>`,
			background: require(`@/assets/images/portfolioimages/distridata.png`)
		},
		{
			name: 'Orangevalley',
			id: new Date() * Math.random() + Math.random(),
			tech: ['Nuxt.js', 'Vuex', 'Axios', 'Webpack', 'SCSS', 'Hubspot'],
			website: 'https://www.orangevalley.nl',
			content: `<p>
			Another Nuxt.js PWA we built using our Wordpress/Nuxt.js setup. The client can easily build their entire website using the page builder, and we make sure
			all of the components are rendered on the page correctly.
			</p>
			<p>An interesting integration with Hubspot made this project quite interesting.</p>`,
			background: require(`@/assets/images/portfolioimages/orangevalley.png`)
		},
		{
			name: 'Saarbakt',
			id: new Date() * Math.random() + Math.random(),
			tech: ['Wordpress', 'Webpack', 'PHP', 'SCSS'],
			website: 'https://www.saarbakt.nl',
			content: `<p>This wordpress blog was the very first website I have made. It was created for my sister to post all sorts of recipes about
			baking and cooking.</p>
			
			<p>Throughout the years I've rewritten it about 2 or 3 times and every single time I think to myself: "what was I doing?". The most recent rewrite includes a ridiculous amount of updates
			under which: lazy loading images, a complete webpack configuration, better image scaling/optimalisation and SEO updates.</p>`,
			background: require(`@/assets/images/portfolioimages/saarbakt.png`)
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