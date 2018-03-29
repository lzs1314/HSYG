$(document).ready(function(){
    $dilbtn = $(".oinfo_dilbtn"),
    $panel = $(".oinfo_panel_dilivery"),
    $oinfo_cc = $(".oinfo_cc"),
    $oinfo_way = $(".oinfo_way");

    $oinfo_way.change(function(){
        if($(this).val() == "快递"){
            $oinfo_cc.show(); 
        }else{
            $oinfo_cc.hide(); 
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
})