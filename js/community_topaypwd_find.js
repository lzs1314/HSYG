
$(document).ready(function(){

    var enReg = /^[0-9]{6}$/, //验证码
        $ph_code = $(".ph_code"), //验证码
        $code = $(".code"),
        $tr_time = $(".tr_time"),
        $scont = $(".scont");

    $(".pwd_btn").click(function(){
        ph_code = checkReg($ph_code,"请输入验证码","请输入正确的验证码",enReg);
        if(ph_code){
            return true;
        }else{
            return false;
        }
    });
    
    /********焦点获得时**********/
    $ph_code.focus(function(){   //验证码
        focusInput($(this),$(this).next());
    });
   
    /********焦点失去时**********/
    $ph_code.blur(function(){    //验证码
        blurInput($(this),$(this).next());
        ph_code = checkReg($ph_code,"请输入验证码","请输入正确的验证码",enReg);
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
        } else if($val.length != 6){
            WrongColor($nextp,obj);
            $nextp.html(con2);
            return false;
        }else{
            RightColor($nextp,obj);
            $nextp.html("&nbsp;");
            return true;
        }    
    }  
   
    $code.click(function(){
        $(this).addClass("cgray").attr("disabled","disabled");
        $tr_time.show();
        countdown();
    });

    //倒计时
    function countdown(){
        var $initval = 120,
        timer = setInterval(function(){
            if($initval >= 2){
                $initval--;
                $scont.html($initval);
            }else{
                $code.removeClass("cgray").attr("disabled",false);
                $tr_time.hide();
                $scont.html("120");
                clearInterval(timer);
            }
        },1000);       
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