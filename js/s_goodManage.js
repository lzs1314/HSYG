$(document).ready(function(){
/***********************我的商户-商品管理***********************/

	//搜索栏获得焦点
	var $J_stName = $(".J_stName"),
		$J_stBarcode = $(".J_stBarcode");
	
	$J_stName.focus(function(){
		OnFocus($(this));
	});	
	$J_stBarcode.focus(function(){
		OnFocus($(this));
	});
	
	//搜索栏失去焦点
	$J_stName.blur(function(){
		OnBlur($(this));
	});	
	$J_stBarcode.blur(function(){
		OnBlur($(this));
	});
	
	//综合样式判定
	function OnFocus(obj){
	    obj.addClass("stnt_blue");
	}
	function OnBlur(obj){
	   obj.removeClass("stnt_blue"); 
	}

	//商品状态（仿select）
	var $tit = $(".stnt_select").children("p");
    $tit.click(function(){
        var $ss = $tit.index(this);
        $(this).toggleClass("p_on");
        $tit.eq($ss).next().toggle();
        $tit.eq($ss).next().children("li").click(function(){
            $tit.eq($ss).html($(this).html()).removeClass("p_on");
            $(this).parent().hide();
        });
    });
    //end 商品状态（仿select）

	//表格奇偶行变色
	$(".stn_table .tr:even").addClass("stn_td2");
    $(".stn_table .tr:odd").addClass("stn_td1"); 
    $(".stn_table tr:first").addClass("stn_th").removeClass("stn_td1");
    $(".snorms_table tr").removeClass("stn_td2").removeClass("stn_td1");
    //end 表格奇偶行变色
    
    //规格表格边框线
    $(".snorms_table").each(function(){
    	$(this).find("tr:first td").css({"border-top":"0px"});
    })
    $(".snorms_table tr").each(function(){
    	$(this).children("td:first").css({"border-left":"0px"});
    })   
    //end 规格表格边框线
    //显示多规格
        var $rightHeight;
        var $winHeight = $(window).height() - 412;
        var $stn_norms = $(".stn_norms");
        $stn_norms.hover(function(){
            if($(this).next().is(":hidden")){
                $(this).html("显示多规格");
            }
        },function(){
            if($(this).next().is(":hidden")){
                $(this).html("<img src='images/sellerCenter/stn_norms2.png' />");
            }else{
                $(this).html("<img src='images/sellerCenter/stn_norms1.png' />");
            }
        })
        
        
        flushHeight();
        function flushHeight(){
            if ($winHeight > $rightHeight) {
                var addHeight = $winHeight - $rightHeight;
                $(".rs_mcright").height($rightHeight + addHeight);
            }else{
                $(".rs_mcright").height("auto");
            }
        }
        function rightHeight(){
            $stn_norms.click(function(){
                var $trIndex = $(this).parents("tr").index();
                var $trTotal = $(this).parents("table").find(".tr").length;
                var $minusHeight = 60*($trTotal - $trIndex + 1) - 12; 
                var $snorms_div = $(this).next();
                var $sHeight = $snorms_div.height();
                $(".snorms_div").stop(true,false).slideUp(200);
                $(".snorms_div").parent().removeClass("zidex2");
                if($snorms_div.is(":hidden")){
                    $(".rs_mcright").height("auto");
                    if($sHeight > $minusHeight){
                        $(".rs_mcright").height(($sHeight+$rightHeight-$minusHeight))   
                    }
                    
                    $snorms_div.stop(true,false).slideDown(200);
                    $snorms_div.parent().addClass("zidex2");
                    $(this).html("<img src='images/sellerCenter/stn_norms1.png' />");
                }else{
                    $(".rs_mcright").height("auto");
                    $snorms_div.stop(true,false).slideUp(200);
                    $snorms_div.parent().removeClass("zidex2");
                    $(this).html("<img src='images/sellerCenter/stn_norms2.png' />");
                }
                return false;
            })
        }
        //end 显示多规格
    setTimeout(function () {
        $rightHeight = $(".rs_mcright").height();
        flushHeight();
        rightHeight();
    }, 2000);

    

    //下架按钮弹出信息提示
    $(".stn_xj").click(function(){
    	layer.open({
	        type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '150px'],
            shift: 2,
            skin: 'layerBtn2',
            btn: ['确 定', '取 消'],
            content: "<div class='snlayer'>确定对该商品进行下架操作？</div>"
		})        	
    })
    //end 下架按钮弹出信息提示
    
    
    //有货按钮弹出信息提示
    $(".stn_yh").click(function(){
    	layer.open({
	        type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '150px'],
            shift: 2,
            skin: 'layerBtn2',
            btn: ['确 定', '取 消'],
            content: "<div class='snlayer'>确定对该商品进行有货操作？</div>"
		})     	
    })
    //end 有货按钮弹出信息提示
    
    //无货按钮弹出信息提示
    $(".stn_wh").click(function(){
    	layer.open({
	        type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '150px'],
            shift: 2,
            skin: 'layerBtn2',
            btn: ['确 定', '取 消'],
            content: "<div class='snlayer'>确定对该商品进行无货操作？</div>"
		})     	
    })
    //end 无货按钮弹出信息提示    
    
    //上架按钮弹出信息提示
    $(".stn_sj").click(function(){
    	layer.open({
	        type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '150px'],
            shift: 2,
            skin: 'layerBtn2',
            btn: ['确 定', '取 消'],
            content: "<div class='snlayer'>确定对该商品进行上架操作？</div>"
		})     	
    })
    //end 上架按钮弹出信息提示       
    
	
	//点击零售（批发）价弹出改价弹窗
	var $lsclick = $(".stn_table").find(".lsclick"),
		$pflsclick = $(".stn_table").find(".pfclick");
	var money = /(^[1-9]([0-9]{0,6})?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]([0-9])?$)|(^[0-9]\.[0-9]([1-9])?$)|(^[0-9]\.[1-9]?$)/; //输入两位小数的数字，金钱格式
	var $J_ls = $(".J_ls"),
		$J_pf = $(".J_pf"),
		J_ls,
		J_pf;
		
	$lsclick.on('click', function(e) {
		var pri = $(this).text();
		$J_ls.val(pri);
        e.preventDefault();
    	layer.open({
	        type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '185px'],
            shift: 2,
            skin: 'layerBtn1',
            btn: ['确 定'],
            content: $(".lsp_layer"),
            yes:function(index){
            	J_ls = checkReg($J_ls,"请输入零售价","请输入正确的零售价",money);
            	if (J_ls) {
            		layer.close(index);
            		$(".priSpan").removeClass("pri_right");
            		$(".priP").removeClass("pri_wrong").html("");
            		return true;
            	} else{
            		return false;
            	}
            }
		})   		
	})		
	$pflsclick.on('click', function(e) {
		var pri = $(this).text();
		$J_pf.val(pri);
        e.preventDefault();
    	layer.open({
	        type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '185px'],
            shift: 2,
            skin: 'layerBtn1',
            btn: ['确 定'],
            content: $(".pfp_layer"),
            yes:function(index){
            	J_pf = checkReg($J_pf,"请输入批发价","请输入正确的批发价",money);
            	if (J_pf) {
            		layer.close(index);
            		$(".priSpan").removeClass("pri_right");
            		$(".priP").removeClass("pri_wrong").html("");
            		return true;
            	} else{
            		return false;
            	}
            }
		})   		
	})	
	
	/********焦点获得时**********/
	$J_ls.focus(function(){
		OnFocus2($(this));
	});
	$J_pf.focus(function(){
		OnFocus2($(this));
	});	
	
	/********焦点失去时**********/
	$J_ls.blur(function(){
		J_ls = checkReg($J_ls,"请输入零售价","请输入正确的零售价",money);
	});
	$J_pf.blur(function(){
		J_pf = checkReg($J_pf,"请输入批发价","请输入正确的批发价",money);
	});	
	
	//封装所有正则可用,obj需要判断的对象，wr错误正确需要在什么位置显示，con显示什么样的内容，preg正则表达式
    function checkReg(obj,con1,con2,preg){
        var $val = obj.val();
        var $wrong = obj.parent().parent().next().find(".priP");
        var $right = obj.parent().next().find(".priSpan");
        $val = Trim($val,"g");
        if ($val == "") {
        	WrongColor($wrong,$right,obj);
            $wrong.show().html(con1);
            return false;
        } else{
        	if(!preg.test($val)||$val==0||$val==0.0||$val==0.00){
	            WrongColor($wrong,$right,obj);
	            $wrong.show().html(con2);
	            return false;
	        }else{
	        	RightColor($wrong,$right,obj);
	            $wrong.html("&nbsp;");
	            return true;
	        }    
        }
    }	
	//综合样式判定
	function RightColor(obj,objs,objn){
		obj.removeClass("pri_wrong");
		objs.addClass("pri_right");
		objn.removeClass("pri_blue").removeClass("pri_red");
	}
	function WrongColor(obj,objs,objn){
		obj.addClass("pri_wrong");
		objs.removeClass("pri_right");
		objn.addClass("pri_red").removeClass("pri_blue");
	}
	function OnFocus2(obj){
	    obj.addClass("pri_blue").removeClass("pri_red");
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
	
	//点击零售（批发）价弹出改价弹窗




/***********************end 我的商户-商品管理***********************/
})