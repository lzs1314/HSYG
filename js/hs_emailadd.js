$(document).ready(function(){
	var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //邮箱验证规则
		enReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4}$/;  //可输入4位字母和数字的正则
	var $emacc = $(".J_emacc"),
		$emcode = $(".J_emcode"),
		$emcodeBtn = $(".emcodeBtn"),
		emacc,
		emcode;

	$(".EmailBtn").click(function(){
		emacc = checkRec($emacc,"请输入邮箱","请输入正确的邮箱",emailReg);
		emcode = checkRec($emcode,"请输入验证码","请输入正确的验证码",enReg);
		if(emacc&&emcode){
            layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn1',
	            area: ['380px', '150px'],
	            btn: ['确 定'],
	            content: "<div class='layer_suc'><img src='images/common/lay1.png'>添加成功!</div>"
	        })				
			return true;
		}else{
			return false;
		}
	});

	//点击发送验证码按钮
	function codeBtn(obj,cont){
		var codeTip = obj.parent().parent().parent().next().find(".emcodeTip");
        if(!obj.hasClass("emcodeBtn_jin")){
            obj.addClass("emcodeBtn_jin").attr("disabled","disabled");    
        }
		codeTip.show().html(cont);
        var $initval = 120,
            $second = obj.parent().parent().parent().next().find("span");
        var timer = setInterval(function(){
            if($initval >= 2){
                $initval--;
                $second.html($initval);
            }else{
                obj.removeClass("emcodeBtn_jin").attr("disabled",false);
                codeTip.hide();
                $second.html("120");
                clearInterval(timer);
            }
        },1000)
	}
	//end 点击发送验证码按钮    

	/********焦点获得时**********/
	$emacc.focus(function(){
		focusInput($(this),$(this).next());
	});
	$emacc.next().click(function(){
		clickText($emacc,$(this));
	});
	$emcode.focus(function(){
		focusInput($(this),$(this).next());
	});
	$emcode.next().click(function(){
		clickText($emcode,$(this));
	});
	/********焦点失去时**********/
	$emacc.blur(function(){
		blurInput($(this),$(this).next());
		emacc = checkRec($emacc,"请输入邮箱","请输入正确的邮箱",emailReg);
		if(emacc){//判断邮箱是否已输入正确，控制获取按钮的开关
			$emcodeBtn.removeClass("emcodeBtn_jin").attr("disabled",false);
			$emcodeBtn.click(function(){
				codeBtn($emcodeBtn,"验证码已发出，请注意查收邮箱，如果没有收到，你可以在<span>120</span>秒后要求系统重新发送");	
			})
		}
	});			
	$emcode.blur(function(){
		blurInput($(this),$(this).next());
		emcode = checkRec($emcode,"请输入验证码","请输入正确的验证码",enReg);
	});
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkRec(obj,con1,con2,preg){
        var $val = obj.val();
        var $wrong = obj.parent().parent().parent().next().find(".emp");
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