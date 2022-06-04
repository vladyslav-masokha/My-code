// Navigation
$('.menu .close').click(function() {
	$('.menu').addClass('un-active-navbar');
})

$('.check-burger').click(function() {
	$('.menu').removeClass('un-active-navbar');
})

// Slider
$('.slider').slick({
	dots: true,
	arrows: false,
	adaptiveHeight: true,
});