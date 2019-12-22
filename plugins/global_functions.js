import Vue from 'vue';

Vue.mixin({
	methods: {
		/**
		 * 
		 * @param {Array} elements this is an array of objects with two keys. First is the direction, second is the element queryselector  
		 * @param {Element} elementToBeWatched this is the element that will be watched with the scroll listener (the amount of pixels it is from the top)
		 * @param {Int} fromTop this is the amount of pixels from top the element needs to be for the animation to be triggered. 
		 */
		slideIn(elements, elementToBeWatched, fromTop = 400) {
			elements.forEach(el => {
				el.element.style.transition = "all .3s ease-in-out";

				switch(el.direction) {
					case 'top':
						el.element.style.transform = 'translateY(-50px)';
						el.element.style.opacity = '0';
						break;
					case 'bottom':
						el.element.style.transform = 'translateY(50px)';
						el.element.style.opacity = '0';
						break;
					case 'left':
						el.element.style.transform = 'translateX(-50px)';
						el.element.style.opacity = '0';
						break;
					case 'right':
						el.element.style.transform = 'translateX(50px)';
						el.element.style.opacity = '0';
						break;
					default: 
						alert("Pick a direction you dumbass.")
				}
			})

			document.addEventListener('scroll', _.throttle(() => {
				if(elementToBeWatched.getBoundingClientRect().top < fromTop) {
					elements.forEach(el => {
						switch(el.direction) {
							case 'top':
								el.element.style.transform = 'translateY(0px)';
								el.element.style.opacity = '1';
								break;
							case 'bottom':
								el.element.style.transform = 'translateY(0px)';
								el.element.style.opacity = '1';
								break;
							case 'left':
								el.element.style.transform = 'translateX(0px)';
								el.element.style.opacity = '1';
								break;
							case 'right':
								el.element.style.transform = 'translateX(0px)';
								el.element.style.opacity = '1';
								break;
							default: 
								alert("Pick a direction you dumbass.")
						}
					})
				}
			}, 100))
		}
	}
})