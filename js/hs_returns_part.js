$(document).ready(function(){
/**************************个人中心-申请退货--部分**************************************/
    var $yesno = $(".retGoods").find("li");
    $yesno.click(function(){
        $(this).addClass("cause_on").siblings("li").removeClass("cause_on");
    });
	//退货数量加减
    $(".operation_minus").click(function(){
        var $index = $(".operation_minus").index(this);
        var $num_text = $(".num_text").eq($index);
        var $val = parseInt($num_text.val());
        if($val>1){
            $num_text.val($val-1);  
        }
    })
    $(".operation_add").click(function(){
        var $index = $(".operation_add").index(this);
        var $num_text = $(".num_text").eq($index);
        var $val = parseInt($num_text.val());
        if($val<99){
            $num_text.val($val+1);  
        }
    })
	//end 退货数量加减
	
	
	//选择原因
	var $cause_a = $(".retCause > ul > li");
	$cause_a.click(function(){   
	    $(this).toggleClass("cause_on");
    }); 
	//end 选择原因
	
	//退货原因必填项，提交按钮提示
	var $cause_li = $(".retCause > ul>li");
	var $retBtn = $(".retBtn input");
    var i=3,$tipcont = $(".alert_noted").children("span"),timer;
    function djs(){
        i--;
        if(i>0){
            $tipcont.html(i);
        }
    }
    $retBtn.click(function(){
        if(!$cause_li.hasClass("cause_on") || !$yesno.hasClass("cause_on")){
            //申请退货正在处理，请耐心等待弹窗
            layer.open({
                type: 1,
                title: false,
                closeBtn: 1, 
                area: ['380px', '150px'],
                shift: 2,
                skin: 'layerBtn2',
                btn: ['确 定', '取 消'],
                content: "<div class='alert_noted'>请选择退货原因或选择是否收到货！</div>"
            })
        }else{
           clearInterval(timer);
            timer = window.setInterval(djs,1000)
            layer.open({
                type: 1,
                title: false,
                closeBtn: 1, 
                area: ['380px', '150px'],
                shift: 2,
                skin: 'layerBtn2',
                btn: ['确 定', '取 消'],
                time:3000,
                content: $(".alert_noted"),
                success:function(){
                    $tipcont.html(3);
                    i=3;
                }
            })
            //申请退货正在处理，请耐心等待弹窗 
        }
    }); 
    //end 退货原因必填项，提交按钮提示

	
	
/**************************end 个人中心-申请退货--部分**************************************/

})