<template>
	<section id="portfolio" class="dv-portfolio">
		<h2>Portfolio</h2>
		<p>
			Down below you'll be able to find all of the projects I created (or contributed to).
			Obviously this portfolio is not in it, but if you're curious: it's made with VueJS/NuxtJS 
			and NodeJS.
		</p>

		<portfolio-post-slider></portfolio-post-slider>

		<arrow-down color="#E27D60" scrollTo="#portfolio">Contact</arrow-down>
	</section>
</template>

<script>
	import ArrowDown from '@/components/UI/ArrowDown.vue';
	import PortfolioPostSlider from '@/components/modules/portfolio_post_slider/PortfolioPostSlider.vue';

	export default {
		components: {
			ArrowDown,
			PortfolioPostSlider
		},
		data() {
			return {
				
			}
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.dv-portfolio {
		height: 100vh;
		@include full-width-background($light_grey);

		h2 {
			font-size: 5rem;
		}
	}
</style>