//lets populate reel numbers
var min = $(".rangeslider").attr("min");
var max = $(".rangeslider").attr("max");

updateOutput($(".rangeslider").val());

var rfigure, h;
function updateOutput(figure) {
	//because of the step param the slider will return values in multiple of 0.05 so we have to round it up
	rfigure = Math.round(figure);
	//displaying the static output
	$(".static-output").html(rfigure);

	//positioning .static-output and .reel
	//horizontal positioning first
	h = figure/max*($(".input-wrapper").width()-$(".reel").width()) + 'px';

	//applying the positions
	$(".static-output, .reel").css({left: h});
}
