// =============================================================================
// Tabs behaviour
// =============================================================================

;((window) => {

	'use strict';

	const Tabs = (config) => {

		const tabs = {
			props: Object.assign({
				target: "#tabs",
				tabsControl: ".tabs__control",
				tabsContent: ".tabs__content",
				activeClass: "is--active"
			}, config),
			state: {
				element: null,
				activeIndex: 0
			},
			init() {
				if (this.state.element = document.querySelector(this.props.target)) {
					this.state.element.tabsControl = this.state.element.querySelector(this.props.tabsControl).childNodes;
					this.state.element.tabsContent = this.state.element.querySelector(this.props.tabsContent).childNodes;

					let i = this.state.element.tabsControl.length; while (i--) {
						let index = i;
						this.state.element.tabsControl[i].addEventListener('click', (e) => {
							e.preventDefault();
							this.goToTab(index);
						});
					}
				} else {
					return false;
				}			
			},
			goToTab(index) {
				if (index !== this.state.activeIndex && index >= 0 && index <= this.state.element.tabsControl.length) {
					this.state.element.tabsControl[this.state.activeIndex].classList.remove(this.props.activeClass);
					this.state.element.tabsContent[this.state.activeIndex].classList.remove(this.props.activeClass);
					this.state.element.tabsControl[index].classList.add(this.props.activeClass);
					this.state.element.tabsContent[index].classList.add(this.props.activeClass);
					this.state.activeIndex = index;
				}
			}
		};

		return tabs;
	};

	window.Tabs = Tabs;

})(window);


