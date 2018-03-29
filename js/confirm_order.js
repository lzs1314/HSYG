$(document).ready(function(){
   
	var $ss_addr_btn = $(".ss_addr_btn"),
	    $pwlist = $(".so_pay_way").children("li"),
	    $span_add_address = $(".span_add_address"),
	    $new_phone = $(".new_phone"),
	    $select_lg = $(".select_lg"),
	    $addr_sbtn = $(".addr_sbtn"),
	    $name = $(".name"),
	    $address = $(".address"),
	    $bank_info = $(".bank_info"),
	    $p3 = $("#p3"),
	    $addrlist = $(".so_addr_ul").children("li"),
	    phonepreg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;  //手机正则
	

	    if($addrlist.length > 3){
	    	$(".so_addr_ul li:gt(2)").hide();
	    	$ss_addr_btn.html("展开地址");
	    }
		$ss_addr_btn.click(function(){
			if($(this).html() == "展开地址"){
				$(".so_addr_ul li:gt(2)").show();
				$(this).html("收起地址").addClass("ss_sq");
			}else{
				$(".so_addr_ul li:gt(2)").hide();
				$(this).html("展开地址").removeClass("ss_sq");
			}
		});

	  	//焦点获得时
	    $name.focus(function(){   //姓名
	        OnFocus($(this));
	    });
	    $name.blur(function(){    //姓名
	        CheckName();
	    });
	
	    $new_phone.focus(function(){   //手机
	            OnFocus($(this));
	    });
	    $new_phone.blur(function(){    //手机号码
	        CheckPhone();
	    });
	 
	    $address.focus(function(){
	        OnFocus($(this));
	    });
	    //焦点失去时
	    $address.blur(function(){
	        CheckAddress();
	    });
	    $address.change(function(){
	        CheckAddress();
	    });

	    $span_add_address.click(function(){
	        layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1, //不显示关闭按钮
	            skin: 'layerBorder',
	            area: ['640px', '500px'],
	            shift: 2,
	            content: $(".add_address_tb")
	        });
	    });
	    $addr_sbtn.click(function(){
	        layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 0,
	            skin: 'layerBtn1',    //自定义弹窗样式
	            btn:['确定'],
	            content: '<div class="wrong_note">新增收货地址成功！</div>'//自定义内容样式
	        });
	    });
	    $pwlist.click(function(){
	        $(this).addClass("way_on").siblings("li").removeClass("way_on");
	    });
	
	     $(".addr_sbtn").click(function(){
	        if(CheckName()&&CheckPhone()&&CheckstreetInfo()&&select_lg()&&CheckAddress()){
	            layer.closeAll();
	           return true;
	        }else{
	            return false;
	        }
	    });
	    
	   function CheckAddress(){
	        var $address_val = $address.val();
	        var $nextp = $address.next();
	        $address_val = Trim($address_val,"g");
	        if($address_val.length == 0){
	            WrongColor($nextp,$address);
	            $nextp.html("请输入详细的地址");
	            return false;
	        }else{
	            $nextp.html("&nbsp;");
	            RightColor($nextp,$address);
	            return true    
	           }
	    }
	    function CheckName(){
	        var $name_val = $name.val();
	        var $nextp = $name.next();
	        if($name_val.length == 0){
	            WrongColor($nextp,$name);
	            $nextp.html("请输入姓名");
	            return false;
	        }else{
	            $nextp.html("&nbsp;");
	            RightColor($nextp,$name);
	            return true    
	           }
	    }
	    function CheckPhone(){//手机判断
	        var $new_phone_val = $new_phone.val();
	        var $nextp = $new_phone.next();
	        $new_phone_val = Trim($new_phone_val,"g");
	        if($new_phone_val.length == 0){
	            WrongColor($nextp,$new_phone);
	             $nextp.html("请输入手机号码");
	            return false;
	        }else if(!phonepreg.test($new_phone_val)){
	            WrongColor($nextp,$new_phone);
	            $nextp.html("请填写正确的手机格式");
	            return false;
	        }else{
	            $nextp.html("&nbsp;");
	            RightColor($nextp,$new_phone);
	            return true;
	        }
	    };
	    
	    
	
	     //焦点失去时
	    $p3.blur(function(){
	        CheckstreetInfo();
	    });
	    $p3.change(function(){
	        CheckstreetInfo();
	    });
	
	    function CheckstreetInfo(){
	        var $streetInfoval = $p3.val();
	        var $nextp = $(".regsel").next();
	        if($p3.val() == "" || $p3.val() == "市、县级市、县"){
	            
	             WrongColor($nextp,$p3);
	            $nextp.html("请选择所属区域");
	            return false;
	        }else{
	           
	            RightColor($nextp,$p3);
	            $nextp.html("&nbsp;");
	            return true;
	        }
	    }
	    function select_lg(){
	        var $select_lgval = $select_lg.val();
	        var $nextp = $select_lg.next();
	        if($select_lgval == "" || $select_lgval == "请选择"){
	
	            WrongColor($nextp,$select_lg);
	            $nextp.html("请选择所在（或者周边）社区");
	            return false;
	        }else{
	            
	             RightColor($nextp,$select_lg);
	            $nextp.html("&nbsp;");
	            return true;
	            }
	
	    }
	    $select_lg.focus(function(){
	        OnFocus($(this));
	    });
	    $select_lg.change(function(){
	        OnBlur($(this));
	        select_lg();
	    });
	    function OnBlur(obj){
	       obj.removeClass("b_blue").removeClass("b_red"); 
	    }
	//综合样式判定
	function RightColor(obj,objn){
	    obj.addClass("note_right").removeClass("note_wrong");
	    objn.removeClass("b_blue").removeClass("b_red");
	}
	function WrongColor(obj,objn){
	    obj.addClass("note_wrong").removeClass("note_right");
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
})