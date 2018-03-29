$(document).ready(function(){
	
    //刷新按钮及倒计时
    var $J_refr = $(".J_refr");
    $J_refr.click(function(){
    	if ($(this).hasClass("wallet_refr")) {
    		$(this).removeClass("wallet_refr").addClass("refr_jin");
    		$(this).html("<i>&nbsp;</i><span>120</span>&nbsp;s");
	        var $initval = 120,
	            $second = $(this).find("span");
	        var timer = setInterval(function(){
	            if($initval >= 2){
	                $initval--;
	                $second.html($initval);
	            }else{
	                $J_refr.removeClass("refr_jin").addClass("wallet_refr");
	                $J_refr.html("<i>&nbsp;</i>刷新");
	                $second.html("120");
	                clearInterval(timer); 
	            }
	        },1000)  		
    	}
    })
    //end 刷新按钮及倒计时
    
	//银行卡号显示全部
    var $eye = $(".wallet_bank_block").find("span"),
    	$cont = $(".wallet_bank_block").find("i");
    $eye.click(function(){
        $cont.html("748784454")
        $(this).hide();
    });
    //end 银行卡号显示全部
	
	//数字账号小提示
	var $lindex;
	$(".queryI").hover(function(){
		 var that = this;
  		$lindex = layer.tips(
			'1.每个注册用户均拥有一个中信数字账号<br />2.您可以通过网银对数字账号转账进行充值或前往银行柜台现金对数字账号充值<br />',
			 that,
			 {tips: [3, '#f84f4f'], time: 10000}
 		 ); //在元素的事件回调体中，follow直接赋予this即可	
	},function(){
		layer.close($lindex);
	});
	//end 数字账号小提示	
	
	//申请变更或关联银行卡弹窗
	var $apply_btn = $(".apply_btn");
	$apply_btn.click(function(){
		if ($(this).hasClass("apply_ch")) {
			apply_layer($(".change_layer"));
		}else if($(this).hasClass("apply_go")){
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
	$(".bankInput,.bankinfoInput").focus(function(){
		focusInput($(this),$(this).next());
	})
	$bankInput.next().click(function(){
		clickText($bankInput,$(this));
	});	
	$bankinfoInput.next().click(function(){
		clickText($bankinfoInput,$(this));
	});		
	$s2.focus(function(){
		$(this).addClass("fun_blue").removeClass("fun_red");
	})
	/********焦点失去时**********/
	$(".bankInput,.bankinfoInput").blur(function(){
		blurInput($(this),$(this).next());
	})	
	$bankInput.blur(function(){
		bankInput = BankReg($bankInput,"请输入银行卡号","请输入正确的银行卡号",nReg2);
	});	
	$s2.blur(function(){
		s2 = region($s2,"请选择所属区域");
	})
	$s2.change(function(){
		s2 = region($s2,"请选择所属区域");
	})	
	$bankinfoInput.blur(function(){
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
	$(".addbankInput,.addbankinfoInput").focus(function(){
		focusInput($(this),$(this).next());
	})
	$addbankInput.next().click(function(){
		clickText($addbankInput,$(this));
	});	
	$addbankinfoInput.next().click(function(){
		clickText($addbankinfoInput,$(this));
	});	
	$p2.focus(function(){
		$(this).addClass("fun_blue").removeClass("fun_red");
	})	
	/********焦点失去时**********/
	$(".addbankInput,.addbankinfoInput").blur(function(){
		blurInput($(this),$(this).next());
	})
	$addbankInput.blur(function(){
		addbankInput = BankReg($addbankInput,"请输入银行卡号","请输入正确的银行卡号",nReg2);
	});	
	$p2.blur(function(){
		p2 = region($p2,"请选择所属区域");
	})
	$p2.change(function(){
		p2 = region($p2,"请选择所属区域");
	})		
	$addbankinfoInput.blur(function(){
		addbankinfoInput = BankOther($addbankinfoInput,"请输入开户分（支）行信息");
	});				
    /**********************end 关联银行卡弹窗js判断*********************/   

	//搜索栏获得焦点
	var $J_ornum = $(".J_ornum"),
		$J_start = $(".J_start"),
		$J_end = $(".J_end");	
	$J_ornum.focus(function(){
		$(this).addClass("fun_blue");
		$(this).next().hide();
	});
	$J_ornum.next().click(function(){
		$(this).prev().addClass("fun_blue").focus();
    	$(this).hide();
	});
	$J_start.focus(function(){
		$(this).addClass("fun_blue");
	});
	$J_end.focus(function(){
		$(this).addClass("fun_blue");
	});	
	//搜索栏失去焦点
	$J_ornum.blur(function(){
		$(this).removeClass("fun_blue");
	    if($(this).val() == ""){
	        $(this).next().show();
	    }
	});
	$J_start.blur(function(){
		$(this).removeClass("fun_blue"); 
	});
	$J_end.blur(function(){
		$(this).removeClass("fun_blue"); 
	});	
    //时间设置
    laydate.skin('danlan');
    var start = {
        elem: '#start',
        format: 'YYYY/MM/DD',
        min: '1900-01-01', //设定最小日期为当前日期
        max: '2099-06-16', //最大日期
        istime: false,
        istoday: false,
        choose: function(datas){
             end.min = datas; //开始日选好后，重置结束日的最小日期
             end.start = datas //将结束日的初始值设定为开始日
        }
    };
    var end = {
        elem: '#end',
        format: 'YYYY/MM/DD',
        min: '1900-01-01',
        max: '2099-06-16',
        istime: false,
        istoday: false,
        choose: function(datas){
            start.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };
    laydate(start);
    laydate(end);
    //end 时间设置
    
	//类型（仿select）
	var $tit = $(".tr_select").children("p");
    $tit.click(function(){
        var $ss = $tit.index(this);
        $(this).toggleClass("p_on");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function(){
            $tit.eq($ss).html($(this).html()).removeClass("p_on");
            $(this).parent().hide();
        });
    });
    //end 类型（仿select）	
    
	//表格奇偶行变色
    $(".trade_record_tb tr:odd").css({"background":"#f6f6f6"});
    $(".trade_record_tb tr:even").css({"background":"#fff"});
    //end 表格奇偶行变色

})