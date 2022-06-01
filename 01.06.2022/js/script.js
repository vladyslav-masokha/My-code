// Navigation
$('.nav .close').click(function () {
	$('.nav').addClass('un-active-navbar');
})

$('.navbar .check-burger').click(function () {
	$('nav').removeClass('un-active-navbar');
})



// Slider
$('.slider').slick({
	dots: true,
	arrows: false,
	adaptiveHeight: true,
});

// 
// $('.navbar .check-burger').click(function() {
// 	$('#about-us hr').removeClass('un-active-navbar');
// })

