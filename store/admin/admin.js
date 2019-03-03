/*
/* State module for admin
/*_______________________________________________________*/


export const state = () => ({
	loggedIn: false,
	token: null,
})

export const getters = {
	loggedIn: state => {
		return state.loggedIn;
	}
}

export const mutations = {

}

export const actions = {

}