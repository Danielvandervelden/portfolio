<template>
	<section class="dv-contact">
		<h2>Contact</h2>
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

	.dv-contact {
		height: 100vh;
		@include full-width-background($grey);
	}

	h2 {
		font-size: 5rem;
	}
</style>