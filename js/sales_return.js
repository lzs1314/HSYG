($(document).ready(function(){
	
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
    
	//订单状态（仿select）
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
    //end 订单状态（仿select）	
	
	
	
	
	
    $dilbtn = $(".oinfo_dilbtn"),
    $panel = $(".oinfo_panel_dilivery"),
    $oinfo_cc = $(".oinfo_cc"),
    $oinfo_way = $(".oinfo_way"),
    $order_txt = $(".order_txt");

    $oinfo_way.change(function(){
        if($(this).val() == "快递"){
            $oinfo_cc.show(); 
        }else{
            $oinfo_cc.hide(); 
        }
    });

    $order_txt.focus(function(){
        OnFocus2($(this));
    });
   
    $order_txt.blur(function(){         //快递单号
        Checkorder();
    });
    function Checkorder(){
        if($order_txt.val() == ""){
            $order_txt.addClass("b_red").removeClass("b_blue");
            $(".recp").show().html("请填写快递单号");
            return false;
        }else{
            $order_txt.removeClass("b_blue").removeClass("b_red");
            $(".recp").hide();
            return true;
        }
    }
    function OnFocus2(obj){
        obj.addClass("b_blue").removeClass("b_red");
    }

    $dilbtn.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn1',
            area: '380px',
            btn: ['确 定'],
            content: $panel
        })
    });
}))