$(document).ready(function(){
	$(window).resize(function(){
	    body_width();
	}); 
	//根据浏览器宽度
	body_width();
	function body_width(){
	    var $width = $(window).width();	
	    if ($width>1405) {
	    	$("body").addClass("width_1400").removeClass("width_1210").removeClass("width_990");
	    } else{
	    	if ($width<1405) {
	    		$("body").addClass("width_1210").removeClass("width_990").removeClass("width_1400");	
	    		if ($width<1232.6) {
	    			$("body").addClass("width_990").removeClass("width_1210").removeClass("width_1400");
	    		}
	    	}
	    }		
	}
	//end 根据浏览器宽度	

	//搜索下拉框
	var $sc = $(".search_sel"),
    $tp = $sc.find("span"),
    $cul = $sc.children("ul"),
    $cli = $cul.children("li"),
    $search_text = $(".search_text").children("input");
    $sc.hover(function(){
        $cul.show();
    },function(){
        $cul.hide();
    });
	$cli.click(function(){
        $tp.html($(this).html());
        $search_text.next().html("请输入"+$(this).html()+"名称");
   })
    // end 搜索下拉框
    
    //搜索框内提示文字的显示隐藏
    var $search_input = $(".search_text").find("input");
	$search_input.focus(function(){
		focusInput2($(this).next());
	});
	$search_input.next().click(function(){
		clickText2($search_input,$(this));
	});
	$search_input.blur(function(){
		blurInput2($(this),$(this).next());
	});
	function focusInput2($text){
	    $text.hide();
	}
	function clickText2($input,$text){
	    $input.focus();
	    $text.hide();
	}
	function blurInput2($input,$text){
	    if($input.val() == ""){
	        $text.show();
	    }
	} 
	if ($search_input.val() == "") {
	    $search_input.next().show();
	} else {
	    $search_input.next().hide();
	}
	//end 搜索框内提示文字的显示隐藏  			
	
    //搜索框智能提示上下移动效果
//  xlist($(".search_text > input"),$(".hs_search > .search_list"));
//	$(document).click(function(){
//		if($(".hs_search > .search_list").css('display')=='block'){
//			$(".hs_search > .search_list").hide();
//		}
//	})
	//end 搜索框智能提示上下移动效果
	
	//更多品牌、供应商等属性
	var $lipp_cont = $(".list_box").find(".lipp_cont");
	$lipp_cont.each(function(){
		var $lipp_a = $(this).children("a");
		var sumWidth = 0;
		var $lipp_width = $(this).width();
		$lipp_a.each(function(){
			sumWidth += $(this).width()+20;
		});
		var $morebtn = $(this).parent().next();
		if (sumWidth > $lipp_width) {
			$morebtn.show();			
		} else{
			$morebtn.hide();
		}
		if (sumWidth > $lipp_width && sumWidth < $lipp_width*2) {
			$morebtn.click(function(){
				var $cont = $(this).prev().find(".lipp_cont");
				if ($cont.hasClass("het1")) {
					$cont.removeClass("het1");
					$cont.scrollTop(0);
				} else{
					$cont.addClass("het1");
				}
			})				
		}
		if (sumWidth > $lipp_width*2) {
			$morebtn.click(function(){
				var $cont = $(this).prev().find(".lipp_cont");
				if ($cont.hasClass("het2")) {
					$cont.removeClass("het2");
					$cont.scrollTop(0);
				} else{
					$cont.addClass("het2");
				}				
			})				
		}		
	})
	//end 更多品牌、供应商等属性
		
	//更多高级选项
	var $gj_a = $(".listgj_cont").children(".gj_a"),
		$listgj_ul = $(".listgj_div").children("ul");
	if ($("body").hasClass("width_1400")) {
		listgj(1248);
	} 
	if ($("body").hasClass("width_1210")) {
		listgj(1058);
	} 
	if ($("body").hasClass("width_990")) {
		listgj(838);
	} 		
	function listgj(num){
		var sumWidth = 0;
		$(".listgj_cont").children(".gj_a").each(function(){
			sumWidth += $(this).width()+47;
		});
		var $gj_more = $(".gj_more");
		if (sumWidth > num) {
			$gj_more.show();			
		} else{
			$gj_more.hide();
		}
		if (sumWidth > num && sumWidth < num*2) {
			$gj_more.click(function(){
				var $cont = $(this).prev();
				if ($cont.hasClass("het3")) {
					$cont.removeClass("het3");
					$cont.scrollTop(0);
				} else{
					$cont.addClass("het3");
				}					
			})				
		}
		if (sumWidth > num*2) {
			$gj_more.click(function(){
				var $cont = $(this).prev();
				if ($cont.hasClass("het4")) {
					$cont.removeClass("het4");
					$cont.scrollTop(0);
				} else{
					$cont.addClass("het4");
				}	
			})				
		}	
	}		
	$gj_a.hover(function(){
		$(this).addClass("gj_a_cur");
	    $titIndex = $gj_a.index(this);
	    $listgj_ul.eq($titIndex).show().css({
	    	'top': $(this).offset().top - $(".listgj_cont").offset().top + $(this).height() + 'px'
	    });
	    $listgj_ul.eq($titIndex).hover(function(){
			$(this).show();
			$gj_a.eq($titIndex).addClass("gj_a_cur");
		},function(){
			$(this).hide();
			$gj_a.eq($titIndex).removeClass("gj_a_cur");
		});
	},function(){
		$(this).removeClass("gj_a_cur");
	    $listgj_ul.eq($titIndex).hide();	
	});	
	//end  更多高级选项	
	
	
	//商品按照条件排序
	var	$filt = $(".list_filt").children(".J_filt"),
		$filt_jg = $(".J_filt_jg"),
		$J_filt_time = $(".J_filt_time");
	$filt.click(function(){
		$(this).addClass("filt_on").siblings().removeClass("filt_on");	
		$filt_jg.removeClass("filt_on").removeClass("filt_jg_on");
		$J_filt_time.removeClass("filt_on").removeClass("filt_jg_on");
	})
	$filt_jg.click(function(){
		$(this).addClass("filt_on").siblings().removeClass("filt_on");
		$(this).toggleClass("filt_jg_on");
		$J_filt_time.removeClass("filt_on").removeClass("filt_jg_on");
	})
	$J_filt_time.click(function(){
		$(this).addClass("filt_on").siblings().removeClass("filt_on");
		$(this).toggleClass("filt_jg_on");
		$filt_jg.removeClass("filt_on").removeClass("filt_jg_on");
	})
	//end 商品按照条件排序
	
	//在当前分类中搜索文本框
	var $fsInput = $(".fsInput_p input");	
	$fsInput.focus(function(){
		focusInput($(this),$(this).next());
	});
	$fsInput.next().click(function(){
		clickText($fsInput,$(this));
	});	
	$fsInput.blur(function(){
		blurInput($(this),$(this).next());
	});
	
	//综合样式判定
	function focusInput($input,$text){
	    OnFocus($input);
	    $text.hide();
	}
	function clickText($input,$text){
	    OnFocus($input);
	    $input.focus();
	    $text.hide();
	}
	function blurInput($input,$text){
		$input.removeClass("sea_blue");
	    if($input.val() == ""){
	        $text.show();
	    }
	}
	function OnFocus(obj){
	    obj.addClass("sea_blue");
	}
	function OnBlur(obj){
	   obj.removeClass("sea_blue"); 
	}
	//end 在当前分类中搜索文本框    		
	
	
	//仅显示有货,极速送达
	var $onlyshow = $(".onlyshow"),
		$gsou = $(".gsou");
	$onlyshow.bind({
		// click:function(){
			// $(this).find("i").toggleClass("filt_show");
			// return false;	
		// },
		mouseover:function(){
			if ($(this).find("i").hasClass("filt_show")) {
				$(this).addClass("oyhover");
			} else{
				$(this).find("i").addClass("oyhover_bg");
				$(this).addClass("oyhover");				
			}
		},
		mouseout:function(){
			$(this).find("i").removeClass("oyhover_bg");
			$(this).removeClass("oyhover");
		}
	})
	$gsou.bind({
		// click:function(){
			// $(this).find("i").toggleClass("filt_show");
			// return false;	
		// },
		mouseover:function(){
			if ($(this).find("i").hasClass("filt_show")) {
				$(this).addClass("oyhover");
			} else{
				$(this).find("i").addClass("oyhover_bg");
				$(this).addClass("oyhover");				
			}
		},
		mouseout:function(){
			$(this).find("i").removeClass("oyhover_bg");
			$(this).removeClass("oyhover");
		}
	})	
	//end  仅显示有货,极速送达

    //面包屑导航
    $cru_a = $(".list_crumbs").children(".cru2");
    $cru_a.click(function(){
    	$(this).hide();
    	$(this).prev("span").hide();
    })
    //end 面包屑导航

	$(".list_tt_dd a").each(function(){
		var subtext = subString($(this).text(),40,true);
		$(this).text(subtext);
	})
	function subString(str, len, hasDot) {
	    var newLength = 0;
	    var newStr = "";
	    var chineseRegex = /[^\x00-\xff]/g;
	    var singleChar = "";
	    var strLength = str.replace(chineseRegex, "**").length;
	    for (var i = 0; i < strLength; i++) {
	        singleChar = str.charAt(i).toString();
	        if (singleChar.match(chineseRegex) != null) {
	            newLength += 2;
	        }
	        else {
	            newLength++;
	        }
	        if (newLength > len) {
	            break;
	        }
	        newStr += singleChar;
	    }

	    if (hasDot && strLength > len) {
	        newStr += "...";
	    }
	    return newStr;
	}
});
