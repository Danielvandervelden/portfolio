/*
/* State module for portfolio
/*_______________________________________________________*/


export const state = () => ({
	portfolioItems: []
})

export const getters = {
	getPortfolioItems: state => {
		return state.portfolioItems;
	},
}

export const mutations = {
	getPortfolioItemsFromDb(state, items) {
		this.portfolioItems = [...items];
		
	},
}

export const actions = {
	async getPortfolioItemsFromDb(context) {
		const items = await this.$axios.$get('portfolio.json');
		let array = Object.entries(items);
		context.commit('getPortfolioItemsFromDb', array);
	},
}