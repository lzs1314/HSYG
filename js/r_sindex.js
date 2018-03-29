$(document).ready(function(){
	
	$(window).resize(function(){
	    body_width();
	}); 
	//根据浏览器宽度
	body_width();
	function body_width(){
	    var $width = $(window).width();	
	    if ($width>1210) {
	    	$("body").removeClass("width_990");
	    	$(".J_bslides_big,.J_rcont_big").show();
	    	$(".J_bslides_sm,.J_rcont_sm").hide();
	    } else{
	    	$("body").addClass("width_990");
	    	$(".J_bslides_sm,.J_rcont_sm").show();
	    	$(".J_bslides_big,.J_rcont_big").hide();
	    }		
	}
	if ($("body").hasClass("width_990")) {
		$(".J_bslides_sm").slide({ titCell:".num ul" , mainCell:".ssul" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
	} else{
		$(".J_bslides_big").slide({ titCell:".num ul" , mainCell:".ssul" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
	}
	//end 根据浏览器宽度	

	//商品搜索和用户搜索相互切换
	var $ssh_nav_li = $(".ssh_nav").children("li"),
		$sshb_div = $(".sshb_div"),
		$sshb_p = $(".sshb_p");
	$ssh_nav_li.click(function(){
		$(this).addClass("ssh_nav_cur").siblings().removeClass("ssh_nav_cur");
		if ($(this).children("a").html() == "商品") {
			$sshb_p.html("雀巢咖啡1+2");
		}
		if ($(this).children("a").html() == "商户") {
			$sshb_p.html("雀巢店铺");
		}
	});	
	//end 商品搜索和用户搜索相互切换
	
	//商品搜索框和用户搜索框获得焦点
	var $J_sear = $(".J_sear"),
		$sshb_p = $(".sshb_p");
	$J_sear.focus(function(){
		$(this).parent().find(".sshb_p").hide();
	});
	$J_sear.blur(function(){
		if ($(this).val() == '') {
			$(this).parent().find(".sshb_p").show();
		} else{
			$(this).parent().find(".sshb_p").hide();
		}
	});
	$sshb_p.click(function(){
		if ($J_sear.val() == '') {
			$(this).hide();
		    $J_sear.focus();	
		}
	})
	//end 商品搜索框和用户搜索框获得焦点
	
    //搜索框智能提示上下移动效果
//  xlist($(".J_sear"),$(".ssh_cont > .search_list"));
//	$(document).click(function(){
//		if($(".ssh_cont > .search_list").css('display')=='block'){
//			$(".ssh_cont > .search_list").hide();
//		}
//	})
	//end 搜索框智能提示上下移动效果

	//索引目录鼠标经过显示隐藏
	var $cata_tit = $(".cata_tit").children("li"),
	$cata_single = $(".cata_cont").children(".cata_div");
	$cata_tit.hover(function(){
		$titIndex = $cata_tit.index(this);
		$eqnum = $titIndex + 1;
		$cata_single.eq($titIndex).show();
		$cata_single.parent().show();
		$cata_single.eq($titIndex).hover(function(){
			$(this).show();
			$cata_tit.eq($titIndex).addClass("mgd_"+$eqnum).siblings("li").removeClass("mgd_"+$eqnum);
			$(this).parent().show();
		},function(){
			$(this).hide();
			$cata_tit.eq($titIndex).removeClass("mgd_"+$eqnum);
			$(this).parent().hide();
		});
	},function(){
		$cata_single.eq($titIndex).hide();
		$cata_single.parent().hide();
	});	
	//end 索引目录鼠标经过显示隐藏	
	
	
	/*鼠标移过，左右按钮显示*/
	$(".bslides").hover(function(){
		$(this).find(".prev,.next").fadeTo("show",0.15);
	},function(){
		$(this).find(".prev,.next").hide();
	})
	$(".prev,.next").hover(function(){
		$(this).fadeTo("show",0.3);
	},function(){
		$(this).fadeTo("show",0.15);
	})
	/*end 鼠标移过某个按钮 高亮显示*/
	
	

})