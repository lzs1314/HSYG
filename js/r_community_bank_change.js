
$(document).ready(function(){

    var idreg = /^\d{16,21}$/;  //数字正则
    var cartreg = /^(\d{18}|\d{17}x)$/; //身份正则
    var $cart_id = $(".cart_id"), //银行卡号
    $cart_address = $(".cart_address"),//开户行
    $cart_cart = $(".cart_cart"); //身份证

    $(".cart_submit").click(function(){
        CheckCart_id();
        Checkcart_address();
        CheckCart_cart();
        if(CheckCart_id()&&Checkcart_address()&&CheckCart_cart()){
            return true;
        }else{
            return false;
        }
    });
    
    /********焦点获得时**********/
    $cart_id.focus(function(){   //银行卡号
        OnFocus($(this));
    });
    $cart_cart.focus(function(){  //身份证
        OnFocus($(this));
    });
    $cart_address.focus(function(){
        focusInput($(this),$(this).next());
    });
    $cart_address.next().click(function(){
        clickText($cart_address,$(this));
    });
    /********焦点失去时**********/
    $cart_id.blur(function(){    //商户名称
        CheckCart_id();
    });
    $cart_address.blur(function(){  //开户行
        blurInput($(this),$(this).next());
        Checkcart_address();
    }); 
    $cart_cart.blur(function(){  //身份证
        CheckCart_cart();
    });
   
   
    //$obj表示当前input
    //$objtext表示对比信息
    //$note表示详细提示信息
    function CheckBlur($obj,$objtext,$note){
        var $objVal = $obj.val();
        var $nextp = $obj.parent().next().find(".note_p");
        $objVal = Trim($objVal,"g");
        if($objVal.length == 0){
            WrongColor($nextp,$obj);
            $nextp.html("请输入"+$note);
            return false;
        }else if(!$objtext.test($objVal)){
            WrongColor($nextp,$obj);
            $nextp.html("请输入正确的"+$note);
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$obj);
            return true;
        }        
    }
    function CheckBlur1($obj,$note){
        var $objVal = $obj.val();
        var $nextp = $obj.parent().next().find(".note_p");
        $objVal = Trim($objVal,"g");
        if($objVal.length == 0){
            WrongColor($nextp,$obj);
            $nextp.html("请输入"+$note);
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$obj);
            return true;
        }        
    }
    function CheckCart_id(){
        return CheckBlur($cart_id,idreg,"银行卡号");
    }
    function Checkcart_address(){
        return CheckBlur1($cart_address,"开户行信息");
    }
    function CheckCart_cart(){
        return CheckBlur($cart_cart,cartreg,"身份证号");
    }
  
   //判断所属银行
    var $cart_id = $(".cart_id"),
        $bank = $(".bank"),
        $banklogo = $(".banklogo");
    $cart_id.keyup(function(){
        var $val = $(this).val();
        if($val.length >= 5){
            for(var $key in $banklist){
                if($val == $key){
                    $bank.show();
                    $banklogo.show().html($banklist[$key]);break;

                }
            }
        }else{
            $bank.hide();
            $banklogo.html("&nbsp;");
        }
    });
    //end 判断所属银行  


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