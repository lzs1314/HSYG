$(document).ready(function(){
	var nReg = /^[0-9]{6}$/,  //可输入6位数字的正则
		phoneReg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,   //手机号正则			
		enReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4}$/;  //可输入4位字母和数字的正则
	var $J_pcode = $(".J_pcode"),
		$J_phone = $(".J_phone"),
		$J_ecode = $(".J_ecode"),
		$J_phcode2 = $(".J_phcode2"),
		J_pcode,
		J_phone,
		J_ecode,
		J_phcode2;
    var $emtBtn = $(".emtBtn"),
		$phtBtn = $(".phtBtn"),
		$phone_tr = $(".chphone").find(".phone_tr"),
		$email_tr = $(".chphone").find(".email_tr"),
		$J_pcodeBtn = $(".J_pcodeBtn"),
		$J_ecodeBtn = $(".J_ecodeBtn"),
		$J_codeBtn2 = $(".J_codeBtn2");
		
	$(".changeBtn").click(function(){
		J_pcode = checkRec($J_pcode,"请输入验证码","请输入正确的验证码",nReg);
		J_ecode = checkRec($J_ecode,"请输入验证码","请输入正确的验证码",enReg);
		J_phone = checkRec($J_phone,"请输入手机号","请输入正确的手机号",phoneReg);
		J_phcode2 = checkRec($J_phcode2,"请输入验证码","请输入正确的验证码",nReg);
		if(J_pcode||J_ecode&&J_phone&&J_phcode2){
            layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn1',
	            area: ['380px', '150px'],
	            btn: ['确 定'],
	            content: "<div class='layer_suc'><img src='images/common/lay1.png'>修改成功!</div>"
	        })	
			return true;
		}else{
			return false;
		}		
	})		
	
	/********焦点获得时**********/
	$J_pcode.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_pcode.next().click(function(){
		clickText($J_pcode,$(this));
	});
	$J_ecode.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_ecode.next().click(function(){
		clickText($J_ecode,$(this));
	});	
	$J_phone.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_phone.next().click(function(){
		clickText($J_phone,$(this));
	});	
	$J_phcode2.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_phcode2.next().click(function(){
		clickText($J_phcode2,$(this));
	});	
	
	/********焦点失去时**********/
	$J_pcode.blur(function(){
		blurInput($(this),$(this).next());
		J_pcode = checkRec($J_pcode,"请输入验证码","请输入正确的验证码",nReg);
	});	
	$J_ecode.blur(function(){
		blurInput($(this),$(this).next());
		J_ecode = checkRec($J_ecode,"请输入验证码","请输入正确的验证码",enReg);
	});		
	$J_phone.blur(function(){
		blurInput($(this),$(this).next());
		J_phone = checkRec($J_phone,"请输入手机号","请输入正确的手机号",phoneReg);
		if(J_phone){//判断手机是否已输入正确，控制获取按钮的开关
			$J_codeBtn2.removeClass("chcodeBtn_jin").attr("disabled",false);
			$J_codeBtn2.click(function(){
				codeBtn($J_codeBtn2,"验证码已发出，请注意查收手机，如果没有收到，你可以在<span>120</span>秒后要求系统重新发送");	
			})
		}
	});	
	$J_phcode2.blur(function(){
		blurInput($(this),$(this).next());
		J_phcode2 = checkRec($J_phcode2,"请输入验证码","请输入正确的验证码",nReg);
	});		

	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkRec(obj,con1,con2,preg){
        var $val = obj.val();
        var $wrong = obj.parent().parent().parent().next().find(".chanp");
        var $right = obj.parent().parent().next().find(".chspan");
        $val = Trim($val,"g");
        if ($val == "") {
        	WrongColor($wrong,$right,obj);
            $wrong.show().html(con1);
            return false;
        } else{
        	if(!preg.test($val)){
	            WrongColor($wrong,$right,obj);
	            $wrong.show().html(con2);
	            return false;
	        }else{
	        	RightColor($wrong,$right,obj);
	            $wrong.html("&nbsp;");
	            return true;
	        }    
        }
    }

	//综合样式判定
	function RightColor(obj,objs,objn){
		obj.removeClass("em_wrong");
		objs.addClass("em_right");
		objn.removeClass("em_blue").removeClass("em_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("em_wrong");
		objs.removeClass("em_right");
		objn.addClass("em_red").removeClass("em_blue");
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
	    obj.addClass("em_blue").removeClass("em_red");
	}
	function OnBlur(obj){
	   obj.removeClass("em_blue").removeClass("em_red"); 
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
	
	
	/****************发送验证码js******************/
	
	//邮箱接收验证码按钮
	$emtBtn.click(function(){
		$email_tr.removeClass("disn");
		$phone_tr.addClass("disn");
	})
	//手机接收验证码按钮
	$phtBtn.click(function(){
		$phone_tr.removeClass("disn");
		$email_tr.addClass("disn");	
	})
	//点击发送验证码
	$J_pcodeBtn.click(function(){
		codeBtn($J_pcodeBtn,"验证码已发出，请注意查收手机，如果没有收到，你可以在<span>120</span>秒后要求系统重新发送");
	})
	$J_ecodeBtn.click(function(){
		codeBtn($J_ecodeBtn,"验证码已发出，请注意查收邮箱，如果没有收到，你可以在<span>120</span>秒后要求系统重新发送");
	})
	
	//点击发送验证码按钮，显示对应的提示
	function codeBtn(obj,cont){
		var codeTip = obj.parent().parent().parent().next().find(".chtip");
        if(!obj.hasClass("chcodeBtn_jin")){
            obj.addClass("chcodeBtn_jin").attr("disabled","disabled");    
        }
		codeTip.show().html(cont);
        var $initval = 120,
            $second = obj.parent().parent().parent().next().find("span");
        var timer = setInterval(function(){
            if($initval >= 2){
                $initval--;
                $second.html($initval);
            }else{
                obj.removeClass("chcodeBtn_jin").attr("disabled",false);
                codeTip.hide();
                $second.html("120");
                clearInterval(timer);
            }
        },1000)
	}
	//end 点击发送验证码按钮，显示对应的提示	
	
	/****************end  发送验证码js******************/

})