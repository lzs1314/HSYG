
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
    
    //侧边栏js效果
	var $lev1_a = $(".level1 > a"),
		$level2 = $(".level2"),
		$lev2_li = $(".level2").children("li"),
		$level_li = $(".rs_mcleft").children(".level");
	$lev1_a.click(function(){
		$(this).toggleClass("levcur").next().stop(true,true).slideToggle(500);
		$level_li.removeClass("lecur");
	})    
	$lev2_li.click(function(){
		$(".level2 li").removeClass("lev2cur");
		$(this).addClass("lev2cur");
		$level_li.removeClass("lecur");
		var $level1_a = $(this).parent().parent().siblings(".level1").children("a");
		if ($level1_a.hasClass("levcur")) {
			$level1_a.removeClass("levcur");
			$level1_a.next().stop(true,true).slideUp(500);
		} 
	})
	$level_li.click(function(){
		$(this).addClass("lecur").siblings().removeClass("lecur");
		$level2.stop(true,true).slideUp(500);
		$level2.prev().removeClass("levcur");
	})
    //end 侧边栏js效果
    
/***********************end 我的商户-共用js***********************/   
})