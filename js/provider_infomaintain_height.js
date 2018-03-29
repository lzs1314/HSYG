
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

    var $rightHeight;
    var $winHeight = $(window).height() - 412;
    flushHeight();
    function flushHeight(){
        if ($winHeight > $rightHeight) {
            var addHeight = $winHeight - $rightHeight;
            $(".prov_cont").height($rightHeight + addHeight);
        }else{
            $(".prov_cont").height("auto");
        }
    }
    function rightHeight(){
        $stn_norms.unbind('click').click(function(){
            var $trIndex = $(this).parents("tr").index();
            var $trTotal = $(this).parents("table").find(".tr").length;
            var $minusHeight = 70*($trTotal - $trIndex + 1) + 88; 
            var $snorms_div = $(this).next();
            var $sHeight = $snorms_div.height();
            $(".snorms_div").stop(true,false).slideUp(200);
            $(".snorms_div").parent().removeClass("zidex2");
            if($snorms_div.is(":hidden")){
                $(".prov_cont").height("auto");
                if($sHeight > $minusHeight){
                    $(".prov_cont").height(($sHeight+$(this).offset().top))   
                }
                
                $snorms_div.stop(true,false).slideDown(200);
                $snorms_div.parent().addClass("zidex2");
                $(this).html("<img src='images/sellerCenter/stn_norms1.png' />");
            }else{
                $(".prov_cont").height("auto");
                $snorms_div.stop(true,false).slideUp(200);
                $snorms_div.parent().removeClass("zidex2");
                $(this).html("<img src='images/sellerCenter/stn_norms2.png' />");
            }
            return false;
        })
    }
    //end 显示多规格
     //延迟1秒
        
        
