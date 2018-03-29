// JavaScript Document
$(document).ready(function(){
    var $add_kefu = $(".add_kefu"),$add_yaoshi = $(".add_yaoshi"),$add_xssz = $(".add_xssz"),$jc = $(".store_kefu_cont").find("span");
    if($(".upd_p").length >= 4){
        $add_xssz.addClass("gray_on").attr("disabled","disabled");
    }
    $add_kefu.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, //不显示关闭按钮
            skin: 'layerBorder',
            area: ['660px', '320px'],
            shift: 2,
            content: $(".kefu_m_tb")
        });
    });
    $add_yaoshi.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, //不显示关闭按钮
            skin: 'layerBorder',
            area: ['660px', '320px'],
            shift: 2,
            content: $(".yaoshi_m_tb")
        });
    });

    $jc.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            skin: 'layerBtn2',    //自定义弹窗样式
            btn:['确定','取消'],
            content: '<div class="wrong_note">确认解除该客服！</div>'//自定义内容样式
        }); 
    });

    $add_xssz.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, //不显示关闭按钮
            skin: 'layerBorder',
            area: ['660px', '240px'],
            shift: 2,
            content: $(".xiaoshou_xs_tb")
        });
    });

    var $upd = $(".upd"),
        $upd_p = $(".upd_p"),
        $new_p = $(".new_p"),
        $s4 = $("#s4"),
        $xssz_btn = $(".xssz_btn"),
        $save_p = $(".save_p");
        $upd.click(function(){
            layer.open({
                type: 1,
                title: false,
                closeBtn: 1, //不显示关闭按钮
                skin: 'layerBorder',
                area: ['700px', '240px'],
                shift: 2,
                content: $(".xiaoshou_xs_tb")
            });
        });

      

})