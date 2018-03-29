$(document).ready(function(){
/***********************我的商户-运费设置***********************/
	/************新建运费模板**************/
	var	$newsetBtn = $(".newsetBtn"),
		$fset_savebtn = $(".fset_savebtn"),
		$fset_cancelbtn = $(".fset_cancelbtn"),	
		$newset = $(".newset");
	$newsetBtn.click(function(){
		$(this).addClass("newsetBtn_jin");
		$newset.show();
		return false;
	})
	
	//点击取消按钮关闭新建模板
	$fset_cancelbtn.click(function(){
		$newset.hide();
		$newsetBtn.removeClass("newsetBtn_jin");
	})
	//点击取消按钮关闭新建模板
	
	var $setareaBtn = $(".setareaBtn"),
		$assign_layer = $(".assign_layer"),
		$J_nameInput = $(".J_nameInput"),
		$J_num1 = $(".J_num1"),
		$J_num2 = $(".J_num2"),
		$J_yuan1 = $(".J_yuan1"),
		$J_yuan2 = $(".J_yuan2"),
		J_nameInput,
		J_num1,
		J_num2,
		J_yuan1,
		J_yuan2;
		
	$fset_savebtn.click(function(){
		J_nameInput = checkVal($J_nameInput,"请输入模板名称");
		J_num1 = checkVal2($J_num1);
		J_num2 = checkVal2($J_num2);
		J_yuan1 = checkVal2($J_yuan1);
		J_yuan2 = checkVal2($J_yuan2);
		if(J_nameInput&&J_num1&&J_num2&&J_yuan1&&J_yuan2){
			return true;
		}else{
			return false;
		}		
	})	
	
	/********焦点获得时**********/
	$J_nameInput.focus(function(){
		$(this).addClass("fset_blue").removeClass("fset_red");
	});
	$J_num1.focus(function(){
		$(this).addClass("fset_blue").removeClass("fset_red");
	});
	$J_num2.focus(function(){
		$(this).addClass("fset_blue").removeClass("fset_red");
	});
	$J_yuan1.focus(function(){
		$(this).addClass("fset_blue").removeClass("fset_red");
	});
	$J_yuan2.focus(function(){
		$(this).addClass("fset_blue").removeClass("fset_red");
	});	
	
	
	/********焦点失去时**********/
	$J_nameInput.blur(function(){
		J_nameInput = checkVal($J_nameInput,"请输入模板名称");
	});	
	$J_num1.blur(function(){
		J_num1 = checkVal2($J_num1);
	});		
	$J_num2.blur(function(){
		J_num2 = checkVal2($J_num2);
	});	
	$J_yuan1.blur(function(){
		J_yuan1 = checkVal2($J_yuan1);
	});	
	$J_yuan2.blur(function(){
		J_yuan2 = checkVal2($J_yuan2);
	});		
	
    function checkVal(obj,con){
        var $val = obj.val();
        var $wrspan = obj.next();
        $val = Trim($val,"g");
        if ($val == "") {
            obj.addClass("fset_red").removeClass("fset_blue");
    		$wrspan.addClass("fset_wrong").removeClass("fset_right");
			$wrspan.html(con);
            return false;
        } else{
	        obj.removeClass("fset_blue").removeClass("fset_red");
    		$wrspan.addClass("fset_right").removeClass("fset_wrong");
			$wrspan.html("&nbsp;");
	        return true;
        }
    }
    function checkVal2(obj){
        var $val = obj.val();
        $val = Trim($val,"g");
        if ($val == "") {
            obj.addClass("fset_red").removeClass("fset_blue");
            return false;
        } else{
	        obj.removeClass("fset_blue").removeClass("fset_red");
	        return true;
        }
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
	
	//选择配送方式
	var $J_way_a = $(".J_way").children("a");
	$J_way_a.click(function(){
		$(this).addClass("setway_on").siblings("a").removeClass("setway_on");
	})
	//end 选择配送方式
	
	//运费设置方式
	var $J_sub_a = $(".J_sub").children("a");
	$J_sub_a.click(function(){
		$(this).addClass("setway_on").siblings("a").removeClass("setway_on");
		var $J_sub1 = $(".J_sub1");
		if ($J_sub1.hasClass("setway_on")) {
			$(".J_sub1_tr").show();
		} else{
			$(".J_sub1_tr").hide();
		}
	})
	
	//end 运费设置方式
	
	/************end 新建运费模板**************/
	
	
	//设置指定区域运费
	var $setarea_table = $(".setarea_table");
	$setareaBtn.click(function(){
	    layer.open({
	        type: 1,
	        title: false,
	        closeBtn: 1,
	        skin: 'layerBtn2',
	        area: ['530px', '270px'],
	        btn: ['保存','取消'],
	        content: $assign_layer,
            yes:function(index){
            	var $J_proval = $(".J_province").val(),
            		$J_cityval = $(".J_city").val(),
            		$J_townval = $(".J_town").val(),
            		$J_selval = $(".J_sel").val(),
            		$cityval,
            		$townval,
            		$selval;
            	if ($J_cityval == "地级市") {
            		$cityval = "&nbsp;";
            	}else{
            		$cityval = $(".J_city").val();
            	}
            	if ($J_townval == "市、县级市、县") {
            		$townval =  "&nbsp;";
            	}else{
            		$townval = $(".J_town").val();
            	}
            	if ($J_selval == "请选择社区") {
            		$selval =  "&nbsp;";
            	}else{
            		$selval = $(".J_sel").val();
            	}
				var $list = '<tr>';
            	$list += '<td class="tlp"><div class="zd_div"><span class="zd_span_out clearfloat">' + "<a>" + $J_proval + "</a>" + "<a>" + $cityval + "</a>" + "<a>" + $townval + "</a>" + "<a>" + $selval + "</a>" + '<i class="addarea"></i></span></div></td>';
				$list += '<td><input type="text" class="zd_input" /></td>';
				$list += '<td><input type="text" class="zd_input" /></td>';
				$list += '<td><input type="text" class="zd_input" /></td>';
				$list += '<td><input type="text" class="zd_input" /></td>';
				$list += '<td><span class="list_delbtn">删除</span></td>';
				$list += '</tr>';
				$setarea_table.append($list);	
                $(".setarea_table .zd_div").each(function(){
                	$(this).children().eq(0).addClass("btop0"); 
                })
        		layer.close(index);        		 
            }	        
	    })
	})

	
	//end 设置指定区域运费
	
	
	
	//增加指定区域
	$(".setarea_table").on("click",".addarea", function(e){
		var $addto = $(this).parent().parent();
    	$(this).parent().parent().find(".addarea").hide();
	    layer.open({
	        type: 1,
	        title: false,
	        closeBtn: 1,
	        skin: 'layerBtn2',
	        area: ['530px', '270px'],
	        btn: ['保存','取消'],
	        content: $assign_layer,
            yes:function(index){
            	var $J_proval = $(".J_province").val(),
            		$J_cityval = $(".J_city").val(),
            		$J_townval = $(".J_town").val(),
            		$J_selval = $(".J_sel").val(),
            		$cityval,
            		$townval,
            		$selval;
            	if ($J_cityval == "地级市") {
            		$cityval = "&nbsp;";
            	}else{
            		$cityval = $(".J_city").val();
            	}
            	if ($J_townval == "市、县级市、县") {
            		$townval =  "&nbsp;";
            	}else{
            		$townval = $(".J_town").val();
            	}
            	if ($J_selval == "请选择社区") {
            		$selval =  "&nbsp;";
            	}else{
            		$selval = $(".J_sel").val();
            	}
				$addto.append(function(){
					return '<span class="zd_span_out clearfloat">' + '<a>' + $J_proval + '</a>' + '<a>' + $cityval + '</a>' + '<a>' + $townval + '</a>' + '<a>' + $selval + '</a>' + '<i class="addarea"></i></span>';
				});
				//去掉第一个border-top
                $(".setarea_table .zd_div").each(function(){
                	$(this).children().eq(0).addClass("btop0"); 
                })
        		layer.close(index);
            }	        
	    })		
	})
	
	

	//end  增加指定区域
	//删除
	$setarea_table.on("click",".list_delbtn",function(){
		$(this).parent().parent().remove();
	})
	//end 删除
	
	//模板表格多区域
    $(".temp_table .teb_p_td").each(function(){
    	$(this).children().eq(0).addClass("btop0"); 
    })	
	//end 模板表格多区域


/***********************end 我的商户-运费设置***********************/
})