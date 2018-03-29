$(document).ready(function(){
	//s鼠标移动到全部商品分类上面，显示隐藏
	var $nav_cateall = $(".nav_cateall"),
		$list_cata = $(".list_cata_wrap");
	$nav_cateall.mouseenter(function(){
		$list_cata.show();
	});
	$nav_cateall.mouseleave(function(){
		$list_cata.hide();
	
	});
	$list_cata.mouseenter(function(){
		$(this).show();
	});
	$list_cata.mouseleave(function(){
		$(this).hide();
	});
	//end  s鼠标移动到全部商品分类上面，显示隐藏
	
	//索引目录鼠标经过显示隐藏
	var $cata_tit = $(".cata_tit").children("li"),
	$cata_single = $(".cata_cont").children("ul"),
	$cata_ad = $(".cata_ad");
	
	$cata_tit.hover(function(){
		$titIndex = $cata_tit.index(this);
		$eqnum = $titIndex + 1;
		$cata_single.eq($titIndex).show();
		$cata_ad.show();
		
		$cata_single.eq($titIndex).hover(function(){
			$(this).show();
			$cata_ad.show();
			$cata_tit.eq($titIndex).addClass("mgd_"+$eqnum).siblings("li").removeClass("mgd_"+$eqnum);
		},function(){
			$(this).hide();
			$cata_ad.hide();
			$cata_tit.eq($titIndex).removeClass("mgd_"+$eqnum);
		});
		$cata_ad.hover(function(){
			$(this).show();
			$cata_single.eq($titIndex).show();
			$cata_tit.eq($titIndex).addClass("mgd_"+$eqnum).siblings("li").removeClass("mgd_"+$eqnum);
		},function(){
			$cata_single.eq($titIndex).hide();
			$cata_ad.hide();
			$cata_tit.eq($titIndex).removeClass("mgd_"+$eqnum);
		});
	},function(){
		$cata_single.eq($titIndex).hide();
		$cata_ad.hide();
	});	
	//end 索引目录鼠标经过显示隐藏
});
