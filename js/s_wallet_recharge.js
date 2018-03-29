$(document).ready(function(){
    var $li = $(".bank_ul").children("li"),
    regt = /(^[1-9]([0-9]{0,8})?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]([0-9])?$)|(^[0-9]\.[0-9]([1-9])?$)|(^[0-9]\.[1-9]?$)/
    $money_mtxt = $(".money_mtxt input"),
    $nextp = $money_mtxt.parent().next();
    
    var $bli = $(".bank_list").find("li");
    $bli.click(function () {
        if (!$(this).hasClass("isChecked")) {
            $(this).addClass("isChecked").siblings("li").removeClass("isChecked");
            $(".recharge_stbn").removeClass("bgray").addClass("blight");
            $(".recharge_stbn").attr("disabled", false);
            $(".paytip").show();
        } else {
            $(this).removeClass("isChecked");
            $(".recharge_stbn").removeClass("blight").addClass("bgray");
            $(".recharge_stbn").attr("disabled", "disabled");
        }
    });
    $money_mtxt.focus(function(){
        $(this).addClass("b_blue").removeClass("b_red");
    });
    $money_mtxt.blur(function(){
        checkNum();
    });
    function checkNum(){
        var $val = $money_mtxt.val();
        if(regt.test($val)){
            $nextp.addClass("acc_right").removeClass("acc_wrong").html("&nbsp;");
            $money_mtxt.removeClass("b_blue").removeClass("b_red");
            return true;  
        }else{
            $nextp.addClass("acc_wrong").removeClass("acc_right").html("充值金额最多为9位整数2位小数！");
            $money_mtxt.addClass("b_red").removeClass("b_blue");
            return false;
        }
    }
    //更多银行
    var $bank_more = $(".bank_more");
    var $bli = $(".bank_list").find("li");
    var $pre_bank = $(".bank_list").find("li:gt(8)");
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
    $("#myform").submit(function(){
        if(!checkNum()){
            return false;
        }
        if(!$li.hasClass("isChecked")){
            layOpen("请选择充值银行！");
        }else{
            layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                skin: 'layerBtn1',    //自定义弹窗样式
                area: ['360px', '206px'], //宽高
                content: $('.recharge_underway_layer')//自定义内容样式
            });  
        }
        
        return false;
    })
    function layOpen(str){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layerBtn1',    //自定义弹窗样式
            btn:['确定'],
            content: '<div class="wrong_note">'+str+'</div>'//自定义内容样式
        }); 
    }
	//充值未成功提示弹窗
	$(".underway_btns").click(function(){
		layer.closeAll();
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            area: ['380px', '180px'],
            skin: 'layerBtn1',    //自定义弹窗样式
            btn:['关闭'],
            content: "<div class='paylayer'>如充值中遇到问题，请联系客服人员，<br>电话：0531-81677073。</div>"
        })
    })
	//end 充值未成功提示弹窗    
    
})