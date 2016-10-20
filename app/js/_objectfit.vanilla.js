// =============================================================================
// Object-fit polyfill
// =============================================================================

;((document) => {

	'use strict';

	if('objectFit' in document.documentElement.style === false) {
		const imgTags = document.getElementsByClassName('image__src');

		let i = imgTags.length; while (i--) {
			let imageSource = imgTags[i].querySelector('img').src;
			imgTags[i].querySelector('img').style.display = 'none';
			imgTags[i].parent().style.backgroundSize = 'cover';
			imgTags[i].parent().style.backgroundImage = 'url(' + imageSource + ')';
			imgTags[i].parent().style.backgroundPosition = 'center center';
		}
	}

})(document);