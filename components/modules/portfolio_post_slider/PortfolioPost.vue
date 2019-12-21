<template>
	<div class="dv-portfolio__item">
		<div class="dv-portfolio__item--image" :style="{'background-image': 'url(' + background + ')'}"></div>
		<div class="dv-portfolio__item--content" :data-id="id">
			<h4 class="dv-portfolio__item--title">{{name}}</h4>
			<div v-html="content"></div>
			<dv-button class="red dv-portfolio__item--link" :extLink="link">Visit {{name}}</dv-button>
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
		data() {
			return {
				
			}
		}
	}
</script>
<style scoped lang='scss'>
	.dv-portfolio__item {
		background-color: #FFF;
		box-sizing: border-box;
		flex-basis: 48%;
		margin: 30px 1%;
		position: relative;
		border-radius: .8rem;
		transition: all .3s ease-in-out;

		&--image {
			height: 200px;
			background-size: cover;
			background-repeat: no-repeat;
			width: 100%;
			border-radius: .8rem .8rem 0 0;
		}

		&--content {
			padding: 1.5rem 1.5rem 6rem 1.5rem;
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
</style>