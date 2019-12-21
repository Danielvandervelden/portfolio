<template>
	<section id="portfolio" class="dv-portfolio">
		<h2>Portfolio</h2>
		<p>
			Down below you'll be able to find all of the projects I created (or contributed to).
			Obviously this portfolio is not in it, but if you're curious: it's made with VueJS/NuxtJS 
			and NodeJS.
		</p>

		<p>There are many more projects I have worked on, however to put all those websites here would be too much. Instead
			I present you with the projects I liked best.
		</p>

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