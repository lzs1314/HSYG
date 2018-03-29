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
		$gd_menu = $(".list_cata_wrap");
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
});
