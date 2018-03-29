$(document).ready(function(){
	
	//登录方式切换js
	var $kktit_a = $(".kktit").children("a"),
		$kkcont = $(".hylogin_kk").children(".kkcont");
	$kktit_a.click(function(){
		var $index = $kktit_a.index(this);
		$kkcont.eq($index).show().siblings(".kkcont").hide();
		$(this).addClass("kktit_on").siblings().removeClass("kktit_on");
	})
	//end 登录方式切换js
	
	//二维码动画效果js
	var $qrcode_img = $(".qrcode_img");
	$qrcode_img.hover(function(){
		$(this).stop(false,false).animate({left:'0px'},300,function(){
			$(this).next().stop(true,true).show();
		});
	},function(){
		$(this).stop(false,false).animate({left:'73px'},300);
		$(this).next().stop(true,true).hide();
	})
	//end 二维码动画效果js
	
	//登录表单验证
	var userReg = /(^1[34578]\d{9}$)|(^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$)/, //手机正则 
	pwdReg = /^[A-Za-z0-9]{6,20}$/, //密码正则
	vcodeReg = /^[A-Za-z0-9]{4}$/, //验证码正则
	$user = $(".kk_user"),
	$pwd = $(".kk_pwd"),
	$vcode = $(".kk_codetext"),
	$btn = $(".kk_sbtn"),
	$note = $(".kk_note"),
	$userContent = ["请输入用户名", "您所输入的用户名不正确，请重新输入", "账户登录，注意不要泄露自己的信息"],
	$userBgUrl = ["images/login/red_user.png", "images/login/gray_user.png"],
	$pwdContent = ["请输入密码", "您所输入的密码不正确，请重新输入", "账户登录，注意不要泄露自己的信息"],
	$pwdBgUrl = ["images/login/red_pwd.png", "images/login/gray_pwd.png"],
	$vcodeContent = ["请输入验证码", "您所输入的验证码不正确，请重新输入", "账户登录，注意不要泄露自己的信息"],
	$vcodeBgUrl = ["none", "none"],
	$userFlag = "",
	$pwdFlag = "",
	$vcodeFlag = "";

	$user.trigger("blur");
	$pwd.trigger("blur");
	if($user.val() != ""){
		$user.next().hide();
	}
	if($pwd.val() != ""){
		$pwd.next().hide();
	}
	if($vcode.val() != ""){
		$vcode.next().hide();
	}
	$user.focus(function(){
		OnFocus($user, "images/login/blue_user.png");
	});
	$user.next().click(function(){
		$user.trigger("focus");
	});
	$user.blur(function(){
		$userFlag = OnBlur($(this), $userBgUrl, $note, $userContent, userReg);
	});

	$pwd.focus(function(){
		OnFocus($pwd, "images/login/blue_pwd.png");
	});
	$pwd.next().click(function(){
		$pwd.trigger("focus");
	});
	$pwd.blur(function(){
		$pwdFlag = OnBlur($(this), $pwdBgUrl, $note, $pwdContent, pwdReg);
	});

	$vcode.focus(function(){
		OnFocus($vcode, "none");
	});
	$vcode.next().click(function(){
		$vcode.trigger("focus");
	});
	$vcode.blur(function(){
		$vcodeFlag = OnBlur($(this), $vcodeBgUrl, $note, $vcodeContent, vcodeReg);
	});
	

	$btn.click(function(){
		$user.trigger("blur");
		$pwd.trigger("blur");
		$vcode.trigger("blur");
		if(!$userFlag){
			$user.trigger("blur")
			return false;
		}else if(!$pwdFlag){
			$pwd.trigger("blur")
			return false;
		}else if(!$vcode){
			$vcode.trigger("blur")
			return false;
		}else{
			return true;
		}
	})
	
	
	function OnFocus(obj,src){
	    obj.css({
	        "border":"1px solid #3aa2e4"
	    })
	    obj.next().hide();
	    var img = obj.prev();
	    img.attr("src",src);
	}
	function OnBlur(obj, src, cobj, content, reg){	
	    if(obj.val() == ""){
		    var img = obj.prev();
		    img.attr("src",src[0]);		    	
	        obj.css({
	            "border":"1px solid #ff5757"
	        }); 
	        cobj.css({
	            "background":"#fffcde url(images/login/icon.png) no-repeat -5px -452px",
	            "color":"#ff4545"
	        }).html(content[0]);
	        return false;
	    }else if(!reg.test(obj.val())){
		    var img = obj.prev();
		    img.attr("src",src[0]);		    	
	        obj.css({
	            "border":"1px solid #ff5757"
	        }); 
	        cobj.css({
	            "background":"#fffcde url(images/login/icon.png) no-repeat -5px -452px",
	            "color":"#ff4545"
	        }).html(content[1]);
	        return false;
	    }else{
		    var img = obj.prev();
		    img.attr("src",src[1]);		    	
	        obj.css({
	            "border":"1px solid #ddd"
	        }); 
	        cobj.css({
	            "background":"#fffcde url(images/login/icon.png) no-repeat -7px -264px",
	            "color":"#909090"
	        }).html(content[2]);
	        return true;
	    }
	    
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
	function getSltVal(tit){
	    tit.click(function(){
	        var $ss = tit.index(this);
	        tit.eq($ss).next().toggle();
	        tit.eq($ss).next().children("li").click(function(){
	            tit.eq($ss).html($(this).html());
	            $(this).parent().hide();
	        });
	    });
	}	
		
	//end 登录表单验证
	
	
	
	
	
	

})