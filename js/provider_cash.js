$(document).ready(function(){
	
	var	$save_btn = $(".save_btn"),
		$J_cash = $(".J_cash"),
		$J_pay = $(".J_pay"),
		nReg = /^[0-9]{1,10}$/,  //1-10位数字
		enReg = /^[0-9A-Za-z]{6,20}$/,  //可输入6-20位字母或数字的正则
		cash,
		pay;

	$save_btn.click(function(){
		cash = checkReg($J_cash,"请输入提现金额","请输入正确的提现金额",nReg);
		pay = checkReg($J_pay,"请输入支付密码","请输入正确的支付密码",enReg);
		if(cash&&pay){
			return true;
		}else{
			return false;
		}
	})
	
	/********焦点获得时**********/
	$J_cash.focus(function(){
		OnFocus($(this));
	});
	$J_pay.focus(function(){
		OnFocus($(this));
	});
	
	/********焦点失去时**********/
	$J_cash.blur(function(){
		cash = checkReg($J_cash,"请输入提现金额","请输入正确的提现金额",nReg);
	})
	$J_pay.blur(function(){
		pay = checkReg($J_pay,"请输入支付密码","请输入正确的支付密码",enReg);
	})
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wr = obj.next();
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
	//去除空格  
	function Trim(str,is_global) {
	    var result;
	    result = str.replace(/(^\s+)|(\s+$)/g,"");
	    if(is_global.toLowerCase()=="g"){
	        result = result.replace(/\s/g,"");
	     }
	    return result;
	}	
	
	
	//银行账户变更成功弹窗
	$save_btn.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn1',
            area: ['380px', '150px'],
            btn: ['确 定'],
            content: "<div class='cash_suc'>您的提现操作已提交，<br>请等待您的资金转入银行卡内。</div>"
        })
    })

})