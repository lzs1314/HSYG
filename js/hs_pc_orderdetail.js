$(document).ready(function(){
	
	//同一天的不同时间段的小圆点与文字齐平js
	var $hlog_i = $(".hlog_ul").find(".hlog_i");
	$hlog_i.each(function(){
		var $hlog_date = $(this).next();
		if ($hlog_date.html() == "&nbsp;") {
			$(this).css({"top":"20px"});
		}
	})
	//end 同一天的不同时间段的小圆点与文字齐平js
	
	//高亮显示最新信息js
	var $first_i = $(".hlog_ul").find(".hlog_i:first"),
		$first_text = $(".hlog_ul").find(".hlog_text:first");
	$first_i.css({"background":"#fff url(images/hs_pc_all/hlogicon.png) no-repeat 0px 17px","height":"30px","top":"0px"});
	$first_text.css({"font-weight":"bold"});
	//end 高亮显示最新信息js
	
	//去掉最开始一条信息的左侧边线
	var $last_i = $(".hlog_ul").find(".hlog_i:last");
	$last_i.css({"height":"35px"});
	//end 去掉最开始一条信息的左侧边线
	
	//收货地址高度自适应
	$(".orfo_dist").height($(".orfo_addr").height());
	$(".orfo_pay").height($(".orfo_addr").height());
	//end 收货地址高度自适应
	
	//去掉第一条商品的下划分割线
	var $orgs_info_first = $(".hs_ordl_goods").find(".orgs_info:first");
	$orgs_info_first.css({"border-top":"0px"});
	//end 去掉第一条商品的下划分割线
	
	//去掉操作按钮的第一个mt10
	var $first_a = $(".orgs_oper").find("a:first");
	$first_a.css({"margin-top":"0px"});
	//end 去掉操作按钮的第一个mt10

	//确认收货弹窗
	var $orTake_btn = $(".orTake_btn");
    $orTake_btn.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['380px', '150px'],
            btn: ['确 定','取消'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>确认收到商品？</div>"
        })
    });	
	//end 确认收货弹窗

	//取消订单弹窗
	var $J_orCancel = $(".J_orCancel"),
	    $ccreason = $(".cancel_layer"),
	    $li = $(".cancel_cause").find("li"),
	    $span = $(".cancel_cause").children("span"),
	    $note = $span.children("a");
    $J_orCancel.click(function(){
        $li.removeClass("causeli");
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['480px', '290px'],
            btn: ['确 定','取消'],
            content: $ccreason,
            yes:function(index){
                if($(".causeli").length>0){
                    layer.close(index);
                }else{
                    $note.show();
                }
            }
        })
    });
    $li.click(function(){
        if($(this).hasClass("causeli")){
            $(this).removeClass("causeli");
        }else{
            $note.hide();
            $(this).addClass("causeli");
        }
    });    
	//end 取消订单弹窗
	
	//申请退款弹窗
	var $J_orRefund1 = $(".J_orRefund1");
    $J_orRefund1.click(function(){
        $li.removeClass("causeli");
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['480px', '290px'],
            btn: ['确 定','取消'],
            content: $ccreason,
            yes:function(index){
                if($(".causeli").length>0){
                    layer.close(index);
                }else{
                    $note.show();
                }
            }
        })
    });	
	//end 申请退款弹窗
	
	//申请退货弹窗
	var $J_orRefund2 = $(".J_orRefund2");
    $J_orRefund2.click(function(){
        $li.removeClass("causeli");
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['480px', '290px'],
            btn: ['确 定','取消'],
            content: $ccreason,
            yes:function(index){
                if($(".causeli").length>0){
                    layer.close(index);
                }else{
                    $note.show();
                }
            }
        })
    });		
	//end 申请退货弹窗	
	
	//物流信息第一条变色
	var $first_li = $(".hlog_div").find("li:first p");
	$first_li.css({"color":"#ff7a4b"});
	//end 物流信息第一条变色	
	
})