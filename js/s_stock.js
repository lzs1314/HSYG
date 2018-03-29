$(document).ready(function(){
/***********************我的商户-我的进货单***********************/
	
	//操作复选框
	    $(".checkall_i").click(function(){
	        if($(this).attr("checked") == undefined){
	            $(":checkbox").attr("checked",false);
	        }
	        if($(this).attr("checked") == "checked"){
	            $(":checkbox").attr("checked","checked");
	        }
	    })
	    $(".check_hn").click(function(){
	        if($(this).attr("checked") == undefined){
	            $(".check_hn_pro").attr("checked",false);
	        }
	        if($(this).attr("checked") == "checked"){
	            $(".check_hn_pro").attr("checked","checked");
	        }
	    })
	    $(".check_gd").click(function(){
	        if($(this).attr("checked") == undefined){
	            $(".check_gd_pro").attr("checked",false);
	        }
	        if($(this).attr("checked") == "checked"){
	            $(".check_gd_pro").attr("checked","checked");
	        }
	    })
	    $(".check_ot").click(function(){
	        if($(this).attr("checked") == undefined){
	            $(".check_ot_pro").attr("checked",false);
	        }
	        if($(this).attr("checked") == "checked"){
	            $(".check_ot_pro").attr("checked","checked");
	        }
	    })
	    $(".check_hn_pro").click(function(){
	        if($("input[name='check_hn_pro']:checked").length>0){
	            $(".check_hn").attr("checked","checked");
	        }else{
	            $(".check_hn").attr("checked",false);
	        }
	    })
	    $(".check_gd_pro").click(function(){
	        if($("input[name='check_gd_pro']:checked").length>0){
	            $(".check_gd").attr("checked","checked");
	        }else{
	            $(".check_gd").attr("checked",false);
	        }
	    })
	    $(".check_ot_pro").click(function(){
	        if($("input[name='check_ot_pro']:checked").length>0){
	            $(".check_ot").attr("checked","checked");
	        }else{
	            $(".check_ot").attr("checked",false);
	        }
	    })
	
	
	    
	    //删除商品弹窗
	    var $del_abtn = $(".del_abtn");
	    $del_abtn.click(function(){
	    	layer.open({
		        type: 1,
	            title: false,
	            closeBtn: 1, 
	            area: ['380px', '150px'],
	            shift: 2,
	            skin: 'layerBtn2',
	            btn: ['确 定', '取 消'],
	            content: "<div class='layer_hint'>删除商品？</div>"
			})
	    })
	    //end 删除商品弹窗
	    
	    //批量删除商品提示
	    var $settle_ps = $(".settle_ps");
	    $settle_ps.click(function(){
	    	layer.open({
		        type: 1,
	            title: false,
	            closeBtn: 1, 
	            area: ['380px', '150px'],
	            shift: 2,
	            skin: 'layerBtn2',
	            btn: ['确 定', '取 消'],
	            content: "<div class='layer_hint'>您好没选择商品哦！</div>"
			})
	    })	    
	    //end 批量删除商品提示
	    
	    //结算时提示商品数量大于库存数量弹窗样式
	    $(".settleBtn input").click(function(){
	    	layer.open({
		        type: 1,
	            title: false,
	            closeBtn: 1, 
	            area: 'auto',
	            shift: 2,
	            skin: 'layerBtn1',
	            btn: ['确 定'],
	            content: "<div class='layer_war' style='padding: 0px 30px 10px 30px;margin-top: 20px;font-size: 14px;'><img src='images/common/lay3.png' style='margin-bottom: 10px;'><br>商品【海飞丝200ml去屑洗发水海飞丝海飞丝200ml去屑洗发水海飞丝海飞丝200ml去屑洗发水海飞丝】大于库存数量</div>"
			})
	    })
	    //end 结算时提示商品数量大于库存数量弹窗样式
	    
	    //购物车悬浮在底部
		$cart_settlement_bottom = $(".stock_settlement");
		if($cart_settlement_bottom.length>0){
		    $ctop = $cart_settlement_bottom.offset().top;
		    $wheight = $(window).height();
		    $minus = $ctop-$wheight+80;   
		}
		if($minus>0){
		    $cart_settlement_bottom.addClass("bottom_on");
		}
		$(window).scroll(function(){
		    var $totop = $(this).scrollTop();
		    if($totop<$minus){
		        $cart_settlement_bottom.addClass("bottom_on");
		    }else{
		        $cart_settlement_bottom.removeClass("bottom_on");
		    }
		});
		//end 购物车悬浮在底部
		
		//表格边框线控制
		var $fcart_bbc = $(".s_stock_single").find(".cart_bbc:first");
		$fcart_bbc.css({"border-top":"none"});
		//end 表格边框线控制
		
	    
/***********************end 我的商户-我的进货单***********************/

})