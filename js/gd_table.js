$(document).ready(function(){
	//表格奇偶行变色
	$(".sg_list_tb tr:odd").css({"background":"#fff"});
    $(".sg_list_tb tr:even").css({"background":"#f6f6f6"});
    //end 表格奇偶行变色

	var $name = $(".vessel_name").children("input");
    	
		$name.focus(function(){
			$(this).addClass("pbselect_lg_on");
			if($(this).val() == "输入门店名称进行搜索"){
				$(this).val("");
			}
		});
		$name.blur(function(){
			$(this).removeClass("pbselect_lg_on");
			if($(this).val() == ""){
				$(this).val("输入门店名称进行搜索");
				$(this).css({color:"#909090"});
			}else{
				$(this).css({color:"#434343"});
			}
		});
		$name.keyup(function(){
			$(this).css({color:"#434343"});
		});
	//新增门店社区关系弹窗
	var $provBtn_add=$('.provBtn_add')
	    $provBtn_add.click(function(){
	        layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn2',
		            area: ['606px', '480px'],
		            shift: 2,
	                content: $(".provBtn_add_tb"),
					cancel: function (index, layero) {
		                $("#newFloorName").val("");
		                layer.close(index)
		                return false;
		            }
	        });
	    });
		
		
	var $p3 = $("#p3");
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
	            $nextp.html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请选择社区");
	            return false;
	        }else{
	           
	            RightColor($nextp,$p3);
	            $nextp.html("&nbsp;");
	            return true;
	        }
	    }
	var $pbselect_lg3 = $(".pbselect_lg3");
		$pbselect_lg3.blur(function(){
	        CheckstreetInfo2();
	    });
	    $pbselect_lg3.change(function(){
	        CheckstreetInfo2();
	    });
		function CheckstreetInfo2(){
	        var $streetInfoval2 = $pbselect_lg3.val();
	        var $nextp2 = $(".regsel2").next();
	        if($pbselect_lg3.val() == "" || $pbselect_lg3.val() == "请选择门店"){
	            
	             WrongColor($nextp2,$pbselect_lg3);
	            $nextp2.html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请选择门店");
	            return false;
	        }else{
	           
	            RightColor($nextp2,$pbselect_lg3);
	            $nextp2.html("&nbsp;");
	            return true;
	        }
	    }
		
	//编辑门店社区关系弹窗
	var $infoma_bj=$('.infoma_bj'),
		$provBtn_comname = $(".provBtn_comname"),
		$provBtn_name = $(".provBtn_name"),
		$provBtn_phone = $(".provBtn_phone"),
		$provBtn_mail = $(".provBtn_mail"),
		phonepreg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;  //手机正则
		mailpreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;//邮箱正则
		$infoma_bj.click(function(){
	        layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn2',
		            area: ['606px', '500px'],
		            shift: 2,
	                content: $(".provBtn_add_tb2"),
					cancel: function (index, layero) {
		                $("#newFloorName").val("");
		                layer.close(index)
		                return false;
		            }
	        });
			$provBtn_comname.val($(this).parent().prev().prev().prev().prev().prev().html())
			$provBtn_name.val($(this).parent().prev().prev().prev().html())
			$provBtn_phone.val($(this).parent().prev().prev().html())
			$provBtn_mail.val($(this).parent().prev().html())
	    });
		
		//焦点获得时
	    $provBtn_comname.focus(function(){
	        OnFocus($(this));
	    });
		$provBtn_name.focus(function(){
	        OnFocus($(this));
	    });
		$provBtn_phone.focus(function(){
	        OnFocus($(this));
	    });
		$provBtn_mail.focus(function(){
	        OnFocus($(this));
	    });
		//焦点失去时
		$provBtn_comname.blur(function(){
	        provBtn_comname();
	    });
		function provBtn_comname(){
	        var $provBtn_comname_val = $provBtn_comname.val();
	        var $nextp = $provBtn_comname.parent().next();
	        if($provBtn_comname_val.length == 0){
	            WrongColor($nextp,$provBtn_comname);
	            $nextp.html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请输入社区主名称");
	            return false;
	        }else{
	            $nextp.html("&nbsp;");
	            RightColor($nextp,$provBtn_comname);
	            return true    
	           }
	    }
		
		$provBtn_name.blur(function(){
	        provBtn_name();
	    });
		function provBtn_name(){
	        var $provBtn_name_val = $provBtn_name.val();
	        var $nextp = $provBtn_name.parent().next();
	        if($provBtn_name_val.length == 0){
	            WrongColor($nextp,$provBtn_name);
	            $nextp.html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请输入社区主名称");
	            return false;
	        }else{
	            $nextp.html("&nbsp;");
	            RightColor($nextp,$provBtn_name);
	            return true    
	           }
	    }
		
		$provBtn_phone.blur(function(){
	        provBtn_phone();
	    });
		function provBtn_phone(){//手机判断
	        var $provBtn_phone_val = $provBtn_phone.val();
	        var $nextp = $provBtn_phone.parent().next();
	        $provBtn_phone_val = Trim($provBtn_phone_val,"g");
	        if($provBtn_phone_val.length == 0){
	            WrongColor($nextp,$provBtn_phone);
	             $nextp.html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请输入手机号码");
	            return false;
	        }else if(!phonepreg.test($provBtn_phone_val)){
	            WrongColor($nextp,$provBtn_phone);
	            $nextp.html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请填写正确的手机格式");
	            return false;
	        }else{
	            $nextp.html("&nbsp;");
	            RightColor($nextp,$provBtn_phone);
	            return true;
	        }
	    }
		
		$provBtn_mail.blur(function(){
	        provBtn_mail();
	    });
		function provBtn_mail(){//邮箱判断
	        var $provBtn_mail_val = $provBtn_mail.val();
	        var $nextp = $provBtn_mail.parent().next();
	        $provBtn_mail_val = Trim($provBtn_mail_val,"g");
	        if($provBtn_mail_val.length == 0){
	            WrongColor($nextp,$provBtn_mail);
	             $nextp.html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请输入邮箱");
	            return false;
	        }else if(!mailpreg.test($provBtn_mail_val)){
	            WrongColor($nextp,$provBtn_mail);
	            $nextp.html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请填写正确的邮箱格式");
	            return false;
	        }else{
	            $nextp.html("&nbsp;");
	            RightColor($nextp,$provBtn_mail);
	            return true;
	        }
	    }
		
		
		var $z3 = $("#z3");
		$z3.blur(function(){
	        CheckstreetInfo3();
	    });
	    $z3.change(function(){
	        CheckstreetInfo3();
	    });
		function CheckstreetInfo3(){
	        var $streetInfoval3 = $z3.val();
	        var $nextp3 = $(".regsel3").next();
	        if($z3.val() == "" || $z3.val() == "市、县级市、县"){
	            
	             WrongColor($nextp3,$z3);
	            $nextp3.html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请选择社区");
	            return false;
	        }else{
	           
	            RightColor($nextp3,$z3);
	            $nextp3.html("&nbsp;");
	            return true;
	        }
	    }
		
	var $pbselect_lg4 = $(".pbselect_lg4");
		$pbselect_lg4.blur(function(){
	        CheckstreetInfo4();
	    });
	    $pbselect_lg4.change(function(){
	        CheckstreetInfo4();
	    });
		function CheckstreetInfo4(){
	        var $streetInfoval4 = $pbselect_lg4.val();
	        var $nextp4 = $(".regsel4").next();
	        if($pbselect_lg4.val() == "" || $pbselect_lg4.val() == "请选择门店"){
	            
	             WrongColor($nextp4,$pbselect_lg4);
	            $nextp4.html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请选择门店");
	            return false;
	        }else{
	           
	            RightColor($nextp4,$pbselect_lg4);
	            $nextp4.html("&nbsp;");
	            return true;
	        }
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
	
	//删除弹窗
	$(".infoma_del").click(function(){
                layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn2',
		            area: ['450px', '150px'],
		            btn: ['确 定','取消'],
		            content: "<div class='provBtn_del'>确定要删除此门店对应表吗？删除后不可恢复！</div>"
		        })
            })

});