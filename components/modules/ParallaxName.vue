<template>
	<section class="dv-parallax-name">
		<div class="dv-parallax-name__container">
			<h1>
				<span class="parallax-letter">D</span>
				<span class="parallax-letter">A</span>
				<span class="parallax-letter">N</span>
				<span class="parallax-letter">I</span>
				<span class="parallax-letter">E</span>
				<span class="parallax-letter">L</span>

				<span class="dv-parallax-name__last-name">
					<span class="parallax-letter">V</span>
					<span class="parallax-letter">A</span>
					<span class="parallax-letter">N</span>
					<span>&nbsp;</span>
					<span class="parallax-letter">D</span>
					<span class="parallax-letter">E</span>
					<span class="parallax-letter">R</span>
					<span>&nbsp;</span>
					<span class="parallax-letter">V</span>
					<span class="parallax-letter">E</span>
					<span class="parallax-letter">L</span>
					<span class="parallax-letter">D</span>
					<span class="parallax-letter">E</span>
					<span class="parallax-letter">N</span>
				</span>
			</h1>
		</div>

		<div class="dv-parallax-name__ocupation">
			<h2>
				<span class="parallax-letter">F</span>
				<span class="parallax-letter">U</span>
				<span class="parallax-letter">L</span>
				<span class="parallax-letter">L</span>
				<span>&nbsp;</span>
				<span class="parallax-letter">S</span>
				<span class="parallax-letter">T</span>
				<span class="parallax-letter">A</span>
				<span class="parallax-letter">C</span>
				<span class="parallax-letter">K</span>
				<span>&nbsp;</span>

				<span class="parallax-letter black">W</span>
				<span class="parallax-letter black">E</span>
				<span class="parallax-letter black">B</span>
				<span class="parallax-letter black">D</span>
				<span class="parallax-letter black">E</span>
				<span class="parallax-letter black">V</span>
				<span class="parallax-letter black">E</span>
				<span class="parallax-letter black">L</span>
				<span class="parallax-letter black">O</span>
				<span class="parallax-letter black">P</span>
				<span class="parallax-letter black">E</span>
				<span class="parallax-letter black">R</span>
			</h2>
		</div>
	</section>
</template>

<script>
	import _ from 'lodash';

	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			let letters = document.querySelectorAll('.parallax-letter');
			let randomNumbers = Array.from({length: letters.length}, () => Math.random());
			let scrollTop = document.documentElement.scrollTop;
			
			document.addEventListener('scroll', _.throttle(() => {
				scrollTop = document.documentElement.scrollTop;
				[].forEach.call(letters, (item, index) => {
					let randomNumber = randomNumbers[index];
					let top = -(scrollTop * .4) * randomNumber;
					item.style.top = top + 'px';
				})
			}, 50))
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.dv-parallax-name {
		font-family: 'Hind Siliguri';
		font-weight: 700;
		height: 100%;

		&__container {
			position: relative;
			top: 30%;
			transform: translateY(-50%);
			text-align: center;
		}

		// All parallax letters need position relative
		.parallax-letter {
			position: relative;
		}

		h1 {
			margin: 0;
			color: $red;

			> span {
				font-size: 10rem;
				font-weight: bold;
			}
		}

		&__last-name {
			display: block;
			position: relative;
			top: -3rem;
			line-height: 3rem;
			font-size: 3.6rem !important;
			color: $black;

			> span {
				font-weight: 300;
			}
		}

		&__ocupation {
			text-align: center;
			position: relative;
			top: 20%;
		}
	}
</style>