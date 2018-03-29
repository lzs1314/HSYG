$(document).ready(function(){
    $cfbtn = $(".cfbtn"),
    $cclbtn = $(".cclbtn"),
    $ccreason = $(".cancel_operation_layer"),
    $li = $(".cancel_cause").find("li"),
    $span = $(".cancel_cause").children("span"),
    $note = $span.children("a");


    $cfbtn.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['380px', '150px'],
            btn: ['确 定','取消'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>确认收到商品？</div>"
        })
    });
    $cclbtn.click(function(){
        $li.removeClass("causeli");
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['480px', '290px'],
            btn: ['确 定','取消'],
            content: $ccreason,
            yes:function(index){
                if($(".causeli").length>0){
                    layer.close(index);
                }else{
                    $note.show();
                }
            }
        })
    });

    $li.click(function(){
        if($(this).hasClass("causeli")){

            $(this).removeClass("causeli");
        }else{
            $note.hide();
            $(this).addClass("causeli");
        }
    });
    
	//投诉卖家
	$(".tsmbtn").click(function(){
		layer.open({
	        type: 1,
	        title: false,
	        closeBtn: 1, 
	        area: ['420px', '220px'],
	        shift: 2,
	        skin: 'layerBtn1',
	        btn: ['确 定'],
	        content: $(".ts_reason"),
	        yes:function(index){

	        	$text = $(".ts_reason").children("textarea");
	        	if($text.val().length > 0){
	        		layer.close(index);
	        	}else{
	        		$text.css({"border":"1px solid #f40"});
	        	}
	        }
		})
	});
    
    
})