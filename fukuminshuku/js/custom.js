

	// PreLoader
	$(window).load(function() {
		$(".pre-loader").fadeOut(400);
	});

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});


	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	
	
	//jQuery for Horizonotal Tabs in Schedule Section
	jQuery(function() {
		
		 jQuery("#scheduleTab").easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion           
            width: 'auto', //auto or any custom width
            fit: true,   // 100% fits in a container
            activate: function() {} // Callback function, gets called if tab is switched
			
        });	
	});
	
	//jQuery for Vertical Tabs in Event Section
	jQuery(function() {
		 jQuery("#eventTab").easyResponsiveTabs({
			 
            type: 'vertical', //Types: default, vertical, accordion           
            width: 'auto', //auto or any custom width
            fit: true,   // 100% fits in a container
            activate: function() {} // Callback function, gets called if tab is switched
			
        });	
	});
	
	
	

	//jQuery for  Gallery Lightbox Plugin
	jQuery(document).ready(function(){
		jQuery(".gallery").colorbox({
			
			rel: 'gallery',
			width: "60%",
			transition:	'elastic',
			speed: 650,
			slideshow: true,
			slideshowSpeed: 4000,
			slideshowAuto: true,
			slideshowStart: 'Play <i class="fa fa-play"></i>',
			slideshowStop: 'Pause <i class="fa fa-pause"></i>',
			
		});	
	});
	
	
	//Owl Carouosel
	jQuery(document).ready(function(){
	  jQuery(".sponsor-slide").owlCarousel({
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		loop:true,
		margin:10,
		dots: false,
		nav: true,
		navText: [
		  '<i class="fa fa-arrow-left"></i>',
		  '<i class="fa fa-arrow-right"></i>'
		  ],
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
			},
			600:{
				items:3,
			},
			1000:{
				items:5,
				nav:true,         
			}
		}
			
		});
	});




	//Smooth Slider
	jQuery(document).ready(function(){
		jQuery("#home").smoothSlides({
			duration: 7000,
			pagination: false,
			});
		});
		
		
		
		
	// Ajax Regsiter Form	
	var formRegister;	
	jQuery(function() {
	
		// Get the form.
		var form = jQuery('#registerform');
		
		// Get the messages div.
		formRegister = jQuery('#form-register');
	
		// Set up an event listener for the contact form.
		form.submit(function(e) {
			// Stop the browser from submitting the form.
			e.preventDefault();
	
			// Serialize the form data.
			var formData = form.serialize();
	
			// Submit the form using AJAX.
			jQuery.ajax({
				type: 'POST',
				url: form.attr('action'),
				data: formData
			})
			.done(function(response) {
				// Make sure that the formRegister div has the 'success' class.
				formRegister.removeClass('error');
				formRegister.addClass('success');
				
				// Set the message text.
				formRegister.text(response);
				
				form[0].reset();
				// remove the message.
				setTimeout(function() { formRegister.empty().removeClass('success'); },5000);
							
	
				
			})
			.fail(function(data) {
				// Make sure that the formRegister div has the 'error' class.
				formRegister.removeClass('success');
				formRegister.addClass('error');
	
				// Set the message text.
				if (data.responseText !== '') {
					formRegister.text(data.responseText);
					
				} else {
					formRegister.text('Oops! An error occured and your message could not be sent.');
				}
			});
	
		});
	
	});
	
	
	
	
	// To Top
	jQuery(document).ready(function(){
	jQuery(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	jQuery('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});

	});