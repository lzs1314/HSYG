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
	
	
	//支付成功弹窗
	layer.open({
	    type: 1,
	    title: false,
	    closeBtn: 0,
	    skin: 'wxclass',
	    time:3000,
	    area: ['570px', '446px'],
	    content: "<p class='wxtimer' id='wxtimer'>3</p>"
	})	
/***********************end 支付页面js***********************/
})
//倒计时
var count = 3;
window.setInterval(function(){
    var s = $(".wxtimer");
    if(s.html == 0){
        return false;
    }
    count --;
    s.html(count);
}, 1000);