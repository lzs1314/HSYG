$(document).ready(function(){
	$(".side li").click(function(){
		if(!$(this).hasClass("notli")){
		    $(this).addClass("sta_on").siblings().removeClass("sta_on");
		}
	}) 
	$(".side li").hover(function(){
	    $(this).children().addClass("a_on");
	},function(){
		$(this).children().removeClass("a_on");
	})
	
});