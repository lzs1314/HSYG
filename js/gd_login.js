$(document).ready(function(){
/**************************广大医药--登录**************************************/
	var $gduser = $(".gduser"),//用户名
		$gdpwd = $(".gdpwd"),//密码
		$gdcode = $(".gd_code input"),//验证码
		$gd_userBtn = $(".gd_userBtn");
	var	phonereg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;   //手机正则
	var uuppreg = /^[^\s]{6,20}$/;  //6-20位非空字符

	
	$("#gdLogin").submit(function(){
		if(Checkgduser()&&Checkgdpwd()&&Checkgdcode()){
			return true;
		}else{
			return false;
		}
	});
	
	//焦点获得时
	$gduser.focus(function(){
		OnFocus($(this));
		$gduser.addClass("u_blue").removeClass("u_red");
	});	
	$gdpwd.focus(function(){
		OnFocus($(this));
		$gdpwd.addClass("p_blue").removeClass("p_red");
	});
	$gdcode.focus(function(){
		OnFocus($(this));
	});	
	
	//焦点失去时
	$gduser.blur(function(){
		Checkgduser();	
		$gduser.removeClass("u_blue");
	});
	$gdpwd.blur(function(){
		Checkgdpwd();
		$gdpwd.removeClass("p_blue");
	});
	$gdcode.blur(function(){
		Checkgdcode();
	});
	
	//判断操作人用户名（手机号）是否符合规则
	function Checkgduser(){
		var $gduserVal = $gduser.val();
		var $nextp = $(".gdLogin_box").find(".gdHint");
		var $nextspan = $gduser.next();
		$gduserVal = Trim($gduserVal,"g");
		if(!phonereg.test($gduserVal)){
			WrongColor($nextp,$nextspan,$gduser);
			$nextp.html("请输入用户名");
			$gduser.addClass("u_red");
			return false;
		}else{
			$nextp.html("&nbsp;");
			$nextspan.html("&nbsp;");
			RightColor($nextp,$nextspan,$gduser);
			$gduser.removeClass("u_red");
			return true;
		}
	}
	//判断密码是否为空
	function Checkgdpwd(){
		var $gdpwdVal = $gdpwd.val();
		var $nextp = $(".gdLogin_box").find(".gdHint");
		var $nextspan = $gdpwd.next();
		$gdpwdVal = Trim($gdpwdVal,"g");
		if(!uuppreg.test($gdpwdVal)){
			WrongColor($nextp,$nextspan,$gdpwd);
			$nextp.html("请输入密码");
			$gdpwd.addClass("p_red");
			return false;
		}else{
			$nextp.html("&nbsp;");
			$nextspan.html("&nbsp;");
			RightColor($nextp,$nextspan,$gdpwd);
			$gdpwd.removeClass("p_red");
			return true;
		}	
	}
	//判断验证码是否为空
	function Checkgdcode(){
		var $gdcodeVal = $gdcode.val();
		var $nextp = $(".gdLogin_box").find(".gdHint");
		var $nextspan = $gdcode.next();
		$gdcodeVal = Trim($gdcodeVal,"g");
		if($gdcodeVal == ""){
			WrongColor($nextp,$nextspan,$gdcode);
			$nextp.html("请输入验证码");
			return false;
		}else{
			$nextp.html("&nbsp;");
			$nextspan.html("&nbsp;");
			RightColor($nextp,$nextspan,$gdcode);
			return true;
		}	
	}
	
	//综合样式判定
	function RightColor(obj,objs,objn){
		obj.removeClass("note_wrong");
		objs.addClass("note_right");
		objn.removeClass("b_blue").removeClass("b_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("note_wrong");
		objs.removeClass("note_right");
		objn.addClass("b_red").removeClass("b_blue");
	}
	function OnFocus(obj){
		obj.addClass("b_blue").removeClass("b_red");
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
/**************************end 广大医药--登录**************************************/
})