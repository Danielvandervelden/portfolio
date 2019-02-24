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

					<skill-slider></skill-slider>
				</div>
			</div>

			<div class="dv-about-me__right">
				<img src="~assets/images/Person-placeholder.jpg" alt="">
			</div>
		</div>
		<arrow-down color="#FFF" scrollTo="#portfolio">Portfolio</arrow-down>
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
			let element = document.getElementById('aboutme');
			document.addEventListener('scroll', _.throttle(() => {
				if(element.getBoundingClientRect().top < 400) {
					let aboutMeLeft = document.querySelector('.dv-about-me__left');
					let aboutMeRight = document.querySelector('.dv-about-me__right');

					aboutMeLeft.classList.add('from-left');
					aboutMeRight.classList.add('from-left');
				}
			}, 500))
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.dv-about-me {
		height: 100vh;
		@include full-width-background($grey);

		h2 {
			margin: 0;
			color: $white;
			padding-top: 20px;
			font-size: 5rem;
		}

		&__wrapper {
			display: flex;
			height: 100%;
		}

		&__left {
			transform: translateX(-1000px);
			flex: 0 1 50%;
			transition: all .5s ease-in-out;

			&--content {
				color: #FFF;
			}
		}

		&__right {
			transform: translateX(1000px);
			flex: 0 1 50%;
			transition: all .5s ease-in-out;
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				max-width: 300px;
			}
		}

		.from-left {
			transform: translateX(0)
		}

		.from-right {
			transform: translateX(0)
		}
	}
</style>