// =============================================================================
// Form behaviour
// =============================================================================

;((window) => {

	'use strict';

	const Form = (config) => {

		const form = {
			props: Object.assign({
				target: ".form",
				fileSizeLimitMB: 2,
				errorClass: "is--error"
			}, config),
			state: {
				element: null,
				fields: null
			},
			init() {
				if (this.state.element = document.querySelector(this.props.target)) {
					this.state.fields = this.state.element.querySelectorAll('input');
					this.onLoad();
					let i = this.state.fields.length; while (i--) {
						if (this.state.fields[i].type !== 'file' && this.state.fields[i].type !== 'submit') {
							this.state.fields[i].addEventListener('blur', (e) => {
								this.onBlur(e.target);
							});
						} else 	if (this.state.fields[i].type === 'file') {
							this.state.fields[i].addEventListener('change', (e) => {
								this.checkFileSize(e.target);
							});
						} else if (this.state.fields[i].type === 'submit') {
							this.state.fields[i].addEventListener('click', (e) => {
								this.onSubmit(e);
							});
						}
					}
				} else {
					return false;
				}			
			},
			onLoad() {
				let i = this.state.fields.length; while (i--) {
					if (localStorage.getItem(this.state.fields[i].name) !== null && this.state.fields[i].type !== 'file') {
						this.state.fields[i].value = localStorage.getItem(this.state.fields[i].name);
					}
				}
			},
			onBlur(node) {
				localStorage.setItem(node.name, node.value);
			},
			checkFileSize(node) {
				node.classList.remove(this.props.errorClass);
				let filesize = ((node.files[0].size/1024)/1024).toFixed(4);
				if (filesize > this.props.fileSizeLimitMB) {
					node.classList.add(this.props.errorClass);
					node.value = "";
				}
			},
			onSubmit(event) {
				localStorage.clear();
			}
		};

		return form;
	};

	window.Form = Form;	
	
})(window);


