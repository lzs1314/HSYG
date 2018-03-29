$(document).ready(function(){
/**************************个人中心-地址管理**************************************/
	//地址变更成功提示js操作
    var $p3 = $("#p3"),
        $gcommunity = $(".gcommunity"),
        $gaddress = $(".gaddress"),
        $gname = $(".gname"),
        $gphone = $(".gphone"),
        $checkbox_p = $(".checkbox_p"),
        $pp_area = $(".pp_area"),
        $pp_community = $(".pp_community"),
        $pp_address = $(".pp_address"),
        $pp_name = $(".pp_name"),
        $pp_phone = $(".pp_phone"),
        $reg_btn = $(".reg_btn"),
        $address_list = $(".address_list"),
        $tr = $address_list.find("tr"),
        $gaddr_font = ["请输入收货地址","请输入收货地址","请输入详细地址"],
        $gname_font = ["请输入收货人姓名","请输入正确的收货人姓名","请输入姓名"],
        $gphone_font = ["请输入手机号码","请输入正确的手机号码","请输入手机号码"],
        $gaddr_reg = /^.+$/,
        $gname_reg = /^[0-9A-Za-z\u4e00-\u9fa5]{2,10}$/,
        $gphone_reg = /(^1[34578]\d{9}$)$/;
	
	/********焦点获得时**********/
	
	$(".address_list tr:even").css({"background":"#f9f9f9","border-top":"1px solid #efefef"});


    $tr.hover(function(){
        $(this).find(".address_set_default").show();
    },function(){
        $(this).find(".address_set_default").hide();
    });

    $gaddress.focus(function(){
        sFocus($(this), "请输入详细地址");
    });
    $gaddress.blur(function(){
        sBlur($(this), $pp_address, $gaddr_font, $gaddr_reg);
    });
    $gname.focus(function(){
        sFocus($(this), "请输入姓名");
    });
    $gname.blur(function(){
        sBlur($(this), $pp_name, $gname_font, $gname_reg);
    });
    $gphone.focus(function(){
        sFocus($(this), "请输入手机号码");
    });
    $gphone.blur(function(){
        sBlur($(this), $pp_phone, $gphone_font, $gphone_reg);
    });
    $checkbox_p.click(function(){
        $(this).toggleClass("ch_on");
    });

    $p3.change(function(){
        if($(this).val() != "市、县级市、县"){
            $pp_area.removeClass("note_wrong").addClass("note_right").html("");
            return true;
        }else{
            $pp_area.addClass("note_wrong").removeClass("note_right").html("请选择所属区域");
            return false;
        }
    });

    $gcommunity.change(function(){
        if($(this).val() != "所在小区"){
            $pp_community.removeClass("note_wrong").addClass("note_right").html("");
        }else{
            $pp_community.addClass("note_wrong").removeClass("note_right").html("请选择所在（或者周边）社区");
            return false;
        }
    });

    $reg_btn.click(function(){
        $p3.trigger("change");
        $gcommunity.trigger("change");
        $gaddress.trigger("blur");
        $gname.trigger("blur");
        $gphone.trigger("blur");
    });

	function Trim(str,is_global){
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g,"");
        if(is_global.toLowerCase()=="g")
        {
            result = result.replace(/\s/g,"");
         }
        return result;
	}
    function sFocus(obj, str){
        if(obj.val() == str){
            obj.removeClass("b_red").addClass("b_blue").val(""); 
        }else{
            obj.removeClass("b_red").addClass("b_blue");
        }
    }
    function sBlur(obj, notep, str, reg){
        var val = Trim(obj.val(), "g");
        if(val == "" || val == str[2]){
            obj.addClass("b_red").removeClass("b_blue");
            notep.addClass("note_wrong").removeClass("note_right").html(str[0]);    
        }else if(!reg.test(val)){
            obj.addClass("b_red").removeClass("b_blue");
            notep.addClass("note_wrong").removeClass("note_right").html(str[1]);  
        }else{
            obj.removeClass("b_red").removeClass("b_blue");
            notep.addClass("note_right").removeClass("note_wrong").html("");
        }
        
    }    
    
    

/**************************end 个人中心-地址管理**************************************/
})