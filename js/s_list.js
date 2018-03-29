$(function(){
	$(window).resize(function(){
	    body_width();
	}); 
	//根据浏览器宽度
	body_width();
	function body_width(){
	    var $width = $(window).width();	
	    if ($width>1405) {
	    	$("body").addClass("width_1400").removeClass("width_1210").removeClass("width_990");
	    	left_dis = 1040;
	    	$(".browse_line").css({left:left_dis});
	    } else{
	    	if ($width<1405) {
	    		$("body").addClass("width_1210").removeClass("width_990").removeClass("width_1400");	
		    	left_dis = 850;
		    	$(".browse_line").css({left:left_dis});
	    		if ($width<1232.6) {
	    			$("body").addClass("width_990").removeClass("width_1210").removeClass("width_1400");
	    			left_dis = 630;
		    		$(".browse_line").css({left:left_dis});
	    		}
	    	}
	    }		
	}
	//end 根据浏览器宽度	

	//更多供应商
	var $gys_li = $(".slist_sxul").children("li");
	if ($("body").hasClass("width_1400")) {
		listgys(1248);
	} 
	if ($("body").hasClass("width_1210")) {
		listgys(1058);
	} 
	if ($("body").hasClass("width_990")) {
		listgys(838);
	} 			
	function listgys(num){
		var sumWidth = 0;
		$gys_li.each(function(){
			sumWidth += $(this).width()+50;
		});
		var $sxp_more = $(".sxp_more");
		if (sumWidth > num) {
			$sxp_more.show();			
		} else{
			$sxp_more.hide();
		}
		if (sumWidth > num && sumWidth < num*2) {
			$sxp_more.click(function(){
				var $cont = $(this).prev();
				if ($cont.hasClass("shet1")) {
					$cont.removeClass("shet1");
					$cont.scrollTop(0);
				} else{
					$cont.addClass("shet1");
				}				
			})				
		}
		if (sumWidth > num*2) {
			$sxp_more.click(function(){
				var $cont = $(this).prev();
				if ($cont.hasClass("shet2")) {
					$cont.removeClass("shet2");
					$cont.scrollTop(0);
				} else{
					$cont.addClass("shet2");
				}					
			})				
		}	
	}	
	//end 更多供应商
	
	//列表版和大图版切换
	var $slist_pbig = $(".slist_pbig"),
		$slist_plist = $(".slist_plist"),
		$slist_tabc = $(".slist_tabc").children("div");
    $slist_pbig.click(function(){
        $(this).addClass("spb_on");
        $slist_plist.removeClass("spl_on");
        $slist_tabc.hide();
        $slist_tabc.eq(0).show();
    });   
    $slist_plist.click(function(){
        $(this).addClass("spl_on");
        $slist_pbig.removeClass("spb_on");
        $slist_tabc.hide();
        $slist_tabc.eq(1).show();
    }); 	
	//end 列表版和大图版切换

    //最近浏览
    var $sbtn = $(".btn_chg");
    var $sul = $(".my_collection_content").children("ul");
    var $swidth = $(".my_collection_content").width();
    var $spone = 7;
    var $sttp = Math.ceil($sul.children("li").length/$spone);
    var $sline = $(".browse_line");
    var left_dis;
    $sul.width($swidth*$sttp);
    $sline.animate({left:left_dis},1000);
    $sbtn.click(function(){
        $sline.css({left:0});
        $sline.animate({left:left_dis},1000);    
        if(!$sul.is(":animated")){
            $sul.animate({left:"-="+$swidth},1000,function(){
                $sul.css({left:0}).children("li:lt(7)").appendTo($sul);
            });
        }
    });
    //end 最近浏览
    
    //飞入购物车js
    var $sp_btn = $(".shubtn"),
    	$hengbtn = $(".hengbtn"),
    	$hs_headerCart = $(".hs_headerCart");
    $sp_btn.bind('click',function(){
        var $tindex = $sp_btn.index(this),
        	dtimg = $(this).parent().parent().find("dt"),
        	flyElm = dtimg.clone().css('opacity', 0.75);
        flyCart(flyElm, dtimg);
    });  
    $hengbtn.bind('click',function(){
        var $tindex = $hengbtn.index(this),
        	dtimg = $(this).parent().parent().find(".heng_binfo"),
        	flyElm = dtimg.children("dt").clone().css('opacity', 0.75);
        flyCart(flyElm, dtimg);
    });  
    

    function flyCart(obj, pos)
    {
        $('body').append(obj);
        obj.css({
            'z-index': 9000,
            'display': 'block',
            'position': 'absolute',
            'top': pos.offset().top + 'px',
            'left': pos.offset().left + 'px',
            'width': pos.width() + 'px',
            'height': pos.height() + 'px'
        });
        obj.animate({
            top: $hs_headerCart.offset().top,
            left: $hs_headerCart.offset().left,
            width: 20,
            height: 20
        }, 'slow', function ()
        {
            obj.remove();
        });
    }
    //end 飞入购物车js   

	//请输入起定量      //根据程序去掉
//	var $sfsInput = $(".sfsInput_p input");	
//	$sfsInput.focus(function(){
//		focusInput($(this),$(this).next());
//	});
//	$sfsInput.next().click(function(){
//		clickText($sfsInput,$(this));
//	});	
//	$sfsInput.blur(function(){
//		blurInput($(this),$(this).next());
//	});
//	
//	//综合样式判定
//	function focusInput($input,$text){
//	    OnFocus($input);
//	    $text.hide();
//	}
//	function clickText($input,$text){
//	    OnFocus($input);
//	    $input.focus();
//	    $text.hide();
//	}
//	function blurInput($input,$text){
//		$input.removeClass("sea_blue");
//	    if($input.val() == ""){
//	        $text.show();
//	    }
//	}
//	function OnFocus(obj){
//	    obj.addClass("sea_blue");
//	}
//	function OnBlur(obj){
//	   obj.removeClass("sea_blue"); 
//	}
	//end 请输入起定量    	
	
  $(".slist_tt_dd a").each(function(){
        var subtext = subString($(this).text(),64,false);
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
    
	//仅显示有货,商户自营
	var $onlyshow = $(".onlyshow"),
		$comself = $(".comself");
	$onlyshow.bind({
		// click:function(){
			// $(this).find("i").toggleClass("filt_show");
			// return false;	
		// },
		mouseover:function(){
			if ($(this).find("i").hasClass("filt_show")) {
				$(this).addClass("oyhover");
			} else{
				$(this).find("i").addClass("oyhover_bg");
				$(this).addClass("oyhover");				
			}
		},
		mouseout:function(){
			$(this).find("i").removeClass("oyhover_bg");
			$(this).removeClass("oyhover");
		}
	})
	$comself.bind({
		// click:function(){
			// $(this).find("i").toggleClass("filt_show");
			// return false;	
		// },
		mouseover:function(){
			if ($(this).find("i").hasClass("filt_show")) {
				$(this).addClass("oyhover");
			} else{
				$(this).find("i").addClass("oyhover_bg");
				$(this).addClass("oyhover");				
			}
		},
		mouseout:function(){
			$(this).find("i").removeClass("oyhover_bg");
			$(this).removeClass("oyhover");
		}
	})	
	//end  仅显示有货,商户自营 



})