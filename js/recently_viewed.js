
$(document).ready(function(){
   
    //最近浏览---换一换
    var $sbtn = $(".recently_viewed_a");//换一换按钮
    var $rl = $(".recently_viewed_list"),$rlul = $rl.children("ul"),$rwidth = $rlul.width();//找到列表前面的ul
    var $swidth = $rwidth*$rlul.length;
    $rl.width($swidth);
    doTab($sbtn,$rl,$swidth);
    function doTab(sbtn,sobj,swidth){
        sbtn.click(function(){
            if(!sobj.is(":animated")){
                sobj.animate({left:"-="+$rwidth},500,function(){
                    sobj.css({left:0}).children("ul:lt(1)").appendTo(sobj);
                });
            }
            return false;
        });
    }    
    //end 最近浏览---换一换
    
})