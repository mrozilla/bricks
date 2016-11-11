// =============================================================================
// Blog header behaviour
// =============================================================================

;((window) => {

	'use strict';

	const Blog = (config) => {

		const blog = {
			props: Object.assign({
				target: ".blog",
				title: ".blog__title",
				leadin: ".blog__leadin",
				author: ".blog__author",
				twitterTrigger: "twitterTrigger",
				facebookTrigger: "facebookTrigger"
			}, config),
			state: {
				element: null,
				twitterTrigger: null,
				facebookTrigger: null,
				title: "",
				leadin: "",
				author: ""
			},
			init() {
				if (this.state.element = document.querySelector(this.props.target)) {
					this.state.title = this.state.element.querySelector(this.props.title).textContent;
					this.state.leadin = this.state.element.querySelector(this.props.leadin).textContent;
					this.state.author = this.state.element.querySelector(this.props.author).textContent;
					this.state.element.addEventListener('click', (e) => {
						e.preventDefault;
						e.stopPropagation;
						this.handleClick(e.target);
					});
				} else {
					return false;
				}			
			},
			handleClick(node) {
				if (node.classList.contains(this.props.twitterTrigger)) {
					this.postTwitter();
				} else if (node.classList.contains(this.props.facebookTrigger)) {
					this.postFacebook();
				} else {
					return false;
				}
			},
			postTwitter() {
				const intent = "https://twitter.com/intent/tweet?text=";
				const link = window.location.href;
				window.open(intent + '"' + encodeURI(this.state.title) + '"' + " on " + link);
			},
			postFacebook() {
				const appId = "https://www.facebook.com/dialog/feed?app_id=279503749068654"; // Update to your app_id
				const redirectUri = "redirect_uri=http://universe.mrozilla.cz/close.php";
				const link = "link=" + window.location.href;
				const description = "description=" + encodeURI(this.props.title);
				window.open(appId + "&" + redirectUri + "&" + link + "&" + description);
			}
		};

		return blog;
	};

	window.Blog = Blog;

})(window);


