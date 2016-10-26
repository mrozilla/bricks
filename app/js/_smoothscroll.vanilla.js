// =============================================================================
// Smooth scroll
// =============================================================================

;((window) => {

	'use strict';

	const Smooth = (config) => {

		const smooth = {
			props: Object.assign({
				target: "body",
				duration: 750
			}, config),
			state: {
				container: null
			},
			init() {
				if (this.state.container = document.querySelector(this.props.target)) {
					document.addEventListener('click', (e) => {
						if (e.target.getAttribute('href') && e.target.getAttribute('href').charAt(0) === '#') {
							e.preventDefault();
							e.stopPropagation();
							this.handleClick(e.target);
							this.changeURL(e.target);
						}
					});
				} else {
					return;
				}
			},
			handleClick(el) {
				if (this.state.container.querySelector(el.getAttribute('href'))) {
					this.smoothScroll((this.state.container.querySelector(el.getAttribute('href')).getBoundingClientRect().top + window.scrollY));
				} else {
					return;
				}
			},
			smoothScroll(to) {
				const startTime = window.performance.now();
				const endTime = startTime + this.props.duration;
				const start = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
				const animateScroll = () => {
					const now = window.performance.now();
					this.state.container.scrollTop = this.easeInQuint(now - startTime, start, (to - start), this.props.duration);
					if (now < endTime) {
						requestAnimationFrame(animateScroll);
					}
				};
				animateScroll();
			},
			easeInQuint(t, b, c, d) {
				const ts=(t/=d)*t;
				const tc=ts*t;
				return b+c*(tc*ts + -5*ts*ts + 10*tc + -10*ts + 5*t);
			},
			changeURL(target) {
				if(history.pushState) {
					history.pushState({}, "", target.getAttribute('href'));
				}
				else {
					location.hash = target.getAttribute('href');
				}
			}
		}

		return smooth;
	};

	window.Smooth = Smooth;
	
})(window);


