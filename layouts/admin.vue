<template>
	<div class="dv-admin">
		<admin-nav v-if="loggedIn"></admin-nav>
		<nuxt />
	</div>
</template>

<script>
	import AdminNav from '@/components/admin/AdminNav.vue';
	export default {
		components: {
			AdminNav
		},
		data() {
			return {
				
			}
		},
		computed: {
			loggedIn() {
				return this.$store.getters['admin/admin/loggedIn'];
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>