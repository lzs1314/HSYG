$(document).ready(function(){	
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
	
	//s鼠标移动到全部商品分类上面，显示隐藏
	var $nav_cateall = $(".nav_cateall"),
		$list_cata = $(".list_cata_wrap");
	$nav_cateall.mouseenter(function(){
		$list_cata.show();
	});
	$nav_cateall.mouseleave(function(){
		$list_cata.hide();
	
	});
	$list_cata.mouseenter(function(){
		$(this).show();
	});
	$list_cata.mouseleave(function(){
		$(this).hide();
	});
	//end  s鼠标移动到全部商品分类上面，显示隐藏
	
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
})

/***************************************表单验证***************************************/
	
//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
function checkReg(obj,con1,con2,preg){
    var $val = obj.val();
    var $wrong = obj.parent().parent().parent().next().find("p");
    var $right = obj.parent().next();
    $val = Trim($val,"g");
    if ($val == "") {
    	WrongColor($wrong,$right,obj);
        $wrong.show().html(con1);
        return false;
    } else{
    	if(!preg.test($val)){
            WrongColor($wrong,$right,obj);
            $wrong.show().html(con2);
            return false;
        }else{
        	RightColor($wrong,$right,obj);
            $wrong.html("&nbsp;");
            return true;
        }    
    }
}

//综合样式判定
function RightColor(obj,objs,objn){
	obj.removeClass("apy_wrong");
	objs.addClass("apy_right");
	objn.removeClass("apy_blue").removeClass("apy_red");
}
function WrongColor(obj,objs,objn){
	obj.addClass("apy_wrong");
	objs.removeClass("apy_right");
	objn.addClass("apy_red").removeClass("apy_blue");
}
function focusInput($input,$text){
    OnFocus($input);
    $text.hide();
}
function clickText($input,$text){
    OnFocus($input);
    $input.focus();
    $text.hide();
}
function blurInput($input,$text){
    if($input.val() == ""){
        $text.show();
    }
}
function OnFocus(obj){
    obj.addClass("apy_blue").removeClass("apy_red");
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

/***************************************end 表单验证***************************************/