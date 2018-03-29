function xlist($input,$cont){
	var $searchText = $input,	//输入搜索关键字的文本框
	$searchList = $cont,		//显示含有关键字的搜索列表	
	$list = $searchList.find("li"),
	$lastIndex = $list.length - 1,	//最后一个索引值
	$currentIndex = 0;				//当前索引值
	
	$searchText.on("keyup click",function(e){
		if ($(this).val() == "") {
			$searchList.hide();
		} else{
			$searchList.show();
			if($searchList.is(":visible")){
				if(e.keyCode == 38){//键盘上箭头		
					if($currentIndex == 0){
						$currentIndex = $lastIndex;
					}else{
						$currentIndex--;
					}	
					var $val = $list.eq($currentIndex).text();
					$searchText.val($val);
					$list.eq($currentIndex).addClass("xlist_on").siblings("li").removeClass("xlist_on");					
				}
				if(e.keyCode == 40){//键盘下箭头
					if($currentIndex == $lastIndex){
						$currentIndex = 0;
					}else{
						$currentIndex++;
					}
					var $val = $list.eq($currentIndex).text();
					$searchText.val($val);
					$list.eq($currentIndex).addClass("xlist_on").siblings("li").removeClass("xlist_on");					
				}
			}else{
				$list.eq($currentIndex).addClass("xlist_on").siblings("li").removeClass("xlist_on");
			}			
		}
		e.stopPropagation();//组织
	});
	
	$list.click(function(){
		$currentIndex = $list.index(this);
		$list.eq($currentIndex).addClass("xlist_on").siblings("li").removeClass("xlist_on");
		$(this).parent().hide();
		$searchText.val($(this).children("a").html());
		$searchText.parent().find(".sshb_p").hide();
	})
	$list.hover(function(){
		$currentIndex = $list.index(this);
		$list.eq($currentIndex).addClass("xlist_on").siblings("li").removeClass("xlist_on");
	})
	
}





