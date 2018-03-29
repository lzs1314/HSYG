$(document).ready(function(){
    
    //新增收货地址
    var $hsl_add = $(".hsl_add");
    $hsl_add.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, //不显示关闭按钮
            skin: 'layerBorder',
            area: ['600px', '500px'],
            shift: 2,
            content: $(".add_addr_layer")
        });    
        $(".add_addr_layer").find("h3").html("新增收货地址");
    })
    //end 新增收货地址
    
    //修改收货地址
    var $hsoalt_a = $(".hsoalt_a");
    $hsoalt_a.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, //不显示关闭按钮
            skin: 'layerBorder',
            area: ['600px', '500px'],
            shift: 2,
            content: $(".add_addr_layer")
        });      
        $(".add_addr_layer").find("h3").html("修改收货地址");
    })
    //end 修改收货地址
    
    /******************新增收货地址-表单判断******************/
	var	phoneReg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;   //手机号正则
	var $J_name = $(".J_name"),
		$J_phone = $(".J_phone"),
		$p3 = $("#p3"),
		$select_lg = $(".select_lg"),
		$J_addr = $(".J_addr"),
		$adadl_btn = $(".adadl_btn"),
		J_name,
		J_phone,
		p3,
		select_lg,
		J_addr;
		
    $adadl_btn.click(function(){
    	J_name = checkNull($J_name,"请输入收货人姓名");
    	J_phone = checkReg($J_phone,"请输入手机号","请输入正确的手机号",phoneReg);
    	p3 = checkOther($p3,"请选择所属区域");
    	select_lg = checkOther($select_lg,"请选择所在（或者周边）社区");
    	J_addr = checkNull($J_addr,"请输入详细的收货地址");
        if(J_name&&J_phone&&p3&&select_lg&&J_addr){
        	layer.closeAll();
        	return true;
        }else{
        	return false;
        }
    });	
    
    /*****获得焦点时*****/
	$J_name.focus(function(){
   		focusInput($(this),$(this).next());
	})
	$J_name.next().click(function(){
		clickText($J_name,$(this));
	});	
	$J_phone.focus(function(){
   		focusInput($(this),$(this).next());
	})
	$J_phone.next().click(function(){
		clickText($J_phone,$(this));
	});		
	$p3.focus(function(){
		OnFocus($(this));
	});
	$select_lg.focus(function(){
		OnFocus($(this));
	});
	$J_addr.focus(function(){
   		focusInput($(this),$(this).next());
	})
	$J_addr.next().click(function(){
		clickText($J_addr,$(this));
	});	
	
	/*****失去焦点时*****/
	$J_name.blur(function(){
		blurInput($(this),$(this).next());
		J_name = checkNull($J_name,"请输入收货人姓名");
	})
	$J_phone.blur(function(){
		blurInput($(this),$(this).next());
		J_phone = checkReg($J_phone,"请输入手机号","请输入正确的手机号",phoneReg);
	})	
	$p3.change(function(){
		OnBlur($(this));
		p3 = checkOther($p3,"请选择所属区域");
	});	
	$select_lg.change(function(){
		OnBlur($(this));
		select_lg = checkOther($select_lg,"请选择所在（或者周边）社区");
	});	
	$J_addr.blur(function(){
		blurInput($(this),$(this).next());
		J_addr = checkNull($J_addr,"请输入详细的收货地址");
	})	
	
	//封装判断非空的表单
    function checkNull(obj,cont){
        var $val = obj.val();
        var $wrong = obj.parent().parent().parent().next().find(".adadl_p");
        var $right = obj.parent().next();
        $val = Trim($val,"g");
        if ($val == "") {
        	WrongColor($wrong,$right,obj);
            $wrong.show().html(cont);
            return false;
        } else{
        	RightColor($wrong,$right,obj);
            $wrong.html("&nbsp;");
            return true;
        }
    }		
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wrong = obj.parent().parent().parent().next().find(".adadl_p");
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
    
    //封装判断地区选择的表单
    function checkOther(obj,con){
        var $val = obj.val();
        var $wrong = obj.parent().parent().parent().next().find(".adadl_p");
        var $right = obj.parent().next();
        if($val == "" || $val == "市、县级市、县" || $val == "请选择"){
            WrongColor($wrong,$right,obj);
            $wrong.show().html(con);
            return false;
        }else{
            RightColor($wrong,$right,obj);
            $wrong.html("&nbsp;");
            return true;
        } 
    }
    
	//综合样式判定
	function RightColor(obj,objs,objn){
		obj.removeClass("adadl_wrong");
		objs.addClass("adadl_right");
		objn.removeClass("adadl_blue").removeClass("adadl_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("adadl_wrong");
		objs.removeClass("adadl_right");
		objn.addClass("adadl_red").removeClass("adadl_blue");
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
	    obj.addClass("adadl_blue").removeClass("adadl_red");
	}
	function OnBlur(obj){
	   obj.removeClass("adadl_blue").removeClass("adadl_red"); 
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
    /******************end 新增收货地址-表单判断******************/

    //点击更换收货地址信息      addrset_btn(设为默认)  addrdef_btn(默认地址)
    var $hsoa_list_single = $(".hsoa_list").children(".hsoa_list_single");
    $hsoa_list_single.click(function(){
    	$(this).addClass("hls_on").siblings(".hsoa_list_single").removeClass("hls_on");
    	$(this).siblings(".hsoa_list_single").find(".addrset_btn").hide();
    	$(this).siblings(".hsoa_list_single").find(".hsoalt_a").hide();
    	$(this).find(".addrset_btn").show();
    	$(this).find(".hsoalt_a").show();
        var $addrset_btn = $(".hsoa_list").find(".addrset_btn");
	    $addrset_btn.click(function(){
	    	$(this).parent().parent().siblings(".hsoa_list_single").find(".addrdef_btn").addClass("addrset_btn").removeClass("addrdef_btn").html("设为默认").hide();
	    	$(this).addClass("addrdef_btn").removeClass("addrset_btn").html("默认地址");
	    })	
    })
    //end 点击更换收货地址信息
    
    //显示全部收货地址
    var sumWidth = 0;
    var $hsoal_showAll = $(".hsoal_showAll");
    var $hsoa_list_add = $(".hsoa_list_add");
    var $single_length = $hsoa_list_single.length;
    var $other = $(".hsoa_list").children(".hsoa_list_single:gt(2)");
	showAll();
	function showAll(){
		if ($single_length > 4) {
			$other.hide();
		}
		if ($single_length > 7) {
			$hsoa_list_add.hide();
		}
		$hsoal_showAll.click(function(){
	        if($single_length > 4){
	        	$(this).hide();
	        	$other.show();
	        }
	    });
	}    
    //end 显示全部收货地址
    
    //支付方式
    var $payWay_a = $(".hs_payWay").children("a");
    $payWay_a.click(function(){
    	$(this).addClass("payWay_on").siblings("a").removeClass("payWay_on");
    	return false;
    })
    
    //库存不足提示
    var $mit_order = $(".mit_order");
    $mit_order.click(function(){
    	layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: 'auto',
            maxWidth: 560,
            btn: ['确 定','取消'],
            content: "<div class='layer_war' style='min-width:380px;padding: 0px 20px;'>洋酒版正品小酒版收藏拿破仑XO干地50ml玻璃瓶库存不足！</div>"
        })
    })
    //end 库存不足提示
    
    //去掉第一条边框线js
    $(".gsInfo_item_div").find(".gsInfo_item:first").css({"border-top":"0px"});
    //end 去掉第一条边框线js
    
    



})