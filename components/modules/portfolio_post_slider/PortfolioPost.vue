<template>
	<div :class="link ? 'with-button' : ''" class="dv-portfolio__item">
		<div class="dv-portfolio__item--image"><img :src="background" :alt="name"></div>
		<div class="dv-portfolio__item--content" :data-id="id">
			<h4 class="dv-portfolio__item--title">{{name}}</h4>
			<div v-html="content"></div>
			<dv-button :title="name" v-if="link" class="red dv-portfolio__item--link" :extLink="link">Visit {{name}}</dv-button>
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			'background',
			'id',
			'name',
			'content',
			'link'
		],
		mounted() {
			this.slideIn([{direction: 'bottom', element: this.$el}], this.$el, 400);
		}
	}
</script>
<style scoped lang='scss'>
	.dv-portfolio__item {
		background-color: #FFF;
		box-sizing: border-box;
		width: 48%;
		margin-bottom: 30px;
		position: relative;
		border-radius: .8rem;
		transition: all .3s ease-in-out;
		display: inline-block;
		vertical-align: top;

		&:nth-child(odd) {
			margin-right: 4%;
		}


		@media screen and (min-width: 768px) {
			&:nth-child(2) {
				margin-top: 250px;
			}

			&:nth-child(odd):not(:first-child) {
				margin-top: -100px;
			}
		}

		&--image {
			border-radius: .8rem .8rem 0 0;
			position: relative;
			overflow: hidden;

			img {
				width: 100%;
				height: auto;
			}
		}

		&--content {
			padding: 1.5rem 1.5rem 1.5rem 1.5rem;

			.with-button & {
				padding: 1.5rem 1.5rem 6rem 1.5rem;
			}
		}

		&--link {
			position: absolute;
			bottom: 1.5rem;
			right: 1.5rem;
		}

		&:hover {
			transform: translateY(-5px);
			box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, .15);
		}
	}

	@media screen and (max-width: 768px) {
		.dv-portfolio__item {
			width: 100%;
			display: block;
		}
	}
</style>