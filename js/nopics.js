$(document).ready(function(){
    var $imgs = $("img");
	$imgs.each(function(){
	    if($(this).attr("src") == ""){
	    	$(this).attr("src","./images/common/nopics.jpg");
	    }   
	});
});