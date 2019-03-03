<template>
	<nav class="dv-admin__nav">
		<ul class="dv-admin__nav-list">
			<nuxt-link class="dv-admin__nav-list--item" tag="li" to="/">Frontpage</nuxt-link>
			<nuxt-link class="dv-admin__nav-list--item" :to="route === 'admin' ? '/admin' : '/admin/' + route" tag="li" v-for="(route, index) in getAdminPages" :key="route + index">{{route}}</nuxt-link>
		</ul>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			getAdminPages() {
				return this.$store.getters['admin/admin/getAdminPages'];
			}
		},
		mounted() {
			this.$store.dispatch('admin/admin/getAdminPages');
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.dv-admin__nav {
		background-color: $light_grey;
		@include container();
		padding: 10px 0;

		&-list {
			display: flex;
			justify-content: space-around;
			list-style: none;
			padding: 0;
			margin: 0;

			&--item {
				cursor: pointer;
				font-weight: lighter;
				color: $red;
				text-transform: uppercase;
				transition: all .3s ease-in-out;

				&:hover {
					color: $pink;
				}
			}
		}
	}
</style>