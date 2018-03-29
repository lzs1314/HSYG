//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
function BankReg(obj,con1,con2,preg){
    var $val = obj.val();
    var $wrong = obj.parent().parent().parent().next().find(".fun_p");
    var $right = obj.parent().find(".fun_span");
    $val = Trim($val,"g");
    if ($val == "") {
    	$wrong.addClass("fun_wrong");
		$right.removeClass("fun_right");
		obj.addClass("fun_red").removeClass("fun_blue");
        $wrong.show().html(con1);
        return false;
    } else{
    	if(!preg.test($val)){
	    	$wrong.addClass("fun_wrong");
			$right.removeClass("fun_right");
			obj.addClass("fun_red").removeClass("fun_blue");
            $wrong.show().html(con2);
            return false;
        }else{
        	$wrong.removeClass("fun_wrong");
			$right.addClass("fun_right");
			obj.removeClass("fun_blue").removeClass("fun_red");
            $wrong.html("&nbsp;");
            return true;
        }    
    }
} 
//判断其他不用正则的1
function BankOther(obj,con){
    var $val = obj.val();
    var $wrong = obj.parent().parent().parent().next().find(".fun_p");
    var $right = obj.parent().find(".fun_span");
    if($val == ""||$val == "地级市"){
    	$wrong.addClass("fun_wrong");
		$right.removeClass("fun_right");
		obj.addClass("fun_red").removeClass("fun_blue");
        $wrong.show().html(con);
        return false;
    }else{
    	$wrong.removeClass("fun_wrong");
		$right.addClass("fun_right");
		obj.removeClass("fun_blue").removeClass("fun_red");
        $wrong.html("&nbsp;");
        return true;
    } 
}

//所属区域判断封装
function region(obj,con){
    var $val = obj.val();
    var $wrong = obj.parent().parent().next().find(".fun_p");
    var $right = obj.parent().find(".fun_span");
    if($val == ""||$val == "地级市"){
    	$wrong.addClass("fun_wrong");
		$right.removeClass("fun_right");
		obj.addClass("fun_red").removeClass("fun_blue");
        $wrong.show().html(con);
        return false;
    }else{
    	$wrong.removeClass("fun_wrong");
		$right.addClass("fun_right");
		obj.removeClass("fun_blue").removeClass("fun_red");
        $wrong.html("&nbsp;");
        return true;
    } 
}
//end 所属区域判断封装

//综合样式判定
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
    obj.addClass("fun_blue").removeClass("fun_red");
}
function OnBlur(obj){
   obj.removeClass("fun_blue").removeClass("fun_red"); 
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