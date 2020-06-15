$(function() {
	//
	// Preloader
	//

	// UNCOMMENT LATER
	// $(window).on('load', function() {
	// 	$('.preloader').fadeOut();
	// 	$('body').css({
	// 		'overflow': 'auto'
	// 	});
	// 	console.log("hi");
	// });

	//
	// Preloader end
	//

	//
	// Main page slider
	//

	$('.main-slider').owlCarousel({
		items: 5,
		loop: false,
		margin: 15,
		nav: true
	});

	//
	// Main page slider end
	//

	//
	// Tab active
	//

	$('.wrapper-tab-elem').click(function() {
		$(this).toggleClass('active').siblings().removeClass('active');
	})

	//
	// Tab active end 
	//

	//
	//  Track like 
	//

	$('.track-like').click(function() {
		$(this).toggleClass('active');
	});

	//
	// Track like end
	//
	
	//
	// Track add
	// 

	$('.track-add').click(function() {
		$(this).toggleClass('active');
	});

	//
	// Track add end
	//

	//
	// Player HQ, shuffle and repeat btn active
	//

	$('.p-track-control').click(function() {
		$(this).toggleClass('active');
	})

	//
	// Player HQ, shuffle and repeat btn active end
	//

	//
	// Header info play button 
	//

	$('.header-info-play').click(function() {
		event.preventDefault();
		$(this).toggleClass('active');
	});


	//
	// Song timeline
	//

	$('.p-progress').slider({
		orientation: "horizontal",
		range: "min",
		max: 100,
		value: 30,
		animate: true
	});

	//
	// Song timeline end 
	//

	//
	// Volume
	//

	$( ".track-volume-slider" ).slider({
		value: 60,
		orientation: "horizontal",
		range: "min",
		max: 100,
		value: 30,
		animate: true
	})

	//
	// Volume end
	//

	//
	// Share show
	//

	$('.track-share').click(function() {
		$(this).toggleClass('active');

		if($(this).hasClass('active')) {
			$(this).find('.track-share-dropdown').addClass('active');
		} else {
			$(this).find('.track-share-dropdown').removeClass('active');
		}
	});

	//
	// Share show end 
	//

	//
	// Add active on add song btn
	//

	if($('.usersong-page').length) {
		$('.track').find('.track-add').addClass('active');
	}

	//
	// Add active on add song btn end
	//
});