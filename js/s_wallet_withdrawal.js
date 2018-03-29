$(document).ready(function(){
	var nReg = /^[1-9]\d*$/,  //可输入1-10位正整数的正则
		enReg = /^[0-9A-Za-z]{6,20}$/;  //可输入6-20位字母或数字的正则
	var $money_mtxt = $(".money_mtxt input"),
		$ppwd_mtxt = $(".ppwd_mtxt input"),
		money_mtxt,
		ppwd_mtxt;
		
	$(".recharge_stbn").click(function(){
		money_mtxt = checkReg($money_mtxt,"请输入提现金额","请输入正确格式提现金额",nReg);
		ppwd_mtxt = checkReg($ppwd_mtxt,"请输入支付密码","请输入正确的支付密码",enReg);
		if(money_mtxt&&money_mtxt){
			return true;
		}else{
			return false;
		}
	});		
	/********焦点获得时**********/
	$money_mtxt.focus(function(){
		focusInput($(this),$(this).next());
	});
	$money_mtxt.next().click(function(){
		clickText($money_mtxt,$(this));
	});		
	$ppwd_mtxt.focus(function(){
		focusInput($(this),$(this).next());
	});
	$ppwd_mtxt.next().click(function(){
		clickText($ppwd_mtxt,$(this));
	});		
	/********焦点失去时**********/
	$money_mtxt.blur(function(){
		blurInput($(this),$(this).next());
		money_mtxt = checkReg($money_mtxt,"请输入提现金额","请输入正确格式提现金额",nReg);
	});
	$ppwd_mtxt.blur(function(){
		blurInput($(this),$(this).next());
		ppwd_mtxt = checkReg($ppwd_mtxt,"请输入支付密码","请输入正确的支付密码",enReg);
	});	

	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wrong = obj.parent().parent().find(".accp");
        var $right = obj.parent().parent().find(".accspan");
        $val = Trim($val,"g");
        if ($val == "") {
        	$wrong.addClass("cha_wrong");
			$right.removeClass("cha_right");
			obj.addClass("fun_red").removeClass("fun_blue");
            $wrong.show().html(con1);
            return false;
        } else{
        	if(!preg.test($val)){
	            $wrong.addClass("cha_wrong");
				$right.removeClass("cha_right");
				obj.addClass("fun_red").removeClass("fun_blue");
	            $wrong.show().html(con2);
	            return false;
	        }else{
    			$wrong.removeClass("cha_wrong");
				$right.addClass("cha_right");
				obj.removeClass("fun_blue").removeClass("fun_red");
	            $wrong.html("&nbsp;");
	            return true;
	        }    
        }
    }
    
    
	//申请变更或关联银行卡弹窗
	var $J_wdlBtn = $(".J_wdlBtn");
	$J_wdlBtn.click(function(){
		if ($(this).hasClass("apply_bankc_a")) {
			apply_layer($(".change_layer"));
		}else if($(this).hasClass("apply_bankc_b")){
			apply_layer($(".addbank_layer"));
		}
	})
	function apply_layer(cont){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, //不显示关闭按钮
            area: '560px',
            shift: 2,
            content: cont
        })		
	}
    //end 申请变更或关联银行卡弹窗
    
    /**********************申请变更银行卡弹窗js判断*********************/
	var nReg2 = /^[0-9]{0,50}$/;  //可输入0-50位正整数的正则 
	var $chatab_btn = $(".chatab_btn"),
		$bankInput = $(".bankInput"),
		$s2 = $("#s2"),
		$bankinfoInput = $(".bankinfoInput"),
		bankInput,
		s2,
		bankinfoInput;
	$chatab_btn.click(function(){
		bankInput = BankReg($bankInput,"请输入银行卡号","请输入正确的银行卡号",nReg2);
		s2 = region($s2,"请选择所属区域");
		bankinfoInput = BankOther($bankinfoInput,"请输入开户分（支）行信息");
		if(bankInput&&s2&&bankinfoInput){
			return true;
		}else{
			return false;
		}
	});		
	/********焦点获得时**********/
	$bankInput.focus(function(){
		focusInput($(this),$(this).next());
	});
	$bankInput.next().click(function(){
		clickText($bankInput,$(this));
	});	
	$bankinfoInput.focus(function(){
		focusInput($(this),$(this).next());
	});
	$bankinfoInput.next().click(function(){
		clickText($bankinfoInput,$(this));
	});		
	$s2.focus(function(){
		$(this).addClass("fun_blue").removeClass("fun_red");
	})
	/********焦点失去时**********/
	$bankInput.blur(function(){
		blurInput($(this),$(this).next());
		bankInput = BankReg($bankInput,"请输入银行卡号","请输入正确的银行卡号",nReg2);
	});	
	$s2.blur(function(){
		s2 = region($s2,"请选择所属区域");
	})
	$s2.change(function(){
		s2 = region($s2,"请选择所属区域");
	})	
	$bankinfoInput.blur(function(){
		blurInput($(this),$(this).next());
		bankinfoInput = BankOther($bankinfoInput,"请输入开户分（支）行信息");
	});		
    /**********************end 申请变更银行卡弹窗js判断*********************/   
    
    /**********************关联银行卡弹窗js判断*********************/
	var $addtab_btn = $(".addtab_btn"),
		$addbankInput = $(".addbankInput"),
		$p2 = $("#p2"),
		$addbankinfoInput = $(".addbankinfoInput"),
		addbankInput,
		p2,
		addbankinfoInput;
	$addtab_btn.click(function(){
		addbankInput = BankReg($addbankInput,"请输入银行卡号","请输入正确的银行卡号",nReg2);
		p2 = region($p2,"请选择所属区域");
		addbankinfoInput = BankOther($addbankinfoInput,"请输入开户分（支）行信息");
		if(bankInput&&p2&&bankinfoInput){
			return true;
		}else{
			return false;
		}
	});		
	/********焦点获得时**********/
	$addbankInput.focus(function(){
		focusInput($(this),$(this).next());
	});
	$addbankInput.next().click(function(){
		clickText($addbankInput,$(this));
	});	
	$addbankinfoInput.focus(function(){
		focusInput($(this),$(this).next());
	});
	$addbankinfoInput.next().click(function(){
		clickText($addbankinfoInput,$(this));
	});	
	$p2.focus(function(){
		$(this).addClass("fun_blue").removeClass("fun_red");
	})		
	/********焦点失去时**********/
	$addbankInput.blur(function(){
		blurInput($(this),$(this).next());
		addbankInput = BankReg($addbankInput,"请输入银行卡号","请输入正确的银行卡号",nReg2);
	});
	$p2.blur(function(){
		p2 = region($p2,"请选择所属区域");
	})
	$p2.change(function(){
		p2 = region($p2,"请选择所属区域");
	})			
	$addbankinfoInput.blur(function(){
		blurInput($(this),$(this).next());
		addbankinfoInput = BankOther($addbankinfoInput,"请输入开户分（支）行信息");
	});			
    /**********************end 关联银行卡弹窗js判断*********************/ 
    
    
    
    
    
})