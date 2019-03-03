<template>
	<form @submit.prevent="createNewPortfolioItem()">
		<dv-input 
			v-model="item.name" 
			type="text" 
			placeholder="Item name"
			label="Input portfolio item name" />
		<dv-input 
			v-model="item.image"
			type="text"
			placeholder="Item image URL"
			label="Input porfolio item image URL" />
		<dv-input 
			v-model="item.website"
			type="text"
			placeholder="Item website URL"
			label="Input porfolio item website URL" />
		<dv-input
			v-model="item.content"
			type="textarea"
			placeholder="The content for the portfolio item"
			label="Content" />
		
		<dv-button chosenType="submit">Add new item</dv-button>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				item: {
					name: '',
					image: '',
					website: '',
					content: ''
				}
			}
		},
		methods: {
			createNewPortfolioItem() {
				console.log('dispatching');
				this.$store.dispatch('admin/portfolio/createNewPortfolioItem', this.item);
			}
		}
	}
</script>
<style scoped lang='lang'>
	
</style>