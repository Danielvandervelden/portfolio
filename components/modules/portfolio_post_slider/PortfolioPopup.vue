<template>
	<div :id="`${id.toLowerCase().replace(/[^A-Z0-9]/ig, '_')}-popup`" class="portfolio-popup__wrapper">
		<a href="#" @click.prevent="closePopupWindow" class="portfolio-popup__close"><i class="fas fa-times"></i></a>
		<div class="portfolio-popup">
			<div class="image-wrapper">
				<img :src="background" :alt="id">
			</div>
			<div class="content" :style="link ? 'height: 50%' : 'height: 60%'">
				<h2>{{id}}</h2>
				<div class="tech">
					<strong>Tech used:</strong>
					<span v-for="item in tech" :key="`${item + id}`">{{item}}<span class="seperator">{{item !== tech[tech.length -1] ? ',' : ''}}</span></span>
				</div>
				<hr>
				<div class="portfolio-popup__content" v-html="content"></div>
				<div v-if="link" class="button-wrapper">
					<dv-button :title="id" class="red" :ext_link="link">Visit {{id}}</dv-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['id', 'content', 'link', 'background', 'tech'],
		methods: {
			closePopupWindow() {
				this.closePopup({popup: this.id.toLowerCase().replace(/[^A-Z0-9]/ig, '_') + '-popup', post: this.id.toLowerCase().replace(/[^A-Z0-9]/ig, '_')})
			}
		}
	}
</script>
<style scoped lang='scss'>
	.portfolio-popup {
		&__close {
			text-decoration: none;
			position: fixed;
			top: 1rem;
			right: 1rem;
			background-color: red;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #FFF;
			width: 3rem;
			height: 3rem;
		}
		
		&__wrapper {
			position: fixed;
			z-index: 10;
			margin-top: -5px;
			top: 0;
			left: 0;
			transition: all .3s ease-in-out;
			opacity: 0;
			width: 100vw;
			height: 100vh;
			overflow: auto;
			background-color: #FFF;
			pointer-events: none;

			.image-wrapper {
				height: 40%;
				display: flex;
				align-items: flex-start;
				justify-content: center;
				overflow: hidden;
			}

			img {
				width: 100%;
			}

			.content {
				padding: 1.5rem;
				overflow: auto;
			}

			.tech {
				display: flex;
				flex-wrap: wrap;

				strong {
					margin-right: 1rem;
				}

				span:not(:last-of-type):not(.seperator) {
					margin-right: .5rem;
					margin-bottom: 1rem;
				}
			}

			h2 {
				padding-top: 0;
				font-size: 2.5rem;
			}

			.button-wrapper {
				display: flex;
				justify-content: flex-end;

				a:last-of-type {
					width: 100%;
					text-align: center;
				}
			}


			&.popup-open {
				opacity: 1;
				margin-top: 0;
				pointer-events: auto;
			}
		}
	}

	@media screen and (min-width: 768px) {
		.portfolio-popup {
			position: absolute;
			max-width: 700px;
			width: 100%;
			height: 90vh;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			border-radius: 5px;
			background-color: #FFF;

			&__wrapper {
				background-color: transparent;
				overflow: hidden;
			}

			.content {
				
			}

			h2 {
				font-size: 3.5rem;
			}

			.button-wrapper {
				position: absolute;
				bottom: 1.5rem;
				left: 1.5rem;
				width: calc(100% - 30px);
			}
		}
	}
</style>