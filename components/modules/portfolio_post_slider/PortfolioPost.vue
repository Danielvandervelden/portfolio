<template>
	<div :id="name.toLowerCase().replace(/[^A-Z0-9]/ig, '_')" :class="link ? 'with-button' : ''" class="dv-portfolio__item">
		<div class="dv-portfolio__item--image"><img :src="background" :alt="name"></div>
		<div class="dv-portfolio__item--content" :data-id="id">
			<h4 class="dv-portfolio__item--title">{{name}}</h4>
			<div class="content">{{shortContent()}}</div>
			<div class="button-wrapper">
				<dv-button @click.native="triggerPopup" :title="name" class="black dv-portfolio__item--link" ext_link="#">Read more</dv-button>
				<dv-button :title="name" v-if="link" class="red dv-portfolio__item--link" :ext_link="link">Visit {{name}}</dv-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {		
		props: [
			'background',
			'id',
			'name',
			'content',
			'link'
		],
		mounted() {
			this.slideIn([{direction: 'bottom', element: this.$el}], this.$el, 400);
		},
		methods: {
			shortContent() {
				let filteredContent = this.content.replace(/<[^>]*>/g, "");
				let maxLength = 200;

				let trimmedContent = filteredContent.substr(0, maxLength);
				trimmedContent = trimmedContent.substr(0, Math.min(trimmedContent.length, trimmedContent.lastIndexOf(" ")));

				return trimmedContent + "...";
			},
			
			triggerPopup(e) {
				e.preventDefault();
				this.$emit('openPopup', {popup: this.name.toLowerCase().replace(/[^A-Z0-9]/ig, '_') + '-popup', post: this.name.toLowerCase().replace(/[^A-Z0-9]/ig, '_')});
			}
		}
	}
</script>
<style scoped lang='scss'>
	.dv-portfolio__item {
		width: 100%;
		background-color: #FFF;
		box-sizing: border-box;
		border-radius: .8rem;
		transition: all .3s ease-in-out;
		margin-bottom: 3rem;

		&--image {
			border-radius: .8rem .8rem 0 0;
			position: relative;
			overflow: hidden;

			img {
				width: 100%;
				height: auto;
				vertical-align: top;
			}
		}

		&--content {
			padding: 1.5rem;

			h4 {
				padding-top: 0;
			}

			.content {
				margin-bottom: 1.5rem;
			}

			.button-wrapper {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				a {
					flex: 100% 0 1;
					text-align: center;

					+ a {
						margin-top: 1rem;
					}
				}
			}
		}
	}

	@media screen and (min-width: 768px) {
		.dv-portfolio__item {
			width: 48%;
			margin-bottom: 50px;
			position: relative;
			float: right;
			height: 500px;

			&:nth-child(odd) {
				float: left;
				margin-right: 4%;
			}

			&:nth-child(even) {
				top: 250px;
			}
			
			.content {
				line-height: 2.6rem;
			}

			&--content {
				padding: 1.5rem 1.5rem 1.5rem 1.5rem;

				.with-button & {
					padding: 1.5rem 1.5rem 6rem 1.5rem;
				}
			}

			.button-wrapper {
				width: calc(100% - 30px);
				position: absolute;
				bottom: 1.5rem;
				right: 1.5rem;
				flex-wrap: nowrap;

				a {
					flex: auto 0 1;

					+ a {
						margin-top: 0;
					}
				}
			}

			&:hover {
				transform: translateY(-5px);
				box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, .15);
			}
		}
	}
</style>