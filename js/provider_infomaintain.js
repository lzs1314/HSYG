$(document).ready(function(){
     //页签转换
    var $tabs = $(".tabs"),
        $span2 = $(".span2"),
        $stn_list = $(".stn_list");
    $tabs.children("div").click(function(){

        if($(this).children().hasClass("terrace")){
            if(!$(this).children().hasClass("tabs_on")){
                 $(".bor_bot").stop().animate({
                    "left":+110
                },
                300);
            }
            $(this).children().addClass("tabs_on").removeClass("tabs_off");
            $(this).siblings("div").children().removeClass("tabs_on").addClass("tabs_off");

        }else{
            if(!$(this).children().hasClass("tabs_on")){
                 $(".bor_bot").stop().animate({
                    "left":10
                },
                300);
            }
            $(this).children().addClass("tabs_on").removeClass("tabs_off");
            $(this).siblings("div").children().removeClass("tabs_on").addClass("tabs_off");
        }
        var $tti = $tabs.children("div").index(this);
        if($tti==0){
            $stn_list.children("div").eq($tti).addClass("bor");
        }else{
            $stn_list.children("div").removeClass("bor");
        }
        $stn_list.children("div").eq($tti).show().siblings("div").hide();
         $(this).parent().show();
    });
    rightHeight();
     //搜索类目
    $(".publish").click(function(){
        if($(".accordion").is(":hidden")){
            $(this).addClass("publish_on");
            $(this).parent().next().show();
        }else{
            $(this).removeClass("publish_on");
            $(this).parent().next().hide();
        }
    })
   
    $span2.focus(function(){
        $(this).addClass("pri_blue");
    });
    $span2.blur(function(){
        $(this).removeClass("pri_blue");
    });
    //end 搜索类目
    
   //批量导入
    $(".checkbox").click(function(){
        if($(this).attr("checked") == undefined){
            $(".checkbox1").attr("checked",false);
        }
        if($(this).attr("checked") == "checked"){
            $(".checkbox1").attr("checked","checked");
            $(".checkbox1:disabled").attr("checked",false);
        }
    })
    $("input[name='checkbox1']").each(function(){
        if($(this).attr("disabled")=="disabled"){
            $(this).parent().parent().children().find($("input[name='checkbox2']")).attr("disabled","disabled");
        }
    })
    var checklen = $(".checkbox1").length;
    if($(".checkbox1:disabled").length == checklen){
        $(".checkbox").attr("disabled","disabled");
    }else{
        $(".checkbox").attr("disabled",false);
    }
    $("input[name='checkbox1']").each(function(){
        if($(this).attr("disabled")=="disabled"){
            $(this).parent().parent().children().find($("input[name='checkbox2']")).attr("disabled","disabled");
        }
    })
    $("input[name='checkbox2']").click(function(){
        var checklendis = $(this).parent().parent().parent().children().find($("input[name='checkbox2']:checked")).length;
        var check2len = $(this).parent().parent().parent().children().find($("input[name='checkbox2']")).length;
        var check2dis = $(this).parent().parent().parent().children().find($("input[name='checkbox2']:disabled")).length;
        if(checklendis < check2len - check2dis){
            $(this).parents(".tr").children().children(".checkbox1").attr("checked",false);
        }else{
            $(this).parents(".tr").children().children(".checkbox1").attr("checked","checked");
        }
    })
    $(".checkbox1").click(function(){
        var checklen = $("input[name='checkbox1']").length;
        var checkdis = $("input[name=checkbox1]:disabled").length;
        if($("input[name='checkbox1']:checked").length < checklen - checkdis){
            $(".checkbox").attr("checked",false);
        }else{
            $(".checkbox").attr("checked","checked");
        }
    })
    $("input[name='checkbox1']").click(function(){
        if($(this).attr("checked") == undefined){
            $(this).parent().parent().children().find($("input[name='checkbox2']")).attr("checked",false);
        }else{
            $(this).parent().parent().children().find($("input[name='checkbox2']")).attr("checked","checked");
            $(".checkbox1:disabled").attr("checked",false);
        }

    })

    //end 批量导入
    $(".box_span").click(function(){
        $(".imgd").show();
        $(".bgc").show();
    //此处演示关闭
    setTimeout(function(){
        $(".imgd").hide();
        $(".bgc").hide();
    }, 2000);
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '150px'],
            shift: 2,
            skin: 'layerBtn2',
            btn: ['确 定','取 消'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>确定导入商品资料吗？</div>"
        })  

    })

    //end 批量导入
    
    //导入
    $(".stn_lead").click(function(){
        $(".agre").click(function(){
            layer.closeAll();
        });
        $(".err").click(function(){
            layer.closeAll();
        });
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1,
            skin: 'layerBtn2',
            area: ['380px', '150px'],
            content: $(".lead")
        })
    })
    //end导入

    //输入商品名称或商品编号进行搜索
    var $infomaInput = $(".infomaInput");
    $infomaInput.focus(function(){
        if($(this).val() == "输入商品名称/商品条码"){
            $(this).val("");
        }
    });
    $infomaInput.blur(function(){
        if($(this).val() == ""){
            $(this).val("输入商品名称/商品条码");
        }
    });
    //end 输入商品名称或商品编号进行搜索

    //表格奇偶行变色
    $(".stn_table .tr:even").addClass("stn_td2");
    $(".stn_table .tr:odd").addClass("stn_td1"); 
    $(".stn_table tr:first").addClass("stn_th").removeClass("stn_td1");
    $(".for_table .tr:even").addClass("stn_td2");
    $(".for_table .tr:odd").addClass("stn_td1"); 
    $(".for_table tr:first").addClass("stn_th").removeClass("stn_td1");
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
    
    
   
    //删除
    $(".stn_del").click(function(){
        var  $del_tr = $(this).parent().parent();
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, 
            area: ['400px', '150px'],
            shift: 2,
            skin: 'layerBtn2',
            btn: ['确 定', '取 消'],
            content: "<div class='layer_de'>您确定要删除该商品吗？<br>删除后将放入回收站列表中，请谨慎操作！</div>",
            yes:function(index){
                $del_tr.remove();
                layer.close(index);
            }
        })  
    })
    //end删除

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
            content: "<div class='layer_war'><img src='images/common/lay3.png'>确定对该商品进行下架操作？</div>"
        })          
    })
    //end 下架按钮弹出信息提示
    
    //字数多了隐藏出现...
        var $dd_a = $(".snorms_table .stn_p14");
        $dd_a.each(function(){
            var cpstr = $(this).html();
            if(cpstr.length>10){
                $(this).html(cpstr.substr(0,10)+"…");
            }
        })
   
    //上架按钮弹出信息提示
    $(".stn_sj").click(function(){
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, 
            area: ['380px', '150px'],
            shift: 2,
            skin: 'layerBtn1',
            btn: ['确 定'],
            content: "<div class='layer_war'><img src='images/common/lay3.png'>您还没有定价，请定价后再上架</div>"
        })     
    })
    //end 上架按钮弹出信息提示       
    
    
    //点击零售（批发）价弹出改价弹窗
    var $lsclick = $(".stn_table").find(".lsclick"),
        $pflsclick = $(".stn_table").find(".pfclick");
    var money = /^[0-9]+(.[0-9]{1,2})?$/; //输入两位小数的数字，金钱格式
    var $J_ls = $(".J_ls"),
        $J_pf = $(".J_pf"),
        J_ls,
        J_pf;
        
    $lsclick.on('click', function(e) {
        var pril = $(this).text();
        var prip = $(this).parent().next().children().text();
        $J_ls.val(pril);
        $J_pf.val(prip);
        e.preventDefault();
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, 
            area: '380px',
            shift: 2,
            skin: 'layerBtn1',
            btn: ['确 定'],
            content: $(".lsp_layer"),
            yes:function(index){
                J_ls = checkReg($J_ls,"请输入零售价","请输入正确的零售价",money);
                J_pf = checkReg($J_pf,"请输入批发价","请输入正确的批发价",money);
                if (J_ls && J_pf) {
                    layer.close(index);
                    return true;
                } else{
                    return false;
                }
            }
        })          
    })      
    $pflsclick.on('click', function(e) {
        var pril = $(this).parent().prev().children().text();
        var prip = $(this).text();
        $J_ls.val(pril);
        $J_pf.val(prip);
        e.preventDefault();
        layer.open({
            type: 1,
            title: false,
            closeBtn: 1, 
            area: '380px',
            shift: 2,
            skin: 'layerBtn1',
            btn: ['确 定'],
            content: $(".lsp_layer"),
            yes:function(index){
                J_ls = checkReg($J_ls,"请输入零售价","请输入正确的零售价",money);
                J_pf = checkReg($J_pf,"请输入批发价","请输入正确的批发价",money);
                if (J_ls && J_pf) {
                    layer.close(index);
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
            if(!preg.test($val) || $val == "0" || $val == "0.0" || $val == "0.00"){
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
    
	//平台选择类目删除按钮
	$(".publish").mouseover(function(){
		if($(this).val() != "全部"){
			$(this).next().show();
		}
	});
	$(".publish").mouseout(function(){
		$(this).next().hide();
	});
	$(".del").mouseover(function(){
		$(this).show();
	})
	$(".del").click(function(){
		$(this).prev().val("全部")
	})
	//end 平台选择类目删除按钮    


})