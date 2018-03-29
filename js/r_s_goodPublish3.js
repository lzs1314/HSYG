
$(document).ready(function(){
/***********************我的商户-商品发布--品牌申请***********************/
	var $brand_name = $(".brand_name"),  //品牌名——中文名
		$brand_name_eng = $(".brand_name_eng"), //品牌名——英文名
		$brand_code = $(".brand_code"), //商标标注号
		$brand_remark = $(".brand_remark"),  //备注
		$filebtn = $(".addPic").children("input"),
		$ulupload1 = $(".goods_uploadpic1"),
		$ulupload2 = $(".goods_uploadpic2"),
		$img_LOGO = $(".img_LOGO"),
		$add_img = $(".add_img"),
		$goods_img = $(".goods_img");
		$upload_num1 = $(".upload_num1"),
		$upload_num2 = $(".upload_num2"),
		enReg = /^[0-9]*$/,
		hzReg = /^[\u4e00-\u9fa5]+$/,
		zmReg = /^[A-Za-z]*$/;
		var $si1 = $(".si1"),
	    	$si2 = $(".si2"),
	    	$si3 = $(".si3"),
			arrow = " <font>&gt;</font> ",
			arrow1 = "/";

	 $(".writeSubmit").click(function(){
		if(brandName()){
			layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 1,
	            skin: 'layerBtn1',
	            area: ['380px', '150px'],
	            btn: ['确 定'],
	            content: "<div class='layer_suc'><img src='images/common/lay1.png'>提交成功!</div>"
	        })
			return true;
		}
	})

	//选择类目弹窗
	
	//类目级数决定宽度
	var $wareSort = $(".wareSort"),
		$sortit = $(".sortit");
	var $wareSort_length = $(".wareSort").find(".sort_cont").length,
		$varyWidth = 242*$wareSort_length+20;

	if ($varyWidth > 898) {
		$wareSort.width($varyWidth);
	} else{
		$wareSort.width(898);
	}	
	if ($wareSort.width() > $sortit.width()) {
		$sortit.width($varyWidth);
	} else{
		$sortit.width(898);
	}
	//end 类目级数决定宽度
	

	$(".select_class").click(function(){
		var $choosetype_layer = $(".choosetype_layer");
		$choosetype_layer.css({
			"width":"auto",
			"height":"auto",
			"overflow":"initial"
		});
		layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'choolayer_btn',
            area: ['1000px', '610px'],
            btn: ['确 定'],
            content: $(".choosetype_layer"),
            yes:function(){
            	//alert($("#chpetit").html() + "---------------" + $(".goods_claim").length);
            	var $goods_p = '<div class="goods_claim">';
            	$goods_p += '<p class="goods_cla">'+$("#chpetit").html()+'</p>';
			    $goods_p += '<img class="goods_img" src="images/sellerCenter/no.png">';
			    $goods_p += '</div>';
            	if($(".goods_claim").length > 0){
            		$(".goods_claim").each(function(){
            			var odata = $(this).children(".goods_cla").html();
            			if(odata == $("#chpetit").html()){
            				alert("重复选择，请重新选择");
            				$goods_p = "";
            			}
            		});
            	}
            	layer.closeAll();
            	if($(".goods_cla").length < 5 && $goods_p != ""){
	            	$(".select_class").before(function(){
	      				return $goods_p;
	        		})
	            }else{
	            	return false;
	            }
            }
        })
	});	
		//选择类目
	var $lev1_a = $(".slevel1").children("a"),
		$lev2_dd = $(".slevel2").children("dd"),
		$sort1_dd = $(".sort1").find("dd"),
		$sort2_li = $(".sort2").find("li"),
		$sort2_a = $(".sort2 .sort").find("a"),
		$sort3_li = $(".sort3").find("li"),
		$sort3_a = $(".sort3 .sort").find("a"),
		$sort2 = $(".sort2"),
		$sort3 = $(".sort3"),
		arrow = " / ";

		


	$lev1_a.each(function(){
		var $le2_dd = $(this).next().children("dd");
		if ($le2_dd.length>0) {
			$(this).addClass("rs_lev1_icon");
		} 	
		$(this).click(function(){
			$lev1_a.removeClass("rs_lev_cur");
			if ($le2_dd.length>0) {
				$(this).toggleClass("rs_lev1_cur")
				.next().stop(true,true).slideToggle(300)
				.parent().siblings().children("a").removeClass("rs_lev1_cur")
				.next().stop(true,true).slideUp("slow");
			} else{
				$sort2.hide();
				$sort3.hide();
				$lev2_dd.removeClass("rs_lev_cur");
				$(this).addClass("rs_lev_cur");
				var $cur0 = $(".slevel1").find(".rs_lev_cur"),
					chpetitHtml1 = $cur0.html();
				$("#chpetit").html(chpetitHtml1);
			}
			return false;
		})
	})
	$sort1_dd.click(function(){
		$lev1_a.removeClass("rs_lev_cur");
		$sort2_a.removeClass("rs_lev_cur");
		$sort3_a.removeClass("rs_lev_cur");
		$lev2_dd.removeClass("rs_lev_cur");
		$(this).addClass("rs_lev_cur");
		$sort2.show();
		$sort3.hide();
		var $ddIndex = $sort1_dd.index(this);
		var s2 = $sort2_li.eq($ddIndex);
        if (s2.html() == undefined) {
        	$sort2.hide();
        } else{
        	$sort2_li.eq($ddIndex).show().siblings().hide();
        }
        var $cur1 = $(".sort1").find(".rs_lev_cur > a"),
        	$goods_cur1 = $(".sort1").find(".rs_lev_cur > a"),
        	curtHtml2 = $goods_cur1.html(),
        	chpetitHtml2 = $cur1.html();

		$("#chpetit").html(chpetitHtml2);
        return false;
	})
	$sort2_a.click(function(){
		$sort2_a.removeClass("rs_lev_cur");
		$sort3_a.removeClass("rs_lev_cur");
		$(this).addClass("rs_lev_cur");
		$sort3.show();
		var $ddIndex = $sort2_a.index(this);
		var s3 = $sort3_li.eq($ddIndex);
        if (s3.html() == undefined) {
        	$sort3.hide();
        } else{
        	$sort3_li.eq($ddIndex).show().siblings().hide();
        }
        var $cur1 = $(".sort1").find(".rs_lev_cur > a"),
        	$cur2 = $(".sort2").find(".rs_lev_cur > span"),
        	$goods_cur1 = $(".sort1").find(".rs_lev_cur > a"),
        	$goods_cur2 = $(".sort2").find(".rs_lev_cur > span"),
        	chpetitHtml2 = $cur1.html(),
        	chpetitHtml3 = $cur2.html(),
        	curtHtml2 = $goods_cur1.html(),
        	curtHtml3 = $goods_cur2.html();
		$("#chpetit").html(chpetitHtml2 + arrow + chpetitHtml3);
        return false;
	})
	$sort3_a.click(function(){
		$sort3_a.removeClass("rs_lev_cur");
		$(this).addClass("rs_lev_cur");
		var $cur1 = $(".sort1").find(".rs_lev_cur > a"),
        	$cur2 = $(".sort2").find(".rs_lev_cur > span"),
        	$cur3 = $(".sort3").find(".rs_lev_cur > span"),
        	$goods_cur1 = $(".sort1").find(".rs_lev_cur > a"),
        	$goods_cur2 = $(".sort2").find(".rs_lev_cur > span"),
        	$goods_cur3 = $(".sort3").find(".rs_lev_cur > span"),
        	chpetitHtml2 = $cur1.html(),
        	chpetitHtml3 = $cur2.html(),
        	chpetitHtml4 = $cur3.html();
        	curtHtml2 = $goods_cur1.html(),
        	curtHtml3 = $goods_cur2.html();
        	curtHtml4 = $goods_cur3.html();
		$("#chpetit").html(chpetitHtml2 + arrow + chpetitHtml3 + arrow + chpetitHtml4);
		return false;
	})
	
	$(".brand_clap").on("click",".goods_img",function(){
	    $(this).parent().remove();
	  });
	//end 选择类目    	

	//获得和焦点时
	$brand_name.focus(function(){
		focusInput($(this),$(this).next());
	});
	$brand_name.next().click(function(){
		clickText($brand_name,$(this));
	});
	$brand_name_eng.focus(function(){
		focusInput($(this),$(this).next());
	});
	$brand_name_eng.next().click(function(){
		clickText($brand_name_eng,$(this));
	});
	$brand_code.focus(function(){
		focusInput($(this),$(this).next());
	});
	$brand_code.next().click(function(){
		clickText($brand_code,$(this));
	});
	$brand_remark.focus(function(){
		focusInput($(this),$(this).next());
	});
	$brand_remark.next().click(function(){
		clickText($brand_remark,$(this));
	});
	//失去焦点时

	$brand_code.blur(function(){
		blurInput($(this),$(this).next());
		if ($brand_code.val() == "") {
        	$(this).next().show();
        	$(this).removeClass("b_blue");
            return true;
        }else if(!enReg.test($brand_code.val())){
	    		$(this).parent().next().addClass("note_wrong");
				$(this).addClass("b_red").removeClass("b_blue");
	            $(this).parent().next().show().html("请输入正确的商标注册号");
	            return false;
       		}else{
	        	$(this).parent().next().removeClass("note_wrong");
				$(this).removeClass("b_blue").removeClass("b_red");
	            $(this).parent().next().html("&nbsp;");
	            return true;
        	}   
	})

	$brand_name.blur(function(){
		blurInput($(this),$(this).next());
		checkBrand_name();
	})
	$brand_name_eng.blur(function(){
		blurInput($(this),$(this).next());
		checkBrand_name();
		checkBrand_name_eng();
		brandName();
	})
	
	function brandName(){
		if($brand_name_eng.val() == "" && $brand_name.val() == ""){
			$(".brand_name_p").addClass("note_wrong").show().html("请至少填写一种品牌名");
			return false;
		}else{
			return true;
		}
		
	}
	$brand_remark.blur(function(){
		blurInput($(this),$(this).next());
		if ($(this).val() == "") {
			$(this).parent().next().removeClass("note_wrong");
        	$(this).next().show();
        	$(this).removeClass("b_blue");
            return true;
        }else{
        	$(this).parent().next().removeClass("note_wrong");
			$(this).removeClass("b_blue").removeClass("b_red");
            $(this).parent().next().html("&nbsp;");
            return true;
        	}   
	})
    //封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
	function checkBrand_name(){
    	var $val = $brand_name.val();
        var $wr = $brand_name.parent().next().next();
        $val = Trim($val,"g");
        if ($val == "") {
        	$brand_name.removeClass("b_blue").removeClass("b_red");
            return false;
        } else if(!hzReg.test($val)){
        	$brand_name.removeClass("b_blue").addClass("b_red");
            WrongColor($wr,$brand_name);
            $(".brand_name_p").show().html("请输入正确的品牌名");
            return false;
	    }else{
	        RightColor($wr,$brand_name);
            $wr.html("&nbsp;");
            return true;
        }    
    }
    function checkBrand_name_eng(){
    	var $val = $brand_name_eng.val();
        var $wr = $brand_name_eng.parent().next().next();
        $val = Trim($val,"g");
        if ($val == "") {
        	$brand_name_eng.removeClass("b_blue").removeClass("b_red");
            return false;
        } else if(!zmReg.test($val)){
	        $brand_name_eng.removeClass("b_blue").addClass("b_red");
            WrongColor($wr,$brand_name_eng);
            $(".brand_name_p").show().html("请输入正确的品牌名");
            return false;
	    }else{
	        RightColor($wr,$brand_name_eng);
            $wr.html("&nbsp;");
            return true;
        }    

    }
    

	
	//LOGO上传图片
	function upImg(objs,imgs){
		
		objs.change(function () {
            var $file = $(this);
            //获取上传图片的大小
            var filesize = $file[0].files[0].size,
			sizeM = filesize/1024/1024;
            $fileVal = $file.val(),
            $site = $file.parent().prev().find(".aIupsite"),
            $wr_tr = objs.parent().parent().find(".aIup_p");            
            var fileObj = $file[0],
                $real_li = $ulupload1.children("li"),
	        	$reallen = $real_li.length - 3,
		        windowURL = window.URL || window.webkitURL,
		        dataURL;
            if (fileObj && fileObj.files && fileObj.files[0]) {
                var extStart = $fileVal.lastIndexOf(".");
                var ext = $fileVal.substring(extStart, $fileVal.length).toUpperCase();
                if (ext != ".JPG" && ext != ".JPEG") {
					layer.open({
						type: 1,
						title: false,
						closeBtn: 1,
						skin: 'layerBtn1',
						area: ['380px', '150px'],
						btn: ['确 定'],
						content: "<div class='layer_err'><img src='images/common/lay2.png'>图片格式错误!</div>"
					})
                    return false;
                }
                else if (sizeM > 2) {
                   layer.open({
						type: 1,
						title: false,
						closeBtn: 1,
						skin: 'layerBtn1',
						area: ['380px', '150px'],
						btn: ['确 定'],
						content: "<div class='layer_err'><img src='images/common/lay2.png'>图片大小错误!</div>"
					})
                    return false;
                }
                else {
                     dataURL = windowURL.createObjectURL(fileObj.files[0]);
					imgs.attr('src',dataURL);
					imgs.parent().parent(".aIupimgBox").show();
					$(".li_img").show();
					$upload_num1.html(($reallen+1)); 
					if($(".upload_num1").html() == 1){
						objs.parent().hide();
					}
                    return true;
                }
            } 
        });
	}
	upImg($add_img,$img_LOGO);
	$(".deletePic1").click(function(){
		$(this).parent().hide();
		$(this).parent().next().show();
		$reallen = $ulupload1.children("li").length - 2;
		$(this).parent().next().next().children().children().html(($reallen-1));
	});
  //资质图片上传
	$filebtn.change(function(){
		var $file = $(this);
            //获取上传图片的大小
            var filesize = $file[0].files[0].size,
			sizeM = filesize/1024/1024,
            $fileVal = $file.val(),
           fileObj = $file[0],
	        windowURL = window.URL || window.webkitURL,
	        $li = $('<li><img src=""><p style="display: none;"></p><span class="deletePic deletePic2"></span></li>'),
	        $imgs = $li.children("img"),
	        $real_li = $ulupload2.children("li"),
	        $reallen = $real_li.length - 2,
        	$ulupload = $(".goods_uploadpic"),
        	$p = $li.children("p"),
			$img = $ulupload.find("img"),
            $listp = $ulupload.find("p"),
            $arr = [],
			dataURL;
			$p.html($file.val());
		    if($reallen < 5){
				$listp.each(function(){
					if($(this).html() != $file.val()){
						$arr.push("1");
					}else{
						$arr.push("2");
					}
				})    	
				if($arr.indexOf("2") == '-1'){
					if (fileObj && fileObj.files && fileObj.files[0]) {
						
						var extStart = $fileVal.lastIndexOf(".");
						var ext = $fileVal.substring(extStart, $fileVal.length).toUpperCase();
						if (ext != ".JPG" && ext != ".JPEG") {
							layer.open({
								type: 1,
								title: false,
								closeBtn: 1,
								skin: 'layerBtn1',
								area: ['380px', '150px'],
								btn: ['确 定'],
								content: "<div class='layer_err'><img src='images/common/lay2.png'>图片格式错误!</div>"
							})
							return false;
						}
						else if (sizeM > 2) {
							layer.open({
								type: 1,
								title: false,
								closeBtn: 1,
								skin: 'layerBtn1',
								area: ['380px', '150px'],
								btn: ['确 定'],
								content: "<div class='layer_err'><img src='images/common/lay2.png'>图片大小错误!</div>"
							})
							return false;
						}
						else {
							dataURL = windowURL.createObjectURL(fileObj.files[0]);
							$imgs.attr('src',dataURL);
							$ulupload2.prepend($li);
							$upload_num2.html(($reallen+1));
							if($(".upload_num2").html() == 5){
								$filebtn.parent().hide();
									layer.open({
									type: 1,
									title: false,
									closeBtn: 1,
									skin: 'layerBtn1',
									area: ['380px', '150px'],
									btn: ['确 定'],
									content: "<div class='layer_err'><img src='images/common/lay2.png'>最多上传5张图片!</div>"
								})
							}
							return true;
						}
					} 
				}
			}
        });
    $ulupload2.on("click",".deletePic2",function(){
		$(this).parent().remove();
		$filebtn.parent().show();
		$reallen = $(".goods_uploadpic2").children("li").length-1,
		$(".upload_num2").html(($reallen-1));
	});

	//搜索框
    $si1.focus(function(){
		focusInput($(this),$(this).next());
	});
	$si1.next().click(function(){
		clickText($si1,$(this));
	});
	$si1.blur(function(){
		blurInput($(this),$(this).next());
	})
    $si2.focus(function(){
		focusInput($(this),$(this).next());
	});
	$si2.next().click(function(){
		clickText($si2,$(this));
	});
	$si2.blur(function(){
		blurInput($(this),$(this).next());
	})
    $si3.focus(function(){
		focusInput($(this),$(this).next());
	});
	$si3.next().click(function(){
		clickText($si3,$(this));
	});
	$si3.blur(function(){
		blurInput($(this),$(this).next());
	})
	
    //end 搜索框

//综合样式判定
	function RightColor(obj,objn){
		obj.removeClass("note_wrong");
		objn.removeClass("b_blue").removeClass("b_red");
	}
	function WrongColor(obj,objn){
		obj.addClass("note_wrong");
		objn.addClass("b_red").removeClass("b_blue");
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
		$input.removeClass("b_blue");
	    if($input.val() == ""){
	        $text.show();
	    }
	}
	function OnFocus(obj){
	    obj.addClass("b_blue").removeClass("b_red");
	}
	function OnBlur(obj){
	   obj.removeClass("b_blue").removeClass("b_red"); 
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

/***********************end 商品发布_申请发布***********************/
})