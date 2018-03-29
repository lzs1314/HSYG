$(document).ready(function(){
    //输入商品名称或商品编号进行搜索
    var $infomaInput = $(".infomaInput");
    $infomaInput.focus(function(){
        if($(this).val() == "输入商品名称进行搜索"){
            $(this).val("");
        }
    });
    $infomaInput.blur(function(){
        if($(this).val() == ""){
            $(this).val("输入商品名称进行搜索");
        }
    });
    //end 输入商品名称或商品编号进行搜索

    //表格奇偶行变色
    $(".stn_table .tr:even").addClass("stn_td2");
    $(".stn_table .tr:odd").addClass("stn_td1"); 
    $(".stn_table tr:first").addClass("stn_th").removeClass("stn_td1");
    $(".snorms_table tr").removeClass("stn_td2").removeClass("stn_td1");
    //end 表格奇偶行变色
    
    //规格表格边框线
    $(".snorms_table").each(function(){
        $(this).find("tr:first td").css({"border-top":"0px"});
    })
    $(".snorms_table tr").each(function(){
        $(this).children("td:first").css({"border-left":"0px"});
    }) 
    //end 规格表格边框线
    
    //显示多规格
    var $stn_norms = $(".stn_norms");
    $stn_norms.hover(function(){
        if($(this).next().is(":hidden")){
            $(this).html("显示多规格");
        }
    },function(){
        if($(this).next().is(":hidden")){
            $(this).html("<img src='images/sellerCenter/stn_norms2.png' />");
        }else{
            $(this).html("<img src='images/sellerCenter/stn_norms1.png' />");
        }
    })
    //footer位置
    function inHeight(){
        var $footHeight = $(".s_footer_wrap").height(),
        $winHeight = $(window).height() - $footHeight,
            $mg_mainHeight = $(".mg_main").height(),
            $navHeight = $(".mg_nav_bg").height(),
            $heHeight = $mg_mainHeight + $navHeight + 50,
            $rightHeight = $(".mg_content").height();
        if ($winHeight > $heHeight) {
            $(".s_footer_wrap").css({"position":"absolute","bottom":0});
        }else{
            $(".mg_content").height("auto");
            $(".s_footer_wrap").css("position","");
        } 
    }
    //end footer位置
    var $rightHeight;
    var $winHeight = $(window).height() - 412;
    flushHeight();
    function flushHeight(){
        if ($winHeight > $rightHeight) {
            var addHeight = $winHeight - $rightHeight;
            $(".mg_main").height($rightHeight + addHeight);
        }else{
            $(".mg_main").height("auto");
        }
    }
    function rightHeight(){
        $stn_norms.click(function(){
            var $trIndex = $(this).parents("tr").index();
            var $trTotal = $(this).parents("table").find(".tr").length;
            var $minusHeight = 60*($trTotal - $trIndex + 1) - 12; 
            var $snorms_div = $(this).next();
            var $sHeight = $snorms_div.height();
            $(".snorms_div").stop(true,false).slideUp(200);
            $(".snorms_div").parent().removeClass("zidex2");
            inHeight()
            if($snorms_div.is(":hidden")){
                $(".mg_main").height("auto");
                if($sHeight > $minusHeight){
                $(".mg_main").height(($sHeight+$(this).offset().top))   
                }
                $snorms_div.stop(true,false).slideDown(200);
                $snorms_div.parent().addClass("zidex2");
                $(this).html("<img src='images/sellerCenter/stn_norms1.png' />");
                inHeight();
            }else{
                
                $(".mg_main").height("auto");
                $snorms_div.stop(true,false).slideUp(200);
                $snorms_div.parent().removeClass("zidex2");
                $(this).html("<img src='images/sellerCenter/stn_norms2.png' />");
                inHeight();
            }
            return false;
        })
    }
    //end 显示多规格
    //延迟1秒
    setTimeout(function () {
        $rightHeight = $(".mg_main").height();
        flushHeight();
        rightHeight();
    }, 1000);
    //end 延迟1秒
    //还原商品弹窗
    $(".restore").click(function (){
        if($(this).parents().hasClass("snorms_div")){
            if($(this).parent().parent().siblings().length > 0){
                $(this).parent().parent().remove();
            }else{
                var newp = $('<p class="stn_line">—</p>');
                $(this).parent().parent().parent().parent().parent().parent().text("").append(newp);
                $(this).parent().parent().parent().parent().parent().remove();
                
            }
        }else{
            $(this).parent().parent().remove();
        }
    })
    //end 还原商品弹窗
    //彻底删除弹窗
    $(".thor_del").click(function (){
        var $that = $(this);
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '150px'],
            shift: 2,
            skin: 'layerBtn2',
            btn: ['确 定', '取 消'],
            content: "<div class='layer_de'>您确定要把该商品彻底删除么，删除后此商品将永久消失，请谨慎操作！</div>",
            yes:function(index){
                if($that.parents().hasClass("snorms_div")){
                    if($that.parent().parent().siblings().length > 0){
                        $that.parent().parent().remove();
                        layer.close(index);
                    }else{
                        var newp = $('<p class="stn_line">—</p>');
                        $that.parent().parent().parent().parent().parent().parent().text("").append(newp);
                        $that.parent().parent().parent().parent().parent().remove();
                        layer.close(index);
                    }
                }else{
                    $that.parent().parent().remove();
                    layer.close(index);
                } 
            }
        })   
        
    })
    //end 彻底删除弹窗
    
    //去除空格  
    function Trim(str,is_global) {
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g,"");
        if(is_global.toLowerCase()=="g"){
            result = result.replace(/\s/g,"");
         }
        return result;
    }       
    
    //点击零售（批发）价弹出改价弹窗


})