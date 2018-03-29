$(document).ready(function(){

	//搜索栏获得焦点
	var $J_name = $(".J_name"),
		$J_start = $(".J_start"),
		$J_end = $(".J_end");
	
	$J_name.focus(function(){
		focusInput($(this),$(this).next());
	});
	$J_name.next().click(function(){
		clickText($J_name,$(this));
	});
	$J_start.focus(function(){
		OnFocus($(this));
	});
	$J_end.focus(function(){
		OnFocus($(this));
	});
	
	//搜索栏失去焦点
	$J_name.blur(function(){
		blurInput($(this),$(this).next());
	});
	$J_start.blur(function(){
		OnBlur($(this));
	});
	$J_end.blur(function(){
		OnBlur($(this));
	});
	
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
		$input.removeClass("sf_blue");
	    if($input.val() == ""){
	        $text.show();
	    }
	}
	function OnFocus(obj){
	    obj.addClass("sf_blue");
	}
	function OnBlur(obj){
	   obj.removeClass("sf_blue"); 
	}
	
	//订单状态切换
	var $vessel_zt_a = $(".sf_state").find("a");
	$vessel_zt_a.click(function(){
		$(this).addClass("sf_state_on").siblings("a").removeClass("sf_state_on");
	});
	//end 订单状态切换
	
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
    
	
	//确认收货弹窗
	var $cfbtn = $(".cfbtn");
		$cfbtn.click(function(){
			layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn2',
	            area: ['380px', '150px'],
	            btn: ['确 定','取消'],
	            content: "<div class='layer_war'><img src='images/common/lay3.png'>确认收到货品？</div>"
	        })
		});	
	//end 确认收货弹窗
	
	//////////////////////////////同意退货弹窗
	var $agreebtn = $(".agreebtn"),
		$agr_layer = $(".agr_layer");
	$agreebtn.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            area: '450px',
            content: $agr_layer
        })
    });
    
    var phoneReg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,   //手机号正则		
    	cenReg = /^[0-9A-Za-z\u4e00-\u9fa5]{1,10}$/;	//可输入汉字或字母或数字或汉字加字母加数字
    var $J_agrPhone = $(".J_agrPhone"),
    	$J_agrName = $(".J_agrName"),
    	$J_aglr_textarea = $(".J_aglr_textarea"),
    	$aglrBtn = $(".aglrBtn"),
    	J_agrPhone,
    	J_agrName,
    	J_aglr_textarea;
    	
	$aglrBtn.click(function(){
		J_agrPhone = checkReg($J_agrPhone,"请输入手机号","请输入正确的手机号",phoneReg);
		J_agrName = checkReg($J_agrName,"请输入收货人姓名","请输入正确的收货人姓名",cenReg);
		J_aglr_textarea = checkOther($J_aglr_textarea,"请输入收货地址");
		if (J_agrPhone&&J_agrName&&J_aglr_textarea) {
			layer.closeAll();
			return true;
		} else{
			return false;
		}
	})
    	
	/********焦点获得时**********/
	$J_agrPhone.focus(function(){
		OnFocus2($(this));
	});
	$J_agrName.focus(function(){
		OnFocus2($(this));
	});
	$J_aglr_textarea.focus(function(){
		OnFocus2($(this));
	});
	
	/********焦点失去时**********/
	$J_agrPhone.blur(function(){
		J_agrPhone = checkReg($J_agrPhone,"请输入手机号","请输入正确的手机号",phoneReg);
	});
	$J_agrName.blur(function(){
		J_agrName = checkReg($J_agrName,"请输入收货人姓名","请输入正确的收货人姓名",cenReg);
	});
	$J_aglr_textarea.blur(function(){
		J_aglr_textarea = checkOther($J_aglr_textarea,"请输入收货地址");
	});	
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wrong = obj.parent().parent().next().find(".aglrP");
        var $right = obj.parent().next().find(".aglrSpan");
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
    function checkOther(obj,con){
        var $val = obj.val();
        var $wrong = obj.parent().parent().next().find(".aglrP");
        var $right = obj.parent().next().find(".aglrSpan");
        $val = Trim($val,"g");
        if ($val == "") {
        	WrongColor($wrong,$right,obj);
            $wrong.show().html(con);
            return false;
        } else{
        	RightColor($wrong,$right,obj);
            $wrong.html("&nbsp;");
            return true;
        }
    }    
    
	//综合样式判定
	function RightColor(obj,objs,objn){
		obj.removeClass("ag_wrong");
		objs.addClass("ag_right");
		objn.removeClass("ag_blue").removeClass("ag_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("ag_wrong");
		objs.removeClass("ag_right");
		objn.addClass("ag_red").removeClass("ag_blue");
	}
	function OnFocus2(obj){
	    obj.addClass("ag_blue").removeClass("ag_red");
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

	////////////////////////////////////////end 同意退货弹窗
	
	//拒绝退货弹窗
	var $rejectbtn = $(".rejectbtn"),
		$reject_reason = $(".reject_reason"),
		$reasontext = $reject_reason.children("textarea");
		
	    $rejectbtn.click(function(){
	        layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn2',
	            area: '380px',
	            btn: ['确 定'],
	            content: $reject_reason,
	            yes:function(index){
	                if($reasontext.val().length > 0){
	                    $reasontext.css("border","1px solid #efefef").val("");
	                    layer.close(index);
	                }else{
	                    $reasontext.css("border","1px solid #e4393c");
	                }
	            }
	        })
	    });		
	
	//end 拒绝退货弹窗    
    
    


})