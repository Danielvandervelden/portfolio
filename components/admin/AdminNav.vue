<template>
	<div class="dv-admin__nav">
		<ul>
			<nuxt-link :to="route === 'admin' ? '/admin' : '/admin/' + route" tag="li" v-for="(route, index) in routes" :key="route + index">{{route}}</nuxt-link>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				routes: []
			}
		},
		mounted() {
			let routes = [...this.$router.options.routes];

			routes.forEach(route => {
				let actualRoute = route.path.split('/')[route.path.split('/').length -1];
				if(actualRoute.length > 1) {
					this.routes.push(actualRoute);
				}
			})
		}
	}
</script>
<style scoped lang='scss'>
	
</style>