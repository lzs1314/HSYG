$(document).ready(function(){
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