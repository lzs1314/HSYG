$(document).ready(function(){
    var $mdfbtn = $(".mdfbtn"),
    $dilbtn = $(".dilbtn"),
    $cancel = $(".freight_cclbtn"),
    $confirm = $(".freight_subbtn"),
    $text = $(".freight_text"),
    $fval = $(".freight_val"),
    $tval = $(".total_val"),
    $gval = $(".goods_val").html(),
    $panel = $(".oinfo_panel_dilivery"),
    $oinfo_cc = $(".oinfo_cc"),
    $oinfo_way = $(".oinfo_way"),
    $offnote = $(".oinfo_offline_note"),
    $zitinote = $(".oinfo_ziti_note"),
    $numReg = /(^[1-9]([0-9]{0,8})?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]([0-9])?$)|(^[0-9]\.[0-9]([1-9])?$)|(^[0-9]\.[1-9]?$)/;

    $mdfbtn.click(function(){
        $cancel.show();
        $confirm.show();
        $text.show().focus().css("border","1px solid #333");
        $fval.hide();
    });
    $confirm.click(function(){
        if($numReg.test($text.val())){
            $(this).hide();
            $cancel.hide();
            $text.hide();
            $fval.show().html($text.val());
            $totalprice = parseFloat($text.val()) + parseFloat($gval);
            $tval.html($totalprice.toFixed(2)); 
        }else{
            $text.focus();
            $text.css("border","1px solid #f40");
        }
    });
    $dilbtn.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: '380px',
            btn: ['确 定'],
            content: $panel
        })
    });
    $oinfo_way.change(function(){
        if($(this).val() == "快递"){
            $oinfo_cc.show();
            $offnote.hide();
            $zitinote.hide();
        }else if($(this).val() == "线下配货"){
            $oinfo_cc.hide();
            $offnote.show();
            $zitinote.hide();
        }else if($(this).val() == "自提"){
            $oinfo_cc.hide();
            $offnote.hide();
            $zitinote.show();
        }else{
            $oinfo_cc.hide();
            $offnote.hide();
            $zitinote.hide();
        }
    });
})