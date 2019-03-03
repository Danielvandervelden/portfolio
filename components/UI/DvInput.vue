<template>
	<input @input="e => value = e.target.value" :value="value" :type="type" :placeholder="placeholder">
</template>

<script>
	export default {
		props: [
			'type',
			'placeholder',
		],
		data() {
			return {
				
			}
		},
	}
</script>
<style scoped lang='scss'>
	
</style>