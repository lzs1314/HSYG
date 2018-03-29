$(document).ready(function(){
	$(window).resize(function(){
	    body_width();
	}); 
	//根据浏览器宽度
	body_width();
	function body_width(){
	    var $width = $(window).width();	
	    if ($width>1405) {
	    	$("body").addClass("width_1400").removeClass("width_1210").removeClass("width_990");
	    } else{
	    	if ($width<1405) {
	    		$("body").addClass("width_1210").removeClass("width_990").removeClass("width_1400");	
	    		if ($width<1232.6) {
	    			$("body").addClass("width_990").removeClass("width_1210").removeClass("width_1400");
	    		}
	    	}
	    }		
	}
	//end 根据浏览器宽度
	
	//根据分辨率调整居中
	var $wwht = $(window).height(),
		$error_div = $(".error_div");
	if ($wwht<716){
    	$error_div.addClass("padd20").removeClass("padd80").removeClass("padd140");
	}
	if (716<=$wwht && $wwht<866){
	    $error_div.addClass("padd80").removeClass("padd20").removeClass("padd140");
	}
	if (866<=$wwht){
	    $error_div.addClass("padd140").removeClass("padd20").removeClass("padd80");
	}
	//end 根据分辨率调整居中
});
