<template>
	<nuxt-link v-if="checkProps" tag="a" :to="link" class="button"><slot /></nuxt-link>
	<button class="button" v-else-if="chosenType == 'submit'" :type="chosenType"><slot /></button>
	<a class="button" v-else><slot /></a>
</template>

<script>
	export default {
		props: [
			'link',
			'chosenType'
		],
		data() {
			return {
				
			}
		},
		computed: {
			checkProps() {
				return this.link && this.type !== 'submit' ?  true : false;
			}
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';
</style>