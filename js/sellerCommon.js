
$(document).ready(function(){
/***********************我的商户-共用js***********************/

	//顶部菜单显示隐藏
	var $mycenter = $(".mycenter");
    var $cc_list = $(".cc_list");
    $mycenter.hover(function(){
        $index = $mycenter.index(this);
        $cc_list.eq($index).stop(true, true).slideDown();
    }, function(){
        $cc_list.eq($index).stop(true, true).slideUp();
    });
    //end 顶部菜单显示隐藏
    
    //头部导航菜单效果
    var $s_nav = $(".sellerCenter_nav ul li");
    $s_nav.click(function(){
		$(this).addClass("s_border").siblings("li").removeClass("s_border");
	});	
    //end 头部导航菜单效果

    //左侧导航菜单效果
    var $s_good = $(".s_good ul li");
    $s_good.click(function(){
        $(this).addClass("s_good_on").siblings("li").removeClass("s_good_on");
    });
    //end 左侧导航菜单效果
    $(".vessel_zt1 a").click(function () {
        $(this).addClass("vessel_zt_on").siblings("a").removeClass("vessel_zt_on");
    })
/***********************end 我的商户-共用js***********************/   
})