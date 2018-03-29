$(document).ready(function(){
	//更多银行
	var $bank_more = $(".bank_more"),
		$bli = $(".bank_list").find("li"),
		$pre_bank = $(".bank_list").find("li:gt(11)"),
		$go_pay = $(".go_pay"),
		$input_pay = $(".input_pay"),
		nReg = /^[0-9]+(.[0-9]{1,2})?$/;  //金钱格式
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
	
	///********焦点获得时**********/
	$input_pay.focus(function(){
		focusInput($(this),$(this).next());
	});
	$input_pay.next().click(function(){
		clickText($input_pay,$(this));
	});
	
	/********焦点失去时**********/
	$input_pay.blur(function(){
        blurInput($(this),$(this).next());
		checkJ_cash();
	})

	$bli.click(function(){
		$(this).addClass("cause_on").siblings("li").removeClass("cause_on");
	})
	
	function checkJ_cash(){
		return checkReg($input_pay,"请输入充值金额","请输入正确的充值金额",nReg);
	}
	function checkBank(){
		if(!$(".pay_bank ul li").hasClass("cause_on")){
			$(".please_selspan").show();
			return false;
		}else{
			$(".please_selspan").hide();
			return true;
		}
	}
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wr = obj.next().next().next();
        $val = Trim($val,"g");
        if ($val == "") {
        	WrongColor($wr,obj);
            $wr.html(con1);
            return false;
        } else{
        	if(!preg.test($val)){
	            WrongColor($wr,obj);
	            $wr.html(con2);
	            return false;
	        }else{
	        	RightColor($wr,obj);
	            $wr.html("&nbsp;");
	            return true;
	        }    
        }
    }	

    $go_pay.click(function(){
		if(checkJ_cash()&&checkBank()){
			layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1, 
	            skin: 'layerBtn2',
	            area: ['472px', '280px'],
	            shift: 2,
	            content: $('.returnTopay')
        	})
			return true;
		}else{
			return false;
		}
	})
	$(".Rt_btn1").click(function(){
		layer.closeAll();
		layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1, 
	            skin: 'layerBtn2',
	            area: ['380px', '150px'],
		        btn: ['确 定'],
	            content: "<div class='cash_err'>您的充值操作未成功，请重新<br>进行充值!</div>"
        	})
	})
	$(".Rt_btn2").click(function(){
		layer.closeAll();
		layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1, 
	            skin: 'layerBtn2',
	            area: ['380px', '150px'],
		        btn: ['确 定'],
	            content: "<div class='cash_e'>如充值中遇到问题，请联系客服人员，<br>电话053181677073</div>"
        	})
	})  
    //综合样式判定
	function RightColor(obj,objn){
		obj.addClass("prov_right").removeClass("prov_wrong");
		objn.addClass("prov_gray").removeClass("prov_blue").removeClass("prov_red");
	}
	function WrongColor(obj,objn){
		obj.addClass("prov_wrong").removeClass("prov_right");
		objn.addClass("prov_red").removeClass("prov_blue").removeClass("prov_gray");
	}
	function OnFocus(obj){
	    obj.addClass("prov_blue").removeClass("prov_red").removeClass("prov_gray");
	}
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
	//去除空格  
	function Trim(str,is_global) {
	    var result;
	    result = str.replace(/(^\s+)|(\s+$)/g,"");
	    if(is_global.toLowerCase()=="g"){
	        result = result.replace(/\s/g,"");
	     }
	    return result;
	}	
	
	
})