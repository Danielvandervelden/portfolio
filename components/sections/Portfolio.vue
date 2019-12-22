<template>
	<section id="portfolio" class="dv-portfolio">
		<h2 class="dv-portfolio__title">Portfolio</h2>
		<div class="dv-portfolio__content">
			<p>
				Down below you'll be able to find all of the projects I created (or contributed to).
				Obviously this portfolio is not in it, but if you're curious: it's made with VueJS/NuxtJS 
				and NodeJS.
			</p>

			<p>There are many more projects I have worked on, however to put all those websites here would be too much. Instead
				I present you with the projects I liked best.
			</p>
		</div>

		<portfolio-post-grid></portfolio-post-grid>

		<arrow-down element="contact" color="#E27D60">Contact</arrow-down>
	</section>
</template>

<script>
	import ArrowDown from '@/components/UI/ArrowDown.vue';
	import PortfolioPostGrid from '@/components/modules/portfolio_post_slider/PortfolioPostGrid.vue';

	export default {
		components: {
			ArrowDown,
			PortfolioPostGrid
		},
		mounted() {
			let topSlideElements = [
				{
					direction: 'bottom',
					element: this.$el.querySelector('.dv-portfolio__title')
				},
				{
					direction: 'bottom',
					element: this.$el.querySelector('.dv-portfolio__content')
				}
			]
			this.slideIn(topSlideElements, this.$el, 400);
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.dv-portfolio {
		min-height: 100vh;
		padding-bottom: 8rem;
		@include full-width-background($light_grey);

		h2 {
			font-size: 5rem;
		}
	}
</style>