$(document).ready(function(){

	//搜索条件文本框
	var $input_em = $(".sf_cont").children(".sfInput_p").children("em");
	$input_em.click(function(){
		$(this).prev("input").focus().addClass("sf_blue");
		$(this).hide();
	})
	$(".J_num,.J_name").focus(function(){
		$(this).addClass("sf_blue");
		$(this).next("em").hide();
	})
	$(".J_start,.J_end").focus(function(){
		$(this).addClass("sf_blue");
	})
	$(".J_num,.J_name").blur(function(){
		$(this).removeClass("sf_blue");
		if ($(this).val() == "") {
			$(this).next("em").show();
		} else{
			$(this).next("em").hide();
		}
	})
	$(".J_start,.J_end").blur(function(){
		$(this).removeClass("sf_blue");
	})
	//end 搜索条件文本框
	
	//订单状态切换
	var $vessel_zt_a = $(".sf_state").find("a");
	$vessel_zt_a.click(function(){
		$(this).addClass("sf_state_on").siblings("a").removeClass("sf_state_on");
	});
	//end 订单状态切换
	
    //时间设置
    laydate.skin('danlan');
    var start = {
        elem: '#start',
        format: 'YYYY/MM/DD',
        min: '1900-01-01', //设定最小日期为当前日期
        max: '2099-06-16', //最大日期
        istime: false,
        istoday: false,
        choose: function(datas){
             end.min = datas; //开始日选好后，重置结束日的最小日期
             end.start = datas //将结束日的初始值设定为开始日
        }
    };
    var end = {
        elem: '#end',
        format: 'YYYY/MM/DD',
        min: '1900-01-01',
        max: '2099-06-16',
        istime: false,
        istoday: false,
        choose: function(datas){
            start.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };
    laydate(start);
    laydate(end);
    //end 时间设置
    
	//订单来源（仿select）
	var $tit = $(".sf_select").children("p");
    $tit.click(function(){
        var $ss = $tit.index(this);
        $(this).toggleClass("p_on");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function(){
            $tit.eq($ss).html($(this).html()).removeClass("p_on");
            $(this).parent().hide();
        });
    });
    //end 订单来源（仿select）	

	//发货弹窗
    var $panel = $(".oinfo_panel_dilivery"),
    $oinfo_cc = $(".oinfo_cc"),
    $oinfo_way = $(".oinfo_way");
    $oinfo_way.change(function(){
        if($(this).val() == "快递"){
            $oinfo_cc.show(); 
        }else{
            $oinfo_cc.hide(); 
        }
    });
    $(".acg_btn").click(function(){
       layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: '380px',
            btn: ['确 定'],
            content: $panel
        })
    })
    //end 发货弹窗
    
	//最近浏览
    var $sbtn = $(".btn_chg"),
        $contll = $(".my_collection_content");
        $sul = $contll.children("ul"),
        $swidth = $sul.width(),
        $sline = $(".browse_line"),
        $len = $sul.length;
    $contll.width($swidth*$len);
    $sline.animate({left:"580px"},1000);
    $sbtn.click(function(){
        $sline.css({left:0});
        $sline.animate({left:"580px"},1000);    
        if(!$contll.is(":animated")){
            $contll.animate({left:"-="+$swidth},1000,function(){
                $contll.css({left:0}).children("ul:lt(1)").appendTo($contll);
            });
        }
    });
    //end 最近浏览

});