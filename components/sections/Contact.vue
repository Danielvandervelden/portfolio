<template>
	<section id="contact" class="dv-contact">
		<h2>Get in <span class="red">contact.</span></h2>

		<p>If you would like to get in contact with me then you can either contact me through LinkedIn or via Email.</p>
		<div class="contact-links">
			<a class="contact-link linkedin" href="https://www.linkedin.com/in/danielvandervelden" title="Daniel van der Velden's LinkedIn"><img :src="require('@/assets/images/linkedin.svg')" alt="LinkedIn Logo"></a>
			<a class="contact-link email" href="mailto:daanf@live.nl" title="Daniel van der Velden's email address"><img :src="require('@/assets/images/envelope.svg')" alt="Email Icon"></a>
		</div>
	</section>
</template>

<script>
	export default {
		
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

		img {
			height: 200px;
			width: 200px;
			position: relative;
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
			}

			img {
				height: 180px;
				width: 180px;
			}
		}


		&:hover {
			opacity: .8;
		}
	}
</style>