$(document).ready(function(){
	
	//去掉第一条商品的下划分割线
	var $orgs_info_first = $(".hs_ordl_goods").find(".orgs_info:first");
	$orgs_info_first.css({"border-top":"0px"});
	//end 去掉第一条商品的下划分割线
	
	//去掉操作按钮的第一个mt10
	var $first_a = $(".orgs_oper").find("a:first");
	$first_a.css({"margin-top":"0px"});
	//end 去掉操作按钮的第一个mt10
	
	//发货弹窗
    var $J_deliver = $(".J_deliver"),
    	$panel = $(".oinfo_panel_dilivery"),
    	$oinfo_cc = $(".oinfo_cc"),
    	$oinfo_way = $(".oinfo_way");
    $J_deliver.click(function(){
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
        }else{
            $oinfo_cc.hide(); 
        }
    });
	//end 发货弹窗
	
})
