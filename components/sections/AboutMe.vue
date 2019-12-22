<template>
	<section id="aboutme" class="dv-about-me">
		<div class="dv-about-me__wrapper">
			<div class="dv-about-me__left">
				<h2>About <span class="red">Me.</span></h2>
				<div class="dv-about-me__left--content">
					<p>Hi!</p>
					<p>I'm Daniel van der Velden, 26 years old and a full stack webdeveloper. My expertises lie in 
						creating web applications in VueJS/NuxtJS, Magento 2 Webshops and Wordpress. I do both Front End development
						and Backend development and I do all of this with Javascript. 
					</p>
					<img src="~assets/images/Person-placeholder.jpg" alt="Daniel van der Velden">
				</div>
			</div>

			<div class="dv-about-me__right">
				<skill-slider></skill-slider>
			</div>
		</div>
		<arrow-down element="portfolio" color="#E27D60">Portfolio</arrow-down>
	</section>
</template>

<script>
	import _ from 'lodash';
	import SkillSlider from '@/components/modules/SkillSlider.vue';
	import ArrowDown from '@/components/UI/ArrowDown.vue';

	export default {
		components: {
			SkillSlider,
			ArrowDown
		},
		data() {
			return {
				
			}
		},
		mounted() {
			let elements = [
				{
					direction: 'left',
					element: document.querySelector('.dv-about-me__left')
				},
				{
					direction: 'right',
					element: document.querySelector('.dv-about-me__right')
				}
			]
			this.slideIn(elements, this.$el, 400)
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.dv-about-me {
		min-height: 100vh;
		@include full-width-background($grey);

		h2 {
			margin: 0;
			color: #333;
			padding-top: 20px;
			font-size: 5rem;
		}

		&__wrapper {
			display: flex;
			height: 100%;
		}

		&__left {
			transform: translateX(-50px);
			flex: 0 1 48%;
			margin-right: 2%;
			transition: all .5s ease-in-out;
			opacity: 0;
			
			img {
				max-width: 300px;
			}
		}

		&__right {
			transform: translateX(50px);
			flex: 0 1 50%;
			transition: all .5s ease-in-out;
			display: flex;
			justify-content: center;
			align-items: center;
			opacity: 0;
		}

		.from-left {
			transform: translateX(0);
			opacity: 1;
		}

		.from-right {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@media screen and (max-width: 768px) {
		.dv-about-me {
			&__wrapper {
				display: block;
			}
		}
	}
</style>