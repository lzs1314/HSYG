$(document).ready(function(){
	var qq_inputVal = /^[0-9]*$/,
		$file_info = $("#file_info"),
		$img_info = $("#img_info"),
		$file_qr = $("#file_qr"),
		$img_qr = $("#img_qr"),
	    $common_img = $(".common_img"),
		$mon_length = $(".common_title").children("div").length,
		$other = $(".common_title").children("div:gt(0)");

	//objs对象，img_yy上传的图片，imgbox图片显示位置，site图片地址显示位置
	function upImg(objs,imgs){
		objs.change(function() {
	        var $file = $(this);
	        var fileObj = $file[0],
		        windowURL = window.URL || window.webkitURL,
		        dataURL;
	        if(fileObj && fileObj.files && fileObj.files[0]){
	            dataURL = windowURL.createObjectURL(fileObj.files[0]);
	            imgs.attr('src',dataURL);
	        }else{
		        dataURL = $file.val();
		        var imgObj = document.getElementById(imgs);
		        imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
		        imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
	        }
	    });
	}
	//上传图片（需要引用uploadImg.js）
	
	upImg($file_info,$img_info);
	upImg($file_qr,$img_qr);

	$com_span = $(".com_span");
	$qqtext = $(".qqtext");
	$confirm = $(".confirm");
	$com_span.click(function(){
		$(this).parent().hide();
		$(this).parent().next().show();
	})
	

	$qqtext.focus(function(){
		$(this).addClass("aI_blue").removeClass("aI_red");
	});

	$qqtext.blur(function(){
		qq_inputC($(this),$(this).next().next());
	})
	
	function qq_inputC($obj,$span_w){
		if($obj.val() == ""){
            $obj.addClass("aI_red").removeClass("aI_blue");
            $span_w.addClass("run_wrong").removeClass("run_right");
            $span_w.show().html("请填写QQ群号");
            return false;
        }else if(!qq_inputVal.test($obj.val())){
            $obj.removeClass("aI_blue").addClass("aI_red");
            $span_w.addClass("run_wrong").removeClass("run_right");
            $span_w.show().html("请填写正确的QQ群号");
            return false;
        }else{
        	$obj.removeClass("aI_red").removeClass("aI_blue");
        	$span_w.removeClass("run_wrong").addClass("run_right");
            $span_w.html("&nbsp;");
            return true;
        }    
	}
	$(".com_ok").click(function(){
		if(qq_inputC($(this).prev(),$(this).next())){
			$(this).parent().prev().show();
			$(this).parent().hide();
			layer.open({
		        type: 1,
		        title: false,
		        closeBtn: 1,
		        skin: 'layerBtn2',
		        area: ['380px', '150px'],
		        btn:['确 定'],
		        content: "<div class='layer_suc'><img src='images/common/lay1.png'>修改成功！</div>"
		    })
	    }
	});
	$(".aIupfile").click(function(){
		layer.open({
	        type: 1,
	        title: false,
	        closeBtn: 1,
	        skin: 'layerBtn2',
	        area: ['380px', '150px'],
	        btn:['确 定'],
	        content: "<div class='layer_suc'><img src='images/common/lay1.png'>恭喜您，头像保存成功！</div>"
	    })
	});

	$(".aIupfileqr").click(function(){
		layer.open({
	        type: 1,
	        title: false,
	        closeBtn: 1,
	        skin: 'layerBtn2',
	        area: ['380px', '150px'],
	        btn:['确 定'],
	        content: "<div class='layer_suc'><img src='images/common/lay1.png'>恭喜您，二维码修改成功！</div>"
	    })
	});

//更多社区
	
	common_img();
	function common_img(){
		if ($mon_length > 1) {
			$other.hide();
		}
		$common_img.click(function(){
	        if($mon_length > 1){
	            if($other.is(":hidden")){
	                $other.show();
	            }else{
	                $other.hide();
	            }
	        }
	    });
	}

});