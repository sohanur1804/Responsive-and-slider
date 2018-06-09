// Call the wow js
new WOW().init();

	
// Call the mobile navigate
$(function(){
	$('#mobile_nav').slicknav({
		prependTo: '.menu_part' 
	});
});

// Call the owl slider 
	$(document).ready(function(){
	  $("#banner").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 2000,
		nav: true,
		dots: false,
		rewind: true,
	  });
	});
