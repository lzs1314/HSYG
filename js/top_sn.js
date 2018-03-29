$(document).ready(function(){
	$(document).click(function(){
		$place_a.removeClass("placehover");
		$placeBox.hide();
	});
	//顶部网站导航
	var $place_a = $(".place_a"),
		$placeBox = $(".placeBox"),
		$sn_quick = $(".sn_quick"),
		$quiCont = $(".quiCont"),
		$sn_app = $(".sn_app"),
		$appCont = $(".appCont");
	$place_a.hover(function(){
		$place_a.addClass("placehover");
		$placeBox.show();
	},function(){
		$place_a.removeClass("placehover");
		$placeBox.hide();
	});

	$placeBox.hover(function(){
		$place_a.addClass("placehover");
		$placeBox.show();
	},function(e){

	});
	$placeBox.click(function(e){
		e.stopPropagation();
		$(document).click(function(){
			$place_a.removeClass("placehover");
			$placeBox.hide();
		});
	});

	$sn_quick.hover(function(){
		$quiCont.stop(true,true).slideDown(100);
	},function(){
		$quiCont.stop(true,true).slideUp(100);
	});
	$sn_app.hover(function(){
		$appCont.stop(true,true).slideDown(100);
	},function(){
		$appCont.stop(true,true).slideUp(100);
	})
	//end 顶部网站导航
	
	//更换社区
	var $pbbtn = $(".pbbtn"),
		$s3 = $("#s3"),
		$select_lg = $(".pbselect_lg"),
		s3,
		select_lg;
	$pbbtn.click(function(){
		s3 = checkOther($s3);
		select_lg = checkOther($select_lg);

		if(s3&&select_lg){
			$placeBox.hide();
			$place_a.removeClass("placehover");
			return true;
		}else{
			return false;
		}
	});
	$s3.change(function(){
		OnBlur($(this));
		s3 = checkOther($s3);
	});	
	$select_lg.change(function(){
		OnBlur($(this));
		select_lg = checkOther($select_lg);
	});
    function checkOther(obj,con){
        var $val = obj.val();
        if($val == "" || $val == "市、县级市、县" || $val == "请选择"){
            WrongColor(obj);
            return false;
        }else{
            return true;
        } 
    }
    //综合样式判定
	function WrongColor(obj){
		obj.addClass("hs_red").removeClass("hs_blue");
	}
	function OnBlur(obj){
	   obj.removeClass("hs_blue").removeClass("hs_red"); 
	}    
	//end 更换社区	
	
	
	
})