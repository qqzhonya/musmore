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
	// Add active on add song btn
	//

	if($('.usermusic-page').length) {
		$('.track').find('.track-add').addClass('active');
	}

	//
	// Add active on add song btn end
	//

	//
	// Add active on like btn 
	//


	if($('.cabinet-page').length) {
		$('.track').find('.track-like').addClass('active');
	}

	//
	// Add active on like btn end 
	//

	//
	// Show/hide username input
	//

	$('.username-change-btn').click(function() {
		$('.username').hide();
		$('.username-change-form').addClass('active')
	});

	$('.username-change-close').click(function() {
		$('.username').show();
		$('.username-change-form').removeClass('active');
	});

	//
	// Show/hide username input end
	//


	//
	// Show/close ganres
	//

	$('.ganre-heading-select').click(function() {
		$('.ganre-heading-info').hide();
		$('.ganre-heading-tag').show();
	})

	$('.ganre-heading-close-btn').click(function() {
		$('.ganre-heading-info').show();
		$('.ganre-heading-tag').hide();
	});

	//
	// Show/close ganres end 
	//

	//
	// Validation
	//

	$('.validateForm').each(function() {
		$.validator.addMethod(
			"regex",
			function(value, element, regexp)  {

					if (regexp && regexp.constructor != RegExp) {
						regexp = new RegExp(regexp);
					}

					else if (regexp.global) regexp.lastIndex = 0;

					return this.optional(element) || regexp.test(value);
			}
		);

		var $userEmail = $(this).find('.formEmail').attr('name');
		var $userPassword = $(this).find('.formPassword').attr('name');
		var $confirmPassword = $(this).find('.formConfirmPassword').attr('name');
		var $userName = $(this).find('.formUsername').attr('name');
		var $params = {debug:false, rules:{}, messages:{}};

		$params['rules'][$userEmail] = {
			"required": true, 
			"email": true, 
			"regex": /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
		}
		$params['messages'][$userEmail] = {
			"required": "Необходимо указать E-mail",
			"email": "Неверный E-mail",
			"regex": "Неверный E-mail"
		};

		$params['rules'][$userPassword] = {
			"minlength": 8
		}
		$params['messages'][$userPassword] = {
			"required": "Пароль должен содержать не менее 8 символов",
			"minlength": "Пароль должен содержать не менее 8 символов"
		};

		$params['rules'][$confirmPassword] = {
			"minlength": 8,
			"equalTo": "#newPassword"
		}
		$params['messages'][$confirmPassword] = {
			"required": "Пароль должен содержать не менее 8 символов",
			"minlength": "Пароль должен содержать не менее 8 символов",
			"equalTo": "Пароли должны совпадать"
		};

		$params['rules'][$userName] = {
			"required": true
		}
		$params['messages'][$userName] = {
			"required": "Заполните поле"
		};


		$(this).validate($params);
	});

	//
	// Validation end
	//
});