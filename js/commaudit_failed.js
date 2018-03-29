$(document).ready(function(){

	var cenReg1 = /^[0-9A-Za-z\u4e00-\u9fa5]{1,10}$/,	//可输入1-10位汉字或字母或数字
		enReg1 = /^[0-9A-Za-z]{6,20}$/,	//可输入6-20位字母或数字
		nReg1 = /^[0-9]{1,15}$/,	 //可输入1-15位数字
		emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,  //邮箱验证规则
		enReg2 = /^[0-9A-Za-z]{1,18}$/,	//可输入1-18位字母或数字(身份证)
		nReg2 = /^[0-9]{16,20}$/,	 //可输入16-20位数字
		chinReg = /^[\u0391-\uFFE5]{1,20}$/;  //可输入1-20位汉字
	var $recom_name = $(".recom_name"),
		$recom_paypwd = $(".recom_paypwd"),
		$recom_qq = $(".recom_qq"),
		$recom_email = $(".recom_email"),
		$recom_id = $(".recom_id"),
		$recom_card = $(".recom_card"),
		$recom_accname = $(".recom_accname"),
		$p2 = $("#p2"),
		$recom_bankinfo = $(".recom_bankinfo"),
		$subBtn = $(".commaudit_tab").find(".subBtn"),
		recom_name,recom_paypwd,recom_email,recom_id,recom_card,recom_accname,p2,recom_bankinfo,recomm_btn;
	var $aIem = $(".commaudit_tab").find(".aIem"),
		$aIinput = $(".commaudit_tab").find(".aIinput");
	$aIinput.each(function(){
		if (!$(this).val() == "") {
			$(this).next(".aIem").hide();
		}	
	})
	$subBtn.click(function(){
		recom_name = checkReg($recom_name,"请输入社区主姓名","请输入正确的社区主姓名",cenReg1);
		recom_paypwd = checkReg($recom_paypwd,"请输入支付密码","请输入正确的支付密码",enReg1);
		recom_email = checkReg($recom_email,"请输入社区主邮箱","请输入正确的社区主邮箱",emailReg);
		recom_id = checkReg($recom_id,"请输入身份证号","请输入正确的身份证号",enReg2);
		recom_card = checkReg($recom_card,"请输入银行卡号","请输入正确的银行卡号",nReg2);
		recom_accname = checkReg($recom_accname,"请输入开户名","请输入正确的开户名",chinReg);
		p2 = checkBank($p2);
		recom_bankinfo = checkBankinfo($recom_bankinfo,"请输入开户分（支）行信息");
		if(recom_name&&recom_paypwd&&recom_email&&recom_id&&recom_card&&recom_accname&&p2&&recom_bankinfo){
			layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn1',
	            area: ['380px', '150px'],
	            btn: ['确 定'],
	            content: "<div class='layer_suc'><img src='images/common/lay1.png'>提交成功!</div>"
	        })
			return true;
		}else{
			return false;
		}
	})
	/*******获得焦点时*******/
	$(".recom_name,.recom_paypwd,.recom_qq,.recom_email,.recom_id,.recom_card,.recom_accname,.recom_bankinfo").focus(function(){
		focusInput($(this),$(this).next());
	})
	$p2.focus(function(){
		$(this).addClass("apy_blue").removeClass("apy_red");
	})
	$aIem.click(function(){
		clickText($(this).prev(),$(this));
	})
	/*******失去焦点时*******/
	$aIinput.blur(function(){
		blurInput($(this),$(this).next());
	})
	$recom_name.blur(function(){
		recom_name = checkReg($recom_name,"请输入社区主姓名","请输入正确的社区主姓名",cenReg1);
	})
	$recom_paypwd.blur(function(){
		recom_paypwd = checkReg($recom_paypwd,"请输入支付密码","请输入正确的支付密码",enReg1);
	})
	$recom_qq.blur(function(){
	    var $val = $recom_qq.val();
	    var $wr = $recom_qq.parent().next();
	    $val = Trim($val,"g");
	    if ($val == "") {
    		$wr.removeClass("aI_right").removeClass("aI_wrong").html("&nbsp;");
			$recom_qq.removeClass("aI_blue").removeClass("aI_red");
	        return true;
	    } else{
	        if(!nReg1.test($val)){
	            WrongColor($wr,$recom_qq);
	            $wr.html("请输入正确的社区主QQ");
	            return false;
	        }else{
	        	RightColor($wr,$recom_qq);
	            $wr.html("&nbsp;");
	            return true;
	        }    
	    }
	})
	$recom_email.blur(function(){
		recom_email = checkReg($recom_email,"请输入社区主邮箱","请输入正确的社区主邮箱",emailReg);
	})
	$recom_id.blur(function(){
		recom_id = checkReg($recom_id,"请输入身份证号","请输入正确的身份证号",enReg2);
	})
	$recom_card.blur(function(){
		recom_card = checkReg($recom_card,"请输入银行卡号","请输入正确的银行卡号",nReg2);
	})
	$recom_accname.blur(function(){
		recom_accname = checkReg($recom_accname,"请输入开户名","请输入正确的开户名",chinReg);
	})
	$p2.blur(function(){
		p2 = checkBank($p2);
	})
	$p2.change(function(){
		p2 = checkBank($p2);
	})
	$recom_bankinfo.blur(function(){
		recom_bankinfo = checkBankinfo($recom_bankinfo,"请输入开户分（支）行信息");
	})
	//开户行封装表单判断
	function checkBank(obj){
		if (obj.val() == '地级市') {
			obj.addClass("aI_red").removeClass("aI_blue");
			return false;
		} else{
			obj.removeClass("aI_blue").removeClass("aI_red");
			return true;
		}
	}
	function checkBankinfo(obj,cont){
		var $wr = obj.parent().next();
		if (obj.val() == '') {
			obj.addClass("aI_red").removeClass("aI_blue");
			$wr.addClass("aI_wrong").removeClass("aI_right").html(cont);
			return false;
		} else{
			obj.removeClass("aI_blue").removeClass("aI_red");
			$wr.addClass("aI_right").removeClass("aI_wrong").html("");
			return true;
		}
	}
	//end 开户行封装表单判断
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wr = obj.parent().next();
        $val = Trim($val,"g");
        if ($val == "") {
        	WrongColor($wr,obj);
            $wr.show().html(con1);
            return false;
        } else{
        	if(!preg.test($val)){
	            WrongColor($wr,obj);
	            $wr.show().html(con2);
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
		obj.removeClass("aI_wrong").addClass("aI_right");
		objn.removeClass("aI_blue").removeClass("aI_red");
	}
	function WrongColor(obj,objn){
		obj.addClass("aI_wrong").removeClass("aI_right");
		objn.addClass("aI_red").removeClass("aI_blue");
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
	function OnFocus(obj){
	    obj.addClass("aI_blue").removeClass("aI_red");
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



