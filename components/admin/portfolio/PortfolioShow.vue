<template>
	<div class="dv-admin__portfolio-items">
		<div v-for="(item, index) in getPortfolioItems" :key="item + index">
			<div class="dv-admin__portfolio-item">
				<div class="dv-admin__portfolio-item--image" :style="{'background-image': 'url(' + item.image + ')'}"></div>
				<div class="dv-admin__portfolio-item--content" :data-id="item.id">
					<h4 class="dv-admin__portfolio-item--title">{{item.name}}</h4>
					<p>{{item.content}}</p>
					<dv-button class="red" :link="item.website">Visit {{item.name}}</dv-button>
					<dv-button @click.prevent.native="removeItem($event)">Remove</dv-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			getPortfolioItems() {
				return this.$store.getters['admin/portfolio/getPortfolioItems'];
			}
		},
		mounted() {
			this.$store.dispatch('admin/portfolio/getPortfolioItemsFromDb');
		},
		methods: {
			removeItem(e) {
				let itemToRemove = e.target.parentNode.dataset.id;
				this.$store.dispatch('admin/portfolio/removeItemFromPortfolio', itemToRemove);
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>