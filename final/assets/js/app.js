// write the document ready function

$(document).ready(function() {
	loadData();
});

function loadData()
{
	let menu = $('.menu > *');
	setTimeout(function() {
		menu.css('opacity', 0);
	1000});
	anime({
		targets: '.menu *',
		scale: [14,1],
		opacity: [0,1],
		easing: "easeOutCirc",
		duration: 400,
		delay: anime.stagger(100, {easing: "easeOutCirc"})
	});
}
