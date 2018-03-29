$(document).ready(function(){
	
	//规格（标签）
	var $leftBtn = $(".smleft"),
		$rightBtn = $(".smright");   
	$leftBtn.click(function(){
        var $single_sm = $(this).next().next(),
        $single = $single_sm.children("a"),
        $length = $single.length;
        $single_sm.width($single.width*$length),
        $swidth = $single_sm.find("a:first").width()+10;
        if(!$single_sm.is(":animated")){
            $single_sm.animate({left:"-"+$swidth},200,function(){
                $single_sm.css({left:0});
                var $first = $single_sm.find("a:first").clone(),
                	$bigimg = $(this).parent().prev(),
                	$firstbig = $bigimg.find("img:first").clone();
                $first.appendTo($single_sm);
                $single_sm.find("a:first").remove();
                $firstbig.appendTo($bigimg);
                $bigimg.find("img:first").remove();
				$single_sm.each(function(){
					var $single_a = $(this).children("a");
					var $smpic = $single_a.children("img");
					$smpic.hover(function(){
						$(this).parent().parent().find("img").removeClass("smimg");
						$(this).addClass("smimg");
						var $bgdt = $(this).parent().parent().parent().prev(),
						$bgpic = $bgdt.children("img"),
						$index = $smpic.index(this);
						$bgpic.eq($index).show().siblings("img").hide();
					});	
					$single_a.hover(function(){
						$(this).addClass("smha").siblings().removeClass("smha");
					})
				});
            })
        }    		
	})
	$rightBtn.click(function(){
        var $single_sm = $(this).next(),
        $single = $single_sm.children("a"),
        $length = $single.length;
        $single_sm.width($single.width*$length),
        $swidth = $single_sm.find("a:last").width()+10;
		if(!$single_sm.is(":animated")){
			$single_sm.css({left:-$swidth}).children("a").last("a").prependTo($single_sm);
			$single_sm.animate({left:0},200);
		}    		
	})
	//end 规格（标签）
	//规格（标签）鼠标移动效果
	var $single_a = $(".single_sm").children("a");
	$single_a.hover(function(){
		$(this).addClass("smha").siblings().removeClass("smha");
	})
	//end 规格（标签）鼠标移动效果
	



	//规格（图片）
	var $single_sm = $(".single_sm");
	$single_sm.each(function(){
		var $single_a = $(this).children("a");
		var $smpic = $single_a.children("img");
		$smpic.hover(function(){
			$(this).parent().parent().find("img").removeClass("smimg");
			$(this).addClass("smimg");
			var $bgdt = $(this).parent().parent().parent().prev(),
			$bgpic = $bgdt.children("img"),
			$index = $smpic.index(this);
			$bgpic.eq($index).show().siblings("img").hide();
		});	
	});
	//end 规格（图片）
	
	//规格字数多了隐藏出现...
    var span = $(".single_sm").find("span");
    span.each(function(){
    	var cpstr = $(this).html();
    	if(cpstr.length>6){
    		$(this).html(cpstr.substr(0,6)+"…");
    	}
    })
    //end 规格字数多了隐藏出现...

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
	

    //搜索框智能提示上下移动效果
//  xlist($(".search_text > input"),$(".hs_search > .search_list"));
//	$(document).click(function(){
//		if($(".hs_search > .search_list").css('display')=='block'){
//			$(".hs_search > .search_list").hide();
//		}
//	})
	//end 搜索框智能提示上下移动效果
	
	//更多品牌、供应商、高级选项
	var $listpp = $(".listpp"),
		$pp_more = $(".pp_more"),
		$gys_more = $(".gys_more"),
		$gj_more = $(".gj_more"),
		$pp_length = $(".lipp_cont").children("a").length,
		$gys_length = $(".listgys_cont").children("a").length,
		$gj_length = $(".listgj_cont").children("a").length,
		$other = $(".lipp_cont").children("a:gt(8)"),
		$other2 = $(".listgys_cont").children("a:gt(4)");
		$other3 = $(".listgj_cont").children("a:gt(9)");
	

	$listpp.each(function(){
		var $cont = $(this).find(".lipp_cont"),
		$morebtn = $(this).children(".pp_more");
		$morebtn.click(function(){
			$cont.toggleClass("het");
	    });
	});



	gj_more();
	function gj_more(){
		if ($gj_length > 10) {
			$other3.hide();
		}
		$gj_more.click(function(){
	        if($gj_length > 10){
	            if($other3.is(":hidden")){
	                $other3.show();
	            }else{
	                $other3.hide();
	            }
	        }
	    });
	}
	//end 更多品牌、供应商
	
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
	
	//高级选项
	var $gj_a = $(".listgj_cont").children(".gj_a"),
		$listgj_ul = $(".listgj_div").children("ul");
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
	//end  高级选项
	
	
	
});
