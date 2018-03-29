$(function(){
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
                	$bigimg = $(this).parent().parent().prev(),
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
						var $bgdt = $(this).parent().parent().parent().parent().parent().find("dt"),
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
			var $bgdt = $(this).parent().parent().parent().parent().parent().find("dt"),
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
})