//封装所有正则可用；obj 需要判断的对象；wr 错误正确需要在什么位置显示；con 显示什么样的内容；preg 正则表达式
function checkReg(obj,con1,con2,preg){
    var $val = obj.val();
    var $wrong = obj.parent().parent().parent().next().children().find(".cha_p");
    var $right = obj.parent().find(".cha_span");
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
//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
 function checkReg1(obj,con1,con2,preg){
    var $val = obj.val();
    var $wrong = obj.parent().parent().find(".accp");
    var $right = obj.parent().parent().find(".accspan");
    $val = Trim($val,"g");
    if ($val == "") {
        $wrong.addClass("acc_wrong");
        $right.removeClass("acc_right");
        obj.addClass("acc_red").removeClass("acc_blue");
        $wrong.show().html(con1);
        return false;
    } else{
        if(!preg.test($val)){
            $wrong.addClass("acc_wrong");
            $right.removeClass("acc_right");
            obj.addClass("acc_red").removeClass("acc_blue");
            $wrong.show().html(con2);
            return false;
        }else{
             obj.removeClass("acc_red").removeClass("acc_blue");
            $wrong.removeClass("acc_wrong").html("");
            $right.addClass("acc_right");
            $wrong.html("&nbsp;");
            return true;
        }    
    }
}
//obj1 新密码文本框的值；obj2 再次输入文本框的值；con1、con2 提示文字
function checkReg3(obj1,obj2,con1,con2){
    var $val1 = obj1.val();
    var $val2 = obj2.val();
    var $wrong = obj2.parent().parent().parent().next().children().find(".cha_p");
    var $right = obj2.parent().find(".cha_span");
    $val2 = Trim($val2,"g");
    if ($val2 == "") {
        WrongColor($wrong,$right,obj2);
        $wrong.html(con1);
        return false;
    } else if($val1 != $val2){
        WrongColor($wrong,$right,obj2);
        $wrong.html(con2);
        return false;
    }else{
        RightColor($wrong,$right,obj2);
        $wrong.html("&nbsp;");
        return true;
    }    
} 
//判断其他不用正则的1
function checkOther(obj,con){
    var $val = obj.val();
    var $wrong = obj.parent().parent().parent().next().children().find(".cha_p");
    var $right = obj.parent().find(".cha_span");
    if($val == ""){
        WrongColor($wrong,$right,obj);
        $wrong.show().html(con);
        return false;
    }else{
        RightColor($wrong,$right,obj);
        $wrong.html("&nbsp;");
        return true;
    }
}
//end 弹窗js判断

/******************统一弹窗****************/
//obJ_layer-当前弹窗
function click_layer(obj_layer){ 
    layer.open({
        type: 1,
        title: false,
        closeBtn: 1, //不显示关闭按钮
        skin: 'layerBtn2',
        area: '560px',
        content: obj_layer
    });
}
 /******************统一成功弹窗****************/
 //con-显示文案
function layer_suc(con){
    layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        area: ['380px', '150px'],
        time: 2000,
        skin: 'layerBtn1',    //自定义弹窗样式
        btn:['确定'],
        content: "<div class='layer_war'><img src='images/common/lay1.png'>"+ con +"</div>"//自定义内容样式
    }); 
}

/****************点击获取验证码*****************/
//倒计时
function countdown(obj){
    var $initval = 120,
        $second = obj.next().find("a");
    var timer = setInterval(function(){
        if($initval >= 2){
            $initval--;
            $second.html($initval);
        }else{
            obj.removeClass("cgray").attr("disabled",false);
            obj.next().hide();
            $second.html("120");
            clearInterval(timer);
        }
    },1000)
}   
//coubbtn 当前按钮；reg 正则；obj 返回值
function coun_dis(coubbtn,reg,obj){
	var cou_in = coubbtn.prev().prev().children("input");
    if(cou_in.length != 0){
    	if(cou_in.hasClass("new_email")){
    		obj = checkReg(cou_in,"请输入邮箱","请输入正确的邮箱",reg);
    	}else{
    		obj = checkReg(cou_in,"请输入手机号","请输入正确的手机格式",reg);
    	}
    	if(!cou_in.hasClass("acc_red")){
			coubbtn.next().show();
			countdown(coubbtn);
            coubbtn.addClass("cgray").attr("disabled","disabled");
    	}
    }else if(!coubbtn.hasClass("cgray")){
    	coubbtn.next().show();
    	countdown(coubbtn);
        coubbtn.addClass("cgray").attr("disabled","disabled");
    }
}
/****************end 点击获取验证码*****************/

