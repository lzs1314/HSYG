$(document).ready(function(){
    //头部导航菜单效果
    var $s_nav = $(".sellerCenter_nav ul li");
    $s_nav.click(function(){
		$(this).addClass("s_border").siblings("li").removeClass("s_border");
	});	
    //end 头部导航菜单效果
});
