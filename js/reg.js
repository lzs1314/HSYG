$(document).ready(function(){
	var	phoneReg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,   //手机号正则	
		enReg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4}$/,  //可输入4位字母和数字的正则
		nReg = /^[0-9]{6}$/,  //可输入6位数字的正则
		enReg2 = /^[0-9A-Za-z]{6,20}$/;  //可输入6-20位字母或数字的正则
		
	var $p3 = $("#p3"),
		$select_lg = $(".select_lg"),
		$phone = $(".J_phone"),
		$imgcode = $(".J_imgcode"),
		$smscode = $(".J_smscode"),
		$pwd = $(".regTable .J_pwd"),
		$regcodeBtn = $(".regcodeBtn"),
		p3,
		select_lg,		
		phone,
		imgcode,
		smscode,
		pwd,
		regcodeTip;

	$("#regTable").submit(function(){
		p3 = checkOther($p3,"请选择所属区域");
		select_lg = checkOther($select_lg,"请选择所在（或者周边）社区");		
		phone = checkReg($phone,"请输入手机号","请输入正确的手机号",phoneReg);
		imgcode = checkReg($imgcode,"请输入验证码","验证码输入有误，请重新输入",enReg1);
		smscode = checkReg($smscode,"请输入验证码","验证码输入有误，请重新输入",nReg);
		pwd = checkReg($(".regTable .J_pwd"),"请输入登录密码","请输入6-20位数字或字母",enReg2);
		if(p3&&select_lg&&phone&&imgcode&&smscode&&pwd){
			$("#p3").val("市、县级市、县");
			$(".regsel .select_lg").val("请选择");
			$(".J_phone,.J_imgcode,.J_smscode,.regTable .J_pwd").val("").next().show();
			$(".regTable .J_pwd").remove();
			$(".J_regem").before('<input type="text" class="J_pwd" maxlength="20" />');
			return true;
		}else{
			return false;
		}
	});
	/********焦点获得时**********/
	$p3.focus(function(){
		OnFocus($(this));
	});
	$select_lg.focus(function(){
		OnFocus($(this));
	});	
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
	$(".regTable").on("focus",".J_pwd",function(){
		focusInput($(this),$(this).next());
		if ($(this).attr("type") == "text") {
			$(this).remove();
			$(".J_regem").before('<input type="password" class="J_pwd reg_blue" maxlength="20" />');
			$(".regTable .J_pwd").focus();
		}
		$(".regTable").on("blur",".J_pwd",function(){
	        blurInput($(this),$(this).next());
			pwd = checkReg($(this),"请输入登录密码","请输入6-20位数字或字母",enReg2);
	    }) 
    }) 
	$(".regTable").on("click",".J_regem",function(){
       $(".regTable .J_pwd").focus();
    }) 
	/********焦点失去时**********/
	$p3.change(function(){
		OnBlur($(this));
		p3 = checkOther($(this),"请选择所属区域");
	});	
	$select_lg.change(function(){
		OnBlur($(this));
		p3 = checkOther($(this),"请选择所属区域");
	});	
	$phone.blur(function(){
		blurInput($(this),$(this).next());
		phone = checkReg($phone,"请输入手机号","请输入正确的手机号",phoneReg);
		if(phone){
			$regcodeBtn.removeClass("regcodeBtn_jin").attr("disabled",false);
			$regcodeBtn.click(function(){
				codeBtn($regcodeBtn);	
			})
		} else{
			$regcodeBtn.addClass("regcodeBtn_jin");
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

	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wrong = obj.parent().parent().parent().next().find(".regp");
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
    
    //判断其他不用正则的1
    function checkOther(obj,con){
        var $val = obj.val();
        var $wrong = obj.parent().parent().parent().next().find(".regp");
        var $right = obj.parent().next();
        if($val == "" || $val == "市、县级市、县" || $val == "请选择"){
            WrongColor($wrong,$right,obj);
            $wrong.show().html(con);
            return false;
        }else{
            RightColor($wrong,$right,obj);
            $wrong.html("&nbsp;");
            return true;
        } 
    }

    //点击发送验证码按钮
	function codeBtn(obj){
		var codeTip = obj.parent().parent().next().find(".regcodeTip");
        if(!obj.hasClass("regcodeBtn_jin")){
            obj.addClass("regcodeBtn_jin").attr("disabled","disabled");  
            $phone.attr("disabled","disabled");
			codeTip.show();
	        var $initval = 120,
	            $second = obj.parent().parent().next().find("span");
	        var timer = setInterval(function(){
	            if($initval >= 2){
	                $initval--;
	                $second.html($initval);
	            }else{
	                obj.removeClass("regcodeBtn_jin").attr("disabled",false);
	                codeTip.hide();
	                $phone.attr("disabled",false);
	                $second.html("120");
	                clearInterval(timer);
	            }
	        },1000)
        }
	}
	//end 点击发送验证码按钮    
    
	//综合样式判定
	function RightColor(obj,objs,objn){
		obj.removeClass("reg_wrong");
		objs.addClass("reg_right");
		objn.removeClass("reg_blue").removeClass("reg_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("reg_wrong");
		objs.removeClass("reg_right");
		objn.addClass("reg_red").removeClass("reg_blue");
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
	    obj.addClass("reg_blue").removeClass("reg_red");
	}
	function OnBlur(obj){
	   obj.removeClass("reg_blue").removeClass("reg_red"); 
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
	
	
	//同意协议开启注册按钮
	var $agreedBtn = $(".agreedBtn"),
		$regBtn = $(".regBtn");
	$agreedBtn.click(function(){
		$(this).toggleClass("agreedBtn_on");
		$regBtn.toggleClass("regBtn_jin");
		regBtn_jin();
	})
	$regBtn.click(function(){
		regBtn_jin();
	})
	function regBtn_jin(){
		if ($regBtn.hasClass("regBtn_jin")) {
			$regBtn.attr("disabled","disabled");
		} else{
			$regBtn.removeAttr("disabled");
		}
	}
	
	
	//注册协议弹窗
	var $agreed_z = $(".agreed_z");
	$agreed_z.click(function(){
		layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            area: ['800px', '480px'],
            content: $('.pro_z')
        })	
	})
	//保密协议弹窗
	var $agreed_b = $(".agreed_b");
	$agreed_b.click(function(){
		layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            area: ['800px', '480px'],
            content: $('.pro_b')
        })	
	})
	//法律声明及使用条款弹窗
	var $agreed_f = $(".agreed_f");
	$agreed_f.click(function(){
		layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            area: ['800px', '480px'],
            content: $('.pro_f')
        })	
	})
	

})