$(document).ready(function(){

    var $tit = $(".com_select").children("p"),
        $come_pricing_div = $(".come_pricing").children("div"),
        $pricing_div = $(".pricing_div"),
        $topricing = $(".topricing"),
        $compile = $(".compile"),
        $repeal = $(".repeal"),
        $seek_in = $(".seek_in"),
        $inp_jj = $(".inp_jj");
        $inp_bj = $(".inp_bj"),
        $inp_jjtext = /^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/;
    //一键导出弹窗
    $(".derive").click(function(){ 
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['380px', '150px'],
            btn: ['确 定','取消'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>确认导出商品定价表？</div>"
        })

    });

    //一键设置公司指导价
    $(".setting_pri").click(function(){ 
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn1',
            area: ['380px', '150px'],
            btn: ['确 定'],
            content: "<div class='layer_war'><img src='images/common/lay1.png'>设置成功！</div>"
        })
    });
    //批发定价维护单个商品定价撤销弹窗
    $(".repeal").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['380px', '160px'],
            btn: ['确 定','取消'],
            content: "<p class='aI_tit'>撤消该商品定价规则后，该商品将按统一定价进行销售，确定要撤消吗？</p>"
        })
    })
    // 一键设置公司指导价小提示
    var $lindex;
    $(".setting_pri").hover(function(){
        var that = this;
        $lindex = layer.tips(
            '点击此按钮，可将当前页所有商品设置为公司指导价<br />',
             that,
             {tips: [3, '#f84f4f'], time: 10000}
         ); //在元素的事件回调体中，follow直接赋予this即可   
    },function(){
        layer.close($lindex);
    });
    //end 一键设置公司指导价小提示
    function Checkinp_bj(){
        var $inp_bjVal = $inp_bj.val();
        var $nextp = $(".wrb");
        $inp_bjVal = Trim($inp_bjVal,"g");
        if($inp_bjVal.length == 0){
            RightColor($nextp,$inp_bj);
            $nextp.html("");
            return true;
        }else if(!$inp_jjtext.test($inp_bjVal) || $inp_bjVal == "0" || $inp_bjVal == "0.0" || $inp_bjVal == "0.00"){
            WrongColor($nextp,$inp_bj);
            $nextp.html("定价错误，请重新定价");
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$inp_bj);
            return true;
        }        
    }
    //零售定价维护批量定价按钮弹窗
    $(".compile,.topricing").click(function(){
    	var thisa = $(this);
    	layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn',
            area: ['500px', ''],
            content: $('.retail_layer')
        })
       
        $(".ok").click(function(){
            if(Checkinp_bj()){
                    layer.closeAll();
                    layer.open({
                        type: 1,
                        title: false,
                        closeBtn: 1,
                        skin: 'layerBtn1',
                        area: ['380px', '150px'],
                        btn: ['确 定'],
                        content: "<div class='layer_lead'>您的申请已受理，正在处理中请耐心等待结果!</div>"
                    })
                    return true;
                }else{
                    return false;
                }
        });
        $(".ex").click(function(){
            layer.closeAll();
        });
        
    })

	

	

    //批量定价/单个定价转换
    $come_pricing_div.click(function(){
        if($(this).hasClass("not_pri")){
            $(".setting_pri").show();
        }else{
            $(".setting_pri").hide();
        }
        $(this).children().addClass("pricing").removeClass("ple");
        $(this).siblings("div").children().removeClass("pricing").addClass("ple");
       
        var $tti = $come_pricing_div.index(this);
        if($tti==0){
            $pricing_div.eq($tti).addClass("bor");
        }else{
            $pricing_div.eq($tti).removeClass("bor");
        }
        $pricing_div.eq($tti).show().siblings("div").hide();
         $(this).parent().show();
    });

    //订单状态（仿select）
    $tit.click(function(){
        var $ss = $tit.index(this);
        $(this).toggleClass("p_on");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function(){
            $tit.eq($ss).html($(this).html()).removeClass("p_on");
            $(this).parent().hide();
        });
    });
     $(document).bind("click",function(e){ 
        var target = $(e.target); 
        if(target.closest(".com_select").length == 0){ 
            $tit.removeClass("p_on");
            $(".empsel").hide(); 
        } 
    });
    $topricing.hover(function(){
        $(this).removeClass("topricing1").html("定价");
    },function(){
        $(this).addClass("topricing1").html("");     
    })
    $compile.hover(function(){
        $(this).removeClass("compile1").html("编辑");
    },function(){
        $(this).addClass("compile1").html("");     
    })
    $repeal.hover(function(){
        $(this).removeClass("repeal1").html("撤销");
    },function(){
        $(this).addClass("repeal1").html("");     
    })
    
    $(".layer_pri dd").click(function(){
        if($(this).children("i").hasClass("ired")){
            $(this).children("i").removeClass("ired");
        }else{
            $(this).children("i").addClass("ired");
        }
    })

    $(".company_pri").click(function(){
        if($(this).children("i").hasClass("ired")){
            $(this).children("i").removeClass("ired");
        }else{
            $(this).children("i").addClass("ired");
        }
    })

 //搜索框
    $seek_in.focus(function(){
        focusInput($(this),$(this).next());
    });
    $seek_in.next().click(function(){
        clickText($seek_in,$(this));
    });
    $seek_in.blur(function(){
        blurInput($(this),$(this).next());
    });

	/********焦点获得时**********/
    $inp_jj.focus(function(){ 
        OnFocus($(this));
    });
     $inp_bj.focus(function(){ 
        OnFocus($(this));
    });
    /********焦点失去时**********/
    $inp_jj.blur(function(){   
        Checkinp_jj();
    });
     $inp_bj.blur(function(){   
        Checkinp_bj();
    });

	//综合样式判定
   function focusInput($input,$text){
        $text.hide();
    }
    function clickText($input,$text){
        $input.focus();
        $text.hide();
    }
    function blurInput($input,$text){
        if($input.val() == ""){
            $text.show();
        }
    } //
    function RightColor(obj,objn){
        obj.removeClass("note_wrong1");
        objn.removeClass("b_blue").removeClass("b_red");
    }
    function WrongColor(obj,objn){
        obj.addClass("note_wrong1");
        objn.addClass("b_red").removeClass("b_blue");
    }
    function OnFocus(obj){
        obj.addClass("b_blue").removeClass("b_red");
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
    //超出字数隐藏
    var span = $(".td_fl");
    span.each(function(){
        var cpstr = $(this).html();
        if(cpstr.length>24){
            $(this).html(cpstr.substr(0,24));
        }
    })
    
});