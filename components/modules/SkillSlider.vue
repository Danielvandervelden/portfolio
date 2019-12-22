<template>
	<div>
		<h4><span class="red">Technologies</span> I have worked with:</h4>

		<div class="technologies-wrapper">
			<article v-for="(image, index) in images" :key="index">
				<img :src="image.image" :alt="image.name">
			</article>
		</div>
	</div>
</template>

<script>	
	export default {
		data() {
			return {
				images: [
					{name: 'HTML and CSS', image: require('@/assets/images/skillslider/html_css_logo.svg') },
					{name: 'Vue.js', image:require('@/assets/images/skillslider/vue_logo.svg')},
					{name: 'Nuxt.js', image:require('@/assets/images/skillslider/nuxt_logo.svg')},
					{name: 'Node.js', image:require('@/assets/images/skillslider/node_logo.svg')},
					{name: 'Javascript', image:require('@/assets/images/skillslider/javascript_logo.svg')},
					{name: 'SASS', image:require('@/assets/images/skillslider/sass_logo.svg')},
					{name: 'LESS', image:require('@/assets/images/skillslider/less_logo.svg')},
					{name: 'Webpack', image:require('@/assets/images/skillslider/webpack.svg')},
					{name: 'PHP', image:require('@/assets/images/skillslider/php_logo.svg')},
					{name: 'React', image:require('@/assets/images/skillslider/react_logo.svg')},
					{name: 'Git', image:require('@/assets/images/skillslider/git_logo.svg')},
					{name: 'Magento 2', image:require('@/assets/images/skillslider/magento2.svg')},
					{name: 'RequireJS', image:require('@/assets/images/skillslider/require-js_logo.svg')},
					{name: 'Wordpress', image:require('@/assets/images/skillslider/wordpress-logo.svg')},
					{name: 'Photoshop', image:require('@/assets/images/skillslider/photoshop_logo.svg')},
					{name: 'Sketch', image:require('@/assets/images/skillslider/sketch_logo.svg')},
				]
			}
		}
	}
</script>
<style scoped lang='scss'>
	h4 {
		margin-bottom: 50px;
		font-weight: normal;
		text-align: center;
		color: #333
	}

	.technologies-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		article {
			margin-right: 1.5rem;
			margin-bottom: 1.5rem;
			min-width: 7rem;

			img {
				max-height: 100%;
				height: 65px;
				width: auto;
			}
		}
	}
</style>