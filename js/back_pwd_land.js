$(document).ready(function(){
	var enReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4}$/; //可输入4位字母和数字的正则
	var $pwdcode = $(".J_pwdcode"),
	$pcodeBtn = $(".pcodeBtn"),
		pwdcode;

	$("#pwdailchange").submit(function(){
		pwdcode = checkRec($pwdcode,"请输入验证码","验证码输入有误，请重新输入",enReg);
		if(pwdcode){
			return true;
		}else{
			return false;
		}
	});
	
	$pcodeBtn.click(function(){
		$(this).addClass("pwdcodeBtn_jin");
		pwdcodeTip = $(".tip");
		pwdcodeTip.show();
		$pcodeBtn.css({"disabled":"disabled","background":"#d4d4d4","cursor":"not-allowed"});
		count();
	})
	function count(){
        	var $initval = 120;
        	var timer = window.setInterval(function(){
        		var s = $(".time");
           		if(s.html() > 1){
            			$initval--;
                		s.html($initval);

            		}else{
            			s.html("119");
                		clearInterval(timer);
                		$pcodeBtn.css({"disabled":"false","background":"#f6f6f6","cursor":"pointer"});
                		pwdcodeTip.hide();
                		return false; 
            		}
        	},1000)
    	} 
	
	/********焦点获得时**********/
	
	$pwdcode.focus(function(){
		focusInput($(this),$(this).next());
	});
	$pwdcode.next().click(function(){
		clickText($pwdcode,$(this));
	});
	/********焦点失去时**********/
	
	$pwdcode.blur(function(){
		blurInput($(this),$(this).next());
		pwdcode = checkRec($pwdcode,"请输入验证码","验证码输入有误，请重新输入",enReg);
	});
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkRec(obj,con1,con2,preg){
        var $val = obj.val();
        var $wrong = obj.parent().next().next();
        var $right = obj.parent().next().next();
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
		obj.removeClass("pwd_wrong");
		objs.addClass("pwd_right");
		objn.removeClass("pwd_blue").removeClass("pwd_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("pwd_wrong");
		objs.removeClass("pwd_right");
		objn.addClass("pwd_red").removeClass("pwd_blue");
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
	    obj.addClass("pwd_blue").removeClass("pwd_red");
	}
	function OnBlur(obj){
	   obj.removeClass("pwd_blue").removeClass("pwd_red"); 
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
	
	//提交按钮弹出框
	$(".EmailBtn").click(function(){
		layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layerBtn1',
            area: ['380px', '150px'],
            btn: ['确 定'],
            content: "<div class='EmailBtn_suc'>提交成功!</div>"
        })
	})

})