// =============================================================================
// Sidebar behaviour
// =============================================================================

;((window) => {

	'use strict';

	const Layout = (config) => {

		const layout = {
			props: Object.assign({
				target: ".layout__wrapper",
				toggle: ".toggle__sidebar",
				collapsedClass: "is--collapsed"
			}, config),
			state: {
				element: null,
				toggle: null
			},
			init() {
				if (this.state.element = document.querySelector(this.props.target)) {
					if (this.state.toggle = this.state.element.querySelector(this.props.toggle)) {
						this.state.toggle.addEventListener('click', (e) => {
							e.preventDefault();
							e.stopPropagation();
							this.handleClick();
						});
					} else {
						return false;
					}
				} else {
					return false;
				}			
			},
			handleClick() {
				this.state.element.classList.toggle(this.props.collapsedClass);
			}
		};

		return layout;
	};

	window.Layout = Layout;

})(window);


