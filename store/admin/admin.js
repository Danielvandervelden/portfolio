/*
/* State module for admin
/*_______________________________________________________*/


export const state = () => ({
	loggedIn: true,
	token: null,
	adminPages: []
})

export const getters = {
	loggedIn: state => {
		return state.loggedIn;
	},
	getAdminPages: state => {
		return state.adminPages;
	}
}

export const mutations = {
	getAdminPages(state, pages) {
		state.adminPages = pages;
	}
}

export const actions = {
	getAdminPages(context) {
		let routes = [...this.$router.options.routes];
		let routesArray = [];

		routes.forEach(route => {
			let actualRoute = route.path.split('/')[route.path.split('/').length -1];
			if(actualRoute.length > 1) {
				routesArray.push(actualRoute);
			}
		})

		context.commit('getAdminPages', routesArray);
	}
}