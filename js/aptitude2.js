$(document).ready(function(){
	var $J_lxname = $(".J_lxname"),
		$J_qyname = $(".J_qyname"),
		$J_yynum = $(".J_yynum"),
		$J_frname = $(".J_frname"),
		$J_food = $(".J_food"),
		$file_yy = $("#file_yy"),
		$img_yy = $("#img_yy"),
		$file_zm = $("#file_zm"),
		$img_zm = $("#img_zm"),
		$file_sc = $("#file_sc"),
		$img_sc = $("#img_sc"),
		$file_sp = $("#file_sp"),
		$img_sp = $("#img_sp"),
		name,lxname,qyname,yynum,frname,//定义文本框项目
		file_yy,file_zm,file_sc,file_yp,file_GSP,file_sp,file_yc,//定义上传按钮项目
		J_food;//定义是否经营项目
		
	//判断是否上传证书
	var $J_food_a = $(".J_food").children("a"),
		$J_milk_a = $(".J_milk").children("a"),
		$run_drug1 = $(".run_drug1"),
		$run_drug2 = $(".run_drug2"),
		$run_food = $(".run_food"),
		$run_tobacco = $(".run_tobacco");
	function run_food(){
		var yes = $(".J_food a").first().find("i");
		if (yes.hasClass("run_on")) {
			file_sp = yesImg($file_sp,"请上传食品流通许可证");
			if (file_sp) {
				return true;
			} else{
				return false;
			}
		}
	};
	//end 判断是否上传证书
	
    //经营范围已选择食品
    nowshow();
    function nowshow() {
        var yes = $(".J_food a").first().find("i");
        if (yes.hasClass("run_on")) {
            $run_food.removeClass("disn");
            runTip($J_food);
        } else {
            $run_food.addClass("disn");
        }
    }
    //end 经营范围已选择食品	
	
	//选择是否经营
	$J_food_a.click(function(){
		var $run_i = $(this).find("i");
		if ($run_i.hasClass("run_on")) {
			$run_i.removeClass("run_on");
		} else{
			$run_i.addClass("run_on");
			runTip($J_food);
		}
		var yes = $(".J_food a").first().find("i");
		if (yes.hasClass("run_on")) {
			$run_food.removeClass("disn");
			$file_sp.parent().css("margin-top", "0px");
            $right.hide();
            $right.addClass("aI_right");
		} else{
			$run_food.addClass("disn");
		}
	})
	
	//end 选择是否经营
	
	//判断是否选中经营食品、电子、其他
	function runTip(obj){
		var $yes = obj.find("i"),
			$runtip = obj.next();
		if ($yes.hasClass("run_on")) {
			$runtip.hide().removeClass("run_wrong").html("");
			return true;
		} else{
			$runtip.show().addClass("run_wrong").html("请选择经营范围");
			return false;
		}
	}
	//end 判断是否选中经营食品、电子、其他
	
	//上传图片
	upImg($file_yy,$img_yy);
	upImg($file_zm,$img_zm);
	upImg($file_sc,$img_sc);
	upImg($file_sp,$img_sp);
	//end 上传图片
	
	//判断是否已经上传图片,未上传图片错误提示
	function yesImg(obj,con){
		var $site = obj.parent().parent().find(".aIupsite");
		var $siteval = $site.html();
        var $wrong = obj.parent().parent().find(".aIup_p");
        if($siteval == ""){
        	$wrong.show().html(con);
            $wrong.addClass("aIup_wrong");
            return false;
        }else{
        	return true;
        }
	}
	//end 判断是否已经上传图片,未上传图片错误提示
	
	var	enReg = /^[0-9A-Za-z]*$/,  //可输入字母和数字的正则
		cReg = /^[0-9A-Za-z\u4e00-\u9fa5]{1,10}$/,  //可输入1-10个汉字或字母或数字或汉字加字母加数字
		nReg =  /^[0-9A-Za-z]{1,22}$/,  //可输入1-22位数字的正则
		fontReg = /^[\u4e00-\u9fa5]+$/;  //汉字正则
	var $aIinput = $(".accInfoTab").find(".aIinput"),
		$aIem = $(".accInfoTab").find(".aIem");
	$(".subBtn").click(function(){
		qyname = checkOther($J_qyname,"请输入企业名称");
		lxname = checkReg($J_lxname,"请输入联系人姓名","请输入正确的联系人姓名",cReg);
		yynum = checkReg($J_yynum,"请输入营业执照注册号","请输入正确的营业执照注册号",nReg);
		frname = checkReg($J_frname,"请输入法人姓名","请输入正确的法人姓名",cReg);
		file_yy = yesImg($file_yy,"请上传营业执照");
		file_zm = yesImg($file_zm,"请上传正面证件照");
		file_sc = yesImg($file_sc,"请上传手持证件照");
		file_sp = run_food();
		J_food = runTip($J_food);
		if(qyname&&lxname&&yynum&&file_yy&&frname&&file_zm&&file_sc&&file_sp&&J_food){
			//资料保存成功弹窗
			count();
			layer.open({
		        type: 1,
		        title: false,
		        closeBtn: 0,
		        area: ['380px', '150px'],
		        content: "<p class='aIsuc_tit'><img src='images/common/lay1.png'>资料提交成功，请等待审核!</p><p class='aIsuc_cont'><span class='time'>10</span>秒后自动<a href='#'>返回首页</a></p>"
		    })
			//end 资料保存成功弹窗			
			return true;
		}else{
			return false;
		}
	});
	/********焦点获得时**********/
	$(".J_qyname,.J_lxname,.J_yynum,.J_frname").focus(function(){
		focusInput($(this),$(this).next());
	})
	$aIem.click(function(){
		clickText($(this).prev(),$(this));
	})
	/********焦点失去时**********/
	$aIinput.blur(function(){
		blurInput($(this),$(this).next());
	})	
	$J_lxname.blur(function(){
		lxname = checkReg($J_lxname,"请输入联系人姓名","请输入正确的联系人姓名",cReg);
	})
	$J_qyname.blur(function(){
		qyname = checkOther($J_qyname,"请输入企业名称");
	})
	$J_yynum.blur(function(){
		yynum = checkReg($J_yynum,"请输入营业执照注册号","请输入正确的营业执照注册号",nReg);
	})
	$J_frname.blur(function(){
		frname = checkReg($J_frname,"请输入法人姓名","请输入正确的法人姓名",cReg);
	})
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wr = obj.parent().next();
        $val = Trim($val,"g");
        if ($val == "") {
        	WrongColor($wr,obj);
            $wr.show().html(con1);
            return false;
        } else{
        	if(!preg.test($val)){
	            WrongColor($wr,obj);
	            $wr.show().html(con2);
	            return false;
	        }else{
	        	RightColor($wr,obj);
	            $wr.html("&nbsp;");
	            return true;
	        }    
        }
    }
    
    //判断其他不用正则的
    function checkOther(obj,con){
        var $val = obj.val();
        var $wr = obj.parent().next();
        if($val == ""){
            WrongColor($wr,obj);
            $wr.show().html(con);
            return false;
        }else{
            RightColor($wr,obj);
            $wr.html("&nbsp;");
            return true;
        } 
    }
    
	//综合样式判定
	function RightColor(obj,objn){
		obj.removeClass("aI_wrong").addClass("aI_right");
		objn.removeClass("aI_blue").removeClass("aI_red");
	}
	function WrongColor(obj,objn){
		obj.addClass("aI_wrong").removeClass("aI_right");
		objn.addClass("aI_red").removeClass("aI_blue");
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
	    obj.addClass("aI_blue").removeClass("aI_red");
	}
	function OnBlur(obj){
	   obj.removeClass("aI_blue").removeClass("aI_red"); 
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

	//上传图片预览(objs对象，img_yy上传的图片，imgbox图片显示位置，site图片地址显示位置)
    function upImg(objs, imgs) {
        objs.change(function () {
            var $file = $(this);
            //获取上传图片的大小
            var filesize = $file[0].files[0].size,
			sizeM = filesize/1024/1024;
            $fileVal = $file.val(),
            $site = $file.parent().prev().find(".aIupsite"),
            $wr_tr = objs.parent().parent().find(".aIup_p");
            $right = objs.parent().parent().find(".aIup_span");
            $wrong = objs.parent().parent().find(".aIup_span1");
            var fileObj = $file[0],
                windowURL = window.URL || window.webkitURL,
                dataURL;
            if (fileObj && fileObj.files && fileObj.files[0]) {
                var extStart = $fileVal.lastIndexOf(".");
                var ext = $fileVal.substring(extStart, $fileVal.length).toUpperCase();
                if (ext != ".BMP" && ext != ".PNG" && ext != ".JPG" && ext != ".JPEG") {
                    $wrong.show().html("图片格式错误");
                    $wrong.addClass("aIup_wrong");
                    $right.hide();
                    return false;
                }
                else if (sizeM > 2) {
                    $wrong.show().html("图片大小错误");
                    $wrong.addClass("aIup_wrong");
                    $right.hide();
                    return false;
                }
                else {
                    dataURL = windowURL.createObjectURL(fileObj.files[0]);
                    imgs.attr('src', dataURL);
                    imgs.parent().parent(".aIupimgBox").show();
                    $site.html($fileVal);
                    $wr_tr.hide();
                    objs.parent().css("margin-top", "72px");
                    $wrong.hide();
                    $wrong.removeClass("aIup_wrong");
                    $right.show();
                    $right.addClass("aI_right");
                    return true;
                }
            } else {
                dataURL = $file.val();
                var imgObj = document.getElementById(imgs);
                imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
                imgs.parent().parent(".aIupimgBox").hide();
                $site.html();
            }
        });
    }
	//上传图片预览
	
	function count(){
        var $initval = 10;
        var timer = window.setInterval(function(){
        	var s = $(".time");
            if(s.html() > 1){
            	$initval--;
                s.html($initval);
            }else{
                clearInterval(timer);
                layer.closeAll();
                return false; 
            }
        },1000)
    } 

})



