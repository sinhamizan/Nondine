$(document).ready(function(){
	"use strict";
	// video area | magnifitic popup
	$('#about-play').magnificPopup({
	  type: 'iframe',
	  iframe: {
		  patterns: {
		    youtube: {
		      index: 'youtube.com/', 

		      id: 'v=', 
		      src: 'https://www.youtube.com/embed/%id%?autoplay=1',
		    },

		  },

		  srcAction: 'iframe_src', 
		}
	});
	//end video area

	// counterup js
	$('.counter').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 4000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});
	// end counter up

	// mixitup js
	var mixer = mixitup('.port-active');
	// end mixitup

	// portfoli-area|magnific popup
	$('.single-port-item').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  },
	  zoom: {
	    enabled: true, 
	    duration: 300, 
	    easing: 'ease-in-out',
	    opener: function(openerElement) {
	      return openerElement.is('img') ? openerElement : openerElement.find('img');
	    }
	  },

		  
	});
	// end portfolio area

	// team area|owl-curosel
	$('.team-slider-active').owlCarousel({
	    loop:true,
	    margin:30,
	    autoplay:true,
	    autoplayHoverPause: true,
	    responsive:{
	    	0:{
	    		items:2
	    	},
	        540:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        992:{
	            items:4
	        }
	    }
	})
	// testmonial-area|owl-curosel
	$('.testmonial-active').owlCarousel({
	    loop:true,
	    margin:30,
	    autoplay:true,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})


	// slick-nav menu
	$('.menu-area').slicknav({
		'appendTo':'.main-menu-area'
	});

	// menu-fixed
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if (top>112)
		{
			$('.header-menu-area').addClass('header-bg');
		}
		else
			if($('.header-menu-area').hasClass('header-bg'))
			{
				$('.header-menu-area').removeClass('header-bg');
			}
	});

	//waypoints
	$('.animation').each(function(){

		var waypoint = new Waypoint({
		  element: this,
		  handler: function(direction) {
		    var animation = $(this.element).attr('data-animation');
	  		$(this.element).css('opacity','1');
	  		$(this.element).addClass("animated " + animation);
		  },
		  offset: '100%' 
		})
	});






}(jQuery));