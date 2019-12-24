<template>
	<section id="aboutme" class="dv-about-me">
		<div class="dv-about-me__wrapper">
			<div class="dv-about-me__left">
				<h2>About <span class="red">Me.</span></h2>
				<div class="dv-about-me__left--content">
					<p>Hi!</p>
					<p>I'm Daniel van der Velden, {{calculateAge(2, 9, 1993)}} years old and a full stack webdeveloper. My expertise lies in 
						creating web applications in VueJS/NuxtJS, Magento 2 Webshops and Wordpress. I do both Frontend development
						and Backend development and I do all of this with Javascript.
					</p>
					<p>
						I started web development in October 2017. After a few months of hardcore studying everyday, next to my job as a
						restaurant manager, I made an attempt at applying for a Junior Frontend Webdeveloper job. Against all the odds I
						got the very first job I applied for. 
					</p>

					<p>
						After I got the job I started picking up skills very quickly, and I soon became familiar with Wordpress, Magento 2
						and its core frontend & backend technologies/languages. After a while I wanted to learn something new and exciting
						so I started learning Vue.js and Nuxt.js which are currently my main weapon of choice.
					</p>
					<!-- <img src="~assets/images/Person-placeholder.jpg" alt="Daniel van der Velden"> -->
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
		methods: {
			calculateAge(birthMonth, birthDay, birthYear) {
				var currentDate = new Date();
				var currentYear = currentDate.getFullYear();
				var currentMonth = currentDate.getMonth();
				var currentDay = currentDate.getDate(); 
				var calculatedAge = currentYear - birthYear;

				if (currentMonth < birthMonth - 1) {
					calculatedAge--;
				}
				if (birthMonth - 1 == currentMonth && currentDay < birthDay) {
					calculatedAge--;
				}
				return calculatedAge;
			}
		},
		mounted() {
			this.slideIn([{direction: 'left',element: document.querySelector('.dv-about-me__left')},], this.$el.querySelector('.dv-about-me__left'), 400)
			this.slideIn([{direction: 'right',element: document.querySelector('.dv-about-me__right')},], this.$el.querySelector('.dv-about-me__right'), 400)
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.dv-about-me {
		min-height: 100vh;
		padding-bottom: 10rem;
		@include full-width-background($grey);

		h2 {
			margin: 0;
			color: #333;
			padding-top: 20px;
			font-size: 5rem;
		}

		&__wrapper {
			display: flex;
			min-height: inherit;
			align-items: center;
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