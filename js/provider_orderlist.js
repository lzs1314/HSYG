$(document).ready(function(){
	

    var $name = $(".vessel_name").children("input"),
    	$derive_btn = $(".derive_btn");
    $name.focus(function(){
        if($(this).val() == "输入订单号或采购方账号"){
            $(this).val("");
        }
    });
    $name.blur(function(){
        if($(this).val() == ""){
            $(this).val("输入订单号或采购方账号");
            $(this).css({color:"#909090"});
        }else{
            $(this).css({color:"#434343"});
        }
    });
    $name.keyup(function(){
        $(this).css({color:"#434343"});
    });
    $derive_btn.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['380px', '150px'],
            btn: ['确 定','取消'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>确认导出订单列表？</div>"
        })

    });

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
		
    $(".vessel_zt a").click(function(){
        $(this).addClass("vessel_zt_on").siblings("a").removeClass("vessel_zt_on");
    });


})