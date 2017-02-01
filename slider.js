(function($){
	'use strict';
	var min = $(".slider__range").attr("min");
	var max = $(".slider__range").attr("max");
	var horizontal;

	window.updateOutput = function (figure) {
		$(".slider__banana").html(figure);
		horizontal = figure/max*($(".eating__slider").width()-$(".slider__reel").width()) + 'px';
		$(".slider__banana, .slider__reel").css({left: horizontal});
	}
	updateOutput($(".slider__range").val());
})(jQuery);
