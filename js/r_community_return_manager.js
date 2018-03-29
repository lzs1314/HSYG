$(document).ready(function(){
	$cfbtn = $(".cfbtn"),
    $start = $("#start"),
    $end = $("#end"),
    $derive_btn = $(".derive_btn"),
    $name = $(".vessel_name").children("input");

    $start.focus(function(){
        focusInput($(this));
    });
    $start.next().click(function(){
        clickText($start,$(this));
        laydate(start);
    
    });
    $end.focus(function(){
        focusInput($(this));
    });
    $end.next().click(function(){
        clickText($end,$(this));
        laydate(end);
    });
    $start.blur(function(){
        OnBlur($(this));
    });
    $end.blur(function(){
        OnBlur($(this));
    });

    $name.focus(function(){
         OnFocus($name);
        if($(this).val() == "输入退货单号或采购方账号"){
            $(this).val("");
        }
    });
    $name.blur(function(){
        if($(this).val() == ""){
             OnBlur($(this));
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
    $cfbtn.click(function(){
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

 //时间设置
    laydate.skin('danlan');
    var start = {
        elem: '#start',
        format: 'YYYY-MM-DD', //日期格式
        min: '1900-01-01 00:00:00', //最小日期
        max: '2099-12-31 23:59:59', //最大日期
        start: '2014-6-15 23:00:00',  //开始日期
        istime: false,
        istoday: false,
        choose: function(datas){
            end.min = datas; //开始日选好后，重置结束日的最小日期
            end.start = datas //将结束日的初始值设定为开始日
        }
    };
    var end = {
        elem: '#end',
        format: 'YYYY-MM-DD', //日期格式
        min: '1900-01-01 00:00:00', //最小日期
        max: '2099-12-31 23:59:59', //最大日期
        start: '2014-6-15 23:00:00',  //开始日期
        istime: false,
        istoday: false,
        choose: function(datas){
            start.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };
    laydate(start);
    laydate(end);
    //end 时间设置
    
    var $reject_reason = $(".reject_reason"),
    $reasontext = $reject_reason.children("textarea");
    $(".dobtn").click(function(){
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
    $(".vessel_zt a").click(function(){
        $(this).addClass("vessel_zt_on").siblings().removeClass("vessel_zt_on");

    })
    function focusInput($input){
        OnFocus($input);
    }
    function clickText($input){
        OnFocus($input);
        $input.focus();
    }
    function blurInput($input){
        if($input.val() == ""){
        }
    }
    function OnFocus(obj){
        obj.addClass("aI_blue").removeClass("aI_red");
    }
    function OnBlur(obj){
       obj.removeClass("aI_blue").removeClass("aI_red"); 
    }
    //订单状态（仿select）
    var $tit = $(".order_sel").children("p");
    $tit.click(function(){
        var $ss = $tit.index(this);
        $(this).toggleClass("order_p1");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function(){
            $tit.eq($ss).html($(this).html()).removeClass("order_p1");
            $(this).parent().hide();
        });
    });
    $(document).bind("click",function(e){ 
        var target = $(e.target); 
        if(target.closest(".order_sel").length == 0){ 
        $tit.removeClass("order_p1");
        $(".order_ul").hide(); 
        } 
    });
   

})