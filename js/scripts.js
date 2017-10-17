(function ($) {
	"use strict";

	/*==========  Animation  ==========*/	
	new WOW().init();
	
	/*==========  Scroll To  ==========*/
	$('a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	/*==========  Responsive Navigation  ==========*/
	$('.main-nav').children().clone().appendTo('.responsive-nav');
	$('.responsive-menu-open').on('click', function(event) {
		event.preventDefault();
		$('body,html').addClass('no-scroll');
		$('.responsive-menu').addClass('open');
		return false;
	});
	$('.responsive-menu-close').on('click', function(event) {
		event.preventDefault();
		$('body,html').removeClass('no-scroll');
		$('.responsive-menu').removeClass('open');
		return false;
	});
	if ($(window).width() <= 1200) {
		$('#top-collapse').collapse('hide');
	} else {
		$('#top-collapse').collapse('show');
	}
	$(window).resize(function() {
		if ($(window).width() <= 1200) {
			$('#top-collapse').collapse('hide');
		} else {
			$('#top-collapse').collapse('show');
		}
	});
	$('#top-collapse').on('show.bs.collapse', function() {
		$('.top-collapse-open').addClass('open');
		setTimeout(function() { $('.header .top .dropdown-menu').css('display', 'block'); }, 501);
		setTimeout(function() { $('.search-bar.open').css('top',$('.header .top').outerHeight()); }, 501);
	});
	$('#top-collapse').on('hide.bs.collapse', function() {
		$('.top-collapse-open').removeClass('open');
		$('.header .top .dropdown-menu').css('display', 'none');
		setTimeout(function() { $('.search-bar.open').css('top',$('.header .top').outerHeight()); }, 501);
	});
	$('#top-collapse').css('height','');
	$('.responsive-nav li').each(function(index) {
		if ($(this).find('ul').length) {
			var text = $(this).find('> a').text();
			var id = text.replace(/\s+/g, '-').toLowerCase();
			$(this).find('> a').attr('href', '#collapse-' + id);
			$(this).find('> a').attr('data-toggle', 'collapse');
			$(this).find('> a').append('<i class="lnr lnr-chevron-down"></i>');
			$(this).find('> ul').attr('id', 'collapse-' + id);
			$(this).find('> ul').addClass('collapse');
		}
	});
	$('.responsive-nav a').on('click', function() {
		if ($(this).parent().hasClass('collapse-active')) {
			$(this).parent().removeClass('collapse-active');
		} else {
			$(this).parent().addClass('collapse-active');
		}
	});

	/*----------  Search Bar  ----------*/
	var searchOpen = $('.search-open');	
	searchOpen.on('click', function(event) {
		event.preventDefault();
		$('.search-bar').addClass('open');
		$('.search-bar.open').css('top',$('.header .top').outerHeight());
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
			
		} else {
			setTimeout(function() { $('#search-text').focus(); }, 50);
		}
		return false;
	});
	var searchClose = $('.search-close');	
	searchClose.on('click', function(event) {
		event.preventDefault();
		$('.search-bar').removeClass('open');
		return false;
	});


	/*----------  Home Slider  ----------*/
	var homeSlider = $('.home-slider');
	homeSlider.owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		navText: ['<i class="lnr lnr-chevron-left"></i>','<i class="lnr lnr-chevron-right"></i>'],
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		smartSpeed: 700,
		mouseDrag: false,
		touchDrag: false,
		autoHeight: false
	});
	homeSlider.on('resized.owl.carousel', function(event) {
		var $this = $(this);
		$this.find('.owl-height').css('height', $this.find('.owl-item.active').height());
	});

	/*----------  Tips Slider  ----------*/
	var tipsSlider = $('.tips-slider');
	tipsSlider.owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		navText: ['<i class="lnr lnr-chevron-left"></i>','<i class="lnr lnr-chevron-right"></i>'],
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		smartSpeed: 700,
		mouseDrag: false,
		touchDrag: false,
		autoHeight: true
	});
	tipsSlider.on('resized.owl.carousel', function(event) {
		var $this = $(this);
		$this.find('.owl-height').css('height', $this.find('.owl-item.active').height());
	});

	/*----------  Post Slider  ----------*/
	var postSlider = $('.post-slider');
	postSlider.owlCarousel({
		items: 2,
		loop: true,
		nav: true,
		dots: false,
		navText: ['<i class="lnr lnr-chevron-left"></i>','<i class="lnr lnr-chevron-right"></i>'],
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		smartSpeed: 700,
		mouseDrag: false,
		touchDrag: false,
		autoHeight: true,
		responsive: {
			0:{
				items: 1
			},
			920: {
				items: 2
			}
		}
	});
	postSlider.on('resized.owl.carousel', function(event) {
		var $this = $(this);
		$this.find('.owl-height').css('height', $this.find('.owl-item.active').height());
	});

	/*----------  Testimonial Slider  ----------*/
	var testimonialSlider = $('.testimonial-slider');
	testimonialSlider.owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		autoplay: 2000,			
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		mouseDrag: false,
		touchDrag: false,
		autoHeight: true
	});
	testimonialSlider.on('resized.owl.carousel', function(event) {
		var $this = $(this);
		$this.find('.owl-height').css('height', $this.find('.owl-item.active').height());
	});

	/*----------  Testimonial Slider  ----------*/
	var GallerySlider = $('.gallery-slider');
	GallerySlider.owlCarousel({
		items: 4,
		loop: true,
		nav: true,
		dots: false,
		navText: ['<i class="lnr lnr-chevron-left"></i>','<i class="lnr lnr-chevron-right"></i>'],
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		smartSpeed: 700,
		mouseDrag: true,
		touchDrag: true,
		autoHeight: true,
		responsive: {
			0:{
				items: 1
			},
			380: {
				items: 2
			},
			625: {
				items: 3
			},
			992: {
				items: 4
			}
		}
	});
	GallerySlider.on('resized.owl.carousel', function(event) {
		var $this = $(this);
		$this.find('.owl-height').css('height', $this.find('.owl-item.active').height());
	});

	/*----------  Lightbox  ----------*/
  	var imageLightbox = $('.image-lightbox');
  	imageLightbox.magnificPopup({
  		type: 'image',
        mainClass: 'mfp-with-zoom',        
        zoom: {
            enabled: true,
            duration: 300,
            easing: "ease-in-out",
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        }
	});

	/*----------  Lightbox-gallery  ----------*/
  	var imageLightboxGallery = $('.image-lightbox-gallery');
  	imageLightboxGallery.magnificPopup({
  		type: 'image',
        gallery: {
            enabled: !0
        },
        mainClass: 'mfp-with-zoom',        
        zoom: {
            enabled: true,
            duration: 300,
            easing: "ease-in-out",
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        }
	});

	/*----------  Trainer grid hover function  ----------*/
	var trailerDetailsBoxLeft = $('.trainer-details .boxes .left-box');
	var trailerDetailsBoxRight = $('.trainer-details .boxes .right-box');
	trailerDetailsBoxLeft.add(trailerDetailsBoxRight).on('mouseenter', function() {
 		$(this).closest(".trainer-grid-item").find(".trainer-img").addClass("active");
 	});
	trailerDetailsBoxLeft.add(trailerDetailsBoxRight).on('mouseleave', function() {
 		$(this).closest(".trainer-grid-item").find(".trainer-img").removeClass("active");
	});

	trailerDetailsBoxLeft.add(trailerDetailsBoxRight).on('mouseenter', function() {
 		$(this).parents(".trainer-details").addClass("active");
 	});
	trailerDetailsBoxLeft.add(trailerDetailsBoxRight).on('mouseleave', function() {
 		$(this).parents(".trainer-details").removeClass("active");
	});

	/*==========  Load more button  ==========*/
	var trainerButton = $('#trainer-grid-load-more');
	$(".trainer-grid .col-md-4").hide();
		$(".trainer-grid .col-md-4").slice(0, 3).show();
		trainerButton.on('click', function (e) {
		e.preventDefault();
		$(".trainer-grid .col-md-4:hidden").slice(0, 3).slideDown();
		if ($(".trainer-grid .col-md-4:hidden").length == 0) {
			trainerButton.fadeOut('slow');
		}
	});

	/*==========  Resposnive Triangle Border  ==========*/
	$(function () {
		if ($('body #details').length > 0){
			function resizeTriangle() {
			  var wid = document.getElementById('details').clientWidth / 2;
			  var css = '.feature-box.v2 .details:before {border-left-width: ' + wid + 'px;border-right-width: ' + wid + 'px;}',
				head = document.head || document.getElementsByTagName('head')[0],
				style = document.createElement('style');

			  style.type = 'text/css';
			  style.id = 'myStyle';
			  if (style.styleSheet) {
				style.styleSheet.cssText = css;
			  } else {
				style.appendChild(document.createTextNode(css));
			  }
			  if ($('style#myStyle')) {
				$('style#myStyle').remove();
			  }
			  //head.removeChild(document.getElementById('myStyle'))
			  head.appendChild(style);
			}
			$(window).resize(function() {
			  resizeTriangle();
			});
			window.onload = function() {
			  resizeTriangle();
			};
		}
	});


	/*----------  Portfolio ----------*/

	var $product3ColContainer = $('#product3Col').imagesLoaded(function() {
		$product3ColContainer.isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows',
			percentPosition: true,
			masonry: {
				columnWidth: $product3ColContainer.find('.product-sizer')[0]
			}
		});
		return false;
	});
	$('#product3Col-filters').on('click', 'button', function() {
		$('#product3Col-filters button').removeClass('active');
		$(this).addClass('active');
		var filterValue = $(this).attr('data-filter');
		$product3ColContainer.isotope({filter: filterValue});
	});


	/*----------  Portfolio ----------*/

	var $gallery3ColContainer = $('#gallery').imagesLoaded(function() {
		$gallery3ColContainer.isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows',
			percentPosition: true,
			masonry: {
				columnWidth: $gallery3ColContainer.find('.gallery-sizer')[0]
			}
		});
		return false;
	});
	
	/*==========  Validate Email  ==========*/
	function validateEmail($validate_email) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if( !emailReg.test( $validate_email ) ) {
			return false;
		} else {
			return true;
		}
		return false;
	}
	
	/*==========  Contact Form  ==========*/
	$('#contact-form').on('submit', function() {
		$('#contact-error').fadeOut();
		$('#contact-success').fadeOut();
		$('#contact-loading').fadeOut();
		$('#contact-loading').fadeIn();
		if (validateEmail($('#contact-email').val()) && $('#contact-email').val().length !== 0 && $('#contact-name').val().length !== 0 && $('#contact-message').val().length !== 0) {
			var action = $(this).attr('action');
			$.ajax({
				type: "POST",
				url : action,
				data: {
					contact_name: $('#contact-name').val(),
					contact_email: $('#contact-email').val(),
					contact_phone: $('#contact-phone').val(),
					contact_message: $('#contact-message').val()
				},
				success: function() {
					$('#contact-error').fadeOut();
					$('#contact-success').fadeOut();
					$('#contact-loading').fadeOut();
					$('#contact-success .message').html('Success! Thanks for contacting us!');
					$('#contact-success').fadeIn();
				},
				error: function() {
					$('#contact-error').fadeOut();
					$('#contact-success').fadeOut();
					$('#contact-loading').fadeOut();
					$('#contact-error .message').html('Sorry, an error occurred.');
					$('#contact-error').fadeIn();
				}
			});
		} else if (!validateEmail($('#contact-email').val()) && $('#contact-email').val().length !== 0 && $('#contact-name').val().length !== 0 && $('#contact-message').val().length !== 0) {
			$('#contact-error').fadeOut();
			$('#contact-success').fadeOut();
			$('#contact-loading').fadeOut();
			$('#contact-error .message').html('Please enter a valid email.');
			$('#contact-error').fadeIn();
		} else {
			$('#contact-error').fadeOut();
			$('#contact-success').fadeOut();
			$('#contact-loading').fadeOut();
			$('#contact-error .message').html('Please fill out all the fields.');
			$('#contact-error').fadeIn();
		}
		return false;
	});

	/*==========  Map  ==========*/
	var map;
	function initialize_map() {
		if ($('.map').length) {
			var myLatLng = new google.maps.LatLng(-37.813480, 144.965595);
			var mapOptions = {
				zoom: 17,
				center: myLatLng,
				scrollwheel: false,
				panControl: false,
				zoomControl: false,
				scaleControl: true,
				mapTypeControl: false,
				streetViewControl: false,	
				draggable: false,
			 	styles: [
			 	  {
		            elementType: 'geometry',
		            stylers: [{color: '#f5f5f5'}]
		          },
		          {
		            elementType: 'labels.icon',
		            stylers: [{visibility: 'on'}]
		          },
		          {
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#616161'}]
		          },
		          {
		            elementType: 'labels.text.stroke',
		            stylers: [{color: '#f5f5f5'}]
		          },
		          {
		            featureType: 'administrative.land_parcel',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#bdbdbd'}]
		          },
		          {
		            featureType: 'poi',
		            elementType: 'geometry',
		            stylers: [{color: '#eeeeee'}]
		          },
		          {
		            featureType: 'poi',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#757575'}]
		          },
		          {
		            featureType: 'poi.park',
		            elementType: 'geometry',
		            stylers: [{color: '#e5e5e5'}]
		          },
		          {
		            featureType: 'poi.park',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#9e9e9e'}]
		          },
		          {
		            featureType: 'road',
		            elementType: 'geometry',
		            stylers: [{color: '#ffffff'}]
		          },
		          {
		            featureType: 'road.arterial',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#757575'}]
		          },
		          {
		            featureType: 'road.highway',
		            elementType: 'geometry',
		            stylers: [{color: '#dadada'}]
		          },
		          {
		            featureType: 'road.highway',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#616161'}]
		          },
		          {
		            featureType: 'road.local',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#9e9e9e'}]
		          },
		          {
		            featureType: 'transit.line',
		            elementType: 'geometry',
		            stylers: [{color: '#e5e5e5'}]
		          },
		          {
		            featureType: 'transit.station',
		            elementType: 'geometry',
		            stylers: [{color: '#eeeeee'}]
		          },
		          {
		            featureType: 'water',
		            elementType: 'geometry',
		            stylers: [{color: '#c9c9c9'}]
		          },
		          {
		            featureType: 'water',
		            elementType: 'labels.text.fill',
		            stylers: [{color: '#9e9e9e'}]
		          }
		        ],
		    };
			map = new google.maps.Map(document.getElementById('map'), mapOptions);
			var marker = new google.maps.Marker({
				position: {lat: -37.8126999, lng: 144.969250}, 
				map: map,
				title: 'Envato',
				icon: './images/marker.png'
			});
		} else {
			return false;
		}
		return false;
	}
	google.maps.event.addDomListener(window, 'load', initialize_map);

})(jQuery);