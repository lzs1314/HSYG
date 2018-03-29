$(document).ready(function(){
/***********************合商-首页CSS***********************/

	
    //导航下分类切换
    var $all_catalog = $(".all_catalog").children("li"),$detail_catalog = $(".catalog_cont").children("div");
    $all_catalog.hover(function(){
        $fdindex = $all_catalog.index(this);
        $eqnum = $fdindex+1;
        $detail_catalog.eq($fdindex).show();
        $detail_catalog.eq($fdindex).hover(function(){
            $(this).show();
            $all_catalog.eq($fdindex).addClass("mgd_"+$eqnum).siblings("li").removeClass("mgd_"+$eqnum);
        },function(){
            $(this).hide();
            $all_catalog.eq($fdindex).removeClass("mgd_"+$eqnum);
        });
    },function(){
        $detail_catalog.eq($fdindex).hide();
    });
    //end 索引目录鼠标经过显示隐藏
    
    //入驻商家、企业排行、分类排行栏目去掉最后一条分割线
    var $shpf_li = $(".shpf_ul").find("li:last-child");
    $shpf_li.css({"border-bottom":"0"});
    //end 入驻商家、企业排行、分类排行栏目去掉最后一条分割线

    	
    //搜索框智能提示上下移动效果
//  xlist($(".search_text > input"),$(".hs_search > .search_list"));
//  xlist($(".f_searchText"),$(".f_search_list"));
//	$(document).click(function(){
//		if($(".hs_search > .search_list").css('display')=='block'){
//			$(".hs_search > .search_list").hide();
//		}
//		if($(".f_search_list").css('display')=='block'){
//          $(".f_search_list").hide();
//      }
//	})
	//end 搜索框智能提示上下移动效果






/***********************end 合商-首页CSS***********************/

})