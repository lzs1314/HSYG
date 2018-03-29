$(document).ready(function(){
	//零售最近浏览
	var $changeRb = $(".changeRb"),
		$leftBtn = $(".rb_leftBtn"),
		$rightBtn = $(".rb_rightBtn"),	
		$rb_cont = $(".rb_cont"),
		$rb_ul = $(".rb_cont").children("ul"),
		$single = $rb_ul.children("li"),
		$length = $single.length;
		$rb_ul.width($single.width*$length),
		$rb_ul.height($(".rb_cont").height()),
		$swidth = $(".rb_cont").width(),
		$lastf = $rb_ul.children("li").length-8;
	//换一换
	$changeRb.click(function(){
		if(!$rb_ul.is(":animated")){
			$rb_ul.animate({left:"-="+$swidth},500,function(){
				$rb_ul.css({left:"0px"}).children("li:lt(7)").appendTo($rb_ul);
			})
		}
	});		
	
	$rb_cont.hover(function(){
	    $leftBtn.show();
	    $rightBtn.show();
	},function(){
	    $leftBtn.hide();
	    $rightBtn.hide();
	});
	
    $leftBtn.click(function(){
		if(!$rb_ul.is(":animated")){
			$rb_ul.animate({left:"-="+$swidth},500,function(){
				$rb_ul.css({left:"0px"}).children("li:lt(7)").appendTo($rb_ul);
			})
		}
    })
    $rightBtn.click(function(){
		if(!$rb_ul.is(":animated")){
			$rb_ul.css({left:"-1198px"}).children("li:gt("+$lastf+")").prependTo($rb_ul);
			$rb_ul.animate({left:"+="+$swidth},500);
		}
    })		
	//end 零售最近浏览
})