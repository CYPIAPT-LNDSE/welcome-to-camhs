//lets populate reel numbers
var min = $(".slider__range").attr("min");
var max = $(".slider__range").attr("max");

updateOutput($(".slider__range").val());

var horizontal;
function updateOutput(figure) {
	//displaying the static output
	$(".slider__banana").html(figure);

	//positioning .static-output and .reel
	//horizontal positioning first
	horizontal = figure/max*($(".eating__slider").width()-$(".slider__reel").width()) + 'px';

	//applying the positions
	$(".slider__banana, .slider__reel").css({left: horizontal});
}
