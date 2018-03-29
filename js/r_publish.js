$(document).ready(function(){
	
	//发布须知弹窗 
	var $agree_btn = $(".service_agreement_a");
	$agree_btn.click(function(){
		layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            area: ['800px', '480px'],
            content: $('.agree_panel')
        })	
	})
	//end 发布须知弹窗 
	
	//选择类目
	var $tre1 = $(".r_tre1"),
		$level_li = $(".r_level2").children("li");
	$tre1.click(function(){
		$(this).next().stop(true,true).slideToggle(300)
		.parent().siblings().children("a").removeClass("r_lev1_cur")
		.next().stop(true,true).slideUp("slow");		
	})
	$level_li.click(function(){
		$(this).addClass("r_lev_cur").siblings().removeClass("r_lev_cur");
	})
	//end 选择类目
	
	//类目级数决定宽度
	var $wareSort = $(".wareSort");
	$wareSort.each(function(){
		var $sortit = $(this).prev(".sortit");
		var $wareSort_length = $(this).find(".sort_cont").length;	
		if ($wareSort_length > 0) {
			var $varyWidth = 242*$wareSort_length+20;
			if ($varyWidth > 898) {
				$(this).width($varyWidth);
			} else{
				$(this).width(898);
			}	
			if ($(this).width() > $sortit.width()) {
				$sortit.width($varyWidth);
			} else{
				$sortit.width(898);
			}		
		} else{
			$(this).width(898);
		}		
	})
	//end 类目级数决定宽度
	
	//快速搜索栏
	var $stes_input = $(".stes_input");
	$stes_input.focus(function(){
		$(this).next("em").hide();
	})
	$stes_input.next("em").click(function(){
		$(this).hide();
		$(this).prev().focus();
	})
	$stes_input.blur(function(){
		if ($(this).val() == "") {
			$(this).next("em").show();
		}
	})
	//end 快速搜索栏
	
	//点击搜索按钮
	var $stes_seabtn = $(".stes_seabtn"),
		$sortit_a = $(".sortit_a"),
		$hengbar = $(".hengbar"),
		$J_skbx = $(".J_skbx");
	$stes_seabtn.click(function(){
		if ($stes_input.val() != "") {
			$hengbar.hide();
			$J_skbx.show();
			$(".J_skbx").find(".pubt_seekbox").scroll_absolute({arrows:true});
		}
	})
	$sortit_a.click(function(){
		$J_skbx.hide();
		$hengbar.show();		
	})
	
	//选择搜索出来的类目
	var $skbx_p = $(".pubt_seekbox").children("p");
	$skbx_p.click(function(){
		if (!$(this).hasClass("skbx_on")) {
			$(this).addClass("skbx_on").siblings("p").removeClass("skbx_on");
		}
	})
	//end 选择搜索出来的类目
	
	
})