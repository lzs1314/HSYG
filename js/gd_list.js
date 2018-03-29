$(document).ready(function(){
//导航下分类切换
	var $all_catalog = $(".all_catalog").children("li"),$detail_catalog = $(".detail_catalog").children("div"),$recom_ad = $(".recom_ad");
	
	$all_catalog.hover(function(){
		$fdindex = $all_catalog.index(this);
		$eqnum = $fdindex+1;
		$detail_catalog.eq($fdindex).show();
		$recom_ad.show();
		$detail_catalog.eq($fdindex).hover(function(){
			$(this).show();
			$recom_ad.show();
			$all_catalog.eq($fdindex).addClass("mgd_"+$eqnum).siblings("li").removeClass("mgd_"+$eqnum);
			$cata_p = $all_catalog.eq($fdindex).find(".cata_p");
			$cata_p.addClass("cor");
		},function(){
			$(this).hide();
			$recom_ad.hide();
			$all_catalog.eq($fdindex).removeClass("mgd_"+$eqnum);
			$cata_p = $all_catalog.eq($fdindex).find(".cata_p");
			$cata_p.removeClass("cor");
		});
		$recom_ad.hover(function(){
			$(this).show();
			$detail_catalog.eq($fdindex).show();
			$all_catalog.eq($fdindex).addClass("mgd_"+$eqnum).siblings("li").removeClass("mgd_"+$eqnum);
		},function(){
			$detail_catalog.eq($fdindex).hide();
			$recom_ad.hide();
			$all_catalog.eq($fdindex).removeClass("mgd_"+$eqnum);
		});
	},function(){
		$detail_catalog.eq($fdindex).hide();
		$recom_ad.hide();
	});	
	//end  导航下分类切换
	
	
	//s鼠标移动到全部商品分类上面，显示隐藏
	var $nav_cateall = $(".nav_cateall"),
		$gd_menu = $(".gd_menu");
	$nav_cateall.mouseenter(function(){
		$gd_menu.show();
	});
	$nav_cateall.mouseleave(function(){
		$gd_menu.hide();
	
	});
	$gd_menu.mouseenter(function(){
		$(this).show();
	});
	$gd_menu.mouseleave(function(){
		$(this).hide();
	});
	//end  s鼠标移动到全部商品分类上面，显示隐藏
	
		//顶部菜单显示隐藏
	var $mycenter = $(".mycenter"),
    	$cc_list = $(".cc_list"),
    	$phoneStore = $(".phoneStore"),
    	$phoneS = $(".phoneS");
    	
    $mycenter.hover(function(){
        $index = $mycenter.index(this);
        $cc_list.eq($index).stop(true, true).slideDown();
    }, function(){
        $cc_list.eq($index).stop(true, true).slideUp();
    });
    
    $phoneStore.hover(function(){
        $index = $mycenter.index(this);
        $phoneS.eq($index).stop(true, true).slideDown();
    }, function(){
        $phoneS.eq($index).stop(true, true).slideUp();
    });
    //end 顶部菜单显示隐藏
	
	//商品按照条件排序
	var	$filt = $(".list_filt").children(".J_filt"),
		$filt_jg = $(".J_filt_jg"),
		$J_filt_time = $(".J_filt_time");
	$filt.click(function(){
		$(this).addClass("gd_filt_on").siblings().removeClass("gd_filt_on");	
		$filt_jg.removeClass("gd_filt_on").removeClass("gd_filt_jg_on");
		$J_filt_time.removeClass("gd_filt_on").removeClass("gd_filt_jg_on");
	})
	$filt_jg.click(function(){
		$(this).addClass("gd_filt_on").siblings().removeClass("gd_filt_on");
		$(this).toggleClass("gd_filt_jg_on");
		$J_filt_time.removeClass("gd_filt_on").removeClass("gd_filt_jg_on");
	})
	$J_filt_time.click(function(){
		$(this).addClass("gd_filt_on").siblings().removeClass("gd_filt_on");
		$(this).toggleClass("gd_filt_jg_on");
		$filt_jg.removeClass("gd_filt_on").removeClass("gd_filt_jg_on");
	})
	//end 商品按照条件排序
	
	
    //面包屑导航
    $cru_a = $(".list_crumbs").children(".cru3");
    $cru_a.click(function(){
    	$(this).hide();
    	$(this).prev("span").hide();
    })
    //end 面包屑导航
	
    
/***********************end 合商-共用js***********************/   
})
