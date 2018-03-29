$(document).ready(function(){
	var enReg = /^[0-9A-Za-z]{6,20}$/;  //可输入6-20位字母或数字的正则
	var $pwd = $(".login_pwd"),
		$rpwd = $(".login_rpwd"),
		$backBtn = $(".backBtn"),
		pwd,
		rpwd;
		
	$backBtn.click(function(){
		pwd = checkReg($pwd,"请输入登录密码","请输入6-20位数字或字母",enReg);
		rpwd = checkRegpwd($pwd,$rpwd,enReg);
		if(pwd&&rpwd){
			return true;
		}else{
			return false;
		}		
	})
	
	/********焦点获得时**********/
	$pwd.focus(function(){
		focusInput($(this),$(this).next());
	});
	$pwd.next().click(function(){
		clickText($pwd,$(this));
	});
	$rpwd.focus(function(){
		focusInput($(this),$(this).next());
	});
	$rpwd.next().click(function(){
		clickText($rpwd,$(this));
	});	
	
	/********焦点失去时**********/
	$pwd.blur(function(){
		blurInput($(this),$(this).next());
		pwd = checkReg($pwd,"请输入登录密码","请输入6-20位数字或字母",enReg);
	})
	$rpwd.blur(function(){
		blurInput($(this),$(this).next());
		rpwd = checkRegpwd($pwd,$rpwd,enReg);		
	});	
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wrong = obj.parent().parent().parent().next().find(".back_note");
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
    function checkRegpwd(obj,objr,preg){
        var $val = obj.val();
        var $valr = objr.val();
        var $wrong = objr.parent().parent().parent().next().find(".back_note");
        var $right = objr.parent().next();
        $val = Trim($val,"g");
        $valr = Trim($valr,"g");
        if ($valr == "") {
        	WrongColor($wrong,$right,objr);
            $wrong.show().html("请再次输入登录密码");
            return false;
        } else{
        	if(!preg.test($valr)){
	            WrongColor($wrong,$right,objr);
	            $wrong.show().html("请输入6-20位数字或字母");
	            return false;
	        }else{
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
    }	
    
	//综合样式判定
	function RightColor(obj,objs,objn){
		obj.removeClass("back_wrong");
		objs.addClass("back_right");
		objn.removeClass("back_blue").removeClass("back_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("back_wrong");
		objs.removeClass("back_right");
		objn.addClass("back_red").removeClass("back_blue");
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
	    obj.addClass("back_blue").removeClass("back_red");
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