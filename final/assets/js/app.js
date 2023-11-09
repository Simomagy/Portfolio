// write the document ready function

$(document).ready(function() {
	loadingAnimation();
	$('.str-1').hide();
});

function loadingAnimation()
{
	let loader = $('#loader');
	let loaderContaier = $('.loader-container');
	setTimeout(function() {
		loader.fadeOut(1000);
		loaderContaier.fadeOut(1000);
		initAnimations();
	},2500);
}

function initAnimations()
{
	let menu = $('.menu');
	menu.css('opacity', 0);
	setTimeout(function() {
		menu.css('opacity', 1);
	1000});
	anime({
		targets: '.menu *',
		scale: [10,1],
		opacity: [0,1],
		easing: "easeOutCirc",
		duration: 400,
		loop: false,
		complete: function() {
			firstStripe();
		},
		delay: anime.stagger(100, {easing: "easeOutCirc"})
	});
	anime({
		targets: '.str-1',
		boxShadow: ['0px 0px 55px rgba(255, 255, 255, 0.35)', '0px 0px 55px rgba(255, 255, 255, 0)'],
		easing: "linear",
		duration: 5000,
		loop: true,
		direction: 'alternate',
	});
}

function firstStripe()
{
	$('.str-1').fadeIn(1000);

	let b1 = $('#s1-b1');
	let b2 = $('#s1-b2');
	let b3 = $('#s1-b3');

	b1.text('Web Design');
	b2.text('Digital Art');
	b3.text('FiveM');

	b3.hover(function() {
		b3.text('FiveM');
	}, function() {
		b3.text('FiveM');
	});
}
