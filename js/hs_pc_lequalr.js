$(document).ready(function(){
    
	//搜索栏获得焦点
    var $hp_searInput = $(".hp_searInput"),
    	$hp_searBtn = $(".hp_searBtn");
	
	$hp_searInput.focus(function(){
		focusInput($(this),$(this).next());
		$hp_searBtn.addClass("hpbtn_on");
	});
	$hp_searInput.next().click(function(){
		clickText($hp_searInput,$(this));
		$hp_searBtn.addClass("hpbtn_on");
	});
	
	//搜索栏失去焦点
	$hp_searInput.blur(function(){
		blurInput($(this),$(this).next());
		$hp_searBtn.removeClass("hpbtn_on");
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
		$input.removeClass("hptxt_on");
	    if($input.val() == ""){
	        $text.show();
	    }
	}
	function OnFocus(obj){
	    obj.addClass("hptxt_on");
	}
	function OnBlur(obj){
	   obj.removeClass("hptxt_on"); 
	}  

	bgcenter();//根据浏览器宽度，头部背景始终居中
	aboutpeer();//左右对等

})

$(window).resize(function(){
    bgcenter();
}); 
	
//根据浏览器宽度，头部背景始终居中
function bgcenter(){
	var $width = $(window).width(),
		$hspc_head_bg = $(".hspc_head_bg");
	if($width > 1200){
	    $hspc_head_bg.addClass("hspc_head_bg1").removeClass("hspc_head_bg2");
	}
	if($width <= 1200){
		$hspc_head_bg.addClass("hspc_head_bg2").removeClass("hspc_head_bg1");	
	}
}
//end 根据浏览器宽度，头部背景始终居中

//左右对等
function aboutpeer(){
    var $lh = $(".hs_pc_contl"),$rh = $(".hs_pc_contr");
    if($lh.height() > $rh.height()){
        $rh.height($lh.height());
    }
    if($lh.height() < $rh.height()){
        $lh.height($rh.height());
    }	
}
//end 左右对等