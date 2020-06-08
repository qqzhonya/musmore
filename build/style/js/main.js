$(function() {
	
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
});