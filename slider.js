(function($){
	'use strict';
	var min = $(".slider__range").attr("min");
	var max = $(".slider__range").attr("max");
	var vertical;

	window.updateOutput = function (figure) {
		$(".slider__banana").html(figure);
		vertical = figure/max*($(".eating__slider").height()-$(".slider__reel").height()) + 'px';
		$(".slider__banana, .slider__reel").css({bottom: vertical});
	}
	updateOutput($(".slider__range").val());
})(jQuery);
