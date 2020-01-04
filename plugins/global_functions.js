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
		},
		/**
		 * Our own scrollTo functionality. This will animate a scroll to a target. The target needs to be a selector you would pass
		 * to a querySelector "div.container" for example. This will look for the FIRST element with that name on the page and
		 * scroll to it. The second parameter is how long the scrolling should take. Quite straight forward.
		 */
		scrollTo: (target, duration) => {
			let el = document.querySelector(target);
			let targetPosition = el.getBoundingClientRect().top + window.scrollY - 100;
			let startPosition = window.pageYOffset;
			let distance = targetPosition - startPosition;
			let startTime = null;

			const animation = (currentTime) => {
				if (startTime === null) startTime = currentTime
				let timeElapsed = currentTime - startTime;
				let run = ease(timeElapsed, startPosition, distance, duration);
				window.scrollTo(0, run);
				if (timeElapsed < duration) requestAnimationFrame(animation);
			}

			const ease = (t, b, c, d) => {
				t /= d / 2;
				if (t < 1) return c / 2 * t * t * t + b;
				t -= 2;
				return c / 2 * (t * t * t + 2) + b;
			};

			requestAnimationFrame(animation);
		},

		/**
		 * Use this function to determine wether a click event on a device is a touch or actual mouse click event. Simply execute
		 * the function in an "addEventListener(_.clickEvent(), () => {})" and depending on the device it'll return 'click' or 
		 * 'touchstart'.
		 */
		clickEvent: () => {
			if ('ontouchstart' in document.documentElement !== true)
				return 'click';
			else
				return 'touchend';
		},

		/**
		 * Use this function to get a boolean return of whether the user is on a Mobile phone or desktop.
		 */
		onMobile: () => {
			let isMobile = false;
			// device detection

			/* eslint-disable */
			if(window.innerWidth < 768) { 
			/* eslint-enable */
				isMobile = true;
			}

			return isMobile;
		},

		onTouchDevice: () => {
			let isTouchDevice = false;
			// device detection

			/* eslint-disable */
			if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
				|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)) | window.innerWidth <= 1024) { 
			/* eslint-enable */
				isTouchDevice = true;
			}

			return isTouchDevice;
		},

		/**
		 * Whenever you have a function that you only want to execute after a certain time has passed (for example, if the user resizes their window and on the end of that resize you want
		 * to do something) you can do that with this one. Simply set the function and how long it should wait until the event is done.
		 */
		deBounce: (func, wait, immediate) => {
			var timeout;
			return function() {
				var context = this,
					args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		},

		/**
		 * Used to slide a div up and down. Usage: set the div you want to slide toggle to height 0 initially (or if you want them to be able to retract it first, you don't have to set a height). After that
		 * create a click event listener of a button or link calling this function with a querySelector or document.getElementById parameter of which div needs to be slideToggled.
		 */
		slideToggle: (el, speed) => {
			let elementHeight = el.clientHeight;
			let maxHeight;
			let heightValue;

			if(elementHeight == 0) {
				el.style.height = 'auto';
				maxHeight = el.clientHeight;
				el.style.height = '0';
				heightValue = 0;

				slideDown()
			} else {
				heightValue = el.clientHeight;

				slideUp()
			}

			function slideDown() {
				if(heightValue < maxHeight && speed < maxHeight - el.clientHeight) {
					heightValue += speed;
					el.style.height = heightValue + 'px';

					window.requestAnimationFrame(slideDown);
				} else {
					heightValue += maxHeight - el.clientHeight;
					el.style.height = heightValue + 'px';
				}
			}

			function slideUp() {
				if(heightValue !== 0 && heightValue >= speed) {
					heightValue -= speed;
					el.style.height = heightValue + 'px';

					window.requestAnimationFrame(slideUp);
				} else if(heightValue !== 0 && heightValue < speed) {
					heightValue -= heightValue;
					el.style.height = heightValue + 'px';
				}
			}
		},
	}
})