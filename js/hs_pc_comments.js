$(document).ready(function(){
	//评价规则弹窗
    var $erule_btn = $(".erule_btn");
    $erule_btn.click(function(){
    	layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn1',
            area: ['460px', '280px'],
            btn: ['确 定'],
            content: $(".erule_layer")
        })
    })
    //end 评价规则弹窗

	//评价切换
	var $eval_tit_p = $(".eval_tit").children("p"),
		$evals_main = $(".eval_cont").find(".evals_main");
	$eval_tit_p.click(function(){
		var $tit_p = $eval_tit_p.index(this);
        $evals_main.eq($tit_p).show().siblings(".evals_main").hide();
		$(this).addClass("evtp_on").siblings("p").removeClass("evtp_on");
	
	})
	//end 评价切换
	
	/*********************************点击评价*********************************/
	var $evalsinfo_btn = $(".evalsinfo_btn");
	$evalsinfo_btn.click(function(){
		var $evals_box = $(this).parent().next(".evals_box"),
			stars = $evals_box.find(".star_ul").children("li"),
			$star_show = $evals_box.find(".star_show"),
		    stepW = 18,
		    $star_tip = $evals_box.find(".star_tip"),
		    description = new Array("1分 很不满意","2分 不满意","3分 一般","4分 满意","5分 非常满意");
    	if ($evals_box.is(":hidden")) {
    		$evals_box.show();
    	} else{
    		$evals_box.hide();
    	}
        //星星点击显示
        var descriptionTemp;
        $star_show.css("width",0);
        stars.each(function(i){
            $(stars[i]).click(function(e){
                var n = i+1;
                $star_show.css({"width":stepW*n});
                descriptionTemp = description[i];  //几星提示
                $(this).find('a').blur();
                $star_hint.hide();
                return stopDefault(e);
                return descriptionTemp;
            });
        });
        stars.each(function(i){
            $(stars[i]).hover(
                function(){
                    $star_tip.text(description[i]);
                },
                function(){
                    if (descriptionTemp != null) {
                        $star_tip.text(descriptionTemp);
                    } else{
                        $star_tip.text(" ");
                    }
                }
            );
        });	  
		function stopDefault(e){
		    if(e && e.preventDefault){
		    	e.preventDefault();
		    }else{
		    	window.event.returnValue = false;
		    }
		    return false;
		};        
        //end 星星点击显示
        
        //上传图片
        var $showimg_file = $evals_box.find(".showimg_file").children("input"),
        	$showimg_ul = $evals_box.find(".showimg_ul"),
        	$showimg_ul1 = $evals_box.find(".showimg_big ul"),
        	$showimg_num = $evals_box.find(".showimg_num").children("span");
		$showimg_file.change(function(){
			var $file = $(this),
	            fileObj = $file[0],
		        windowURL = window.URL || window.webkitURL,
		        $li = $('<li><div><img src=""><p style="display: none;"></p></div><i class="small_del">&nbsp;</i></li>'),
		        $li1 = $('<li style="display:none;"><img src=""><span class="big_del"></span></li>'),
		        $imgs = $li.find("img"),
		        $imgs1 = $li1.find("img"),
		        $showimg_li = $showimg_ul.children("li"),
		        $showimg_li1 = $showimg_ul1.children("li"),
		        $showimg_length = $showimg_li.length,
	        	$li_p = $li.find("p"),
	        	$showimg_p = $showimg_ul.find("p"),
	            $arr = [],
				dataURL;
				$li_p.html($file.val());
			if($file.val() == ""){
	            return;
	        }
			if ($showimg_length<5) {
				$showimg_p.each(function(){
					if($(this).html() != $file.val()){
						$arr.push("1");
					}else{
						$arr.push("2");
					}
				})   
				if($arr.indexOf("2") == '-1'){
                    if(fileObj && fileObj.files && fileObj.files[0]){
                        dataURL = windowURL.createObjectURL(fileObj.files[0]);
                        $imgs.attr('src',dataURL);
                        $imgs1.attr('src',dataURL);
                        $showimg_ul.show().prepend($li);
                        $showimg_ul1.prepend($li1);
                        $showimg_num.html(($showimg_length+1)); 
                    }else{
                        dataURL = $file.val();
                        $imgs.attr('src',dataURL);
                        $imgs1.attr('src',dataURL);
                        $showimg_ul.show().prepend($li);
                        $showimg_ul1.prepend($li1);
                        $showimg_num.html(($showimg_length+1));     
                    }
                }
			}
			if ($showimg_length==4) {
				$evals_box.find(".showimg_file").hide();
			}
			//查看大图
        	var $showimg_small_li = $showimg_ul.children("li"),
	        	$showimg_big = $evals_box.find(".showimg_big"),
	        	$showimg_big_li = $showimg_big.find("li"),
	        	$showimg_big_img = $showimg_big_li.children("img");
			$showimg_small_li.click(function(){
				$showimg_small_li.children("div").removeClass("lis_cur");
				$(this).children("div").addClass("lis_cur");
				$showimg_big.show();
				var $tit_li = $showimg_small_li.index(this);
				$showimg_big_li.eq($tit_li).show().siblings("li").hide();
			})
			$showimg_big_img.click(function(){
				$(this).parent("li").hide();
				$showimg_big.hide();
				$showimg_small_li.removeClass("lis_cur");
			})
			//end 查看大图	
			
			//小图删除按钮
			$showimg_small_li.click(function(e){
				if($(e.target).attr("class") == "small_del"){
					var $tt_li = $showimg_small_li.index(this);
					$(this).remove();
					$showimg_big_li.eq($tt_li).remove();
					$showimg_big.hide();
					$showimg_num.html($showimg_ul.children("li").length);
					if ($showimg_big_li.length<5) {
						$evals_box.find(".showimg_file").show();
					}
				}
			});
			//end 小图删除按钮
			
			//大图删除按钮
			$showimg_big_li.click(function(e){
				if($(e.target).attr("class") == "big_del"){
					var $tt_li = $showimg_big_li.index(this);
					$(this).remove();
					$showimg_small_li.eq($tt_li).remove();
					$showimg_big.hide();
					$showimg_num.html($showimg_ul.children("li").length);
					if ($showimg_big_li.length<5) {
						$evals_box.find(".showimg_file").show();
					}
				}
			});
			//end 大图删除按钮
        });  
        //end 上传图片
        
		//发表评论验证
		var $esbx_btn = $evals_box.find(".esbx_btn"),
			$esbx_area = $evals_box.find(".esbx_area"),
			$star_hint = $evals_box.find(".star_hint"),
			$area_hint = $evals_box.find(".area_hint"),
			$esbx_niming = $evals_box.find(".esbx_niming");
        $esbx_btn.click(function(){
            if(descriptionTemp == null){
                $star_hint.show().html("<i></i>请打分数！");
            }else{
            	if ($esbx_area.val().length < 5) {
            		$area_hint.show().html("<i></i>英雄，请留下5-500字的箴言吧！");
            	} else{
            		$area_hint.hide().html("");
	                layer.open({
			            type: 1,
			            title: false,
			            closeBtn: 1,
			            skin: 'layerBtn1',
			            area: ['380px', '150px'],
			            btn: ['确 定'],
			            content: "<div class='layer_suc'><img src='images/common/lay1.png'>您已经评价成功，感谢购买！</div>"
			        })
            	}
            }
        });
        $esbx_area.blur(function(){
            if($esbx_area.val().length < 5){
                $area_hint.show().html("<i></i>英雄，请留下5-500字的箴言吧！");
            }else{
                $area_hint.hide().html("");
            }
        });		
		//end 发表评论验证   
		
        //匿名评价
		$esbx_niming.bind({
			 click:function(){
				if ($(this).hasClass("exnm_cur")) {
				 	$(this).removeClass("exnm_cur");
				} else{
				 	$(this).addClass("exnm_cur");
				}
				return false;	
			 },
			mouseover:function(){
				if ($(this).hasClass("exnm_cur")) {
				 	$(this).removeClass("exnm_hover");
				} else{
				 	$(this).addClass("exnm_hover");
				}
			},
			mouseout:function(){
				$(this).removeClass("exnm_hover").removeClass("oyhover");
			}
		})
        //end 匿名评价
	})
	/*********************************end 点击评价*********************************/
	
	/*********************************查看评价*********************************/
	var $evalslook_btn = $(".evalslook_btn");
	$evalslook_btn.click(function(){
		var $evals_box = $(this).parent().next(".evals_box");
    	if ($evals_box.is(":hidden")) {
    		$evals_box.show();
    	} else{
    		$evals_box.hide();
    	}	
		//查看大图
    	var $showimg_small_li = $evals_box.find(".showimg_ul").children("li"),
        	$showimg_big = $evals_box.find(".showimg_big"),
        	$showimg_big_li = $showimg_big.find("li"),
        	$showimg_big_img = $showimg_big_li.children("img");
		$showimg_small_li.click(function(){
			$showimg_small_li.children("div").removeClass("lis_cur");
			$(this).children("div").addClass("lis_cur");
			$showimg_big.show();
			var $tit_li = $showimg_small_li.index(this);
			$showimg_big_li.eq($tit_li).show().siblings("li").hide();
		})
		$showimg_big_img.click(function(){
			$(this).parent("li").hide();
			$showimg_big.hide();
			$showimg_small_li.removeClass("lis_cur");
		})
		//end 查看大图    	
	})
	/*********************************end 查看评价*********************************/

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