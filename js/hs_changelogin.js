$(document).ready(function(){
	var enReg = /^[0-9A-Za-z]{6,20}$/;  //可输入6-20位字母或数字的正则	
	var $J_oldpwd = $(".J_oldpwd"),
		$J_newpwd = $(".J_newpwd"),
		$J_newpwd2 = $(".J_newpwd2"),
		J_oldpwd,
		J_newpwd,
		J_newpwd2;
		
	$(".changeBtn").click(function(){
		J_oldpwd = checkReg($J_oldpwd,"请输入原登录密码","登录密码输入有误，请重新输入",enReg);
		J_newpwd = checkReg($J_newpwd,"请输入登录密码","请输入6-20位数字或字母",enReg);
		J_newpwd2 = checkSame($J_newpwd,$J_newpwd2,"请再次输入登录密码","两次输入密码不一致，请重新输入",enReg);
		if(J_oldpwd&&J_newpwd&&J_newpwd2){
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
	$J_oldpwd.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_oldpwd.next().click(function(){
		clickText($J_oldpwd,$(this));
	});
	$J_newpwd.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_newpwd.next().click(function(){
		clickText($J_newpwd,$(this));
	});	
	$J_newpwd2.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_newpwd2.next().click(function(){
		clickText($J_newpwd2,$(this));
	});	
	
	/********焦点失去时**********/
	$J_oldpwd.blur(function(){
		blurInput($(this),$(this).next());
		J_oldpwd = checkReg($J_oldpwd,"请输入原登录密码","登录密码输入有误，请重新输入",enReg);
	});	
	$J_newpwd.blur(function(){
		blurInput($(this),$(this).next());
		J_newpwd = checkReg($J_newpwd,"请输入登录密码","请输入6-20位数字或字母",enReg);
	});		
	$J_newpwd2.blur(function(){
		blurInput($(this),$(this).next());
		J_newpwd2 = checkSame($J_newpwd,$J_newpwd2,"请再次输入登录密码","两次输入密码不一致，请重新输入",enReg);
	})		

	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
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
    
    function checkSame(obj1,obj2,con1,con2){
    	var $val1 = obj1.val();
        var $val2 = obj2.val();
        var $wrong = obj2.parent().parent().parent().next().find(".chanp");
        var $right = obj2.parent().parent().next().find(".chspan");
        $val2 = Trim($val2,"g");
        if ($val2 == "") {
        	WrongColor($wrong,$right,obj2);
            $wrong.show().html(con1);
            return false;
        } else{
        	if($val1 != $val2){
	            WrongColor($wrong,$right,obj2);
	            $wrong.show().html(con2);
	            return false;
	        }else{
	        	RightColor($wrong,$right,obj2);
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

})