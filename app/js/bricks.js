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

// $(function() {
// 	$('.twitterLink').click(function(event) {
// 		event.preventDefault;
// 		var content = $(this).parent().siblings('.blog__title').text() || $(this).parent().siblings('.blog__quote--copy').text();
// 		var author = $(this).parent().siblings('.blog__quote--reference').text() || "";
// 		var intent = "https://twitter.com/intent/tweet?text=";
// 		var link = window.location.href;
		
// 		if (author !== "") {
// 			window.open(intent + '"' + encodeURI(content) + '"' + " on " + link);
// 		} else {
// 			window.open(intent + "Great read by @mrozilla: " + link);
// 		}
// 		return false;
// 	});
// });

// =============================================================================
// Blog Facebook behaviour
// =============================================================================

// $(function() {
// 	$('.facebookLink').click(function(event) {
// 		event.preventDefault;
// 		var content = $(this).parent().siblings('.blog__title').text() || $(this).parent().siblings('.blog__quote--copy').text();
// 		var appId = "https://www.facebook.com/dialog/feed?app_id=279503749068654";
// 		var redirectUri = "redirect_uri=http://universe.mrozilla.cz/close.php";
// 		var link = "link=" + window.location.href;
// 		var description = "description=" + encodeURI(content);
		
// 		window.open(appId + "&" + redirectUri + "&" + link + "&" + description);
// 		return false;
// 	});
// });

// =============================================================================
// Hiding navbar
// =============================================================================

// $(function() {
// 	const bottom = $(document).height() - $(window).height();
// 	const navbar = $(".navbar--hiding");
// 	let lastScrollTop = 0;
// 	let delta = 50;
	
// 	$(window).scroll(function(event) {
// 		let scrollTop = $(this).scrollTop();

// 		if(Math.abs(lastScrollTop - scrollTop) <= delta)
// 			return;

// 		if (scrollTop > lastScrollTop) {
// 			// downscroll code
// 			navbar.addClass('is--hidden');
// 		} else {
// 			// upscroll code
// 			navbar.removeClass('is--hidden');
// 		} 
// 		if (scrollTop > bottom - delta) {
// 			// end of page code
// 			navbar.removeClass('is--hidden');
// 		}
// 		if (scrollTop <= 0) {
// 			// top of page code
// 			navbar.removeClass('is--hidden');
// 		}
// 		lastScrollTop = scrollTop;
// 	});
// });

// =============================================================================
// Show mobile navbar
// =============================================================================

// $(() => {
// 	$('.navbar__toggle').click(() => {
// 		$('.navbar__right').toggleClass("is--open");
// 		$('.burger').toggleClass("burger--highlight");
// 	});
// });

// =============================================================================
// Show sidebar
// =============================================================================

// $(() => {
// 	$('.toggle__sidebar').click(() => {
// 		$('.layout__wrapper').toggleClass("is--collapsed");
// 	});
// });

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

// $(() => {
// 	if ($('.scrollReveal').length > 0) {
// 		window.sr = ScrollReveal({ reset: true, duration: 1000, mobile: false, opacity: 0 });
// 		sr.reveal( '.scrollReveal' );
// 	}
// });

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
// Smooth scroll
// =============================================================================

const smooth = new Smooth();
smooth.init();

// =============================================================================
// Typed.js settings
// =============================================================================

const typed = new Typed({
	text: ["framework.", "helper.", "friend."], 
	loop: true
});

typed.init();

// =============================================================================
// Blog Image behaviour
// =============================================================================

const blogImages = new HoverExpand();
blogImages.init();

// =============================================================================
// Highlight.js init
// =============================================================================

hljs.initHighlightingOnLoad();

// =============================================================================
// Tabs init
// =============================================================================

const tabs1 = new Tabs({target: "#tabs1"});
const tabs2 = new Tabs({target: "#tabs2"});
tabs1.init();
tabs2.init();

// =============================================================================
// Sticky init
// =============================================================================

const sticky = new Sticky();
sticky.init();


