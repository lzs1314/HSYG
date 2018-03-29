$(document).ready(function(){
	
	//请输入起定量和在全部商品中搜索
	var $fsInput1 = $(".fsInput1"),
		$fsInput2 = $(".fsInput2");
	$fsInput1.focus(function(){
		focusInput($(this),$(this).next());
	});
	$fsInput1.next().click(function(){
		clickText($fsInput1,$(this));
	});	
	$fsInput1.blur(function(){
		blurInput($(this),$(this).next());
	});
	$fsInput2.focus(function(){
		focusInput($(this),$(this).next());
	});
	$fsInput2.next().click(function(){
		clickText($fsInput2,$(this));
	});	
	$fsInput2.blur(function(){
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
	//请输入起定量和在全部商品中搜索  	
	
	
    //飞入购物车js
    var $dd_add = $(".dd_add"),
    	$hs_jhd = $(".hs_jhd");
    $dd_add.bind('click',function(){
        var $tindex = $dd_add.index(this),
        	dtimg = $(this).parent().parent().find("dt"),
        	flyElm = dtimg.clone().css('opacity', 0.75);
        flyCart(flyElm, dtimg);
    });            
    

    function flyCart(obj, pos)
    {
        $('body').append(obj);
        obj.css({
            'z-index': 9000,
            'display': 'block',
            'position': 'absolute',
            'top': pos.offset().top + 'px',
            'left': pos.offset().left + 'px',
            'width': pos.width() + 'px',
            'height': pos.height() + 'px'
        });
        obj.animate({
            top: $hs_jhd.offset().top,
            left: $hs_jhd.offset().left,
            width: 20,
            height: 20
        }, 'slow', function ()
        {
            obj.remove();
        });
    }
    //end 飞入购物车js    
	
	
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
    
    
    //商品起订价（起定量）不得低于元（件）弹窗提示
    $dd_add.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '150px'],
            shift: 2,
            content: "<div class='layer_hint'>商品起定量不得低于500件</div>"
		})
    });    
    //end 商品起订价（起定量）不得低于元（件）弹窗提示
    
    
	//仅显示有货
	var $onlyshow = $(".onlyshow");
	$onlyshow.bind({
		click:function(){
			$(this).find("i").toggleClass("filt_show");
			return false;	
		},
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
	//end  仅显示有货     
	
	
    
    
});
