$(document).ready(function(){
	var	cReg = /^[\u4e00-\u9fa5]{1,10}$/,  //可输入1-10个汉字
		phoneReg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,   //手机号正则	
		nReg = /^[0-9]{1,12}$/;  //可输入1-12位数字的正则
	var $J_name = $(".J_name"),
		$J_phone = $(".J_phone"),
		$J_QQ = $(".J_QQ"),
		$J_office = $(".J_office"),
		$J_ware = $(".J_ware"),
		$save_btn = $(".save_btn"),
		name,
		phone,
		QQ,
		office,
		ware;
	$save_btn.click(function(){
		name = checkReg($J_name,"请输入联系人姓名","请输入正确的联系人姓名",cReg);
		phone = checkReg($J_phone,"请输入联系方式","请输入正确的联系方式",phoneReg);
		QQ = checkReg($J_QQ,"请输入QQ号","请输入正确的QQ号",nReg);
		office = checkOther($J_office,"请输入办公地址");
		ware = checkOther($J_ware,"请输入仓库地址");
		if(name&&phone&&QQ&&office&&ware){
			return true;
		}else{
			return false;
		}
	})
	
	/********焦点获得时**********/
	$J_name.focus(function(){
		OnFocus($(this));
	});
	$J_phone.focus(function(){
		OnFocus($(this));
	});
	$J_QQ.focus(function(){
		OnFocus($(this));
	});
	$J_office.focus(function(){
		OnFocus($(this));
	});
	$J_ware.focus(function(){
		OnFocus($(this));
	});
	
	/********焦点失去时**********/
	$J_name.blur(function(){
		name = checkReg($J_name,"请输入联系人姓名","请输入正确的联系人姓名",cReg);
	})
	$J_phone.blur(function(){
		phone = checkReg($J_phone,"请输入联系方式","请输入正确的联系方式",phoneReg);
	})
	$J_QQ.blur(function(){
		QQ = checkReg($J_QQ,"请输入QQ号","请输入正确的QQ号",nReg);
	})
	$J_office.blur(function(){
		office = checkOther($J_office,"请输入办公地址");
	})
	$J_ware.blur(function(){
		ware = checkOther($J_ware,"请输入仓库地址");
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
    
     //判断其他不用正则的
    function checkOther(obj,con){
        var $val = obj.val();
        var $wr = obj.next();
        if($val == ""){
            WrongColor($wr,obj);
            $wr.html(con);
            return false;
        }else{
            RightColor($wr,obj);
            $wr.html("&nbsp;");
            return true;
        } 
    }
	
	//综合样式判定
	function RightColor(obj,objn){
		obj.addClass("prov_right").removeClass("prov_wrong");
		objn.removeClass("prov_blue").removeClass("prov_red");
	}
	function WrongColor(obj,objn){
		obj.addClass("prov_wrong").removeClass("prov_right");
		objn.addClass("prov_red").removeClass("prov_blue");
	}
	function OnFocus(obj){
	    obj.addClass("prov_blue").removeClass("prov_red");
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