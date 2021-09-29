<template>
	<section id="contact" class="dv-contact">
		<div class="dv-contact__wrapper">
			<h2>Get in <span class="red">contact.</span></h2>

			<p>If I sparked your interest and you feel like you would like to contact me, that is ofcourse not a problem! Please send me a connection request
				through LinkedIn or an e-mail. I will try to get back to you as soon as possible.
			</p>
			<div class="contact-links">
				<a rel="noreferrer noopener" target="_blank" class="contact-link linkedin" href="https://www.linkedin.com/in/danielvandervelden" title="Daniel van der Velden's LinkedIn"><img :src="require('@/assets/images/linkedin.svg')" alt="LinkedIn Logo"></a>
				<a rel="noreferrer noopener" target="_blank" class="contact-link email" href="mailto:daanf@live.nl" title="Daniel van der Velden's email address"><img :src="require('@/assets/images/envelope.svg')" alt="Email Icon"></a>
			</div>
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

			this.slideIn(contactElements, this.$el, 400);
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.dv-contact {
		min-height: 100vh;
		@include full-width-background($grey);
		align-items: center;
		display: flex;
		justify-content: flex-start;

		&__wrapper {
			width: 100%;
		}
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
				margin-top: 5rem;
				display: block;
				padding-bottom: 1.5rem;

				a {
					flex-basis: 100%;
					display: block;
					overflow: hidden;
					height: 200px;
					width: 200px;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 1.3rem;
					margin: 0 auto;

					+ a {
						margin-top: 4rem;
					}

					&.email img {
						height: 150px;
						width: 150px;
					}
				}
			}
		}
	}
</style>