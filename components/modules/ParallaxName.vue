<template>
	<section class="dv-parallax-name">
		<div class="dv-parallax-name__container">
			<h1>
				<span :class="letter !== ' ' ? 'parallax-letter' : ''" v-for="(letter, index) in generateLetterArray(myself.firstName)" :key="letter + index">{{letter.toUpperCase()}}</span>
				<span class="dv-parallax-name__last-name">
					<span :class="letter !== ' ' ? 'parallax-letter' : ''" v-for="(letter, index) in generateLetterArray(myself.lastName)" :key="letter + index">{{letter.toUpperCase()}}</span>
				</span>
			</h1>
		</div>

		<div class="dv-parallax-name__ocupation">
			<h2>
				<span :class="[letter !== ' ' ? 'parallax-letter' : '', index >= 11 ? 'black' : '']" v-for="(letter, index) in generateLetterArray(myself.occupation)" :key="letter + index">{{letter.toUpperCase()}}</span>
			</h2>
		</div>
	</section>
</template>

<script>
	import _ from 'lodash';

	export default {
		data() {
			return {
				myself: {
					firstName: "Daniel",
					lastName: "van der Velden",
					occupation: "full stack webdeveloper"
				}
			}
		},
		mounted() {
			let randomNumbers = Array.from({length: [...document.querySelectorAll('.parallax-letter')].length}, () => Math.random());
			let scrollTop = document.documentElement.scrollTop;
			
			document.addEventListener('scroll', _.throttle(() => {
				scrollTop = document.documentElement.scrollTop;
				[...document.querySelectorAll('.parallax-letter')].forEach((item, index) => {
					let randomNumber = randomNumbers[index];
					let top = (scrollTop * .3) * randomNumber;
					item.style.top = top + 'px';
				})
			}, 30))
		},
		methods: {
			generateLetterArray(string) {
				let htmlArray = [];
				
				_.each([...string.split('')], (letter) => {
					htmlArray.push(letter);
				})

				return htmlArray;
			}
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

			> span:not(.dv-parallax-name__last-name) {
				font-size: 10rem;
				font-weight: bold;
				letter-spacing: 1rem;
			}
		}

		&__last-name {
			display: block;
			position: relative;
			top: -3rem;
			line-height: 3rem;
			color: $black;
			font-size: 3.6rem !important;

			> span {
				font-weight: 300;
				letter-spacing: .9rem;
			}
		}

		&__ocupation {
			text-align: center;
			position: relative;
			top: 20%;

			span {
				letter-spacing: 1rem;
			}
		}
	}
</style>