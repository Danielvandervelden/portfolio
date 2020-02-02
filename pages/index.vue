<template>
<div class="dv-home-page">
  <header>
    <parallax-name></parallax-name>
	<arrow-down class="arrow-down" element="aboutme" color="#e6382b" scrollTo="#aboutme">About me</arrow-down>
  </header>

  <main>
	  <about-me></about-me>
	  <portfolio></portfolio>
	  <contact></contact>
  </main>
</div>
</template>

<script>
	import ParallaxName from '@/components/modules/ParallaxName.vue';
	import ArrowDown from '@/components/UI/ArrowDown.vue';
	import AboutMe from '@/components/sections/AboutMe.vue';
	import Portfolio from '@/components/sections/Portfolio.vue';
	import Contact from '@/components/sections/Contact.vue';

	/* Smooth scrolling polyfill */
	import smoothScroll from 'smoothscroll-polyfill';

	export default {
		components: {
			ParallaxName,
			ArrowDown,
			AboutMe,
			Portfolio,
			Contact
		},
		mounted() {
			smoothScroll.polyfill();
		}
	}
</script>

<style lang='scss'>
	@import '~/assets/styles/_base.scss';
	header {
		height: 100vh;
		position: relative;
		@include full-width-background($light_grey);
	}

	.arrow-down {
		bottom: 15% !important;
	}

</style>