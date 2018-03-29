 $(document).ready(function(){
 	//购物车头部搜索框
 	var $carth_input = $(".carth_input");
 	$carth_input.focus(function(){
 		$(this).next().hide();
 	})
 	$carth_input.next().focus(function(){
 		$carth_input.focus();
		$carth_input.next().hide(); 		
 	})
 	$carth_input.blur(function(){
		var $val = $(this).val();
		if ($val == "") {
            $(this).next().show();
		} else{
			$(this).next().hide();
		} 		
 	})
 	//end 购物车头部搜索框
 	
	//数量加减动画效果
	var $quanInput = $(".quanInput"),
		$subBtn = $(".subBtn"),//减
		$addBtn = $(".addBtn"),//加
		time = 0;
	$addBtn.click(function(){
		var $index = $(".addBtn").index(this);
        var $quanInput = $(".quanInput").eq($index);
		if (time == 0) {
	        time = 3; //设定间隔时间（秒）
	        //启动计时器，倒计时time秒后自动关闭计时器。
	        var index = setInterval(function(){
	            time--;
	            if (time == 0) {
	                clearInterval(index);
	            }
	        }, 300);
	        var n=$quanInput.val();
			var num=parseInt(n)+1;
	        if(num==0){return;}
			$(this).prev().stop(true,true).animate({top:'-=20px',opacity:'1'},300,function(){
        		$quanInput.val(num).stop(true,true).animate({ top: '+=40px' },300)
            	.stop(true,true).animate({ top: '0px', opacity: '1' },300);  
            	setTotal();
        	})	
	    }
		return false;
	})
	$subBtn.click(function(){
		var $index = $(".subBtn").index(this);
        var $quanInput = $(".quanInput").eq($index);
		if (time == 0) {
	        time = 3; //设定间隔时间（秒）
	        //启动计时器，倒计时time秒后自动关闭计时器。
	        var index = setInterval(function(){
	            time--;
	            if (time == 0) {
	                clearInterval(index);
	            }
	        }, 300);
	        var n=$quanInput.val();
			var num=parseInt(n)-1;
	        if(num==0){return false;}			
        	$(this).next().stop(true,true).animate({top:'+=20px',opacity:'1'},300,function(){
        		$quanInput.val(num).stop(true,true).animate({ top: '-=40px' },300)
            	.stop(true,true).animate({ top: '0px', opacity: '1' },300);  
            	setTotal();
        	})	
	    }	
	    return false;
	})
	$quanInput.keyup(function(){
		setTotal();
	})
	//end 数量加减动画效果 

	//每个店铺商品第一条去掉上边框线
	var $item_first = $(".goods_tr").find(".goods_item:first"),
		$lose_item_first = $(".goods_lose").find(".goods_item:first");
	$item_first.css({"border-top":"0"});
	$lose_item_first.css({"border-top":"0"});
	//end 每个店铺商品第一条去掉上边框线
	
	//商品连接线判断高度js
	var $goods_line = $(".cart_table").find(".goods_line");
	$goods_line.each(function(){
		var $goods_single = $(this).parent().find(".goods_single"),
			$single_height = $goods_single.height(),
			$single_length = $goods_single.length-1;
		$(this).height($single_height*$single_length);
	})
	//end 商品连接线判断高度js
	
	//全选
	var $chooseAll_div = $(".chooseAll_div"),//上边的全选
		$chooseAll = $(".chooseAll_div").children("a"),
		$chooseShop = $(".cart_table").find(".goods_tr").find(".chooseShop"),//所有店铺全选按钮
		$chooseOne = $(".cart_table").find(".goods_tr").find(".chooseOne");//商品选择按钮
	$chooseAll_div.click(function(){
		if ($chooseAll.hasClass("choose_on")) {
			$chooseAll.removeClass("choose_on");
			$chooseShop.removeClass("choose_on");
			$chooseOne.removeClass("choose_on");
			$(".cart_table").find(".goods_tr td").removeClass("shop_on");
			active_btn();
		} else{
			$chooseAll.addClass("choose_on");
			$chooseShop.addClass("choose_on");
			$chooseOne.addClass("choose_on");
			$(".cart_table").find(".goods_tr td").addClass("shop_on");
			active_btn();
		}
		return false;
	})
	//end 全选
	
	//店铺全选
	$chooseShop.click(function(){
		var $one = $(this).parent().parent().find(".chooseOne");
		if ($(this).hasClass("choose_on")) {
			$(this).removeClass("choose_on");
			$(this).parent().parent().removeClass("shop_on");
			$one.removeClass("choose_on");
			shop_length();
			active_btn();
		} else{
			$(this).addClass("choose_on");
			$(this).parent().parent().addClass("shop_on");
			$one.addClass("choose_on");
			shop_length();
			active_btn();
		}
		return false;	
	})
	function shop_length(){
		var $chooseShop_length = $(".goods_tr").find(".chooseShop").length,
			$choose_on_length = $(".chooseShop_div").find(".choose_on").length;
		if ($chooseShop_length == $choose_on_length) {
			$chooseAll.addClass("choose_on");
		} else{
			$chooseAll.removeClass("choose_on");
		}
	}
	//end 店铺全选
	
	//单个商品选择
	$chooseOne.click(function(){
		if ($(this).hasClass("choose_on")) {
			$(this).removeClass("choose_on");
			one_length($(this));
			shop_length();
			if ($chooseAll.hasClass("choose_on")) {
				$chooseAll.removeClass("choose_on");
			}
			active_btn();
		} else{
			$(this).addClass("choose_on");
			one_length($(this));
			shop_length();
			active_btn();
		}
		return false;
	})
	function one_length(obj){
		var $shop = obj.parent().parent().parent().find(".chooseShop"),
			$chooseOne_length = obj.parent().parent().find(".chooseOne").length,
			$choose_on_length = obj.parent().parent().find(".choose_on").length;
		if ($chooseOne_length == $choose_on_length) {
			$shop.addClass("choose_on");
			$shop.parent().parent().addClass("shop_on");
		} else{
			$shop.removeClass("choose_on");
			$shop.parent().parent().removeClass("shop_on");
		}
	}
	
	//end 单个商品选择
	
	//选择商品激活结算按钮
	function active_btn(){
		var $cart_sett = $(".cart_sett"),
			$choose_on_num = $(".cart_table").find(".choose_on").length;
		if ($choose_on_num > 0) {
			$cart_sett.addClass("cart_sett_on");
		} else{
			$cart_sett.removeClass("cart_sett_on");
		}
		setTotal();
	}
    //end 选择商品激活结算按钮
    
	//计算总价和件数
	function setTotal(){
		var x=0,
			s=0,
			n=0,
			$subto_money = $(".cart_sub"),
			$sum_num = $(".sum_num").find("b"),
			$on_num = $(".goods_single_div").find(".choose_on"),
			$goods_item = $(".goods_tr").find(".goods_item"),
			$sum_money = $(".sum_money").find("span");
		$on_num.next().each(function(){ 
			if ($(this).find('input[class*=quanInput]').val() == "") {
				$(this).find('input[class*=quanInput]').val("1");
			}
			x=parseInt($(this).find('input[class*=quanInput]').val())
	 		*parseFloat($(this).find('p[class*=cart_price]').text().substring(1));
			s+=parseInt($(this).find('input[class*=quanInput]').val())
	 		*parseFloat($(this).find('p[class*=cart_price]').text().substring(1)); //过滤掉第一个字符	
	 		n+=parseInt($(this).find('input[class*=quanInput]').val());
	 		$(this).find(".cart_sub").html("￥"+x.toFixed(2));
	    }); 
		$goods_item.each(function(){ 
			if ($(this).find('input[class*=quanInput]').val() == "") {
				$(this).find('input[class*=quanInput]').val("1");
			}
			x=parseInt($(this).find('input[class*=quanInput]').val())
	 		*parseFloat($(this).find('p[class*=cart_price]').text().substring(1));
	 		$(this).find(".cart_sub").html("￥"+x.toFixed(2));
	    }); 
	    $sum_money.html(s.toFixed(2));//四舍五入为两位小数
	    $sum_num.html(n);
	}
	//end 计算总价和件数 
	
	//删除商品弹窗提示
	var $cart_del = $(".cart_del");
	$cart_del.each(function(){
		$(this).click(function(){
			layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn2',
	            area: ['380px', '150px'],
	            btn: ['确 定','取消'],
	            content: "<div class='layer_war'><img src='images/common/lay3.png'>删除商品？</div>"
	        })
		})
	})
	//end 删除商品弹窗提示
	
	//批量删除商品弹窗提示
	var $bulk_del = $(".bulk_del");
	$bulk_del.click(function(){
		layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['380px', '150px'],
            btn: ['确 定','取消'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>请至少选中一件商品！</div>"
        })
		return false;
	})
	//end 批量删除商品弹窗提示
	
	//购物车底部
	$cart_bottom = $(".cart_toolbar_wrap");
	if($cart_bottom.length>0){
	    $ctop = $cart_bottom.offset().top;
	    $wheight = $(window).height();
	    $minus = $ctop-$wheight+80;   
	}
	if($minus>0){
	    $cart_bottom.addClass("bottom_on");
	}
	$(window).scroll(function(){
	    var $totop = $(this).scrollTop();
	    if($totop<$minus){
	        $cart_bottom.addClass("bottom_on");
	    }else{
	        $cart_bottom.removeClass("bottom_on");
	    }
	});
	//购物车底部
	
	//购物车无商品时隐藏全选选择框
	if ($("body").find(".no_orders_td")) {
		var $All = $(".no_orders_td").parents().prev("tr").find(".chooseAll_div");
		$All.remove();
	}
	//end 购物车无商品时隐藏全选选择框
	
 	/*零售-购物车-猜你喜欢*/
	var $gl_changeRb = $(".gl_changeRb"),
		$leftBtn = $(".gl_leftBtn"),
		$rightBtn = $(".gl_rightBtn"),	
		$gl_cont = $(".gl_cont"),
		$gl_ul = $(".gl_cont").children("ul"),
		$single = $gl_ul.children("li"),
		$length = $single.length;
		$gl_ul.width($single.width*$length),
		$gl_ul.height($(".gl_cont").height()),
		$swidth = $(".gl_cont").width(),
		$lastf = $gl_ul.children("li").length-8,
		$sline = $(".gl_line");
	//换一换
	$sline.animate({left:"840px"},1000);
	$gl_changeRb.click(function(){
        $sline.css({left:0});
        $sline.stop().animate({left:"840px"},1000);  		
		if(!$gl_ul.is(":animated")){
			$gl_ul.animate({left:"-="+$swidth},500,function(){
				$gl_ul.css({left:"0px"}).children("li:lt(7)").appendTo($gl_ul);
			})
		}
	});		
	
	$gl_cont.hover(function(){
	    $leftBtn.show();
	    $rightBtn.show();
	},function(){
	    $leftBtn.hide();
	    $rightBtn.hide();
	});
	
    $leftBtn.click(function(){
		if(!$gl_ul.is(":animated")){
			$gl_ul.animate({left:"-="+$swidth},500,function(){
				$gl_ul.css({left:"0px"}).children("li:lt(7)").appendTo($gl_ul);
			})
		}
    })
    $rightBtn.click(function(){
		if(!$gl_ul.is(":animated")){
			$gl_ul.css({left:"-1198px"}).children("li:gt("+$lastf+")").prependTo($gl_ul);
			$gl_ul.animate({left:"+="+$swidth},500);
		}
    })		
	/*end 零售-购物车-猜你喜欢*/
 	
 	

 })   