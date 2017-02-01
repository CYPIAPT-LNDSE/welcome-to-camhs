//lets populate reel numbers
var min = $(".slider__range").attr("min");
var max = $(".slider__range").attr("max");

updateOutput($(".slider__range").val());

var rfigure, h;
function updateOutput(figure) {
	//because of the step param the slider will return values in multiple of 0.05 so we have to round it up
	rfigure = Math.round(figure);
	//displaying the static output
	$(".slider__banana").html(rfigure);

	//positioning .static-output and .reel
	//horizontal positioning first
	h = figure/max*($(".eating__slider").width()-$(".slider__reel").width()) + 'px';

	//applying the positions
	$(".slider__banana, .slider__reel").css({left: h});
}
