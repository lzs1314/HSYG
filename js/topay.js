$(document).ready(function(){
/***********************支付页面js***********************/
	//点击订单详情
	var $order_detail = $(".order_detail");
	var $topay_tbottom = $(".topay_tbottom");
	$order_detail.click(function(){
		if($topay_tbottom.is(":hidden")){
			$topay_tbottom.slideDown();
		}else{
			$topay_tbottom.slideUp();
		}
	});
	//end 点击订单详情
	
	//更多银行
	var $bank_more = $(".bank_more");
	var $bli = $(".bank_list").find("li");
	var $pre_bank = $(".bank_list").find("li:gt(11)");
	$pre_bank.hide();
	$bank_more.click(function(){
		if($pre_bank.is(":hidden")){
			$(this).html("收起银行");
			$pre_bank.show();
		}else{
			$(this).html("更多银行");
			$pre_bank.hide();
		}
	});
	//end 更多银行
	
	//选择银行激活去支付按钮
	$bli.click(function(){
		if(!$(this).hasClass("bank_light_border")){
			$(this).addClass("bank_light_border").siblings("li").removeClass("bank_light_border");
		}else{
			$(this).removeClass("bank_light_border");
		}
		
		if($bli.hasClass("bank_light_border")){
			$(".go_pay").removeClass("bgray").addClass("blight");
			$(".go_pay").attr("disabled",false);
		}else{
			$(".go_pay").removeClass("blight").addClass("bgray");
			$(".go_pay").attr("disabled","disabled");
		}
	});
	//end 选择银行激活去支付按钮
	
	//选择支付宝或微信激活去支付按钮
	var $zw_a = $(".topay_zw").find("a");
	$zw_a.click(function(){
		if(!$(this).hasClass("bank_light_border")){
			$(this).addClass("bank_light_border").siblings("a").removeClass("bank_light_border");
		}else{
			$(this).removeClass("bank_light_border");
		}
		
		if($zw_a.hasClass("bank_light_border")){
			$(".go_pay0").removeClass("bgray0").addClass("blight");
			$(".go_pay0").attr("disabled",false);
		}else{
			$(".go_pay0").removeClass("blight").addClass("bgray0");
			$(".go_pay0").attr("disabled","disabled");
		}
	});
	//end 选择支付宝或微信激活去支付按钮
	
	//选择支付方式切换
    var $topay_tit_li = $('.topay_tit>li');	
    var $topay_box_li = $('.topay_box2 >ul > li');
	
    $topay_tit_li.click(function(){
    	$(this).addClass("topay_tit_on").siblings("li").removeClass("topay_tit_on");
        var $tt = $(this);
        var $cont = $tt.index();
        $topay_box_li.css('display','none');				
        $topay_box_li.eq($cont).css('display','block');
    })
	//end 选择支付方式切换
	
    //支付结果弹窗
    $(".go_pay").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            area: ['480px', '230px'],
            shift: 2,
            content: $(".comments_cont")
        })
    }); 
    $(".ed_btn").click(function(){
    	layer.closeAll();
    })
    $(".ing_rebtn").click(function(){
    	layer.closeAll();
    })
    //end 支付结果弹窗
	
/***********************end 支付页面js***********************/
})