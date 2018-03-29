$(document).ready(function(){
	
	//显示隐藏资金余额
	$eye = $(".fe_balance").find("em");
    $cont = $(".fe_balance").find("span");
    $eye.click(function(){
        $cont.html("74878445");
        $(this).hide();
    });
    //end 显示隐藏资金余额

})