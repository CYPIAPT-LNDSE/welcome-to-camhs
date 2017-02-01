//lets populate reel numbers
var min = $("#rangeslider").attr("min");
var max = $("#rangeslider").attr("max");

var rn = "";
for (var i = min; i <= max; i++) {
  rn += "<span>"+i+"</span>";
}
$("#rn").html(rn);

//triggering updateOutput manually
updateOutput($("#rangeslider").val(), false);

var rfigure, h, v;
//lets display the static output now
function updateOutput(figure, activate) {
	//if activate then add .active to #input-wrapper to help animate the #reel
	if(activate)
		$("#input-wrapper").addClass("active");

	//because of the step param the slider will return values in multiple of 0.05 so we have to round it up
	rfigure = Math.round(figure);
	//displaying the static output
	$("#static-output").html(rfigure);

	//positioning #static-output and #reel
	//horizontal positioning first
	h = figure/max*($("#input-wrapper").width()-$("#reel").width()) + 'px';
	//vertical positioning of #rn
	v = rfigure*$("#reel").height()*-1 + 'px';

	//applying the positions
	$("#static-output, #reel").css({left: h});
	//#rn will be moved using transform+transitions for better animation performance. The false translateZ triggers GPU acceleration for better performance.
	$("#rn").css({transform: 'translateY('+v+') translateZ(0)'});
}
function deactivate() {
	//remove .active from #input-wrapper
	$("#input-wrapper").removeClass("active");
}
