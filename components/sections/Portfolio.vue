<template>
	<section id="portfolio" class="dv-portfolio">
		<h2 class="dv-portfolio__title">My <span class="red">Portfolio.</span></h2>
		<div class="dv-portfolio__content">
			<p>
				Down below you'll be able to find some of the projects I created, or contributed to. There are quite some different websites
				that I have worked on. These website have been built with many different technologies, libraries, frameworks and packages.
			</p>

			<p>
				Many of these you can see in the about me section. As for projects that I have worked on: there are quite a lot. Instead
				of showcasing all of these projects, I prefer to show a select few. These select few can be found down below.
			</p>
		</div>

		<portfolio-post-grid></portfolio-post-grid>

		<arrow-down element="contact" color="#e6382b">Contact</arrow-down>
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
		padding-bottom: 10rem;
		@include full-width-background($light_grey);

		h2 {
			font-size: 5rem;
		}
	}
</style>