$(document).ready(function(){
	//企业账户小提示
    $eye = $(".wallet_bank_block").find("span");
    $cont = $(".wallet_bank_block").find("i");
    $eye.click(function(){
        $cont.html("748784454")
        $(this).hide();
    });

    $(".fluid_order_input").focus(function(){
        if($(this).val()=="流水单号"){
            $(this).val("");
        }
    });
    $(".fluid_order_input").blur(function(){
        if($(this).val()==""){
            $(this).val("流水单号");
        }
    });
	var $lindex;
	$(".queryI").hover(function(){
		 var that = this;
  		$lindex = layer.tips(
			'1.每个注册用户均拥有一个中信数字账号<br />2.您可以通过网银对数字账号转账进行充值或前往银行柜台现金对数字账号充值<br />',
			 that,
			 {tips: [3, '#f84f4f'], time: 10000}
 		 ); //在元素的事件回调体中，follow直接赋予this即可	
	},function(){
		layer.close($lindex);
	});
	//end 企业账户小提示
	
	//表格奇偶行变色
	$(".trade_record_tb tr:odd").css({"background":"#f6f6f6"});
    $(".trade_record_tb tr:even").css({"background":"#fff"});
    //end 表格奇偶行变色
    
	//搜索栏获得焦点
	var $J_num = $(".J_num"),
		$J_start = $(".J_start"),
		$J_end = $(".J_end");
	
	$J_num.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_num.next().click(function(){
		clickText($J_num,$(this));
	});
	$J_start.focus(function(){
		OnFocus($(this));
	});
	$J_end.focus(function(){
		OnFocus($(this));
	});
	
	//搜索栏失去焦点
	$J_num.blur(function(){
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
	
	//时间设置
	laydate.skin('danlan');
	var start = {
	    elem: '#start',
	    format: 'YYYY-MM-DD hh:mm:ss', //日期格式
	    min: '1900-01-01 00:00:00', //最小日期
		max: '2099-12-31 23:59:59', //最大日期
		start: '2014-6-15 23:00:00',  //开始日期
		istime: true,
	    istoday: false,
	    choose: function(datas){
	        end.min = datas; //开始日选好后，重置结束日的最小日期
	        end.start = datas //将结束日的初始值设定为开始日
	    }
	};
	var end = {
	    elem: '#end',
	    format: 'YYYY-MM-DD hh:mm:ss', //日期格式
	    min: '1900-01-01 00:00:00', //最小日期
		max: '2099-12-31 23:59:59', //最大日期
		start: '2014-6-15 23:00:00',  //开始日期
	    istime: true,
	    istoday: false,
	    choose: function(datas){
	        start.max = datas; //结束日选好后，重置开始日的最大日期
	    }
	};
	laydate(start);
	laydate(end);
	//end 时间设置
	
	//刷新按钮及倒计时
    var $J_refr = $(".J_refr");
    $J_refr.click(function(){
    	if ($(this).hasClass("wallet_refr")) {
    		$(this).removeClass("wallet_refr").addClass("refr_jin");
    		$(this).html("<i>&nbsp;</i><span>120</span>&nbsp;s");
	        var $initval = 120,
	            $second = $(this).find("span");
	        var timer = setInterval(function(){
	            if($initval >= 2){
	                $initval--;
	                $second.html($initval);
	            }else{
	                $J_refr.removeClass("refr_jin").addClass("wallet_refr");
	                $J_refr.html("<i>&nbsp;</i>刷新");
	                $second.html("120");
	                clearInterval(timer); 
	            }
	        },1000)  		
    	}
    })
    //end 刷新按钮及倒计时

	//订单状态（仿select）
	var $tit = $(".search_select").children("p");
    $tit.click(function(){
        var $ss = $tit.index(this);
        $(this).toggleClass("p_on");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function(){
            $tit.eq($ss).html($(this).html()).removeClass("p_on");
            $(this).parent().hide();
        });
    });
    $(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest(".search_select").length == 0){ 
		$tit.removeClass("p_on");
		$(".search_select ul").hide(); 
		} 
	});
    //end 订单状态（仿select）
    

})