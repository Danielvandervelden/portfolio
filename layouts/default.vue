<template>
  <div class="dv-content-wrapper">
	  	<div class="dv-main">
    		<nuxt />
		</div>
		<div class="sk-folding-cube">
			<div class="sk-cube1 sk-cube"></div>
			<div class="sk-cube2 sk-cube"></div>
			<div class="sk-cube4 sk-cube"></div>
			<div class="sk-cube3 sk-cube"></div>
		</div>
  </div>
</template>

<style lang="scss" scoped>
	@import "~assets/styles/_base.scss";

	.dv-content-wrapper {
		@include container();
	}

	@media screen and (max-width: 1024px) {
		.dv-content-wrapper {
			overflow: hidden;
		}
	}
</style>
