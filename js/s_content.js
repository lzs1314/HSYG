// JavaScript Document
$(document).ready(function(){

	//浏览商品大图
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
    //end 浏览商品大图

	//数量增加减少
    var maxInventory = 9999;
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
    //end 数量增加减少
        
    //飞入购物车js
    var numReg = /^[0-9]*$/;
    var $con_j_cart = $(".con_j_cart");
    $con_j_cart.bind('click',function(){
	var num = $(".c_detail_num").val();
        var img = $(".cont_bigimg_select>.bigimg_div");
        var flyElm = img.clone().css('opacity', 0.75);
        if (num > 0 && numReg.test(num)) {
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
            top: $('.hs_headerCart').offset().top,
            left: $('.hs_headerCart').offset().left,
            width: 20,
            height: 20
        }, 'slow', function ()
        {
            obj.remove();
        });
    }
    //end 飞入购物车js
        
    //此处注释有程序控制
    //商品起订价（起定量）不得低于元（件）弹窗提示
    //var $c_detail_buybtn = $(".c_detail_buybtn");
    //$c_detail_buybtn.click(function(){
        //layer.open({
            //type: 1,
            //title: false,
            //closeBtn: 1, 
            //area: ['380px', '150px'],
            //shift: 2,
            //content: "<div class='layer_hint'>商品起定量不得低于500件</div>"
		//})
    //});    
    //end 商品起订价（起定量）不得低于元（件）弹窗提示
    
	//点击选择规格/选择颜色
    $div_p = $(".div_p p");
    $div_p.click(function(){
        $(this).addClass("sel_on").siblings("p").removeClass("sel_on");
    });
    //end 点击选择规格/选择颜色
    
    //商品介绍和商品评价切换
    var $int_tt_a = $(".introduce_tit").children("a"),
    	$int_tt_cont = $(".introduce_cont").children(".introduce_single");
    $int_tt_a.click(function(){
    	$(this).addClass("inttp_on").siblings("a").removeClass("inttp_on");
        var $cont = $(this).index();
        $int_tt_cont.hide(); 
        $int_tt_cont.eq($cont).show();
    })
    //end 商品介绍和商品评价切换    
    
    //滚动页面时出现的商品介绍评价栏
	var navH1 = 740;
    $(window).scroll(function(){
        var scroH1 = $(this).scrollTop();
        var $ttcartbtn = $(".introduce_tit").children(".c_detail_cartbtn");
        if(scroH1 > navH1){
        	$(".introduce_tit").addClass("introduce_tit1");
        	if ($ttcartbtn.length == 0) {
		    	$(".introduce_tit").append('<input type="button" value="加入购物车" class="c_detail_cartbtn"/>');
		    }   
        }else if(scroH1 < navH1){
            $(".introduce_tit").removeClass("introduce_tit1");
            $ttcartbtn.remove();
        } 
    });    
    $(".s_contR").on("click",".introduce_tit1>a",function(){
    	$("html,body").scrollTop($(".s_coinfo").offset().top);
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
			 return false;	
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
//  var ppm = $(".comments_tbcont");
//  var CONTshowImg_s = ppm.find(".CONTshowImg_s");
//  var sm = CONTshowImg_s.children("ul").children("li"); //小图片
//  var CONTshowbimg = CONTshowImg_s.next();
//  var bg = CONTshowbimg.find("li"); //大图片
//  var shouqi = CONTshowbimg.find(".shouqi");
//  sm.click(function(){
//      var $slen = $(this).parent().children("li").length-1;
//      var $t = $(this).index();
//      var $smthis = $(this).parent().children("li");
//      var $next = $(this).parent().parent().next();
//      var $next_bg = $next.find("li");
//      var CONTpic_back = $next.find(".CONTpic_back");  //右箭头
//      var CONTpic_next = $next.find(".CONTpic_next");  //左箭头
//      $next.show();
//      $next.find(".shouqi").show();
//      $(this).addClass("frsli").siblings("li").removeClass("frsli");
//      $next_bg.css('display','none');
//      $next_bg.eq($t).css('display','block');
//
//      if($t == $slen){
//          CONTpic_next.css('display','none');
//          CONTpic_back.css('display','block');
//      }else if($t == 0){
//          CONTpic_back.css('display','none');
//          CONTpic_next.css('display','block');
//      }else{
//          CONTpic_next.css('display','block');
//          CONTpic_back.css('display','block');
//      }
//      CONTpic_next.click(function(){
//          if($t >= $slen){
//              $t = $slen;
//              $(this).css('display','none');
//              CONTpic_back.css('display','block');
//          }else{
//              ++$t;
//              $(this).css('display','block'); 
//              CONTpic_back.css('display','block');
//          }
//          $next_bg.css('display','none');
//          $next_bg.eq($t).css('display','block');
//          $smthis.eq($t).addClass("frsli").siblings("li").removeClass("frsli");
//      });
//      CONTpic_back.click(function(){
//          if($t <=0){
//              $t = 0;
//              CONTpic_back.css('display','none');
//              CONTpic_next.css('display','block');
//          }else{
//              --$t;
//              CONTpic_back.css('display','block');
//              CONTpic_next.css('display','block');
//          }
//          $next_bg.css('display','none');
//          $next_bg.eq($t).css('display','block');
//          $smthis.eq($t).addClass("frsli").siblings("li").removeClass("frsli");
//      });
//  })
    //end 商品评价查看大图js


    //文字多了收藏
    var comments_tbcont = $(".comments_tbcont").find("p");
    comments_tbcont.each(function(){
        var cp = $(this);
        var cpstr = $(this).html();
        var aa = "<a style='color:#e4393c;margin-left:0'>展开</a>";
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

});
