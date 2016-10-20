// =============================================================================
// Blog Image behaviour
// =============================================================================

;((window) => {

	'use strict';

	const HoverExpand = (config) => {
		
		const hoverExpand = {
			props: Object.assign({
				target: ".blog .image",
				activeClass: "is--expanded"
			}, config),
			state: {
				elements: []
			},
			init() {
				if (this.state.elements = document.querySelectorAll(this.props.target)) {
					let i = this.state.elements.length; while (i--) {
						this.state.elements[i].addEventListener('click', (e) => {
							this.handleClick(e.target);
						});
					}
				} else {
					return;
				}
			},
			handleClick(el) {
				el.classList.toggle(this.props.activeClass);
			}
		};

		return hoverExpand;
	};

	window.HoverExpand = HoverExpand;
	
})(window);


