// =============================================================================
// Origin.js
// =============================================================================

//
// Collection of scripts used by the framework
//

'use strict';

// Intro message

const styles = [
    'background-color: #ea2e42',
    'color: white',
    'line-height: 40px',
    'font-weight: bold',
    'padding: 10px 0'
].join(';');

console.log('%c Oh hello, nice to meet you. If you have any feedback or suggestions, send them to @mrozilla :) ', styles);

// =============================================================================
// Blog Twitter behaviour
// =============================================================================

$(function() {
	$('.twitterLink').click(function(event) {
		event.preventDefault;
		var content = $(this).parent().siblings('.blog__title').text() || $(this).parent().siblings('.blog__quote--copy').text();
		var author = $(this).parent().siblings('.blog__quote--reference').text() || "";
		var intent = "https://twitter.com/intent/tweet?text=";
		var link = window.location.href;
		
		if (author !== "") {
			window.open(intent + '"' + encodeURI(content) + '"' + " on " + link);
		} else {
			window.open(intent + "Great read by @mrozilla: " + link);
		}
		return false;
	});
});

// =============================================================================
// Blog Facebook behaviour
// =============================================================================

$(function() {
	$('.facebookLink').click(function(event) {
		event.preventDefault;
		var content = $(this).parent().siblings('.blog__title').text() || $(this).parent().siblings('.blog__quote--copy').text();
		var appId = "https://www.facebook.com/dialog/feed?app_id=279503749068654";
		var redirectUri = "redirect_uri=http://universe.mrozilla.cz/close.php";
		var link = "link=" + window.location.href;
		var description = "description=" + encodeURI(content);
		
		window.open(appId + "&" + redirectUri + "&" + link + "&" + description);
		return false;
	});
});

// =============================================================================
// smoothScroll
// =============================================================================

$(function() {
	if ($('.parallax').length > 0 ) {
		var container = $('.parallax');
	} else if ($('.layout__split--content').length > 0) {
		var container = $('.layout__split--content');
	} else {
		var container = $('body, html');
	}

	$('a').click(function() {
		const target = $($(this).attr("href"));
		if(target.offset()) {
			container.animate({
				scrollTop: container.scrollTop() + target.offset().top
			}, 500);
			return false;
		}
	});
});

// =============================================================================
// hidingNavbar
// =============================================================================

$(function() {
	var lastScrollTop = 0, delta = 50;
	const bottom = $(document).height() - $(window).height();
	const navbar = $(".navbar--hiding");
	
	$(window).scroll(function(event) {
		var scrollTop = $(this).scrollTop();

		if(Math.abs(lastScrollTop - scrollTop) <= delta)
			return;

		if (scrollTop > lastScrollTop) {
			// downscroll code
			navbar.addClass('is--hidden');
		} else {
			// upscroll code
			navbar.removeClass('is--hidden');
		} 
		if (scrollTop > bottom - delta) {
			// end of page code
			navbar.removeClass('is--hidden');
		}
		if (scrollTop <= 0) {
			// top of page code
			navbar.removeClass('is--hidden');
		}
		lastScrollTop = scrollTop;
	});
});

// =============================================================================
// Show mobile navbar
// =============================================================================

$(() => {
	$('.navbar__toggle').click(() => {
		$('.navbar__right').toggleClass("is--open");
		$('.burger').toggleClass("burger--highlight");
	});
});

// =============================================================================
// Show sidebar
// =============================================================================

$(() => {
	$('.toggle__sidebar').click(() => {
		$('.layout__wrapper').toggleClass("is--collapsed");
	});
});

// =============================================================================
// Remove navbar notification
// =============================================================================

// $(() => {
// 	$('.nav__link').click(() => {
// 		$(this).next().hide(); // Careful, dependent on DOM structure
// 	});
// });

// =============================================================================
// ScrollReveal settings
// =============================================================================
$(() => {
	if ($('.scrollReveal').length > 0) {
		window.sr = ScrollReveal({ reset: true, duration: 1000, mobile: false, opacity: 0 });
		sr.reveal( '.scrollReveal' );
	}
})

// =============================================================================
// Typed.js settings
// =============================================================================

$(() => {
	if(typeof $(".typed").typed === 'function') {
		$(".typed").typed({
		strings: ["a designer.", "a web designer.", "a copywriter.", "getting sh*t done."],
		typeSpeed: 100,
		startDelay: 500,
		});
	}
});

// =============================================================================
// Reading progress bar
// =============================================================================

// $(function() {  
// 	var winHeight = $(window).height(),
// 	docHeight = $('.parallax').prop('scrollHeight'),
// 	progressBar = $('.scroll__progress'),
// 	max, value;

// 	// Set the max scrollable area 
// 	max = docHeight - winHeight;
// 	progressBar.attr('max', max);

// 	$('.parallax').on('scroll', function (){
// 		value = $('.parallax').scrollTop();
// 		progressBar.attr('value', value);
// 	});
// });

// =============================================================================
// Object-fit polyfill
// =============================================================================

$(function() {
	if('objectFit' in document.documentElement.style === false) {
		var imgTags = document.getElementsByClassName('image__src');

		for (var i = 0; i < imgTags.length; i++) {
			// Get img source in a variable
			var imageSource = imgTags[i].querySelector('img').src;
			// Hide image
			imgTags[i].querySelector('img').style.display = 'none';
			// Add background-size: cover
			imgTags[i].parent().style.backgroundSize = 'cover';
			// Add background-image: and put image source here
			imgTags[i].parent().style.backgroundImage = 'url(' + imageSource + ')';
			// Add background-position: center center
			imgTags[i].parent().style.backgroundPosition = 'center center';
		}
	}
});

// =============================================================================
// Blog Image behaviour
// =============================================================================

$(function() {
	$('.blog .image').click(function () {
		$(this).toggleClass("image--expanded");
	});
});

// =============================================================================
// Highlight.js init
// =============================================================================

hljs.initHighlightingOnLoad();


