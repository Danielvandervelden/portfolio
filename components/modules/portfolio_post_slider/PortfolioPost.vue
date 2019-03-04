<template>
	<div class="dv-admin__portfolio-item">
		<div class="dv-admin__portfolio-item--image" :style="{'background-image': 'url(' + background + ')'}"></div>
		<div class="dv-admin__portfolio-item--content" :data-id="id">
			<h4 class="dv-admin__portfolio-item--title">{{name}}</h4>
			<p>{{content}}</p>
			<dv-button class="red" :link="website">Visit {{name}}</dv-button>
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
	.dv-admin__portfolio-item {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>