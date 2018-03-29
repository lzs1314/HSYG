$(document).ready(function(){
/***********************我的商户-我的采购单***********************/

	//搜索栏获得焦点
	var $J_name = $(".J_name"),
		$J_start = $(".J_start"),
		$J_end = $(".J_end");
	
	$J_name.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_name.next().click(function(){
		clickText($J_name,$(this));
	});
	$J_start.focus(function(){
		OnFocus($(this));
	});
	$J_end.focus(function(){
		OnFocus($(this));
	});
	
	//搜索栏失去焦点
	$J_name.blur(function(){
		blurInput($(this),$(this).next());
	});
	$J_start.blur(function(){
		OnBlur($(this));
	});
	$J_end.blur(function(){
		OnBlur($(this));
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
		$input.removeClass("sf_blue");
	    if($input.val() == ""){
	        $text.show();
	    }
	}
	function OnFocus(obj){
	    obj.addClass("sf_blue");
	}
	function OnBlur(obj){
	   obj.removeClass("sf_blue"); 
	}
	
	//订单状态切换
	var $vessel_zt_a = $(".sf_state").find("a");
	$vessel_zt_a.click(function(){
		$(this).addClass("sf_state_on").siblings("a").removeClass("sf_state_on");
	});
	//end 订单状态切换
	
    //时间设置
    laydate.skin('danlan');
    var start = {
        elem: '#start',
        format: 'YYYY/MM/DD',
        min: '1900-01-01', //设定最小日期为当前日期
        max: '2099-06-16', //最大日期
        istime: false,
        istoday: false,
        choose: function(datas){
             end.min = datas; //开始日选好后，重置结束日的最小日期
             end.start = datas //将结束日的初始值设定为开始日
        }
    };
    var end = {
        elem: '#end',
        format: 'YYYY/MM/DD',
        min: '1900-01-01',
        max: '2099-06-16',
        istime: false,
        istoday: false,
        choose: function(datas){
            start.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };
    laydate(start);
    laydate(end);
    //end 时间设置
    
	//类型（仿select）
	var $tit = $(".sf_select").children("p");
    $tit.click(function(){
        var $ss = $tit.index(this);
        $(this).toggleClass("p_on");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function(){
            $tit.eq($ss).html($(this).html()).removeClass("p_on");
            $(this).parent().hide();
        });
    });
    //end 类型（仿select）
	
	//投诉卖家弹窗
	$(".tsbtn").click(function(){
		layer.open({
	        type: 1,
	        title: false,
	        closeBtn: 1, 
	        area: ['420px', '232px'],
	        shift: 2,
	        skin: 'layerBtn1',
	        btn: ['确 定'],
	        content: $(".ts_reason"),
	        yes:function(index){
	        	$text_w = $(".ts_reason").children("span");
	        	$text = $(".ts_reason").children("textarea");
	        	if($text.val().length > 0){
	        		layer.close(index);
	        	}else{
	        		$text.css({"border":"1px solid #f40"});
	        		$text_w.show().html("请填写投诉原因");;

	        	}
	        }
		})
	});
	//end 投诉卖家弹窗

	//取消订单弹出层
	var $cause_li = $(".cancel_cause ul li");
	var $ts_cancelBtn = $(".ts_cancelBtn");
	$ts_cancelBtn.click(function(){
		 $cause_li.removeClass("causeli");
		layer.open({
	        type: 1,
	        title: false,
	        closeBtn: 1, 
	        area: ['460px', '350px'],
	        shift: 2,
	        skin: 'layerBtn2',
	        btn: ['确 定', '取 消'],
	        content: $('.layer_cancel'),
	        yes:function(index){
	        	$(".ccl_a").hide();
	        	
	        	if($(".causeli").length > 0){
	        		layer.close(index);
	        	}else{
	        		$(".ccl_a").show();
	        	}
	        }
		})
	});	
	$cause_li.click(function(){
		$(this).toggleClass("causeli");
	});		
	//end 取消订单弹出层
	
	//确认收货弹出层
	var $ts_affirmBtn = $(".ts_affirmBtn");
	$ts_affirmBtn.click(function(){
		layer.open({
	        type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '150px'],
            shift: 2,
            skin: 'layerBtn2',
            btn: ['确 定', '取 消'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>确定确认收货？</div>"
		})
	});	
	//end 确认收货弹出层
	
	
	



/***********************end 我的商户-我的采购单***********************/

})