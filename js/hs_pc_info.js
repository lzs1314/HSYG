$(document).ready(function(){
	var	cReg = /^[0-9A-Za-z\u4e00-\u9fa5]{2,10}$/,  //可输入2-10个汉字或字母或数字或汉字加字母加数字 姓名
		userReg = /^[0-9A-Za-z]{6,20}$/, //用户名
		$username = $(".username"),
		$truename = $(".truename"),
		$infoBtn = $(".info_operation"),
		$txBtn = $(".upload_operation"),
		$tx_li = $(".choose_tx ul").children("li"),
		$filebtn = $(".tx_upload").children("input"),
		booltrue,booluser;



	//编辑头像
	$txBtn.click(function(){
		layer.open({
		    type: 1,
		    title: false,
		    closeBtn: 1,
		    skin: 'layerBtn_tx',
		    area: ['660px', '458px'],
		    btn: ['保 存','取 消'],
		    content: $('.tx_layer'),
		    btn2: function(){
			    quxiao();
			},
			cancel: function(){
				quxiao();
			}
		})
	})
	//end 编辑头像

	//选择头像并预览
	$tx_li.click(function(){
		var $pos = $(".preview_tx").children("div"),
			$posimg = $pos.find("img"),
			$tximg = $(".tximg").find("img"),
			$img = $(this).children("img").clone();
		if ($posimg.length > 0 || $tximg.length > 0) {
			var index = $(this);
			var $imgtx = index.children("img").clone();
			$posimg.remove();
			$tximg.remove();
			$imgtx.appendTo(".tximg");
		} 
		$img.appendTo($pos);		
		$pos.find("span").hide();	
	})
	//end 选择头像并预览

	//头像上传
	$filebtn.change(function(){
		var size = document.getElementById("img").files[0].size,
			imgsa = document.getElementById("img").files[0].value,
			sizeM = size/1024/1024;
		if(sizeM > 2){
			$(".img_p").show().html("图片仅支持JPG、GIF、PNG、JPEG、BMP格式,文件小于2M");
			return false;
		}else{
			$(".img_p").hide();
			var $pos = $(".preview_tx").children("div"),
			$posimg = $pos.find("img"),
			$tximg = $(".tximg").find("img"),
			$file = $(this),
			$imgs = $('<img src="" />'),
        	fileObj = $file[0],
        	$fileVal = $file.val(),
        	imgsize,
			windowURL = window.URL || window.webkitURL,
			dataURL;
			if(fileObj && fileObj.files && fileObj.files[0]){
				var extStart = $fileVal.lastIndexOf(".");
                var ext = $fileVal.substring(extStart, $fileVal.length).toUpperCase();
                if (ext != ".BMP" && ext != ".PNG" && ext != ".JPG" && ext != ".JPEG") {
                    $(".img_p").show().html("图片格式错误");
                    $(".img_p").show().addClass("aIup_wrong");
                    return false;
                }else{
		            dataURL = windowURL.createObjectURL(fileObj.files[0]);
		            if(dataURL){
		            	$imgs.attr('src',dataURL);	
		            }
	            }
			}else{
		        dataURL = $file.val();
		        if(dataURL){
	            	$imgs.attr('src',dataURL);	
	            }
	        }
	        if ($posimg.length > 0 || $tximg.length > 0) {
	        	$posimg.remove();
				$tximg.remove();
	        }
	    	$('<img src='+dataURL+' />').appendTo($(".tximg"));
			$imgs.appendTo($pos);
			$pos.find("span").hide();
			
		}
		// if()
		
	});
	//取消选择后
	function quxiao(){
		$(".tximg").find("img").remove();
		$("<img src='images/hs_pc_all/tx_test.png'>").appendTo(".tximg");
		$(".preview_tx").find("img").remove();
		$(".preview_tx").find("span").show();
	}
	//end 取消选择后
	
	$infoBtn.click(function(){	
		booltrue = checkReg($truename,"请输入姓名","请输入正确的姓名",cReg);
		booluser = checkReg($username,"请输入用户名","请输入正确用户名",userReg);
		if(booltrue&&booluser){
			return true;
		}else{
			return false;
		}
	});
		

	/********焦点获得时**********/
	$username.focus(function(){
		focusInput($(this),$(this).next());
	});
	$username.next().click(function(){
		clickText($username,$(this));
	});	

	$truename.focus(function(){
		focusInput($(this),$(this).next());
	});
	$truename.next().click(function(){
		clickText($truename,$(this));
	});	


    $username.blur(function(){
		blurInput($(this),$(this).next());
		booluser = checkReg($username,"请输入用户名","请输入正确用户名",userReg);
	})
	/********焦点失去时**********/
	$truename.blur(function(){
		blurInput($(this),$(this).next());
		booltrue = checkReg($truename,"请输入姓名","请输入正确的姓名",cReg);
	})
	
	
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        $val = Trim($val,"g");
        if ($val == "") {
        	WrongColor(obj);
            obj.parent().next().show().html(con1);
            return false;
        } else{
        	if(!preg.test($val)){
	            WrongColor(obj);
	            obj.parent().next().show().html(con2);
	            return false;
	        }else{
	        	obj.parent().next().hide().html("");
	        	if(obj == $username){
	        		obj.parent().next().show().css({"background":"url(images/common/wricon2.png) no-repeat 0 -180px"}).html("用户名只能设置一次");
	        	}
	        	RightColor(obj);
	            return true;
	        }    
        }
    }

   
	//综合样式判定
	function RightColor(obj){
		obj.removeClass("in_blue").removeClass("in_red");
	}
	function WrongColor(obj){
		obj.addClass("in_red").removeClass("in_blue");
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
	    obj.addClass("in_blue").removeClass("in_red");
	}
	function OnBlur(obj){
	   obj.removeClass("in_blue").removeClass("in_red"); 
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

})