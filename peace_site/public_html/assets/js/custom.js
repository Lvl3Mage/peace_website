function ibg(){
	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
		$(this).find('img').first().css("width", 0);
		$(this).find('img').first().css("width", 0);
		$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
}
$(document).ready( function () {
	ibg();
	$(".wide-slider").slick({
		arrows:false,
		dots:true
	});
	$(".calendar__slider").slick({
		arrows:true,
		dots:false,
		infinite: false,
		slidesToShow: 7,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
		});
});
$(".calendar__month-wrapper").mouseenter(
	function(){

		ToggleCalendarExpansion(this);
	}
).mouseleave(
	function(){
		ToggleCalendarExpansion(this);
	}
);
function ToggleCalendarExpansion(calendarElement){
	$(calendarElement).parents(".slick-list").toggleClass("slick-list--expanded");
}