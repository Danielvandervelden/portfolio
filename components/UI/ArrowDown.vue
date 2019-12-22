<template>
	<div :style="{color: color}" class="dv-ui__arrow-down">
		<a @click="scrollTo" :title="'scroll to ' + element" href="#">
		<div class="dv-ui__arrow-down--wrapper">
			<span class="dv-ui__arrow-down--title"><slot /></span>
			<div class="dv-ui__arrow-down--arrow">
				<i class="fas fa-chevron-down"></i>
			</div>
		</div>
		</a>
	</div>
</template>

<script>
	export default {
		props: ['color', 'element'],
		methods: {
			scrollTo(e) {
				e.preventDefault();
				document.getElementById(this.element).scrollIntoView({
					behavior: "smooth"
				})
			}
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.dv-ui__arrow-down {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);

		a {
			display: block;
			text-decoration: none;
			color: inherit;
		}
		
		&--wrapper {
			max-width: 100px;
			margin: 0 auto;
			text-align: center;
		}

		&--title {
			position: relative;
			top: 0px;
		}

		&--arrow {
			border-radius: 50%;
			color: $black;
			height: 30px;
			width: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			animation: up_down 1s ease-in-out infinite;
			position: relative;
			top: 0;
			color: inherit;
		}
	}

	@keyframes up_down {
		0% {
			top: 0px;
		}

		50% {
			top: 10px;
		}

		100% {
			top: 0px;
		}
	}

	@media screen and (max-width: 680px) {
		.dv-ui__arrow-down {
			bottom: 80px;
		}
	}
</style>