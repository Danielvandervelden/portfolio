<template>
	<div>
		<h4 class="white"><span class="red">Technologies</span> I have worked with:</h4>

		<no-ssr>
			<flickity class="skill-slider" ref="flickity" :options="flickityOptions">
				<div class="technology">
					<img src="~assets/images/skillslider/vue_logo.svg" alt="">
				</div>
				<div class="technology">
					<img src="~assets/images/skillslider/nuxt_logo.svg" alt="">
				</div>
				<div class="technology">
					<img src="~assets/images/skillslider/node_logo.svg" alt="">
				</div>
				<div class="technology">
					<img src="~assets/images/skillslider/javascript_logo.svg" alt="">
				</div>
				<div class="technology">
					<img src="~assets/images/skillslider/sass_logo.svg" alt="">
				</div>
				<div class="technology">
					<img src="~assets/images/skillslider/php_logo.svg" alt="">
				</div>
				<div class="technology">
					<img src="~assets/images/skillslider/react_logo.svg" alt="">
				</div>
				<div class="technology">
					<img src="~assets/images/skillslider/html_css_logo.svg" alt="">
				</div>
			</flickity>
		</no-ssr>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flickityOptions: {
					initialIndex: 1,
					prevNextButtons: false,
					pageDots: false,
					wrapAround: false,
					autoPlay: true,
					autoPlay: 1500
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	h4 {
		margin-bottom: 50px;
		font-weight: normal;
		text-align: center;
	}

	.technology {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 150px;
	}
</style>