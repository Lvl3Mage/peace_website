function ibg(){
	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
		$(this).find('img').first().css("width", 0);
		$(this).find('img').first().css("height", 0);
		$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
}
function ReverseVertical(){
	$.each($('.reverse-vertical-element'), function(index, val) {
		parent = $(this).parent();
		$(this).css("height", parent.css("width"));
		console.log(parent.css("width"));
		$(this).css("width", parent.css("height"));
		$(this).css("transform-origin", parseFloat(parent.css("width"))/2 + "px" + " 50%");
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
				breakpoint: 1201,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				}
			},{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$(".long-slider").slick({
		arrows:true,
		dots:false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	ReverseVertical();
	/*$(".wide-slider").slick({
		arrows:false,
		dots:true
	});*/
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
$(document).on('click', '.shortened-text-block>.read-more-button', function(event) {
	$(this).toggleClass("hidden");
	$(this).parent().find(".read-less-button").toggleClass("hidden");
	$(this).parent().find(".additional-text").toggleClass("hidden");
});
$(document).on('click', '.shortened-text-block>.read-less-button', function(event) {
	$(this).toggleClass("hidden");
	$(this).parent().find(".read-more-button").toggleClass("hidden");
	$(this).parent().find(".additional-text").toggleClass("hidden");
});
$(".map__element>.map__trigger").hover(
	function(){
		$(this).parents(".map__element").first().toggleClass("map__element-active");
	},
	function(){
		$(this).parents(".map__element").first().toggleClass("map__element-active");
	}
);
