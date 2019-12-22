<template>
	<section id="contact" class="dv-contact">
		<h2>Get in <span class="red">contact.</span></h2>

		<p>If you would like to get in contact with me then you can reach me through LinkedIn or via Email.</p>
		<div class="contact-links">
			<a target="_blank" class="contact-link linkedin" href="https://www.linkedin.com/in/danielvandervelden" title="Daniel van der Velden's LinkedIn"><img :src="require('@/assets/images/linkedin.svg')" alt="LinkedIn Logo"></a>
			<a target="_blank" class="contact-link email" href="mailto:daanf@live.nl" title="Daniel van der Velden's email address"><img :src="require('@/assets/images/envelope.svg')" alt="Email Icon"></a>
		</div>
	</section>
</template>

<script>
	export default {
		mounted() {
			let headingElements = [
				{
					element: this.$el.querySelector('h2'),
					direction: 'bottom'
				},
				{
					element: this.$el.querySelector('p'),
					direction: 'bottom'
				}
			];

			this.slideIn(headingElements, this.$el, 400);

			let contactElements = [
				{
					element: this.$el.querySelector('.linkedin'),
					direction: 'left'
				},
				{
					element: this.$el.querySelector('.email'),
					direction: 'right'
				}
			];

			this.slideIn(contactElements, this.$el.querySelector('.contact-links'), 400);
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.dv-contact {
		min-height: 100vh;
		@include full-width-background($grey);
	}

	h2 {
		font-size: 5rem;
	}

	.contact-links {
		display: flex;
		align-items: center;
		justify-content: space-evenly;	
		margin-top: 100px;
	}

	.contact-link {
		position: relative;
		transition: all .3s ease-in-out;
		display: block;
		cursor: pointer;

		img {
			height: 200px;
			width: 200px;
			position: relative;
			pointer-events: none;
		}

		&.email {
			&:before {
				content: '';
				height: 100%;
				width: 100%;
				display: block;
				padding: 7px 20px;
				position: absolute;
				background-color: #E85A4F;
				top: -10px;
				left: -20px;
				border-radius: 15px;
				box-sizing: content-box;
				pointer-events: none;
			}

			img {
				height: 180px;
				width: 180px;
			}
		}


		&:hover {
			opacity: .8 !important;
		}
	}

	@media screen and (max-width: 680px) {
		.dv-contact {
			.contact-links {
				a {
					img {
						height: 50px;
						width: 50px;
					}

					&.email {
						height: 50px;
						width: 50px;
						display: flex;
						justify-content: center;
						align-items: center;
						position: relative;
						top: -4px;
						
						&:before {
							padding: 0;
							border-radius: .4rem;
							left: 0;
							top: 0;
						}

						img {
							height: 30px;
							width: 30px;
						}
					}
				}
			}
		}
	}
</style>