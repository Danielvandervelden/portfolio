/*
/* State module for portfolio
/*_______________________________________________________*/


export const state = () => ({
	portfolioItems: [],
	edit: true
})

export const getters = {
	getPortfolioItems: state => {
		return state.portfolioItems;
	},
	checkEdit: state => {
		return state.edit;
	}
}

export const mutations = {
	getPortfolioItemsFromDb(state, items) {
		state.portfolioItems = items;

	},

	createNewPortfolioItem(state) {
		state.edit = !state.edit;
	},
	changeEdit(state) {
		state.edit = !state.edit;
	}
}

export const actions = {
	async createNewPortfolioItem(context, item) {
		item.id = new Date();
		const response = await this.$axios.$post('portfolio.json', item);
		context.commit('createNewPortfolioItem');
	},
	async getPortfolioItemsFromDb(context) {
		const items = await this.$axios.$get('portfolio.json');
		context.commit('getPortfolioItemsFromDb', items);
	},
	async removeItemFromPortfolio(context, itemId) {
		const allPortfolioItems = await this.$axios.$get('portfolio.json');
		for(let key in allPortfolioItems) {
			if(allPortfolioItems[key].id === itemId) {
				delete allPortfolioItems[key];
			}
		}
		
		this.$axios.$put('portfolio.json', allPortfolioItems)
			.then((res) => {
				context.commit('getPortfolioItemsFromDb', allPortfolioItems);
			})
		
	}
}