$(document).ready(function(){
    //确认退货弹窗
    var $agree= $(".agree");
        $agree.click(function(){
            layer.open({
                type: 1,
                title: false,
                closeBtn: 1,
                skin: 'layerBtn2',
                area: ['380px', '150px'],
                btn: ['确 定','取消'],
                content: "<div class='layer_war'><img src='images/common/lay3.png'>确认退货？</div>"
            })
        }); 
    //end 确认退货弹窗
    //拒绝退货弹窗
    var $return = $(".return"),
        $reject_reason = $(".reject_reason"),
        $reasontext = $reject_reason.children("textarea");
        
        $return.click(function(){
            layer.open({
                type: 1,
                title: false,
                closeBtn: 1,
                skin: 'layerBtn2',
                area: '380px',
                btn: ['确 定'],
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
    
    //end 拒绝退货弹窗    


})