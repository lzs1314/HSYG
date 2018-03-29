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
       
	//确认收货弹窗
    $(".acg_btn").click(function(){
       layer.open({
            type: 1,
            title: false,
            closeBtn: 1, //不显示关闭按钮
            skin: 'layerBtn2',
            area: ['380px', '160px'],
            shift: 2,
            btn: ['确 定', '取 消'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>确认是否收到货物</div>"
        }); 
    })
    //end 确认收货弹窗
    
    //删除订单弹窗
    $(".delete_order").click(function(){
       layer.open({
            type: 1,
            title: false,
            closeBtn: 1, //不显示关闭按钮
            skin: 'layerBtn2',
            area: ['380px', '160px'],
            shift: 2,
            btn: ['确 定', '取 消'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>是否删除该订单</div>"
        }); 
    })
    //end 删除订单弹窗

	//填写物流信息
    $(".wl_info").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, //不显示关闭按钮
            skin: 'layerBtn1',
            area: ['380px', '180px'],
            shift: 2,
            content: $(".wl_info_alert")
        });
    });
    $(".swl_sbtn").click(function(){
        layer.closeAll();
    })
    //end 填写物流信息

	//选择取消原因弹窗
    var $cli = $(".cancel_cause ul li"),
        $span = $(".cancel_cause").children("span"),
    	$note = $span.children("a");
    $cli.click(function(){
        if($(this).hasClass("causeli")){
            $(this).removeClass("causeli");
        }else{
            $note.hide();
            $(this).addClass("causeli");
        }
    });
    $(".btn_cancel").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, //不显示关闭按钮
            skin: 'layerBtn2',
            area: ['480px', '280px'],
            shift: 2,
            btn: ['确 定', '取 消'],
            content: $(".cancel_operation_layer"),
            yes:function(index){
                if($(".causeli").length>0){
                    layer.close(index);
                }else{
                    $note.show();
                }
            }
        })
    })  
    //end 选择取消原因弹窗
    
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
        $sline.stop().animate({left:"580px"},1000);    
        if(!$contll.is(":animated")){
            $contll.stop().animate({left:"-="+$swidth},1000,function(){
                $contll.css({left:0}).children("ul:lt(1)").appendTo($contll);
            });
        }
    });
    //end 最近浏览

});