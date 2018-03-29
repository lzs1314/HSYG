$(document).ready(function(){
	
	//点击联系供应商显示电话
	var $supplier_2 = $(".supplier_2"),
    	$supplier_3 = $(".supplier_3");
		$supplier_2.click(function(){
		$supplier_3.show();
    });
	
	//点击药师咨询显示电话
	var $stop7 = $(".stop7"),
    	$stop_phone = $(".stop_phone");
		$stop7.click(function(){
		$stop_phone.show();
    });
	
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
	//点击收藏
    var $span_ed = $(".span_ed");
    $span_ed.click(function(){
        $span_ed.toggleClass("span_un");
    })
    //end 点击收藏
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
	
    //面包屑导航
    $cru_a = $(".list_crumbs").children(".cru2");
    $cru_a.click(function(){
    	$(this).hide();
    	$(this).prev("span").hide();
    })
    //end 面包屑导航
    
    //左右对等
	var $lh = $(".goods_content");
	var $rh = $(".goods_cont_sidebar");
	$rhh = $rh.height()-2;
	if($lh.height()>$rh.height()){
	    $rh.height($lh.height());
	}
	
	if($lh.height()<$rh.height()){
	    $lh.height($rhh);
	}
	//end 左右对等
    
    //商品图切换
    var $bigimg_div = $(".bigimg_div").children("img");
    var $smimg_ul = $(".smimg_ul").children("li");
    var $pindex;
    $smimg_ul.hover(function(){
        $pindex = $smimg_ul.index(this);
        $bigimg_div.eq($pindex).show().siblings("img").hide();
    },function(){
    });
    $smimg_ul.click(function(){
        $(this).addClass("smspeli_c").siblings("li").removeClass("smspeli_c");
    });
    //end 商品图切换
    
    //数量增加减少
    var maxInventory = 999;
    var initInventory = 1;
    $(".num_plus").click(function(){
        var thisNum = parseInt($(".detail_num").val());
        if(thisNum<maxInventory){
            $(".detail_num").val(thisNum+1);
        }
    });
    $(".num_minus").click(function(){
        var thisNum = parseInt($(".detail_num").val());
        if(thisNum>initInventory){
            $(".detail_num").val(thisNum-1);
        }
    });
    //end  数量增加减少
    
    //飞入购物车js
    var $cartbtn = $(".detail_cartbtn");
    $cartbtn.bind('click',function(){
        var img = $(".tb-booth>a");
        var flyElm = img.clone().css('opacity', 0.75);
	if ($(".detail_num").val() > 0) {
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
    
    //相关推荐，换一换
    var $abtn = $(".cont_again_p");
    var $acont = $(".again_contdiv").children("ul");

    $abtn.click(function(){
        $acont.stop(false,true).animate({top:"-=455px"},500,function(){
            $acont.css({top:0}).children("li:lt(3)").appendTo($acont);
        });
    });
    //end 相关推荐，换一换
    
    //商品介绍与商品评价切换js
    var $tt_li = $('.cont_goods_tt ul li'); 
    var $cont_li = $('.cont_goods_cont > ul > li');
    
    $tt_li.click(function(){
        $(this).addClass("cont_cur").siblings("li").removeClass("cont_cur");
        var $tt = $(this);
        var $cont = $tt.index();
        $cont_li.css('display','none'); 
        $cont_li.eq($cont).css('display','block');
    })
    var $reviews_li = $('.cont_reviews_tt ul li');
    var $reviews_ol = $('.cont_reviews_cont > li');
    $('.cont_reviews_cont li table tr:last-child').removeClass("reviews_line");
    $reviews_li.click(function(){
        $(this).addClass("reviews_cur").siblings("li").removeClass("reviews_cur"); 
        var $reviews_tt = $(this);
        var $reviews_cont = $reviews_tt.index();
        $reviews_ol.css('display','none'); 
        $reviews_ol.eq($reviews_cont).css('display','block'); 
    })
	
	
	/*******放大镜效果********/
	$(".jqzoom").imagezoom();
	
	$("#thumblist li a").hover(function(){
		$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
		$(".jqzoom").attr('src',$(this).find("img").attr("mid"));
		$(".jqzoom").attr('rel',$(this).find("img").attr("big"));
	});
	

});

