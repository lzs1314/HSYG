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
	
	//根据分辨率调整居中
	var $wwht = $(window).height(),
		$error_div = $(".error_div");
	if ($wwht<716){
    	$error_div.addClass("padd20").removeClass("padd80").removeClass("padd140");
	}
	if (716<=$wwht && $wwht<866){
	    $error_div.addClass("padd80").removeClass("padd20").removeClass("padd140");
	}
	if (866<=$wwht){
	    $error_div.addClass("padd140").removeClass("padd20").removeClass("padd80");
	}
	//end 根据分辨率调整居中

});
