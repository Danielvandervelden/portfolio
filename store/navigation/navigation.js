/*
/* State module for navigation
/*_______________________________________________________*/


export const state = () => ({
	navItems: ['Home', 'About', 'Portfolio', 'Contact']
})

export const getters = {
	getNavItems: state => {
		return state.navItems;
	}
}

export const mutations = {

}

export const actions = {

}