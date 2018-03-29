
$(document).ready(function(){

    var enReg = /^[0-9A-Za-z]{6,20}$/, //身份正则
        $pwd_new = $(".pwd_new"),//新密码
        $pwd_new2 = $(".pwd_new2"); //确认新密码

    $(".pwd_btn").click(function(){
        pwd_new = checkReg($pwd_new,"请输入支付密码","请输入6-20位数字或字母",enReg);
        pwd_new2 = checkReg2($pwd_new,$pwd_new2,"请再次输入支付密码","两次输入密码不一致，请重新输入",enReg);
        if(pwd_new&&pwd_new2){
            count();
            layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                area: ['350px', '100px'],
                content: "<div class='layer_suc'><img src='images/common/lay1.png'>操作成功!</div>"
                
            })  
            return true;
        }else{
            return false;
        }
    });
    function count(){
        var $initval = 2;
        var timer = window.setInterval(function(){
            if($initval > 1){
                    $initval--;
                }else{
                    clearInterval(timer);
                    layer.closeAll();
                    return false; 
                }
        },1000)
    } 
    
    /********焦点获得时**********/
   
    $pwd_new.focus(function(){  //新密码
        focusInput($(this),$(this).next());
    });
    $pwd_new.next().click(function(){
        clickText($pwd_new,$(this));
    });
    $pwd_new2.focus(function(){  //确认新密码
        focusInput($(this),$(this).next());
    });
    $pwd_new2.next().click(function(){
        clickText($pwd_new2,$(this));
    });

   
    /********焦点失去时**********/
   
    $pwd_new.blur(function(){  //新密码
        blurInput($(this),$(this).next());
        pwd_new = checkReg($pwd_new,"请输入支付密码","请输入正确的支付密码",enReg);
        pwd_new2 = checkReg2($pwd_new,$pwd_new2,"请再次输入支付密码","两次输入密码不一致，请重新输入",enReg);
    }); 
    $pwd_new2.blur(function(){  //确认新密码
        blurInput($(this),$(this).next());
        pwd_new2 = checkReg2($pwd_new,$pwd_new2,"请再次输入支付密码","两次输入密码不一致，请重新输入",enReg);
    });
   
   
    //封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $nextp = obj.parent().next().find(".note_p");
        $val = Trim($val,"g");
        if ($val == "") {
            WrongColor($nextp,obj);
            $nextp.html(con1);
            return false;
        } else if(!preg.test($val)){
            WrongColor($nextp,obj);
            $nextp.html(con2);
            return false;
        }else{
            RightColor($nextp,obj);
            $nextp.html("&nbsp;");
            return true;
        }    
    }   
    
    function checkReg2(obj1,obj2,con1,con2){
        var $val1 = obj1.val();
        var $val2 = obj2.val();
        var $nextp = obj2.parent().next().find(".note_p");
        $val2 = Trim($val2,"g");
        if ($val2 == "") {
            WrongColor($nextp,obj2);
            $nextp.html(con1);
            return false;
        } else if($val1 != $val2){
            WrongColor($nextp,obj2);
            $nextp.html(con2);
            return false;
        }else{
            RightColor($nextp,obj2);
            $nextp.html("&nbsp;");
            return true;
        }    
    }   
  
   

    //综合样式判定
    function RightColor(obj,objn){
        obj.addClass("pwd_right").removeClass("pwd_wrong");
        objn.removeClass("b_blue").removeClass("b_red");
    }
    function WrongColor(obj,objn){
        obj.addClass("pwd_wrong").removeClass("pwd_right");
        objn.addClass("b_red").removeClass("b_blue");
    }
    function OnFocus(obj){
        obj.addClass("b_blue").removeClass("b_red");
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