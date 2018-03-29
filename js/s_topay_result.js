$(document).ready(function(){
    //商户版-最近浏览
    var $sbtn = $(".btn_chg");
    var $sul = $(".my_collection_content").children("ul");
    var $swidth = $(".my_collection_content").width();
    var $spone = 7;
    var $sttp = Math.ceil($sul.children("li").length/$spone);
    var $sline = $(".browse_line");
    $sul.width($swidth*$sttp);
    $sline.animate({left:"840px"},1000);
    $sbtn.click(function(){
        $sline.css({left:0});
        $sline.animate({left:"840px"},1000);    
        if(!$sul.is(":animated")){
            $sul.animate({left:"-="+$swidth},1000,function(){
                $sul.css({left:0}).children("li:lt(7)").appendTo($sul);
            });
        }
    });
    //end 商户版-最近浏览

})