$(document).ready(function(){
	$(".prov_sidebar li").click(function(){
		if(!$(this).hasClass("notli")){
		    $(this).addClass("sta_on").siblings().removeClass("sta_on");
		}
	})
	
});