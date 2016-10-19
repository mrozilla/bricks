// =============================================================================
// Sticky behaviour
// =============================================================================

;(function(window) {

	'use strict';

	const Sticky = (config) => {

		const sticky = {
			props: Object.assign({
				target: "#sticky",
				stickyClass: "sticky"
			}, config),
			state: {
				element: {},
				isAdded: false
			},
			init() {
				this.state.element = document.querySelector(this.props.target);
				if (this.state.element) {
					this.state.element.elPosition = this.state.element.getBoundingClientRect();
					this.state.element.elPositionTop = window.pageYOffset - (this.state.element.elPosition.top * -1);

					this.state.element.placeholder = document.createElement('div');
					this.state.element.placeholder.style.width = this.state.element.elPosition.width + 'px';
					this.state.element.placeholder.style.height	= this.state.element.elPosition.height + 'px';

					window.addEventListener('scroll', () => {
						this.handleScroll();
					});
				} else {
					return false;
				}
			},
			handleScroll() {
				if (window.pageYOffset >= this.state.element.elPositionTop && !this.state.isAdded) {
					this.stickElement();
				} else if (window.pageYOffset < this.state.element.elPositionTop && this.state.isAdded) {
					this.unstickElement();
				}
			},
			stickElement() {
				this.state.element.classList.add(this.props.stickyClass);
				this.state.element.parentNode.insertBefore(this.state.element.placeholder, this.state.element);
				this.state.isAdded = true;
			},
			unstickElement() {
				this.state.element.classList.remove(this.props.stickyClass);
				this.state.element.parentNode.removeChild(this.state.element.placeholder);
				this.state.isAdded = false;
			}
		};

		return sticky;
	};

	window.Sticky = Sticky;

})(window);


