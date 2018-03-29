$(document).ready(function(){
	
	//浏览商品大图
    var $bigimg_div = $(".bigimg_div").children("img");
    var $smimg_ul = $(".smimg_ul").children("li");
    var $pindex;
    $smimg_ul.hover(function(){
        $pindex = $smimg_ul.index(this);
        $bigimg_div.eq($pindex).show().siblings("img").hide();
    });
    $smimg_ul.click(function(){
        $(this).addClass("smspeli_c").siblings("li").removeClass("smspeli_c");
    });
    //end 浏览商品大图

})