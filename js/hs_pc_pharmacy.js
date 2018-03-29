$(document).ready(function(){
	//广大用药人信息修改删除显示隐藏
	
	/*$gd_pharmacy = $(".gd_pharmacy"),
	$pharmacy_button = $gd_pharmacy.children().find("div"),
	
	
		$(".gd_pharmacy").hover(function(){
			$(this).children().next().show();
			},function(){
			$(this).children().next().hide();
			})*/
			
	//广大用药人信息点击编辑可输入
	var $p_button1 = $(".p_button1"),
		$p_button3 = $(".p_button3");
		
		$p_button1.click(function(){
			$(this).parent().prev().find("input").removeAttr("readonly");
			$(this).parent().hide();
			$(this).parent().next().show();
			})
		
		$p_button3.click(function(){
			$(this).parent().prev().prev().find("input").attr({ readonly: 'true' });
			$(this).parent().hide();
			$(this).parent().prev().show();
			})
	
		
		
		
	//用药人信息验证
	var phonepreg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,
		isIDCard1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/, 
		isIDCard2=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
		$J_name = $(".J_name"),
		$name2 = $(".name2"),
    	$birthday = $(".birthday"),
		$J_birthday = $(".J_birthday"),
    	$phone = $(".phone"),
		$J_phone = $(".J_phone"),
		$ID = $(".ID"),
		$J_ID = $(".J_ID"),
    	name,
		name2,
		J_name,
		birthday,
		J_birthday,
		phone,
		J_phone,
		J_ID,
		ID;
		
		$(".add_qd").click(function(){
			J_name = checkRec($J_name,"请输入姓名");
			birthday = checkRec($birthday,"请输入出生日期");
			J_phone = checkRec2($J_phone,"请输入手机号","请输入正确的手机号",phonepreg);
			ID = checkRec3($ID,"请输入身份证号","请录入正确身份证号",isIDCard1,isIDCard2);
			if(J_name&&birthday&&phone&&J_phone&&ID){
				layer.closeAll();
				return true;
			}else{
				return false;
			}

		})
		

	 /********焦点获得时**********/
    $J_name.focus(function(){   //姓名
        OnFocus($(this));
    });
	$name2.focus(function(){   //姓名
        OnFocus($(this));
    });
    $birthday.focus(function(){   //日期
        OnFocus($(this));
    });
	$J_birthday.focus(function(){   //日期
        OnFocus($(this));
    });
    $phone.focus(function(){   //手机号
        OnFocus($(this));
    });
	$J_phone.focus(function(){   //手机号
        OnFocus($(this));
    });
	$ID.focus(function(){   //身份证号
        OnFocus($(this));
    });
	$J_ID.focus(function(){   //身份证号
        OnFocus($(this));
    });
    /********焦点失去时**********/
    $(".J_name").blur(function(){    //姓名
        name = checkRec($(this),"请输入姓名");
    });
	$(".name2").blur(function(){    //姓名
        name2 = checkRec($(this),"请输入姓名");
    });
    $birthday.blur(function(){    //日期
        birthday = checkRec($birthday,"请输入出生日期");
    });
	$J_birthday.blur(function(){    //日期
        J_birthday = checkRec($J_birthday,"请输入出生日期");
    });
    $phone.blur(function(){    //手机号
        phone = checkRec2($phone,"请输入手机号","请输入正确的手机号",phonepreg);
    });
	$J_phone.blur(function(){    //手机号
        J_phone = checkRec2($J_phone,"请输入手机号","请输入正确的手机号",phonepreg);
    });
	$ID.blur(function(){    //身份证号
        ID = checkRec3($ID,"请输入身份证号","请录入正确身份证号",isIDCard1,isIDCard2);
    });
    $J_ID.blur(function(){    //身份证号
        J_ID = checkRec3($J_ID,"请输入身份证号","请录入正确身份证号",isIDCard1,isIDCard2);
    });
    
    //封装可用,obj需要判断的对象，con显示什么样的内容
    function checkRec(obj,con){
        var $val = obj.val();
        var $wrong = obj.next();
        var $right = obj.next();
        $val = Trim($val,"g");
		
        if ($val == "") {
			
            WrongColor($wrong,$right,obj);
            $wrong.html(con);
            return false;
        }else{
			
            RightColor($wrong,$right,obj);
            $wrong.html("&nbsp;");
            return true;
        }    
    }
    //封装所有正则可用,obj需要判断的对象，con显示什么样的内容，preg正则表达式
    function checkRec2(obj,con1,con2,preg){
        var $val = obj.val();
        var $wrong = obj.next();
        var $right = obj.next();
        $val = Trim($val,"g");
        if ($val == "") {
            WrongColor($wrong,$right,obj);
            $wrong.html(con1);
            return false;
        } else if(!preg.test($val)){
            WrongColor($wrong,$right,obj);
            $wrong.html(con2);
            return false;
        }else{
            RightColor($wrong,$right,obj);
            $wrong.html("&nbsp;");
            return true;
        }    
    }
	
	//封装ID正则可用,obj需要判断的对象，con显示什么样的内容，preg正则表达式
    function checkRec3(obj,con1,con2,preg,preg2){
        var $val = obj.val();
        var $wrong = obj.next();
        var $right = obj.next();
        $val = Trim($val,"g");
        if ($val == "") {
            WrongColor($wrong,$right,obj);
            $wrong.html(con1);
            return false;
        } else if(!preg.test($val)&&!preg2.test($val)){
            WrongColor($wrong,$right,obj);
            $wrong.html(con2);
            return false;
        }else{
            RightColor($wrong,$right,obj);
            $wrong.html("&nbsp;");
            return true;
        }    
    }

	
	
	//新建用药人弹窗
    var $new_built2=$('.new_built2'),
	    $add_qd=$('.add_qd'),
		$add_qx=$('.add_qx');
	    $new_built2.click(function(){
	        layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn2',
		            area: ['550px', '370px'],
		            shift: 2,
	                content: $(".add_address_tb")
	        });
	    });
		
		$add_qx.click(function(){
			layer.closeAll();
			})
		//用药人确定删除弹窗
		$(".p_button2").click(function(){
                layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn2',
		            area: ['380px', '150px'],
		            btn: ['确 定','取消'],
		            content: "<div class='layer_war'><img src='images/common/lay3.png'>是否确认删除？</div>"
		        })
            })
	
	
	//用药人弹窗
    var $new_built=$('.new_built')
	    $new_built.click(function(){
	        layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn2',
		            area: ['550px', '470px'],
		            btn: ['确 定','取消'],
					shift: 2,
	                content: $(".add_pharmacy_tb")
	        });
	    });
		
		
	  
	//鼠标选中状态边框变化
	var	$topay_pway1 = $(".topay_pway1"),
		$topay_pway2 = $(".topay_pway2"),
		$borred4 = $(".borred4"),
		$new_invoice = $(".new_invoice"),
		$invoice_input = $(".invoice_input");
	$topay_pway1.click(function(){
		$(this).addClass("topay_add").siblings().removeClass("topay_add");	
		$(".topay_pway2").addClass("topay_add3");
	})
	$topay_pway2.click(function(){
		$(this).removeClass("topay_add3");
		$(this).addClass("topay_add").siblings().removeClass("topay_add");	
	})
	  
	  
	
	
        //时间设置
        laydate.skin("danlan");
    laydate({
  elem: '#test1',
  format: 'YYYY/MM/DD', // 分隔符可以任意定义，该例子表示只显示年月
  max: laydate.now(),
  festival: true, //显示节日
  choose: function(datas){ //选择日期完毕的回调
    birthday = checkRec($birthday,"请输入出生日期");
    $("#laydate_clear").click(function(){
    	var $wrong = $birthday.next();
        var $right = $birthday.next();
    	WrongColor($wrong,$right,$birthday);
            $wrong.html("请输入出生日期");
    })

  }
});
        //时间设置2
    laydate({
  elem: '#test2',
  format: 'YYYY/MM/DD', // 分隔符可以任意定义，该例子表示只显示年月
  max: laydate.now(),
  festival: true, //显示节日
  choose: function(datas){ //选择日期完毕的回调
     J_birthday = checkRec($J_birthday,"请输入出生日期");
     $("#laydate_clear").click(function(){
    	var $wrong = $J_birthday.next();
        var $right = $J_birthday.next();
    	WrongColor($wrong,$right,$birthday);
            $wrong.html("请输入出生日期");
    })
  }
});



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
    function OnBlur(obj){
       obj.removeClass("b_blue").removeClass("b_red"); 
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
	