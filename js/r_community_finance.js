$(document).ready(function(){

    //搜索栏获得焦点
	var $J_num = $(".J_num"),
		$J_start = $(".J_start"),
		$J_end = $(".J_end"),
		$J_id = $(".J_id");
	
	$J_num.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_num.next().click(function(){
		clickText($J_num,$(this));
	});
	$J_start.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_start.next().click(function(){
		clickText($J_start,$(this));
		laydate(start);
	
	});
	$J_end.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_end.next().click(function(){
		clickText($J_end,$(this));
		laydate(end);
	});
	$J_id.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_id.next().click(function(){
		clickText($J_id,$(this));
	});
	
	//搜索栏失去焦点
	$J_num.blur(function(){
		blurInput($(this),$(this).next());
	});
	$J_start.blur(function(){
		blurInput($(this),$(this).next());
		OnBlur($(this));
	});
	$J_end.blur(function(){
		blurInput($(this),$(this).next());
		OnBlur($(this));
	});
	$J_id.blur(function(){
		blurInput($(this),$(this).next());
		OnBlur($(this));
	});

	
	function OnFocus(obj){
	    obj.addClass("sea_blue");
	}
	function OnBlur(obj){
	   obj.removeClass("sea_blue"); 
	}
	//去除空格  
	function Trim(str,is_global) {
	    var result;
	    result = str.replace(/(^\s+)|(\s+$)/g,"");
	    if(is_global.toLowerCase()=="g"){
	        result = result.replace(/\s/g,"");
	     }
	    return result;
	}
	//时间设置
	laydate.skin('danlan');
	var start = {
	    elem: '#start',
	    format: 'YYYY-MM-DD', //日期格式
	    min: '1900-01-01 00:00:00', //最小日期
		max: '2099-12-31 23:59:59', //最大日期
		start: laydate.now(),  //开始日期
		istime: true,
	    istoday: false,
	    choose: function(datas){
	    	clickText($J_start,$(this));
	    	$J_start.removeClass("aI_blue");
	        end.min = datas; //开始日选好后，重置结束日的最小日期
	        end.start = datas //将结束日的初始值设定为开始日
	        $("body").on("click", "#laydate_clear", function () {
	        	blurInput($J_start,$J_start.next());
				OnBlur($J_start);
		        start.min = '1900-01-01';
		        if($("#start").val() != ""){
		            end.min = $("#start").val();
		            start.max = $("#end").val();
		        }else{
		            end.min = '1900-01-01';
		        }
		        if($("#end").val() != ""){
		            start.max = $("#end").val();
		        }else{
		            start.min = '1900-01-01';
		        }
		    })
	    }
	};
	var end = {
	    elem: '#end',
	    format: 'YYYY-MM-DD', //日期格式
	    min: '1900-01-01 00:00:00', //最小日期
		max: '2099-12-31 23:59:59', //最大日期
		start: laydate.now(),  //开始日期
	    istime: true,
	    istoday: false,
	    choose: function(datas){
	    	clickText($J_end,$(this));
	    	$J_end.removeClass("aI_blue");
	        start.max = datas; //结束日选好后，重置开始日的最大日期
	        $("body").on("click", "#laydate_clear", function () {
	        	blurInput($J_end,$J_end.next());
				OnBlur($J_end);
		        start.min = '1900-01-01';
		        if($("#start").val() != ""){
		            end.min = $("#start").val();
		            start.max = $("#end").val();
		        }else{
		            end.min = '1900-01-01';
		        }
		        if($("#end").val() != ""){
		            start.max = $("#end").val();
		        }else{
		            start.min = '1900-01-01';
		        }
		    })
	    }
	};
	laydate(start);
	laydate(end);
	//end 时间设置
	
	//订单状态（仿select）
	var $tit = $(".com_sel").children("p");
    $tit.click(function(){
        var $ss = $tit.index(this);
        $(this).toggleClass("sel_p1");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function(){
            $tit.eq($ss).html($(this).html()).removeClass("sel_p1");
            $(this).parent().hide();
        });
    });
    $(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest(".com_sel").length == 0){ 
		$tit.removeClass("sel_p1");
		$(".com_ul").hide(); 
		} 
	});

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

   //数字账号小提示
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
	//end 数字账号小提示
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
	    if($input.val() == ""){
	        $text.show();
	    }
	}
	
	function OnFocus(obj){
	    obj.addClass("aI_blue").removeClass("aI_red");
	}
	function OnBlur(obj){
	   obj.removeClass("aI_blue").removeClass("aI_red"); 
	}


	//企业账户小提示
    $eye = $(".bank_card").find("span");
    $cont = $(".bank_card").find("i");
    $eye.click(function(){
    	if(!$(this).hasClass("bank_eyeopen")){
    		$cont.html("****");
	        $(this).removeClass("bank_eyeclose").addClass("bank_eyeopen");
	    }else{
	    	$cont.html("748784454");
	        $(this).removeClass("bank_eyeopen").addClass("bank_eyeclose");
	    }
    });
	
})