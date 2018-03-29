//数量增加减少
    var maxInventory = 999;
    var initInventory = 1;
    $(".num_plus").click(function(){
        var thisNum = parseInt($(".detail_num").val());
        if(thisNum<maxInventory){
            $(".detail_num").val(thisNum+1);
        }
    });
    $(".num_minus").click(function(){
        var thisNum = parseInt($(".detail_num").val());
        if(thisNum>initInventory){
            $(".detail_num").val(thisNum-1);
        }
    });
//end  数量增加减少
//超出限购数量提示
	$(".cartSettlement_operation").click(function(){
		layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn1',
		            area: ['380px', '150px'],
		            btn: ['确 定'],
		            content: "<div class='layer_err'><img src='images/common/lay2.png'>您购买的商品超过限购数量，请调整购买信息！</div>"
		        })
	})
