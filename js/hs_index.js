$(document).ready(function(){
	
	//选择社区弹窗
    layer.open({
        type: 1,
	    title: false,
	    closeBtn: 0,
	    skin: 'comClass',
	    area: ['490px', '378px'],
	    content: $('.community_layer')
    })
	//end 选择社区弹窗
	
	///////////////////////////判断选择社区
	var $combtn = $(".combtn"),
		$p3 = $("#p3"),
		$select_lg = $(".comselect_lg"),
		p3,
		select_lg;
		
	$combtn.click(function(){
		p3 = checkOther($p3,"请选择所属区域");
		select_lg = checkOther($select_lg,"请选择所在（或者周边）社区");
		if(p3&&select_lg){
			layer.closeAll();
			return true;
		}else{
			return false;
		}
	});
	
	/********焦点获得时**********/
	$p3.focus(function(){
		OnFocus($(this));
	});
	$select_lg.focus(function(){
		OnFocus($(this));
	});
	
	/********焦点失去时**********/
	$p3.change(function(){
		OnBlur($(this));
		p3 = checkOther($(this),"请选择所属区域");
	});	
	$select_lg.change(function(){
		OnBlur($(this));
		p3 = checkOther($(this),"请选择所属区域");
	});
	
	//判断其他不用正则的1
    function checkOther(obj,con){
        var $val = obj.val();
        var $wrong = obj.parent().parent().parent().next().find(".regp");
        var $right = obj.parent().next();
        if($val == "" || $val == "市、县级市、县" || $val == "请选择"){
            WrongColor($wrong,$right,obj);
            $wrong.show().html(con);
            return false;
        }else{
            RightColor($wrong,$right,obj);
            $wrong.html("&nbsp;");
            return true;
        } 
    }
    
    //综合样式判定
	function RightColor(obj,objs,objn){
		obj.removeClass("reg_wrong");
		objs.addClass("reg_right");
		objn.removeClass("reg_blue").removeClass("reg_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("reg_wrong");
		objs.removeClass("reg_right");
		objn.addClass("reg_red").removeClass("reg_blue");
	}
	function OnFocus(obj){
	    obj.addClass("reg_blue").removeClass("reg_red");
	}
	function OnBlur(obj){
	   obj.removeClass("reg_blue").removeClass("reg_red"); 
	}
	//去除空格  
	function Trim(str,is_global) {
	    var result;
	    result = str.replace(/(^\s+)|(\s+$)/g,"");
	    if(is_global.toLowerCase()=="g"){
	        result = result.replace(/\s/g,"");
	     }
	    return result;
	}
		
	///////////////////////////end 判断选择社区
	
	//浮动搜索栏
	var $f_search_wrap = $(".f_search_wrap");
 	$f_search_wrap.hide();
    $(window).scroll(function ()
    {
        if ($(this).scrollTop() > 1150)
        {
            $f_search_wrap.show();
        }
        if ($(this).scrollTop() <= 1150)
        {
            $f_search_wrap.hide();
        }
    });
	//end 浮动搜索栏
	
	//顶部广告通栏关闭
    var $ad_close = $(".ad_close");
    $ad_close.click(function(){
    	$(".top_ad_wrap").hide();
    })
    //顶部广告通栏关闭

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
	
	//索引目录鼠标经过显示隐藏
	var $cata_tit = $(".cata_tit").children("li"),
	$cata_single = $(".cata_cont").children("ul"),
	$cata_ad = $(".cata_ad");
	
	$cata_tit.hover(function(){
		$titIndex = $cata_tit.index(this);
		$eqnum = $titIndex + 1;
		$cata_single.eq($titIndex).show();
		$cata_ad.show();
		
		$cata_single.eq($titIndex).hover(function(){
			$(this).show();
			$cata_ad.show();
			$cata_tit.eq($titIndex).addClass("mgd_"+$eqnum).siblings("li").removeClass("mgd_"+$eqnum);
		},function(){
			$(this).hide();
			$cata_ad.hide();
			$cata_tit.eq($titIndex).removeClass("mgd_"+$eqnum);
		});
		$cata_ad.hover(function(){
			$(this).show();
			$cata_single.eq($titIndex).show();
			$cata_tit.eq($titIndex).addClass("mgd_"+$eqnum).siblings("li").removeClass("mgd_"+$eqnum);
		},function(){
			$cata_single.eq($titIndex).hide();
			$cata_ad.hide();
			$cata_tit.eq($titIndex).removeClass("mgd_"+$eqnum);
		});
	},function(){
		$cata_single.eq($titIndex).hide();
		$cata_ad.hide();
	});	
	//end 索引目录鼠标经过显示隐藏
	
	//社区主招募广告
	var $hbn_ad = $(".hbn_ad"),
		$hbn_a = $(".hbn_a");
	$hbn_ad.hover(function(){
		$hbn_a.stop(true,true).slideDown();
	},function(){
		$hbn_a.stop(true,true).slideUp();
	});
	//end 社区主招募广告
	
	//搜索下拉框
	var $sc = $(".search_sel"),
    $tp = $sc.find("span"),
    $cul = $sc.children("ul"),
    $cli = $cul.children("li"),
    $search_text = $(".search_text").children("input");
    $sc.hover(function(){
        $cul.show();
    },function(){
        $cul.hide();
    });
	$cli.click(function(){
        $tp.html($(this).html());
        $search_text.next().html("请输入"+$(this).html()+"名称");
   })
    // end 搜索下拉框
    
    //搜索框内提示文字的显示隐藏
    var $search_input = $(".search_text").find("input");
	$search_input.focus(function(){
		focusInput2($(this).next());
	});
	$search_input.next().click(function(){
		clickText2($search_input,$(this));
	});
	$search_input.blur(function(){
		blurInput2($(this),$(this).next());
	});
	function focusInput2($text){
	    $text.hide();
	}
	function clickText2($input,$text){
	    $input.focus();
	    $text.hide();
	}
	function blurInput2($input,$text){
	    if($input.val() == ""){
	        $text.show();
	    }
	} 
	if ($search_input.val() == "") {
	    $search_input.next().show();
	} else {
	    $search_input.next().hide();
	}	
	//end 搜索框内提示文字的显示隐藏  	
    
    
    $(".flt_right ul li a").each(function(){
		var subtext = subString($(this).text(),58,false);
		$(this).text(subtext);
	})
	function subString(str, len, hasDot) {
	    var newLength = 0;
	    var newStr = "";
	    var chineseRegex = /[^\x00-\xff]/g;
	    var singleChar = "";
	    var strLength = str.replace(chineseRegex, "**").length;
	    for (var i = 0; i < strLength; i++) {
	        singleChar = str.charAt(i).toString();
	        if (singleChar.match(chineseRegex) != null) {
	            newLength += 2;
	        }
	        else {
	            newLength++;
	        }
	        if (newLength > len) {
	            break;
	        }
	        newStr += singleChar;
	    }

	    if (hasDot && strLength > len) {
	        newStr += "...";
	    }
	    return newStr;
	}

})