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

	//浏览商品大图
    var $bigimg_div = $(".bigimg_div").children("img");
    var $smimg_ul = $(".smimg_ul").children("li");
    var $pindex;
    $smimg_ul.hover(function(){
        $pindex = $smimg_ul.index(this);
        $bigimg_div.eq($pindex).show().siblings("img").hide();
        $(this).addClass("smspeli_c").siblings("li").removeClass("smspeli_c");
    });
    //end 浏览商品大图
    
    //添加收藏
    var $span_ed = $(".span_ed");
    $span_ed.click(function(){
        $span_ed.toggleClass("span_edibag");
    })
    //end 添加收藏

	//点击选择规格/选择颜色
//    $div_p = $(".div_p p");
//    $div_p.click(function(){
//        $(this).addClass("sel_on").siblings("p").removeClass("sel_on");
//    });
    //end 点击选择规格/选择颜色
    
	//数量加减动画效果
	var $quanInput = $(".quanInput"),
		$subBtn = $(".subBtn"),//减
		$addBtn = $(".addBtn");//加
	var nReg = /^[1-9]\d*$/;
    $addBtn.click(function(){    
    	var n=$(this).prev().val();
    	var num=parseInt(n)+1;
		if(num>999){
			$(this).prev().val(1);
			return false;
		}
		$(this).prev().val(num);
    }) 
    $subBtn.click(function(){
    	var n=$(this).next().val();
    	var num=parseInt(n)-1;
        if(num==0){
			return false;
		}
        $(this).next().val(num);
    })
    $quanInput.blur(function(){
    	var n=$(this).val();
    	if (!nReg.test(n)) {
    		$(this).val(1);
    		return false;
    	}
    })
	//end 数量加减动画效果	 
	
    //飞入购物车js
    var numReg = /^[0-9]*$/;
    var $sp_btn = $(".con_j_cart");
    $sp_btn.bind('click',function(){
        var img = $(".cont_bigimg_select>.bigimg_div");
        var flyElm = img.clone().css('opacity', 0.75);
        if ($(".detail_num").val() > 0 && numReg.test($(".detail_num").val())) {
	        flyCart(flyElm, img);
	    }
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
            top: $('.hs_headerCart,.hs_headCart,.i_shopCart').offset().top,
            left: $('.hs_headerCart,.hs_headCart,.i_shopCart').offset().left,
            width: 20,
            height: 20
        }, 'slow', function ()
        {
            obj.remove();
        });
    }
    //end 飞入购物车js	

	//看了又看------需要异步加载，需注释
    //var $abtn = $(".cont_again_p");
    //var $acont = $(".again_contdiv").children("ul");

    //$abtn.click(function(){
    //   	$acont.stop(false,true).animate({top:"-=267px"},500,function(){
    //        $acont.css({top:0}).children("li:lt(2)").appendTo($acont);
    //    });
    //});
    //end 看了又看

    //商品介绍与商品评价切换js
    var $tt_a = $('.cont_goods_tt').children("a"); 
    var $cont_single = $(".cont_goods_cont").children(".cont_single");
    $tt_a.click(function(){
        $(this).addClass("cont_cur").siblings("a").removeClass("cont_cur");
        var $tt = $(this);
        var $cont = $tt.index();
        $cont_single.css('display','none'); 
        $cont_single.eq($cont).css('display','block');
    })
    //end 商品介绍与商品评价切换js
    
    //滚动页面时出现的商品介绍评价栏
	var navH1 = 740;
    $(window).scroll(function(){
        var scroH1 = $(this).scrollTop();
        var $ttcartbtn = $(".cont_goods_tt").children(".detail_cartbtn");
        if(scroH1 > navH1){
        	$(".cont_goods_tt").addClass("cont_goods_tt1");
        	if ($ttcartbtn.length == 0) {
		    	$(".cont_goods_tt").append('<input type="button" value="加入购物车" class="detail_cartbtn" />');
		    }   
        }else if(scroH1 < navH1){
            $(".cont_goods_tt").removeClass("cont_goods_tt1");
            $ttcartbtn.remove();
        }
    });
    $(".list_contri").on("click",".cont_goods_tt1>a",function(){
    	$("html,body").scrollTop($(".list_contri").offset().top);
    })
    
    //end 滚动页面时出现的商品介绍评价栏    
	
	//评价类型切换
    var $reviews_a = $('.cont_reviews_tt').children("a");
    var $reviews_ol = $('.cont_reviews_cont').children("li");
    $reviews_a.click(function(){
        $(this).addClass("reviews_cur").siblings("a").removeClass("reviews_cur");
        var $reviews_tt = $(this);
        var $reviews_cont = $reviews_tt.index();
        $reviews_ol.css('display','none');
        $reviews_ol.eq($reviews_cont).css('display','block');
        return false;
    })
    //end 评价类型切换
    
	//仅显示有货
	var $onlyshow = $(".onlyshow");
	$onlyshow.bind({
		 click:function(){
			 $(this).find("i").toggleClass("filt_show");
		 },
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
	//end  仅显示有货   

	//商品评价查看大图js
    var ppm = $(".comments_tbcont");
    var CONTshowImg_s = ppm.find(".CONTshowImg_s");
    var sm = ppm.find("li"); //小图片
    var CONTshowbimg = CONTshowImg_s.next();
    var bg = CONTshowbimg.find("li"); //大图片
    var shouqi = CONTshowbimg.find(".shouqi");
    sm.click(function(){
        var $slen = $(this).parent().children("li").length-1;
        var $t = $(this).index();
        var $smthis = $(this).parent().children("li");
        var $next = $(this).parent().parent().next();
        var $next_bg = $next.find("li");
        var CONTpic_back = $next.find(".CONTpic_back");  //右箭头
        var CONTpic_next = $next.find(".CONTpic_next");  //左箭头
        $next.show();
        $next.find(".shouqi").show();
        $(this).addClass("frsli").siblings("li").removeClass("frsli");
        $next_bg.css('display','none');
        $next_bg.eq($t).css('display','block');

        if($t == $slen){
            CONTpic_next.css('display','none');
            CONTpic_back.css('display','block');
        }else if($t == 0){
            CONTpic_back.css('display','none');
            CONTpic_next.css('display','block');
        }else{
            CONTpic_next.css('display','block');
            CONTpic_back.css('display','block');
        }
        CONTpic_next.click(function(){
            if($t >= $slen){
                $t = $slen;
                $(this).css('display','none');
                CONTpic_back.css('display','block');
            }else{
                ++$t;
                $(this).css('display','block'); 
                CONTpic_back.css('display','block');
            }
            $next_bg.css('display','none');
            $next_bg.eq($t).css('display','block');
            $smthis.eq($t).addClass("frsli").siblings("li").removeClass("frsli");
        });
        CONTpic_back.click(function(){
            if($t <=0){
                $t = 0;
                CONTpic_back.css('display','none');
                CONTpic_next.css('display','block');
            }else{
                --$t;
                CONTpic_back.css('display','block');
                CONTpic_next.css('display','block');
            }
            $next_bg.css('display','none');
            $next_bg.eq($t).css('display','block');
            $smthis.eq($t).addClass("frsli").siblings("li").removeClass("frsli");
        });
    })
    //大图关闭
    bg.click(function(){
        CONTshowbimg.hide();
        $(this).hide();
        sm.removeClass("frsli");
    });
    //收起关闭
    shouqi.click(function(){
        CONTshowbimg.hide();
        $(this).hide();
        sm.removeClass("frsli");
    });
    //end 商品评价查看大图js


    //文字多了收藏
    var comments_tbcont = $(".comments_tbcont").find("p");
    comments_tbcont.each(function(){
        var cp = $(this);
        var cpstr = $(this).html();
        var aa = "<a>展开</a>";
        if(cpstr.length>50){
            $(this).html(cpstr.substr(0,50)+"……");
            $(this).after(aa);
            cp.next().click(function(){
                if($(this).html() == "展开"){
                    cp.html(cpstr);
                    $(this).html("收起");
                }else{
                    cp.html(cpstr.substr(0,50)+"……");
                    $(this).html("展开");
                }
            });
        }
    })
    //end 文字多了收藏
    
    //面包屑导航
    $cru_a = $(".list_crumbs").children(".cru2");
    $cru_a.click(function(){
    	$(this).hide();
    	$(this).prev("span").hide();
    })
    //end 面包屑导航

    $(".cab_height_hs a").each(function(){
        var subtext = subString($(this).text(),27,false);
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
    
	//搜索框智能提示上下移动效果
	//  xlist($(".search_text > input"),$(".hs_search > .search_list"));
	//  $(document).click(function(){
	//      if($(".hs_search > .search_list").css('display')=='block'){
	//          $(".hs_search > .search_list").hide();
	//      }
	//  })    
	//end 搜索框智能提示上下移动效果    
    
    

});
