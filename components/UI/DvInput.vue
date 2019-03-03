<template>
	<div class="form-control">
		<label v-if="label" :for="name">{{label}}</label>
		<input v-if="type == 'text'" :name="name" class="dv-input" @input="inputHandler($event)" :type="type" :placeholder="placeholder">
		<textarea class="dv-textarea" v-else-if="type = 'textarea'" @input="inputHandler($event)" :placeholder="placeholder" />
	</div>
</template>

<script>
	export default {
		props: [
			'type',
			'placeholder',
			'value',
			'label',
			'name'
		],
		data() {
			return {
			}
		},
		methods: {
			inputHandler(e) {
				this.$emit('input', e.target.value);
			}
		}
	}
</script>
<style scoped lang='scss'>
	@import '~assets/styles/_base.scss';

	.form-control {
		margin: 15px 0;
	}

	label {
		display: block;
	}

	.dv-input {
		padding: 1rem 1.5rem;
		border: 1px solid $grey;
		border-radius: 5px;
		background-color: transparent;
		width: 100%;
		box-sizing: border-box;

		&:active,
		&:focus {
			outline: 0;
			border: 1px solid $grey;
		}
	}

	.dv-textarea {
		padding: 1rem 1.5rem;
		border: 1px solid $grey;
		border-radius: 5px;
		background-color: transparent;
		width: 100%;
		box-sizing: border-box;

		&:active,
		&:focus {
			outline: 0;
			border: 1px solid $grey;
		}
	}
</style>