/******************手机邮箱切换*******************/
function verify(obj,obj_tab){
    var obj_part = obj.parents().find(obj_tab);
    if(obj.hasClass("verify_way_phone")){
        obj_part.children().find("#way_phone").show();
        obj_part.children().find("#way_email").hide();
    }else if(obj.hasClass("verify_way_email")){
        obj_part.children().find("#way_phone").hide();
        obj_part.children().find("#way_email").show();
    }
}
/****************获得、失去焦点时*****************/
function focus_cli(objbtn){
	objbtn.focus(function(){   //旧登录密码
        focusInput($(this),$(this).next());
    });
	objbtn.next().click(function(){
        clickText(objbtn,$(this));
    });
}
//obj 当前文本框；obj1 验证新密码文本框返回值；obj2 确认密码文本框返回值；con 提示文字；reg 正则
function pwd_again(obj,obj1,obj2,obj3,con,reg){
	obj.blur(function(){    //2次登录密码
        blurInput(obj,obj.next());
        obj1 = checkReg(obj,"请再次输入新"+ con +"密码","请输入正确的新"+ con +"密码",reg);
        obj2 = checkReg3(obj3,obj,"请再次输入新"+ con +"密码","两次密码输入不一致，请重新输入",reg);
    });
}
//objbtn 当前文本框；objbtntxt 返回值；con1、con2 提示文字；reg 正则
function focus_blurreg(objbtn,objbtntxt,con1,con2,reg){
	objbtn.focus(function(){
        focusInput($(this),$(this).next());
    });
	objbtn.next().click(function(){
        clickText(objbtn,$(this));
    });
    objbtn.blur(function(){
        blurInput(objbtn,objbtn.next());
        objbtntxt = checkReg(objbtn,con1,con2,reg);
    });
}
//objbtn 当前文本框；objbtntxt 返回值；con 提示文字；
function focus_blur(objbtn,objbtntxt,con){
    objbtn.focus(function(){
        focusInput($(this),$(this).next());
    });
    objbtn.next().click(function(){
        clickText(objbtn,$(this));
    });
    objbtn.blur(function(){
        blurInput(objbtn,objbtn.next());
        objbtntxt = checkOther(objbtn,con);
    });
}
/****************获得焦点时*******************/

//判断所属区域、所属社区
//obj 当前选择框；txt 选择框默认值；con 提示文字
function select(obj,txt,con){
    var $objval = obj.val();
    var $wrong = obj.parent().parent().next().children().find(".cha_p");
    var $right = obj.parent().find(".cha_span");
    if($objval == "" || $objval == txt){
        obj.addClass("acc_red").removeClass("acc_blue");
		$wrong.addClass("accbank_wrong").html(con);
		$right.removeClass("acc_right");
        return false;
    }else{
        obj.removeClass("acc_red").removeClass("acc_blue");
		$wrong.removeClass("accbank_wrong").html("");
		$right.addClass("acc_right");
        return true;
    }
}
//验证文本框提示文字显示隐藏
function btn_val(obj){
    $objval = obj.val();
    if($objval != ""){
        obj.next().hide();
    }else{
        obj.next().show();
    }
}
//综合样式判定
function RightColor(obj,objs,objn){
	obj.removeClass("accbank_wrong");
	objs.addClass("acc_right");
	objn.removeClass("acc_blue").removeClass("acc_red");
}
function WrongColor(obj,objs,objn){
	obj.addClass("accbank_wrong");
	objs.removeClass("acc_right");
	objn.addClass("acc_red").removeClass("acc_blue");
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
    obj.addClass("acc_blue").removeClass("acc_red");
}
function OnBlur(obj){
   obj.removeClass("acc_blue").removeClass("acc_red"); 
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
