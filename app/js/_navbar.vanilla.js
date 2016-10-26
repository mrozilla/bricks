// =============================================================================
// Navbar
// =============================================================================

;((window) => {

	'use strict';

	const Navbar = (config) => {

		const navbar = {
			props: Object.assign({
				target: ".navbar--hiding",
				class: "is--hidden",
				delta: 50
			}, config),
			state: {
				element: null,
				bottom: null,
				scrollTop: null,
				lastScrollTop: 0
			},
			init() {
				if (this.state.element = document.querySelector(this.props.target)) {
					this.state.bottom = document.body.clientHeight - window.innerHeight;
					document.addEventListener('scroll', tools.throttle((e) => {
						this.handleScroll();
					}, 250));
				} else {
					return;
				}
			},
			handleScroll() {
				console.log("handledScroll");
				this.state.scrollTop = window.pageYOffset | document.body.scrollTop;
				if (Math.abs(this.state.lastScrollTop - this.state.scrollTop) <= this.props.delta) {
					return;
				} else {
					if (this.state.scrollTop > (this.state.bottom - this.props.delta) 
						|| this.state.scrollTop <= 0 
						|| this.state.scrollTop < this.state.lastScrollTop) {
						this.showNavbar();
					} else if (this.state.scrollTop > this.state.lastScrollTop) {
						this.hideNavbar();
					}
				}
				this.state.lastScrollTop = this.state.scrollTop;
			},
			hideNavbar() {
				this.state.element.classList.add(this.props.class);
			},
			showNavbar() {
				this.state.element.classList.remove(this.props.class);
			}
		}

		return navbar;
	};

	window.Navbar = Navbar;
	
})(window);


