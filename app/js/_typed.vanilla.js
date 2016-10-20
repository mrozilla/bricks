// =============================================================================
// Typed
// =============================================================================

;((window) => {

	'use strict';

	const Typed = (config) => {

		const typed = {
			props: Object.assign({
				target: ".typed",
				text: [],
				loop: false,
				speed: 150
			}, config),
			state: {
				element: null,
				arrayPos: 0,
				stringPos: 0,
				timeout: null,
			},
			init() {				
				if (this.state.element = document.querySelector(this.props.target)) {
					this.write(this.props.text[this.state.arrayPos], this.state.stringPos);
				} else {
					return;
				}
			},
			write(string, index) {
				if (this.state.arrayPos < this.props.text.length) {
					this.timeout = setTimeout(() => {
						if (this.state.stringPos < string.length) {
							this.state.element.textContent = string.substr(0, index + 1);
							this.state.stringPos++;
							this.write(this.props.text[this.state.arrayPos], this.state.stringPos);
						} else {
							setTimeout(() => {
								this.delete(this.props.text[this.state.arrayPos], this.state.stringPos);
							}, this.props.speed * 2)
						}

					}, Math.round(Math.random() * (100 - 30)) + this.props.speed);
				} else {
					return;
				}
			},
			delete(string, index) {
				if (this.state.arrayPos < this.props.text.length -1 ) {
					this.timeout = setTimeout(() => {
						if (this.state.stringPos > 0) {
							this.state.element.textContent = string.substr(0, index);
							this.state.stringPos--;
							this.delete(this.props.text[this.state.arrayPos], this.state.stringPos);
						} else {
							this.state.arrayPos++;
							this.write(this.props.text[this.state.arrayPos], this.state.stringPos);
						}
					}, this.props.speed / 4);
				} else if (this.props.loop) {
					this.timeout = setTimeout(() => {
						if (this.state.stringPos > 0) {
							this.state.element.textContent = string.substr(0, index);
							this.state.stringPos--;
							this.delete(this.props.text[this.state.arrayPos], this.state.stringPos);
						} else {
							this.state.arrayPos = 0;
							this.state.strongPos = 0;
							this.write(this.props.text[this.state.arrayPos], this.state.stringPos);
						}
					}, this.props.speed / 4);
				} else {
					return;
				}
			}
		};

		return typed;
	};

	window.Typed = Typed;
	
})(window);


