$(document).ready(function(){
	var $inpReg = /^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/,
		$provBtn_input = $(".tb3_input"),
		$provBtn_input2 = $(".tb3_input2"),
		$provBtn_input3 = $(".tb3_input3");
	$(".pbselect_lg").click(function(){
		if($(this).hasClass("pbselect_lg_on")){
		    $(this).removeClass("pbselect_lg_on");
		}
		else{
			$(this).addClass("pbselect_lg_on");
			}
	})
	
	
	//焦点获得时
	var $pbselect_text = $(".pbselect_text"),
		$pbselect_span = $(".pbselect_span");
		$pbselect_span.click(function(){
			$(this).hide();
			$pbselect_text.focus();
		});
		$pbselect_text.focus(function(){
		$pbselect_text.addClass("pbselect_text_on");
		$pbselect_span.hide();
		});
		//焦点失去时
		$pbselect_text.blur(function(){
			$pbselect_text.removeClass("pbselect_text_on");
			if($pbselect_text.val() == ""){
				$pbselect_span.show();
				}
			else{}
			
		});
		$provBtn_input.focus(function(){ 
	        OnFocus($(this));
	    });
	    $provBtn_input.blur(function(){   
	        CheckReg();
	    });
	    $provBtn_input2.focus(function(){ 
	        OnFocus($(this));
	    });
	    $provBtn_input2.blur(function(){   
	        CheckReg2();
	    });
	    $provBtn_input3.focus(function(){ 
	        OnFocus($(this));
	    });
	    $provBtn_input3.blur(function(){   
	        CheckReg3();
	    });

		function CheckReg(){
	        var $inp_bjVal = $provBtn_input.val();
	        var $mon = parseFloat(10);  //10为成本价
	        var $inp_val = parseFloat($inp_bjVal);
	        var $nextp = $(".notop");
	        $inp_bjVal = Trim($inp_bjVal,"g");
	        if($inp_bjVal.length == 0){
	            WrongColor($nextp,$provBtn_input);
	            $nextp.html("请输入该商品的公司定价");
	            return false;
	        }else if(!$inpReg.test($inp_bjVal)){
	            WrongColor($nextp,$provBtn_input);
	            $nextp.html("请输入正确的公司定价");
	            return false;
	        }else{
	            $nextp.html("&nbsp;");
	            RightColor($nextp,$provBtn_input);
	            return true;
	        }        
	    }
		function CheckReg2(){
	        var $inp_bjVal2 = $provBtn_input2.val();
	        var $mon = parseFloat(10);  //10为成本价
	        var $inp_val2 = parseFloat($inp_bjVal2);
	        var $nextp2 = $(".notop2");
	        $inp_bjVal2 = Trim($inp_bjVal2,"g");
	        if($inp_bjVal2.length == 0){
	            WrongColor($nextp2,$provBtn_input2);
	            $nextp2.html("请输入该商品的定价比率");
	            return false;
	        }else if(!$inpReg.test($inp_bjVal2)){
	            WrongColor($nextp2,$provBtn_input2);
	            $nextp2.html("请输入正确的定价比率");
	            return false;
	        }else{
	            $nextp2.html("&nbsp;");
	            RightColor($nextp2,$provBtn_input2);
	            return true;
	        }        
	    }
		function CheckReg3(){
	        var $inp_bjVal3 = $provBtn_input3.val();
	        var $mon = parseFloat(10);  //10为成本价
	        var $inp_val3 = parseFloat($inp_bjVal3);
	        var $nextp3 = $(".notop3");
	        $inp_bjVal3 = Trim($inp_bjVal3,"g");
	        if($inp_bjVal3.length == 0){
	            WrongColor($nextp3,$provBtn_input3);
	            $nextp3.html("请输入该商品的定价比率");
	            return false;
	        }else if(!$inpReg.test($inp_bjVal3)){
	            WrongColor($nextp3,$provBtn_input3);
	            $nextp3.html("请输入正确的定价比率");
	            return false;
	        }else{
	            $nextp3.html("&nbsp;");
	            RightColor($nextp3,$provBtn_input3);
	            return true;
	        }        
	    }
		//单品变价弹窗
		var $cfbtn=$('.cfbtn')
		$cfbtn.click(function(){
			layer.open({
				type: 1,
				title: false,
				closeBtn: 1,
				skin: 'layerBtn2',
				area: ['460px', '320px'],
				btn: ['确 定','取消'],
				shift: 2,
				content: $(".provBtn_add_tb2"),
				yes:function(){
            		if(CheckReg() || CheckReg2()){
	                    layer.closeAll();
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
	                }else{
	                    return false;
	                }
        		}
			});
			
		});
		var $cbbtn=$('.cbbtn')
		$cbbtn.click(function(){
			layer.open({
				type: 1,
				title: false,
				closeBtn: 1,
				skin: 'layerBtn2',
				area: ['460px', '320px'],
				btn: ['确 定','取消'],
				shift: 2,
				content: $(".provBtn_add_tb2"),
				yes:function(){
            		if(CheckReg() || CheckReg2()){
	                    layer.closeAll();
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
	                }else{
	                    return false;
	                }
        		}
			});
		});
		var $cbbtn2=$('.cbbtn2')
		$cbbtn2.click(function(){
			layer.open({
				type: 1,
				title: false,
				closeBtn: 1,
				skin: 'layerBtn2',
				area: ['460px', '290px'],
				btn: ['确 定','取消'],
				shift: 2,
				content: $(".provBtn_add_tb3"),
				yes:function(){
            		if(CheckReg3()){
	                    layer.closeAll();
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
	                }else{
	                    return false;
	                }
        		}
			});
		});
		$(".dobtn").click(function(){
			$(this).parent().parent().remove();
		})
	//综合样式判定
   function focusInput($input,$text){
        $text.hide();
    }
    function clickText($input,$text){
        $input.focus();
        $text.hide();
    }
    function blurInput($input,$text){
        if($input.val() == ""){
            $text.show();
        }
    } //
    function RightColor(obj,objn){
        obj.removeClass("note_wrong1");
        objn.removeClass("b_blue").removeClass("b_red");
    }
    function WrongColor(obj,objn){
        obj.addClass("note_wrong1");
        objn.addClass("b_red").removeClass("b_blue");
    }
    function OnFocus(obj){
        obj.addClass("b_blue").removeClass("b_red");
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
    
    $(".pbselect_drug").click(function(){
		if($(this).hasClass("pbselect_lg_on")){
		    $(this).removeClass("pbselect_lg_on");
		}
		else{
			$(this).addClass("pbselect_lg_on");
			}
	})
	$(".pbselect_drug").blur(function(){
		$(this).removeClass("pbselect_lg_on");
	})
	
	//商品定价/分类定价转换
    $(".pri1").click(function(){
    	$(this).children().addClass("pricing").removeClass("ple");
    	$(this).next().children().addClass("ple").removeClass("pricing");
    	$(".pur_cont1").hide();
    	$(".pur_cont2").show();
    	$(".select_classify").show();
    })
    $(".pri2").click(function(){
    	$(this).children().addClass("pricing").removeClass("ple");
    	$(this).prev().children().addClass("ple").removeClass("pricing");
    	$(".pur_cont1").show();
    	$(".pur_cont2").hide();
    	$(".select_classify").hide();
    })
    
    //验证上传的Excel文件是否正确
    $(".import_file").change(function(){
    	var $fileVal = $(this).val();
    	var extStart = $fileVal.lastIndexOf(".");
        var ext = $fileVal.substring(extStart, $fileVal.length).toUpperCase();
    	if (ext != ".XLSX") {  
			layer.open({
	        type: 1,
	        title: false,
	        closeBtn: 1,
	        skin: 'layerBtn1',
	        area: ['380px', '140px'],
	        btn: ['确 定'],
	        content: "<div class='layer_err'><img src='images/common/lay2.png'>您的文件信息有误，请重新选择！</div>"
	    }) 
	        $(".import_file").val("");
            return false  
        } 
    })
    
    //分类定价弹窗
    $(".select_classify").click(function(){
    	layer.open({
				type: 1,
				title: false,
				closeBtn: 1,
				skin: 'layerBtn2',
				area: ['470px', '290px'],
				btn: ['确 定','取消'],
				shift: 2,
				content: $(".provBtn_add_tb3")
				})
    })
	
});