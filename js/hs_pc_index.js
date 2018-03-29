$(document).ready(function(){
	//我的合商-猜你喜欢
    var $tab_cont = $(".guess_your_love"),
    $tab_cont_in = $(".your_all_dl"),
    $l_arrow = $(".afrlove"),
    $len = 3,
    $xwidth = $tab_cont.width();
    $tab_cont_in.width($xwidth*$len);
    $l_arrow.click(function(){
        if(!$tab_cont_in.is(":animated")){
            $tab_cont_in.animate({left:"-="+$xwidth},500,function(){
                $tab_cont_in.css({left:0}).children("div:first").appendTo($tab_cont_in);
            });    
        }
    })
    //end 我的合商-猜你喜欢
})