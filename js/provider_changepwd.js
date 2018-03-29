$(document).ready(function(){
	var enReg = /^[0-9A-Za-z]{6,20}$/;  //可输入6-20位字母或数字的正则
	var $J_old = $(".J_old"),
		$J_new = $(".J_new"),
		$J_new2 = $(".J_new2"),
		$pwd_btn = $(".pwd_btn"),
		J_old,
		J_new,
		J_new2;
		
	$pwd_btn.click(function(){
		J_old = checkReg($J_old,"请输入原登录密码","登录密码输入有误，请重新输入",enReg);
		J_new = checkReg($J_new,"请输入登录密码","请输入6-20位数字或字母",enReg);
		J_new2 = checkSame($J_new,$J_new2,"请再次输入登录密码","两次输入密码不一致，请重新输入",enReg);
		if(J_old&&J_new&&J_new2){
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
	$J_old.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_old.next().click(function(){
		clickText($J_old,$(this));
	});
	$J_new.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_new.next().click(function(){
		clickText($J_new,$(this));
	});	
	$J_new2.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_new2.next().click(function(){
		clickText($J_new2,$(this));
	});		
	
	/********焦点失去时**********/	
	$J_old.blur(function(){
		blurInput($(this),$(this).next());
		J_old = checkReg($J_old,"请输入原登录密码","登录密码输入有误，请重新输入",enReg);
	})	
	$J_new.blur(function(){
		blurInput($(this),$(this).next());
		J_new = checkReg($J_new,"请输入登录密码","请输入6-20位数字或字母",enReg);
	})	
	$J_new2.blur(function(){
		blurInput($(this),$(this).next());
		J_new2 = checkSame($J_new,$J_new2,"请再次输入登录密码","两次输入密码不一致，请重新输入",enReg);
	})		
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wr = obj.parent().parent().next().find(".pwd_hint");
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
    
    function checkSame(obj1,obj2,con1,con2){
    	var $val1 = obj1.val();
        var $val2 = obj2.val();
        var $wr = obj2.parent().parent().next().find(".pwd_hint");
        $val2 = Trim($val2,"g");
        if ($val2 == "") {
        	WrongColor($wr,obj2);
            $wr.html(con1);
            return false;
        } else{
        	if($val1 != $val2){
	            WrongColor($wr,obj2);
	            $wr.html(con2);
	            return false;
	        }else{
	        	RightColor($wr,obj2);
	            $wr.html("&nbsp;");
	            return true;
	        }    
        }
    }	
	
	//综合样式判定
	function RightColor(obj,objn){
		obj.addClass("pwd_right").removeClass("pwd_wrong");
		objn.removeClass("pwd_blue").removeClass("pwd_red");
	}
	function WrongColor(obj,objn){
		obj.addClass("pwd_wrong").removeClass("pwd_right");
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