<template>
	<div class="dv-admin__portfolio">
		<a class="button red" @click.prevent="changeEdit" href="#">{{checkEdit ? 'New portfolio item' : 'Edit portfolio item'}}</a>
		<div v-if="checkEdit" class="dv-admin__portfolio--items">
			<dv-portfolio-show></dv-portfolio-show>
		</div>
		<div v-else>
			<dv-portfolio-create class="dv-admin__portfolio--create-form"></dv-portfolio-create>
		</div>
	</div>
</template>

<script>
	import DvPortfolioCreate from '@/components/admin/portfolio/PortfolioCreate.vue';
	import DvPortfolioShow from '@/components/admin/portfolio/PortfolioShow.vue';

	export default {
		components: {
			DvPortfolioCreate,
			DvPortfolioShow
		},
		computed: {
			checkEdit() {
				return this.$store.getters['admin/portfolio/checkEdit'];
			}
		},
		methods: {
			changeEdit() {
				this.$store.commit('admin/portfolio/changeEdit');
			}
		},
		data() {
			return {
				
			}
		},
		layout: 'admin'
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.dv-admin__portfolio {
		@include container();

		&--create-form {
			max-width: 700px;
			margin: 0 auto;
		}
	}
</style>