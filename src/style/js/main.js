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
		nav: false,
		responsiveClass: true,
		responsive: {
			0: {
				margin: 10,
				items: 1,
				stagePadding: 47
			},
			350: {
				items: 2
			},
			475: {
				items: 3
			},
			764: {
				items: 4
			},
			1100: {
				nav: true,
				item: 5
			}
		}
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
	// stopPropagation for control button on track
	//

	$('.track-control-item').click(function(e) {
		e.stopPropagation();
	})

	//
	// stopPropagation for control button on track end 
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

	//
	// Share dropdown mob
	//

	if($(window).width() <= 920) {
		$('.track-share').click(function() {
			$(this).find('.track-share-dropdown-wrap').toggleClass('active');
			console.log("hi")
		});
	}

	//
	// Share dropdown mob end
	//

	//
	// Player
	//

	var savedVolume = localStorage.volume || 100;
	var tmpVolume = 100;
	var $myPlayer = $('#jquery_jplayer');

	var arrOfPlaylist = [{
		artist: "Alicia Keys",
		title: "Good Job",
		mp3: "http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
		poster: "style/img/tracklist/tracklist-cover-1.jpg",
		id: 'track-id-000'
	}];

	var myPlaylist = new jPlayerPlaylist({
			jPlayer: $myPlayer,
			cssSelectorAncestor: "#jp_container"
		},

		arrOfPlaylist,

		{
			useStateClassSkin: true,
			playlistOptions: {
				displayTime: 0,
				addTime: 0,
				removeTime: 0,
				shuffleTime: 0
			},

			play: function (e) {
				setTrackData(e);

				// синхроним классы паузы и играющего итема
				var $playlistCurrent = $('a.jp-playlist-current');
				var $plcID = $playlistCurrent.data('id');

				$('.mustoggler_paused').removeClass('mustoggler_paused');
				$('.mustoggler_playing').removeClass('mustoggler_playing');

				$('[data-musid=' + $plcID + ']').addClass('mustoggler_playing');
			},

			pause: function (e) {
				var $currentPlaying = $('.mustoggler_playing');

				$currentPlaying.addClass('mustoggler_paused');
			},

			loadstart: function (e) {
				setTrackData(e);
				setPlayerVolume(savedVolume);
			},

			timeupdate: function (e) {
				//синхроним время песни в плеере с итемом
				var $timeInPlayer = $('.jp-current-time').html();
				var $currenDurDiv = $('.mustoggler_playing').find('.track__duration');

				$currenDurDiv.html($timeInPlayer);
			}
		});

	$(".jp-track-durbar").slider({
		range: "min",
		min: 0,
		max: 100,
		value: 0,

		slide: function (event, ui) {
			$myPlayer.jPlayer("playHead", ui.value);
		},

		create: function () {
			$myPlayer.jPlayer("option", "cssSelector.seekBar", '.jp-track-durbar');
			$myPlayer.jPlayer("option", "cssSelector.playBar", ".jp-track-durbar .ui-slider-range");
		}
	});

	function setTrackData(e) {
		var title = e.jPlayer.status.media.title,
			poster = e.jPlayer.status.media.poster,
			artist = e.jPlayer.status.media.artist,
			$trackInfo = $('.jp-track-info');

		$trackInfo.find('.jp-track-info__track').text(title);
		$trackInfo.find('.jp-track-info__artist').text(artist);
		$trackInfo.find('.jp-track-info__img').css('background-image', 'url("' + poster + '")');
	};

	function setPlayerVolume(vol) {
		var $volBtn = $('.jp-volume-ico');

		if($(window).width > 920) {
			(vol > 0) ? $volBtn.removeClass('muted'): $volBtn.addClass('muted');
		}
		
		$myPlayer.jPlayer("volume", vol / 100);
	};

	function saveVolume(vol) {
		localStorage.volume = vol;
	};

	function getCurrentVolume() {
		return localStorage.volume;
	};

	if($(window).width() > 920) {
		$('.jp-volume-ico').on('click', function () {
			var $this = $(this);
			var isMuted = $this.hasClass('muted');
	
			if (isMuted) {
	
				$(".jp-volume-bar").slider("value", tmpVolume);
				setPlayerVolume(tmpVolume);
				saveVolume(tmpVolume)
	
			} else {
	
				tmpVolume = getCurrentVolume();
	
				$(".jp-volume-bar").slider("value", 0);
				setPlayerVolume(0);
				saveVolume(0);
	
			};
		});

		$(".jp-volume-bar").slider({
			range: "min",
			min: 0,
			max: 100,
			value: savedVolume,
	
			slide: function (event, ui) {
				setPlayerVolume(ui.value);
				saveVolume(ui.value);
			}
		});
	} else {
		$(".jp-volume-bar").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: savedVolume,
	
			slide: function (event, ui) {
				setPlayerVolume(ui.value);
				saveVolume(ui.value);
			}
		});

		$('.jp-volume-ico').on('click', function() {
			$('.track-volume-wrapper').toggleClass('active');
		})
	}

	$('.mustoggler').on('click', function (e) {
		e.stopPropagation();
		e.preventDefault();

		var $this = $(this);
		var $musList = $this.closest('.muslist');
		var $musItems = $musList.find('.mustoggler');
		var $playlistItems;
		var arOfData = [];
		var id = $this.data('musid');
		var indexInList = false;
		var currentPlaying = $this.hasClass('mustoggler_playing');
		var currentPlayingAndPause = currentPlaying && $this.hasClass('mustoggler_paused');

		//актив класс на кнопке ините музыки
		$('.mustoggler_playing').removeClass('mustoggler_playing');
		$this.addClass('mustoggler_playing');

		//сбор массива данных
		$musItems.each(function () {
			var $this = $(this);
			var data = $this.data('musmeta');
			arOfData.push(data);
		});

		//добавление трека в лист
		arOfData.forEach(function (el) {
			var $playlistItems = $('.jp-playlist-item');
			var arrIDInPlaylist = [];
			var canBeAdded = true;

			//сбор имеющихся айди треков
			$playlistItems.each(function (index, item) {
				arrIDInPlaylist.push($(item).data('id'));
			});

			// проверка на уникальность
			arrIDInPlaylist.forEach(function (id) {
				if (id == el.id) {
					canBeAdded = false;
				}
			});

			// если уже есть в списке, не добавляем 
			if (canBeAdded) {
				myPlaylist.add({
					title: el.title,
					artist: el.artist,
					mp3: el.url,
					poster: el.img,
					id: el.id
				});
			};
		});

		$playlistItems = $('.jp-playlist-item');
		indexInList = $playlistItems.filter('[data-id="' + id + '"]').closest('li').index();

		if (currentPlayingAndPause) {

			myPlaylist.play();

		} else if (currentPlaying) {

			myPlaylist.pause();

		} else {

			myPlaylist.select(indexInList);
			myPlaylist.play();

		}
	});

	$('.mustoggler').on('click', 'a, button', function (e) {
		e.stopPropagation();
	});

	//
	// Player end
	//
});