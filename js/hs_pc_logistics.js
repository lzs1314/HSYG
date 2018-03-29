$(document).ready(function(){
	//同一天的不同时间段的小圆点与文字齐平js
	var $hlog_i = $(".hlog_ul").find(".hlog_i");
	$hlog_i.each(function(){
		var $hlog_date = $(this).next();
		if ($hlog_date.html() == "&nbsp;") {
			$(this).css({"top":"20px"});
		}
	})
	//end 同一天的不同时间段的小圆点与文字齐平js
	
	//高亮显示最新信息js
	var $first_i = $(".hlog_ul").find(".hlog_i:first"),
		$first_text = $(".hlog_ul").find(".hlog_text:first");
	$first_i.css({"background":"#fff url(images/hs_pc_all/hlogicon.png) no-repeat 0px 22px","height":"35px","top":"0px"});
	$first_text.css({"font-weight":"bold"});
	//end 高亮显示最新信息js
	
	//去掉最开始一条信息的左侧边线
	var $last_i = $(".hlog_ul").find(".hlog_i:last");
	$last_i.css({"height":"35px"});
	//end 去掉最开始一条信息的左侧边线
	
	//物流投诉弹窗
	var $hlogTit_btn = $(".hlogTit_btn"),
		$textarea = $(".textarea_div").children("textarea"),
		textarea;
	$hlogTit_btn.click(function(){
		$(this).hide();
		$(this).next(".hlogTit_btn_jin").show();
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['550px', '255px'],
            btn: ['确 定','取消'],
            content: $(".hlog_layer"),
            yes:function(index){
            	textarea = checkArea($textarea);
            	if (textarea) {
            		layer.close(index);
            		return true;
            	} else{
            		return false;
            	}
            }
        })		
	})	
	$textarea.focus(function(){
		$(this).addClass("hlga_blue").removeClass("hlga_red");
		$(this).next().hide();
	})
	$textarea.next("span").click(function(){
		$(this).hide();
		$(this).prev("textarea").focus().addClass("hlga_blue").removeClass("hlga_red");
	})
	$textarea.blur(function(){
		textarea = checkArea($(this));
	})
	function checkArea(obj){
		var $val = obj.val(),
			$wrong = obj.parent().find(".hlga_p");
		$val = Trim($val,"g");
		if ($val == "") {
			obj.addClass("hlga_red").removeClass("hlga_blue");		
            $wrong.show().addClass("hlga_wrong").html("请输入投诉内容");
            obj.next().show();
            return false;
		} else{
			obj.removeClass("hlga_blue").removeClass("hlga_red");
			$wrong.removeClass("hlga_wrong").html("&nbsp;");
			obj.next().hide();
            return true;
		}
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
	//end 物流投诉弹窗
	
    //最近浏览
    var $sbtn = $(".btn_chg"),
        $contll = $(".my_collection_content");
        $sul = $contll.children("ul"),
        $swidth = $sul.width(),
        $sline = $(".browse_line"),
        $len = $sul.length;
    $contll.width($swidth*$len);
    $sline.animate({left:"580px"},1000);
    $sbtn.click(function(){
        $sline.css({left:0});
        $sline.stop().animate({left:"580px"},1000);    
        if(!$contll.is(":animated")){
            $contll.stop().animate({left:"-="+$swidth},1000,function(){
                $contll.css({left:0}).children("ul:lt(1)").appendTo($contll);
            });
        }
    });
    //end 最近浏览	

})