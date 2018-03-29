
$(document).ready(function(){
/***********************广大-共用js***********************/

	//顶部菜单显示隐藏
	var $gdplace_a = $(".gdplace_a"),
		$placeBox = $(".placeBox"),
		$mycenter = $(".mycenter"),
    	$cc_list = $(".cc_list"),
    	$phoneStore = $(".phoneStore"),
    	$phoneS = $(".phoneS");
		
		$gdplace_a.hover(function(){
		$gdplace_a.addClass("gdplace_a_on");
		$placeBox.show();
	},function(){
		$gdplace_a.removeClass("gdplace_a_on");
		$placeBox.hide();
	});

	$placeBox.hover(function(){
		$gdplace_a.addClass("gdplace_a_on");
		$placeBox.show();
	},function(e){

	});
	$placeBox.click(function(e){
		e.stopPropagation();
		$(document).click(function(){
			$gdplace_a.removeClass("gdplace_a_on");
			$placeBox.hide();
		});
	});
	
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
			$gdplace_a.removeClass("gdplace_a_on");
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
    	
    $mycenter.hover(function(){
        $index = $mycenter.index(this);
        $cc_list.eq($index).stop(true, true).slideDown();
    }, function(){
        $cc_list.eq($index).stop(true, true).slideUp();
    });
    
    $phoneStore.hover(function(){
        $index = $mycenter.index(this);
        $phoneS.eq($index).stop(true, true).slideDown();
    }, function(){
        $phoneS.eq($index).stop(true, true).slideUp();
    });
    //end 顶部菜单显示隐藏
    
/***********************end 广大-共用js***********************/   
})