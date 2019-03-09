<template>
	<div class="dv-portfolio__item">
		<div class="dv-portfolio__item--image" :style="{'background-image': 'url(' + background + ')'}"></div>
		<div class="dv-portfolio__item--content" :data-id="id">
			<h4 class="dv-portfolio__item--title">{{name}}</h4>
			<p>{{content}}</p>
			<dv-button class="red" :extLink="website">Visit {{name}}</dv-button>
			<dv-button class="red">Read more</dv-button>
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
			'website'
		],
		data() {
			return {
				
			}
		}
	}
</script>
<style scoped lang='scss'>
	.dv-portfolio__item {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 100px;
		box-sizing: border-box;

	}
</style>