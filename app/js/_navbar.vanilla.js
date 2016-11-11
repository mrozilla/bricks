// =============================================================================
// Navbar
// =============================================================================

;((window) => {

	'use strict';

	const Navbar = (config) => {

		const navbar = {
			props: Object.assign({
				target: ".navbar",
				toggle: ".navbar__toggle",
				hidingClass: "is--hidden",
				openClass: "is--open",
				highlightClass: "burger--highlight",
				delta: 50
			}, config),
			state: {
				element: null,
				toggle: null,
				bottom: null,
				scrollTop: null,
				lastScrollTop: 0
			},
			init() {
				if (this.state.element = document.querySelector(this.props.target)) {
					if (this.state.element.classList.contains('navbar--hiding')) {
						this.state.bottom = document.body.clientHeight - window.innerHeight;
						document.addEventListener('scroll', tools.throttle((e) => {
							this.handleScroll();
						}, 250));
					}
					if (this.state.toggle = this.state.element.querySelector(this.props.toggle)) {
						this.state.toggle.addEventListener('click', (e) => {
							this.handleClick();
						})
					}
				} else {
					return;
				}
			},
			handleScroll() {
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
				this.state.element.classList.add(this.props.hidingClass);
			},
			showNavbar() {
				this.state.element.classList.remove(this.props.hidingClass);
			},
			handleClick() {
				this.state.toggle.classList.toggle(this.props.highlightClass);
				this.state.element.classList.toggle(this.props.openClass);
			}
		}

		return navbar;
	};

	window.Navbar = Navbar;
	
})(window);


