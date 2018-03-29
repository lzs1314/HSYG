$(document).ready(function(){
	$(window).resize(function(){
	    body_width();
	}); 
	//根据浏览器宽度
	body_width();
	function body_width(){
	    var $width = $(window).width();	
	    if ($width>1392.5) {
	    	$("body").addClass("width_1390").removeClass("width_1210").removeClass("width_990");
	    } else{
	    	if ($width<1392.5) {
	    		$("body").addClass("width_1210").removeClass("width_990").removeClass("width_1390");	
	    		if ($width<1232.6) {
	    			$("body").addClass("width_990").removeClass("width_1210").removeClass("width_1390");
	    		}
	    	}
	    }		
	}
	//end 根据浏览器宽度	

    
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
//	$J_filt_time.click(function(){
//		$(this).addClass("filt_on").siblings().removeClass("filt_on");
//		$(this).toggleClass("filt_jg_on");
//		$filt_jg.removeClass("filt_on").removeClass("filt_jg_on");
//	})
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
