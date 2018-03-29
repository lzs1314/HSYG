$(document).ready(function(){
    
    $(".agrreturn").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['380px', '150px'],
            btn: ['确 定','取消'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>确认退货申请？</div>"
        })
    });
    var $reject_reason = $(".reject_reason"),
    $reasontext = $reject_reason.children("textarea");
    $(".try_return").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: '380px',
            btn: ['确 定','取消'],
            content: $reject_reason,
            yes:function(index){
                if($reasontext.val().length > 0){
                    $reasontext.css("border","1px solid #efefef").val("");
                    layer.close(index);
                }else{
                    $reasontext.css("border","1px solid #e4393c");
                }
            }
        })

    });

  
})