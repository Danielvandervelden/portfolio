<template>
	<section id="portfolio" class="dv-portfolio">
		<h2>My Projects</h2>
	</section>
</template>

<script>
	export default {
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