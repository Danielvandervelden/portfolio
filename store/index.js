export const actions = {
    nuxtServerInit(context) {
		context.dispatch('frontend/portfolio/getPortfolioItemsFromDb');
    },
};