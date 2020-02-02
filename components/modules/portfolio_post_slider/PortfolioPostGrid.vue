<template>
	<div class="portfolio-grid" :class="getPortfolioItems.length % 2 === 0 ? 'extra-padding' : ''">
		<portfolio-post v-for="item in getPortfolioItems" 
		:key="item.id"
		:name="item.name"
		:content="item.content"
		:link="item.website"
		:background="item.background"
		@openPopup="triggerPopup"></portfolio-post>

		<portfolio-popup v-for="item in getPortfolioItems"
		:key="`${item.id}-popup`"
		:id="item.name"
		:content="item.content"
		:link="item.website"
		:tech="item.tech"
		:background="item.background"></portfolio-popup>
	</div>
</template>

<script>
	import PortfolioPost from '@/components/modules/portfolio_post_slider/PortfolioPost.vue';
	import PortfolioPopup from '@/components/modules/portfolio_post_slider/PortfolioPopup.vue';
	
	export default {
		components: {
			PortfolioPost,
			PortfolioPopup
		},
		computed: {
			getPortfolioItems() {
				return this.$store.getters['frontend/portfolio/getPortfolioItems'];
			}
		},
		methods: {
			triggerPopup(name) {
				this.openPopup(name);
			}
		}
	}
</script>
<style scoped lang='scss'>
	.portfolio-grid {
		margin-top: 7rem;

		&:after {
			content: '';
			clear: both;
			display: table;
		}
	}

	@media screen and (min-width: 768px) {
		.extra-padding {
			padding-bottom: 250px;
		}
	}
</style>