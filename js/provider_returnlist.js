$(document).ready(function(){
	

    var $name = $(".vessel_name").children("input"),
    	$derive_btn = $(".derive_btn");
    $name.focus(function(){
        if($(this).val() == "输入退货单号或采购方账号"){
            $(this).val("");
        }
    });
    $name.blur(function(){
        if($(this).val() == ""){
            $(this).val("输入退货单号或采购方账号");
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
            content: "<div class='layer_war'><img src='images/common/lay3.png'>确认导出退货单列表？</div>"
        })

    });
    //确认退货弹窗
    var $agreebtn = $(".agreebtn");
        $agreebtn.click(function(){
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
    var $rejectbtn = $(".rejectbtn"),
        $reject_reason = $(".reject_reason"),
        $reasontext = $reject_reason.children("textarea");
        
        $rejectbtn.click(function(){
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
	
	$("body").on("click", "#laydate_clear", function () {
        start.min = '1900-01-01 00:00:00';
        end.min = '1900-01-01 00:00:00';
    })
    //end 时间设置
		
    $(".vessel_zt a").click(function(){
        $(this).addClass("vessel_zt_on").siblings("a").removeClass("vessel_zt_on");
    });

})