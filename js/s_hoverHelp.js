$(document).ready(function(){
	//点击问题
	var $hrhpbar_a = $(".hrhpbar_cont").children("a"),
		$hoverHelp_box = $(".hoverHelp").find(".hoverHelp_box"),
		$hrhpbar_i = $(".hrhpbar_i");
	$hrhpbar_a.click(function(){
		var $bar_a = $hrhpbar_a.index(this);
		if ($hoverHelp_box.eq($bar_a).is(":hidden")) {
			$hoverHelp_box.eq($bar_a).show().siblings(".hoverHelp_box").hide();
			$(".shubar").scroll_absolute({arrows:true});
			$(this).append("<i class='hrhp_on'></i>").siblings("a").children("i").remove();
			$(this).addClass("hrhp_a_on").siblings("a").removeClass("hrhp_a_on");
			var num = $(this).height()/2+4;
			$(this).children("i").css({"top":num});	
			$hrhpbar_i.addClass("hrhpbar_i_on");
		} else{
			$(this).removeClass("hrhp_a_on");
			$hoverHelp_box.eq($bar_a).hide();
			$hrhpbar_a.children("i").remove();
			$hrhpbar_i.removeClass("hrhpbar_i_on");
		}
		return false;
	})
	//end 点击问题
	
	//拖动效果
    var $box = $(".hoverHelp");
	$(".hrhpbox_tit,.hoverHelp_bar").attr('unselectable','on').addClass("userselect");
    $(".hrhpbox_tit,.hoverHelp_bar").mousedown(function (event) {
    	$(this).css("cursor","move");//改变鼠标指针的形状  
        //获取鼠标按下的时候左侧偏移量和上侧偏移量
        var old_left = event.pageX;//左侧偏移量
        var old_top = event.pageY;//竖直偏移量
        var scroll_top = $(document).scrollTop();
        var old_position_left = $box.position().left;//获取鼠标的位置
        var old_position_top = $box.position().top - scroll_top;
        $(document).mousemove(function (event) {
            var new_left = event.pageX;//新的鼠标左侧偏移量
            var new_top = event.pageY;//新的鼠标竖直方向上的偏移量
            //计算发生改变的偏移量是多少
            var chang_x = new_left - old_left;
            var change_y = new_top - old_top;
            //计算出现在的位置是多少
            var new_position_left = old_position_left + chang_x;
            var new_position_top = old_position_top + change_y;
            //加上边界限制
            if(new_position_top<0){//当上边的偏移量小于0的时候，就是上边的临界点，就让新的位置为0
                new_position_top=0;
            }
            //如果向下的偏移量大于文档对象的高度减去自身的高度，就让它等于这个高度
            if(new_position_top>$(document).height()-$box.height()){
                new_position_top=$(document).height()-$box.height();
            }
            //右限制
            if(new_position_left>$(document).width()-$box.width()){
                new_position_left=$(document).width()-$box.width();
            }
            if(new_position_left<0){//左边的偏移量小于0的时候设置 左边的位置为0
                new_position_left=0;
            }
            $box.css({
                left: new_position_left + 'px',
                top: new_position_top + 'px'
            })
        });
        $box.mouseup(function(){
        	$box.css("cursor","auto"); 
            $(document).off("mousemove");
        })
        $(document).mouseup(function(){
	    	$box.css("cursor","auto"); 
	        $(document).off("mousemove");
	    })
        return false;
    });    
    //end 拖动效果

})
