$(document).ready(function(){
    //订单状态（仿select）
    var $tit = $(".com_select").children("p"),
        $compile = $(".compile");
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
     $compile.hover(function(){
        $(this).removeClass("compile1").html("编辑");
    },function(){
        $(this).addClass("compile1").html("");     
    })

	//零售区间定价编辑弹窗
    /********焦点获得时**********/
    $percent = $(".percent");
    var $input_pertext = /^[0-9]+(.[0-9]{1,2})?$/;
    $percent.focus(function(){ 
        OnFocus($(this));
    });
   
    $(".layer_pri dd").click(function(){
        if(!$(this).parent("dl").hasClass("pri_bai")){
            $(".wro_no").removeClass("note_wrong1").html("");
            $(".percent").removeClass("b_red");
        }
        $(this).children("i").addClass("ired").parent().parent().siblings().find("i").removeClass("ired");
        $(".set").children("p").removeClass("note_wrong1");
        $(".set").children("p").html("");
     })
    /********焦点失去时**********/
    $percent.blur(function(){   
        Checkinp_per();
    });
    $(".compile").click(function(){
		layer.open({
	        type: 1,
	        title: false,
	        closeBtn: 1,
	        skin: 'layerBtn2',
	        area: ['480px', ''],
	        content: $('.up_div')
	    })
        $(".ok").click(function(){
            if($(".layer_pri dd").children("i").hasClass("ired")){
                $(".set").children("p").removeClass("note_wrong1");
                $(".set").children("p").html("");
                if($(".pri_bai i").hasClass("ired")){
                    if(Checkinp_per()){
                        layer.closeAll();
                        layer.open({
                            type: 1,
                            title: false,
                            closeBtn: 1,
                            skin: 'layerBtn1',
                            area: ['380px', '150px'],
                            btn: ['确 定'],
                            content: "<div class='layer_suc'><img src='images/common/lay1.png'>提交成功!</div>"
                        })
                    }
                }else{ 
                    layer.closeAll();
                    layer.open({
                            type: 1,
                            title: false,
                            closeBtn: 1,
                            skin: 'layerBtn1',
                            area: ['380px', '150px'],
                            btn: ['确 定'],
                            content: "<div class='layer_suc'><img src='images/common/lay1.png'>提交成功!</div>"
                        })
                }

                return true;
            }else{
                $(".set").children("p").addClass("note_wrong1");
                $(".set").children("p").html("请选择一种加价方式");
                return false;
            }
            
        })
        $(".ex").click(function(){
            layer.closeAll();
        })
	})
    function Checkinp_per(){
        var $percentVal = $percent.val();
        var $nextp = $percent.next().next();
        $percentVal = Trim($percentVal,"g");
        if($percentVal.length == 0){
            WrongColor($nextp,$percent);
            $nextp.html("请输入对该商品的定价");
            return false;
        }else if(!$input_pertext.test($percentVal) || $percentVal == "0" || $percentVal == "0.0" || $percentVal == "0.00"){
            WrongColor($nextp,$percent);
            $nextp.html("请输入正确的商品的定价");
            return false;
        }else{
            $nextp.html("&nbsp;");
            RightColor($nextp,$percent);
            return true;
        }        
    }
   
	//综合样式判定
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
});