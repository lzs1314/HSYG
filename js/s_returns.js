$(document).ready(function(){
/***********************我的商户-申请退货***********************/
	//选择退货原因
	var $sth_cause_a = $(".sth_cause li a");
	$sth_cause_a.click(function(){
		$(".sth_cause").find("a").removeClass("sth_cause_on");
		$(this).addClass("sth_cause_on");
	});	
	//end 选择退货原因

    //倒计时
    var i=3,$tipcont = $(".alert_noted").children("span"),timer;
    function djs(){
        i--;
        if(i>0){
            $tipcont.html(i);
        }
    }
    //退货原因必填项，提交按钮提示
    var $sthBtn = $(".sthBtn");
    $sthBtn.click(function(){
        if($sth_cause_a.hasClass("sth_cause_on")){
            //申请退货正在处理，请耐心等待弹窗
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
        }else{
            layer.open({
                type: 1,
                title: false,
                closeBtn: 1, 
                area: ['380px', '150px'],
                shift: 2,
                skin: 'layerBtn2',
                btn: ['确 定', '取 消'],
                content: "<div class='alert_noted'>请选择退货原因！</div>"
            })
        }
    }); 
    //end 退货原因必填项，提交按钮提示


	//加减
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
        if($val<500){
            $num_text.val($val+1);  
        }
    })
    //输入不符合标准数字光标离开文本框数字默认回商品数量
    var $num_text = $(".num_text");
    regnum = /^[1-9]\d{0,5}$/;  //正整数正则
    function CheckNumtext(obj){
        var $num_textVal = obj.val();
        $num_textVal = Trim($num_textVal,"g");
        if(!regnum.test($num_textVal)){
            obj.val("200");  
        }else{
            return true;          
        }
    }
    //去除空格  
    function Trim(str,is_global) {
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g,"");
        if(is_global.toLowerCase()=="g"){
            result = result.replace(/\s/g,"");
         }
        return result;
    }  

    $num_text.blur(function(){
        CheckNumtext($(this));
    }); 
    //end 加减



/***********************end 我的商户-申请退货***********************/

})