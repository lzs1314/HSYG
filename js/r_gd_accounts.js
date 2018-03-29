$(document).ready(function(){
	$cfbtn = $(".cfbtn"),
    $start = $("#start"),
    $end = $("#end"),
    $derive_btn = $(".derive_btn"),
    $name = $(".vessel_name").children("input"),
    $order_txt = $(".order_txt"),  
    $intext = /[zz][0-9]{11}/;

    $start.focus(function(){
        focusInput($(this));
    });
   
    $end.focus(function(){
        focusInput($(this));
    });
    
    $start.blur(function(){
        OnBlur($(this));
    });
    $end.blur(function(){
        OnBlur($(this));
    });
    $order_txt.focus(function(){
        OnFocus2($(this));
    });
   
    $order_txt.blur(function(){         //快递单号
        Checkorder();
    });
    function Checkorder(){
        if($order_txt.val() == ""){
            $order_txt.addClass("b_red").removeClass("b_blue");
            $(".recp").show().html("请录入密码");
            return false;
        }else{
            $order_txt.removeClass("b_blue").removeClass("b_red");
            $(".recp").hide();
            return true;
        }
    }
     $name.focus(function(){
         OnFocus($name);
        if($(this).val() == "请录入单据编号"){
            $(this).val("");
        }
    });
    $name.blur(function(){
        if($(this).val() == ""){
            OnBlur($(this));
            $(this).val("请录入单据编号");
            $(this).css({color:"#909090"});
        }else if(!$intext.test($(this).val())){
            $(this).removeClass("b_blue").addClass("b_red"); 
        }else{
            OnBlur($(this));
            $(this).css({color:"#434343"});
        }
    });
    $name.keyup(function(){
        $(this).css({color:"#434343"});
    });
    
    $name.keyup(function(){
        $(this).css({color:"#434343"});
    });
  
   //录入密码弹窗
    var $reject_reason = $(".reject_reason");
    layer.open({
        type: 1,
        title: false,
        closeBtn: 1,
        skin: 'layerBtn1',
        area: ['380px','140px'],
        btn: ['确 定'],
        content: $reject_reason,
        yes:function(index){
            if(Checkorder()){
                layer.close(index);
            }
        }
    })
    $cfbtn.click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['380px', '150px'],
            btn: ['确 定','取消'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>请确认同意该转账申请！</div>",
            yes:function(index){
                layer.close(index);
                layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 1,
                    skin: 'layerBtn2',
                    area: ['380px', '150px'],
                    btn: ['去充值','取消'],
                    content: "<div class='wrong_er'>您的转账金额大于可用金额，请先充值！</div>"
                })
            }
        })

    });

    $(".dobtn").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['380px', '150px'],
            btn: ['确 定','取消'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>请确认驳回该转账申请！</div>"
            
        })
    });
  
 //时间设置
    laydate.skin('danlan');
    var start = {
        elem: '#start',
        format: 'YYYY-MM-DD', //日期格式
        min: '1900-01-01 00:00:00', //最小日期
        max: '2099-12-31 23:59:59', //最大日期
        start: laydate.now(),  //开始日期
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
        start: laydate.now(),  //开始日期
        istime: false,
        istoday: false,
        choose: function(datas){
            start.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };
    laydate(start);
    laydate(end);
	$("body").on("click", "#laydate_clear", function () {
        start.min = '1900-01-01';
        if($("#start").val() != ""){
            end.min = $("#start").val();
            start.max = $("#end").val();
        }else{
            end.min = '1900-01-01';
        }
        if($("#end").val() != ""){
            start.max = $("#end").val();
        }else{
            start.min = '1900-01-01';
        }
    })

    //end 时间设置
  
    function focusInput($input){
        OnFocus($input);
    }
    function OnFocus(obj){
        obj.addClass("b_blue").removeClass("b_red");
    }
    function OnFocus2(obj){
        obj.addClass("b_blue").removeClass("b_red");
    }
    function OnBlur(obj){
       obj.removeClass("b_blue").removeClass("b_red"); 
    }

})