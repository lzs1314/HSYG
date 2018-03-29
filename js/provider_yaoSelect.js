$(document).ready(function(){
	var nuReg = /^[0-9]+(.[0-9]{1,2})?$/,  //两位小数	
		nuReg1 = /^[0-9]+(.[0-9]{1,6})?$/,  //两位小数
		nReg = /^[0-9]+$/;  //可输入数字的正则
	var $letter = $(".letter"),
		$num = $(".num"),
		$weight = $(".weight"),
		$remark = $(".remark"),
		$save_btn = $(".save_btn"),
		$filebtn = $(".addPic").children("input"),
		$ulupload1 = $(".goods_uploadpic1"),
		letter,
		weight,
		remark;
		$(".select_num").click(function(){
			if($(".select_num").val() == "起售价"){
			$(".num").next().html("请输入起售价");
			
		}else if($(".select_num").val() == "起售量"){
			$(".num").next().html("请输入起售量");
		}
		})
		
	$save_btn.click(function(){
		letter = checkReg($letter,"请输入件装信息","请输入正确的件装信息",nReg);
		if($(".select_num").val() == "起售价"){
			num = checkReg($num,"请输入起售价","请输入正确的起售价",nuReg);
		}else if($(".select_num").val() == "起售量"){
			num = checkReg($num,"请输入起售量","请输入正确的起售量",nReg);
		}
		select_lg = checkOther($select_lg,"请选择所属区域");
		weight = checkReg($weight,"请输入重量","请输入正确重量",nuReg1);
		remark = checkOther2($remark,"请输入备注");
		if(letter&&select_lg&&weight&&remark){
			layer.open({
		            type: 1,
		            title: false,
		            closeBtn: 1,
		            skin: 'layerBtn1',
		            area: ['380px', '150px'],
		            btn: ['确 定'],
		            content: "<div class='layer_suc'><img src='images/common/lay1.png'>药品信息提交成功!</div>"
		        })
			return true;
		}else{
			return false;
		}
	})
	
	/********焦点获得时**********/
	$letter.focus(function(){
		focusInput($(this),$(this).next());
	});
	$letter.next().click(function(){
		clickText($letter,$(this));
	});	
 

	$num.focus(function(){
		focusInput($(this),$(this).next());
	});
	$num.next().click(function(){
		clickText($num,$(this));
	});	
 
	$weight.focus(function(){
		OnFocus($(this));
	});
	$remark.focus(function(){
		focusInput($(this),$(this).next());
	});
	$remark.next().click(function(){
		clickText($remark,$(this));
	});	
	
	
	/********焦点失去时**********/
	$letter.blur(function(){
		blurInput($(this),$(this).next());
		letter = checkReg($letter,"请输入件装信息","请输入正确的件装信息",nReg);
	})
	$num.blur(function(){
		blurInput($(this),$(this).next());
		if($(".select_num").val() == "起售价"){
			num = checkReg($num,"请输入起售价","请输入正确的起售价",nuReg);
		}else if($(".select_num").val() == "起售量"){
			num = checkReg($num,"请输入起售量","请输入正确的起售量",nReg);
		}
		
	})
	$weight.blur(function(){
		weight = checkReg($weight,"请输入重量","请输入正确重量",nuReg1);
	})
	$remark.blur(function(){
		blurInput($(this),$(this).next());
		remark = checkOther2($(this),"请输入备注");
	})
	
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wr = obj.next().next();
        $val = Trim($val,"g");
        if ($val == "") {
        	WrongColor($wr,obj);
            $wr.html(con1);
            return false;
        } else{
        	if(!preg.test($val)){
	            WrongColor($wr,obj);
	            $wr.html(con2);
	            return false;
	        }else{
	        	RightColor($wr,obj);
	            $wr.html("&nbsp;");
	            return true;
	        }    
        }
    }
    
     //判断其他不用正则的
    function checkOther2(obj,con){
        var $val = obj.val();
        var $wr = obj.next().next();
        $val = Trim($val,"g");
        if($val == ""){
            WrongColor($wr,obj);
	            $wr.html(con);
	            return false;
	        }else{
	        	RightColor($wr,obj);
	            $wr.html("&nbsp;");
	            return true;
	        }    
    }

	var $save_btn = $(".save_btn"),
		$s3 = $("#s3"),
		$select_lg = $(".pbselect_lg"),
		s3,
		select_lg;
	
	/********焦点获得时**********/
	
	$select_lg.focus(function(){
		OnFocus($(this));
	});
	
	/********焦点失去时**********/

	$select_lg.change(function(){
		OnBlur($(this));
		select_lg = checkOther($(this),"请选择所属区域");
	});
	
	//判断其他不用正则的1
    function checkOther(obj,con){
        var $val = obj.val();
       var $wr = obj.next();
        var $right = obj.parent().next();
        if($val == "" || $val == "请选择"){
            WrongColor($wr,obj);
            $wr.html(con);
            return false;
        }else{
            RightColor($wr,obj);
            $wr.html("&nbsp;");
            return true;
        } 
    }
	//综合样式判定
	function RightColor(obj,objn){
		obj.addClass("prov_right").removeClass("prov_wrong");
		objn.removeClass("prov_blue").removeClass("prov_red");
	}
	function WrongColor(obj,objn){
		obj.addClass("prov_wrong").removeClass("prov_right");
		objn.addClass("prov_red").removeClass("prov_blue");
	}
	function OnFocus(obj){
	    obj.addClass("prov_blue").removeClass("prov_red");
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

	function OnBlur(obj){
	   obj.removeClass("prov_blue").removeClass("prov_red"); 
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
	$filebtn.change(function(){
			var $file = $(this),
	        	fileObj = $file[0],
		        windowURL = window.URL || window.webkitURL,
		        $li = $('<li><img src=""><p style="display: none;"></p><span class="deletePic"></span></li>'),
		        $imgs = $li.children("img"),
		        $real_li = $(this).parent().parent().children("li"),
		        $reallen = $real_li.length - 2,
		        dataURL,
	        	$ulupload = $(".goods_uploadpic"),
	        	$p = $li.children("p"),
				$img = $ulupload.find("img"),
	            $listp = $ulupload.find("p"),
	            $arr = [];
	
		    $(this).parent().parent().find("a").html(($reallen+1));    
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
				    if(fileObj && fileObj.files && fileObj.files[0]){
			            dataURL = windowURL.createObjectURL(fileObj.files[0]);
			            $imgs.attr('src',dataURL);
			            $(this).parent().parent().prepend($li);
			        }else{
				        dataURL = $file.val();
				        $imgs.attr('src',dataURL);
				        $(this).parent().parent().prepend($li);
			        }	    		
		    	}          
	        }else{
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
		});
	
		$filebtn.parent().parent().on("click",".deletePic",function(){
			$(this).parent().remove();
		});
		
	    
	
	})