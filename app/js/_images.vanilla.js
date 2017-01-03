// =============================================================================
// Image background fetch
// =============================================================================

;((document) => {

	'use strict';

	const imageDivs = document.querySelectorAll('[data-image-background]')

	if (imageDivs) {
		let i = imageDivs.length; while (i--) {
			let imageSource = imageDivs[i].dataset.imageBackground;
			imageDivs[i].style.backgroundImage = "url('" + imageSource + "')";
		}
	}

})(document);