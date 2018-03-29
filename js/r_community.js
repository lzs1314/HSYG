$(document).ready(function(){
	$(".side li").click(function(){
		if(!$(this).hasClass("notli")){
		    $(this).addClass("sta_on").siblings().removeClass("sta_on");
		}
	}) 
	$(".side li").hover(function(){
		if(!$(this).hasClass("notli")){
		    $(this).addClass("sta_on1").siblings().removeClass("sta_on1");
		}
	},function(){
		$(this).removeClass("sta_on1");
	})
	
});