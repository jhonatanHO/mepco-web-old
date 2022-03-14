
/***************** inicio leo 18-08-2015 ************************/
$(".d-viewimage").css("background-image","url("+$(".j-slider").attr("src")+")");
$(".j-slider").click(function(){

	if($(this).hasClass('j-video')){
		var video='<iframe width="437.6" height="246" src="https://www.youtube.com/embed/jnrYh_IBxiM" frameborder="0" allowfullscreen></iframe>';
		$(".d-viewimage").empty();
		$(".d-viewimage").append(video);
	}else{
		$(".d-viewimage").empty();
		var src = $(this).attr("src");
		$(".d-viewimage").css("background-image","url("+src+")");
	}
});

$("#menulateral .panel").click(function(){
	$("#menulateral li").removeClass("active");
});
/***************** inicio leo 18-08-2015 ************************/


function menuVenta(){
	var menu= [
		{
			"categoria":		"",
			"sub-categoria": 	""
		},

	];
	return menu;
}


// ************************practica************************
