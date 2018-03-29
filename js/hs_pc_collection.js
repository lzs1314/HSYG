 $(document).ready(function(){
 	
    //最近浏览
    var $sbtn = $(".btn_chg"),
        $contll = $(".my_collection_content");
        $sul = $contll.children("ul"),
        $swidth = $sul.width(),
        $sline = $(".browse_line"),
        $len = $sul.length;
    $contll.width($swidth*$len);
    $sline.animate({left:"580px"},1000);
    $sbtn.click(function(){
        $sline.css({left:0});
        $sline.stop().animate({left:"580px"},1000);    
        if(!$contll.is(":animated")){
            $contll.stop().animate({left:"-="+$swidth},1000,function(){
                $contll.css({left:0}).children("ul:lt(1)").appendTo($contll);
            });
        }
    });
    //end 最近浏览

 })   