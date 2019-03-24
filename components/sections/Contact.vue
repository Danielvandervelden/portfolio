<template>
	<section id="contact" class="dv-contact">
		<h2>Contact</h2>

		<form @submit.prevent="submitContactForm" method="POST">
			<dv-input border_color="#FFF" v-model="formInput.name" label="Name" name="name" placeholder="Enter your name" type="text"></dv-input>
			<dv-input border_color="#FFF" v-model="formInput.email" label="Email" name="email" placeholder="Enter your email address" type="email"></dv-input>
			<dv-input border_color="#FFF" v-model="formInput.subject" label="Subject" name="subject" placeholder="Enter a subject" type="text"></dv-input>
			<dv-input border_color="#FFF" v-model="formInput.content" label="Message" name="message" placeholder="Message" type="textarea"></dv-input>
			<dv-button class="red" chosenType="submit">Submit</dv-button>
		</form>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				formInput: {
					name: '',
					email: '',
					subject: '',
					content: ''
				}
			}
		},
		methods: {
			submitContactForm() {
				if(!this.formInput.name.length == 0 && !this.formInput.email.length == 0 && !this.formInput.subject.length == 0 && !this.formInput.content.length == 0) {
					this.$store.dispatch('frontend/portfolio/submitForm', this.formInput);
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.dv-contact {
		height: 100vh;
		@include full-width-background($grey);
	}

	h2 {
		font-size: 5rem;
	}
</style>