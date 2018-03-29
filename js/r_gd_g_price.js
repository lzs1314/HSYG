$(document).ready(function() {
    var $provBtn_add_tb2 = $(".provBtn_add_tb2"),
    $cfbtn = $(".cfbtn"),
    $add_btn = $(".add_btn"),
    $add_confirm = $(".add_confirm"),
    $add_cancel = $(".add_cancel"),
    $btnn = $(".btnn"),
    $skr_text = $(".skr_text"),
    $skzh_text = $(".skzh_text"),
    $money_text = $(".money_text"),
    $tan_bz = $(".tan_bz"),
    $dj_date = $(".dj_date"),
    $sh_text = $(".sh_text"),
    $start = $("#start"),
    $end = $("#end"),
    $derive_btn = $(".derive_btn"),
    $name = $(".vessel_name").children("input"),
    $order_txt = $(".order_txt"),
    $intext = /[zz][0-9]{11}/,//单据编号
    $dates = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, //日期格式
    $sname = /^[\u4e00-\u9fa5a-zA-Z]{1,10}$/,//字母汉字
    $num = /[0-9]{1,19}/,//数字
    $mon = /(^[1-9]([0-9]{0,8})?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]([0-9])?$)|(^[0-9]\.[0-9]([1-9])?$)|(^[0-9]\.[1-9]?$){1,10}/,//金钱格式
    dj_date,
    money_text,
    tan_bz;

    $start.focus(function() {
        focusInput($(this));
    });
    $end.focus(function() {
        focusInput($(this));
    });
    $dj_date.focus(function() {
        focusInput($(this));
    });
    $money_text.focus(function() {
        focusInput($(this));
    });
    $tan_bz.focus(function() {
        focusInput($(this));
    });
    $order_txt.focus(function() {
        OnFocus($(this));
    });

    $start.blur(function() {
        OnBlur($(this));
    });
    $end.blur(function() {
        OnBlur($(this));
    });
    $dj_date.blur(function() {
        dj_date = checkReg($dj_date, "请录入单据日期", "请录入正确的单据日期", $dates);
    });
    $money_text.blur(function() {
        money_text = checkReg($money_text, "请录入金额", "请录入正确的金额", $mon);
    });
    $tan_bz.blur(function() {
        OnBlur($(this));
    });
    $order_txt.blur(function() { //快递单号
        Checkorder();
    });


    //录入单号验证
    $name.focus(function() {
        OnFocus($name);
        if ($(this).val() == "输入商品名称或编码进行查询") {
            $(this).val("");
        }
    });
    $name.blur(function() {
        if ($(this).val() == "") {
            OnBlur($(this));
            $(this).val("输入商品名称或编码进行查询");
            $(this).css({
                color: "#909090"
            });
        } else if (!$intext.test($(this).val())) {
            $(this).removeClass("aI_blue").addClass("aI_red");
        } else {
            OnBlur($(this));
            $(this).css({
                color: "#434343"
            });
        }
    });
    $name.keyup(function() {
        $(this).css({
            color: "#434343"
        });
    });
    //end 录入单号验证
    //订单状态（仿select）
    var $tit = $(".gd_com_sel").children("p");
    $tit.click(function() {
        var $ss = $tit.index(this);
        $(this).toggleClass("gd_sel_p1");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function() {
            $tit.eq($ss).html($(this).html()).removeClass("gd_sel_p1");
            $(this).parent().hide();
        });
    });
    $(document).bind("click",
    function(e) {
        var target = $(e.target);
        if (target.closest(".gd_com_sel").length == 0) {
            $tit.removeClass("gd_sel_p1");
            $(".gd_com_ul").hide();
        }
    });
    $(".dobtn").click(function() {
        $(this).parent().parent().remove();
    });

    //封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj, con1, con2, preg) {
        var $val = obj.val();
        var $wr = obj.parent().next();
        $val = Trim($val, "g");
        if ($val == "") {
            WrongColor($wr, obj);
            $wr.html(con1);
            return false;
        } else {
            if (!preg.test($val)) {
                WrongColor($wr, obj);
                $wr.html(con2);
                return false;
            } else {
                RightColor($wr, obj);
                $wr.html("&nbsp;");
                return true;
            }
        }
    }

    //综合样式判定
    function RightColor(obj, objn) {
        obj.addClass("note_right").removeClass("note_wrong");
        objn.removeClass("b_blue").removeClass("b_red");
    }
    function WrongColor(obj, objn) {
        obj.addClass("note_wrong").removeClass("note_right");
        objn.addClass("b_red").removeClass("b_blue");
    }
    function OnFocus(obj) {
        obj.addClass("b_blue").removeClass("b_red");
    }
    //去除空格  
    function Trim(str, is_global) {
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g, "");
        if (is_global.toLowerCase() == "g") {
            result = result.replace(/\s/g, "");
        }
        return result;
    }

    function focusInput($input) {
        OnFocus($input);
    }
    function OnFocus(obj) {
        obj.addClass("b_blue").removeClass("b_red");
    }
    function OnBlur(obj) {
        obj.removeClass("b_blue").removeClass("b_red");
    }
    

    //一二三级分类折叠
    $(".cate_i").click(function(){
    	if($(this).parent().hasClass("cate_cl")){
    		$(this).parent().removeClass("cate_cl");
    		$(this).html('<img src="images/gd_img/cate_one_on.png">');
    		$(".cate1").show();
    		$(".cate1").addClass("shadow");
    	}else{
    		$(this).parent().addClass("cate_cl");
    		$(this).html('<img src="images/gd_img/cate_one.png">');
    		$(".cate1").hide();
    		$(".cate1").removeClass("shadow");
    	}
    })
    $(".cate_i2").click(function(){
    	if($(this).parent().hasClass("cate_cl")){
    		$(this).parent().removeClass("cate_cl");
    		$(this).html('<img src="images/gd_img/cate_two_on.png">');
    		$(".cate2").show();
    		$(".cate1").removeClass("shadow");
    		$(".cate2").addClass("shadow");
    	}else{
    		$(this).parent().addClass("cate_cl");
    		$(this).html('<img src="images/gd_img/cate_two.png">');
    		$(".cate2").hide();
    		$(".cate1").addClass("shadow");
    		$(".cate2").removeClass("shadow");
    	}
    })

		var $inpReg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
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

	//单品变价弹窗
		var $chbtn=$('.chbtn')
		$chbtn.click(function(){
			layer.open({
				type: 1,
				title: false,
				closeBtn: 1,
				skin: 'layerBtn2',
				area: ['460px', ''],
				btn: ['确 定','取消'],
				shift: 2,
				content: $(".provBtn_add_tb2"),
				yes:function(){
            		var $inp_bjVal = $provBtn_input.val();
			        //var $mon = parseFloat(10);  //10为成本价
			        var $inp_val = parseFloat($inp_bjVal);
			        var $inp_bjVal2 = $provBtn_input2.val();
			        //var $mon = parseFloat(10);  //10为成本价
			        var $inp_val2 = parseFloat($inp_bjVal2);
			        if(($inp_bjVal != "" || $inp_bjVal2 != "") && ($inpReg.test($inp_bjVal) || $inpReg.test($inp_bjVal2))){
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
	                }
            		if($inp_bjVal.length == 0 && $inp_bjVal2.length == 0){
			        	layer.open({
		                    type: 1,
		                    title: false,
		                    closeBtn: 1,
		                    skin: 'layerBtn1',
		                    area: ['380px', '150px'],
		                    btn: ['确 定'],
		                    content: "<div class='layer_suc'><img src='images/common/lay2.png'>请输入该商品的公司定价或定价比率!</div>"
		                })
			        }else if(!$inpReg.test($inp_bjVal) || !$inpReg.test($inp_bjVal2)){
			        	layer.open({
		                    type: 1,
		                    title: false,
		                    closeBtn: 1,
		                    skin: 'layerBtn1',
		                    area: ['380px', '150px'],
		                    btn: ['确 定'],
		                    content: "<div class='layer_suc'><img src='images/common/lay2.png'>请输入正确的公司定价或定价比率!</div>"
		                })
			        }
			    }
			});
		});
		var $cfbtn1=$('.cfbtn1')
		$cfbtn1.click(function(){
			layer.open({
				type: 1,
				title: false,
				closeBtn: 1,
				skin: 'layerBtn2',
				area: ['460px', ''],
				btn: ['确 定','取消'],
				shift: 2,
				content: $(".provBtn_add_tb2"),
				yes:function(){
					var $inp_bjVal = $provBtn_input.val();
			        var $mon = parseFloat(10);  //10为成本价
			        var $inp_val = parseFloat($inp_bjVal);
			        var $inp_bjVal2 = $provBtn_input2.val();
			        var $mon = parseFloat(10);  //10为成本价
			        var $inp_val2 = parseFloat($inp_bjVal2);
			        if(($inp_bjVal != "" || $inp_bjVal2 != "") && ($inpReg.test($inp_bjVal) || $inpReg.test($inp_bjVal2))){
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
	                }
            		if($inp_bjVal.length == 0 && $inp_bjVal2.length == 0){
			        	layer.open({
		                    type: 1,
		                    title: false,
		                    closeBtn: 1,
		                    skin: 'layerBtn1',
		                    area: ['380px', '150px'],
		                    btn: ['确 定'],
		                    content: "<div class='layer_suc'><img src='images/common/lay2.png'>请输入该商品的公司定价或定价比率!</div>"
		                })
			        }else if(!$inpReg.test($inp_bjVal) || !$inpReg.test($inp_bjVal2)){
			        	layer.open({
		                    type: 1,
		                    title: false,
		                    closeBtn: 1,
		                    skin: 'layerBtn1',
		                    area: ['380px', '150px'],
		                    btn: ['确 定'],
		                    content: "<div class='layer_suc'><img src='images/common/lay2.png'>请输入正确的公司定价或定价比率!</div>"
		                })
			        }
			    }
			});
		});
		var $cfbtn2=$('.cfbtn2')
		$cfbtn2.click(function(){
			layer.open({
				type: 1,
				title: false,
				closeBtn: 1,
				skin: 'layerBtn2',
				area: ['440px', ''],
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
		
//	//load
//	$(".add_btn").click(function(){
//		layer.open({
//		            type: 1,
//		            title: false,
//		            closeBtn: 1,
//		            skin: 'layerBtn1',
//		            area: ['460px', '276px'],
//		            btn: [],
//		            content: "<div class='layer_err'><img src='images/gd_img/gd_load.gif'></div>"
//		        })
//	})
		

	
	
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
	        $(this).addClass("b_blue");
	    });
	    $provBtn_input.blur(function(){   
	        $(this).removeClass("b_blue");
	    });
	    $provBtn_input2.focus(function(){ 
	        $(this).addClass("b_blue");
	    });
	    $provBtn_input2.blur(function(){   
	        $(this).removeClass("b_blue");
	    });
	    $provBtn_input3.focus(function(){ 
	       $(this).addClass("b_blue");
	    });
//		function CheckReg(){
//	        var $inp_bjVal = $provBtn_input.val();
//	        var $mon = parseFloat(10);  //10为成本价
//	        var $inp_val = parseFloat($inp_bjVal);
//	        var $nextp = $(".notop");
//	        $inp_bjVal = Trim($inp_bjVal,"g");
//	        if($inp_bjVal.length == 0){
//	            WrongColor($nextp,$provBtn_input);
//	            $nextp.html("请输入该商品的公司定价");
//	            return false;
//	        }else if(!$inpReg.test($inp_bjVal)){
//	            WrongColor($nextp,$provBtn_input);
//	            $nextp.html("请输入正确的公司定价");
//	            return false;
//	        }else{
//	            $nextp.html("&nbsp;");
//	            RightColor($nextp,$provBtn_input);
//	            return true;
//	        }        
//	    }
//		function CheckReg2(){
//	        var $inp_bjVal2 = $provBtn_input2.val();
//	        var $mon = parseFloat(10);  //10为成本价
//	        var $inp_val2 = parseFloat($inp_bjVal2);
//	        var $nextp2 = $(".notop2");
//	        $inp_bjVal2 = Trim($inp_bjVal2,"g");
//	        if($inp_bjVal2.length == 0){
//	            WrongColor($nextp2,$provBtn_input2);
//	            $nextp2.html("请输入该商品的定价比率");
//	            return false;
//	        }else if(!$inpReg.test($inp_bjVal2)){
//	            WrongColor($nextp2,$provBtn_input2);
//	            $nextp2.html("请输入正确的定价比率");
//	            return false;
//	        }else{
//	            $nextp2.html("&nbsp;");
//	            RightColor($nextp2,$provBtn_input2);
//	            return true;
//	        }        
//	    }
		
		$provBtn_input3.blur(function(){
			$(this).removeClass("b_blue");
			if($(this).val() == ""){
				$(this).addClass("b_red");
				$(this).parent().parent().next().children(".tb3").addClass("note_wrong");
				$(this).parent().parent().next().children(".tb3").html("请输入定价比例")
			}else{
				$(this).removeClass("b_red");
				$(this).parent().parent().next().children(".tb3").removeClass("note_wrong");
				$(this).parent().parent().next().children(".tb3").html("")
			}
		})

})