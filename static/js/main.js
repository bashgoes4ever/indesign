if ($(window).width() > 1140) {
$(window).scroll(function(){
	var wScroll = $(window).scrollTop();

	(function(){
	    
		var
			bg = $('.main-img-wrap');

		slideIt(bg, wScroll / -25);

		function slideIt(block, strafeAmount) {
			var strafe = -strafeAmount + '%',
				transormString = 'translate3d(0,' + strafe + ',0)';

			block.css({
				'transform' : transormString
			});
		}
	}());


});

}
$(document).ready(function() {
	$('.portfolio-slider').each(function(e) {
		window["galleryTop" + e] = new Swiper($('.gallery-top'+e), {
			spaceBetween: 10,
			direction: 'horizontal',
			loop: true,
			loopAdditionalSlides: 3,
			autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},
			pagination: {
				el: '.swiper-pagination'+e,
				type: 'fraction',
			},
			navigation: {
				nextEl: '.project-button-next'+e,
				prevEl: '.project-button-prev'+e,
			},
		});
		window["galleryThumbs" + e] = new Swiper($('.gallery-thumbs'+e), {
			spaceBetween: 20,
			centeredSlides: true,
			loop: true,
			loopAdditionalSlides: 1,
			slidesPerView: 3,
			touchRatio: 0.2,
			slideToClickedSlide: true,
		});

		window["galleryTop" + e].controller.control = window["galleryThumbs" + e];
		window["galleryThumbs" + e].controller.control = window["galleryTop" + e];
	})


	$('.portfolio-menu li').click(function() {
		if (!$(this).is('.portfolio-active')) {

			//смена цвета
			$('.portfolio-menu li').removeClass('portfolio-active')
			$(this).addClass('portfolio-active')

			//переключение слайдера
			var data = $(this).data('slider')
			$('.portfolio-slider').removeClass('current-slider')
			setTimeout(function() {
				$('#'+data).addClass('current-slider')
			}, 300)

		}
	})

	var slide = $('.quiz-item').outerWidth(true)
	$('.quiz-next').click(function() {
		if ($(window).width() > 780) {
			var data = $(this).data('image')
			$('.quiz-img-container img').removeClass('quiz-cur-img')
			setTimeout(function() {
				$('.quiz-img-container img[data-image='+data+']').addClass('quiz-cur-img')
			}, 300)
		}
		$('.quiz-container').animate({
			'marginLeft': '-='+slide
		}, 400)
	})
	$('.quiz-prev').click(function() {
		$('.quiz-container').animate({
			'marginLeft': '+='+slide
		}, 400)
		if ($(window).width() > 780) {
			var data = $(this).data('image')
			$('.quiz-img-container img').removeClass('quiz-cur-img')
			setTimeout(function() {
				$('.quiz-img-container img[data-image='+data+']').addClass('quiz-cur-img')
			}, 300)
		}
	})


	//stuff slider
	var stuff_per_view = 4
	var loop_per_view = 4
	if ($(window).width() < 780) {
		stuff_per_view = 2
		loop_per_view = 2
	}
	stuff_main = new Swiper($('.stuff-top'), {
		spaceBetween: 10,
		direction: 'horizontal',
		loop: true,
		loopAdditionalSlides: loop_per_view,
		navigation: {
			nextEl: '.stuff-next',
			prevEl: '.stuff-prev',
		},
	});
	stuff_thumb = new Swiper($('.stuff-thumb'), {
		spaceBetween: 10,
		centeredSlides: true,
		loop: true,
		loopAdditionalSlides: 1,
		slidesPerView: stuff_per_view,
		touchRatio: 0.2,
		slideToClickedSlide: true,
	});

	stuff_main.controller.control = stuff_thumb;
	stuff_thumb.controller.control = stuff_main;

	//replies slider
	replies_main = new Swiper($('.replies-top'), {
		spaceBetween: 10,
		direction: 'horizontal',
		loop: true,
		loopAdditionalSlides: 6,
		navigation: {
			nextEl: '.replies-next',
			prevEl: '.replies-prev',
		},
	});
	replies_thumb = new Swiper($('.replies-thumb'), {
		spaceBetween: 24,
		centeredSlides: true,
		loop: true,
		loopAdditionalSlides: 1,
		slidesPerView: 6,
		touchRatio: 0.2,
		slideToClickedSlide: true,
	});

	replies_main.controller.control = replies_thumb;
	replies_thumb.controller.control = replies_main;

	 $(".china-slider").owlCarousel({
	 	items: 2,
	 	mouseDrag: true,
	 	nav: true,
        itemsDesktopSmall : [979, 2],
        itemsTablet : [768, 2],
        itemsMobile : [479, 1]
	 });


	 if ($(window).width() < 780) {
	 	$('.explain-slider').owlCarousel({
	 		singleItem : true,
	 		mouseDrag: true,
	 		nav: true,
	 		navigationText : ["<div class='exp-button-prev'><img src='static/img/big-arr-l.png'/></div>", "<div class='exp-button-next'><img src='static/img/big-arr-r.png'/></div>"],
	 	});
	 }

	 $(".room-left").owlCarousel({
	 	singleItem: true,
	 	mouseDrag: true,
	 	nav: true,
	 	navigationText : ["<div class='room-button-prev'><img src='static/img/big-arr-l.png'/></div>", "<div class='room-button-next'><img src='static/img/big-arr-r.png'/></div>"],
	 });
	// var china_slider = new Swiper('.china-slider', {
	// 	speed: 400,
	// 	slidesPerView: 2,
	// 	direction: 'horizontal',
	// 	navigation: {
	// 		nextEl: '.china-button-next',
	// 		prevEl: '.china-button-prev',
	// 	},
	// });


	//popup
	$('.buy-project, .callback-button, .consultation-button').click(function() {
		$('.layer').fadeIn(300)
		$('.order-popup').fadeIn(500)
		var a = $(this).data('type')
		$('.popup-min input[name=type]').val(a)
	})

	$('.layer').click(function(e) {
		if ($(this).has(e.target).length === 0) {
			layer_close()
		}
	})
	$('.exit-popup').click(function() {
		layer_close()
	})
	$('.china-button-order, .button-order-cm').click(function() {
		$('.popup-china-1, .popup-china-2').fadeOut(300)
		$('.order-popup').fadeIn(300)
		var a = $(this).data('type')
		$('.popup-min input[name=type]').val(a)
	})
	$('.cb1').click(function() {
		$('.layer').fadeIn(300)
		$('.popup-china-1').fadeIn(500)
	})
	$('.cb2').click(function() {
		$('.layer').fadeIn(300)
		$('.popup-china-2').fadeIn(500)
	})


	$('.china-button-detail').click(function() {
		$('.popup-china-2').css({
			'opacity': '0',
			'left': '1000px'
		})
		$('.popup-china-2').show()
		$('.layer').animate({scrollTop: 0},100, function() {
			$('.popup-china-1').animate({
				left: '-=1000',
				opacity: 0
			}, 300)
		});
		setTimeout(function() {
			$('.popup-china-2').animate({
				left: '50%',
				opacity: 1
			}, 300)
		}, 500)
		setTimeout(function() {
			$('.popup-china-1').css({
					'opacity': '1',
					'left': '50%'
				})
			$('.popup-china-1').hide()
		}, 600)
	})
	$('.button-scenario').click(function() {
		$('.popup-china-1').css({
			'opacity': '0',
			'left': '-1000px'
		})
		$('.popup-china-1').show()
		$('.layer').animate({scrollTop: 0},100, function() {
			$('.popup-china-2').animate({
				left: '+=1000',
				opacity: 0
			}, 300)
		});
		setTimeout(function() {
			$('.popup-china-1').animate({
				left: '50%',
				opacity: 1
			}, 300)
		}, 500)
		setTimeout(function() {
			$('.popup-china-2').css({
					'opacity': '1',
					'left': '50%'
				})
			$('.popup-china-2').hide()
		}, 600)
	})


	function layer_close() {
		$('.popup-min').fadeOut(500)
		$('.popup-china-1').fadeOut(500)
		$('.popup-china-2').fadeOut(500)
		$('.layer').fadeOut(300)		
	}

	function go(select) {
		var destination = $('.'+select).offset().top;
		$('html, body').animate({ scrollTop: destination}, 500);
		return false; 
	}


	$('.a3').click(function(){
		go('portfolio')
	})
	$('.a1').click(function(){
		go('stuff')
	})
	$('.a2').click(function(){
		go('complex')
	})
	$('.a4').click(function(){
		go('year')
	})
	$('.a5').click(function(){
		go('project')
	})
	$('.a6').click(function(){
		go('china')
	})
	$('.a7').click(function(){
		go('footer-block')
	})
	$('.a8').click(function(){
		go('quiz')
	})


	$('.burger').click(function() {
		$('nav').fadeIn(300)
	})
	if ($(window).width() < 780) {
		$('nav').click(function() {
			$(this).fadeOut(300)
		})
	}
	$('.project-detail').click(function() {
		$(this).siblings('.description').slideToggle()
	})

	if ($(window).width() < 1190) {
		$('.line-inner').removeClass('line-anim')
	}




	// ajax + forms START



	$('.step1').click(function() {
		var a = $('.radio1 input[name=house-type]:checked').siblings('span').text()
		var b = $('.quiz-square input').val()
		$('.quiz-form input[name=place-type]').val(a)
		$('.quiz-form input[name=square]').val(b)
	})
	$('.step2').click(function() {
		var a = ''
		$('.radio2 input[name=services]:checked').each(function() {
			a += $(this).siblings('span').text() + '; '
		})
		$('.quiz-form input[name=serve]').val(a)
	})
	$('.step3').click(function() {
		var a = $('.radio3 input[name=style-name]:checked').siblings('span').text()
		$('.quiz-form input[name=style]').val(a)
	})


	$('.popup-min-button').click(function(e) {
		e.preventDefault()

		var data = $(this).closest('form').serialize()
		var url = $(this).closest('form').attr('action')

		$.ajax({
			url: url,
			data: data,
			type: 'POST',
			success: function(data) {
				$('.popup-min').fadeOut(300)
				setTimeout(function() {
					$('.thank').fadeIn(300)
				}, 300)
			},
			error: function() {
				console.log('an error has been occured...')
			}
		})
	})

	$('.taxi-button').click(function(e) {
		e.preventDefault()

		var data = $(this).closest('form').serialize()
		var url = $(this).closest('form').attr('action')

		$.ajax({
			url: url,
			data: data,
			type: 'POST',
			success: function(data) {
				$('.layer').fadeIn(200)
				$('.thank').fadeIn(400)
			},
			error: function() {
				console.log('an error has been occured...')
			}
		})
	})

	$('.quiz-submit').click(function(e) {
		e.preventDefault()

		var data = $(this).closest('form').serialize()
		var url = $(this).closest('form').attr('action')

		$.ajax({
			url: url,
			data: data,
			type: 'POST',
			success: function(data) {
				$('.layer').fadeIn(200)
				$('.thank').fadeIn(400)
			},
			error: function() {
				console.log('an error has been occured...')
			}
		})
	})


	// ajax + forms END



	if ($(window).width() > 1190) {

		$('main h2').css({
			'animation': 'opacity 0.7s',
			'animation-delay': '0.7s',
			'animation-fill-mode': 'both'
		})
		$('main .line').css({
			'animation': 'opacity 0.7s',
			'animation-delay': '1s',
			'animation-fill-mode': 'both'
		})
		$('main h3').css({
			'animation': 'opacity 0.7s',
			'animation-delay': '1.4s',
			'animation-fill-mode': 'both'
		})
		$('main button').css({
			'animation': 'opacity .7s',
			'animation-delay': '1.8s',
			'animation-fill-mode': 'both'
		})
		$('.main-item:nth-child(2)').css({
			'animation': 'left .7s',
			'animation-delay': '2s',
			'animation-fill-mode': 'both'
		})
		$('.main-item:nth-child(3)').css({
			'animation': 'right .7s',
			'animation-delay': '2s',
			'animation-fill-mode': 'both'
		})
		$('.main-item:nth-child(1)').css({
			'animation': 'left .7s',
			'animation-delay': '2.4s',
			'animation-fill-mode': 'both'
		})
		$('.main-item:nth-child(4)').css({
			'animation': 'right .7s',
			'animation-delay': '2.4s',
			'animation-fill-mode': 'both'
		})

		var portfolio = $('.portfolio').offset().top - 300;
		var complex = $('.complex').offset().top - 300;
		var design = $('.design').offset().top - 300;
		var explain = $('.explain').offset().top - 300;
		var project1 = $('.pr1-section').offset().top - 300;
		var video = $('.video').offset().top - 300;
		var project2 = $('.pr2-section').offset().top - 300;
		var online = $('.online').offset().top - 300;
		var taxi = $('.taxi').offset().top - 300;
		var replies = $('.replies').offset().top - 300;
		var show_num = true

		$(window).scroll(function(){

			if ($(window).scrollTop() > portfolio ) {
				t=0
				port_svg = true
				$('.portfolio-menu ul li').each(function() {
					$(this).css({
						'animation': 'left .5s',
						'animation-delay': t+'s',
						'animation-fill-mode': 'both'
					})
					t += 0.2;
				});

				setTimeout(function(){
					port_svg = false
					$('.portfolio-sliders').addClass('rect-fill1')
				}, 500)

			}

			var complex_svg = true

			if ($(window).scrollTop() > complex ) {

				setTimeout(function(){
					complex_svg = false
					$('.complex-flex').addClass('rect-fill')
				}, 1500)

				$('.complex-item.anim:nth-child(-n+4)').each(function() {
					$(this).css({
						'animation': 'opacity .8s',
						'animation-fill-mode': 'both'
					})
					$(this).removeClass('anim')
				});
				$('.complex-item.anim:nth-child(-n+6)').each(function() {
					$(this).css({
						'animation': 'opacity .8s',
						'animation-delay': '0.5s',
						'animation-fill-mode': 'both'
					})
					$(this).removeClass('anim')
				});
				$('.complex-item.anim:nth-child(-n+8)').each(function() {
					$(this).css({
						'animation': 'opacity .8s',
						'animation-delay': '1s',
						'animation-fill-mode': 'both'
					})
					$(this).removeClass('anim')
				});
				
			}


			if ($(window).scrollTop() > design && show_num == true) {
				$('.design-perc').css('opacity', '1')
				$('.spincrement').spincrement({
						from: 0,
						to: null,
						decimalPlaces: 0,
						decimalPoint: ".",
						thousandSeparator: ",",
						duration: 2500 
					})
				$('.line-inner').removeClass('line-anim')
				show_num = false
				$('.arrow').css({
					'animation': 'opacity .6s',
					'animation-delay': '1s',
					'animation-fill-mode': 'both'
				})
				$('.design-side').css({
					'animation': 'right .6s',
					'animation-delay': '1.5s',
					'animation-fill-mode': 'both'
				})
			}


			if ($(window).scrollTop() > explain ) {
				
				$('.explain-item:first').css({
					'animation': 'bottom .5s',
					'animation-fill-mode': 'both'
				})
				$('.explain-item:last').css({
					'animation': 'bottom .5s',
					'animation-delay': '.3s',
					'animation-fill-mode': 'both'
				})
				
			}

			if ($(window).scrollTop() > project1 ) {
				t=0
				$('.pr1-section .project-item').each(function() {
					$(this).css({
						'animation': 'bottom .7s',
						'animation-delay': t+'s',
						'animation-fill-mode': 'both'
					})
					t += 0.4;
				});
			}


			if ($(window).scrollTop() > video ) {
				t=0
				$('.video-item').each(function() {
					$(this).css({
						'animation': 'right .6s',
						'animation-delay': t+'s',
						'animation-fill-mode': 'both'
					})
					t += 0.4;
				});
				$('.partner').each(function() {
					$(this).css({
						'animation': 'opacity .6s',
						'animation-delay': t+'s',
						'animation-fill-mode': 'both'
					})
					t += 0.4;
				});
			}


			if ($(window).scrollTop() > project2 ) {
				t=0
				$('.pr2-section .project-item').each(function() {
					$(this).css({
						'animation': 'bottom .7s',
						'animation-delay': t+'s',
						'animation-fill-mode': 'both'
					})
					t += 0.4;
				});
			}


			if ($(window).scrollTop() > online ) {
				t=0
				$('.online-item').each(function() {
					$(this).css({
						'animation': 'left .5s',
						'animation-delay': t+'s',
						'animation-fill-mode': 'both'
					})
					t += 0.3;
				});
			}


			if ($(window).scrollTop() > taxi ) {
				$('.taxi-right').css({
					'animation': 'right .5s',
					'animation-fill-mode': 'both'
				})
			}

			replies_svg = true
			if ($(window).scrollTop() > replies ) {

				
				var a = 0
				$('.replies-thumb .swiper-slide').each(function() {
					$(this).css({
						'animation': 'bottom .5s',
						'animation-delay': a+'s',
						'animation-fill-mode': 'both'
					})
					a += 0.3;
				});

				setTimeout(function(){
					replies_svg = false
					$('.replies-img-wrap').addClass('rect-replies')
				}, 500)

			}
		
		});

	}

})

