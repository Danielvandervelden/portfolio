<template>
	<div>
		{{getPortfolioItems}}
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
	
</style>