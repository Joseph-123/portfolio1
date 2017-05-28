
$(document).ready(function() {

	/**************************
	for the sticky navigation
	*****************************/

	$('.js--about-section').waypoint(function(direction) {


		if (direction == "down") {

			$('nav').addClass('sticky');

		} else {

			$('nav').removeClass('sticky');


		}

		}, {
		  offset: '60px;'
	});





		/**
		var waypoints = $('#handler-first').waypoint(function(direction) {
		  notify(this.element.id + ' hit 25% from top of window') 
		}, {
		  offset: '25%'
		}) **/


		/***************************
		scroll on the button
		*******************************/

		$('.js--scroll-hero').click(function() {

			$('html, body').animate({scrollTop: $('.js--portfolio-section').offset().top}, 1000);


		});


		/*************************
		navigation scroll
		*****************************/

		$(function() {
		  $('a[href*="#"]:not([href="#"])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});

		

		/*********************
			mobile-nav
		*************************/	

		$('.js--nav-icon').click(function() {

			var nav = $('.js--main-nav');
			var icon = $('.js--nav-icon i');

			nav.slideToggle(200)

			if (icon.hasClass('ion-navicon-round')) {
				icon.addClass('ion-close-round');
				icon.removeClass('ion-navicon-round');

			} else {

				icon.addClass('ion-navicon-round');
				icon.removeClass('ion-close-round');
			}

		});
});



/******************
	TO ADD ANIMATION
****************************/

$(document).ready(function() {

	'use strict';

	new WOW().init();

});