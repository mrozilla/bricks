// =============================================================================
// Object-fit polyfill
// =============================================================================

;((document) => {

	if('objectFit' in document.documentElement.style === false) {
		var imgTags = document.getElementsByClassName('image__src');

		for (var i = 0; i < imgTags.length; i++) {
			var imageSource = imgTags[i].querySelector('img').src;
			imgTags[i].querySelector('img').style.display = 'none';
			imgTags[i].parent().style.backgroundSize = 'cover';
			imgTags[i].parent().style.backgroundImage = 'url(' + imageSource + ')';
			imgTags[i].parent().style.backgroundPosition = 'center center';
		}
	}
	
})(document);