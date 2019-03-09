<template>
	<no-ssr>
		<flickity ref="flickity" :options="flickityOptions">
			<portfolio-post 
			v-for="post in portfolioItems" 
			:key="post[1].id"
			:name="post[1].name"
			:website="post[1].website"
			:content="post[1].content"
			:background="post[1].image"></portfolio-post>
		</flickity>
	</no-ssr>
</template>

<script>
	import PortfolioPost from '@/components/modules/portfolio_post_slider/PortfolioPost.vue';
	export default {
		components: {
			PortfolioPost
		},
		data() {
			return {
				flickityOptions: {
					initialIndex: 0,
					pageDots: false,
				},
				portfolioItems: []
			}
		},
		mounted() {
			this.portfolioItems = this.$store.getters['frontend/portfolio/getPortfolioItems'];
		}		
	}
</script>
<style scoped lang='scss'>
	
</style>