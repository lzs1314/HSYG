$(document).ready(function(){
	var $inpReg = /^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/,
		$provBtn_input = $(".provBtn_input");
	$(".pbselect_lg").click(function(){
		if($(this).hasClass("pbselect_lg_on")){
		    $(this).removeClass("pbselect_lg_on");
		}
		else{
			$(this).addClass("pbselect_lg_on");
			}
	})
	$(".pbselect_lg").blur(function(){
		$(this).removeClass("pbselect_lg_on");
	})
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

		function CheckReg(){
	        var $inp_bjVal = $provBtn_input.val();
	        var $mon = parseFloat(10);  //10为成本价
	        var $inp_val = parseFloat($inp_bjVal);
	        var $nextp = $(".notop");
	        $inp_bjVal = Trim($inp_bjVal,"g");
	        if($inp_bjVal.length == 0){
	            WrongColor($nextp,$provBtn_input);
	            $nextp.html("请输入该商品的零售价");
	            return false;
	        }else if(!$inpReg.test($inp_bjVal)){
	            WrongColor($nextp,$provBtn_input);
	            $nextp.html("请输入正确的零售价");
	            return false;
	        }else if($inp_val < $mon){  
	        	WrongColor($nextp,$provBtn_input);
	            $nextp.html("您输入的售价过低,请重新调整!");
	            return false;
	        }
	        else{
	            $nextp.html("&nbsp;");
	            RightColor($nextp,$provBtn_input);
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
				area: ['582px', ''],
				btn: ['确 定','取消'],
				shift: 2,
				content: $(".provBtn_add_tb2"),
				yes:function(){
            		if(CheckReg()){
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
				area: ['582px', ''],
				btn: ['确 定','取消'],
				shift: 2,
				content: $(".provBtn_add_tb2"),
				yes:function(){
            		if(CheckReg()){
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
	
});