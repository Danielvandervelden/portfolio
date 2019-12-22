<template>
	<div class="portfolio-grid">
		<portfolio-post v-for="item in getPortfolioItems" 
		:key="item.id"
		:name="item.name"
		:content="item.content"
		:link="item.website"
		:background="item.background"></portfolio-post>
	</div>
</template>

<script>
	import PortfolioPost from '@/components/modules/portfolio_post_slider/PortfolioPost.vue';
	
	export default {
		components: {
			PortfolioPost
		},
		computed: {
			getPortfolioItems() {
				return this.$store.getters['frontend/portfolio/getPortfolioItems'];
			}
		}
	}
</script>
<style scoped lang='scss'>
	.portfolio-grid {
		
	}
</style>