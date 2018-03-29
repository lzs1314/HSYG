$(document).ready(function(){
	var	phoneReg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,   //手机号正则	
		enReg1 = /^[0-9A-Za-z]{4}$/,  //可输入4位字母或数字的正则
		nReg = /^[0-9]{6}$/,  //可输入6位数字的正则
		enReg2 = /^[0-9A-Za-z]{6,20}$/;  //可输入6-20位字母或数字的正则
		
	var $phone = $(".J_phone"),
		$imgcode = $(".J_imgcode"),
		$smscode = $(".J_smscode"),
		$bptBtn1 = $(".J_bptBtn1"),
		$bptBtn2 = $(".J_bptBtn2"),	
		$bptcodeBtn = $(".bpt_codeBtn"),
		phone,
		imgcode,
		smscode,
		pwd,
		rpwd,
		bptcodeTip;
	var	$backpwd_tab1 = $(".backpwd_tab1"),
		$backpwd_tab2 = $(".backpwd_tab2"),
		$backpwd_div3 = $(".backpwd_div3"),
		$bdTit1 = $(".backpwd_mainTit ul").children("li").eq(0),
		$bdTit2 = $(".backpwd_mainTit ul").children("li").eq(1),
		$bdTit3 = $(".backpwd_mainTit ul").children("li").eq(2);
		

	$bptBtn1.click(function(){	
		phone = checkReg($phone,"请输入手机号","请输入正确的手机号",phoneReg);
		imgcode = checkReg($imgcode,"请输入验证码","验证码输入有误，请重新输入",enReg1);
		smscode = checkReg($smscode,"请输入验证码","验证码输入有误，请重新输入",nReg);
		if(phone&&imgcode&&smscode){
			$backpwd_tab1.hide();
			$backpwd_tab2.show();
			$bdTit2.addClass("bdTit_on").siblings("li").removeClass("bdTit_on");
			return true;
		}else{
			return false;
		}
	});
	
	$(".backpwd_tab2").on("click",".J_bptBtn2",function(){
		pwd = checkReg($(this).parent().parent().parent().find(".J_pwd"),"请输入6-20位数字或字母","请输入6-20位数字或字母",enReg2);
		rpwd = checkRegpwd($(this).parent().parent().parent().find(".J_pwd"),$(this).parent().parent().parent().find(".J_rpwd"));	
		if(pwd&&rpwd){
			$backpwd_tab1.hide();
			$backpwd_tab2.hide();
			$backpwd_div3.show();
			$bdTit3.addClass("bdTit_on").siblings("li").removeClass("bdTit_on");
			return true;
		}else{
			return false;
		}		
	})
	
	/********焦点获得时**********/
	$phone.focus(function(){
		focusInput($(this),$(this).next());
	});
	$phone.next().click(function(){
		clickText($phone,$(this));
	});
	$imgcode.focus(function(){
		focusInput($(this),$(this).next());
	});
	$imgcode.next().click(function(){
		clickText($imgcode,$(this));
	});
	$smscode.focus(function(){
		focusInput($(this),$(this).next());
	});
	$smscode.next().click(function(){
		clickText($smscode,$(this));
	});
	$(".J_bpt_div").on("focus",".J_pwd,.J_rpwd",function(){
		focusInput($(this),$(this).next());
	})
	$(".J_bpt_div").on("click","em",function(){
		clickText($(this).prev(),$(this));
	})

	/********焦点失去时**********/
	$phone.blur(function(){
		blurInput($(this),$(this).next());
		phone = checkReg($phone,"请输入手机号","请输入正确的手机号",phoneReg);
		if(phone){
			$bptcodeBtn.removeClass("bpt_codeBtn_jin");
			$bptcodeBtn.children("input").attr("disabled",false);
			$bptcodeBtn.click(function(){
				codeBtn($bptcodeBtn,"验证码已发出，请在手机查看，如果没收到验证码，在<span>120</span>秒后点击重新发送");	
			})
		}else{
			$bptcodeBtn.addClass("bpt_codeBtn_jin");
			$bptcodeBtn.children("input").attr("disabled","disabled");
		}
	});
	$imgcode.blur(function(){
		blurInput($(this),$(this).next());
		imgcode = checkReg($imgcode,"请输入验证码","验证码输入有误，请重新输入",enReg1);
	})
	$smscode.blur(function(){
		blurInput($(this),$(this).next());
		smscode = checkReg($smscode,"请输入验证码","验证码输入有误，请重新输入",nReg);
	})
	$(".J_bpt_div").on("blur",".J_pwd",function(){
		blurInput($(this),$(this).next());
		pwd = checkReg($(this),"请输入6-20位数字或字母","请输入6-20位数字或字母",enReg2);
	})
	$(".J_bpt_div").on("blur",".J_rpwd",function(){
		blurInput($(this),$(this).next());
		rpwd = checkRegpwd($(this).parent().parent().parent().parent().find(".J_pwd"),$(this));	
	})
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wrong = obj.parent().parent().parent().next().find(".bpt_p");
        var $right = obj.parent().next();
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

	
    //判断密码和确认密码
    function checkRegpwd(obj,objr){
        var $val = obj.val();
        var $valr = objr.val();
        var $wrong = objr.parent().parent().parent().next().find(".bpt_p");
        var $right = objr.parent().next();
        $val = Trim($val,"g");
        $valr = Trim($valr,"g");
        if ($valr == "") {
        	WrongColor($wrong,$right,objr);
            $wrong.show().html("请再次输入新密码");
            return false;
        } else{
        	if ($valr != $val) {
	        	WrongColor($wrong,$right,objr);
	            $wrong.show().html("两次输入密码不一致，请重新输入");
	            return false;
	        } else{
	        	RightColor($wrong,$right,objr);
	            $wrong.html("&nbsp;");
	            return true;
           }
        }    
    }	
    
    //点击发送验证码按钮
	function codeBtn(obj,cont){
		var codeTip = obj.parent().parent().next().find(".bpt_codeTip");
        if(!obj.hasClass("bpt_codeBtn_jin")){
            obj.addClass("bpt_codeBtn_jin").attr("disabled","disabled");    
			codeTip.show().html(cont);
	        var $initval = 120,
	            $second = obj.parent().parent().next().find("span");
	        var timer = setInterval(function(){
	            if($initval >= 2){
	                $initval--;
	                $second.html($initval);
	            }else{
	                obj.removeClass("bpt_codeBtn_jin").attr("disabled",false);
	                codeTip.hide();
	                $second.html("120");
	                clearInterval(timer);
	            }
	        },1000)
        }
	}
	//end 点击发送验证码按钮    

	//综合样式判定
	function RightColor(obj,objs,objn){
		obj.removeClass("bpt_wrong");
		objs.addClass("bpt_right");
		objn.removeClass("bpt_blue").removeClass("bpt_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("bpt_wrong");
		objs.removeClass("bpt_right");
		objn.addClass("bpt_red").removeClass("bpt_blue");
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
	    obj.addClass("bpt_blue").removeClass("bpt_red");
	}
	function OnBlur(obj){
	   obj.removeClass("bpt_blue").removeClass("bpt_red"); 
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

	//密码明文切换
	var $pwdcut1 = $(".pwdcut1"),
		$pwdcut2 = $(".pwdcut2");
	$pwdcut1.click(function(){
		if (!$(this).hasClass("pwdcut_on")) {
			$(this).addClass("pwdcut_on");
		} else{
			$(this).removeClass("pwdcut_on");
		}
		var $val = $(this).parent().find(".bptInput").val();
		if ($(".J_pwd").attr("type") == "password") {
			$(this).parent().find(".bptInput").remove();
			$(this).parent().prepend('<input type="text" maxlength="20" class="bptInput J_pwd" value="'+ $val +'" />');
		} else{
			$(this).parent().find(".bptInput").remove();
			$(this).parent().prepend('<input type="password" maxlength="20" class="bptInput J_pwd" value="'+ $val +'" />');
		}
	})
	$pwdcut2.click(function(){
		if (!$(this).hasClass("pwdcut_on")) {
			$(this).addClass("pwdcut_on");
		} else{
			$(this).removeClass("pwdcut_on");
		}
		var $val = $(this).parent().find(".bptInput").val();
		if ($(".J_rpwd").attr("type") == "password") {
			$(this).parent().find(".bptInput").remove();
			$(this).parent().prepend('<input type="text" maxlength="20" class="bptInput J_rpwd" value="'+ $val +'" />');
		} else{
			$(this).parent().find(".bptInput").remove();
			$(this).parent().prepend('<input type="password" maxlength="20" class="bptInput J_rpwd" value="'+ $val +'" />');
		}
	})
	//end 密码明文切换

})